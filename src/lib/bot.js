

import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";

import { create } from "node:domain";
import { fetchFromNeliti } from "@/utils/tools/pdf-scrapper";
import { fetchGoogle } from "@/utils/tools/google-search";
import { isLogin } from "./auth";
import { cosineSimilarity, getEmbedding } from "./bot/utils";
import { buildResponseContext } from "./bot/context";
import { saveChat } from "./bot/save";
import { fetchPage, fetchPageWithJS } from "@/utils/tools/news";
import { base_url, model } from "./config";
import pLimit from "p-limit";
import { re } from "mathjs";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export const runtime = "nodejs"; // ⬅️ penting untuk streaming


export async function shouldUseTools(userInput, current_time, model = model) {
    const login = await isLogin();

    if (!login) {
        return {
            error: "Belum login"
        }
    }
    const context = {
        role: "system",
        content: `determine whether you should use tools for the given user needs.

                {
                    "use_tools": true | false,
                    "tools": "scientific-journal-search | web-search | fetch-news-today"
                }

                **Answer only with this json format.**

                ## rules
                - build the best google search query fot the given context. if needed add special query like site:* since:* filetype:* and any other query. answer only with the query, no other narration.

                ## additional information:
                - current time: ${current_time}
                - your respond are related to user language, narrow the scope to that.
                - indonesian gov site are usually go.id

                ## Berikut pedoman penggunaan tools:
                - Gunakan **scientific-journal-search** **hanya untuk mencari artikel ilmiah** atau jurnal.
                - Gunakan **web-search** jika pengguna membutuhkan informasi terkini, pencarian spesifik, atau konten dari situs tertentu.
                - Gunakan **fetch-news-today** jika pengguna hanya ingin melihat *daftar berita terbaru*.
                - Jika menggunakan tools, masukkan juga kata kunci yang digunakan dalam kolom **keywords**.

                Contoh situasi penggunaan tools:
                - Jika pengguna menanyakan *"jurnal tentang penerapan AI dalam pertanian"*, maka gunakan **scientific-journal-search**.
                - Jika pengguna meminta *"berita terbaru tentang teknologi Indonesia"*, gunakan **web-search** atau **fetch-news-today**.
                - Jika pengguna hanya ingin ngobrol santai atau menanyakan waktu, cukup jawab langsung tanpa tools.
                - Gunakan web-search untuk tetap update ke informasi sekarang
                `,
    }
    const messages = [context, { role: "user", content: userInput }];
    const res = await client.chat.completions.create({
        model: model,
        messages,
        response_format: { type: "json_object" },
    });

    return res.choices[0].message.content;
}

export class ChatBot {
    constructor(model = model) {
        this.model = model;
        this.messages = [
            {
                role: "system",
                content: "",
            },
        ];
    }

    async getSimilarChats(userInput, userId, threshold = 0.96, topK = 5) {
        // 1. Get user input embedding
        const inputEmbedding = await getEmbedding(userInput, this.model);

        // 2. Get past chats by user that have embeddings
        const chats = await prisma.chatHistory.findMany({
            where: {
                user_id: userId,
                embedding: { not: null },
                role: "user"
            },
            select: {
                id: true,
                role: true,
                content: true,
                embedding: true,
                parent: true,
            }
        });

        // 3. Compute similarity
        const withScores = chats.map(chat => {
            const score = cosineSimilarity(inputEmbedding, chat.embedding);
            return { ...chat, score };
        });

        // 4. Filter with similarity > threshold
        const filtered = withScores.filter(c => c.score >= threshold);

        // 5. Sort by similarity and pick top 5
        const topRelevant = filtered
            .sort((a, b) => b.score - a.score)
            .slice(0, topK);

        // 6. Randomly choose 1
        const picked = topRelevant[Math.floor(Math.random() * topRelevant.length)];

        if (!picked) return [];

        // 7. Get full thread by parent (including the picked message)
        const thread = await prisma.chatHistory.findFirst({
            where:
            {
                parent: picked.id
            },
            orderBy: { id: 'asc' },
            select: {
                role: true,
                content: true
            }
        });

        return thread;
    }

    rebuildContext(context) {
        this.messages[0].content = context;
    }



    async getRelevantChats(query, topN = 10, scope = -1) {
        const queryEmb = await getEmbedding(query, this.model);
        const rows = await prisma.chatHistory.findMany({
            where: { role: "user", session_id: scope, status: "success" },
            //add where row status == success
            orderBy: { created_at: 'asc' },
        });


        const similarities = [];
        const seen = new Set();

        for (const row of rows) {
            const score = cosineSimilarity(queryEmb, row.embedding);
            if (score < 0.75 && row.token > 2000) continue;
            console.log(row.content, score)
            if (!seen.has(row.content)) {
                seen.add(row.content);
                similarities.push({ score, role: row.role, content: row.content, id: row.id });
            }
        }

        similarities.sort((a, b) => b.score - a.score);

        // add the last 5 value from rows
        rows.slice(-5).forEach(row => {
            if (!seen.has(row.content)) {
                seen.add(row.content); // mark as seen
                similarities.push({
                    score: 0,
                    role: row.role,
                    content: row.content,
                    id: row.id
                });
            }
        });

        if (rows[0]) {
            const firstRow = rows[0];
            if (!seen.has(firstRow.content)) {
                seen.add(firstRow.content); // mark as seen
                similarities.unshift({
                    score: 0,
                    role: firstRow.role,
                    content: firstRow.content,
                    id: firstRow.id
                });
            }
        }

        const finalContext = [];
        for (const item of similarities.slice(0, topN)) {
            finalContext.push({ role: item.role, content: item.content });
            const assistantReply = await prisma.chatHistory.findFirst({
                where: {
                    parent: item.id,
                    role: "assistant",
                },
                orderBy: { id: "asc" },
            });
            if (assistantReply) {
                finalContext.push({ role: assistantReply.role, content: assistantReply.content });
            } else {
            }
        }

        return finalContext;
    }



    // async usingTools(tool, keywords, query) {
    //     if (tool === "scientific-journal-search") {
    //         const result = await fetchFromNeliti(keywords);
    //         return { content: "", data: result };
    //     } else if (tool === "web-search") {
    //         let results = []
    //         const googled = await fetchGoogle(query)

    //         const fetches = googled.map(result => {
    //             const uri = `${base_url}/api/engine/search?url=${encodeURIComponent(result.link)}`
    //             console.log(uri)
    //             return fetch(uri)
    //         }

    //         );

    //         const responses = await Promise.all(fetches);
    //         const pages = await Promise.all(responses.map(res => res.json()));

    //         for (const page of pages) {
    //             console.log(page?.link, page?.paragraphs?.length)
    //             const paragraph = page?.paragraphs;
    //             if (paragraph?.length > 2) {
    //                 results.push({ content: "", data: page });
    //             }
    //         }



    //         return results;
    //     }

    //     return null;
    // }

    fetchWithTimeout = async (url, timeout = 10000) => {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        try {
            const res = await fetch(url, { signal: controller.signal });
            return await res.json();
        } catch (e) {
            console.warn("Fetch failed or timed out:", url);
            return null;
        } finally {
            clearTimeout(id);
        }
    }

    withGlobalTimeout = async (promise, timeout = 20000) => {
        return Promise.race([
            promise,
            new Promise(resolve => setTimeout(() => resolve("TIMEOUT"), timeout))
        ]);
    }

    async usingTools(tool, keywords, query, source = null) {
        const baseUrl = process.env.BASE_URL || "http://localhost:3000";

        if (tool === "scientific-journal-search") {
            const result = await fetchFromNeliti(keywords);
            return { content: "", data: result };
        } else if (tool === "web-search") {
            const googled = await fetchGoogle(query);
            console.log(googled)
            const results = [];

            const limit = pLimit(5); // Maksimum 3 concurrent

            try {
                const tasks = googled.map(result => limit(async () => {
                    if (results.length >= 4 || !result.link || result.link.includes("reddit.com")) return;

                    let paragraph = result?.paragraphs;
                    let rows = result?.rows;

                    if ((paragraph?.length || 0) > 2 || (rows?.length || 0) > 1) {
                        results.push({ content: "", data: result });
                        return;
                    }

                    console.log("Trying JS fetch for:", result.link);
                    const jsUrl = `${baseUrl}/api/engine/search?url=${encodeURIComponent(result.link)}`;
                    const sr = await this.fetchWithTimeout(jsUrl, 10000);
                    if (!sr) return;

                    paragraph = sr?.paragraphs;
                    rows = sr?.rows;

                    if ((paragraph?.length || 0) > 2 || (rows?.length || 0) > 1) {
                        results.push({ content: "", data: sr });
                    }
                }));

                // Batasi waktu total jadi 20 detik (misalnya)
                const resultSet = await this.withGlobalTimeout(Promise.all(tasks), 20000);
                if (resultSet === "TIMEOUT") {
                    console.warn("Search timed out globally.");
                }

                return results;
            } catch (e) {
                console.log(e)
                return {
                    data: [
                        "Terjadi error pada tools. Tidak ada informasi yang didapatkan"
                    ]
                }
            }
        } else if (tool === "fetch-page") {
            const link = "https://" + source.split("https://").slice(-1)
            const jsUrl = `${baseUrl}/api/engine/search?url=${encodeURIComponent(link)}`;
            console.log("[fetch-page] Final API URL:", jsUrl)
            const sr = await this.fetchWithTimeout(jsUrl, 10000);
            if (!sr) {
                return { data: ["No valid data returned"] };
            }

            return {
                data: sr,
            }
        } else if (tool === "image-search") {
            try {
                const imageUrl = `${baseUrl}/api/engine/image?q=${encodeURIComponent(query)}`
                const imageResult = await this.fetchWithTimeout(imageUrl, 10000);
                return {
                    data: imageResult,
                }
            } catch (e) {
                return {
                    data: "Terjadi error ketika fetching gambar: " + e.message,
                }
            }

        } else {
            if (tool === "video-search") {
                const video_link = `${baseUrl}/api/engine/google?q=${encodeURIComponent(
                    query +
                    " site:youtube.com OR site:vimeo.com OR site:dailymotion.com OR site:facebook.com OR site:instagram.com OR site:tiktok.com"
                )}`;
                const video_result = await this.fetchWithTimeout(video_link, 10000);
                console.log(video_result);
                const result = video_result.map(o => ({
                    ...o
                    // thumbnail: o?.pagemap?.cse_thumbnail[0]?.src | "not-found"
                }));

                return {
                    data: result,
                };

            }
        }
        return null;
    }
    async ask(userInput, user = "guest", config = {
        scope: -1, additionalContext: "", userId: -1, chatType: 0
    }) {
        this.messages[0].content = buildResponseContext(user, config.additionalContext, config.current_datetime);


        const question = await saveChat("user", { pesan: userInput, tools: config.tools }, config, null);

        const relevantChats = await this.getRelevantChats(userInput, 10, config.scope);

        const messages = [this.messages[0], ...relevantChats, { role: "user", content: userInput }];

        const response = await client.chat.completions.create({
            model: this.model,
            messages,
            response_format: { type: "json_object" },
        });
        const data = JSON.parse(response.choices[0].message.content);
        const keywords = data.web_search_query

        console.log(data)

        let chained = { data: [] }
        if (data.tools !== "null" || data.tools !== null) {
            chained = await this.o(data.tools, data.keywords, userInput, config.current_datetime);
        }

        if (keywords) {
            this.o("web-search", keywords, `sambungan untuk respond kamu sebelumnya: ${data.pesan}`, config.current_datetime)
        }

        const answer = await saveChat("assistant", data, config, question.id, chained?.data || null);
        // console.log(answer)

        return { question, answer };
    }

    async askWithoutSave(userInput, scope = -1, user = "guest", additionalContext = "", userId = -1, chatType = 0, current_datetime) {
        const context = {
            role: "system",
            content: `give the best title for given context, only answer with title, no narration. your respond format title*{title}
            put the respond in **pesan**, dont change json format, answer only in json.

            {
                pesan: "only answer in this json"
            }
            `
        }
        const relevantChats = await this.getRelevantChats(userInput, 10, scope);
        const messages = [context, ...relevantChats, { role: "user", content: userInput }];
        const response = await client.chat.completions.create({
            model: this.model,
            messages,
            response_format: { type: "json_object" },
        });
        const data = JSON.parse(response.choices[0].message.content);
        // console.log(data)
        const answer = { ...data };
        return answer;

    }
}

import OpenAI from "openai";
import { NextResponse } from "next/server";
import { ChatBot } from "@/lib/bot";
import { isLogin } from "@/lib/auth";
import { saveChat } from "@/lib/bot/save";
import { buildMetadataContext, buildResponseContext } from "@/lib/bot/context";
import { usingTOols } from "@/lib/bot/tools";

const bot = new ChatBot("gpt-4o-mini");
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const runtime = "nodejs";

export async function POST(req) {
    const payload = await isLogin();

    if (!payload.id) {
        return NextResponse.json({ error: "Missing or invalid token from api-chat" }, { status: 401 });
    }

    try {
        let { message: userInput, user, config } = await req.json();
        const userId = payload.id;
        const metadata = JSON.parse(config.metadata.data)


        console.log("Preparing TextEncoder...")
        const encoder = new TextEncoder();
        let fullResponse = "";

        console.log("Building Context...")
        let additional = `- Your previous response:\n- Question: ${userInput}\n\n- Answer: ${metadata.pesan}\n\n Answer related to the previous response.`;

        if (metadata.tools) {
            additional += "\n- You previously used toosl: " + metadata.tools + "\n- Just welcome the user in this response"
        }

        console.log(metadata)
        config = { ...config, userId }

        console.log("Getting Relevant Chats...")
        const relevantChats = await bot.getRelevantChats(userInput, 10, config.scope);

        const messages = [bot.messages[0], ...relevantChats, {
            role: "user",
            content: userInput
        }];

        const combinedMessage = [...messages]
        console.log("Storing Question...")
        console.log("Done storing querstion");


        let chained = [];
        if (metadata.tools !== "null" || metadata.tools !== null) {
            chained = await bot.usingTools(metadata.tools, metadata.keywords, metadata.web_search_query);
            if (metadata.tools === "web-search" && chained) {
                console.log(chained)
                additional += "\n- This is the processed tools data, tambahkan summary lengkap   dari data ini di responmu";
                additional += "\n- Masukkan gambar ke markdown jika di data ada link gambar\n- Masukkan setiap sumber ke dalam summary\n"
                for (const d of chained) {
                    const summary = summarizeParagraphs(d.data?.paragraphs);
                    additional += `-${d.data.url}: ${summary || ""}\n\n`;
                }
            } else if (metadata.tools === "scientific-journal-search") {
                additional += "\n- This is the processed tools data, tambahkan summary lengkap   dari data ini di responmu:" + JSON.stringify(chained.data);

            }
        }

        console.log("Getting Respond...");
        console.log(additional)
        bot.rebuildContext(buildResponseContext(user, config.current_datetime, additional));
        const response = await chatWithoutJSON(bot, messages);

        const question = await saveChat("user", { pesan: userInput, tools: config.tools, messages: messages }, config, null);

        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of response) {
                    const content = chunk.choices?.[0]?.delta?.content || "";
                    fullResponse += content;
                    controller.enqueue(encoder.encode(content));
                }

                await saveChat("assistant", {
                    pesan: fullResponse, tools: config.tools, messages: [
                        ...combinedMessage, { role: "assistant", content: fullResponse }
                    ]
                }, { ...config, metadata }, question.id, chained);
                if (metadata.tools === "scientific-journal-search") {
                    const chainedMessage = "[CHAINED] " + JSON.stringify(chained);
                    controller.enqueue(encoder.encode(chainedMessage));
                }
                controller.close();
            }
        });


        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Cache-Control": "no-cache",
            }
        });

    } catch (err) {
        console.error("Chat API Error:", err);
        return NextResponse.json({ error: "Failed to process chat" }, { status: 500 });
    }
}


async function chatWithoutJSON(bot, messages) {
    try {
        const response = await client.chat.completions.create({
            model: bot.model,
            messages,
            stream: true,
        });
        return response;
    } catch (e) {
        console.log(e)
        return {
            choices: [
                {
                    content: "Failed processing respond"
                }
            ]
        }
    }

}

function summarizeParagraphs(paragraphs, portion = 0.2) {
    if (!Array.isArray(paragraphs) || paragraphs.length === 0) return "";

    // Filter hanya teks asli, bukan URL gambar
    const textsOnly = paragraphs.filter(p =>
        typeof p === 'string' &&
        !p.startsWith("http") &&
        p.length > 50 &&
        !/debug|select|insert|update|\.php/i.test(p)
    );

    const imageOnly = paragraphs
        .filter(img =>
            /\.(jpg|jpeg|png|gif|webp|bmp|svg|tiff|ico|avif)(\?.*)?$/i.test(img)
        )
        .join("\n - ");

    const total = textsOnly.length;
    if (total === 0) return "";

    const take = Math.max(1, Math.floor(total * portion));

    const start = textsOnly.slice(0, take);
    const middleStart = Math.floor((total - take) / 2);
    const middle = textsOnly.slice(middleStart, middleStart + take);
    const end = textsOnly.slice(total - take);

    const combined = [...start, ...middle, ...end];

    // Gabungkan dan ringkas tiap paragraf berdasarkan kalimat
    const sentences = combined
        .join(" ")
        .split(".")
        .map(s => s.trim())
        .filter(s => s.length > 20 && !s.startsWith("http"));

    // Gabungkan ulang jadi satu ringkasan
    return sentences.join(". ") + (sentences.length ? "." : "") + imageOnly;
}


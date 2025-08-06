import { ChatBot } from "@/lib/bot";
import { model } from "@/lib/config";
import OpenAI from "openai";

const bot = new ChatBot(model);
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Your custom GPT wrapper
async function chat(bot, messages) {
    try {
        const res = await client.chat.completions.create({
            model: bot.model,
            messages,
            stream: false, // Stream = false, because you're streaming the result manually
        });

        return res.choices?.[0]?.message?.content || "No content";
    } catch (e) {
        console.error("Error:", e);
        return "Failed to generate response.";
    }
}

export async function GET() {
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
        async start(controller) {
            const inputMessages = [
                [{ role: "user", content: "What is the capital of France?" }],
                [{ role: "user", content: "What is the square root of 144?" }],
                [{ role: "user", content: "Who painted the Mona Lisa?" }],
                [{ role: "user", content: "What is the boiling point of water?" }],
                [{ role: "user", content: "Define photosynthesis." }],
                [{ role: "user", content: "Who discovered gravity?" }],
                [{ role: "user", content: "What's 10 + 15?" }],
                [{ role: "user", content: "What's the largest planet?" }],
                [{ role: "user", content: "Translate 'hello' to Spanish." }],
                [{ role: "user", content: "What does HTML stand for?" }],
            ];

            let index = 0;
            // pseudo-code inside your controller.start
            for (const messages of inputMessages) {
                const response = await client.chat.completions.create({
                    model: bot.model,
                    messages,
                    stream: true,
                });

                let accumulated = "";

                for await (const chunk of response) {
                    accumulated += chunk.choices?.[0]?.delta?.content || "";
                    controller.enqueue(encoder.encode(JSON.stringify({
                        part: index + 1,
                        question: messages[0].content,
                        partial: accumulated,
                    }) + "\n"));
                }

                index++;
            }


            controller.close();
        },
    });

    return new Response(stream, {
        headers: {
            "Content-Type": "application/json",
            "Transfer-Encoding": "chunked",
        },
    });
}

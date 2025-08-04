import OpenAI from "openai";
import { NextResponse } from "next/server";
import { ChatBot } from "@/lib/bot";
import { isLogin } from "@/lib/auth";
import { buildMetadataContext, buildResponseContext } from "@/lib/bot/context";
import { model } from "@/lib/config";

const bot = new ChatBot(model);
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const runtime = "nodejs";

export async function POST(req) {
    const payload = await isLogin();

    if (!payload.id) {
        return NextResponse.json({ error: "Missing or invalid token from api-chat" }, { status: 401 });
    }

    try {

        let { message: userInput, user, config, last_chat } = await req.json();
        const userId = payload.id;

        console.log(last_chat)

        bot.rebuildContext(buildResponseContext(user, config.current_datetime));
        config = { ...config, userId }

        const additional = userInput
        const metadataMessage = [{ role: "system", content: buildMetadataContext(user, config.current_datetime, additional) }, ...last_chat || [], { role: "user", content: userInput }];

        console.log("Done storing querstion");
        console.log(userInput)
        const metadata = await chatWithJSON(bot, metadataMessage);
        const data = metadata.choices[0].message.content;
        return NextResponse.json({
            data
        }, { status: 200 })

    } catch (err) {
        console.error("Chat API Error:", err);
        return NextResponse.json({ error: "Failed to process chat" }, { status: 500 });
    }

}


async function chatWithJSON(bot, messages) {
    // console.log("============================================")
    try {
        console.log("chatWithJSON")
        const response = await client.chat.completions.create({
            model: bot.model,
            messages,
            response_format: { type: "json_object" },
        });
        // console.log("============================================DONE")
        console.log("DONE chatWithJSON")
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


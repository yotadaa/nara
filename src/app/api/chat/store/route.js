import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { ChatBot } from "@/lib/bot";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ALGORITHM = process.env.JWT_ALGORITHM || "HS256";
const bot = new ChatBot("gpt-4o-mini");

export async function POST(req) {
    const cookieStore = await cookies(); // HARUS pakai await
    const accessToken = cookieStore.get("access_token")?.value;

    if (!accessToken) {
        return NextResponse.json({ error: "Missing or invalid token" }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { role, content, scope } = body;

        const response = await bot.saveChat(role, content, scope || -1);
        return NextResponse.json(response);
    } catch (err) {
        console.error("Chat Store Error:", err);
        return NextResponse.json({ error: "Failed to save chat" }, { status: 500 });
    }
}

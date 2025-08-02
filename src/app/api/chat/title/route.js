import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { ChatBot } from "@/lib/bot";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ALGORITHM = process.env.JWT_ALGORITHM || "HS256";
const bot = new ChatBot("gpt-4o-mini");

export async function PUT(req) {
    const cookieStore = await cookies(); // HARUS pakai await
    const accessToken = cookieStore.get("access_token")?.value;

    if (!accessToken) {
        return NextResponse.json({ error: "Missing or invalid token" }, { status: 401 });
    }

    try {
        const payload = jwt.verify(accessToken, JWT_SECRET, { algorithms: [JWT_ALGORITHM] });
        const userId = payload.id;
        if (!userId) {
            return NextResponse.json({ error: "Invalid token payload" }, { status: 401 });
        }

        const body = await req.json();
        const { content, session_id } = body;

        const result = await bot.askWithoutSave(content, session_id, "system", "", parseInt(userId), -1);
        console.log(result)
        return NextResponse.json(result);
    } catch (err) {
        console.error("Update Session Title Error:", err);
        return NextResponse.json({ error: "Failed to update session title" }, { status: 500 });
    }
}

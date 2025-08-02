import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ALGORITHM = process.env.JWT_ALGORITHM || "HS256";

export async function POST(req) {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
        return NextResponse.json({ error: "Missing or invalid token" }, { status: 401 });
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET, {
            algorithms: [JWT_ALGORITHM],
        });

        const userId = payload.id;
        if (!userId) {
            return NextResponse.json({ error: "Invalid token payload" }, { status: 401 });
        }

        // 🧾 Get session_id from request body
        const body = await req.json();
        const sessionId = body.session_id;

        if (!sessionId) {
            return NextResponse.json({ error: "Missing session_id in request" }, { status: 400 });
        }

        console.log("Getting last chat history")
        // ✅ Get chat history for this session_id
        const chatHistory = await prisma.chatHistory.findMany({
            where: {
                session_id: sessionId,
            },
            orderBy: {
                created_at: "asc",
            },
        });

        return NextResponse.json(chatHistory);
    } catch (err) {
        console.error("Failed to get chat history:", err);
        return NextResponse.json({ error: "Unauthorized or invalid request" }, { status: 401 });
    }
}

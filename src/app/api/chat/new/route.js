import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ALGORITHM = process.env.JWT_ALGORITHM || "HS256";
export const runtime = "nodejs"; // ⬅️ PENTING

export async function POST() {
    const cookieStore = await cookies(); // HARUS pakai await
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
        return NextResponse.json({ error: "Missing or invalid token" }, { status: 401 });
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET, { algorithms: [JWT_ALGORITHM] });
        console.log(payload)
        const userId = payload.id;
        if (!userId) {
            return NextResponse.json({ error: "Invalid token payload from api-chat-new" }, { status: 401 });
        }
        const id = uuidv4();
        console.log(userId)
        const newSession = await prisma.sessionChat.create({
            data: {
                uuid: id,
                user_id: parseInt(userId),
                title: "Not Yet Defined",
                status: "active",
            },
        });
        const response = {
            id: newSession.id,
            uuid: newSession.uuid,
            title: newSession.title,
            status: newSession.status,
        }
        console.log(response)
        return NextResponse.json(response);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "Token is invalid or expired" }, { status: 401 });
    }
}

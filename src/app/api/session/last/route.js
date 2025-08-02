import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ALGORITHM = process.env.JWT_ALGORITHM || "HS256";

export async function POST() {
    const cookieStore = await cookies(); // tidak perlu pakai `await` (ini bukan promise)
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

        // 🔍 Get all sessions for this user
        const sessions = await prisma.sessionChat.findMany({
            where: {
                user_id: userId,
            },
            orderBy: {
                updated_at: "desc", // optional
            },
        });

        return NextResponse.json(sessions);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Token is invalid or expired" }, { status: 401 });
    }
}

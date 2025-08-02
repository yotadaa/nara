import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ALGORITHM = process.env.JWT_ALGORITHM || "HS256";

export async function PUT(req, { params }) {
    const cookieStore = await cookies(); // HARUS pakai await
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
        return NextResponse.json({ error: "Missing or invalid token" }, { status: 401 });
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET, { algorithms: [JWT_ALGORITHM] });
        const userId = payload.id;
        if (!userId) {
            return NextResponse.json({ error: "Invalid token payload" }, { status: 401 });
        }

        const { session_id } = await params;
        const body = await req.json();
        const { title, status } = body;

        console.log("data: ", {
            uuid: session_id,
            user_id: parseInt(userId),
        })
        const sessionChat = await prisma.sessionChat.findFirst({
            where: {
                uuid: session_id,
                user_id: parseInt(userId),
            },
        });

        if (!sessionChat) {
            return NextResponse.json({ error: "Session not found or not authorized from chat-update" }, { status: 404 });
        }
        console.log("update: ")
        const updatedSession = await prisma.sessionChat.update({
            where: { uuid: session_id },
            data: {
                ...(title && { title }),
                ...(status && { status }),
            },
        });

        return NextResponse.json({
            id: updatedSession.id,
            title: updatedSession.title,
            status: updatedSession.status,
            updated_at: updatedSession.updatedAt,
        });
    } catch (err) {
        console.error("Update Session Title Error:", err);
        return NextResponse.json({ error: `Token is invalid or expired from chat-update: ${err}` }, { status: 401 });
    }
}

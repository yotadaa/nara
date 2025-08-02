import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_ALGORITHM = process.env.JWT_ALGORITHM || "HS256";

export async function GET() {
    // ✅ Ambil token dari cookie
    const cookieStore = await cookies(); // HARUS pakai await
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
        return NextResponse.json({ error: "Missing or invalid token" }, { status: 401 });
    }

    try {
        // ✅ Decode JWT
        const payload = jwt.verify(token, JWT_SECRET, {
            algorithms: [JWT_ALGORITHM],
        });
        const userId = payload.id; // Sama dengan `sub` di FastAPI
        if (!userId) {
            return NextResponse.json({ error: "Invalid token payload" }, { status: 401 });
        }

        // ✅ Query user dari database Prisma
        const user = await prisma.user.findUnique({
            where: { id: parseInt(userId) },
            select: {
                id: true,
                username: true,
                email: true,
                full_name: true,
                role: true,
                is_active: true,
                avatar_url: true,
                created_at: true,
                updated_at: true,
                credits: true,
                quota: true,
            },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return NextResponse.json({ error: "Token expired" }, { status: 401 });
        }
        return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
}

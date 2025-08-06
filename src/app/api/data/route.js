// app/api/chat/get-column/route.ts
import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log(body)
        const { id } = body;

        if (!id) {
            return NextResponse.json({ error: 'Missing id or column' }, { status: 400 });
        }

        // Pastikan column valid (opsional: validasi manual agar aman)
        const allowedColumns = ['content', 'createdAt', 'updatedAt', 'userId', 'title']; // contoh

        const chat = await prisma.chatHistory.findFirst({
            where: { id },
        });

        // const result = chat?.[column]; // akses nilai kolom secara dinamis


        if (!chat) {
            return NextResponse.json({ error: 'Chat not found' }, { status: 404 });
        }

        return NextResponse.json({ data: chat });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

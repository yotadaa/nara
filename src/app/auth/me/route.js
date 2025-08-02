// src/app/auth/me/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyJWT } from '@/lib/auth';

export async function GET() {
    const cookieStore = await cookies(); // HARUS pakai await
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    try {
        const payload = verifyJWT(token);
        return NextResponse.json(payload);
    } catch (err) {
        console.error('JWT Verify Error:', err.message);
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
}

import { NextResponse } from 'next/server';

export async function POST() {
    const res = NextResponse.json({ message: 'Logged out successfully' });
    res.cookies.set('access_token', '', { maxAge: 0 });
    return res;
}

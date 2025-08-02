// app/api/search/route.js
import { fetchGoogle } from '@/utils/tools/google-search';
import { NextResponse } from 'next/server';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');


    if (!query) {
        return NextResponse.json({ error: 'Missing query' }, { status: 400 });
    }


    try {
        const data = await fetchGoogle(query)

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
    }
}

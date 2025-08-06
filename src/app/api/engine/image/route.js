import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (!query) {
        return NextResponse.json({ error: "Missing query" }, { status: 400 });
    }

    const apiKey1 = process.env.GOOGLE_SEARCH_API;
    const cx1 = process.env.GOOGLE_SEARCH_API_CX;

    const apiKey2 = process.env.GOOGLE_SEARCH_API_2;
    const cx2 = process.env.GOOGLE_SEARCH_CX_2;

    const fetchWith = async (key, cx) => {
        const makeUrl = (start) => {
            const url = `https://customsearch.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&searchType=image&as_rights=(cc_publicdomain%7Ccc_attribute%7Ccc_sharealike%7Ccc_nonderived).-(cc_noncommercial)&q=${query}&start=${start}`;
            console.log(url)
            return url;
        }


        const urls = [0, 10, 20, 30].map(makeUrl);

        const responses = await Promise.all(urls.map(url => fetch(url)));
        const datas = await Promise.all(responses.map(res => res.json()));

        // Cek kalau ada yang error (misalnya API quota habis)
        const allFailed = datas.every(data => data.error);
        if (allFailed) throw new Error("All requests failed with this API key");

        const seenSources = new Set();

        const allItems = datas.flatMap(data => data.items || []);
        const filteredItems = allItems.filter(item => {
            if (seenSources.has(item.displayLink)) return false;
            seenSources.add(item.displayLink);
            return true;
        });

        return filteredItems.map(item => ({
            title: item.title,
            htmlTitle: item.htmlTitle,
            imageLink: item.link,
            mime: item.mime,
            source: item.displayLink,
        }));

    };

    try {
        const result = await fetchWith(apiKey1, cx1);
        return NextResponse.json(result);
    } catch (err1) {
        console.warn("Primary API key failed, trying fallback key...", err1);
        try {
            const fallbackResult = await fetchWith(apiKey2, cx2);
            return NextResponse.json(fallbackResult);
        } catch (err2) {
            return NextResponse.json(
                { error: "Both API keys failed", details: err2.message },
                { status: 500 }
            );
        }
    }
}

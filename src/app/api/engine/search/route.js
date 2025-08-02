import * as cheerio from "cheerio";
import { performance } from "perf_hooks";
import { fetchNews, fetchPage, fetchPageWithJS } from "@/utils/tools/news";


export async function GET(req) {
    const start = performance.now();

    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
        return Response.json({ error: "Missing URL parameter" }, { status: 400 });
    }

    try {
        const data = await fetchPageWithJS(targetUrl)
        const end = performance.now();
        const duration = Math.round(end - start);
        console.log("SUccess")
        return Response.json({
            ...data,
            duration_ms: duration
        });
    } catch (err) {
        const end = performance.now();
        const duration = Math.round(end - start);

        return Response.json({
            error: "Failed to fetch or parse HTML",
            detail: err,
            duration_ms: duration
        }, { status: 500 });
    }
}

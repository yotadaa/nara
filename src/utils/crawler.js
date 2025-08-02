import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const visited = new Set();
const pages = [];

export async function crawlAll(seedUrls = [], maxPages = 20, depth = 2) {
    const queue = [...seedUrls.map(url => ({ url, depth }))];

    while (queue.length > 0 && pages.length < maxPages) {
        const { url, depth } = queue.shift();
        if (visited.has(url) || depth <= 0) continue;

        visited.add(url);
        try {
            const res = await fetch(url, { timeout: 5000 });
            const html = await res.text();
            const $ = cheerio.load(html);
            const text = $('body').text().replace(/\s+/g, ' ').trim();
            pages.push({ url, text });

            const links = $('a[href]')
                .map((_, el) => $(el).attr('href'))
                .get()
                .filter((_, el) => {
                    const linkText = $(el).text().toLowerCase();
                    const href = $(el).attr('href');
                    return href?.startsWith('http') && (linkText.includes('genetika') || href.includes('genetika'));
                })
            for (const link of links.slice(0, 10)) {
                queue.push({ url: link, depth: depth - 1 });
            }
        } catch (err) {
            console.error(`Error fetching ${url}:`, err.message);
        }
    }

    return queue;
}

export function getPages() {
    return pages;
}

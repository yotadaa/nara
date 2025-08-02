import axios from "axios";
import https from "https";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export const fetchNews = async (targetUrl) => {

    if (!targetUrl) {
        return {
            error: "Missing URL parameter"
        };
    }

    try {
        const response = await axios.get(targetUrl, {
            httpsAgent,
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
                "Accept-Language": "en-US,en;q=0.9"
            }
        });

        const html = response.data;
        const $ = cheerio.load(html);

        const title = $("title").text().trim();

        const aWithHeadings = [];

        $("a").each((_, el) => {
            const anchor = $(el);
            const href = anchor.attr("href");
            if (!href || href === "#") return;

            const heading = anchor.find("h1, h2, h3, h4, h5, h6").first();
            const textContent = anchor.text().trim();

            if (heading.text().trim().split(" ").length > 0 || textContent.split(" ").length > 5) {
                // console.log(textContent)
                const h = (heading.length > 0 ? heading.text().trim() : textContent)
                if (h.split(" ").length > 5 && !aWithHeadings.find(item => item.href === new URL(href, targetUrl).href))
                    aWithHeadings.push({
                        href: new URL(href, targetUrl).href,
                        heading: h.replace(/^\d{1,2} \w+ \d{4}( \d{2}:\d{2})?/, "") // buang "31 Jul 2025 23:00" di awal
                            .replace(/\d{1,2} (menit|jam|hari|bulan|tahun) yang lalu$/, "") // buang waktu relatif di akhir
                            .replace(/(\d+ (menit|jam|hari) yang lalu)/gi, "")
                            .trim()

                    });
            }
        });
        const data = {
            url: targetUrl,
            title,
            links: aWithHeadings,
        }

        return data
    } catch (err) {
        return {
            error: "Failed to fetch or parse HTML",
            detail: err.message,
        };
    }
}

export const fetchPage = async (targetUrl) => {

    if (!targetUrl) {
        return { error: "Missing URL parameter" };
    }

    try {
        // console.log(targetUrl)
        const response = await axios.get(targetUrl, {
            httpsAgent,
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
                "Accept-Language": "en-US,en;q=0.9"
            }
        });
        const html = response.data;
        const $ = cheerio.load(html);

        // Ambil title
        const title = $("title").text().trim();

        // Ambil semua heading
        const headings = [];
        $("h1, h2").each((i, el) => {
            headings.push($(el).text().trim());
        });

        // Ambil semua paragraf
        const paragraphs = [];
        $("p,li,th,tr").each((i, el) => {
            const text = $(el).text().trim();
            if (text.length > 50) { // filter konten kosong atau pendek
                paragraphs.push(text);
            }
        });



        return {
            url: targetUrl,
            title,
            headings,
            paragraphs,
        };
    } catch (err) {
        console.log(err)
        return {
            error: "Failed to fetch or parse HTML",
            detail: err.message
        }
    }
}




const timeout = (ms) =>
    new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms)
    );

export const fetchPageWithJS = async (url, maxTimeout = 20000) => {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: "new",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        // Manual timeout fallback, race between navigation and timer
        await Promise.race([
            page.goto(url, { waitUntil: "networkidle2", timeout: 15000 }),
            timeout(maxTimeout),
        ]);

        const data = await page.evaluate(() => {
            const safeArea = document.querySelector("main") || document.body;
            const debugToolbar = document.getElementById("toolbarContainer");
            if (debugToolbar) debugToolbar.remove();

            const isValidText = (text) =>
                text &&
                text.length > 50 &&
                !/SELECT|INSERT|UPDATE|DELETE|SHOW|CodeIgniter|APPPATH|FCPATH|BaseConnection|\.php|SYSTEMPATH/i.test(
                    text
                );

            const isValidImage = (src) =>
                src &&
                src.startsWith("http") &&
                !/spinner|logo|icon|search|loader|blank|transparent|wheel/i.test(src);

            const textContent = Array.from(safeArea.querySelectorAll("p, table tr"))
                .map((el) => el.innerText?.trim())
                .filter(isValidText);

            const imageContent = Array.from(safeArea.querySelectorAll("img"))
                .map((img) => img.src?.trim())
                .filter(isValidImage);

            return {
                mode: "js",
                title: document.title,
                headings: Array.from(safeArea.querySelectorAll("h1, h2")).map((h) =>
                    h.innerText.trim()
                ),
                paragraphs: [...textContent, ...imageContent],
            };
        });

        await browser.close();
        return { url, ...data };
    } catch (err) {
        if (browser) await browser.close();
        console.error(`Error fetching ${url}:`, err.message);
        return {
            url,
            error: true,
            detail: err.message,
        };
    }
};


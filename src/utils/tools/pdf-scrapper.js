import puppeteer from 'puppeteer'; // atau 'puppeteer-extra' + stealth kalau perlu
import { writeFile } from 'fs/promises';



export async function downloadPDF(url, filename) {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!res.ok) throw new Error(`Failed to fetch ${url}`);

        const arrayBuffer = await res.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const savePath = path.join(process.cwd(), 'public', 'pdfs', filename);
        await writeFile(savePath, buffer);

        console.log(`✅ Saved: ${filename}`);
    } catch (err) {
        console.log(`❌ Failed download: ${url} - ${err.message}`);
    }
}

export async function fetchFromGaruda(browser, query) {
    console.log("Fetching from Garuda")
    const page = await browser.newPage();
    const url = `https://garuda.kemdikbud.go.id/?q=${encodeURIComponent(query)}`;
    await page.goto(url, { waitUntil: "networkidle2" });

    await page.waitForSelector(".result"); // contoh aja, sesuaikan dengan HTML-nya
    const data = await page.evaluate(() => {
        const items = [];
        document.querySelectorAll("a").forEach((a) => {
            // if (a.href.endsWith(".pdf")) {
            //     items.push({
            //         source: "Garuda",
            //         title: a.textContent.trim().substring(0, 100),
            //         pdf: a.href,
            //     });
            // }
        });
        return items.slice(0, 5);
    });

    await page.close();
    return data;
}

export async function fetchFromNeliti(query) {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    console.log("Fetching from Neliti")
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
        '(KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    ); await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, 'webdriver', {
            get: () => false,
        });
    });
    await page.setJavaScriptEnabled(true);
    await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => false });
    });
    try {

        // const url = `https://www.neliti.com/search?q=${encodeURIComponent(query)}`;
        const url = `https://www.neliti.com/search?q=${encodeURIComponent(query)}&year_start=2020&year_end=2025`
        // console.log(url)
        // console.log("Navigating to page...");
        try {
            await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
            // const html = await page.content();
            // console.log(html);
        } catch (err) {
            console.error("Error saat membuka halaman atau mengambil konten:", err.message);
            return [{
                error: err.message
            }]
        } console.log("Page loaded");

        const data = await page.evaluate(() => {
            const results = [];
            const cards = document.querySelectorAll(".result");

            cards.forEach(async (card, i) => {
                // if (i >= 5) return;
                const a = card.querySelector("a");
                const pdf = card.querySelector('.result-btns').querySelector(".result-download").querySelector('a');
                const title = card.querySelector(".search-result-title").textContent.replace(/\s+/g, " ").trim() || "No title";
                const details = card.querySelector(".search-result-details")
                const authors = details?.querySelector('.search-result-authors').textContent.replaceAll("\n", "").trim().split(", ");
                const outherDetails = details?.querySelector('.search-result-other-details')
                const journalTitle = outherDetails.textContent.replaceAll("\n", "").replace(/\s+/g, " ").trim().split("|")[1].split("·")[0].trim()
                const articleType = outherDetails.textContent.replaceAll("\n", "").replace(/\s+/g, " ").trim().split("|")[0].trim()
                // await downloadPDF(pdf.href, `Neliti-${title}-${journalTitle}.pdf`);
                //+ 5 more
                // in authors, there will be one 
                if (articleType === "Journal article")
                    results.push({
                        source: "Neliti",
                        title: title,
                        pdf: pdf.href || null,
                        authors: authors || null,
                        journalTitle: journalTitle,
                        articleType: articleType
                    });
            });

            return results;
        });

        await page.close();
        return data;
    } catch (e) {
        await page.close();

        // await page.close(); // ✨ important
        console.error("Error saat membuka halaman atau mengambil konten:", e.message);
        return [{
            error: e.message
        }]
    } finally {
        // await page.close();

        // await page.close(); // ✨ important
    }

}

export async function fetchFromCore(browser, query) {
    console.log("Fetching from Core")
    const page = await browser.newPage();
    const url = `https://core.ac.uk/search?q=${encodeURIComponent(query)}`;
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const data = await page.evaluate(() => {
        const results = [];
        document.querySelectorAll("a").forEach((a) => {
            if (a.href.includes(".pdf")) {
                results.push({
                    source: "CORE",
                    title: a.textContent.trim().substring(0, 100),
                    pdf: a.href,
                });
            }
        });
        return results.slice(0, 5);
    });

    await page.close();
    return data;
}

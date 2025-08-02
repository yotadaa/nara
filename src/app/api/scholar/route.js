import puppeteer from 'puppeteer'; // atau 'puppeteer-extra' + stealth kalau perlu
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { fetchFromNeliti } from '@/utils/tools/pdf-scrapper';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "kecerdasan buatan";


    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const [neliti] = await Promise.all([
        fetchFromNeliti(browser, query),
    ]);

    await browser.close();

    return NextResponse.json([...neliti]);
}


import { isLogin } from "@/lib/auth";


export async function POST(req) {
    const payload = await isLogin();

    if (!payload.id) {
        return NextResponse.json({ error: "Missing or invalid token from api-chat" }, { status: 401 });
    }

    try {
        let body = await req.json();
        console.log(body)
    } catch (e) {
        console.log(e)
    }
}
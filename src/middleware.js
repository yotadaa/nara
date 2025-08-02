import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import jwt from "jsonwebtoken";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

// Helper untuk verifikasi JWT
async function verifyJWT(token) {
    try {

        const { payload } = await jwtVerify(token, JWT_SECRET);

        return payload;
    } catch (error) {
        console.error("JWT verify failed:", error);
        return null;
    }
}

function isTokenExpired(payload) {
    if (!payload?.exp) return true;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    return payload.exp < currentTimestamp;
}

export async function middleware(req) {
    const cookieStore = await cookies(); // HARUS pakai await
    const token = cookieStore.get("access_token")?.value;
    console.log(token)
    const pathname = req.nextUrl.pathname;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    console.log("current time stamp from middleware: ", currentTimestamp)
    console.log(Date.now())
    console.log(new Date())

    const protectedRoutes = ["/chat"];
    const guestOnlyRoutes = ["/login", "/auth/google/login", "/auth/google/callback"];

    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
        const decoded = token ? await verifyJWT(token) : null;

        if (!decoded) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    if (guestOnlyRoutes.some((route) => pathname.startsWith(route))) {
        const decoded = token ? await verifyJWT(token) : null;

        if (decoded) {
            return NextResponse.redirect(new URL("/chat", req.url));
        }
    }

    return NextResponse.next();
}

// Tentukan route yang akan dicek
export const config = {
    matcher: ["/chat", "/login"],
};

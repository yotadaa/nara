import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Pastikan prisma.js sudah benar
import jwt from "jsonwebtoken";
import axios from "axios";
import { base_url } from "@/lib/config";
import { SignJWT } from "jose";
import { cookies } from "next/headers";


export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    if (!code) {
        return NextResponse.json({ error: "Missing code" }, { status: 400 });
    }

    try {
        // 1. Tukar code dengan token
        const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            grant_type: "authorization_code",
        });

        const { id_token } = tokenRes.data;

        // 2. Verifikasi ID Token
        const googleUser = JSON.parse(
            Buffer.from(id_token.split(".")[1], "base64").toString()
        );

        const { email, name, picture } = googleUser;

        // 3. Simpan ke DB
        let user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            user = await prisma.user.create({
                data: {
                    email,
                    username: email.split("@")[0],
                    full_name: name,
                    avatar_url: picture,
                    hashed_password: "google_oauth",
                    is_active: true,
                },
            });
        }

        // 4. Generate JWT
        const iat = Math.floor(Date.now() / 1000); // BENAR
        const exp = iat + 60 * 60 * 24 * 5;        // expired dalam 5 hari

        console.log("current time stamp from server: ", iat)
        console.log("exp from server: ", exp)
        console.log(Date.now())
        console.log(new Date())
        const token = jwt.sign(
            { id: user.id, email: user.email, iat, exp },
            process.env.JWT_SECRET,
        );

        // 5. Redirect ke Frontend + Set Cookie
        const response = NextResponse.redirect(`${base_url}/chat`);

        console.log("Storing cookies with response.cookies.set")
        console.log("Current environment: ", process.env.NODE_ENV === "production");

        response.cookies.set('access_token', '', {
            maxAge: 0,
            path: '/',
        });

        response.cookies.set("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 5 * 24 * 60 * 60,
            sameSite: "lax", // or "strict" if you want stronger CSRF protection
            path: "/",       // ensure accessible in all routes
        });
        console.log("Response: ", response)
        return response;
    } catch (error) {
        console.error("Google callback error:", error);
        const response = NextResponse.redirect(`${base_url}/login`);
        return response;
    }
}

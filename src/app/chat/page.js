'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import ChatClient from "./client";

export default async function ChatPage() {
    const cookieStore = await cookies(); // HARUS pakai await
    const token = cookieStore.get("access_token")?.value;

    if (!token) {
        return redirect("/login"); // ✅ return lebih jelas
    }

    try {
        const { payload } = await jwtVerify(
            token,
            new TextEncoder().encode(process.env.JWT_SECRET)
        );

        // ✅ Kalau mau kirim payload ke client, bisa dikirim sebagai prop
        return <ChatClient user={payload} />;
    } catch (err) {
        console.error("JWT error:", err.message);
        // do logout in auth/logout
        redirect("/auth/logout");
    }
}

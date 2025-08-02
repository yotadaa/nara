// app/page.tsx (kalau pakai App Router)
// atau pages/index.tsx (kalau pakai Pages Router)
"use client"; // wajib kalau pakai App Router (Next.js 13+)

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // untuk App Router
// gunakan 'next/router' jika masih pakai Pages Router

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/chat");
  }, [router]);

  return null;
}

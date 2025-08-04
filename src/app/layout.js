import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";
import { metadata } from "./metadata";
// import Head from "next/head"; // Optional if using custom tags

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black dark:text-white`}>
        {/* Optional: custom <Head> tags */}
        {/*
        <Head>
          <meta name="theme-color" content="#000000" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        */}
        <GlobalProvider>
          <main>{children}</main>
        </GlobalProvider>
      </body>
    </html>
  );
}

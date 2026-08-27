import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUMIÈRE — Demo Mỹ Phẩm Responsive",
  description: "Website demo bán mỹ phẩm responsive — LUMIÈRE. Skincare, Makeup, Body & Hair. Thuần chay, cruelty-free.",
  openGraph: {
    title: "LUMIÈRE — Demo Mỹ Phẩm",
    description: "Demo website mỹ phẩm responsive hoàn chỉnh — Next.js + Tailwind",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#FFFBF7]">{children}</body>
    </html>
  );
}

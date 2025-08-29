import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mackinac = localFont({
  variable: "--font-mackinac",
  src: [
    { path: "../public/fonts/Mackinac/Mackinac-Book.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Mackinac/Mackinac-Book.woff", weight: "400", style: "normal" },
    { path: "../public/fonts/Mackinac/Mackinac-BookItalic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/Mackinac/Mackinac-BookItalic.woff", weight: "400", style: "italic" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Health FE",
  description: "Health71 – Landing UI demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${mackinac.variable} antialiased min-h-screen bg-gradient-to-b from-[#0b1220] via-[#0a0f1a] to-[#0b0f17] text-white`}>
        {children}
      </body>
    </html>
  );
}

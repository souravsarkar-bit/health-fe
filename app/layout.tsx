import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
 
const inter = Inter({ subsets: ['latin'] });


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
      <body className={`${inter.className} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}

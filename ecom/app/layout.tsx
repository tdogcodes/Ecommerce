import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ['latin'], weight: ['100', '400'] });

export const metadata: Metadata = {
  title: "Leftwing Patriots",
  description: "Get merch that represents your values",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

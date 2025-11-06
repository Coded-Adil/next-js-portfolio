import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio | Coded-Adil",
  description: "A portfolio website for Adil Rahman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-6 overflow-x-hidden`}
      >
        {/* Navbar */}
        <Navbar />
        {/* main */}
        <main className="font-outfit">
          {children}
        </main>
        {/* Footer */}
      </body>
    </html>
  );
}

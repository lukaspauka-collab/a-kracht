import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A-Kracht begeleiding — Kleinschalige begeleiding bij autisme",
  description:
    "Een klein, huiselijk huis in Delfgauw voor negen bewoners. Kleinschalige 24-uurszorg en overbruggingszorg voor mensen met autisme. Opgezet en geleid door Moniek Zondag.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

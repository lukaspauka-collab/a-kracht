import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "./ScrollReveal";
import { SITE } from "@/components/site";

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

export const viewport: Viewport = {
  themeColor: "#f7f3ec",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "A-Kracht begeleiding — Kleinschalige begeleiding bij autisme",
    template: "%s — A-Kracht begeleiding",
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE.url,
    siteName: SITE.name,
    title: "A-Kracht begeleiding — Kleinschalige begeleiding bij autisme",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "A-Kracht begeleiding — Kleinschalige begeleiding bij autisme",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "gezondheidszorg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <div className="site">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <ScrollReveal />
      </body>
    </html>
  );
}

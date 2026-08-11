import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "./ScrollReveal";
import CookieConsent from "@/components/CookieConsent";
import { getContent } from "@/content/lib";
import { NAV_LINKS } from "@/components/site";

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

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  const s = content.site;
  return {
    metadataBase: new URL(s.url),
    title: {
      default: `${s.name} — Kleinschalige begeleiding bij autisme`,
      template: `%s — ${s.name}`,
    },
    description: s.description,
    applicationName: s.name,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      url: s.url,
      siteName: s.name,
      title: `${s.name} — Kleinschalige begeleiding bij autisme`,
      description: s.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${s.name} — Kleinschalige begeleiding bij autisme`,
      description: s.description,
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
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = await getContent();
  const s = content.site;
  const nav = NAV_LINKS.map((link) => {
    const item = s.nav.find((n) => n.href === link.href);
    return { label: item?.label ?? link.href, href: link.href };
  });

  return (
    <html lang="nl" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <div className="site">
          <SiteHeader brand={s.name} nav={nav} cta={s.headerCta} />
          <main>{children}</main>
          <SiteFooter site={s} nav={nav} />
          <CookieConsent />
        </div>
        <ScrollReveal />
      </body>
    </html>
  );
}

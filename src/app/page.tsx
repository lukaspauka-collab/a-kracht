import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import JsonLd from "./jsonld";
import { getContent } from "@/content/lib";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const s = (await getContent()).site;
  return {
    title: "Kleinschalige begeleiding bij autisme",
    description: s.description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: `${s.name} — Kleinschalige begeleiding bij autisme`,
      description: s.description,
    },
  };
}

export default async function Home() {
  const content = await getContent();
  const s = content.site;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${s.url}#organization`,
    name: s.name,
    url: s.url,
    logo: `${s.url}/favicon.ico`,
    description: s.description,
    email: s.email,
    telephone: s.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: s.locality,
      addressRegion: s.region,
      addressCountry: s.country,
    },
    areaServed: {
      "@type": "Place",
      name: `${s.locality} en omgeving`,
    },
    founder: {
      "@type": "Person",
      name: content.over.name,
      url: `${s.url}/over`,
    },
    parentOrganization: {
      "@type": "Organization",
      name: s.parentOrganization,
    },
    knowsAbout: [
      "autisme",
      "autismespectrumstoornis",
      "24-uurszorg",
      "overbruggingszorg",
      "begeleid wonen",
      "Wlz",
      "Wmo",
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <HomePage content={content.home} />
    </>
  );
}

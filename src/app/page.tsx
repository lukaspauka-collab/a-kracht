import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import JsonLd from "./jsonld";
import { getContent } from "@/content/lib";
import { telHref } from "@/content/fields";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const s = (await getContent()).site;
  return {
    title: "A-Kracht begeleiding | Kleinschalige 24-uurszorg bij autisme",
    description:
      "A-Kracht begeleiding: kleinschalige 24-uurszorg en overbruggingszorg voor mensen met autisme in Delfgauw. Begeleid wonen met professionele ondersteuning.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: `${s.name} | Kleinschalige 24-uurszorg bij autisme`,
      description:
        "Kleinschalige 24-uurszorg en overbruggingszorg voor mensen met autisme in Delfgauw. Een huis voor negen bewoners.",
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
    telephone: telHref(s.phoneDisplay),
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
    sameAs: content.over.linkedinHref ? [content.over.linkedinHref] : [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: s.email,
      telephone: telHref(s.phoneDisplay),
      availableLanguage: "nl",
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

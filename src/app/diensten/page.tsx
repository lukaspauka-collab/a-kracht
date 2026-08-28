import type { Metadata } from "next";
import DienstenPage from "@/components/DienstenPage";
import JsonLd from "../jsonld";
import BreadcrumbJsonLd from "../BreadcrumbJsonLd";
import { getContent } from "@/content/lib";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const s = (await getContent()).site;
  return {
    title: "24-uurszorg en overbruggingszorg",
    description:
      `${s.name} biedt 24-uurszorg, overbruggingszorg en begeleid wonen voor mensen met autisme in Delfgauw. Lees over onze diensten en aanmelding.`,
    alternates: {
      canonical: "/diensten",
    },
    openGraph: {
      title: `Diensten — ${s.name}`,
      description:
        `24-uurszorg, overbruggingszorg en begeleid wonen voor mensen met autisme. Ontdek wat ${s.name} biedt.`,
    },
  };
}

export default async function Diensten() {
  const content = await getContent();
  const s = content.site;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${s.url}/diensten/#service`,
        name: "Zorg voor mensen met autisme — A-Kracht begeleiding",
        serviceType: "Begeleiding bij autisme",
        provider: {
          "@type": "Organization",
          name: s.name,
          url: s.url,
        },
        areaServed: { "@type": "Place", name: `${s.locality}, ${s.region}` },
        description: s.description,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Diensten",
          itemListElement: content.diensten.services.map((sv) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: sv.title,
              description: sv.text,
            },
          })),
        },
      },
      {
        "@type": "WebPage",
        url: `${s.url}/diensten`,
        name: `Diensten — ${s.name}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <BreadcrumbJsonLd path="/diensten" />
      <DienstenPage content={content.diensten} />
    </>
  );
}

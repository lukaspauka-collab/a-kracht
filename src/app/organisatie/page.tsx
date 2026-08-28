import type { Metadata } from "next";
import OrganisatiePage from "@/components/OrganisatiePage";
import JsonLd from "../jsonld";
import BreadcrumbJsonLd from "../BreadcrumbJsonLd";
import { getContent } from "@/content/lib";
import { telHref } from "@/content/fields";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const s = (await getContent()).site;
  return {
    title: `Organisatie en kwaliteit`,
    description:
      `${s.name}: kleinschalige zorg voor mensen met autisme, onderdeel van ${s.parentOrganization}. Kwaliteit, transparantie en professionele begeleiding.`,
    alternates: {
      canonical: "/organisatie",
    },
    openGraph: {
      title: `Organisatie — ${s.name}`,
      description:
        `Lees over ${s.name}: onze kwaliteit, het team en de organisatie achter kleinschalige autismezorg in Delfgauw.`,
    },
  };
}

export default async function Organisatie() {
  const content = await getContent();
  const s = content.site;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${s.url}/organisatie/#organization`,
        name: s.name,
        url: s.url,
        email: s.email,
        telephone: telHref(s.phoneDisplay),
        parentOrganization: { "@type": "Organization", name: s.parentOrganization },
      },
      {
        "@type": "WebPage",
        url: `${s.url}/organisatie`,
        name: `Over de organisatie — ${s.name}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <BreadcrumbJsonLd path="/organisatie" />
      <OrganisatiePage content={content.organisatie} site={s} />
    </>
  );
}

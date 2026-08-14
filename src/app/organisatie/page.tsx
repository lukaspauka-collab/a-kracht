import type { Metadata } from "next";
import OrganisatiePage from "@/components/OrganisatiePage";
import JsonLd from "../jsonld";
import { getContent } from "@/content/lib";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const s = (await getContent()).site;
  return {
    title: "Over de organisatie",
    description: s.description,
    alternates: {
      canonical: "/organisatie",
    },
    openGraph: {
      title: `Over de organisatie — ${s.name}`,
      description: s.description,
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
        telephone: s.phone,
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
      <OrganisatiePage content={content.organisatie} site={s} />
    </>
  );
}

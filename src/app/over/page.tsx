import type { Metadata } from "next";
import OverPage from "@/components/OverPage";
import JsonLd from "../jsonld";
import { getContent } from "@/content/lib";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  const s = content.site;
  return {
    title: "Over Moniek Zondag",
    description: s.description,
    alternates: {
      canonical: "/over",
    },
    openGraph: {
      title: `Over ${content.over.name} — ${s.name}`,
      description: s.description,
    },
  };
}

export default async function Over() {
  const content = await getContent();
  const s = content.site;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${s.url}/over/#person`,
    name: content.over.name,
    url: `${s.url}/over`,
    jobTitle: "Oprichter en begeleider",
    worksFor: {
      "@type": "Organization",
      name: s.name,
      url: s.url,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sociaal Pedagogische Hulpverlening (SPH), HBO",
    },
    knowsAbout: [
      "autisme",
      "autismespectrumstoornis",
      "prikkelverwerking",
      "begeleid wonen",
      "24-uurszorg",
    ],
    description: s.description,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <OverPage content={content.over} />
    </>
  );
}

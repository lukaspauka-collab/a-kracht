import type { Metadata } from "next";
import OverPage from "@/components/OverPage";
import JsonLd from "../jsonld";
import BreadcrumbJsonLd from "../BreadcrumbJsonLd";
import { getContent } from "@/content/lib";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  const s = content.site;
  return {
    title: `${content.over.name} — Begeleider autisme`,
    description:
      `Moniek Zondag, oprichter van ${s.name}. SPH-geschoold begeleider met jarenlange ervaring in autisme, 24-uurszorg en begeleid wonen.`,
    alternates: {
      canonical: "/over",
    },
    openGraph: {
      title: `${content.over.name} — Begeleider autisme | ${s.name}`,
      description:
        `Maak kennis met ${content.over.name}, oprichter en begeleider bij ${s.name}. Gespecialiseerd in autisme en 24-uurszorg.`,
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
      <BreadcrumbJsonLd path="/over" />
      <OverPage content={content.over} />
    </>
  );
}

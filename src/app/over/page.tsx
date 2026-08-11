import type { Metadata } from "next";
import OverPage from "@/components/OverPage";
import JsonLd from "../jsonld";

export const metadata: Metadata = {
  title: "Over Moniek Zondag",
  description:
    "Moniek Zondag werkt ruim twintig jaar in de zorg voor mensen met autisme. Leer haar kennen: SPH-diploma, registratie SKJ en haar visie op kleinschalige zorg.",
  alternates: {
    canonical: "/over",
  },
  openGraph: {
    title: "Over Moniek Zondag — A-Kracht begeleiding",
    description:
      "Ruim twintig jaar ervaring in de zorg voor mensen met autisme. Een klein huis, een vast team en de ruimte om te doen wat nodig is.",
  },
};

export default function Over() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://a-kracht.nl/over/#person",
    name: "Moniek Zondag",
    url: "https://a-kracht.nl/over",
    jobTitle: "Oprichter en begeleider",
    worksFor: {
      "@type": "Organization",
      name: "A-Kracht begeleiding",
      url: "https://a-kracht.nl",
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
    description:
      "Oprichter van A-Kracht begeleiding. Ruim twintig jaar ervaring in de zorg voor mensen met autisme. Geregistreerd bij SKJ / Registerplein.",
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <OverPage />
    </>
  );
}

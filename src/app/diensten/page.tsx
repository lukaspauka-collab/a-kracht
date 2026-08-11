import type { Metadata } from "next";
import DienstenPage from "@/components/DienstenPage";
import JsonLd from "../jsonld";
import { SITE } from "@/components/site";

export const metadata: Metadata = {
  title: "Diensten en aanmelding",
  description:
    "Van 24-uurszorg en overbruggingszorg tot ambulante begeleiding: zorg die past bij hoe jij leeft. Lees hoe een aanmelding verloopt en wie de zorg betaalt (Wlz, Wmo, PGB).",
  alternates: {
    canonical: "/diensten",
  },
  openGraph: {
    title: "Diensten — A-Kracht begeleiding",
    description:
      "24-uurszorg, overbruggingszorg en ambulante begeleiding voor mensen met autisme in Delfgauw. In vier stappen naar een rustige start.",
  },
};

const SERVICES = [
  {
    title: "24-uurszorg",
    text: "Wonen in het huis met altijd begeleiding aanwezig.",
  },
  {
    title: "Overbruggingszorg",
    text: "Een veilige tussenstap tot de definitieve woonplek er is.",
  },
  {
    title: "Ambulante begeleiding",
    text: "Ondersteuning bij jou thuis, in jouw eigen ritme.",
  },
  {
    title: "Dagstructuur",
    text: "Samen een dag opbouwen die haalbaar is en houvast geeft.",
  },
  {
    title: "Administratie & financiën",
    text: "Post, regelzaken en instanties — stap voor stap, samen.",
  },
  {
    title: "Netwerk & familie",
    text: "Korte lijnen met naasten, met respect voor ieders rol.",
  },
  {
    title: "Werk & dagbesteding",
    text: "Zoeken naar een plek die energie geeft in plaats van kost.",
  },
  {
    title: "Crisispreventie",
    text: "Signalen vroeg herkennen en een plan dat klaarligt.",
  },
];

export default function Diensten() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://a-kracht.nl/diensten/#service",
        name: "Zorg voor mensen met autisme — A-Kracht begeleiding",
        serviceType: "Begeleiding bij autisme",
        provider: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
        areaServed: { "@type": "Place", name: "Delfgauw, Zuid-Holland" },
        description:
          "Kleinschalige 24-uurszorg, overbruggingszorg en ambulante begeleiding voor volwassenen met een autismespectrumstoornis.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Diensten",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.text,
            },
          })),
        },
      },
      {
        "@type": "WebPage",
        url: "https://a-kracht.nl/diensten",
        name: "Diensten — A-Kracht begeleiding",
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <DienstenPage />
    </>
  );
}

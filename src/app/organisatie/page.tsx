import type { Metadata } from "next";
import OrganisatiePage from "@/components/OrganisatiePage";
import JsonLd from "../jsonld";
import { SITE } from "@/components/site";

export const metadata: Metadata = {
  title: "Over de organisatie",
  description:
    "Wie verantwoordelijk is voor de zorg bij A-Kracht begeleiding, hoe wij kwaliteit bewaken en waar je terecht kunt met vragen, klachten en privacyzaken. Een kleinschalige woonzorglocatie, onderdeel van Coöperatie de Delta.",
  alternates: {
    canonical: "/organisatie",
  },
  openGraph: {
    title: "Over de organisatie — A-Kracht begeleiding",
    description:
      "Zorg met heldere afspraken: contact- en organisatiegegevens, kwaliteit en veiligheid, klachten & geschillen, de cliëntenraad en de privacyverklaring.",
  },
};

export default function Organisatie() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "MedicalOrganization"],
        "@id": "https://a-kracht.nl/organisatie/#organization",
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.locality,
          addressRegion: SITE.region,
          addressCountry: SITE.country,
        },
        parentOrganization: {
          "@type": "Organization",
          name: SITE.parentOrganization,
          url: "https://www.cooperatiededelta.nl",
        },
        description:
          "Een kleinschalige woonzorglocatie in Delfgauw voor volwassenen met autisme, opgezet en geleid door Moniek Zondag. De zorg wordt aangeboden onder verantwoordelijkheid van Coöperatie de Delta.",
        knowsAbout: [
          "autisme",
          "kleinschalige woonzorg",
          "Wlz",
          "VG-profiel",
          "medezeggenschap",
          "klachtenregeling",
        ],
      },
      {
        "@type": "WebPage",
        url: "https://a-kracht.nl/organisatie",
        name: "Over de organisatie — A-Kracht begeleiding",
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <OrganisatiePage />
    </>
  );
}

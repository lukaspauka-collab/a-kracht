import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import JsonLd from "./jsonld";

export const metadata: Metadata = {
  title: "Kleinschalige begeleiding bij autisme",
  description:
    "Een klein, huiselijk huis in Delfgauw voor negen bewoners. Kleinschalige 24-uurszorg en overbruggingszorg voor mensen met autisme. Opgezet en geleid door Moniek Zondag.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A-Kracht begeleiding — Kleinschalige begeleiding bij autisme",
    description:
      "Een klein, huiselijk huis in Delfgauw voor negen bewoners. 24-uurszorg en overbruggingszorg voor mensen met autisme.",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": "https://a-kracht.nl/#organization",
    name: "A-Kracht begeleiding",
    url: "https://a-kracht.nl",
    logo: "https://a-kracht.nl/favicon.ico",
    description:
      "Kleinschalige 24-uurszorg en overbruggingszorg voor mensen met autisme in Delfgauw. Een huis voor negen bewoners, opgezet en geleid door Moniek Zondag.",
    email: "info@a-kracht.nl",
    telephone: "+31600000000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delfgauw",
      addressRegion: "Zuid-Holland",
      addressCountry: "NL",
    },
    areaServed: {
      "@type": "Place",
      name: "Delfgauw en omgeving",
    },
    founder: {
      "@type": "Person",
      name: "Moniek Zondag",
      url: "https://a-kracht.nl/over",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Coöperatie de Delta",
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
      <HomePage />
    </>
  );
}

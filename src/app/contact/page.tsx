import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import JsonLd from "../jsonld";
import { SITE } from "@/components/site";

export const metadata: Metadata = {
  title: "Contact en veelgestelde vragen",
  description:
    "Kennismaken met A-Kracht begeleiding? Bel of mail Moniek Zondag — je krijgt altijd Moniek zelf aan de lijn, meestal binnen twee werkdagen. Veelgestelde vragen vind je hier.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — A-Kracht begeleiding",
    description:
      "Laat een bericht achter of bel. Je krijgt altijd Moniek zelf aan de lijn — meestal binnen twee werkdagen.",
  },
};

const FAQ = [
  {
    q: "Is er nu plek?",
    a: "Het huis heeft negen plekken. Is alles bezet, dan kijken we naar overbruggingszorg of begeleiding thuis tot er ruimte is.",
  },
  {
    q: "Heb ik een indicatie nodig?",
    a: "Voor wonen wel. Heb je die nog niet, dan helpen we bij de aanvraag bij het CIZ of de gemeente.",
  },
  {
    q: "Kan familie langskomen?",
    a: "Ja, in overleg met de bewoner. We houden korte lijnen met naasten, met respect voor ieders privacy.",
  },
  {
    q: "Waar kan ik een klacht melden?",
    a: "Eerst bij Moniek zelf. Kom je er samen niet uit, dan loopt het via de onafhankelijke klachtenregeling van Coöperatie de Delta.",
  },
];

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://a-kracht.nl/contact/#faq",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
      {
        "@type": "ContactPage",
        url: "https://a-kracht.nl/contact",
        name: "Contact — A-Kracht begeleiding",
        mainEntity: {
          "@type": "Organization",
          name: SITE.name,
          email: SITE.email,
          telephone: SITE.phone,
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ContactPage />
    </>
  );
}

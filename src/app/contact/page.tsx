import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import JsonLd from "../jsonld";
import BreadcrumbJsonLd from "../BreadcrumbJsonLd";
import { getContent } from "@/content/lib";
import { resolveRow, telHref } from "@/content/fields";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const s = (await getContent()).site;
  return {
    title: `Contact en veelgestelde vragen`,
    description:
      `Neem contact op met ${s.name} voor vragen over begeleiding bij autisme. Veelgestelde vragen, bereikbaarheid en locatie in Delfgauw.`,
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      title: `Contact — ${s.name}`,
      description:
        `Vragen over autismezorg? Neem contact op met ${s.name} in Delfgauw. Bereikbaar op werkdagen.`,
    },
  };
}

export default async function Contact() {
  const content = await getContent();
  const s = content.site;
  const faq = content.contact.faq;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${s.url}/contact/#faq`,
        mainEntity: faq.map((f) => ({
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
        url: `${s.url}/contact`,
        name: `Contact — ${s.name}`,
        mainEntity: {
          "@type": "Organization",
          name: s.name,
          email: s.email,
          telephone: telHref(s.phoneDisplay),
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <BreadcrumbJsonLd path="/contact" />
      <ContactPage
        content={{
          ...content.contact,
          // Phone, e-mail, hours and location live under "Site & contact", so
          // the card here and the footer can't drift apart.
          infoRows: content.contact.infoRows.map(({ sw, color, glyph, label, ...row }) => ({
            sw,
            color,
            glyph,
            label,
            ...resolveRow(s, { label, ...row }),
          })),
        }}
      />
    </>
  );
}

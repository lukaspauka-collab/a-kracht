import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import JsonLd from "../jsonld";
import { getContent } from "@/content/lib";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const s = (await getContent()).site;
  return {
    title: "Contact en veelgestelde vragen",
    description: s.description,
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      title: `Contact — ${s.name}`,
      description: s.description,
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
          telephone: s.phone,
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ContactPage content={content.contact} />
    </>
  );
}

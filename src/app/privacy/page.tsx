import type { Metadata } from "next";
import PrivacyPage from "@/components/PrivacyPage";
import { getContent } from "@/content/lib";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cookie- en privacybeleid",
  description:
    "Heldere afspraken over cookies en persoonsgegevens. A-Kracht begeleiding plaatst geen tracking- of marketingcookies, en gebruikt je gegevens uitsluitend om je vraag te beantwoorden.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Cookie- en privacybeleid — A-Kracht begeleiding",
    description:
      "Geen tracking, geen datagedeeltjes. Lees hoe A-Kracht begeleiding omgaat met cookies en persoonsgegevens.",
  },
};

export default async function Privacy() {
  const { site } = await getContent();
  return <PrivacyPage email={site.email} />;
}

import type { Metadata } from "next";
import PrivacyPage from "@/components/PrivacyPage";

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

export default function Privacy() {
  return <PrivacyPage />;
}

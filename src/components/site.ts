export type Page = "home" | "over" | "diensten" | "contact";

export const SITE = {
  name: "A-Kracht begeleiding",
  url: "https://a-kracht.nl",
  description:
    "Kleinschalige 24-uurszorg en overbruggingszorg voor mensen met autisme in Delfgauw. Een huis voor negen bewoners, begeleid door Moniek Zondag.",
  email: "info@a-kracht.nl",
  phone: "+31600000000",
  phoneDisplay: "06 – 00 00 00 00",
  locality: "Delfgauw",
  region: "Zuid-Holland",
  country: "NL",
  parentOrganization: "Coöperatie de Delta",
};

export const NAV_ITEMS: { key: Page; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "over", label: "Over mij", href: "/over" },
  { key: "diensten", label: "Diensten", href: "/diensten" },
  { key: "contact", label: "Contact", href: "/contact" },
];

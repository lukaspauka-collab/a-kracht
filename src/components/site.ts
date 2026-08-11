export type Page = "home" | "over" | "diensten" | "organisatie" | "contact";

/** Fixed page order/hrefs. Editable labels live in the CMS content (site.nav). */
export const NAV_LINKS: { key: Page; href: string }[] = [
  { key: "home", href: "/" },
  { key: "over", href: "/over" },
  { key: "diensten", href: "/diensten" },
  { key: "organisatie", href: "/organisatie" },
  { key: "contact", href: "/contact" },
];

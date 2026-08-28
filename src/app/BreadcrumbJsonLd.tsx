import { getContent } from "@/content/lib";

const ROUTE_LABELS: Record<string, string> = {
  "/": "Home",
  "/over": "Over",
  "/diensten": "Diensten",
  "/organisatie": "Organisatie",
  "/contact": "Contact",
  "/privacy": "Privacy",
};

export default async function BreadcrumbJsonLd({ path }: { path: string }) {
  const s = (await getContent()).site;
  const label = ROUTE_LABELS[path];
  if (!label || path === "/") return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: s.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${s.url}${path}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

import type { MetadataRoute } from "next";
import { getContent } from "@/content/lib";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (await getContent()).site.url;
  return [
    { url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${url}/over`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${url}/diensten`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${url}/organisatie`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${url}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}

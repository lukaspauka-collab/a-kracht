import type { MetadataRoute } from "next";
import { getContent } from "@/content/lib";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (await getContent()).site.url;
  const entry = (path: string, priority: number, frequency: MetadataRoute.Sitemap[number]["changeFrequency"]) => ({
    url: `${url}${path}`,
    lastModified: new Date(),
    changeFrequency: frequency,
    priority,
  });
  return [
    entry("/", 1, "monthly"),
    entry("/diensten", 0.9, "monthly"),
    entry("/over", 0.8, "yearly"),
    entry("/contact", 0.7, "monthly"),
    entry("/organisatie", 0.6, "yearly"),
    entry("/privacy", 0.3, "yearly"),
  ];
}

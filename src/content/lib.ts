import { promises as fs } from "fs";
import path from "path";
import type { SiteContent } from "./types";

export const CONTENT_PATH = path.join(process.cwd(), "src", "content", "content.json");
export const IMAGES_DIR = path.join(process.cwd(), "public", "images");

export async function getContent(): Promise<SiteContent> {
  const raw = await fs.readFile(CONTENT_PATH, "utf8");
  return JSON.parse(raw) as SiteContent;
}

export async function saveContent(content: SiteContent): Promise<void> {
  await fs.writeFile(CONTENT_PATH, JSON.stringify(content, null, 2) + "\n", "utf8");
}

export async function listImages(): Promise<string[]> {
  const names = await fs.readdir(IMAGES_DIR);
  return names
    .filter((n) => /\.(png|jpe?g|webp|gif|avif|svg)$/i.test(n))
    .sort()
    .map((n) => `/images/${n}`);
}

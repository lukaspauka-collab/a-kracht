import { cache } from "react";
import { promises as fs } from "fs";
import path from "path";
import defaults from "./content.json";
import type { SiteContent } from "./types";
import {
  getBackend,
  UPLOAD_FORMATS,
  UPLOAD_URL_PREFIX,
  uploadContentType,
} from "./store";

export { UPLOAD_FORMATS, UPLOAD_URL_PREFIX, uploadContentType };

/** Images shipped with the repo. Read-only; uploads live in the content store. */
const BUNDLED_IMAGES_DIR = path.join(process.cwd(), "public", "images");

/**
 * The live content: whatever was last saved in the admin editor, falling back to
 * the copy committed in `content.json`.
 *
 * Memoised per request so a single page render doesn't fetch it once for the
 * layout, once for `generateMetadata` and once for the page itself.
 */
export const getContent = cache(async (): Promise<SiteContent> => {
  const saved = await getBackend().readContent();
  return withDefaults(defaults as SiteContent, saved);
});

export async function saveContent(content: SiteContent): Promise<void> {
  await getBackend().writeContent(content);
}

/** Every image the editor can pick: bundled ones plus everything uploaded. */
export async function listImages(): Promise<string[]> {
  const [bundled, uploads] = await Promise.all([
    listBundledImages(),
    getBackend().listUploads(),
  ]);
  return [
    ...bundled.sort(),
    ...uploads.sort().map((name) => UPLOAD_URL_PREFIX + name),
  ];
}

/** Stores an uploaded image and returns the URL to reference it by. */
export async function saveImage(
  originalName: string,
  contentType: string,
  data: Buffer
): Promise<string> {
  const ext = UPLOAD_FORMATS[contentType];
  if (!ext) throw new Error(`Unsupported upload type: ${contentType}`);

  const base =
    path
      .basename(originalName, path.extname(originalName))
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "upload";
  const name = `${base}-${Date.now()}.${ext}`;

  await getBackend().writeUpload(name, data);
  return UPLOAD_URL_PREFIX + name;
}

export async function readImage(name: string): Promise<Buffer | null> {
  return getBackend().readUpload(name);
}

/* -------------------------------------------------------------------- */

async function listBundledImages(): Promise<string[]> {
  try {
    const names = await fs.readdir(BUNDLED_IMAGES_DIR);
    return names
      .filter((name) => /\.(png|jpe?g|webp|gif|avif|svg)$/i.test(name))
      .map((name) => `/images/${name}`);
  } catch {
    return [];
  }
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Overlays saved content on the committed defaults.
 *
 * Saved content is a snapshot of the JSON as it looked when the editor last hit
 * save. Once we add a field — or a whole section — in code, that snapshot won't
 * have it, and taking the snapshot wholesale would render the new field as
 * `undefined` on the live site. So fall back to the committed value key by key.
 */
function withDefaults<T>(fallback: T, saved: unknown): T {
  if (saved === undefined || saved === null) return fallback;

  if (Array.isArray(fallback) && Array.isArray(saved)) {
    // The editor owns the length — items can be added and removed. Each item
    // still gets missing keys filled in from the matching default, or, for items
    // the editor added, from the first one as a template.
    return saved.map((item, i) =>
      withDefaults(fallback[i] ?? fallback[0], item)
    ) as unknown as T;
  }

  if (isPlainObject(fallback) && isPlainObject(saved)) {
    const merged: Record<string, unknown> = { ...saved };
    for (const [key, value] of Object.entries(fallback)) {
      merged[key] = withDefaults(value, saved[key]);
    }
    return merged as T;
  }

  return saved as T;
}

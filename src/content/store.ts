import { promises as fs } from "fs";
import path from "path";
import { getStore, type Store } from "@netlify/blobs";

/**
 * Persistent storage for everything the admin editor saves.
 *
 * The site runs on Netlify, where the deployed filesystem is read-only and
 * per-instance. Writing into the build output — `src/content/content.json` and
 * `public/images/` — therefore fails outright in production (the old
 * implementation returned a 500 on every save), and even where such a write
 * succeeds it disappears on the next deploy. Saved content has to live outside
 * the build artifact.
 *
 * Two backends, chosen automatically at first use:
 *
 *   - Netlify Blobs — whenever the Blobs environment is available (production,
 *     deploy previews, `netlify dev`, or an explicit site id + token). The store
 *     is site-wide and deploy-agnostic, so content survives redeploys.
 *   - Local files — for a plain `next dev`. Writes to a gitignored data
 *     directory rather than into `src/`, so local edits also survive branch
 *     switches and `git checkout`.
 */

const STORE_NAME = "site-content";
const CONTENT_KEY = "content.json";
const UPLOAD_PREFIX = "uploads/";

/** Uploaded images are served through a route handler, not from `public/`. */
export const UPLOAD_URL_PREFIX = "/api/images/";

/** Upload formats we accept, and the extension each one is stored under. */
export const UPLOAD_FORMATS: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
};

const MIME_BY_EXTENSION: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
  avif: "image/avif",
};

/** Content type for a stored upload, derived from the name we generated. */
export function uploadContentType(name: string): string {
  const ext = path.extname(name).slice(1).toLowerCase();
  return MIME_BY_EXTENSION[ext] ?? "application/octet-stream";
}

type Backend = {
  readonly kind: "netlify-blobs" | "local-files";
  /** Saved content, or `null` when nothing has been saved yet. */
  readContent(): Promise<unknown | null>;
  writeContent(value: unknown): Promise<void>;
  /** File names of uploaded images, without the `uploads/` prefix. */
  listUploads(): Promise<string[]>;
  readUpload(name: string): Promise<Buffer | null>;
  writeUpload(name: string, data: Buffer): Promise<void>;
};

/* -------------------------------------------------------------------- */

function netlifyBackend(store: Store): Backend {
  return {
    kind: "netlify-blobs",

    async readContent() {
      return await store.get(CONTENT_KEY, { type: "json" });
    },

    async writeContent(value) {
      await store.setJSON(CONTENT_KEY, value);
    },

    async listUploads() {
      const { blobs } = await store.list({ prefix: UPLOAD_PREFIX });
      return blobs
        .map((blob) => blob.key.slice(UPLOAD_PREFIX.length))
        .filter(Boolean);
    },

    async readUpload(name) {
      const data = await store.get(UPLOAD_PREFIX + name, {
        type: "arrayBuffer",
      });
      return data ? Buffer.from(data) : null;
    },

    async writeUpload(name, data) {
      // Blob input has to be a plain ArrayBuffer, not a Buffer view.
      const body = data.buffer.slice(
        data.byteOffset,
        data.byteOffset + data.byteLength
      ) as ArrayBuffer;
      await store.set(UPLOAD_PREFIX + name, body);
    },
  };
}

function localBackend(dir: string): Backend {
  const contentFile = path.join(dir, CONTENT_KEY);
  const uploadsDir = path.join(dir, "uploads");

  return {
    kind: "local-files",

    async readContent() {
      try {
        return JSON.parse(await fs.readFile(contentFile, "utf8"));
      } catch {
        return null;
      }
    },

    async writeContent(value) {
      await fs.mkdir(dir, { recursive: true });
      // Write-then-rename so a crash mid-write can't truncate saved content.
      const tmp = `${contentFile}.tmp`;
      await fs.writeFile(tmp, JSON.stringify(value, null, 2) + "\n", "utf8");
      await fs.rename(tmp, contentFile);
    },

    async listUploads() {
      try {
        return await fs.readdir(uploadsDir);
      } catch {
        return [];
      }
    },

    async readUpload(name) {
      try {
        return await fs.readFile(path.join(uploadsDir, name));
      } catch {
        return null;
      }
    },

    async writeUpload(name, data) {
      await fs.mkdir(uploadsDir, { recursive: true });
      await fs.writeFile(path.join(uploadsDir, name), data);
    },
  };
}

/* -------------------------------------------------------------------- */

let backend: Backend | null = null;

function createBackend(): Backend {
  // `getStore` throws synchronously when the Blobs environment is missing, which
  // is how we detect that we're running outside Netlify.
  const siteID = process.env.NETLIFY_BLOBS_SITE_ID ?? process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN ?? process.env.NETLIFY_AUTH_TOKEN;
  try {
    return netlifyBackend(
      getStore(
        siteID && token
          ? { name: STORE_NAME, consistency: "strong", siteID, token }
          : { name: STORE_NAME, consistency: "strong" }
      )
    );
  } catch {
    const dir =
      process.env.CMS_DATA_DIR ?? path.join(process.cwd(), ".data");
    return localBackend(dir);
  }
}

/**
 * The storage backend for this process. Resolved lazily — on Netlify the Blobs
 * environment is only populated once a request is being handled.
 */
export function getBackend(): Backend {
  if (!backend) {
    backend = createBackend();
    // Logged once per instance: if a deployed function ever reports
    // "local-files", saves will fail against the read-only filesystem and the
    // Blobs environment is what needs looking at.
    console.log(`[content] storage backend: ${backend.kind}`);
  }
  return backend;
}

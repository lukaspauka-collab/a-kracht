import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { IMAGES_DIR } from "@/content/lib";

const ALLOWED = new Set(["image/png", "image/jpeg", "image/webp", "image/gif", "image/avif"]);
const EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
};

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return Response.json({ error: "Geen bestand gevonden." }, { status: 400 });
    }
    if (!ALLOWED.has(file.type)) {
      return Response.json(
        { error: "Alleen PNG, JPG, WEBP, GIF of AVIF is toegestaan." },
        { status: 400 }
      );
    }
    if (file.size > 8 * 1024 * 1024) {
      return Response.json({ error: "Bestand is groter dan 8 MB." }, { status: 400 });
    }

    const ext = EXT[file.type] ?? "jpg";
    const base = path.basename(file.name, path.extname(file.name))
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "upload";
    const safeName = `${base}-${Date.now()}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(path.join(IMAGES_DIR, safeName), buffer);

    return Response.json({ ok: true, src: `/images/${safeName}` });
  } catch (err) {
    console.error("POST /api/upload failed", err);
    return Response.json({ error: "Upload mislukt." }, { status: 500 });
  }
}

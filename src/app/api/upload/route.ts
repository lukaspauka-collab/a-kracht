import { NextRequest } from "next/server";
import { saveImage, UPLOAD_FORMATS } from "@/content/lib";
import { isAdmin } from "@/lib/auth";

const MAX_BYTES = 8 * 1024 * 1024;

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return Response.json(
      { error: "Je sessie is verlopen. Log opnieuw in om te uploaden." },
      { status: 401 }
    );
  }
  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return Response.json({ error: "Geen bestand gevonden." }, { status: 400 });
    }
    if (!UPLOAD_FORMATS[file.type]) {
      return Response.json(
        { error: "Alleen PNG, JPG, WEBP, GIF of AVIF is toegestaan." },
        { status: 400 }
      );
    }
    if (file.size > MAX_BYTES) {
      return Response.json({ error: "Bestand is groter dan 8 MB." }, { status: 400 });
    }

    const src = await saveImage(
      file.name,
      file.type,
      Buffer.from(await file.arrayBuffer())
    );
    return Response.json({ ok: true, src });
  } catch (err) {
    console.error("POST /api/upload failed", err);
    return Response.json({ error: "Upload mislukt." }, { status: 500 });
  }
}

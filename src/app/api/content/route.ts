import { NextRequest } from "next/server";
import { getContent, saveContent, listImages } from "@/content/lib";
import { isAdmin } from "@/lib/auth";
import type { SiteContent } from "@/content/types";

export async function GET() {
  try {
    const [content, images] = await Promise.all([getContent(), listImages()]);
    return Response.json({ content, images });
  } catch (err) {
    console.error("GET /api/content failed", err);
    return Response.json(
      { error: "Kon content niet laden." },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  if (!(await isAdmin())) {
    // Say this clearly: the editor keeps the unsaved changes in the page, so the
    // fix is to log in again in a second tab and press opslaan once more.
    return Response.json(
      {
        error:
          "Je sessie is verlopen. Log opnieuw in en klik nogmaals op opslaan — je wijzigingen staan nog op deze pagina.",
      },
      { status: 401 }
    );
  }
  try {
    const body = (await req.json()) as Partial<SiteContent>;
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json({ error: "Ongeldige payload." }, { status: 400 });
    }
    await saveContent(body as SiteContent);
    const content = await getContent();
    return Response.json({ ok: true, content });
  } catch (err) {
    console.error("PUT /api/content failed", err);
    return Response.json(
      { error: "Kon content niet opslaan." },
      { status: 500 }
    );
  }
}

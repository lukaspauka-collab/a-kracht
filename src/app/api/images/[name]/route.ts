import { readImage, uploadContentType } from "@/content/lib";

/**
 * Serves images uploaded through the admin editor. They're kept in the content
 * store rather than `public/`, which is read-only once deployed.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  // Names are generated on upload, so anything else is a bad request — and this
  // keeps `..` and nested paths out of the store lookup.
  if (!/^[a-z0-9][a-z0-9-]*\.[a-z0-9]+$/.test(name)) {
    return new Response("Not found", { status: 404 });
  }

  const data = await readImage(name);
  if (!data) return new Response("Not found", { status: 404 });

  return new Response(new Uint8Array(data), {
    headers: {
      "Content-Type": uploadContentType(name),
      "Content-Length": String(data.byteLength),
      // Every upload gets a timestamped name, so a name never changes content.
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

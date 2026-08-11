import { cookies } from "next/headers";
import AdminApp from "@/components/admin/AdminApp";
import AdminLogin from "@/components/admin/AdminLogin";
import { getContent, listImages } from "@/content/lib";
import { verifyToken, SESSION_COOKIE } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token || !verifyToken(token)) {
    return <AdminLogin />;
  }
  const [content, images] = await Promise.all([getContent(), listImages()]);
  return <AdminApp initialContent={content} initialImages={images} />;
}

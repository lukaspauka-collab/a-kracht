import { createHash } from "crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "ak_admin_session";

const PASSWORD = process.env.ADMIN_PASSWORD || "admin";
const SECRET = process.env.ADMIN_SECRET || "a-kracht-admin-dev-secret";

export function isValidPassword(password: string): boolean {
  return password === PASSWORD;
}

export function tokenForPassword(password: string): string {
  return createHash("sha256")
    .update(`${password}:${SECRET}`)
    .digest("hex");
}

export function verifyToken(token: string): boolean {
  return token === tokenForPassword(PASSWORD);
}

/** Whether the current request carries a valid admin session cookie. */
export async function isAdmin(): Promise<boolean> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return Boolean(token && verifyToken(token));
}

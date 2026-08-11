import { createHash } from "crypto";

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

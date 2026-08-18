import type { DetailRow, SiteContent, SiteField } from "./types";

/**
 * Resolving detail rows against the site-wide contact details.
 *
 * The e-mail address, phone number, opening hours and location were each
 * written out three times in `content.json`: once under `site` (footer and
 * structured data), once in `contact.infoRows` and once in
 * `organisatie.dataRows`. Editing "Site & contact" in the admin therefore
 * changed the footer but left the contact card and the organisation table
 * showing the old number, which reads as "the CMS didn't save".
 *
 * So `site` owns these values, and a row elsewhere points at one with `field`
 * instead of repeating it. Rows without a `field` still carry their own text,
 * which is what page-specific rows need.
 *
 * No `fs` or server-only imports here: the contact page renders on the client
 * and the admin editor imports this too.
 */

type Site = SiteContent["site"];

/**
 * The dialable form of a written-out Dutch phone number.
 *
 * The number used to be stored twice — once pretty (`phoneDisplay`) and once
 * dialable (`phone`) — and the admin showed both as plain text boxes. Editing
 * the pretty one and leaving the other behind produced a page that displayed
 * the real number while `tel:` links and the `telephone` in the structured data
 * still pointed at the placeholder. Deriving one from the other removes the
 * chance to update half of it.
 *
 * `06 – 14 78 05 98` → `+31614780598`. Numbers already in international form
 * are passed through, so a `+32`/`00 32` number keeps its own country code.
 */
export function telHref(display: string): string {
  const trimmed = display.trim();
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";
  if (trimmed.startsWith("+")) return `+${digits}`;
  // `00` is the international prefix as dialled from the Netherlands.
  if (digits.startsWith("00")) return `+${digits.slice(2)}`;
  // A national number: drop the trunk `0` and add the country code.
  if (digits.startsWith("0")) return `+31${digits.slice(1)}`;
  return `+31${digits}`;
}

/** What the editor is told a linked row is showing, and where to change it. */
export const SITE_FIELD_LABELS: Record<SiteField, string> = {
  email: "E-mailadres",
  phone: "Telefoonnummer",
  hours: "Bereikbaarheid",
  location: "Locatie",
};

export function isSiteField(value: unknown): value is SiteField {
  return (
    typeof value === "string" && Object.hasOwn(SITE_FIELD_LABELS, value)
  );
}

/** The text and link for one site-wide contact detail. */
export function resolveSiteField(
  site: Site,
  field: SiteField
): { value: string; href: string } {
  switch (field) {
    case "email":
      return { value: site.email, href: site.email ? `mailto:${site.email}` : "" };
    case "phone": {
      const tel = telHref(site.phoneDisplay);
      return { value: site.phoneDisplay, href: tel ? `tel:${tel}` : "" };
    }
    case "hours":
      return { value: site.hours, href: "" };
    case "location":
      return {
        value: [site.locality, site.region].filter(Boolean).join(", "),
        href: "",
      };
  }
}

/**
 * The text and link to render for a row, whether it points at `site` or holds
 * its own value. An unrecognised `field` — an editor typing in the box — falls
 * back to the row's own value rather than rendering nothing.
 */
export function resolveRow(
  site: Site,
  row: DetailRow
): { value: string; href: string } {
  if (isSiteField(row.field)) return resolveSiteField(site, row.field);
  return { value: row.value ?? "", href: row.href ?? "" };
}

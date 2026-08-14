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
    case "phone":
      return {
        value: site.phoneDisplay,
        // The dialable number is a separate field from the pretty one.
        href: site.phone ? `tel:${site.phone}` : "",
      };
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

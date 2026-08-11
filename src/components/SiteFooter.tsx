import Link from "next/link";

type NavItem = { label: string; href: string };

export default function SiteFooter({
  site,
  nav,
}: {
  site: {
    name: string;
    footerTagline: string;
    email: string;
    phone: string;
    phoneDisplay: string;
    locality: string;
    region: string;
    copyrightYear: string;
    parentOrganization: string;
  };
  nav: NavItem[];
}) {
  return (
    <footer className="footer">
      <div
        className="container grid-3"
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr",
          gap: 48,
          padding: 0,
        }}
      >
        <div>
          <p
            className="serif"
            style={{ fontSize: 21, fontWeight: 600, margin: "0 0 12px" }}
          >
            {site.name}
          </p>
          <p
            style={{
              margin: 0,
              color: "var(--muted)",
              lineHeight: 1.7,
              fontSize: 15,
              maxWidth: "38ch",
            }}
          >
            {site.footerTagline}
          </p>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <div className="footer-list">
            <a href={`mailto:${site.email}`} className="footer-link">
              {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="footer-link">
              {site.phoneDisplay}
            </a>
            <span style={{ color: "var(--muted)" }}>
              {site.locality}, {site.region}
            </span>
          </div>
        </div>
        <div>
          <p className="footer-heading">Pagina&apos;s</p>
          <div className="footer-list">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="footer-link">
              Privacy & cookies
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {site.copyrightYear} {site.name}</span>
        <Link
          href="/organisatie"
          style={{ color: "var(--muted)", textDecoration: "none" }}
        >
          Privacy &amp; klachten
        </Link>
        <span>Onderdeel van {site.parentOrganization}</span>
      </div>
    </footer>
  );
}

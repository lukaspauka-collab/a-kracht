import Link from "next/link";
import { NAV_ITEMS } from "./site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div
        className="container grid-3"
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr",
          gap: 48,
          padding: "0 24px",
        }}
      >
        <div>
          <p
            className="serif"
            style={{ fontSize: 21, fontWeight: 600, margin: "0 0 12px" }}
          >
            A-Kracht begeleiding
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
            Kleinschalige 24-uurszorg en overbruggingszorg voor mensen met
            autisme in Delfgauw.
          </p>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <div className="footer-list">
            <a href="mailto:info@a-kracht.nl" className="footer-link">
              info@a-kracht.nl
            </a>
            <a href="tel:+31600000000" className="footer-link">
              06 – 00 00 00 00
            </a>
            <span style={{ color: "var(--muted)" }}>Delfgauw, Zuid-Holland</span>
          </div>
        </div>
        <div>
          <p className="footer-heading">Pagina&apos;s</p>
          <div className="footer-list">
            {NAV_ITEMS.map((item) => (
              <Link key={item.key} href={item.href} className="footer-link">
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
        <span>© 2026 A-Kracht begeleiding</span>
        <Link
          href="/organisatie"
          style={{ color: "var(--muted)", textDecoration: "none" }}
        >
          Privacy &amp; klachten
        </Link>
        <span>Onderdeel van Coöperatie de Delta</span>
      </div>
    </footer>
  );
}

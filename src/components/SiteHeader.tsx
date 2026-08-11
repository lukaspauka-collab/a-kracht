"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

export default function SiteHeader({
  brand,
  nav,
  cta,
}: {
  brand: string;
  nav: NavItem[];
  cta: string;
}) {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <span className="brand-name">{brand}</span>
          <span className="brand-dot" />
        </Link>
        <nav aria-label="Hoofdnavigatie" className="nav">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`nav-link${pathname === item.href ? " is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn--primary btn--sm"
            style={{ marginLeft: 14 }}
          >
            {cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}

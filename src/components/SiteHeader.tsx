"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./site";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <span className="brand-name">A-Kracht begeleiding</span>
          <span className="brand-dot" />
        </Link>
        <nav aria-label="Hoofdnavigatie" className="nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
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
            Kennismaken
          </Link>
        </nav>
      </div>
    </header>
  );
}

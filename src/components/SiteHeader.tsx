"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={close}>
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
            className="btn btn--primary btn--sm nav-cta"
          >
            Kennismaken
          </Link>
        </nav>
        <div className="header-actions">
          <Link
            href="/contact"
            onClick={close}
            className="btn btn--primary btn--sm header-cta"
          >
            Kennismaken
          </Link>
          <button
            type="button"
            className={`menu-toggle${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-toggle__bar" />
            <span className="menu-toggle__bar" />
            <span className="menu-toggle__bar" />
          </button>
        </div>
      </div>
      <nav
        id="mobile-menu"
        aria-label="Mobiele navigatie"
        className={`mobile-menu${open ? " is-open" : ""}`}
      >
        <div className="mobile-menu__list">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={close}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`mobile-menu__link${
                pathname === item.href ? " is-active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          onClick={close}
          className="btn btn--primary mobile-menu__cta"
        >
          Kennismaken
        </Link>
      </nav>
    </header>
  );
}

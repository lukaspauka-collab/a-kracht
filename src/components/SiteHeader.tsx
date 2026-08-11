"use client";

import { useCallback, useEffect, useState } from "react";
import { NAV_ITEMS, type NavigateFn, type Page } from "./site";

export default function SiteHeader({
  page,
  navigate,
}: {
  page: Page;
  navigate: NavigateFn;
}) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  const go = (target: Page) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(target);
    close();
  };

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
        <a href="#" onClick={go("home")} className="brand">
          <span className="brand-name">A-Kracht begeleiding</span>
          <span className="brand-dot" />
        </a>
        <nav aria-label="Hoofdnavigatie" className="nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href="#"
              onClick={go(item.key)}
              aria-current={page === item.key ? "page" : undefined}
              className={`nav-link${page === item.key ? " is-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            onClick={go("contact")}
            className="btn btn--primary btn--sm nav-cta"
          >
            Kennismaken
          </a>
        </nav>
        <div className="header-actions">
          <a
            href="#"
            onClick={go("contact")}
            className="btn btn--primary btn--sm header-cta"
          >
            Kennismaken
          </a>
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
            <a
              key={item.key}
              href="#"
              onClick={go(item.key)}
              aria-current={page === item.key ? "page" : undefined}
              className={`mobile-menu__link${
                page === item.key ? " is-active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#"
          onClick={go("contact")}
          className="btn btn--primary mobile-menu__cta"
        >
          Kennismaken
        </a>
      </nav>
    </header>
  );
}

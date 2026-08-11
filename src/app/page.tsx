"use client";

import { useCallback, useEffect, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HomePage from "@/components/HomePage";
import OverPage from "@/components/OverPage";
import DienstenPage from "@/components/DienstenPage";
import OrganisatiePage from "@/components/OrganisatiePage";
import ContactPage from "@/components/ContactPage";
import type { Page } from "@/components/site";

export default function Site() {
  const [page, setPage] = useState<Page>("home");

  const navigate = useCallback((next: Page) => {
    setPage(next);
    window.scrollTo(0, 0);
  }, []);

  // Scroll-reveal: fade + rise each [data-reveal] section into view as it
  // enters the viewport. Re-runs whenever the active page changes so the new
  // page's sections animate in. Mirrors the original design's IntersectionObserver.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [page]);

  return (
    <div className="site">
      <SiteHeader page={page} navigate={navigate} />
      <main>
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "over" && <OverPage />}
        {page === "diensten" && <DienstenPage navigate={navigate} />}
        {page === "organisatie" && <OrganisatiePage navigate={navigate} />}
        {page === "contact" && <ContactPage />}
      </main>
      <SiteFooter navigate={navigate} />
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { setConsent, useConsent } from "./consent";

export default function CookieConsent() {
  const consent = useConsent();
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (consent === null) acceptRef.current?.focus();
  }, [consent]);

  useEffect(() => {
    if (consent !== null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setConsent({ preferences: false, analytics: false, marketing: false });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [consent]);

  if (consent !== null) return null;

  const accept = () => {
    setConsent({ preferences: true, analytics: true, marketing: true });
  };

  const reject = () => {
    setConsent({ preferences: false, analytics: false, marketing: false });
  };

  const goPrivacy = () => {
    setConsent({ preferences: false, analytics: false, marketing: false });
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="cookie-consent"
    >
      <div className="cookie-consent__body">
        <h2 id="cookie-consent-title" className="cookie-consent__title">
          Cookies en privacy
        </h2>
        <p className="cookie-consent__text">
          A-Kracht begeleiding plaatst alleen noodzakelijke cookies. Er worden
          geen tracking- of marketingcookies geplaatst. Wil je later wel
          voorkeuren en statistieken toestaan, dan kan dat.
        </p>
        <Link href="/privacy" onClick={goPrivacy} className="cookie-consent__link">
          Lees ons cookie- en privacybeleid
        </Link>
      </div>
      <div className="cookie-consent__actions">
        <button ref={acceptRef} onClick={accept} className="btn btn--primary">
          Alles accepteren
        </button>
        <button onClick={reject} className="btn btn--ghost">
          Alleen noodzakelijk
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import ImageSlot from "./ImageSlot";

const CONTACT_INFO = [
  {
    sw: "sw-sage",
    color: "var(--sage-strong)",
    glyph: "✉",
    label: "E-mail",
    value: "info@a-kracht.nl",
    href: "mailto:info@a-kracht.nl",
  },
  {
    sw: "sw-clay",
    color: "var(--clay)",
    glyph: "☎",
    label: "Telefoon",
    value: "06 – 00 00 00 00",
    href: "tel:+31600000000",
  },
  {
    sw: "sw-sage",
    color: "var(--sage-strong)",
    glyph: "◷",
    label: "Bereikbaar",
    value: "Ma t/m vr, 09:00 – 17:00",
  },
  {
    sw: "sw-blue",
    color: "var(--blue-ink)",
    glyph: "⌂",
    label: "Locatie",
    value: "Delfgauw, Zuid-Holland",
  },
];

const FAQ = [
  {
    q: "Is er nu plek?",
    a: "Het huis heeft negen plekken. Is alles bezet, dan kijken we naar overbruggingszorg of begeleiding thuis tot er ruimte is.",
  },
  {
    q: "Heb ik een indicatie nodig?",
    a: "Voor wonen wel. Heb je die nog niet, dan helpen we bij de aanvraag bij het CIZ of de gemeente.",
  },
  {
    q: "Kan familie langskomen?",
    a: "Ja, in overleg met de bewoner. We houden korte lijnen met naasten, met respect voor ieders privacy.",
  },
  {
    q: "Waar kan ik een klacht melden?",
    a: "Eerst bij Moniek zelf. Kom je er samen niet uit, dan loopt het via de onafhankelijke klachtenregeling van Coöperatie de Delta.",
    last: true,
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const onSubmit: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    setStatus("Bedankt — je bericht is verstuurd.");
  };

  return (
    <div>
      {/* header */}
      <section data-reveal className="pad-head" style={{ padding: "72px 24px 48px" }}>
        <div className="container" style={{ padding: 0 }}>
          <p className="eyebrow" style={{ margin: "0 0 14px" }}>
            Contact
          </p>
          <h1 className="page-title" style={{ margin: "0 0 20px", maxWidth: "18ch" }}>
            Even kennismaken?
          </h1>
          <p className="lead" style={{ maxWidth: "56ch" }}>
            Laat een bericht achter of bel. Je krijgt altijd Moniek zelf aan de
            lijn — meestal binnen twee werkdagen.
          </p>
        </div>
      </section>

      {/* form + info */}
      <section data-reveal className="pad-b" style={{ padding: "0 24px 96px" }}>
        <div
          className="container split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.15fr) minmax(0,0.85fr)",
            gap: 48,
            alignItems: "start",
            padding: 0,
          }}
        >
          <form
            onSubmit={onSubmit}
            className="contact-form"
            style={{
              background: "var(--paper)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "38px 40px 42px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label htmlFor="naam" className="field-label">
                  Naam
                </label>
                <input id="naam" name="naam" required className="field" />
              </div>
              <div
                className="grid-2"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
                  gap: 18,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label htmlFor="email" className="field-label">
                    E-mailadres
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="field"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label htmlFor="tel" className="field-label">
                    Telefoon{" "}
                    <span style={{ color: "var(--muted)", fontWeight: 400 }}>
                      (optioneel)
                    </span>
                  </label>
                  <input id="tel" name="telefoon" type="tel" className="field" />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label htmlFor="bericht" className="field-label">
                  Bericht
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  rows={6}
                  required
                  className="field"
                  style={{ lineHeight: 1.7, resize: "vertical" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  flexWrap: "wrap",
                }}
              >
                <button type="submit" className="btn btn--primary" style={{ padding: "14px 28px" }}>
                  Verstuur bericht
                </button>
                <span
                  aria-live="polite"
                  style={{
                    fontSize: 14.5,
                    color: "var(--sage-strong)",
                    transition: "opacity 240ms ease",
                    opacity: status ? 1 : 0,
                  }}
                >
                  {status}
                </span>
              </div>
            </div>
          </form>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              className="card"
              style={{ padding: "32px 34px", borderRadius: 20 }}
            >
              <h2
                className="serif"
                style={{ fontSize: 21, fontWeight: 600, margin: "0 0 22px" }}
              >
                Contactgegevens
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {CONTACT_INFO.map((c) => (
                  <div
                    key={c.label}
                    style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                  >
                    <span
                      className={c.sw}
                      style={{
                        flex: "none",
                        width: 34,
                        height: 34,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: c.color,
                        fontSize: 15,
                      }}
                    >
                      {c.glyph}
                    </span>
                    <div>
                      <p style={{ margin: "0 0 2px", fontSize: 13, color: "var(--muted)" }}>
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          style={{
                            textDecoration: "none",
                            fontSize: 15.5,
                            fontWeight: 500,
                          }}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p style={{ margin: 0, fontSize: 15.5, fontWeight: 500 }}>
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                position: "relative",
                height: 200,
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <ImageSlot
                src="/images/straatbeeld.jpg"
                placeholder="Kaart of straatbeeld Delfgauw"
              />
            </div>

            <div
              className="card card--sand"
              style={{ padding: "30px 34px", borderRadius: 20 }}
            >
              <div
                className="sw-sage"
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--serif)",
                  fontSize: 19,
                  color: "var(--sage-strong)",
                  marginBottom: 18,
                }}
              >
                dD
              </div>
              <h2
                className="serif"
                style={{ fontSize: 19, fontWeight: 600, margin: "0 0 10px" }}
              >
                Coöperatie de Delta
              </h2>
              <p className="card-text" style={{ fontSize: 15 }}>
                A-Kracht begeleiding is aangesloten bij de coöperatie. Vragen over
                kwaliteit, klachten of samenwerking lopen ook via de Delta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section
        data-reveal
        className="pad-lg"
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--border)",
          padding: "88px 24px",
        }}
      >
        <div
          className="container split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.2fr)",
            gap: 64,
            alignItems: "start",
            padding: 0,
          }}
        >
          <div>
            <p className="eyebrow">Veelgestelde vragen</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: "0 0 14px", lineHeight: 1.3 }}
            >
              Voordat je belt
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.8, fontSize: 16 }}>
              Staat jouw vraag er niet bij? Stel hem gerust — geen vraag is te
              klein.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FAQ.map((f) => (
              <div
                key={f.q}
                style={{
                  padding: "22px 0",
                  borderTop: "1px solid var(--border)",
                  borderBottom: f.last ? "1px solid var(--border)" : undefined,
                }}
              >
                <h3 className="card-title" style={{ fontSize: 18, margin: "0 0 8px" }}>
                  {f.q}
                </h3>
                <p className="card-text" style={{ lineHeight: 1.75 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

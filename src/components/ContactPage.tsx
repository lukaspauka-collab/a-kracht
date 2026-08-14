"use client";

import { useState } from "react";
import ImageSlot from "./ImageSlot";
import type { SiteContent } from "@/content/types";

/**
 * The info rows arrive already resolved against `site` — see the contact route.
 * Resolving on the server keeps the site-wide details in one place and keeps
 * the superseded values out of the payload sent to the browser.
 */
type ContactContent = Omit<SiteContent["contact"], "infoRows"> & {
  infoRows: {
    sw: string;
    color: string;
    glyph: string;
    label: string;
    value: string;
    href: string;
  }[];
};

export default function ContactPage({ content }: { content: ContactContent }) {
  const [status, setStatus] = useState("");
  const faqRows = content.faq;
  const infoRows = content.infoRows;

  const onSubmit: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    setStatus(content.formSuccess);
  };

  return (
    <div>
      {/* header */}
      <section data-reveal className="pad-head" style={{ padding: "72px 24px 48px" }}>
        <div className="container" style={{ padding: 0 }}>
          <p className="eyebrow" style={{ margin: "0 0 14px" }}>
            {content.eyebrow}
          </p>
          <h1 className="page-title" style={{ margin: "0 0 20px", maxWidth: "18ch" }}>
            {content.title}
          </h1>
          <p className="lead" style={{ maxWidth: "56ch" }}>
            {content.lead}
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
                  {content.formNameLabel}
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
                    {content.formEmailLabel}
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
                    {content.formPhoneLabel}{" "}
                    <span style={{ color: "var(--muted)", fontWeight: 400 }}>
                      {content.formPhoneOptional}
                    </span>
                  </label>
                  <input id="tel" name="telefoon" type="tel" className="field" />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label htmlFor="bericht" className="field-label">
                  {content.formMessageLabel}
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
                  {content.formSubmit}
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
                {content.infoTitle}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {infoRows.map((c) => (
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
                src={content.streetImage.src}
                placeholder={content.streetImage.placeholder}
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
                {content.deltaBadgeGlyph}
              </div>
              <h2
                className="serif"
                style={{ fontSize: 19, fontWeight: 600, margin: "0 0 10px" }}
              >
                {content.deltaTitle}
              </h2>
              <p className="card-text" style={{ fontSize: 15 }}>
                {content.deltaText}
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
            <p className="eyebrow">{content.faqEyebrow}</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: "0 0 14px", lineHeight: 1.3 }}
            >
              {content.faqTitle}
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.8, fontSize: 16 }}>
              {content.faqLead}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqRows.map((f, i) => (
              <div
                key={f.q}
                style={{
                  padding: "22px 0",
                  borderTop: "1px solid var(--border)",
                  borderBottom:
                    i === faqRows.length - 1 ? "1px solid var(--border)" : undefined,
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

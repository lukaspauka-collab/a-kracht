import ImageSlot from "./ImageSlot";
import type { SiteContent } from "@/content/types";

type OverContent = SiteContent["over"];

export default function OverPage({ content }: { content: OverContent }) {
  return (
    <div>
      {/* header */}
      <section data-reveal style={{ padding: "72px 24px 40px" }}>
        <div className="container" style={{ padding: 0 }}>
          <p className="eyebrow" style={{ margin: "0 0 14px" }}>
            {content.eyebrow}
          </p>
          <h1
            className="page-title"
            style={{ margin: "0 0 22px", maxWidth: "18ch" }}
          >
            {content.name}
          </h1>
          <p
            className="serif"
            style={{
              fontSize: 24,
              lineHeight: 1.6,
              color: "var(--sage-strong)",
              margin: 0,
              maxWidth: "40ch",
            }}
          >
            &ldquo;{content.quote}&rdquo;
          </p>
          <a
            href={content.linkedinHref}
            target="_blank"
            rel="noreferrer"
            className="link-quiet"
            style={{ marginTop: 26, display: "inline-block" }}
          >
            {content.linkedinLabel} →
          </a>
        </div>
      </section>

      {/* portrait + intro + timeline */}
      <section data-reveal style={{ padding: "44px 24px 88px" }}>
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
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-14px -14px auto -14px",
                height: 340,
                borderRadius: "150px 150px 18px 18px",
                background: "rgba(138,166,184,0.16)",
              }}
            />
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 400,
                borderRadius: "150px 150px 18px 18px",
                overflow: "hidden",
                boxShadow: "0 16px 40px rgba(43,42,39,0.10)",
              }}
            >
              <ImageSlot
                src={content.portrait.src}
                placeholder={content.portrait.placeholder}
              />
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.8,
                color: "var(--ink)",
                margin: "0 0 20px",
              }}
            >
              {content.intro1}
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.8,
                color: "var(--muted)",
                margin: "0 0 20px",
              }}
            >
              {content.intro2}
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.8,
                color: "var(--muted)",
                margin: "0 0 42px",
              }}
            >
              {content.intro3}
            </p>

            <h2
              className="serif"
              style={{ fontSize: 23, fontWeight: 600, margin: "0 0 26px" }}
            >
              {content.timelineTitle}
            </h2>
            <ol
              style={{
                listStyle: "none",
                margin: 0,
                padding: "0 0 0 26px",
                borderLeft: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: 28,
              }}
            >
              {content.timeline.map((t) => (
                <li key={t.year} style={{ position: "relative" }}>
                  <span
                    style={{
                      position: "absolute",
                      left: -32,
                      top: 6,
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: t.accent ? "var(--clay)" : "var(--sand)",
                      border: `2px solid ${t.accent ? "var(--clay)" : "var(--sage)"}`,
                    }}
                  />
                  <p
                    className="serif"
                    style={{
                      margin: "0 0 4px",
                      fontSize: 15,
                      color: "var(--clay)",
                    }}
                  >
                    {t.year}
                  </p>
                  <p className="card-text">
                    <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                      {t.strong}
                    </strong>
                    {t.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* missie / visie */}
      <section
        data-reveal
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "88px 24px",
        }}
      >
        <div
          className="container grid-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            padding: 0,
          }}
        >
          <div>
            <h2
              className="serif"
              style={{ fontSize: 28, fontWeight: 500, margin: "0 0 16px" }}
            >
              {content.missionTitle}
            </h2>
            <p
              style={{
                margin: 0,
                lineHeight: 1.8,
                color: "var(--muted)",
                fontSize: 16.5,
              }}
            >
              {content.missionText}
            </p>
          </div>
          <div>
            <h2
              className="serif"
              style={{ fontSize: 28, fontWeight: 500, margin: "0 0 16px" }}
            >
              {content.visionTitle}
            </h2>
            <p
              style={{
                margin: 0,
                lineHeight: 1.8,
                color: "var(--muted)",
                fontSize: 16.5,
              }}
            >
              {content.visionText}
            </p>
          </div>
        </div>
      </section>

      {/* waar ik me op richt */}
      <section data-reveal style={{ padding: "88px 24px 0" }}>
        <div className="container" style={{ padding: 0 }}>
          <h2 className="section-title" style={{ fontSize: 32, margin: "0 0 18px" }}>
            {content.focusTitle}
          </h2>
          <p
            style={{
              maxWidth: "60ch",
              margin: "0 0 40px",
              color: "var(--muted)",
              lineHeight: 1.8,
              fontSize: 16.5,
            }}
          >
            {content.focusLead}
          </p>
          <div
            className="grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 22,
            }}
          >
            {content.focus.map((f) => (
              <div key={f.n} className="card" style={{ padding: "30px 32px" }}>
                <p
                  className="serif"
                  style={{ margin: "0 0 14px", fontSize: 15, color: "var(--clay)" }}
                >
                  {f.n}
                </p>
                <h3 className="card-title" style={{ fontSize: 19 }}>
                  {f.title}
                </h3>
                <p className="card-text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* hoe ik werk + opleiding */}
      <section data-reveal style={{ padding: "88px 24px 0" }}>
        <div className="container" style={{ padding: 0 }}>
          <h2 className="section-title" style={{ fontSize: 32, margin: "0 0 18px" }}>
            {content.methodTitle}
          </h2>
          <p
            style={{
              maxWidth: "60ch",
              margin: "0 0 40px",
              color: "var(--muted)",
              lineHeight: 1.8,
              fontSize: 16.5,
            }}
          >
            {content.methodLead}
          </p>
          <div
            className="grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 22,
            }}
          >
            {content.method.map((m) => (
              <div key={m.n} className="card" style={{ padding: "30px 32px" }}>
                <p
                  className="serif"
                  style={{ margin: "0 0 14px", fontSize: 15, color: "var(--clay)" }}
                >
                  {m.n}
                </p>
                <h3 className="card-title" style={{ fontSize: 19 }}>
                  {m.title}
                </h3>
                <p className="card-text">{m.text}</p>
              </div>
            ))}
          </div>

          <div
            className="split"
            style={{
              marginTop: 56,
              display: "grid",
              gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.2fr)",
              gap: 64,
              alignItems: "start",
              paddingTop: 44,
              borderTop: "1px solid var(--border)",
            }}
          >
            <h2
              className="serif"
              style={{ fontSize: 26, fontWeight: 500, margin: 0 }}
            >
              {content.educationTitle}
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {content.education.map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 24,
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ fontSize: 15.5 }}>{row.label}</span>
                  <span style={{ fontSize: 15, color: "var(--muted)" }}>
                    {row.meta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* kernwaarden in de praktijk */}
      <section data-reveal style={{ padding: "88px 24px" }}>
        <div className="container" style={{ padding: 0 }}>
          <h2 className="section-title" style={{ fontSize: 32, margin: "0 0 40px" }}>
            {content.practiceTitle}
          </h2>
          <div
            className="grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 22,
            }}
          >
            {content.practice.map((p, i) => (
              <article
                key={i}
                className="card"
                style={{
                  padding: "30px 32px",
                  borderLeft: `3px solid ${p.border}`,
                  borderRadius: 14,
                }}
              >
                <h3 className="card-title" style={{ fontSize: 20 }}>
                  {p.title}
                </h3>
                <p className="card-text">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

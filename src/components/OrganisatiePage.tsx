import Link from "next/link";
import type { SiteContent } from "@/content/types";

type OrganisatieContent = SiteContent["organisatie"];

export default function OrganisatiePage({
  content,
}: {
  content: OrganisatieContent;
}) {
  return (
    <div>
      {/* header */}
      <section data-reveal className="pad-head" style={{ padding: "72px 24px 56px" }}>
        <div className="container" style={{ padding: 0 }}>
          <p className="eyebrow" style={{ margin: "0 0 14px" }}>
            {content.eyebrow}
          </p>
          <h1 className="page-title" style={{ margin: "0 0 22px", maxWidth: "20ch" }}>
            {content.title}
          </h1>
          <p className="lead" style={{ maxWidth: "58ch" }}>
            {content.lead}
          </p>
        </div>
      </section>

      {/* wie zijn wij */}
      <section data-reveal className="pad-b" style={{ padding: "0 24px 88px" }}>
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
            <p className="eyebrow">{content.whoEyebrow}</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: 0, lineHeight: 1.3 }}
            >
              {content.whoTitle}
            </h2>
          </div>
          <div>
            <p
              style={{
                margin: "0 0 16px",
                lineHeight: 1.8,
                color: "var(--ink)",
                fontSize: 16.5,
              }}
            >
              {content.whoP1}
            </p>
            <p
              style={{
                margin: "0 0 20px",
                lineHeight: 1.8,
                color: "var(--muted)",
                fontSize: 16,
              }}
            >
              {content.whoP2}
            </p>
            <a
              href={content.whoLinkHref}
              target="_blank"
              rel="noreferrer"
              className="link-quiet"
            >
              {content.whoLinkLabel} →
            </a>
          </div>
        </div>
      </section>

      {/* contact- en organisatiegegevens */}
      <section
        data-reveal
        className="pad-lg"
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
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
            <p className="eyebrow">{content.dataEyebrow}</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: "0 0 14px", lineHeight: 1.3 }}
            >
              {content.dataTitle}
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.8, fontSize: 16 }}>
              {content.dataLead}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {content.dataRows.map((row) => (
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
                <span style={{ fontSize: 15, color: "var(--muted)", textAlign: "right" }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* zorgaanbod en doelgroep */}
      <section data-reveal className="pad-lg" style={{ padding: "88px 24px" }}>
        <div className="container" style={{ padding: 0 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 20,
              marginBottom: 40,
            }}
          >
            <div>
              <p className="eyebrow">{content.offerEyebrow}</p>
              <h2 className="section-title" style={{ margin: 0 }}>
                {content.offerTitle}
              </h2>
            </div>
            <Link href="/diensten" className="link-quiet">
              {content.offerLinkLabel} →
            </Link>
          </div>
          <div
            className="grid-2"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}
          >
            {content.offer.map((o) => (
              <article
                key={o.title}
                className="card"
                style={{
                  padding: "30px 32px",
                  borderLeft: `3px solid ${o.border}`,
                  borderRadius: 14,
                }}
              >
                <h3 className="card-title" style={{ fontSize: 20 }}>
                  {o.title}
                </h3>
                <p className="card-text">{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* kwaliteit en veiligheid */}
      <section
        data-reveal
        className="pad-lg"
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "88px 24px",
        }}
      >
        <div className="container" style={{ padding: 0 }}>
          <div style={{ maxWidth: "62ch", marginBottom: 44 }}>
            <p className="eyebrow">{content.qualityEyebrow}</p>
            <h2 className="section-title" style={{ margin: "0 0 16px" }}>
              {content.qualityTitle}
            </h2>
            <p
              style={{
                margin: 0,
                color: "var(--muted)",
                lineHeight: 1.8,
                fontSize: 16.5,
              }}
            >
              {content.qualityLead}
            </p>
          </div>
          <div
            className="grid-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 20,
            }}
          >
            {content.quality.map((q) => (
              <div key={q.n} className="card" style={{ padding: "26px 26px 30px" }}>
                <p
                  className="serif"
                  style={{ margin: "0 0 14px", fontSize: 15, color: "var(--clay)" }}
                >
                  {q.n}
                </p>
                <h3 className="card-title" style={{ fontSize: 18, margin: "0 0 8px" }}>
                  {q.title}
                </h3>
                <p className="card-text" style={{ lineHeight: 1.65, fontSize: 15 }}>
                  {q.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* klachten en geschillen */}
      <section data-reveal className="pad-lg" style={{ padding: "88px 24px" }}>
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
            <p className="eyebrow">{content.complaintEyebrow}</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: 0, lineHeight: 1.3 }}
            >
              {content.complaintTitle}
            </h2>
          </div>
          <div>
            <p
              style={{
                margin: "0 0 16px",
                lineHeight: 1.8,
                color: "var(--muted)",
                fontSize: 16,
              }}
            >
              {content.complaintP1}
            </p>
            <p style={{ margin: "0 0 26px", lineHeight: 1.8, color: "var(--muted)", fontSize: 16 }}>
              {content.complaintP2}
            </p>
            <a
              href={content.complaintCtaHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              {content.complaintCtaLabel}
            </a>
          </div>
        </div>
      </section>

      {/* aanmelden */}
      <section
        data-reveal
        className="pad-lg"
        style={{ background: "var(--sage)", color: "#FCFAF7", padding: "76px 24px" }}
      >
        <div
          className="container band-inner"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            padding: 0,
          }}
        >
          <div style={{ maxWidth: "56ch" }}>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: "0 0 12px", lineHeight: 1.3 }}
            >
              {content.applyTitle}
            </h2>
            <p
              style={{
                margin: 0,
                lineHeight: 1.75,
                color: "rgba(252,250,247,0.86)",
                fontSize: 16.5,
              }}
            >
              {content.applyText}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link href={content.applyCtaHref} className="btn btn--light">
              {content.applyCtaLabel}
            </Link>
            <a
              href={content.applyCta2Href}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
              style={{
                background: "transparent",
                color: "#FCFAF7",
                borderColor: "rgba(252,250,247,0.5)",
              }}
            >
              {content.applyCta2Label}
            </a>
          </div>
        </div>
      </section>

      {/* medezeggenschap / cliëntenraad */}
      <section data-reveal className="pad-lg" style={{ padding: "88px 24px" }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ maxWidth: "62ch", marginBottom: 44 }}>
            <p className="eyebrow">{content.councilEyebrow}</p>
            <h2 className="section-title" style={{ margin: "0 0 18px" }}>
              {content.councilTitle}
            </h2>
            <p style={{ margin: "0 0 16px", lineHeight: 1.8, color: "var(--muted)", fontSize: 16.5 }}>
              {content.councilP1}
            </p>
            <p style={{ margin: "0 0 16px", lineHeight: 1.8, color: "var(--muted)", fontSize: 16.5 }}>
              {content.councilP2}
            </p>
            <p style={{ margin: 0, lineHeight: 1.8, color: "var(--muted)", fontSize: 16.5 }}>
              {content.councilP3}
            </p>
          </div>

          <div
            className="card card--sand"
            style={{ padding: "34px 36px", borderRadius: 18, marginBottom: 56 }}
          >
            <h3 className="serif" style={{ fontSize: 21, fontWeight: 600, margin: "0 0 18px" }}>
              {content.councilTasksTitle}
            </h3>
            <ul className="check-list" style={{ margin: 0 }}>
              {content.councilTasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p
              style={{
                margin: "22px 0 0",
                lineHeight: 1.8,
                color: "var(--muted)",
                fontSize: 15.5,
              }}
            >
              {content.councilNote}
            </p>
          </div>

          <h2 className="section-title" style={{ fontSize: 32, margin: "0 0 18px" }}>
            {content.commissionsTitle}
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
            {content.commissionsLead}
          </p>
          <div
            className="grid-2"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}
          >
            {content.commissions.map((c) => (
              <article key={c.title} className="card" style={{ padding: "32px 34px" }}>
                <span className={`card-icon ${c.sw}`} />
                <h3 className="card-title" style={{ fontSize: 20, margin: "0 0 10px" }}>
                  {c.title}
                </h3>
                <p className="card-text" style={{ margin: "0 0 14px" }}>
                  {c.text}
                </p>
                <ul className="check-list" style={{ margin: 0 }}>
                  {c.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* privacyverklaring */}
      <section
        data-reveal
        className="pad-lg"
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--border)",
          padding: "88px 24px",
          marginBottom: 92,
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
            <p className="eyebrow">{content.privacyEyebrow}</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: 0, lineHeight: 1.3 }}
            >
              {content.privacyTitle}
            </h2>
          </div>
          <div>
            <p
              style={{
                margin: "0 0 16px",
                lineHeight: 1.8,
                color: "var(--muted)",
                fontSize: 16,
              }}
            >
              {content.privacyP1}{" "}
              <a
                href={content.privacyLinkHref}
                target="_blank"
                rel="noreferrer"
              >
                {content.privacyLinkLabel}
              </a>
              .
            </p>
            <p style={{ margin: 0, lineHeight: 1.8, color: "var(--muted)", fontSize: 16 }}>
              {content.privacyP2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

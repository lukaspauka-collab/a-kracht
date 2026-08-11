import Link from "next/link";
import type { SiteContent } from "@/content/types";

type DienstenContent = SiteContent["diensten"];

export default function DienstenPage({ content }: { content: DienstenContent }) {
  return (
    <div>
      {/* header */}
      <section data-reveal className="pad-head" style={{ padding: "72px 24px 52px" }}>
        <div className="container" style={{ padding: 0 }}>
          <p className="eyebrow" style={{ margin: "0 0 14px" }}>
            {content.eyebrow}
          </p>
          <h1 className="page-title" style={{ margin: "0 0 20px", maxWidth: "20ch" }}>
            {content.title}
          </h1>
          <p className="lead" style={{ maxWidth: "58ch" }}>
            {content.lead}
          </p>
        </div>
      </section>

      {/* service grid */}
      <section data-reveal className="pad-b" style={{ padding: "0 24px 88px" }}>
        <div
          className="container grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 20,
            padding: 0,
          }}
        >
          {content.services.map((s) => (
            <article
              key={s.title}
              className="card card--hover-lift"
              style={{ padding: "26px 26px 30px" }}
            >
              <span className={`card-icon--sm ${s.sw}`} />
              <h3 className="card-title" style={{ fontSize: 19, margin: "0 0 8px" }}>
                {s.title}
              </h3>
              <p className="card-text" style={{ lineHeight: 1.65, fontSize: 15 }}>
                {s.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* toelichting overbruggingszorg */}
      <section data-reveal className="pad-b" style={{ padding: "0 24px 92px" }}>
        <div
          className="container split overbrugging"
          style={{
            background: "var(--paper)",
            border: "1px solid var(--border)",
            borderLeft: "4px solid var(--clay)",
            borderRadius: 18,
            padding: "44px 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <p className="eyebrow">{content.explainEyebrow}</p>
            <h2
              className="serif"
              style={{ fontSize: 29, fontWeight: 500, margin: 0, lineHeight: 1.3 }}
            >
              {content.explainTitle}
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
              {content.explainP1}
            </p>
            <p style={{ margin: 0, lineHeight: 1.8, color: "var(--muted)", fontSize: 16 }}>
              {content.explainP2}
            </p>
          </div>
        </div>
      </section>

      {/* aanmelding steps */}
      <section data-reveal className="pad-b" style={{ padding: "0 24px 92px" }}>
        <div className="container" style={{ padding: 0 }}>
          <h2 className="section-title" style={{ fontSize: 32, margin: "0 0 18px" }}>
            {content.stepsTitle}
          </h2>
          <p
            style={{
              maxWidth: "58ch",
              margin: "0 0 40px",
              color: "var(--muted)",
              lineHeight: 1.8,
              fontSize: 16.5,
            }}
          >
            {content.stepsLead}
          </p>
          <div
            className="grid-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 20,
            }}
          >
            {content.steps.map((s) => (
              <div key={s.n} className="card" style={{ padding: "26px 26px 30px" }}>
                <p
                  className="serif"
                  style={{ margin: "0 0 14px", fontSize: 15, color: "var(--clay)" }}
                >
                  {s.n}
                </p>
                <h3 className="card-title" style={{ fontSize: 18, margin: "0 0 8px" }}>
                  {s.title}
                </h3>
                <p className="card-text" style={{ lineHeight: 1.65, fontSize: 15 }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* financiering */}
      <section
        data-reveal
        className="pad-lg"
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "88px 24px",
          marginBottom: 92,
        }}
      >
        <div
          className="container split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,0.85fr) minmax(0,1.15fr)",
            gap: 64,
            alignItems: "start",
            padding: 0,
          }}
        >
          <div>
            <p className="eyebrow">{content.fundingEyebrow}</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: "0 0 14px", lineHeight: 1.3 }}
            >
              {content.fundingTitle}
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.8, fontSize: 16 }}>
              {content.fundingLead}
            </p>
          </div>
          <div
            className="grid-2"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            {content.funding.map((f) => (
              <div
                key={f.title}
                className="card card--sand"
                style={{ padding: "24px 26px", borderRadius: 14 }}
              >
                <h3 className="card-title" style={{ fontSize: 18, margin: "0 0 8px" }}>
                  {f.title}
                </h3>
                <p className="card-text" style={{ fontSize: 15 }}>
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* green CTA band */}
      <section
        data-reveal
        className="pad-lg"
        style={{ background: "var(--sage)", color: "#FCFAF7", padding: "72px 24px" }}
      >
        <div
          className="container band-inner"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 28,
            padding: 0,
          }}
        >
          <h2
            className="serif"
            style={{ fontSize: 29, fontWeight: 500, margin: 0, lineHeight: 1.35, maxWidth: "34ch" }}
          >
            {content.ctaTitle}
          </h2>
          <Link href={content.ctaHref} className="btn btn--light">
            {content.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}

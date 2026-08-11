import Link from "next/link";
import ImageSlot from "./ImageSlot";
import Highlight from "./Highlight";
import type { SiteContent } from "@/content/types";

type HomeContent = SiteContent["home"];

const HIGHLIGHT_STYLE: React.CSSProperties = {
  color: "var(--sage-strong)",
  background:
    "linear-gradient(transparent 68%, rgba(110,139,116,0.22) 68%, rgba(110,139,116,0.22) 92%, transparent 92%)",
  padding: "0 2px",
};

export default function HomePage({ content }: { content: HomeContent }) {
  const dayRows = content.day;
  return (
    <div>
      {/* ============ HERO ============ */}
      <section
        data-reveal
        className="pad-lg"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "84px 24px 96px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(#E5DFD6 1.15px, transparent 1.15px)",
            backgroundSize: "26px 26px",
            opacity: 0.55,
            pointerEvents: "none",
          }}
        />
        <div
          className="container hero-grid"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "minmax(0,1.05fr) minmax(0,0.95fr)",
            gap: 72,
            alignItems: "center",
            padding: 0,
          }}
        >
          <div>
            <p
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                margin: "0 0 26px",
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 1,
                  background: "var(--clay)",
                  display: "inline-block",
                }}
              />
              {content.heroEyebrow}
            </p>
            <h1
              className="serif hero-title"
              style={{
                fontSize: 60,
                lineHeight: 1.07,
                letterSpacing: "-0.015em",
                fontWeight: 500,
                margin: "0 0 26px",
                textWrap: "pretty",
              }}
            >
              <Highlight text={content.heroTitle} highlightStyle={HIGHLIGHT_STYLE} />
            </h1>
            <p
              style={{
                maxWidth: "46ch",
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--muted)",
                margin: "0 0 36px",
              }}
            >
              {content.heroLead}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link href={content.heroCtaPrimaryHref} className="btn btn--primary">
                {content.heroCtaPrimary}
              </Link>
              <Link href={content.heroCtaSecondaryHref} className="btn btn--ghost">
                {content.heroCtaSecondary}
              </Link>
            </div>
          </div>
          <div
            className="hero-art"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 26,
                left: 8,
                width: "min(300px, calc(100% - 16px))",
                height: 400,
                border: "1px solid var(--clay)",
                opacity: 0.45,
                borderRadius: "170px 170px 18px 18px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -14,
                right: 22,
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "var(--blue)",
                opacity: 0.18,
              }}
            />
            <div
              style={{
                position: "relative",
                width: "min(326px, 100%)",
                height: 426,
                borderRadius: "170px 170px 18px 18px",
                overflow: "hidden",
                boxShadow: "0 18px 44px rgba(43,42,39,0.10)",
              }}
            >
              <ImageSlot
                src={content.heroImage.src}
                placeholder={content.heroImage.placeholder}
              />
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{
            position: "relative",
            marginTop: 74,
            display: "flex",
            flexWrap: "wrap",
            gap: "14px 56px",
            paddingTop: 26,
            borderTop: "1px solid var(--border)",
            color: "var(--muted)",
            fontSize: 14.5,
          }}
        >
          {content.stats.map((stat) => (
            <span key={stat.label}>
              <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                {stat.value}
              </strong>{" "}
              {stat.label}
            </span>
          ))}
        </div>
      </section>

      {/* ============ QUOTE ============ */}
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
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span
            className="serif"
            style={{
              fontSize: 52,
              lineHeight: 0,
              color: "var(--clay)",
              opacity: 0.6,
            }}
          >
            &ldquo;
          </span>
          <p
            className="serif quote-text"
            style={{
              fontSize: 31,
              lineHeight: 1.5,
              fontWeight: 400,
              margin: "14px 0 26px",
              textWrap: "pretty",
            }}
          >
            {content.quoteText}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {content.quoteAuthor}
          </p>
        </div>
      </section>

      {/* ============ KERNWAARDEN ============ */}
      <section data-reveal className="pad-lg" style={{ padding: "92px 24px" }}>
        <div className="container" style={{ padding: 0 }}>
          <p className="eyebrow">{content.coreEyebrow}</p>
          <h2 className="section-title" style={{ margin: "0 0 46px" }}>
            {content.coreTitle}
          </h2>
          <div
            className="grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 22,
            }}
          >
            {content.core.map((v) => (
              <article
                key={v.title}
                className="card card--hover-border"
                style={{ padding: "32px 34px" }}
              >
                <span className={`card-icon ${v.sw}`} />
                <h3 className="card-title" style={{ fontSize: 21 }}>
                  {v.title}
                </h3>
                <p className="card-text">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AANBOD ============ */}
      <section
        data-reveal
        className="pad-lg"
        style={{
          background: "var(--paper)",
          borderTop: "1px solid var(--border)",
          padding: "92px 24px",
        }}
      >
        <div className="container" style={{ padding: 0 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 20,
              marginBottom: 44,
            }}
          >
            <div>
              <p className="eyebrow">{content.offerEyebrow}</p>
              <h2 className="section-title">{content.offerTitle}</h2>
            </div>
            <Link href="/diensten" className="link-quiet">
              {content.offerLinkLabel} →
            </Link>
          </div>
          <div
            className="grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 22,
            }}
          >
            {content.offer.map((o) => (
              <article
                key={o.n}
                className="card card--sand card--hover"
                style={{ padding: "30px 30px 34px" }}
              >
                <p
                  className="serif"
                  style={{ margin: "0 0 16px", fontSize: 15, color: "var(--clay)" }}
                >
                  {o.n}
                </p>
                <h3 className="card-title" style={{ fontSize: 21 }}>
                  {o.title}
                </h3>
                <p className="card-text">{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RITME ============ */}
      <section data-reveal className="pad-lg" style={{ padding: "92px 24px" }}>
        <div
          className="container split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)",
            gap: 64,
            alignItems: "start",
            padding: 0,
          }}
        >
          <div>
            <p className="eyebrow">{content.dayEyebrow}</p>
            <h2 className="section-title" style={{ margin: "0 0 18px" }}>
              {content.dayTitle}
            </h2>
            <p
              style={{
                margin: 0,
                color: "var(--muted)",
                lineHeight: 1.8,
                fontSize: 16.5,
              }}
            >
              {content.dayIntro}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {dayRows.map((d, i) => (
              <div
                key={d.time}
                style={{
                  display: "grid",
                  gridTemplateColumns: "88px 1fr",
                  gap: 24,
                  padding: "20px 0",
                  borderTop: "1px solid var(--border)",
                  borderBottom:
                    i === dayRows.length - 1 ? "1px solid var(--border)" : undefined,
                }}
              >
                <span
                  className="serif"
                  style={{ fontSize: 17, color: "var(--sage-strong)" }}
                >
                  {d.time}
                </span>
                <p className="card-text">
                  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>
                    {d.strong}
                  </strong>
                  {d.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section
        data-reveal
        className="pad-b"
        style={{ padding: "0 24px 92px", background: "var(--paper)" }}
      >
        <div className="container" style={{ padding: 0 }}>
          <div
            className="gallery-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)",
              gap: 20,
              height: 340,
            }}
          >
            <div
              className="gallery-main"
              style={{
                position: "relative",
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              <ImageSlot
                src={content.galleryMain.src}
                placeholder={content.galleryMain.placeholder}
              />
            </div>
            <div
              className="gallery-col"
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                gap: 20,
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: 18,
                  overflow: "hidden",
                }}
              >
                <ImageSlot
                  src={content.gallerySide1.src}
                  placeholder={content.gallerySide1.placeholder}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: 18,
                  overflow: "hidden",
                }}
              >
                <ImageSlot
                  src={content.gallerySide2.src}
                  placeholder={content.gallerySide2.placeholder}
                />
              </div>
            </div>
          </div>
          <p style={{ margin: "18px 0 0", fontSize: 14, color: "var(--muted)" }}>
            {content.galleryCaption}
          </p>
        </div>
      </section>

      {/* ============ VOOR WIE ============ */}
      <section data-reveal className="pad-lg" style={{ padding: "92px 24px" }}>
        <div className="container" style={{ padding: 0 }}>
          <h2 className="section-title" style={{ margin: "0 0 18px" }}>
            {content.audienceTitle}
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
            {content.audienceLead}
          </p>
          <div
            className="grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 22,
            }}
          >
            <div
              className="card"
              style={{
                padding: "30px 32px",
                borderLeft: "3px solid var(--sage)",
              }}
            >
              <h3 className="card-title" style={{ fontSize: 20, margin: "0 0 14px" }}>
                {content.audienceYesTitle}
              </h3>
              <ul className="check-list">
                {content.audienceYes.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
            <div
              className="card"
              style={{
                padding: "30px 32px",
                borderLeft: "3px solid var(--clay)",
              }}
            >
              <h3 className="card-title" style={{ fontSize: 20, margin: "0 0 14px" }}>
                {content.audienceNoTitle}
              </h3>
              <ul className="check-list">
                {content.audienceNo.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DELTA BAND ============ */}
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
              style={{
                fontSize: 30,
                fontWeight: 500,
                margin: "0 0 12px",
                lineHeight: 1.3,
              }}
            >
              {content.deltaTitle}
            </h2>
            <p
              style={{
                margin: 0,
                lineHeight: 1.75,
                color: "rgba(252,250,247,0.86)",
                fontSize: 16.5,
              }}
            >
              {content.deltaText}
            </p>
          </div>
          <Link href="/contact" className="btn btn--light">
            {content.deltaCta}
          </Link>
        </div>
      </section>
    </div>
  );
}

import ImageSlot from "./ImageSlot";
import type { NavigateFn, Page } from "./site";

const VALUES = [
  {
    sw: "sw-sage",
    title: "Veiligheid",
    text: "Voorspelbare dagen, duidelijke afspraken en een team dat je door en door kent.",
  },
  {
    sw: "sw-clay",
    title: "Kleinschaligheid",
    text: "Negen bewoners, één vast team. Geen wisselende gezichten, geen wachtrijen.",
  },
  {
    sw: "sw-blue",
    title: "Eigen regie",
    text: "Jij bepaalt het tempo. Wij ondersteunen waar het nodig is, en stappen terug waar het kan.",
  },
  {
    sw: "sw-sage",
    title: "Echt contact",
    text: "Zorg is mensenwerk. We zijn eerlijk, gewoon en dichtbij — ook op moeilijke dagen.",
  },
];

const OFFER = [
  {
    n: "01",
    title: "24-uurszorg",
    text: "Wonen met begeleiding die dag en nacht aanwezig is, in een huiselijke setting.",
  },
  {
    n: "02",
    title: "Overbruggingszorg",
    text: "Tijdelijke plek en begeleiding in de periode tot een definitieve woonplek.",
  },
  {
    n: "03",
    title: "Ambulante begeleiding",
    text: "Ondersteuning bij jou thuis: structuur, administratie, dagritme en contact.",
  },
];

const DAY = [
  {
    time: "07:30",
    strong: "Opstaan in eigen tempo.",
    text: " Begeleiding loopt langs, ontbijt staat klaar.",
  },
  {
    time: "09:30",
    strong: "Werk, school of dagbesteding.",
    text: " Wie thuis is, pakt iets in en om het huis op.",
  },
  {
    time: "17:30",
    strong: "Samen eten.",
    text: " Aanschuiven mag, alleen eten mag ook.",
  },
  {
    time: "22:00",
    strong: "Rust in huis.",
    text: " 's Nachts is er altijd een begeleider aanwezig.",
    last: true,
  },
];

export default function HomePage({ navigate }: { navigate: NavigateFn }) {
  const go = (target: Page) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(target);
  };

  return (
    <div>
      {/* ============ HERO ============ */}
      <section
        data-reveal
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
              Delfgauw · 24-uurszorg
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
              Kleinschalige,
              <br />
              <span
                style={{
                  color: "var(--sage-strong)",
                  background:
                    "linear-gradient(transparent 68%, rgba(110,139,116,0.22) 68%, rgba(110,139,116,0.22) 92%, transparent 92%)",
                  padding: "0 2px",
                }}
              >
                veilige
              </span>{" "}
              begeleiding
              <br />
              bij autisme
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
              Een klein, huiselijk huis voor negen bewoners. Geen instelling,
              maar rust, ritme en mensen die je kennen. Opgezet en geleid door
              Moniek Zondag, gespecialiseerd in autisme en comorbiditeit.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a href="#" onClick={go("contact")} className="btn btn--primary">
                Plan een kennismaking
              </a>
              <a href="#" onClick={go("diensten")} className="btn btn--ghost">
                Bekijk het aanbod
              </a>
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
                width: 300,
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
                width: 326,
                height: 426,
                borderRadius: "170px 170px 18px 18px",
                overflow: "hidden",
                boxShadow: "0 18px 44px rgba(43,42,39,0.10)",
              }}
            >
              <ImageSlot
                src="/images/huis-tuin.jpg"
                placeholder="Foto van het huis of de tuin"
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
          <span>
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>9</strong>{" "}
            bewoners
          </span>
          <span>
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>22</strong>{" "}
            jaar in de zorg
          </span>
          <span>
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>24/7</strong>{" "}
            aanwezige begeleiding
          </span>
          <span>Onderdeel van Coöperatie de Delta</span>
        </div>
      </section>

      {/* ============ QUOTE ============ */}
      <section
        data-reveal
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
            className="serif"
            style={{
              fontSize: 31,
              lineHeight: 1.5,
              fontWeight: 400,
              margin: "14px 0 26px",
              textWrap: "pretty",
            }}
          >
            Ieder mens heeft eigen kracht. Mijn werk is die kracht ruimte geven —
            in een omgeving die voorspelbaar, veilig en gewoon prettig is.
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
            Moniek Zondag · oprichter
          </p>
        </div>
      </section>

      {/* ============ KERNWAARDEN ============ */}
      <section data-reveal style={{ padding: "92px 24px" }}>
        <div className="container" style={{ padding: 0 }}>
          <p className="eyebrow">Kernwaarden</p>
          <h2 className="section-title" style={{ margin: "0 0 46px" }}>
            Waar wij elke dag op terugvallen
          </h2>
          <div
            className="grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 22,
            }}
          >
            {VALUES.map((v) => (
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
              <p className="eyebrow">Aanbod</p>
              <h2 className="section-title">Wat wij bieden</h2>
            </div>
            <a href="#" onClick={go("diensten")} className="link-quiet">
              Alle diensten →
            </a>
          </div>
          <div
            className="grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 22,
            }}
          >
            {OFFER.map((o) => (
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
      <section data-reveal style={{ padding: "92px 24px" }}>
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
            <p className="eyebrow">Een gewone dag</p>
            <h2 className="section-title" style={{ margin: "0 0 18px" }}>
              Ritme geeft rust
            </h2>
            <p
              style={{
                margin: 0,
                color: "var(--muted)",
                lineHeight: 1.8,
                fontSize: 16.5,
              }}
            >
              De dag heeft een vaste vorm, maar geen dwang. Wie een moeilijke
              ochtend heeft, mag die hebben. Wie liever op de eigen kamer eet,
              eet op de eigen kamer.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {DAY.map((d) => (
              <div
                key={d.time}
                style={{
                  display: "grid",
                  gridTemplateColumns: "88px 1fr",
                  gap: 24,
                  padding: "20px 0",
                  borderTop: "1px solid var(--border)",
                  borderBottom: d.last ? "1px solid var(--border)" : undefined,
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
              style={{
                position: "relative",
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              <ImageSlot
                src="/images/woonkamer.jpg"
                placeholder="Woonkamer of gevel van het huis"
              />
            </div>
            <div
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
                  src="/images/tuin.jpg"
                  placeholder="Detail: tuin, keuken"
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
                  src="/images/kamer.jpg"
                  placeholder="Detail: eigen kamer"
                />
              </div>
            </div>
          </div>
          <p style={{ margin: "18px 0 0", fontSize: 14, color: "var(--muted)" }}>
            Het huis in Delfgauw — negen eigen kamers, gedeelde woonkamer en
            tuin.
          </p>
        </div>
      </section>

      {/* ============ VOOR WIE ============ */}
      <section data-reveal style={{ padding: "92px 24px" }}>
        <div className="container" style={{ padding: 0 }}>
          <h2 className="section-title" style={{ margin: "0 0 18px" }}>
            Voor wie is dit huis?
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
            Eerlijk zijn over wat wel en niet past voorkomt teleurstelling — voor
            jou en voor ons.
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
                Dit past goed
              </h3>
              <ul className="check-list">
                <li>Volwassenen met een autismespectrumstoornis</li>
                <li>Behoefte aan een prikkelarme, kleine woonomgeving</li>
                <li>Een Wlz-indicatie, Wmo-beschikking of PGB</li>
                <li>Willen werken aan zelfstandigheid, in eigen tempo</li>
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
                Dit past minder goed
              </h3>
              <ul className="check-list">
                <li>Acute crisiszorg of gesloten opname</li>
                <li>Actieve verslavingsproblematiek op de voorgrond</li>
                <li>Zorg waarbij structureel twee begeleiders nodig zijn</li>
                <li>Intensieve verpleegkundige of somatische zorg</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DELTA BAND ============ */}
      <section
        data-reveal
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
              Onderdeel van Coöperatie de Delta
            </h2>
            <p
              style={{
                margin: 0,
                lineHeight: 1.75,
                color: "rgba(252,250,247,0.86)",
                fontSize: 16.5,
              }}
            >
              A-Kracht begeleiding werkt zelfstandig, maar niet alleen. Binnen de
              coöperatie delen kleine zorgaanbieders kennis, achterwacht en
              kwaliteitstoetsing.
            </p>
          </div>
          <a href="#" onClick={go("contact")} className="btn btn--light">
            Neem contact op
          </a>
        </div>
      </section>
    </div>
  );
}

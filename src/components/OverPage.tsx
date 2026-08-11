import ImageSlot from "./ImageSlot";

const TIMELINE = [
  {
    year: "2003",
    strong: "Eerste stap in de zorg.",
    text: " Begonnen in een begeleid woonproject voor mensen met een licht verstandelijke beperking en onder meer autisme.",
  },
  {
    year: "2006",
    strong: "Diploma SPH.",
    text: " Sociaal Pedagogische Hulpverlening afgerond aan de Hogeschool van Arnhem en Nijmegen.",
  },
  {
    year: "2010",
    strong: "Naar de GGZ.",
    text: " Werken met complexere zorgvragen en gedwongen kaders, en steeds meer volwassenen met autisme.",
  },
  {
    year: "14,5 jaar",
    strong: "Vaste grond.",
    text: " Het autisme-team van RIBW K/AM: beschermd wonen én ambulante ondersteuning voor mensen met autisme.",
  },
  {
    year: "2014–2022",
    strong: "Autisme-consulent.",
    text: " Naast het team: bij het Regionaal Autisme Centrum Zuid-Kennemerland mensen met autisme en hun omgeving op weg helpen naar passende ondersteuning.",
  },
  {
    year: "2021–2023",
    strong: "Specialisatie.",
    text: " Autisme-deskundige en -specialist via de RINO Groep, gericht op autisme en comorbiditeit.",
  },
  {
    year: "2023–2025",
    strong: "Delen wat ik weet.",
    text: " Samen met ervaringsdeskundigen de basis-cursus autisme gegeven binnen RIBW K/AM.",
  },
  {
    year: "2025",
    strong: "A-Kracht begeleiding.",
    text: " Zelfstandig verder, aangesloten bij Coöperatie de Delta.",
    accent: true,
  },
];

const FOCUS = [
  {
    n: "01",
    title: "Autisme en comorbiditeit",
    text: "De laatste jaren begeleid ik vooral volwassenen met autisme en bijkomende problematiek, zoals angst, stemmingsklachten of trauma. Autisme staat bijna nooit alleen.",
  },
  {
    n: "02",
    title: "Vitaal versterkend werken",
    text: "We versterken veerkracht, leren verbanden zien en zoeken naar een betekenisvolle daginvulling. Kwetsbaarheden ondersteunen en wat goed gaat, versterken.",
  },
  {
    n: "03",
    title: "Leren en delen",
    text: "Samen met ervaringsdeskundigen gaf ik jarenlang de basis-cursus autisme. En als collega's vastlopen in complexe situaties, denk ik graag mee.",
  },
];

const METHOD = [
  {
    n: "01",
    title: "Leren kennen",
    text: "Ik neem de tijd voordat er doelen op papier staan. Wat werkt bij jou, en wat juist niet?",
  },
  {
    n: "02",
    title: "Klein beginnen",
    text: "Eén ding tegelijk, in stappen die haalbaar zijn. Liever langzaam vooruit dan snel terug.",
  },
  {
    n: "03",
    title: "Bijstellen",
    text: "Elk half jaar samen evalueren — en tussendoor gewoon, wanneer het nodig is.",
  },
];

const EDUCATION = [
  ["SPW, ROC Nijmegen", "2001"],
  ["HBO Sociaal Pedagogische Hulpverlening, HAN", "2005"],
  ["Autisme-deskundige, RINO Groep", "2021"],
  ["Autisme-specialist — autisme & comorbiditeit, RINO Groep", "2023"],
  ["Registratie SKJ / Registerplein", "actief"],
  ["VOG en aansluiting klachtenregeling", "via de Delta"],
];

const PRACTICE = [
  {
    border: "var(--sage)",
    title: "Veiligheid",
    text: "Vaste dagstructuur, aangekondigde veranderingen en een prikkelarme inrichting van het huis.",
  },
  {
    border: "var(--clay)",
    title: "Kleinschaligheid",
    text: "Negen bewoners betekent: tijd voor een gesprek, en iemand die merkt dat het niet lekker gaat.",
  },
  {
    border: "var(--blue)",
    title: "Eigen regie",
    text: "Doelen worden samen bepaald en regelmatig bijgesteld — geen plan dat een jaar in een la ligt.",
  },
  {
    border: "var(--sage)",
    title: "Echt contact",
    text: "Naast elkaar staan in plaats van tegenover elkaar, ook wanneer het even schuurt.",
  },
];

export default function OverPage() {
  return (
    <div>
      {/* header */}
      <section data-reveal className="pad-head" style={{ padding: "72px 24px 40px" }}>
        <div className="container" style={{ padding: 0 }}>
          <p className="eyebrow" style={{ margin: "0 0 14px" }}>
            Over mij
          </p>
          <h1
            className="page-title"
            style={{ margin: "0 0 22px", maxWidth: "18ch" }}
          >
            Moniek Zondag
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
            &ldquo;Ik wilde zorg maken die ik zelf zou willen krijgen.&rdquo;
          </p>
          <a
            href="https://www.linkedin.com/in/moniek-zondag-a7a79542/"
            target="_blank"
            rel="noreferrer"
            className="link-quiet"
            style={{ marginTop: 26, display: "inline-block" }}
          >
            Bekijk mijn LinkedIn-profiel →
          </a>
        </div>
      </section>

      {/* portrait + intro + timeline */}
      <section data-reveal className="pad-b" style={{ padding: "44px 24px 88px" }}>
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
                src="/images/portret-moniek.jpg"
                placeholder="Portretfoto Moniek"
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
              Ik werk ruim twintig jaar in de zorg voor mensen met autisme. In
              die jaren zag ik hoe vaak het misgaat op dezelfde plekken: te grote
              groepen, te veel wisselingen, te weinig tijd om iemand echt te
              leren kennen.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.8,
                color: "var(--muted)",
                margin: "0 0 20px",
              }}
            >
              A-Kracht begeleiding is mijn antwoord daarop. Een klein huis, een
              vast team en de ruimte om te doen wat nodig is — niet wat het
              rooster toelaat.
            </p>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.8,
                color: "var(--muted)",
                margin: "0 0 42px",
              }}
            >
              Ik heb me daarin blijven specialiseren: als autisme-deskundige en
              -specialist bij de RINO Groep, gericht op autisme met
              comorbiditeit. In de praktijk betekent dat: samen uitzoeken hoe
              jij je autisme herkent, wat je helpt en wat juist niet.
            </p>

            <h2
              className="serif"
              style={{ fontSize: 23, fontWeight: 600, margin: "0 0 26px" }}
            >
              Mijn weg hierheen
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
              {TIMELINE.map((t) => (
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
        className="pad-lg"
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
              Missie
            </h2>
            <p
              style={{
                margin: 0,
                lineHeight: 1.8,
                color: "var(--muted)",
                fontSize: 16.5,
              }}
            >
              Een plek bieden waar mensen met autisme veilig kunnen wonen en
              zichzelf mogen zijn, met begeleiding die meebeweegt met wat iemand
              op dat moment aankan.
            </p>
          </div>
          <div>
            <h2
              className="serif"
              style={{ fontSize: 28, fontWeight: 500, margin: "0 0 16px" }}
            >
              Visie
            </h2>
            <p
              style={{
                margin: 0,
                lineHeight: 1.8,
                color: "var(--muted)",
                fontSize: 16.5,
              }}
            >
              Goede zorg is klein, langdurig en persoonlijk. Vertrouwen groeit in
              de tijd — daarom bouwen we op vaste gezichten in plaats van op
              protocollen.
            </p>
          </div>
        </div>
      </section>

      {/* waar ik me op richt */}
      <section data-reveal style={{ padding: "88px 24px 0" }}>
        <div className="container" style={{ padding: 0 }}>
          <h2 className="section-title" style={{ fontSize: 32, margin: "0 0 18px" }}>
            Waar ik me op richt
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
            In de loop van de jaren is mijn werk zich steeds meer gaan richten
            op volwassenen met autisme én bijkomende problematiek. Drie dingen
            die daarin centraal staan.
          </p>
          <div
            className="grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 22,
            }}
          >
            {FOCUS.map((f) => (
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
      <section data-reveal className="pad-t" style={{ padding: "88px 24px 0" }}>
        <div className="container" style={{ padding: 0 }}>
          <h2 className="section-title" style={{ fontSize: 32, margin: "0 0 18px" }}>
            Hoe ik werk
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
            Geen standaardaanpak, wel een vaste manier van beginnen: eerst kijken
            en luisteren, dan pas doen.
          </p>
          <div
            className="grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 22,
            }}
          >
            {METHOD.map((m) => (
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
              Opleiding &amp; registratie
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {EDUCATION.map(([label, meta]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 8,
                    flexWrap: "wrap",
                    rowGap: 4,
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ fontSize: 15.5 }}>{label}</span>
                  <span style={{ fontSize: 15, color: "var(--muted)" }}>
                    {meta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* kernwaarden in de praktijk */}
      <section data-reveal className="pad-lg" style={{ padding: "88px 24px" }}>
        <div className="container" style={{ padding: 0 }}>
          <h2 className="section-title" style={{ fontSize: 32, margin: "0 0 40px" }}>
            Kernwaarden in de praktijk
          </h2>
          <div
            className="grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 22,
            }}
          >
            {PRACTICE.map((p, i) => (
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

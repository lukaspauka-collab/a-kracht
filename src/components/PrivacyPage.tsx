const COOKIE_TABLE = [
  {
    name: "a-kracht-cookie-consent-v1",
    purpose:
      "Slaat je gekozen cookievoorkeur op, zodat de banner niet opnieuw verschijnt.",
    type: "Noodzakelijk",
    retention: "Totdat je je voorkeur wijzigt of je browsergegevens wist.",
  },
];

const SECTIONS = [
  {
    h: "1. Cookies op deze website",
    body: [
      "Een cookie is een klein bestandje dat op je apparaat wordt opgeslagen wanneer je deze website bezoekt. Deze website plaatst geen tracking-, advertentie- of marketingcookies van derden. Er wordt geen bezoekersgedrag gevolgd en er worden geen gegevens gedeeld met externe partijen.",
    ],
  },
  {
    h: "2. Noodzakelijke cookies",
    body: [
      "De enige cookie die deze site plaatst, bewaart jouw eigen keuze over cookies. Zonder deze cookie zou de cookiebanner bij elk bezoek opnieuw verschijnen. Deze cookie is noodzakelijk voor de werking van de website en valt buiten de toestemmingsplicht.",
      "Kies je voor \u2018alleen noodzakelijk\u2019, dan wordt er daarnaast niets opgeslagen of verzonden.",
    ],
  },
  {
    h: "3. Voorkeuren en statistieken",
    body: [
      "A-Kracht begeleiding gebruikt op dit moment geen statistieken- of analyse-tools en plaatst geen cookies voor voorkeuren of marketing. Mocht dat in de toekomst veranderen, dan vragen we daar eerst jouw toestemming voor via de cookiebanner.",
    ],
  },
  {
    h: "4. Gegevens via het contactformulier",
    body: [
      "Wanneer je het contactformulier invult, ontvangen wij je naam, e-mailadres, telefoonnummer (optioneel) en je bericht. We gebruiken deze gegevens uitsluitend om je vraag te beantwoorden.",
      "Deze verwerking is gebaseerd op jouw toestemming (artikel 6 lid 1 sub a AVG). We bewaren de berichten niet langer dan nodig, en maximaal twee jaar na het laatste contact. We delen deze gegevens niet met derden.",
    ],
  },
  {
    h: "5. Uw rechten",
    body: [
      "Je hebt het recht op inzage, correctie en verwijdering van je gegevens, het recht op beperking van de verwerking, en het recht om je toestemming op elk moment in te trekken. Stuur daarvoor een e-mail naar info@a-kracht.nl. We reageren binnen vier weken.",
      "Vind je de afhandeling niet juist, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <section data-reveal style={{ padding: "72px 24px 48px" }}>
        <div className="container" style={{ padding: 0 }}>
          <p className="eyebrow" style={{ margin: "0 0 14px" }}>
            Privacy
          </p>
          <h1 className="page-title" style={{ margin: "0 0 20px", maxWidth: "20ch" }}>
            Cookie- en privacybeleid
          </h1>
          <p className="lead" style={{ maxWidth: "60ch" }}>
            Heldere afspraken over cookies en persoonsgegevens, zoals de AVG
            dat vraagt. Deze website houdt het bewust klein: geen tracking, geen
            datagedeeltjes.
          </p>
        </div>
      </section>

      <section data-reveal style={{ padding: "0 24px 96px" }}>
        <div
          className="container"
          style={{ maxWidth: 760, padding: 0 }}
        >
          <div
            className="card"
            style={{ padding: "36px 40px 40px", borderRadius: 20 }}
          >
            <h2 className="card-title" style={{ fontSize: 20, margin: "0 0 22px" }}>
              Cookies die deze website plaatst
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {COOKIE_TABLE.map((c, i) => (
                <div
                  key={c.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1.9fr)",
                    gap: "6px 24px",
                    padding: "18px 0",
                    borderTop: "1px solid var(--border)",
                    borderBottom: i === COOKIE_TABLE.length - 1 ? "1px solid var(--border)" : undefined,
                  }}
                >
                  <div>
                    <p style={{ margin: 0, fontFamily: "var(--mono, monospace)", fontSize: 13.5 }}>
                      {c.name}
                    </p>
                    <p style={{ margin: "6px 0 0", fontSize: 13.5 }}>
                      <strong style={{ color: "var(--sage-strong)" }}>{c.type}</strong>
                    </p>
                  </div>
                  <div>
                    <p className="card-text" style={{ fontSize: 14.5, lineHeight: 1.7 }}>
                      {c.purpose}
                    </p>
                    <p
                      style={{
                        margin: "8px 0 0",
                        fontSize: 13,
                        color: "var(--muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      Bewaartermijn: {c.retention}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 34, marginTop: 44 }}>
            {SECTIONS.map((s) => (
              <div key={s.h}>
                <h2 className="serif" style={{ fontSize: 22, fontWeight: 600, margin: "0 0 12px" }}>
                  {s.h}
                </h2>
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    className="card-text"
                    style={{
                      lineHeight: 1.8,
                      fontSize: 15.5,
                      color: "var(--muted)",
                      margin: "0 0 12px",
                      maxWidth: "62ch",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div
            className="card card--sand"
            style={{ padding: "30px 34px", borderRadius: 20, marginTop: 44 }}
          >
            <h2 className="card-title" style={{ fontSize: 19, margin: "0 0 10px" }}>
              Vragen over je gegevens?
            </h2>
            <p className="card-text" style={{ fontSize: 15 }}>
              Neem contact op met Moniek Zondag via{" "}
              <a href="mailto:info@a-kracht.nl" style={{ textDecoration: "none" }}>
                info@a-kracht.nl
              </a>
              . Laatste wijziging: augustus 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

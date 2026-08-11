import Link from "next/link";

const CONTACT_ROWS = [
  ["Vestigingsadres", "Delfgauw, Zuid-Holland"],
  ["Telefoon", "06 – 00 00 00 00"],
  ["E-mailadres", "info@a-kracht.nl"],
  ["KvK-nummer", "00 0000 0000"],
  ["AGB-code", "Via Coöperatie de Delta"],
  ["Verantwoordelijk voor de zorg", "Coöperatie de Delta"],
];

const OFFER_POINTS = [
  {
    border: "var(--sage)",
    title: "Wonen",
    text: "Wonen in het huis in Delfgauw, met eigen kamers en gedeelde woonkamer en tuin.",
  },
  {
    border: "var(--clay)",
    title: "Begeleiding",
    text: "Dag en nacht begeleiding door een vast team dat de bewoners door en door kent.",
  },
  {
    border: "var(--blue)",
    title: "Dagbesteding",
    text: "Werk, school of dagbesteding — binnen en buiten het huis, passend bij ieder persoon.",
  },
  {
    border: "var(--sage)",
    title: "Wlz / VG-profiel",
    text: "Zorg vanuit de Wlz (VG), met indicaties en profielen die passen bij een kleinschalige woonlocatie.",
  },
];

const QUALITY = [
  {
    n: "01",
    title: "Zorgplannen",
    text: "Iedere bewoner heeft een eigen plan dat samen wordt opgesteld en regelmatig wordt geëvalueerd.",
  },
  {
    n: "02",
    title: "Deskundig personeel",
    text: "Vaste, geschoolde begeleiders met een SKJ-registratie en doorlopende scholing.",
  },
  {
    n: "03",
    title: "Incidenten & verbetering",
    text: "We registreren en bespreken incidenten en gebruiken ze om de zorg te verbeteren.",
  },
  {
    n: "04",
    title: "Medicatieveiligheid",
    text: "Vaste afspraken voor toediening, controle en overdracht van medicatie.",
  },
];

const COUNCIL_TASKS = [
  "Behartigt de gemeenschappelijke belangen van cliënten",
  "Overlegt regelmatig met de directie en het management",
  "Geeft advies over beleidsvoornemens en belangrijke ontwikkelingen",
  "Signaleert knelpunten en draagt verbeterpunten aan",
  "Stimuleert inspraak en betrokkenheid van cliënten en hun vertegenwoordigers",
];

const COMMISSIONS = [
  {
    sw: "sw-sage",
    title: "Commissie Gezond Leven, Bewegen en Goede Voeding",
    text: "Richt zich op een gezonde leefstijl: gezonde en gevarieerde voeding, voldoende beweging, preventie en vitaliteit. De commissie denkt mee over verbeteringen en bewaakt dat gezond leven structureel aandacht krijgt.",
    list: [
      "Gezonde en gevarieerde voeding",
      "Voldoende beweging en passende activiteiten",
      "Preventie en vitaliteit",
      "Bewustwording rondom gezondheid en welzijn",
    ],
  },
  {
    sw: "sw-clay",
    title: "Commissie Werving & Selectie",
    text: "Goede zorg begint bij betrokken en deskundige medewerkers. Door actieve betrokkenheid van ouders wordt bij nieuwe medewerkers nadrukkelijk gekeken naar cliëntgerichtheid en aansluiting bij de waarden van onze organisatie.",
    list: [
      "Denkt mee over profielen en functie-eisen",
      "Neemt, waar passend, deel aan sollicitatieprocedures",
      "Let op cliëntgerichtheid en passende houding van nieuwe medewerkers",
      "Adviseert over benoemingen in sleutelposities",
    ],
  },
  {
    sw: "sw-blue",
    title: "Commissie Activiteiten",
    text: "Welzijn is meer dan alleen zorg. Ouders leveren waardevolle input vanuit hun dagelijkse ervaring en kennis van hun kind.",
    list: [
      "Dagbesteding en recreatieve activiteiten",
      "Aansluiting bij wensen en mogelijkheden van cliënten",
      "Betrokkenheid van vrijwilligers en familie",
      "Evaluatie en verbetering van het activiteitenaanbod",
    ],
  },
  {
    sw: "sw-sage",
    title: "Kwaliteit van Zorg en Dienstverlening",
    text: "De cliëntenraad volgt en bespreekt structureel de kwaliteit van zorg en dienstverlening. Ook hier spelen ouders een actieve rol in het signaleren van aandachtspunten en het meedenken over verbeteringen.",
    list: [
      "Tevredenheid van cliënten",
      "Veiligheid en zorgprocessen",
      "Klachten en verbetermaatregelen",
      "Continuïteit en deskundigheid van zorg",
    ],
  },
];

export default function OrganisatiePage() {
  return (
    <div>
      {/* header */}
      <section data-reveal className="pad-head" style={{ padding: "72px 24px 56px" }}>
        <div className="container" style={{ padding: 0 }}>
          <p className="eyebrow" style={{ margin: "0 0 14px" }}>
            Over de organisatie
          </p>
          <h1 className="page-title" style={{ margin: "0 0 22px", maxWidth: "20ch" }}>
            Zorg met heldere afspraken
          </h1>
          <p className="lead" style={{ maxWidth: "58ch" }}>
            Wie verantwoordelijk is voor de zorg, hoe wij kwaliteit bewaken en
            waar je terecht kunt met vragen, klachten en privacyzaken.
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
            <p className="eyebrow">Wie zijn wij</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: 0, lineHeight: 1.3 }}
            >
              Een kleine woonzorglocatie, onderdeel van Coöperatie de Delta
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
              A-Kracht begeleiding is een kleinschalige woonzorglocatie in
              Delfgauw voor volwassenen met autisme. De zorg wordt aangeboden
              onder verantwoordelijkheid van Coöperatie de Delta, waarbij de
              bewoners als cliënt zijn ingeschreven.
            </p>
            <p
              style={{
                margin: "0 0 20px",
                lineHeight: 1.8,
                color: "var(--muted)",
                fontSize: 16,
              }}
            >
              Het huis heeft negen plekken en wordt opgezet en geleid door
              Moniek Zondag. Binnen de coöperatie delen kleine zorgaanbieders
              kennis, achterwacht en kwaliteitstoetsing.
            </p>
            <a
              href="https://www.cooperatiededelta.nl"
              target="_blank"
              rel="noreferrer"
              className="link-quiet"
            >
              Meer over Coöperatie de Delta →
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
            <p className="eyebrow">Contact &amp; organisatie</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: "0 0 14px", lineHeight: 1.3 }}
            >
              Gegevens van de locatie
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.8, fontSize: 16 }}>
              Alle formele gegevens op een rij. Vragen over de zorgverlening
              stellen kan altijd via de{" "}
              <Link href="/contact">
                contactpagina
              </Link>
              .
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {CONTACT_ROWS.map(([label, value]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 24,
                  padding: "14px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span style={{ fontSize: 15.5 }}>{label}</span>
                <span style={{ fontSize: 15, color: "var(--muted)", textAlign: "right" }}>
                  {value}
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
              <p className="eyebrow">Zorgaanbod &amp; doelgroep</p>
              <h2 className="section-title" style={{ margin: 0 }}>
                Voor wie en welke zorg
              </h2>
            </div>
            <Link href="/diensten" className="link-quiet">
              Bekijk ons aanbod →
            </Link>
          </div>
          <div
            className="grid-2"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}
          >
            {OFFER_POINTS.map((o) => (
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
            <p className="eyebrow">Kwaliteit &amp; veiligheid</p>
            <h2 className="section-title" style={{ margin: "0 0 16px" }}>
              Kwaliteit is een wettelijke plicht — en vanzelfsprekend
            </h2>
            <p
              style={{
                margin: 0,
                color: "var(--muted)",
                lineHeight: 1.8,
                fontSize: 16.5,
              }}
            >
              De Wet kwaliteit, klachten en geschillen zorg (Wkkgz) verplicht
              zorgaanbieders hun kwaliteit te bewaken, beheersen en verbeteren.
              Dat doen we op vier vaste manieren.
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
            {QUALITY.map((q) => (
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
            <p className="eyebrow">Klachten &amp; geschillen</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: 0, lineHeight: 1.3 }}
            >
              Klachtenfunctionaris
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
              De zorgverlening aan onze bewoners vindt plaats onder
              verantwoordelijkheid van Coöperatie de Delta. Voor klachten over
              de zorgverlening geldt de klachtenregeling van de coöperatie.
              Daar vind je ook de onafhankelijke klachtenfunctionaris en het
              telefoonnummer.
            </p>
            <p style={{ margin: "0 0 26px", lineHeight: 1.8, color: "var(--muted)", fontSize: 16 }}>
              Liever eerst even praten? Neem dan contact op met Moniek of de
              zorgverlener — samen komen we het vaakst verder.
            </p>
            <a
              href="https://www.cooperatiededelta.nl/klachtenregeling"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              Naar de klachtenregeling
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
              Wil je aanmelden?
            </h2>
            <p
              style={{
                margin: 0,
                lineHeight: 1.75,
                color: "rgba(252,250,247,0.86)",
                fontSize: 16.5,
              }}
            >
              Aanmelden kan via het aanmeldformulier van Coöperatie de Delta of
              via ons contactformulier. We kijken samen wat er nodig is.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link href="/contact" className="btn btn--light">
              Contactformulier
            </Link>
            <a
              href="https://www.cooperatiededelta.nl"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
              style={{
                background: "transparent",
                color: "#FCFAF7",
                borderColor: "rgba(252,250,247,0.5)",
              }}
            >
              Aanmeldformulier Delta
            </a>
          </div>
        </div>
      </section>

      {/* medezeggenschap / cliëntenraad */}
      <section data-reveal className="pad-lg" style={{ padding: "88px 24px" }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ maxWidth: "62ch", marginBottom: 44 }}>
            <p className="eyebrow">Medezeggenschap</p>
            <h2 className="section-title" style={{ margin: "0 0 18px" }}>
              De cliëntenraad
            </h2>
            <p style={{ margin: "0 0 16px", lineHeight: 1.8, color: "var(--muted)", fontSize: 16.5 }}>
              De cliëntenraad vertegenwoordigt de belangen van bewoners en
              cliënten binnen onze kleinschalige zorginstelling. Wij zetten ons
              in voor persoonlijke, respectvolle en kwalitatief goede zorg,
              waarbij de stem van cliënten en hun naasten centraal staat.
            </p>
            <p style={{ margin: "0 0 16px", lineHeight: 1.8, color: "var(--muted)", fontSize: 16.5 }}>
              Binnen onze organisatie vinden wij het belangrijk dat iedereen
              zich gehoord voelt. De cliëntenraad speelt hierin een actieve rol.
              Wij denken en praten mee over beleid, kwaliteit van zorg,
              veiligheid, welzijn en de dagelijkse gang van zaken.
            </p>
            <p style={{ margin: 0, lineHeight: 1.8, color: "var(--muted)", fontSize: 16.5 }}>
              We geloven in de kracht van verbinding tussen bewoners,
              zorgprofessionals en ouders. We doen het samen. Inclusie,
              veiligheid, respect, verbinding en empowerment zijn belangrijke
              waarden in onze visie.
            </p>
          </div>

          <div
            className="card card--sand"
            style={{ padding: "34px 36px", borderRadius: 18, marginBottom: 56 }}
          >
            <h3 className="serif" style={{ fontSize: 21, fontWeight: 600, margin: "0 0 18px" }}>
              De cliëntenraad:
            </h3>
            <ul className="check-list" style={{ margin: 0 }}>
              {COUNCIL_TASKS.map((t) => (
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
              Bij bepaalde besluiten heeft de cliëntenraad advies- of
              instemmingsrecht, conform de geldende wet- en regelgeving.
            </p>
          </div>

          <h2 className="section-title" style={{ fontSize: 32, margin: "0 0 18px" }}>
            Commissies
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
            Vier commissies, waarin naasten actief meedenken over de dagelijkse
            zorg en de richting van de organisatie.
          </p>
          <div
            className="grid-2"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}
          >
            {COMMISSIONS.map((c) => (
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
            <p className="eyebrow">Privacy</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: 0, lineHeight: 1.3 }}
            >
              Privacyverklaring
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
              De zorgverlening aan onze bewoners vindt plaats onder
              verantwoordelijkheid van Coöperatie de Delta. Voor de verwerking
              van persoonsgegevens in het kader van de zorgverlening geldt de{" "}
              <a
                href="https://www.cooperatiededelta.nl"
                target="_blank"
                rel="noreferrer"
              >
                privacyverklaring van Coöperatie de Delta
              </a>
              .
            </p>
            <p style={{ margin: 0, lineHeight: 1.8, color: "var(--muted)", fontSize: 16 }}>
              A-Kracht verwerkt daarnaast persoonsgegevens voor zover dit
              noodzakelijk is voor de eigen bedrijfsvoering. Voor deze
              verwerkingen geldt de privacyverklaring van A-Kracht, op te vragen
              via{" "}
              <a href="mailto:info@a-kracht.nl">info@a-kracht.nl</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { NavigateFn, Page } from "./site";

const SERVICES = [
  { sw: "sw-sage", title: "24-uurszorg", text: "Wonen in het huis met altijd begeleiding aanwezig." },
  { sw: "sw-clay", title: "Overbruggingszorg", text: "Een veilige tussenstap tot de definitieve woonplek er is." },
  { sw: "sw-blue", title: "Ambulante begeleiding", text: "Ondersteuning bij jou thuis, in jouw eigen ritme." },
  { sw: "sw-sage", title: "Dagstructuur", text: "Samen een dag opbouwen die haalbaar is en houvast geeft." },
  { sw: "sw-clay", title: "Administratie & financiën", text: "Post, regelzaken en instanties — stap voor stap, samen." },
  { sw: "sw-blue", title: "Netwerk & familie", text: "Korte lijnen met naasten, met respect voor ieders rol." },
  { sw: "sw-sage", title: "Werk & dagbesteding", text: "Zoeken naar een plek die energie geeft in plaats van kost." },
  { sw: "sw-clay", title: "Crisispreventie", text: "Signalen vroeg herkennen en een plan dat klaarligt." },
];

const STEPS = [
  { n: "Stap 1", title: "Kennismaken", text: "Een gesprek zonder verplichtingen, thuis of in het huis." },
  { n: "Stap 2", title: "Beeld vormen", text: "We kijken samen naar de zorgvraag, indicatie en wat past." },
  { n: "Stap 3", title: "Proefperiode", text: "Meelopen en logeren, zodat het klikken van twee kanten komt." },
  { n: "Stap 4", title: "Start", text: "Zorgplan, vaste contactpersoon en een rustige verhuizing." },
];

const FUNDING = [
  { title: "Wlz", text: "Langdurige zorg met verblijf, via het CIZ." },
  { title: "Wmo", text: "Begeleiding thuis, via de gemeente Pijnacker-Nootdorp." },
  { title: "PGB", text: "Zelf regie over het budget en de invulling van de zorg." },
  { title: "Zorg in natura", text: "Via de contracten van Coöperatie de Delta." },
];

export default function DienstenPage({ navigate }: { navigate: NavigateFn }) {
  const go = (target: Page) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(target);
  };

  return (
    <div>
      {/* header */}
      <section data-reveal style={{ padding: "72px 24px 52px" }}>
        <div className="container" style={{ padding: 0 }}>
          <p className="eyebrow" style={{ margin: "0 0 14px" }}>
            Diensten
          </p>
          <h1 className="page-title" style={{ margin: "0 0 20px", maxWidth: "20ch" }}>
            Zorg die past bij hoe jij leeft
          </h1>
          <p className="lead" style={{ maxWidth: "58ch" }}>
            Van volledig wonen met 24-uurs begeleiding tot een paar uur
            ondersteuning per week. We kijken eerst wat er nodig is, daarna pas
            naar de vorm.
          </p>
        </div>
      </section>

      {/* service grid */}
      <section data-reveal style={{ padding: "0 24px 88px" }}>
        <div
          className="container grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 20,
            padding: 0,
          }}
        >
          {SERVICES.map((s) => (
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
      <section data-reveal style={{ padding: "0 24px 92px" }}>
        <div
          className="container split"
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
            <p className="eyebrow">Toelichting</p>
            <h2
              className="serif"
              style={{ fontSize: 29, fontWeight: 500, margin: 0, lineHeight: 1.3 }}
            >
              Wat is overbruggingszorg precies?
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
              Wachten op een woonplek duurt vaak lang. Overbruggingszorg vangt
              die periode op: je krijgt een tijdelijke plek of begeleiding thuis,
              zodat de situatie niet verder vastloopt.
            </p>
            <p style={{ margin: 0, lineHeight: 1.8, color: "var(--muted)", fontSize: 16 }}>
              We stemmen af met de toekomstige woonplek, zodat de overstap straks
              zo rustig mogelijk verloopt.
            </p>
          </div>
        </div>
      </section>

      {/* aanmelding steps */}
      <section data-reveal style={{ padding: "0 24px 92px" }}>
        <div className="container" style={{ padding: 0 }}>
          <h2 className="section-title" style={{ fontSize: 32, margin: "0 0 18px" }}>
            Zo verloopt een aanmelding
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
            Vier stappen, zonder wachtkamergevoel. Je hoort altijd waar je aan
            toe bent — ook als het antwoord nee is.
          </p>
          <div
            className="grid-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 20,
            }}
          >
            {STEPS.map((s) => (
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
            <p className="eyebrow">Financiering</p>
            <h2
              className="serif"
              style={{ fontSize: 30, fontWeight: 500, margin: "0 0 14px", lineHeight: 1.3 }}
            >
              Wie betaalt de zorg?
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.8, fontSize: 16 }}>
              Weet je niet welke route voor jou geldt? Bel gerust — we zoeken het
              samen uit en denken mee met de aanvraag.
            </p>
          </div>
          <div
            className="grid-2"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            {FUNDING.map((f) => (
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
            Niet zeker welke vorm past? Bel gerust — we denken vrijblijvend mee.
          </h2>
          <a href="#" onClick={go("contact")} className="btn btn--light">
            Stel je vraag
          </a>
        </div>
      </section>
    </div>
  );
}

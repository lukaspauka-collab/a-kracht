import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      style={{
        padding: "120px 24px",
        textAlign: "center",
      }}
    >
      <p className="eyebrow" style={{ margin: "0 0 14px" }}>
        404
      </p>
      <h1
        className="page-title"
        style={{ margin: "0 auto 18px", maxWidth: "20ch" }}
      >
        Deze pagina bestaat niet
      </h1>
      <p
        className="lead"
        style={{ maxWidth: "48ch", margin: "0 auto 32px" }}
      >
        De link die je volgde klopt niet meer, of de pagina is verplaatst. Vanaf
        de homepagina kom je overal.
      </p>
      <Link href="/" className="btn btn--primary">
        Terug naar de homepagina
      </Link>
    </section>
  );
}

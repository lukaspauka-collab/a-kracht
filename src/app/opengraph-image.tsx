import { ImageResponse } from "next/og";

export const alt = "A-Kracht begeleiding — Kleinschalige begeleiding bij autisme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f3ec",
          color: "#2b2a27",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 14,
          }}
        >
          <span style={{ fontSize: 40, fontWeight: 600, color: "#2b2a27" }}>
            A-Kracht begeleiding
          </span>
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#c08457",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <span
            style={{
              fontSize: 26,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#6a6560",
            }}
          >
            Delfgauw · 24-uurszorg · autisme
          </span>
          <span
            style={{
              fontSize: 72,
              lineHeight: 1.1,
              fontWeight: 600,
              color: "#2b2a27",
            }}
          >
            Kleinschalige, veilige begeleiding bij autisme
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #e5dfd6",
            paddingTop: 26,
          }}
        >
          <span style={{ fontSize: 26, color: "#4f6b57", fontWeight: 600 }}>
            a-kracht.nl
          </span>
          <span style={{ fontSize: 24, color: "#6a6560" }}>
            Een huis voor negen bewoners · Moniek Zondag
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

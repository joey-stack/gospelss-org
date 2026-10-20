import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "GOSPELS — Göteborgs Unga & Heliga Lovsång";
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
          padding: "60px 80px",
          backgroundColor: "#121417",
          backgroundImage: "radial-gradient(circle at 85% 15%, rgba(20, 184, 166, 0.25) 0%, transparent 60%), radial-gradient(circle at 15% 85%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)",
          color: "#FFFFFF",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Resonance Cross Mark */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#14B8A6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "28px",
                color: "#121417",
              }}
            >
              +
            </div>
            <span style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.5px" }}>
              GOSPELS
            </span>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(20, 184, 166, 0.2)",
              border: "1px solid rgba(20, 184, 166, 0.5)",
              color: "#5EEAD4",
              fontSize: "16px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Göteborg · Ideell Förening
          </div>
        </div>

        {/* Center Main Message */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "940px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-1px",
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            Helig tillbedjan. Kostnadsfria konserter. En öppen gemenskap.
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#94A3B8",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Gospels förenar unga människor i Göteborg genom musikalisk excellens och villkorslös kärlek.
          </p>
        </div>

        {/* Bottom Footer Info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "32px", fontSize: "16px", color: "#CBD5E1" }}>
            <span><strong>Org.nr:</strong> 802557-4883</span>
            <span><strong>Plats:</strong> Trädgårdsföreningen / Göteborg</span>
            <span><strong>Entré:</strong> 100% Gratis</span>
          </div>
          <div style={{ fontSize: "16px", color: "#5EEAD4", fontWeight: 700 }}>
            gospelss.org
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

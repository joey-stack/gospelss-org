import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, Compass, Shield, Users, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Om Oss — Vår Vision, Teologi & Ledarskap",
  description:
    "Läs om Gospels (Org.nr: 802557-4883), en ideell förening i Göteborg som förenar unga människor genom helig tillbedjan, kostnadsfria konserter och öppen gemenskap.",
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-canvas)" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "7rem 0 5rem 0" }}>
        <div className="container-page" style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge-pill" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              <Sparkles size={14} style={{ color: "var(--color-turquoise-500)", marginRight: "0.5rem" }} />
              Ideell Förening · Göteborg
            </span>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: 600,
                color: "var(--color-charcoal-900)",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              En helig tillflyktsort för en sökande generation.
            </h1>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--color-charcoal-600)",
                lineHeight: 1.7,
                maxWidth: "680px",
                margin: "0 auto",
              }}
            >
              Gospels grundades med en enkel kallelse: att skapa en öppen och helig plats i Göteborg där
              unga människor, oavsett bakgrund eller tvivel, kan möta Gud genom musikalisk excellens och villkorslös kärlek.
            </p>
          </div>

          {/* Scripture Accent Box */}
          <div
            style={{
              padding: "2.5rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              marginBottom: "3.5rem",
              textAlign: "center",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "var(--text-xl)",
                color: "var(--color-charcoal-800)",
                lineHeight: 1.6,
                marginBottom: "0.75rem",
              }}
            >
              &rdquo;Men den stund kommer, ja, den är redan här, då sanna tillbedjare skall tillbe Fadern i ande och sanning. Ty sådana tillbedjare vill Fadern ha.&rdquo;
            </p>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--color-turquoise-700)" }}>
              Johannesevangeliet 4:23
            </span>
          </div>

          {/* Three Core Values */}
          <section style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "var(--text-2xl)",
                fontFamily: "var(--font-serif)",
                fontWeight: 600,
                color: "var(--color-charcoal-900)",
                marginBottom: "1.5rem",
              }}
            >
              Våra Tre Pelare
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(20, 184, 166, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Sparkles size={22} style={{ color: "var(--color-turquoise-600)" }} />
                </div>
                <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Helig (Sacred)
                </h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-600)", lineHeight: 1.6 }}>
                  Vi kompromissar aldrig med Guds närvaro. Vår lovsång präglas av vördnad, hängivenhet och musikalisk hängivenhet som lyfter blicken mot Jesus.
                </p>
              </div>

              <div
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(20, 184, 166, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Heart size={22} style={{ color: "var(--color-turquoise-600)" }} />
                </div>
                <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Välkomnande (Welcoming)
                </h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-600)", lineHeight: 1.6 }}>
                  Varje människa är sedd och älskad. Inga trösklar, inga biljettpriser och inga krav på förkunskaper för att stiga in i våra samlingar.
                </p>
              </div>

              <div
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(20, 184, 166, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Compass size={22} style={{ color: "var(--color-turquoise-600)" }} />
                </div>
                <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Livsförvandlande (Transformative)
                </h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-600)", lineHeight: 1.6 }}>
                  Vi tror på bönens kraft, själavård och mentorskap som förvandlar hjärtan och rustar unga att leva med mening och frid i Göteborg.
                </p>
              </div>
            </div>
          </section>

          {/* Org & Governance */}
          <section
            style={{
              padding: "2.5rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              marginBottom: "3.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "var(--text-xl)",
                fontFamily: "var(--font-serif)",
                fontWeight: 600,
                color: "var(--color-charcoal-900)",
                marginBottom: "1rem",
              }}
            >
              Juridisk Struktur & Transparens
            </h2>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-600)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Gospels är registrerat som en ideell förening hos Skatteverket med organisationsnummer{" "}
              <strong>802557-4883</strong> och säte i Göteborg. Föreningens högsta beslutande organ är årsmötet,
              och den löpande verksamheten leds av en föreningsstyrelse tillsammans med volontärledare och församlingspartner.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                padding: "1.25rem",
                backgroundColor: "var(--bg-canvas)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)", textTransform: "uppercase" }}>
                  Föreningsform
                </span>
                <p style={{ fontWeight: 600, fontSize: "var(--text-sm)", marginTop: "0.25rem" }}>Ideell förening</p>
              </div>
              <div>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)", textTransform: "uppercase" }}>
                  Organisationsnummer
                </span>
                <p style={{ fontWeight: 600, fontSize: "var(--text-sm)", marginTop: "0.25rem" }}>802557-4883</p>
              </div>
              <div>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)", textTransform: "uppercase" }}>
                  Säte
                </span>
                <p style={{ fontWeight: 600, fontSize: "var(--text-sm)", marginTop: "0.25rem" }}>Göteborg, Sverige</p>
              </div>
              <div>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)", textTransform: "uppercase" }}>
                  Tillsynsmyndighet
                </span>
                <p style={{ fontWeight: 600, fontSize: "var(--text-sm)", marginTop: "0.25rem" }}>Skatteverket / IMY</p>
              </div>
            </div>
          </section>

          {/* Ekumenisk Samverkan */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "var(--text-xl)",
                fontFamily: "var(--font-serif)",
                fontWeight: 600,
                color: "var(--color-charcoal-900)",
                marginBottom: "1rem",
              }}
            >
              Ekumenisk Samverkan i Västsverige
            </h2>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-600)", lineHeight: 1.7, marginBottom: "1rem" }}>
              Gospels är inte en isolerad församling utan en betjänande gemenskap som samarbetar med lokala kyrkor över hela Göteborg:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-turquoise-600)", flexShrink: 0 }} />
                <span>Samverkan med frikyrkor, Svenska kyrkan och fristående församlingar för att stärka stadens unga.</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-turquoise-600)", flexShrink: 0 }} />
                <span>100% kostnadsfri entré vid alla konserter för att motverka ekonomiskt utanförskap.</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-turquoise-600)", flexShrink: 0 }} />
                <span>Strikta trygghetsrutiner och föräldrasamtycke för volontärer under 18 år.</span>
              </li>
            </ul>
          </section>

          {/* CTA Box */}
          <div
            style={{
              padding: "2.5rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "rgba(20, 184, 166, 0.08)",
              border: "1px solid rgba(20, 184, 166, 0.2)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-2xl)",
                color: "var(--color-charcoal-900)",
                marginBottom: "0.75rem",
              }}
            >
              Vill du vara med och bygga gemenskapen?
            </h3>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-600)", marginBottom: "1.5rem" }}>
              Bli Kingdom Partner, anmäl dig som volontär eller hör av dig till oss om församlingssamverkan.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/#partner" className="btn btn-primary">
                Bli Kingdom Partner
              </Link>
              <Link href="/kontakt" className="btn btn-secondary">
                Kontakta Styrelsen
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

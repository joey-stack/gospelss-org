import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Heart, Shield, Music, Sparkles, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 1. Header / Navbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(250, 250, 248, 0.88)",
          borderBottom: "1px solid var(--border-subtle)",
          transition: "background-color var(--transition-smooth)",
        }}
      >
        <div
          className="container-page"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4.5rem",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Image
              src="/assets/brand/logo-full.svg"
              alt="GOSPELS Logo"
              width={160}
              height={36}
              priority
            />
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Link
              href="#konserter"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--text-secondary)",
                letterSpacing: "0.03em",
              }}
            >
              Konserter
            </Link>
            <Link
              href="#om-oss"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--text-secondary)",
                letterSpacing: "0.03em",
              }}
            >
              Om Oss
            </Link>
            <Link
              href="#kingdom-partner"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--text-secondary)",
                letterSpacing: "0.03em",
              }}
            >
              Ge ett stöd
            </Link>
            <Link
              href="#bon"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--text-secondary)",
                letterSpacing: "0.03em",
              }}
            >
              Bön & Förbön
            </Link>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="#rsvp"
              style={{
                backgroundColor: "var(--color-turquoise-600)",
                color: "var(--color-white)",
                padding: "0.625rem 1.375rem",
                borderRadius: "var(--radius-pill)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                boxShadow: "var(--shadow-subtle)",
                transition: "all var(--transition-fast)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>RSVP Gratis</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <main style={{ flex: 1 }}>
        <section
          className="section-sacred"
          style={{
            position: "relative",
            background: "linear-gradient(180deg, var(--color-warm-grey-100) 0%, var(--bg-canvas) 100%)",
            borderBottom: "1px solid var(--border-subtle)",
            overflow: "hidden",
          }}
        >
          <div className="container-page" style={{ position: "relative", zIndex: 10 }}>
            <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.375rem 1rem",
                  borderRadius: "var(--radius-pill)",
                  backgroundColor: "var(--color-turquoise-50)",
                  border: "1px solid var(--color-turquoise-200)",
                  color: "var(--color-turquoise-700)",
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--weight-semibold)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                <Sparkles size={14} />
                <span>Göteborgs Unga & Heliga Lovsång · Ideell Förening</span>
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "var(--tracking-tighter)",
                  color: "var(--color-charcoal-900)",
                  marginBottom: "1.5rem",
                }}
              >
                Förenade i Helig Lovsång. Förvandlade Liv i Göteborg.
              </h1>

              {/* Scripture Pull Quote */}
              <p
                className="font-scripture"
                style={{
                  fontSize: "1.375rem",
                  color: "var(--color-charcoal-700)",
                  maxWidth: "680px",
                  margin: "0 auto 2.5rem auto",
                  lineHeight: 1.5,
                }}
              >
                ”Ty där två eller tre är församlade i mitt namn, där är jag mitt ibland dem.”
                <span
                  style={{
                    display: "block",
                    fontSize: "0.9375rem",
                    fontStyle: "normal",
                    fontWeight: 600,
                    color: "var(--color-turquoise-700)",
                    marginTop: "0.5rem",
                  }}
                >
                  Matteus 18:20
                </span>
              </p>

              {/* CTA Group */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="#rsvp"
                  style={{
                    backgroundColor: "var(--color-turquoise-600)",
                    color: "var(--color-white)",
                    padding: "0.875rem 2rem",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--weight-semibold)",
                    boxShadow: "var(--shadow-card)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    minHeight: "48px",
                  }}
                >
                  <Calendar size={18} />
                  <span>Reservera Plats Gratis</span>
                </Link>

                <Link
                  href="#kingdom-partner"
                  style={{
                    backgroundColor: "var(--color-warm-grey-200)",
                    color: "var(--color-charcoal-900)",
                    padding: "0.875rem 1.75rem",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--weight-medium)",
                    border: "1px solid var(--border-default)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    minHeight: "48px",
                  }}
                >
                  <Heart size={18} color="var(--color-turquoise-600)" />
                  <span>Bli Kingdom Partner (150 kr/mån)</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Flagship Event Highlight */}
        <section id="konserter" className="section-sacred">
          <div className="container-page">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p
                style={{
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--weight-bold)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-turquoise-600)",
                  marginBottom: "0.5rem",
                }}
              >
                Kommande Samling
              </p>
              <h2
                style={{
                  fontSize: "var(--text-3xl)",
                  fontWeight: 700,
                  color: "var(--color-charcoal-900)",
                }}
              >
                Holy Spirit Worship 2026
              </h2>
            </div>

            <div
              style={{
                maxWidth: "840px",
                margin: "0 auto",
                backgroundColor: "var(--bg-card)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-card)",
                padding: "2.5rem",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    marginBottom: "1rem",
                    color: "var(--color-charcoal-600)",
                    fontSize: "var(--text-sm)",
                  }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
                    <Calendar size={16} color="var(--color-turquoise-600)" />
                    <strong>Lördag 14 November 2026</strong>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
                    <MapPin size={16} color="var(--color-turquoise-600)" />
                    <strong>Göteborg, Sverige</strong>
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "var(--text-2xl)",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: "var(--color-charcoal-900)",
                  }}
                >
                  En kväll av oavbruten tillbedjan och förbön
                </h3>
                <p style={{ color: "var(--color-charcoal-700)", lineHeight: 1.6 }}>
                  Vi samlar unga vuxna och församlingar från hela Göteborgsregionen för att söka Guds
                  närvaro i helig lovsång. Fri entré för alla — alla är välkomna oavsett bakgrund.
                </p>
              </div>

              <div style={{ textAlign: "right", minWidth: "200px" }}>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--color-turquoise-50)",
                    color: "var(--color-turquoise-700)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  Gratis Entré · 250 Platser
                </span>
                <Link
                  href="#rsvp"
                  style={{
                    display: "block",
                    backgroundColor: "var(--color-turquoise-600)",
                    color: "var(--color-white)",
                    textAlign: "center",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "var(--radius-pill)",
                    fontWeight: 600,
                    boxShadow: "var(--shadow-subtle)",
                  }}
                >
                  Boka Gratis Biljett
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Three Pillar Transparency (Charity: Water Benchmark) */}
        <section
          style={{
            backgroundColor: "var(--bg-surface)",
            padding: "5rem 0",
            borderTop: "1px solid var(--border-subtle)",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div className="container-page">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  padding: "2rem",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <Music size={28} color="var(--color-turquoise-600)" style={{ marginBottom: "1rem" }} />
                <h4 style={{ fontSize: "var(--text-lg)", marginBottom: "0.5rem" }}>
                  Alltid Fri Entré
                </h4>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)" }}>
                  Vi tror att lovsång och Guds närvaro ska vara tillgänglig för alla unga utan ekonomiska
                  trösklar eller biljettkostnader.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  padding: "2rem",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <Shield size={28} color="var(--color-turquoise-600)" style={{ marginBottom: "1rem" }} />
                <h4 style={{ fontSize: "var(--text-lg)", marginBottom: "0.5rem" }}>
                  100% Transparens
                </h4>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)" }}>
                  Som ideell förening (org.nr 802557-4883) redovisas alla gåvor öppet. Varje krona går
                  direkt till lokaler, ljudteknik och mötesplatser.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  padding: "2rem",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <Heart size={28} color="var(--color-turquoise-600)" style={{ marginBottom: "1rem" }} />
                <h4 style={{ fontSize: "var(--text-lg)", marginBottom: "0.5rem" }}>
                  Konfidentiell Bön (GDPR Art. 9)
                </h4>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)" }}>
                  Varje böneämne behandlas med högsta omsorg och sekretess. Endast vårt pastorala
                  förbönsteam tar emot och ber för dina behov.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Legal & Community Footer */}
      <footer
        style={{
          backgroundColor: "var(--bg-canvas)",
          borderTop: "1px solid var(--border-subtle)",
          padding: "4rem 0 2rem 0",
        }}
      >
        <div className="container-page">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2.5rem",
              marginBottom: "3rem",
            }}
          >
            <div>
              <Image
                src="/assets/brand/logo-full.svg"
                alt="GOSPELS"
                width={140}
                height={32}
                style={{ marginBottom: "1rem" }}
              />
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-600)", lineHeight: 1.6 }}>
                Gospels är en registrerad svensk ideell förening (Org.nr: 802557-4883) med säte i
                Göteborg, Sverige.
              </p>
            </div>

            <div>
              <h5 style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", marginBottom: "1rem" }}>
                Gåvor & Stöd
              </h5>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)", lineHeight: 1.6 }}>
                <strong>Swish:</strong> 123 XXX XX XX
                <br />
                <strong>Bankgiro:</strong> XXX-XXXX
                <br />
                <strong>Kingdom Partner:</strong> 150 SEK/mån via Stripe
              </p>
            </div>

            <div>
              <h5 style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", marginBottom: "1rem" }}>
                Juridiskt & Skydd
              </h5>
              <ul style={{ listStyle: "none", fontSize: "var(--text-sm)", lineHeight: 2 }}>
                <li>
                  <Link href="/integritetspolicy" style={{ color: "var(--color-charcoal-600)" }}>
                    Integritetspolicy (GDPR)
                  </Link>
                </li>
                <li>
                  <Link href="/anvandarvillkor" style={{ color: "var(--color-charcoal-600)" }}>
                    Användarvillkor
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" style={{ color: "var(--color-charcoal-600)" }}>
                    Kontakta Styrelsen
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "var(--text-xs)",
              color: "var(--color-charcoal-500)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p>© {new Date().getFullYear()} Gospels (Org.nr 802557-4883). Alla rättigheter förbehållna.</p>
            <p>Sacred · Welcoming · Transformative</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

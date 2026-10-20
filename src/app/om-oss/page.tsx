"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, Compass, Shield, Users, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-canvas)" }}>
      <Navbar />

      <main id="main-content" style={{ flex: 1 }}>
        {/* Cinematic Full-Width Hero Section with 100vh */}
        <section className="relative bg-[#0b1320] text-surface overflow-hidden min-h-screen min-h-[100dvh] flex items-center w-full border-b border-white/10 mb-12">
          {/* Atmospheric Background Image with Twilight Gradients */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTYNWYf6T944Ks-J_VkQzdXhL5g9ViSXo1X72RK9WWouMHEspLjCOtg-nbaGqu6wnZB6yRZjg0E3rQAdMTvjiZaCK7p7WN3KQhWdOVv_eagNA5gcg_bjzrcdbexTVR79_maRwMkpLcVH5P8qWuiotkGnbs-IiIaiZH_jy9kt-g4hhGlGwukSASaHNW7VPWUkk60QLnZChwbvxW6UL_u-rmuJDOEOTO5gBXZDI8TLUiaIQUjRuIk_Qx3A"
              alt="Community worship and young generation in Gothenburg"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1320] via-[#0b1320]/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320] via-transparent to-black/50"></div>
          </div>

          {/* Ambient Glowing Orbs */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Full-width container with standard padding */}
          <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
            <div className="max-w-4xl space-y-4 sm:space-y-6">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest/20 border border-white/15 backdrop-blur-md shadow-xs">
                <Sparkles className="w-4 h-4 text-primary-container" />
                <span className="text-label-sm font-label-sm text-primary-fixed tracking-wider uppercase font-semibold">
                  {t("Ideell Förening • Göteborg (Org.nr 802557-4883)", "Non-Profit Association • Gothenburg (Org.nr 802557-4883)")}
                </span>
              </div>

              {/* Display Hero Headline & Mission Subtitle */}
              <div>
                <h1 className="text-display-hero-mobile sm:text-display-hero font-display-hero text-white tracking-tight leading-tight mb-3">
                  {t("En helig tillflyktsort för en ", "A sacred refuge for a ")}
                  <span className="text-primary-container font-extrabold">{t("sökande generation", "seeking generation")}</span>
                </h1>
                <p className="text-body-md sm:text-body-lg font-body-lg text-slate-200 leading-relaxed max-w-3xl">
                  {t(
                    "Gospels grundades med en enkel kallelse: att skapa en öppen och helig plats i Göteborg där unga människor, oavsett bakgrund eller tvivel, kan möta Gud genom musikalisk excellens och villkorslös kärlek.",
                    "Gospels was founded with a clear calling: to create an open and sacred place in Gothenburg where young people, regardless of background or doubt, can encounter God through musical excellence and unconditional love."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container-page" style={{ maxWidth: "860px", margin: "0 auto", paddingBottom: "5rem" }}>

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

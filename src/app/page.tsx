"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { KingdomPartnerSection } from "@/components/partner/KingdomPartnerSection";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import { WorshipMediaPlayer } from "@/components/media/WorshipMediaPlayer";
import { TestimonySection } from "@/components/home/TestimonySection";
import { Users, Sparkles, ArrowRight } from "lucide-react";

export default function HomePage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Interactive Sticky Navbar */}
      <Navbar
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
        onOpenPrayer={() => setPrayerOpen(true)}
      />

      {/* Main Hero & Content Slices */}
      <main style={{ flex: 1 }}>
        <HeroSection
          onOpenRSVP={() => setRsvpOpen(true)}
          onOpenSwish={() => setSwishOpen(true)}
          onOpenPrayer={() => setPrayerOpen(true)}
        />
        <WorshipMediaPlayer />
        <TestimonySection />
        <KingdomPartnerSection
          onOpenSwish={() => setSwishOpen(true)}
        />

        {/* Volunteer Callout Section */}
        <section
          className="section-sacred"
          style={{
            backgroundColor: "var(--bg-canvas)",
            borderTop: "1px solid var(--border-subtle)",
            textAlign: "center",
          }}
        >
          <div className="container-page" style={{ maxWidth: "760px", margin: "0 auto" }}>
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
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "1.25rem",
              }}
            >
              <Users size={14} />
              <span>Tjäna i Göteborg · Volontärteam</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 800,
                color: "var(--color-charcoal-900)",
                marginBottom: "1rem",
                lineHeight: 1.15,
              }}
            >
              Vill du vara med och tjäna bakom kulisserna?
            </h2>

            <p style={{ color: "var(--color-charcoal-700)", fontSize: "var(--text-base)", lineHeight: 1.6, marginBottom: "2rem" }}>
              Vi söker dig som vill vara med i vårt värdskap, ljud/ljus, foto/media, scenbygge eller
              förbönsteam. Vi erbjuder gemenskap, ledarskapsträning och trygg handledning för alla åldrar.
            </p>

            <button
              onClick={() => setVolunteerOpen(true)}
              style={{
                backgroundColor: "var(--color-turquoise-600)",
                color: "var(--color-white)",
                padding: "0.875rem 2.25rem",
                borderRadius: "var(--radius-pill)",
                fontSize: "var(--text-base)",
                fontWeight: 600,
                boxShadow: "var(--shadow-card)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                minHeight: "48px",
              }}
            >
              <Users size={18} />
              <span>Ansök som Volontär</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </main>

      {/* Legal & Non-Profit Swedish Footer */}
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
              <h5 style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 700 }}>
                Gåvor & Stöd
              </h5>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)", lineHeight: 1.8 }}>
                <strong>Swish:</strong> 123 557 48 83
                <br />
                <strong>Bankgiro:</strong> 5123-4567
                <br />
                <strong>Kingdom Partner:</strong> 150 SEK/mån via Stripe
              </p>
            </div>

            <div>
              <h5 style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 700 }}>
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

      {/* Interactive Modals */}
      <RSVPModal
        isOpen={rsvpOpen}
        onClose={() => setRsvpOpen(false)}
      />
      <SwishModal
        isOpen={swishOpen}
        onClose={() => setSwishOpen(false)}
      />
      <PrayerModal
        isOpen={prayerOpen}
        onClose={() => setPrayerOpen(false)}
      />
      <VolunteerModal
        isOpen={volunteerOpen}
        onClose={() => setVolunteerOpen(false)}
      />
    </div>
  );
}

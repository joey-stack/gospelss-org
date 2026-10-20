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

export default function HomePage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);

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
        <KingdomPartnerSection
          onOpenSwish={() => setSwishOpen(true)}
        />
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
    </div>
  );
}

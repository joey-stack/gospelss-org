"use client";

import React from "react";
import { Sparkles, Calendar, Heart, Shield, Music, MapPin, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenRSVP: () => void;
  onOpenSwish: () => void;
}

export function HeroSection({ onOpenRSVP, onOpenSwish }: HeroSectionProps) {
  return (
    <>
      {/* Sacred Hero Banner */}
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
          <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
            {/* Gothenburg Badge */}
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
                marginBottom: "1.75rem",
              }}
            >
              <Sparkles size={14} />
              <span>Göteborgs Unga & Heliga Lovsång · Ideell Förening</span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "var(--tracking-tighter)",
                color: "var(--color-charcoal-900)",
                marginBottom: "1.5rem",
              }}
            >
              Förenade i Helig Lovsång. Förvandlade Liv i Göteborg.
            </h1>

            {/* Scripture Quote */}
            <p
              className="font-scripture"
              style={{
                fontSize: "1.375rem",
                color: "var(--color-charcoal-700)",
                maxWidth: "700px",
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

            {/* CTA Triggers */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={onOpenRSVP}
                style={{
                  backgroundColor: "var(--color-turquoise-600)",
                  color: "var(--color-white)",
                  padding: "0.875rem 2rem",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "var(--text-base)",
                  fontWeight: 600,
                  boxShadow: "var(--shadow-card)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  minHeight: "48px",
                  transition: "transform var(--transition-fast), background-color var(--transition-fast)",
                }}
              >
                <Calendar size={18} />
                <span>Reservera Plats Gratis</span>
              </button>

              <button
                onClick={onOpenSwish}
                style={{
                  backgroundColor: "var(--color-warm-grey-200)",
                  color: "var(--color-charcoal-900)",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "var(--text-base)",
                  fontWeight: 500,
                  border: "1px solid var(--border-default)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  minHeight: "48px",
                }}
              >
                <Heart size={18} color="var(--color-turquoise-600)" />
                <span>Stöd med Swish</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Concert Feature */}
      <section id="konserter" className="section-sacred">
        <div className="container-page">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 700,
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
              maxWidth: "880px",
              margin: "0 auto",
              backgroundColor: "var(--bg-card)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-card)",
              padding: "2.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
                  flexWrap: "wrap",
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
                Vi samlar unga vuxna och församlingar från hela Göteborgsregionen för att söka Guds närvaro i
                helig lovsång. Fri entré för alla — boka din plats för att garantera inträde.
              </p>
            </div>

            <div style={{ textAlign: "center", padding: "1.5rem", backgroundColor: "var(--color-warm-grey-50)", borderRadius: "var(--radius-lg)" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "var(--color-turquoise-50)",
                  color: "var(--color-turquoise-700)",
                  padding: "0.375rem 0.875rem",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  border: "1px solid var(--color-turquoise-200)",
                }}
              >
                Gratis Entré · 250 Platser
              </span>
              <button
                onClick={onOpenRSVP}
                style={{
                  width: "100%",
                  backgroundColor: "var(--color-turquoise-600)",
                  color: "var(--color-white)",
                  padding: "0.875rem 1.5rem",
                  borderRadius: "var(--radius-pill)",
                  fontWeight: 600,
                  fontSize: "var(--text-sm)",
                  boxShadow: "var(--shadow-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  minHeight: "48px",
                }}
              >
                <span>Boka Gratis Biljett</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillar Ministry Transparency */}
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
              <h4 style={{ fontSize: "var(--text-lg)", marginBottom: "0.5rem" }}>Alltid Fri Entré</h4>
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
              <h4 style={{ fontSize: "var(--text-lg)", marginBottom: "0.5rem" }}>100% Transparens</h4>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)" }}>
                Som ideell förening (org.nr 802557-4883) redovisas alla gåvor öppet. Varje krona går direkt
                till lokaler, ljudteknik och mötesplatser.
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
                Varje böneämne behandlas med högsta omsorg och sekretess. Endast vårt pastorala förbönsteam
                tar emot och ber för dina behov.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

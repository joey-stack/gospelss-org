"use client";

import React from "react";
import { MessageSquareQuote, Sparkles, MapPin } from "lucide-react";

interface Testimony {
  id: string;
  name: string;
  role: string;
  city: string;
  content: string;
  date: string;
}

const defaultTestimonies: Testimony[] = [
  {
    id: "test-1",
    name: "Hanna K., 22 år",
    role: "Ung vuxen",
    city: "Göteborg",
    content:
      "Under Holy Spirit Worship mötte jag Jesus på ett sätt jag aldrig upplevt tidigare. Den fria entrén gjorde att jag kunde bjuda med tre vänner från universitetet som aldrig satt sin fot i en kyrka. Två av dem vill nu veta mer om tron.",
    date: "November 2025",
  },
  {
    id: "test-2",
    name: "Lukas E., 24 år",
    role: "Ungdomsledare",
    city: "Mölndal",
    content:
      "Det var inte bara en konsert, det var en helig atmosfär. Unga från olika kyrkor och bakgrunder stod tillsammans i timmar i tillbedjan. Vi såg murar mellan församlingar rivas ner.",
    date: "Oktober 2025",
  },
  {
    id: "test-3",
    name: "Sara M.",
    role: "Förbönsteamet",
    city: "Partille",
    content:
      "Vi såg trasiga relationer upprättas och unga som fann djup inre frid mitt i en tid av oro och psykisk ohälsa. Bönen bar hela rummet, och Guds närvaro var så påtaglig.",
    date: "September 2025",
  },
];

export function TestimonySection() {
  return (
    <section
      id="vittnesbord"
      className="section-sacred"
      style={{
        backgroundColor: "var(--color-warm-grey-100)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container-page">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem auto" }}>
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
              marginBottom: "1rem",
            }}
          >
            <Sparkles size={14} />
            <span>Vittnesbörd & Frukt</span>
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
            Förvandlade liv i Göteborg
          </h2>

          <p style={{ color: "var(--color-charcoal-700)", fontSize: "var(--text-base)", lineHeight: 1.6 }}>
            Se vad Gud gör när unga samlas i ren tillbedjan och förbön. Varje samling bär frukt
            som varar in i vardagen.
          </p>
        </div>

        {/* Testimonies Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {defaultTestimonies.map((testimony) => (
            <div
              key={testimony.id}
              style={{
                backgroundColor: "var(--bg-card)",
                borderRadius: "var(--radius-xl)",
                padding: "2.25rem",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-subtle)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                <MessageSquareQuote
                  size={32}
                  color="var(--color-turquoise-500)"
                  style={{ marginBottom: "1.25rem", opacity: 0.8 }}
                />
                <p
                  className="font-scripture"
                  style={{
                    fontSize: "1.1875rem",
                    color: "var(--color-charcoal-800)",
                    lineHeight: 1.65,
                    marginBottom: "1.75rem",
                  }}
                >
                  ”{testimony.content}”
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--border-subtle)",
                  paddingTop: "1.25rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-charcoal-900)" }}>
                    {testimony.name}
                  </h4>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)" }}>
                    {testimony.role}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "var(--text-xs)", color: "var(--color-turquoise-700)", fontWeight: 600 }}>
                  <MapPin size={13} />
                  <span>{testimony.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MapPin, Send, MessageSquare, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "allmant",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief network dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-canvas)" }}>
      <Navbar
        onOpenPrayer={() => setPrayerOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
      />

      <main id="main-content" style={{ flex: 1, padding: "7rem 0 5rem 0" }}>
        <div className="container-page" style={{ maxWidth: "980px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="badge-pill" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              <Mail size={14} style={{ color: "var(--color-turquoise-500)", marginRight: "0.5rem" }} />
              {t("Hör Av Dig Till Oss", "Get in Touch With Us")}
            </span>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: 600,
                color: "var(--color-charcoal-900)",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              {t("Vi vill gärna höra från dig.", "We would love to hear from you.")}
            </h1>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--color-charcoal-600)",
                lineHeight: 1.7,
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              {t(
                "Oavsett om du har frågor om våra konserter, vill samarbeta som församling, eller söker pastoral kontakt – vi finns här för dig.",
                "Whether you have questions regarding our concerts, wish to partner as a congregation, or seek pastoral care – we are here for you."
              )}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
              alignItems: "start",
            }}
          >
            {/* Contact Info Side */}
            <div style={{ display: "grid", gap: "1.5rem" }}>
              <div
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "1.25rem" }}>
                  Kontaktuppgifter & Föreningsdata
                </h3>

                <div style={{ display: "grid", gap: "1.25rem" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(20, 184, 166, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={18} style={{ color: "var(--color-turquoise-600)" }} />
                    </div>
                    <div>
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)", textTransform: "uppercase" }}>
                        Officiell E-post
                      </span>
                      <p style={{ fontWeight: 600, margin: 0, fontSize: "var(--text-sm)" }}>
                        <a href="mailto:kontakt@gospelss.org" style={{ color: "var(--color-charcoal-900)" }}>
                          kontakt@gospelss.org
                        </a>
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(20, 184, 166, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={18} style={{ color: "var(--color-turquoise-600)" }} />
                    </div>
                    <div>
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)", textTransform: "uppercase" }}>
                        Säte & Adress
                      </span>
                      <p style={{ fontWeight: 600, margin: 0, fontSize: "var(--text-sm)" }}>
                        Göteborg, Västra Götaland, Sverige
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(20, 184, 166, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <HeartHandshake size={18} style={{ color: "var(--color-turquoise-600)" }} />
                    </div>
                    <div>
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)", textTransform: "uppercase" }}>
                        Ideell Förening
                      </span>
                      <p style={{ fontWeight: 600, margin: 0, fontSize: "var(--text-sm)" }}>
                        Gospels (Org.nr: 802557-4883)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pastoral Prayer Fast-track */}
              <div
                style={{
                  padding: "1.75rem",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "rgba(20, 184, 166, 0.08)",
                  border: "1px solid rgba(20, 184, 166, 0.25)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <MessageSquare size={18} style={{ color: "var(--color-turquoise-600)" }} />
                  <h4 style={{ fontWeight: 700, margin: 0, fontSize: "var(--text-base)" }}>
                    Behöver du förbön eller själavård?
                  </h4>
                </div>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-600)", lineHeight: 1.6, marginBottom: "1rem" }}>
                  Vår förbönstjänst skyddas av svensk GDPR Artikel 9 och pastoral sekretess. Du kan skicka in ditt
                  böneämne helt anonymt.
                </p>
                <button
                  onClick={() => setPrayerOpen(true)}
                  className="btn btn-secondary"
                  style={{ width: "100%", fontSize: "var(--text-xs)", padding: "0.6rem 1rem" }}
                >
                  Öppna Konfidentiell Förbön
                </button>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div
              style={{
                padding: "2.5rem",
                borderRadius: "var(--radius-lg)",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {isSubmitted ? (
                <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(20, 184, 166, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem auto",
                    }}
                  >
                    <CheckCircle2 size={32} style={{ color: "var(--color-turquoise-600)" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "var(--text-2xl)",
                      fontWeight: 600,
                      marginBottom: "0.75rem",
                    }}
                  >
                    Tack för ditt meddelande!
                  </h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-600)", lineHeight: 1.6, marginBottom: "2rem" }}>
                    Vi har tagit emot ditt meddelande och vår styrelse eller relevanta kontaktperson återkommer till dig
                    inom 1–2 vardagar.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "allmant", message: "" });
                    }}
                    className="btn btn-secondary"
                  >
                    Skicka ett till meddelande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, marginBottom: "1.5rem" }}>
                    Skicka ett meddelande
                  </h3>

                  <div style={{ display: "grid", gap: "1.25rem" }}>
                    <div>
                      <label
                        htmlFor="name"
                        style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, marginBottom: "0.5rem" }}
                      >
                        Ditt namn *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Förnamn och efternamn"
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-subtle)",
                          backgroundColor: "var(--bg-canvas)",
                          fontSize: "var(--text-sm)",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, marginBottom: "0.5rem" }}
                      >
                        E-postadress *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="namn@epost.se"
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-subtle)",
                          backgroundColor: "var(--bg-canvas)",
                          fontSize: "var(--text-sm)",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, marginBottom: "0.5rem" }}
                      >
                        Ärende *
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-subtle)",
                          backgroundColor: "var(--bg-canvas)",
                          fontSize: "var(--text-sm)",
                          outline: "none",
                        }}
                      >
                        <option value="allmant">Allmän förfrågan</option>
                        <option value="samverkan">Församlingssamverkan & Partnerkyrkor</option>
                        <option value="volontar">Volontärfrågor & Ungdomsinsats</option>
                        <option value="press">Press & Medieförfrågan</option>
                        <option value="ekonomi">Gåvor, Swish & Föreningsadministration</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, marginBottom: "0.5rem" }}
                      >
                        Meddelande *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Skriv ditt meddelande här..."
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-subtle)",
                          backgroundColor: "var(--bg-canvas)",
                          fontSize: "var(--text-sm)",
                          outline: "none",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ width: "100%", marginTop: "0.5rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem" }}
                    >
                      {isSubmitting ? (
                        "Skickar..."
                      ) : (
                        <>
                          <Send size={16} /> Skicka Meddelande
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <PrayerModal
        isOpen={prayerOpen}
        onClose={() => setPrayerOpen(false)}
      />
      <SwishModal
        isOpen={swishOpen}
        onClose={() => setSwishOpen(false)}
      />
    </div>
  );
}

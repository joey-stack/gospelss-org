"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Shield, Heart, Lock, Sparkles, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PrayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrayerModal({ isOpen, onClose }: PrayerModalProps) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [topic, setTopic] = useState("Hälsa & Helande");
  const [content, setContent] = useState("");
  const [gdprConsent, setGdprConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleResetAndClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    if (!gdprConsent) {
      setErrorMessage(
        t(
          "Samtycke krävs enligt GDPR Artikel 9 för att vi ska kunna be för ditt ämne.",
          "Consent is required under GDPR Article 9 for us to pray for your request."
        )
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: isAnonymous ? undefined : name.trim(),
          email: isAnonymous ? undefined : email.trim(),
          topic,
          content: content.trim(),
          gdprConsent,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(
          data.error ||
            t(
              "Kunde inte skicka böneämnet. Försök igen.",
              "Could not submit prayer request. Please try again."
            )
        );
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setErrorMessage(
        t(
          "Nätverksfel. Kontrollera din anslutning och försök igen.",
          "Network error. Please check your connection and try again."
        )
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setContent("");
    setIsAnonymous(false);
    setErrorMessage("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="prayer-modal-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "rgba(24, 24, 27, 0.65)",
        backdropFilter: "blur(6px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div
        style={{
          backgroundColor: "var(--bg-card)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-dropdown)",
          width: "100%",
          maxWidth: "520px",
          overflow: "hidden",
          border: "1px solid var(--border-subtle)",
          position: "relative",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1.5rem 1.75rem",
            borderBottom: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "var(--color-warm-grey-100)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-pill)",
                backgroundColor: "var(--color-turquoise-50)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-turquoise-600)",
              }}
            >
              <Heart size={18} />
            </div>
            <div>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  fontWeight: 700,
                  color: "var(--color-turquoise-700)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "block",
                }}
              >
                {t("Konfidentiell Förbön", "Confidential Prayer")}
              </span>
              <h3
                id="prayer-modal-title"
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: 700,
                  color: "var(--color-charcoal-900)",
                }}
              >
                {isSubmitted
                  ? t("Böneämne Mottaget", "Prayer Request Received")
                  : t("Skicka Böneämne", "Send Prayer Request")}
              </h3>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            aria-label={t("Stäng modal", "Close modal")}
            style={{
              padding: "0.5rem",
              borderRadius: "var(--radius-pill)",
              color: "var(--color-charcoal-500)",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: "1.75rem", overflowY: "auto" }}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div
                  style={{
                    backgroundColor: "#FEF2F2",
                    border: "1px solid #F87171",
                    color: "#991B1B",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    fontSize: "var(--text-xs)",
                    marginBottom: "1rem",
                    fontWeight: 500,
                  }}
                >
                  {errorMessage}
                </div>
              )}

              {/* GDPR Privacy Notice Badge */}
              <div
                style={{
                  backgroundColor: "var(--color-warm-grey-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.75rem 1rem",
                  marginBottom: "1.25rem",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-charcoal-700)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Lock size={15} color="var(--color-turquoise-600)" />
                <span>
                  <strong>{t("GDPR Artikel 9 Skydd:", "GDPR Article 9 Protection:")}</strong>{" "}
                  {t(
                    "Ditt ämne läses endast av vårt betrodda pastorala böneteam. Inget publiceras öppet.",
                    "Your request is only read by our trusted pastoral prayer team. Nothing is published publicly."
                  )}
                </span>
              </div>

              {/* Kategori / Ämne */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="prayer-topic"
                  style={{
                    display: "block",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    marginBottom: "0.375rem",
                    color: "var(--color-charcoal-800)",
                  }}
                >
                  {t("Område för bön", "Prayer Topic")}
                </label>
                <select
                  id="prayer-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-default)",
                    fontSize: "var(--text-sm)",
                    backgroundColor: "var(--bg-card)",
                    outline: "none",
                  }}
                >
                  <option value="Hälsa & Helande">{t("Hälsa & Helande", "Health & Healing")}</option>
                  <option value="Familj & Relationer">{t("Familj & Relationer", "Family & Relationships")}</option>
                  <option value="Tro & Andlig Vägledning">{t("Tro & Andlig Vägledning", "Faith & Guidance")}</option>
                  <option value="Akut Kris / Stöd">{t("Akut Kris / Stöd", "Urgent Crisis / Support")}</option>
                  <option value="Tacksägelse & Vittnesbörd">{t("Tacksägelse & Vittnesbörd", "Thanksgiving & Praise")}</option>
                  <option value="Annat">{t("Annat", "Other")}</option>
                </select>
              </div>

              {/* Böneämne Textarea */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="prayer-content"
                  style={{
                    display: "block",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    marginBottom: "0.375rem",
                    color: "var(--color-charcoal-800)",
                  }}
                >
                  {t("Hur kan vi be för dig? *", "How can we pray for you? *")}
                </label>
                <textarea
                  id="prayer-content"
                  rows={4}
                  required
                  placeholder={t(
                    "Skriv vad som ligger på ditt hjärta. Vi står med dig i tro...",
                    "Share what is on your heart. We stand with you in faith..."
                  )}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-default)",
                    fontSize: "var(--text-sm)",
                    backgroundColor: "var(--bg-card)",
                    lineHeight: 1.5,
                    resize: "vertical",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Anonymitetsval */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-charcoal-700)",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                  />
                  <span>
                    {t(
                      "Skicka anonymt (inga personuppgifter sparas)",
                      "Submit anonymously (no personal data stored)"
                    )}
                  </span>
                </label>
              </div>

              {/* Kontaktuppgifter (om ej anonym) */}
              {!isAnonymous && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="prayer-name"
                      style={{
                        display: "block",
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                        color: "var(--color-charcoal-700)",
                      }}
                    >
                      {t("Namn (valfritt)", "Name (optional)")}
                    </label>
                    <input
                      id="prayer-name"
                      type="text"
                      placeholder={t("Ditt förnamn", "Your first name")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.625rem 0.75rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-default)",
                        fontSize: "var(--text-sm)",
                        backgroundColor: "var(--bg-card)",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="prayer-email"
                      style={{
                        display: "block",
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                        color: "var(--color-charcoal-700)",
                      }}
                    >
                      {t("E-post (valfritt)", "Email (optional)")}
                    </label>
                    <input
                      id="prayer-email"
                      type="email"
                      placeholder={t("För personligt svar", "For personal reply")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.625rem 0.75rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-default)",
                        fontSize: "var(--text-sm)",
                        backgroundColor: "var(--bg-card)",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* GDPR Artikel 9 Samtycke (Obligatorisk) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  marginBottom: "1.5rem",
                }}
              >
                <input
                  id="prayer-consent"
                  type="checkbox"
                  required
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  style={{ marginTop: "0.2rem" }}
                />
                <label
                  htmlFor="prayer-consent"
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-charcoal-600)",
                    lineHeight: 1.5,
                  }}
                >
                  {t(
                    "Jag samtycker till att GOSPELS behandlar mitt böneämne i enlighet med GDPR Artikel 9. Mitt ämne förblir strikt konfidentiellt och delas endast med vårt betrodda pastorala böneteam.",
                    "I consent to GOSPELS processing my prayer request in accordance with GDPR Article 9. My request remains strictly confidential and shared only with our trusted pastoral prayer team."
                  )}
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  backgroundColor: "var(--color-turquoise-600)",
                  color: "var(--color-white)",
                  padding: "0.875rem",
                  borderRadius: "var(--radius-pill)",
                  fontWeight: 600,
                  fontSize: "var(--text-base)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  boxShadow: "var(--shadow-card)",
                  opacity: isSubmitting ? 0.7 : 1,
                  minHeight: "48px",
                }}
              >
                <Send size={16} />
                <span>
                  {isSubmitting
                    ? t("Skickar böneämne...", "Submitting request...")
                    : t("Skicka Böneämne i Förtroende", "Send Prayer Request in Confidence")}
                </span>
              </button>
            </form>
          ) : (
            /* Affirmative Confirmation */
            <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-pill)",
                  backgroundColor: "var(--color-turquoise-50)",
                  color: "var(--color-turquoise-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem auto",
                }}
              >
                <CheckCircle size={36} />
              </div>

              <h4 style={{ fontSize: "var(--text-2xl)", fontWeight: 700, marginBottom: "0.75rem" }}>
                {t("Vi Ber För Dig", "We Are Praying For You")}
              </h4>
              <p
                style={{
                  color: "var(--color-charcoal-700)",
                  fontSize: "var(--text-sm)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                }}
              >
                {t(
                  "Ditt böneämne har tagits emot med djupaste omsorg och överlämnats till vårt förbönsteam. Du är inte ensam.",
                  "Your prayer request has been received with deepest care and entrusted to our prayer team. You are not alone."
                )}
              </p>

              {/* Scripture Pull Quote */}
              <div
                style={{
                  backgroundColor: "var(--color-warm-grey-100)",
                  padding: "1.25rem",
                  borderRadius: "var(--radius-lg)",
                  marginBottom: "2rem",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <p
                  className="font-scripture"
                  style={{
                    fontSize: "1.125rem",
                    color: "var(--color-charcoal-800)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {t(
                    "”Herren är nära alla som åkallar honom, alla som åkallar honom i sanning.”",
                    "“The Lord is near to all who call on him, to all who call on him in truth.”"
                  )}
                </p>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    color: "var(--color-turquoise-700)",
                  }}
                >
                  {t("Psaltaren 145:18", "Psalm 145:18")}
                </span>
              </div>

              <button
                onClick={handleResetAndClose}
                style={{
                  backgroundColor: "var(--color-turquoise-600)",
                  color: "var(--color-white)",
                  padding: "0.75rem 2rem",
                  borderRadius: "var(--radius-pill)",
                  fontWeight: 600,
                  fontSize: "var(--text-sm)",
                  minHeight: "44px",
                }}
              >
                {t("Stäng", "Close")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

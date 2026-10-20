"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Users, Shield, Sparkles, Send } from "lucide-react";

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Värdskap & Välkomnande");
  const [isUnder18, setIsUnder18] = useState(false);
  const [guardianName, setGuardianName] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [parentalConsent, setParentalConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleResetAndClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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
    if (!name || !email || !phone) return;

    if (isUnder18 && (!guardianName || !parentalConsent)) {
      setErrorMessage("Målsmans uppgifter och samtycke krävs för sökande under 18 år.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/volunteer/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          role,
          isUnder18,
          guardianName: isUnder18 ? guardianName : undefined,
          guardianPhone: isUnder18 ? guardianPhone : undefined,
          parentalConsent: isUnder18 ? parentalConsent : undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || "Kunde inte skicka ansökan.");
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setErrorMessage("Nätverksfel. Kontrollera din anslutning.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setIsUnder18(false);
    setGuardianName("");
    setGuardianPhone("");
    setParentalConsent(false);
    setErrorMessage("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="volunteer-modal-title"
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
              <Users size={18} />
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
                Volontärteam Göteborg
              </span>
              <h3
                id="volunteer-modal-title"
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: 700,
                  color: "var(--color-charcoal-900)",
                }}
              >
                {isSubmitted ? "Ansökan Mottagen" : "Bli Volontär i GOSPELS"}
              </h3>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            aria-label="Stäng modal"
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

              {/* Team Track */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="vol-role"
                  style={{
                    display: "block",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    marginBottom: "0.375rem",
                    color: "var(--color-charcoal-800)",
                  }}
                >
                  Välj Team / Ansvarsområde
                </label>
                <select
                  id="vol-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
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
                  <option value="Värdskap & Välkomnande">Värdskap & Välkomnande</option>
                  <option value="Ljud- & Ljusteknik">Ljud- & Ljusteknik</option>
                  <option value="Foto & Media">Foto & Media</option>
                  <option value="Förbönsteam">Förbönsteam (Pastoral ledning)</option>
                  <option value="Scen & Logistik">Scen & Logistik</option>
                </select>
              </div>

              {/* Full Name */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="vol-name"
                  style={{
                    display: "block",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    marginBottom: "0.375rem",
                    color: "var(--color-charcoal-800)",
                  }}
                >
                  För- och efternamn *
                </label>
                <input
                  id="vol-name"
                  type="text"
                  required
                  placeholder="Ditt fullständiga namn"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-default)",
                    fontSize: "var(--text-sm)",
                    outline: "none",
                  }}
                />
              </div>

              {/* Email & Phone */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <label
                    htmlFor="vol-email"
                    style={{
                      display: "block",
                      fontSize: "var(--text-xs)",
                      fontWeight: 600,
                      marginBottom: "0.375rem",
                      color: "var(--color-charcoal-800)",
                    }}
                  >
                    E-postadress *
                  </label>
                  <input
                    id="vol-email"
                    type="email"
                    required
                    placeholder="din.epost@exempel.se"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-default)",
                      fontSize: "var(--text-sm)",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="vol-phone"
                    style={{
                      display: "block",
                      fontSize: "var(--text-xs)",
                      fontWeight: 600,
                      marginBottom: "0.375rem",
                      color: "var(--color-charcoal-800)",
                    }}
                  >
                    Telefonnummer *
                  </label>
                  <input
                    id="vol-phone"
                    type="tel"
                    required
                    placeholder="070-123 45 67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-default)",
                      fontSize: "var(--text-sm)",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Youth Safeguarding (<18) Toggle */}
              <div
                style={{
                  backgroundColor: "var(--color-warm-grey-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.875rem 1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    color: "var(--color-charcoal-900)",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isUnder18}
                    onChange={(e) => setIsUnder18(e.target.checked)}
                  />
                  <span>Jag är under 18 år (Ungdomsskydd & föräldrasamtycke)</span>
                </label>

                {isUnder18 && (
                  <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border-subtle)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <div>
                        <label
                          htmlFor="vol-guardian-name"
                          style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, marginBottom: "0.25rem" }}
                        >
                          Målsmans Namn *
                        </label>
                        <input
                          id="vol-guardian-name"
                          type="text"
                          required={isUnder18}
                          placeholder="Förälders namn"
                          value={guardianName}
                          onChange={(e) => setGuardianName(e.target.value)}
                          style={{
                            width: "100%",
                            padding: "0.625rem 0.75rem",
                            borderRadius: "var(--radius-md)",
                            border: "1px solid var(--border-default)",
                            fontSize: "var(--text-sm)",
                            outline: "none",
                          }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="vol-guardian-phone"
                          style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, marginBottom: "0.25rem" }}
                        >
                          Målsmans Telefon *
                        </label>
                        <input
                          id="vol-guardian-phone"
                          type="tel"
                          required={isUnder18}
                          placeholder="Målsmans mobil"
                          value={guardianPhone}
                          onChange={(e) => setGuardianPhone(e.target.value)}
                          style={{
                            width: "100%",
                            padding: "0.625rem 0.75rem",
                            borderRadius: "var(--radius-md)",
                            border: "1px solid var(--border-default)",
                            fontSize: "var(--text-sm)",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <input
                        id="vol-parental-consent"
                        type="checkbox"
                        required={isUnder18}
                        checked={parentalConsent}
                        onChange={(e) => setParentalConsent(e.target.checked)}
                        style={{ marginTop: "0.2rem" }}
                      />
                      <label htmlFor="vol-parental-consent" style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-700)", lineHeight: 1.4 }}>
                        Jag bekräftar att min målsman godkänner min medverkan som volontär med GOSPELS.
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit */}
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
                <span>{isSubmitting ? "Skickar ansökan..." : "Skicka Volontäransökan"}</span>
              </button>
            </form>
          ) : (
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
                Varmt Välkommen till Teamet, {name}!
              </h4>
              <p style={{ color: "var(--color-charcoal-700)", fontSize: "var(--text-sm)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                Vi har tagit emot din ansökan till <strong>{role}</strong>. Vår volontärsamordnare kommer
                att kontakta dig inför nästa samling i Göteborg.
              </p>

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
                Klar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

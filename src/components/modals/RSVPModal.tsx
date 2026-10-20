"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Calendar, Users, Mail, User, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle?: string;
  eventDate?: string;
}

export function RSVPModal({
  isOpen,
  onClose,
  eventTitle = "Holy Spirit Worship 2026",
  eventDate = "Lördag 14 November 2026 · Göteborg",
}: RSVPModalProps) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
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

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: "evt-hsw-2026",
          name,
          email,
          attendees,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || "Bokningen misslyckades. Försök igen.");
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      setErrorMessage("Nätverksfel. Kontrollera din anslutning och försök igen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setAttendees(1);
    onClose();
  };

  // Generate Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Holy Spirit Worship 2026 — GOSPELS"
  )}&dates=20261114T180000Z/20261114T213000Z&details=${encodeURIComponent(
    "En kväll av oavbruten lovsång och tillbedjan i Göteborg. Fri entré."
  )}&location=${encodeURIComponent("Göteborg, Sverige")}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "rgba(24, 24, 27, 0.6)",
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
          maxWidth: "480px",
          overflow: "hidden",
          border: "1px solid var(--border-subtle)",
          position: "relative",
          animation: "modalFadeIn 200ms ease-out",
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
          <div>
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                color: "var(--color-turquoise-600)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: "0.25rem",
              }}
            >
              {t("Gratis Entré · Göteborg", "Free Admission · Gothenburg")}
            </span>
            <h3
              id="modal-title"
              style={{
                fontSize: "var(--text-xl)",
                fontWeight: 700,
                color: "var(--color-charcoal-900)",
              }}
            >
              {isSubmitted
                ? t("Plats Reserverad!", "Seat Reserved!")
                : t("Boka Gratis Biljett", "Reserve Free Ticket")}
            </h3>
          </div>

          <button
            onClick={handleResetAndClose}
            aria-label={t("Stäng modal", "Close modal")}
            style={{
              padding: "0.5rem",
              borderRadius: "var(--radius-pill)",
              color: "var(--color-charcoal-500)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "1.75rem" }}>
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
              <div
                style={{
                  backgroundColor: "var(--color-warm-grey-50)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.875rem 1rem",
                  marginBottom: "1.25rem",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-charcoal-700)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <Calendar size={18} color="var(--color-turquoise-600)" />
                <span>
                  <strong>{eventTitle}</strong> · {eventDate}
                </span>
              </div>

              {/* Namn */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="rsvp-name"
                  style={{
                    display: "block",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    marginBottom: "0.375rem",
                    color: "var(--color-charcoal-800)",
                  }}
                >
                  {t("Ditt Namn *", "Your Name *")}
                </label>
                <div style={{ position: "relative" }}>
                  <User
                    size={16}
                    color="var(--color-charcoal-400)"
                    style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }}
                  />
                  <input
                    id="rsvp-name"
                    type="text"
                    required
                    placeholder={t("För- och efternamn", "First and last name")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem 0.75rem 2.5rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-default)",
                      fontSize: "var(--text-sm)",
                      backgroundColor: "var(--bg-card)",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* E-post */}
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="rsvp-email"
                  style={{
                    display: "block",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    marginBottom: "0.375rem",
                    color: "var(--color-charcoal-800)",
                  }}
                >
                  {t("E-postadress (för biljettbekräftelse) *", "Email Address (for ticket pass) *")}
                </label>
                <div style={{ position: "relative" }}>
                  <Mail
                    size={16}
                    color="var(--color-charcoal-400)"
                    style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }}
                  />
                  <input
                    id="rsvp-email"
                    type="email"
                    required
                    placeholder="din.epost@exempel.se"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem 0.75rem 2.5rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-default)",
                      fontSize: "var(--text-sm)",
                      backgroundColor: "var(--bg-card)",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Antal platser */}
              <div style={{ marginBottom: "1.25rem" }}>
                <label
                  htmlFor="rsvp-attendees"
                  style={{
                    display: "block",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    marginBottom: "0.375rem",
                    color: "var(--color-charcoal-800)",
                  }}
                >
                  {t("Antal Platser (Max 4 per bokning)", "Number of Seats (Max 4 per booking)")}
                </label>
                <div style={{ position: "relative" }}>
                  <Users
                    size={16}
                    color="var(--color-charcoal-400)"
                    style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)" }}
                  />
                  <select
                    id="rsvp-attendees"
                    value={attendees}
                    onChange={(e) => setAttendees(Number(e.target.value))}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem 0.75rem 2.5rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-default)",
                      fontSize: "var(--text-sm)",
                      backgroundColor: "var(--bg-card)",
                      outline: "none",
                    }}
                  >
                    <option value={1}>{t("1 person", "1 person")}</option>
                    <option value={2}>{t("2 personer", "2 persons")}</option>
                    <option value={3}>{t("3 personer", "3 persons")}</option>
                    <option value={4}>{t("4 personer", "4 persons")}</option>
                  </select>
                </div>
              </div>

              {/* Samtycke */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", marginBottom: "1.5rem" }}>
                <input
                  id="rsvp-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  style={{ marginTop: "0.2rem" }}
                />
                <label htmlFor="rsvp-consent" style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-600)", lineHeight: 1.5 }}>
                  {t(
                    "Jag godkänner att GOSPELS skickar bekräftelse och viktig lokalinformation inför samlingen.",
                    "I agree that GOSPELS may send ticket confirmation and practical venue details for the gathering."
                  )}
                </label>
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
                <Sparkles size={18} />
                <span>
                  {isSubmitting
                    ? t("Bekräftar plats...", "Confirming reservation...")
                    : t("Bekräfta Gratis Bokning", "Confirm Free Reservation")}
                </span>
              </button>
            </form>
          ) : (
            /* Affirmative Confirmation State */
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
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

              <h4 style={{ fontSize: "var(--text-2xl)", fontWeight: 700, marginBottom: "0.5rem" }}>
                {t(`Varmt Välkommen, ${name}!`, `Warmly Welcome, ${name}!`)}
              </h4>
              <p style={{ color: "var(--color-charcoal-700)", fontSize: "var(--text-sm)", marginBottom: "1.5rem" }}>
                {t(
                  `Vi har reserverat ${attendees} ${attendees === 1 ? "plats" : "platser"} till ${eventTitle}. En bekräftelse har skickats till ${email}.`,
                  `We have reserved ${attendees} ${attendees === 1 ? "seat" : "seats"} for ${eventTitle}. A pass has been emailed to ${email}.`
                )}
              </p>

              {/* Next Steps Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "var(--color-turquoise-600)",
                    color: "var(--color-white)",
                    padding: "0.75rem",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Calendar size={16} />
                  <span>{t("Lägg till i Google Kalender", "Add to Google Calendar")}</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  style={{
                    backgroundColor: "var(--color-warm-grey-200)",
                    color: "var(--color-charcoal-900)",
                    padding: "0.75rem",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 500,
                  }}
                >
                  {t("Klar", "Done")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

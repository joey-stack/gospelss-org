"use client";

import React, { useState } from "react";
import { Heart, CheckCircle, Shield, Sparkles, CreditCard, ArrowRight } from "lucide-react";

interface KingdomPartnerSectionProps {
  onOpenSwish: () => void;
}

export function KingdomPartnerSection({ onOpenSwish }: KingdomPartnerSectionProps) {
  const [selectedTier, setSelectedTier] = useState<number>(150);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"STRIPE" | "SWISH">("STRIPE");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === "SWISH") {
      onOpenSwish();
      return;
    }

    if (!name || !email) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/partner/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          amount: selectedTier,
          provider: paymentMethod,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || "Något gick fel. Försök igen.");
      } else {
        setIsSuccess(true);
      }
    } catch {
      setErrorMessage("Nätverksfel. Kontrollera din internetanslutning.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="kingdom-partner"
      className="section-sacred"
      style={{
        backgroundColor: "var(--color-warm-grey-100)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container-page">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3.5rem auto" }}>
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
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            <Sparkles size={14} />
            <span>Kingdom Partner · Månadsgivare</span>
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
            Bli en del av det Gud gör bland Göteborgs unga
          </h2>

          <p style={{ color: "var(--color-charcoal-700)", fontSize: "var(--text-base)", lineHeight: 1.6 }}>
            Som Kingdom Partner bär du visionen att hålla alla lovsångskonserter 100% kostnadsfria.
            Ditt månatliga stöd finansierar scenlokaler, professionell ljudteknik och förbönsteam.
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.75rem",
            maxWidth: "1000px",
            margin: "0 auto 3rem auto",
          }}
        >
          {/* Tier 1: 150 kr/mån (Primary Highlight) */}
          <div
            onClick={() => setSelectedTier(150)}
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: "var(--radius-xl)",
              padding: "2rem",
              border: selectedTier === 150 ? "2px solid var(--color-turquoise-600)" : "1px solid var(--border-subtle)",
              boxShadow: selectedTier === 150 ? "var(--shadow-card)" : "var(--shadow-subtle)",
              cursor: "pointer",
              position: "relative",
              transition: "all var(--transition-fast)",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "-12px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "var(--color-turquoise-600)",
                color: "var(--color-white)",
                padding: "0.25rem 0.875rem",
                borderRadius: "var(--radius-pill)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
              }}
            >
              Mest Betydelsefull
            </span>

            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.25rem" }}>
              Kingdom Partner
            </h3>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)", marginBottom: "1.25rem" }}>
              För enskilda givare & ungdomar
            </p>

            <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color-charcoal-900)" }}>
                150 kr
              </span>
              <span style={{ color: "var(--color-charcoal-500)", fontSize: "var(--text-sm)" }}>/ månad</span>
            </div>

            <ul style={{ listStyle: "none", fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--color-turquoise-600)" />
                <span>Garanterar fri entré för 3 unga</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--color-turquoise-600)" />
                <span>Kvartalsvis transparent rapport</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--color-turquoise-600)" />
                <span>Personlig böneuppdatering</span>
              </li>
            </ul>
          </div>

          {/* Tier 2: 300 kr/mån */}
          <div
            onClick={() => setSelectedTier(300)}
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: "var(--radius-xl)",
              padding: "2rem",
              border: selectedTier === 300 ? "2px solid var(--color-turquoise-600)" : "1px solid var(--border-subtle)",
              boxShadow: selectedTier === 300 ? "var(--shadow-card)" : "var(--shadow-subtle)",
              cursor: "pointer",
              position: "relative",
              transition: "all var(--transition-fast)",
            }}
          >
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.25rem" }}>
              Generös Partner
            </h3>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)", marginBottom: "1.25rem" }}>
              För familjer & ledare
            </p>

            <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color-charcoal-900)" }}>
                300 kr
              </span>
              <span style={{ color: "var(--color-charcoal-500)", fontSize: "var(--text-sm)" }}>/ månad</span>
            </div>

            <ul style={{ listStyle: "none", fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--color-turquoise-600)" />
                <span>Finansierar professionell ljudteknik</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--color-turquoise-600)" />
                <span>Fri entré för 6 unga deltagare</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--color-turquoise-600)" />
                <span>Inbjudan till årlig tacksägelsesamling</span>
              </li>
            </ul>
          </div>

          {/* Tier 3: 500 kr/mån */}
          <div
            onClick={() => setSelectedTier(500)}
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: "var(--radius-xl)",
              padding: "2rem",
              border: selectedTier === 500 ? "2px solid var(--color-turquoise-600)" : "1px solid var(--border-subtle)",
              boxShadow: selectedTier === 500 ? "var(--shadow-card)" : "var(--shadow-subtle)",
              cursor: "pointer",
              position: "relative",
              transition: "all var(--transition-fast)",
            }}
          >
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.25rem" }}>
              Församlingspartner
            </h3>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)", marginBottom: "1.25rem" }}>
              För företag & församlingar
            </p>

            <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color-charcoal-900)" }}>
                500 kr
              </span>
              <span style={{ color: "var(--color-charcoal-500)", fontSize: "var(--text-sm)" }}>/ månad</span>
            </div>

            <ul style={{ listStyle: "none", fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--color-turquoise-600)" />
                <span>Möjliggör storskaliga öppna konserter</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--color-turquoise-600)" />
                <span>Stödjer regionala församlingsnätverk</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle size={16} color="var(--color-turquoise-600)" />
                <span>Hedersomnämnande i årsredovisning</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Subscription Box */}
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            backgroundColor: "var(--bg-card)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-card)",
            padding: "2rem",
          }}
        >
          {!isSuccess ? (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>
                  Ditt Val: {selectedTier} kr / månad
                </h4>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("STRIPE")}
                    style={{
                      padding: "0.375rem 0.75rem",
                      borderRadius: "var(--radius-sm)",
                      fontSize: "var(--text-xs)",
                      fontWeight: 600,
                      backgroundColor: paymentMethod === "STRIPE" ? "var(--color-turquoise-600)" : "var(--color-warm-grey-200)",
                      color: paymentMethod === "STRIPE" ? "var(--color-white)" : "var(--color-charcoal-800)",
                    }}
                  >
                    Kortbetalning
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("SWISH")}
                    style={{
                      padding: "0.375rem 0.75rem",
                      borderRadius: "var(--radius-sm)",
                      fontSize: "var(--text-xs)",
                      fontWeight: 600,
                      backgroundColor: paymentMethod === "SWISH" ? "var(--color-turquoise-600)" : "var(--color-warm-grey-200)",
                      color: paymentMethod === "SWISH" ? "var(--color-white)" : "var(--color-charcoal-800)",
                    }}
                  >
                    Swish
                  </button>
                </div>
              </div>

              {errorMessage && (
                <div style={{ backgroundColor: "#FEF2F2", color: "#991B1B", padding: "0.75rem", borderRadius: "var(--radius-md)", fontSize: "var(--text-xs)", marginBottom: "1rem" }}>
                  {errorMessage}
                </div>
              )}

              {paymentMethod === "STRIPE" ? (
                <>
                  <div style={{ marginBottom: "1rem" }}>
                    <label style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, marginBottom: "0.375rem" }}>
                      För- och efternamn *
                    </label>
                    <input
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

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, marginBottom: "0.375rem" }}>
                      E-postadress *
                    </label>
                    <input
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      backgroundColor: "var(--color-turquoise-600)",
                      color: "var(--color-white)",
                      padding: "0.875rem",
                      borderRadius: "var(--radius-pill)",
                      fontSize: "var(--text-base)",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      minHeight: "48px",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                  >
                    <CreditCard size={18} />
                    <span>{isSubmitting ? "Initierar partnerskap..." : `Bli Kingdom Partner (${selectedTier} kr/mån)`}</span>
                  </button>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "1rem 0" }}>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)", marginBottom: "1.25rem" }}>
                    Du kan enkelt ge {selectedTier} kr via Swish till vårt ideella föreningsnummer.
                  </p>
                  <button
                    type="button"
                    onClick={onOpenSwish}
                    style={{
                      backgroundColor: "var(--color-turquoise-600)",
                      color: "var(--color-white)",
                      padding: "0.875rem 2rem",
                      borderRadius: "var(--radius-pill)",
                      fontSize: "var(--text-base)",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Heart size={18} />
                    <span>Öppna Swish-detaljer</span>
                  </button>
                </div>
              )}
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

              <h4 style={{ fontSize: "var(--text-2xl)", fontWeight: 700, marginBottom: "0.5rem" }}>
                Varmt Tack, {name}!
              </h4>
              <p style={{ color: "var(--color-charcoal-700)", fontSize: "var(--text-sm)", marginBottom: "1.5rem" }}>
                Ditt månatliga partnerskap på <strong>{selectedTier} kr/mån</strong> gör verklig skillnad
                för unga i Göteborg. En bekräftelse har skickats till <strong>{email}</strong>.
              </p>

              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                style={{
                  backgroundColor: "var(--color-warm-grey-200)",
                  color: "var(--color-charcoal-900)",
                  padding: "0.75rem 2rem",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                }}
              >
                Klar
              </button>
            </div>
          )}

          {/* Non-Profit Legal Transparency Tag */}
          <div
            style={{
              marginTop: "1.5rem",
              paddingTop: "1rem",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontSize: "var(--text-xs)",
              color: "var(--color-charcoal-500)",
            }}
          >
            <Shield size={14} color="var(--color-turquoise-600)" />
            <span>Gospels (Org.nr 802557-4883) · 100% ideell verksamhet</span>
          </div>
        </div>
      </div>
    </section>
  );
}

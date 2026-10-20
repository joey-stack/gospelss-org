"use client";

import React, { useState, useEffect } from "react";
import { X, Copy, Check, Heart, Shield } from "lucide-react";

interface SwishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SwishModal({ isOpen, onClose }: SwishModalProps) {
  const [copied, setCopied] = useState(false);
  const swishNumber = "123 557 48 83";
  const orgNumber = "802557-4883";
  const bankgiro = "5123-4567";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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

  const handleCopySwish = () => {
    navigator.clipboard.writeText(swishNumber.replace(/\s+/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="swish-modal-title"
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
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: "var(--bg-card)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-dropdown)",
          width: "100%",
          maxWidth: "460px",
          overflow: "hidden",
          border: "1px solid var(--border-subtle)",
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
            <Heart size={20} color="var(--color-turquoise-600)" />
            <h3
              id="swish-modal-title"
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: 700,
                color: "var(--color-charcoal-900)",
              }}
            >
              Stöd GOSPELS med Swish
            </h3>
          </div>

          <button
            onClick={onClose}
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

        {/* Body */}
        <div style={{ padding: "1.75rem" }}>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)", marginBottom: "1.25rem", lineHeight: 1.5 }}>
            Alla gåvor går oavkortat till att möjliggöra kostnadsfria lovsångssamlingar, lokaler och teknisk utrustning för unga i Göteborg.
          </p>

          {/* Swish Number Box */}
          <div
            style={{
              backgroundColor: "var(--color-warm-grey-50)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "1.25rem",
              textAlign: "center",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", fontWeight: 700, color: "var(--color-charcoal-500)", letterSpacing: "0.05em", display: "block", marginBottom: "0.5rem" }}>
              Swish-nummer
            </span>
            <div
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: 800,
                color: "var(--color-charcoal-900)",
                letterSpacing: "0.02em",
                marginBottom: "0.75rem",
              }}
            >
              {swishNumber}
            </div>

            <button
              onClick={handleCopySwish}
              style={{
                backgroundColor: copied ? "var(--color-turquoise-700)" : "var(--color-turquoise-600)",
                color: "var(--color-white)",
                padding: "0.5rem 1.25rem",
                borderRadius: "var(--radius-pill)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                transition: "background-color var(--transition-fast)",
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? "Kopierat!" : "Kopiera Nummer"}</span>
            </button>
          </div>

          {/* Legal Non-profit Info */}
          <div
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-charcoal-600)",
              backgroundColor: "var(--color-warm-grey-100)",
              padding: "0.875rem 1rem",
              borderRadius: "var(--radius-md)",
              marginBottom: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.375rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Shield size={14} color="var(--color-turquoise-600)" />
              <strong>Mottagare: Gospels (Ideell Förening)</strong>
            </div>
            <span><strong>Organisationsnummer:</strong> {orgNumber}</span>
            <span><strong>Bankgiro:</strong> {bankgiro}</span>
          </div>

          <button
            onClick={onClose}
            style={{
              width: "100%",
              backgroundColor: "var(--color-warm-grey-200)",
              color: "var(--color-charcoal-900)",
              padding: "0.75rem",
              borderRadius: "var(--radius-pill)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
            }}
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
}

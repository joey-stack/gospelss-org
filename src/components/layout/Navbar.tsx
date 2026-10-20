"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, Heart } from "lucide-react";

interface NavbarProps {
  onOpenRSVP?: () => void;
  onOpenSwish?: () => void;
  onOpenPrayer?: () => void;
}

export function Navbar({ onOpenRSVP, onOpenSwish, onOpenPrayer }: NavbarProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"sv" | "en">("sv");

  const handleRSVP = () => {
    if (onOpenRSVP) {
      onOpenRSVP();
    } else {
      window.location.href = "/#konserter";
    }
  };

  const handleSwish = () => {
    if (onOpenSwish) {
      onOpenSwish();
    } else {
      window.location.href = "/#partner";
    }
  };

  const handlePrayer = () => {
    if (onOpenPrayer) {
      onOpenPrayer();
    } else {
      window.location.href = "/kontakt";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: isScrolled ? "blur(14px)" : "blur(8px)",
          backgroundColor: isScrolled
            ? "rgba(250, 250, 248, 0.94)"
            : "rgba(250, 250, 248, 0.8)",
          borderBottom: "1px solid var(--border-subtle)",
          transition: "all var(--transition-smooth)",
        }}
      >
        <div
          className="container-page"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4.5rem",
          }}
        >
          {/* Brand Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/assets/brand/logo-full.svg"
              alt="GOSPELS Logo"
              width={160}
              height={36}
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "2rem",
            }}
            className="desktop-nav"
          >
            <Link
              href="/#konserter"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--text-secondary)",
              }}
            >
              Konserter
            </Link>
            <Link
              href="/om-oss"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--text-secondary)",
              }}
            >
              Om Oss
            </Link>
            <Link
              href="/#partner"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--text-secondary)",
              }}
            >
              Ge ett stöd
            </Link>
            <button
              onClick={handlePrayer}
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--text-secondary)",
                cursor: "pointer",
              }}
            >
              Bön & Förbön
            </button>
          </nav>

          {/* Action Row */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "sv" ? "en" : "sv")}
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                padding: "0.375rem 0.625rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--color-warm-grey-200)",
                color: "var(--color-charcoal-700)",
                textTransform: "uppercase",
              }}
              title="Växla språk / Switch language"
            >
              {lang}
            </button>

            {/* Quick Swish Button */}
            <button
              onClick={handleSwish}
              style={{
                backgroundColor: "var(--color-warm-grey-100)",
                color: "var(--color-charcoal-900)",
                border: "1px solid var(--border-default)",
                padding: "0.5rem 0.875rem",
                borderRadius: "var(--radius-pill)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
              }}
            >
              <Heart size={14} color="var(--color-turquoise-600)" />
              <span>Swish</span>
            </button>

            {/* Primary RSVP CTA */}
            <button
              onClick={handleRSVP}
              style={{
                backgroundColor: "var(--color-turquoise-600)",
                color: "var(--color-white)",
                padding: "0.625rem 1.25rem",
                borderRadius: "var(--radius-pill)",
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                boxShadow: "var(--shadow-subtle)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                minHeight: "44px",
              }}
            >
              <span>RSVP</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Öppna meny"
              style={{
                padding: "0.5rem",
                color: "var(--color-charcoal-800)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              borderTop: "1px solid var(--border-subtle)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <Link
              href="/#konserter"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--color-charcoal-900)" }}
            >
              Konserter & Evenemang
            </Link>
            <Link
              href="/om-oss"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--color-charcoal-900)" }}
            >
              Om Gospels & Styrelsen
            </Link>
            <Link
              href="/#partner"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--color-charcoal-900)" }}
            >
              Bli Kingdom Partner (150 kr/mån)
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrayer();
              }}
              style={{
                fontSize: "var(--text-base)",
                fontWeight: 600,
                color: "var(--color-charcoal-900)",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              Skicka Böneämne (GDPR Art. 9)
            </button>
            <div style={{ paddingTop: "0.5rem", display: "flex", gap: "0.75rem" }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleRSVP();
                }}
                style={{
                  flex: 1,
                  backgroundColor: "var(--color-turquoise-600)",
                  color: "var(--color-white)",
                  padding: "0.75rem",
                  borderRadius: "var(--radius-pill)",
                  fontWeight: 600,
                  fontSize: "var(--text-sm)",
                  textAlign: "center",
                }}
              >
                Boka Plats Gratis
              </button>
            </div>
          </div>
        )}
      </header>

      <style jsx global>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

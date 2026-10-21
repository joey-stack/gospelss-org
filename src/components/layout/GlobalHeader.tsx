"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ArrowRight } from "lucide-react";

export function GlobalHeader() {
  const { t, language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/events", label: t("Evenemang", "Events") },
    { href: "/about/story", label: t("Om Oss", "About") },
    { href: "/partners", label: t("Partnerförsamlingar", "Partners") },
    { href: "/get-involved/volunteer", label: t("Engagera Dig", "Get Involved") },
    { href: "/watch", label: t("Se & Lyssna", "Watch") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/85 backdrop-blur-md border-b border-white/10 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Brand Logo Lockup */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <Image
            src="/assets/brand/logo-white.svg"
            alt="GOSPELS"
            width={120}
            height={26}
            priority
            className="h-6 w-auto"
          />
        </Link>

        {/* Center: Nav links (Reunion style) */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-inter font-medium text-grey-300 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions (Language toggle + Single Pill CTA [Next Event]) */}
        <div className="flex items-center gap-4">
          {/* SV / EN Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-white/20 text-grey-300 hover:text-white hover:border-white/40 transition-all duration-200"
            aria-label="Toggle language"
          >
            {language === "SV" ? "EN" : "SV"}
          </button>

          {/* Single Pill Primary CTA Button */}
          <div className="hidden sm:block">
            <Link
              href="/events/holy-spirit-worship"
              className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-brand-500/25 gap-2"
            >
              <span>{t("Nästa Samling", "Next Event")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-grey-300 hover:text-white transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-white/10 px-6 py-8 space-y-6 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-inter font-medium text-grey-200 hover:text-brand-400 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/events/holy-spirit-worship"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md w-full gap-2 text-center"
            >
              <span>{t("Nästa Samling · Fri Entré", "Next Event · Free RSVP")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default GlobalHeader;

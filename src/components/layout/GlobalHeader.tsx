"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ArrowRight } from "lucide-react";

export function GlobalHeader() {
  const { t, language, setLanguage, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/events", label: t("Evenemang", "Events") },
    { href: "/about/story", label: t("Om Oss", "About") },
    { href: "/partners", label: t("Partnerförsamlingar", "Partner Churches") },
    { href: "/get-involved/volunteer", label: t("Engagera Dig", "Get Involved") },
    { href: "/watch", label: t("Se & Lyssna", "Watch & Listen") },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Lockup */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/assets/brand/logo-full.svg"
            alt="GOSPELS"
            width={120}
            height={26}
            priority
            className="h-6 w-auto"
          />
        </Link>

        {/* 5 Main Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-700 hover:text-teal-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Cluster (CTA + Language Toggle + Mobile Toggle) */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="px-2.5 py-1 text-xs font-semibold rounded-full border border-stone-300 text-stone-600 hover:text-stone-900 transition"
            aria-label="Toggle language"
          >
            {language === "SV" ? "EN" : "SV"}
          </button>

          {/* CTA: Next Event */}
          <Link
            href="/events/holy-spirit-worship"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs transition"
          >
            <span>{t("Nästa Samling", "Next Event")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-stone-200 px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-800 hover:text-teal-700 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
            <Link
              href="/events/holy-spirit-worship"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 text-white text-sm font-semibold"
            >
              <span>{t("Nästa Samling", "Next Event")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default GlobalHeader;

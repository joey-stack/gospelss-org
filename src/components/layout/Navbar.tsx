"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  Calendar,
  PlayCircle,
  Church,
  Heart,
  Users,
  HandHeart,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Check,
  Copy,
  Globe,
} from "lucide-react";

interface NavbarProps {
  onOpenRSVP?: () => void;
  onOpenSwish?: () => void;
  onOpenPrayer?: () => void;
  onOpenVolunteer?: () => void;
}

export function Navbar({
  onOpenRSVP,
  onOpenSwish,
  onOpenPrayer,
  onOpenVolunteer,
}: NavbarProps = {}) {
  const pathname = usePathname();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [copiedSwish, setCopiedSwish] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for subtle elevation adjustment
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileDrawerOpen(false);
      }
    };
    if (mobileDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileDrawerOpen]);

  // Close drawer on path change
  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [pathname]);

  const copySwishNumber = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("1234567890");
      setCopiedSwish(true);
      setTimeout(() => setCopiedSwish(false), 2000);
    }
  };

  const handleSupportClick = () => {
    setMobileDrawerOpen(false);
    if (onOpenSwish) {
      onOpenSwish();
    } else {
      window.location.href = "/give";
    }
  };

  const handleRSVPClick = () => {
    setMobileDrawerOpen(false);
    if (onOpenRSVP) {
      onOpenRSVP();
    } else {
      window.location.href = "/events/holy-spirit-worship";
    }
  };

  const navLinks = [
    { label: t("Evenemang", "Events"), href: "/events", icon: Calendar },
    { label: t("Se & Lyssna", "Watch & Listen"), href: "/watch", icon: PlayCircle },
    { label: t("Partnerförsamlingar", "Churches"), href: "/partners", icon: Church },
    { label: t("Gåvor", "Give"), href: "/give", icon: HandHeart },
    { label: t("Volontär", "Volunteer"), href: "/volunteer", icon: Users },
    { label: t("Förbön", "Prayer"), href: "/prayer", icon: Heart },
  ];

  return (
    <>
      {/* Outer Fixed Floating Wrapper (Pointer-events pass-through) */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center pt-3 sm:pt-4 px-3 sm:px-6">
        <div ref={navRef} className="pointer-events-auto w-full max-w-7xl">
          {/* Floating Header Card Island */}
          <header
            className={`transition-all duration-300 rounded-2xl border ${
              mobileDrawerOpen
                ? "bg-white/95 dark:bg-[#0B1320]/95 border-black/10 dark:border-white/15 shadow-[0_12px_36px_-8px_rgba(10,20,35,0.22)]"
                : isScrolled
                ? "bg-[#FAF9F5]/90 dark:bg-[#0B1320]/90 backdrop-blur-xl border-black/10 dark:border-white/15 shadow-[0_4px_24px_-4px_rgba(10,20,35,0.18)]"
                : "bg-[#FAF9F5]/85 dark:bg-[#0B1320]/85 backdrop-blur-xl border-black/[0.08] dark:border-white/10 shadow-[0_1px_0_0_rgba(11,26,58,0.08),0_12px_32px_-12px_rgba(10,20,35,0.16)]"
            }`}
          >
            {/* Top Navigation Row */}
            <div className="h-[60px] sm:h-[64px] px-3 sm:px-5 flex items-center justify-between">
              {/* Brand Logo & Name */}
              <Link
                href="/"
                className="flex items-center gap-2.5 group shrink-0 select-none py-1"
                aria-label="GOSPELS Ministry"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-container/15 flex items-center justify-center p-1 group-hover:scale-105 active:scale-95 transition duration-150">
                  <Image
                    src="/assets/brand/logo-mark.svg"
                    alt="GOSPELS"
                    width={28}
                    height={28}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <span className="font-extrabold text-base sm:text-lg tracking-wider text-on-surface dark:text-white">
                  GOSPELS
                </span>
              </Link>

              {/* Desktop Centered Segmented Nav Links */}
              <nav
                aria-label="Main"
                className="hidden lg:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.04] p-1 rounded-xl border border-black/[0.04] dark:border-white/[0.06]"
              >
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-1.5 rounded-lg text-[13.5px] transition duration-150 whitespace-nowrap ${
                        isActive
                          ? "bg-white dark:bg-white/15 text-primary font-bold shadow-xs"
                          : "text-on-surface-variant hover:text-on-surface hover:bg-black/5 dark:hover:bg-white/10 font-medium"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop Actions Cluster */}
              <div className="hidden lg:flex items-center gap-2.5 shrink-0">
                {/* Language Switcher Pill (High-Contrast Segmented Control) */}
                <div
                  aria-label="Language Selector"
                  className="inline-flex items-center bg-stone-200/80 dark:bg-white/10 rounded-full p-1 border border-stone-300/80 dark:border-white/15 shadow-inner"
                  role="group"
                >
                  <Globe className="w-3.5 h-3.5 text-stone-600 dark:text-stone-300 ml-1.5 mr-1 shrink-0" aria-hidden="true" />
                  <button
                    type="button"
                    onClick={() => setLanguage("SV")}
                    title="Svenska"
                    aria-label="Byt till svenska"
                    className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-150 ${
                      language === "SV"
                        ? "bg-primary-container text-on-primary shadow-xs"
                        : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white font-medium"
                    }`}
                  >
                    SWE
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("EN")}
                    title="English"
                    aria-label="Switch to English"
                    className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-150 ${
                      language === "EN"
                        ? "bg-primary-container text-on-primary shadow-xs"
                        : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white font-medium"
                    }`}
                  >
                    ENG
                  </button>
                </div>

                {/* Secondary 'Se & Lyssna' / Watch Live outline pill */}
                <Link
                  href="/watch"
                  className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-black/10 dark:border-white/15 text-xs font-semibold text-on-surface dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition active:scale-95"
                >
                  <PlayCircle className="w-3.5 h-3.5 text-primary-container" />
                  <span>{t("Se & Lyssna", "Watch Live")}</span>
                </Link>

                {/* Primary CTA Button */}
                <button
                  type="button"
                  onClick={handleRSVPClick}
                  className="inline-flex items-center gap-1.5 bg-primary-container text-on-primary hover:bg-secondary text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-xs transition duration-150 active:scale-95"
                >
                  <span>{t("Anmäl dig gratis", "RSVP Free")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mobile Trailing Cluster (Language Toggle & Menu Trigger) */}
              <div className="flex lg:hidden items-center gap-2">
                {/* Language Switcher Pill (Compact SWE / ENG) */}
                <div
                  aria-label="Language Selector"
                  className="inline-flex items-center bg-stone-200/80 dark:bg-white/10 rounded-full p-0.5 border border-stone-300/80 dark:border-white/15"
                  role="group"
                >
                  <button
                    type="button"
                    onClick={() => setLanguage("SV")}
                    title="Svenska"
                    aria-label="Svenska"
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide transition ${
                      language === "SV"
                        ? "bg-primary-container text-on-primary shadow-xs"
                        : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white"
                    }`}
                  >
                    SWE
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("EN")}
                    title="English"
                    aria-label="English"
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide transition ${
                      language === "EN"
                        ? "bg-primary-container text-on-primary shadow-xs"
                        : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white"
                    }`}
                  >
                    ENG
                  </button>
                </div>

                {/* Mobile Hamburger / Close Button */}
                <button
                  type="button"
                  aria-label={mobileDrawerOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                  className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-on-surface dark:text-white hover:bg-black/10 dark:hover:bg-white/20 active:scale-95 transition"
                >
                  {mobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Expandable Floating Drawer Body (Morrow Church Reference Style) */}
            {mobileDrawerOpen && (
              <div className="lg:hidden border-t border-black/[0.06] dark:border-white/[0.1] px-4 pt-3 pb-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                <nav aria-label="Mobile Main" className="grid grid-cols-1 gap-1">
                  {navLinks.map((link) => {
                    const IconComp = link.icon;
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href));

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileDrawerOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition ${
                          isActive
                            ? "bg-primary-container/15 text-primary font-bold"
                            : "text-on-surface hover:bg-black/5 dark:hover:bg-white/10 font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComp className="w-4 h-4 text-primary" />
                          <span>{link.label}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                      </Link>
                    );
                  })}
                </nav>

                {/* Language Selection in Drawer */}
                <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>{t("Välj Språk", "Select Language")}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 bg-stone-200/70 dark:bg-white/10 rounded-xl p-1 border border-stone-300/80 dark:border-white/15">
                    <button
                      type="button"
                      onClick={() => setLanguage("SV")}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition text-center ${
                        language === "SV"
                          ? "bg-primary-container text-on-primary shadow-xs"
                          : "text-stone-600 dark:text-stone-300 hover:text-stone-900"
                      }`}
                    >
                      Svenska (SWE)
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("EN")}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition text-center ${
                        language === "EN"
                          ? "bg-primary-container text-on-primary shadow-xs"
                          : "text-stone-600 dark:text-stone-300 hover:text-stone-900"
                      }`}
                    >
                      English (ENG)
                    </button>
                  </div>
                </div>

                {/* Action CTAs in Mobile Drawer */}
                <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.1] grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleRSVPClick}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary hover:bg-secondary text-sm font-bold py-3 rounded-xl shadow-xs transition active:scale-95"
                  >
                    <span>{t("Anmäl dig gratis (RSVP)", "RSVP Free")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleSupportClick}
                    className="w-full inline-flex items-center justify-center gap-2 border border-black/15 dark:border-white/20 text-on-surface dark:text-white hover:bg-black/5 dark:hover:bg-white/10 text-sm font-semibold py-3 rounded-xl transition active:scale-95"
                  >
                    <HandHeart className="w-4 h-4 text-primary" />
                    <span>{t("Stöd med Swish", "Support with Swish")}</span>
                  </button>
                </div>

                {/* Quick Swish Micro-pill */}
                <div className="pt-1 flex items-center justify-between px-3 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] text-xs text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="font-mono font-semibold">Swish: 123 456 78 90</span>
                  </div>
                  <button
                    type="button"
                    onClick={copySwishNumber}
                    className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
                  >
                    {copiedSwish ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600">{t("Kopierat!", "Copied!")}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>{t("Kopiera", "Copy")}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </header>
        </div>
      </div>
    </>
  );
}

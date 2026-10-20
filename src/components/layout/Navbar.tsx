"use client";

import React, { useState } from "react";
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
  Copy,
  Check,
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
  const { language, setLanguage, t } = useLanguage();
  const [copiedSwish, setCopiedSwish] = useState(false);

  const copySwishNumber = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("1234567890");
      setCopiedSwish(true);
      setTimeout(() => setCopiedSwish(false), 2000);
    }
  };

  const closeDrawer = () => setMobileDrawerOpen(false);

  const handleSupportClick = () => {
    if (onOpenSwish) {
      onOpenSwish();
    } else {
      window.location.href = "/give";
    }
  };

  const navLinks = [
    { label: t("Evenemang", "Events"), href: "/events" },
    { label: t("Se & Lyssna", "Watch & Listen"), href: "/watch" },
    { label: t("Partnerförsamlingar", "Partner Churches"), href: "/partners" },
    { label: t("Gåvor & Stöd", "Give"), href: "/give" },
    { label: t("Bli Volontär", "Volunteer"), href: "/volunteer" },
    { label: t("Förbön", "Prayer"), href: "/prayer" },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 dark:bg-[#0f172a]/95 border-b border-gray-200/80 dark:border-gray-800 transition-colors shadow-sm w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 h-16 md:h-20 flex items-center justify-between">
          {/* Desktop Brand Logo */}
          <Link href="/" className="hidden md:flex items-center gap-3 group z-10">
            <Image
              src="/assets/brand/logo-full.svg"
              alt="GOSPELS Ministry"
              width={168}
              height={38}
              className="h-9 w-auto dark:hidden transition duration-150 group-hover:opacity-90 active:scale-95"
              priority
            />
            <Image
              src="/assets/brand/logo-white.svg"
              alt="GOSPELS Ministry"
              width={168}
              height={38}
              className="h-9 w-auto hidden dark:block transition duration-150 group-hover:opacity-90 active:scale-95"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-label-md font-label-md">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pb-1 transition duration-200 ${
                    isActive
                      ? "text-primary font-bold border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary transition-colors"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Cluster: SV/EN Switcher & Support CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div
              aria-label="Language Selector"
              className="inline-flex items-center bg-surface-container rounded-full p-1 border border-outline-variant/40"
              role="group"
            >
              <button
                type="button"
                onClick={() => setLanguage("SV")}
                className={`px-3 py-1 rounded-full text-label-sm font-label-sm transition duration-150 ${
                  language === "SV"
                    ? "bg-surface-container-lowest text-on-surface shadow-xs font-bold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                SV
              </button>
              <span className="text-outline text-label-sm mx-0.5">/</span>
              <button
                type="button"
                onClick={() => setLanguage("EN")}
                className={`px-3 py-1 rounded-full text-label-sm font-label-sm transition duration-150 ${
                  language === "EN"
                    ? "bg-surface-container-lowest text-on-surface shadow-xs font-bold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              onClick={handleSupportClick}
              className="inline-flex items-center justify-center bg-primary-container text-on-primary hover:bg-secondary font-label-md text-label-md px-5 py-2.5 rounded-lg shadow-sm custom-halo transition duration-150 active:scale-95"
            >
              {t("Stöd Oss", "Support Us")}
            </button>
          </div>

          {/* Mobile Top Header (Leading Hamburger + Center Brand Mark Logo + Trailing Lang & Ge) */}
          <div className="flex md:hidden items-center justify-between w-full">
            {/* Leading Icon / Drawer Trigger */}
            <button
              id="open-drawer-btn"
              aria-label="Open navigation menu"
              onClick={() => setMobileDrawerOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-surface-container active:scale-95 duration-150 text-on-surface"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Mobile Brand Logo with Resonance Cross Mark */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/assets/brand/logo-mark.svg"
                alt="GOSPELS"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg shadow-sm shadow-primary/20 transition duration-150 group-hover:scale-105 active:scale-95"
                priority
              />
              <span className="text-xl font-headline-md font-extrabold tracking-wider text-on-surface dark:text-inverse-on-surface">
                GOSPELS
              </span>
            </Link>

            {/* Trailing Actions: SV / EN Switcher & Ge Button */}
            <div className="flex items-center gap-2">
              <div
                aria-label="Language Selector"
                className="flex items-center bg-surface-container p-0.5 rounded-full border border-outline-variant/40"
                role="group"
              >
                <button
                  type="button"
                  onClick={() => setLanguage("SV")}
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold transition ${
                    language === "SV"
                      ? "bg-surface-container-lowest text-primary shadow-xs font-bold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  SV
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("EN")}
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold transition ${
                    language === "EN"
                      ? "bg-surface-container-lowest text-primary shadow-xs font-bold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  EN
                </button>
              </div>
              <button
                type="button"
                onClick={handleSupportClick}
                className="inline-flex items-center justify-center bg-primary-container text-on-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs hover:bg-secondary active:scale-95 transition duration-150"
              >
                {t("Ge Gåva", "Give")}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer / Menu Overlay */}
      {mobileDrawerOpen && (
        <div id="mobile-drawer" className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeDrawer}
          />

          {/* Off-canvas panel sliding from left */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-surface-container-lowest dark:bg-inverse-surface shadow-2xl p-6 flex flex-col justify-between z-10 overflow-y-auto border-r border-outline-variant/40">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <Link href="/" onClick={closeDrawer} className="flex items-center gap-2.5">
                  <Image
                    src="/assets/brand/logo-mark.svg"
                    alt="GOSPELS Ministry"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-lg shadow-sm shadow-primary/20"
                  />
                  <span className="text-headline-sm font-headline-sm font-bold text-on-surface dark:text-inverse-on-surface">
                    GOSPELS Ministry
                  </span>
                </Link>
                <button
                  aria-label="Close navigation menu"
                  onClick={closeDrawer}
                  className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Consolidated Mobile Navigation Links */}
              <nav className="flex flex-col gap-1 py-4 text-base font-semibold text-on-surface dark:text-inverse-on-surface">
                <Link
                  href="/events"
                  onClick={closeDrawer}
                  className={`px-3 py-2.5 rounded-lg flex items-center justify-between transition ${
                    pathname.startsWith("/events")
                      ? "text-primary bg-primary/10 font-bold"
                      : "hover:bg-surface-container"
                  }`}
                >
                  <span>{t("Evenemang", "Events")}</span>
                  <Calendar className="w-4 h-4 text-primary" />
                </Link>
                <Link
                  href="/watch"
                  onClick={closeDrawer}
                  className={`px-3 py-2.5 rounded-lg flex items-center justify-between transition ${
                    pathname.startsWith("/watch")
                      ? "text-primary bg-primary/10 font-bold"
                      : "hover:bg-surface-container"
                  }`}
                >
                  <span>{t("Se & Lyssna", "Watch & Listen")}</span>
                  <PlayCircle className="w-4 h-4 text-outline" />
                </Link>
                <Link
                  href="/partners"
                  onClick={closeDrawer}
                  className={`px-3 py-2.5 rounded-lg flex items-center justify-between transition ${
                    pathname.startsWith("/partners")
                      ? "text-primary bg-primary/10 font-bold"
                      : "hover:bg-surface-container"
                  }`}
                >
                  <span>{t("Partnerförsamlingar", "Partner Churches")}</span>
                  <Church className="w-4 h-4 text-outline" />
                </Link>
                <Link
                  href="/give"
                  onClick={closeDrawer}
                  className={`px-3 py-2.5 rounded-lg flex items-center justify-between transition ${
                    pathname.startsWith("/give")
                      ? "text-primary bg-primary/10 font-bold"
                      : "hover:bg-surface-container"
                  }`}
                >
                  <span>{t("Gåvor & Stöd", "Give")}</span>
                  <HandHeart className="w-4 h-4 text-outline" />
                </Link>
                <Link
                  href="/volunteer"
                  onClick={closeDrawer}
                  className={`px-3 py-2.5 rounded-lg flex items-center justify-between transition ${
                    pathname.startsWith("/volunteer") || pathname.startsWith("/get-involved/volunteer")
                      ? "text-primary bg-primary/10 font-bold"
                      : "hover:bg-surface-container"
                  }`}
                >
                  <span>{t("Bli Volontär", "Volunteer")}</span>
                  <Users className="w-4 h-4 text-outline" />
                </Link>
                <Link
                  href="/prayer"
                  onClick={closeDrawer}
                  className={`px-3 py-2.5 rounded-lg flex items-center justify-between transition ${
                    pathname.startsWith("/prayer")
                      ? "text-primary bg-primary/10 font-bold"
                      : "hover:bg-surface-container"
                  }`}
                >
                  <span>{t("Förbön", "Prayer")}</span>
                  <Heart className="w-4 h-4 text-outline" />
                </Link>
              </nav>
            </div>

            {/* Mobile Footer & Actions inside drawer */}
            <div className="pt-4 border-t border-outline-variant/30 space-y-4">
              {/* Mobile Language Switcher (SV / EN) */}
              <div className="flex items-center justify-between bg-surface-container p-2 rounded-xl">
                <span className="text-xs font-medium text-outline uppercase tracking-wider px-2">
                  Språk / Lang
                </span>
                <div
                  className="inline-flex items-center bg-surface-container-lowest rounded-lg p-0.5 border border-outline-variant/40"
                  role="group"
                >
                  <button
                    type="button"
                    onClick={() => setLanguage("SV")}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition ${
                      language === "SV"
                        ? "bg-primary-container text-on-primary shadow-xs"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    SV
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("EN")}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                      language === "EN"
                        ? "bg-primary-container text-on-primary shadow-xs"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Support Us Button */}
              <button
                type="button"
                onClick={() => {
                  closeDrawer();
                  handleSupportClick();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary hover:bg-secondary font-label-md py-3 rounded-xl shadow-md transition duration-150"
              >
                <span>Support Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Swish Quick Giving Info */}
              <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant/40 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-outline mb-1 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Swish Direktgåva</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <p className="font-mono font-bold text-sm text-on-surface tracking-wider">
                    123 456 78 90
                  </p>
                  <button
                    type="button"
                    onClick={copySwishNumber}
                    className="p-1 rounded hover:bg-surface-container text-outline hover:text-on-surface transition"
                    title="Kopiera nummer"
                  >
                    {copiedSwish ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-outline mt-0.5">
                  Märkes: GÅVA • Ideell förening
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

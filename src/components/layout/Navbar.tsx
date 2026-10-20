"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const [lang, setLang] = useState<"SV" | "EN">("SV");
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
    { label: "Events", href: "/events" },
    { label: "Watch & Listen", href: "/watch" },
    { label: "Partner Churches", href: "/partners" },
    { label: "Give", href: "/give" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Prayer", href: "/prayer" },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 dark:bg-[#0f172a]/95 border-b border-gray-200/80 dark:border-gray-800 transition-colors shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group z-10">
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
                onClick={() => setLang("SV")}
                className={`px-3 py-1 rounded-full text-label-sm font-label-sm transition duration-150 ${
                  lang === "SV"
                    ? "bg-surface-container-lowest text-on-surface shadow-xs font-bold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                SV
              </button>
              <span className="text-outline text-label-sm mx-0.5">/</span>
              <button
                type="button"
                onClick={() => setLang("EN")}
                className={`px-3 py-1 rounded-full text-label-sm font-label-sm transition duration-150 ${
                  lang === "EN"
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
              Support Us
            </button>
          </div>

          {/* Mobile Actions Button (md:hidden) */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={handleSupportClick}
              className="inline-flex items-center justify-center bg-primary-container text-on-primary text-xs font-semibold px-3 py-1.5 rounded-md shadow-xs"
            >
              Ge
            </button>
            <button
              id="mobile-menu-btn"
              aria-label="Open navigation menu"
              onClick={() => setMobileDrawerOpen(true)}
              className="p-2 rounded-lg text-on-surface hover:bg-surface-container transition"
            >
              <Menu className="w-6 h-6" />
            </button>
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

          {/* Off-canvas panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-surface-container-lowest dark:bg-inverse-surface shadow-2xl p-6 flex flex-col justify-between z-10 overflow-y-auto border-l border-outline-variant/40">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <Link href="/" onClick={closeDrawer} className="flex items-center gap-2.5">
                  <Image
                    src="/assets/brand/logo-full.svg"
                    alt="GOSPELS Ministry"
                    width={140}
                    height={32}
                    className="h-8 w-auto dark:hidden"
                  />
                  <Image
                    src="/assets/brand/logo-white.svg"
                    alt="GOSPELS Ministry"
                    width={140}
                    height={32}
                    className="h-8 w-auto hidden dark:block"
                  />
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
                  <span>Events</span>
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
                  <span>Watch &amp; Listen</span>
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
                  <span>Partner Churches</span>
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
                  <span>Give</span>
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
                  <span>Volunteer</span>
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
                  <span>Prayer</span>
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
                    onClick={() => setLang("SV")}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition ${
                      lang === "SV"
                        ? "bg-primary-container text-on-primary shadow-xs"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    SV
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("EN")}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                      lang === "EN"
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

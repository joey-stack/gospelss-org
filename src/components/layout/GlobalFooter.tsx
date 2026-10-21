"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function GlobalFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0F172A] text-white border-t border-slate-800 py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/brand/logo-white.svg"
                alt="GOSPELS"
                width={120}
                height={26}
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-xs">
              {t(
                "Skapar stunder av helig tillbedjan som förvandlar generationer. Ideell förening i Göteborg.",
                "Creating moments of sacred praise that transform generations. Non-profit association in Gothenburg."
              )}
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Org.nr: 802557-4883
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-teal-300 mb-4">
              {t("Snabbval", "Quick Links")}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/events" className="hover:text-white transition">
                  {t("Evenemang", "Events")}
                </Link>
              </li>
              <li>
                <Link href="/watch" className="hover:text-white transition">
                  {t("Se & Lyssna", "Watch & Listen")}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition">
                  {t("Partnerförsamlingar", "Partner Churches")}
                </Link>
              </li>
              <li>
                <Link href="/get-involved/volunteer" className="hover:text-white transition">
                  {t("Engagera Dig", "Get Involved")}
                </Link>
              </li>
              <li>
                <Link href="/give" className="hover:text-white transition">
                  {t("Ge en gåva", "Give")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-teal-300 mb-4">
              {t("Juridiskt", "Legal")}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/legal/privacy" className="hover:text-white transition">
                  {t("Integritetspolicy", "Privacy Policy")}
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-white transition">
                  {t("Användarvillkor", "Terms of Use")}
                </Link>
              </li>
              <li>
                <Link href="/legal/organisation" className="hover:text-white transition">
                  {t("Föreningsinformation", "Organisation Info")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-teal-300 mb-4">
              {t("Kontakt", "Contact")}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              <li>
                <span className="block text-[11px] text-slate-400 font-mono">Email:</span>
                <a href="mailto:info@gospelss.org" className="hover:text-teal-300 transition">
                  info@gospelss.org
                </a>
              </li>
              <li>
                <span className="block text-[11px] text-slate-400 font-mono">Telefon / Swish:</span>
                <span>123 456 78 90</span>
              </li>
              <li>
                <span className="block text-[11px] text-slate-400 font-mono">Adress:</span>
                <span>Göteborg, Sverige</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Gospels. {t("Alla rättigheter förbehållna.", "All rights reserved.")}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/legal/privacy" className="hover:text-slate-400">
              {t("Integritet", "Privacy")}
            </Link>
            <span>•</span>
            <Link href="/legal/terms" className="hover:text-slate-400">
              {t("Villkor", "Terms")}
            </Link>
            <span>•</span>
            <Link href="/admin" className="hover:text-slate-400">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default GlobalFooter;

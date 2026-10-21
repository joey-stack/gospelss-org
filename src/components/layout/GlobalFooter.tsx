"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>
  );
}

export function GlobalFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-grey-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Logo + Motto */}
          <div className="space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <Image
                src="/assets/brand/logo-white.svg"
                alt="GOSPELS"
                width={124}
                height={28}
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-body-sm text-grey-400 font-light leading-relaxed max-w-xs">
              {t(
                "Skapar stunder av helig tillbedjan som förvandlar generationer.",
                "Creating moments of sacred praise that transform generations."
              )}
            </p>
            <div className="text-overline text-grey-400 font-mono tracking-wider pt-2">
              Gospels · Org.nr: 802557-4883
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="overline text-white mb-4 block font-semibold tracking-[0.1em]">
              {t("Snabbval", "Quick Links")}
            </h4>
            <ul className="space-y-2.5 text-body-sm text-grey-400">
              <li>
                <Link href="/events" className="hover:text-white transition-colors duration-200">
                  {t("Evenemang", "Events")}
                </Link>
              </li>
              <li>
                <Link href="/watch" className="hover:text-white transition-colors duration-200">
                  {t("Se & Lyssna", "Watch & Listen")}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors duration-200">
                  {t("Partnerförsamlingar", "Partner Churches")}
                </Link>
              </li>
              <li>
                <Link href="/get-involved/volunteer" className="hover:text-white transition-colors duration-200">
                  {t("Engagera Dig", "Get Involved")}
                </Link>
              </li>
              <li>
                <Link href="/give" className="hover:text-white transition-colors duration-200">
                  {t("Ge en gåva", "Give")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div>
            <h4 className="overline text-white mb-4 block font-semibold tracking-[0.1em]">
              {t("Juridiskt", "Legal")}
            </h4>
            <ul className="space-y-2.5 text-body-sm text-grey-400">
              <li>
                <Link href="/legal/privacy" className="hover:text-white transition-colors duration-200">
                  {t("Integritetspolicy", "Privacy Policy")}
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-white transition-colors duration-200">
                  {t("Användarvillkor", "Terms of Use")}
                </Link>
              </li>
              <li>
                <Link href="/legal/organisation" className="hover:text-white transition-colors duration-200">
                  {t("Föreningsinformation", "Organisation Info")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info + Socials */}
          <div>
            <h4 className="overline text-white mb-4 block font-semibold tracking-[0.1em]">
              {t("Kontakt & Socialt", "Contact & Socials")}
            </h4>
            <ul className="space-y-2.5 text-body-sm text-grey-400 font-light mb-5">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="mailto:info@gospelss.org" className="hover:text-white transition-colors">
                  info@gospelss.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <span>123 456 78 90 (Swish)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Göteborg, Sverige</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-600 text-grey-400 hover:text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-600 text-grey-400 hover:text-white flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-body-sm text-grey-400">
          <div>
            © {new Date().getFullYear()} Gospels. {t("Alla rättigheter förbehållna.", "All rights reserved.")}
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">
              {t("Integritet", "Privacy")}
            </Link>
            <span>•</span>
            <Link href="/legal/terms" className="hover:text-white transition-colors">
              {t("Villkor", "Terms")}
            </Link>
            <span>•</span>
            <Link href="/admin" className="hover:text-white transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default GlobalFooter;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-on-background dark:bg-surface-container-lowest text-surface border-t border-white/10 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand & Ministry Statement (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90">
              <Image
                src="/assets/brand/logo-mark.svg"
                alt="GOSPELS Ministry"
                width={36}
                height={36}
                className="w-9 h-9 rounded-lg shadow-sm shadow-primary/20"
              />
              <span className="text-headline-md font-headline-md font-extrabold text-white tracking-wider">
                GOSPELS
              </span>
            </Link>
            <p className="font-body-sm text-body-sm text-surface-dim max-w-sm leading-relaxed">
              GOSPELS är en ideell musik- och lovsångsorganisation baserad i Göteborg (Org.nr: 802557-4883).
              Vi verkar ekumeniskt för att göra evangeliet tillgängligt och levande genom musik, öppen gemenskap
              och bön i stadens offentliga rum.
            </p>
            <div className="pt-2">
              <span className="text-label-sm font-label-sm text-primary-container font-semibold uppercase tracking-wider block mb-1">
                Gåvokonto &amp; Swish
              </span>
              <span className="font-mono text-body-md text-surface font-semibold">
                Swish: 123 456 7890 • BG: 512-3456
              </span>
            </div>
          </div>

          {/* Footer Links Col 1 (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-headline-sm text-headline-sm text-surface font-semibold">
              Organisation
            </h4>
            <ul className="space-y-2 text-body-sm font-body-sm">
              <li>
                <Link href="/om-oss" className="text-surface-dim hover:text-primary-container transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-surface-dim hover:text-primary-container transition-colors">
                  Evenemang
                </Link>
              </li>
              <li>
                <Link href="/watch" className="text-surface-dim hover:text-primary-container transition-colors">
                  Se &amp; Lyssna
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-surface-dim hover:text-primary-container transition-colors">
                  Bli Partner
                </Link>
              </li>
              <li>
                <Link href="/integritetspolicy" className="text-surface-dim hover:text-primary-container transition-colors">
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Links Col 2 (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-headline-sm text-headline-sm text-surface font-semibold">
              Engagera dig
            </h4>
            <ul className="space-y-2 text-body-sm font-body-sm">
              <li>
                <Link href="/give" className="text-surface-dim hover:text-primary-container transition-colors">
                  Swish &amp; Ge
                </Link>
              </li>
              <li>
                <Link href="/prayer" className="text-surface-dim hover:text-primary-container transition-colors">
                  Böneförfrågan
                </Link>
              </li>
              <li>
                <Link href="/get-involved/youth" className="text-surface-dim hover:text-primary-container transition-colors">
                  Ungdomsnätverk
                </Link>
              </li>
              <li>
                <Link href="/anvandarvillkor" className="text-surface-dim hover:text-primary-container transition-colors">
                  Användarvillkor
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-surface-dim hover:text-primary-container transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-headline-sm text-headline-sm text-surface font-semibold">
              Kontakt &amp; Mötesplatser
            </h4>
            <p className="font-body-sm text-body-sm text-surface-dim leading-relaxed">
              GOSPELS Musikförening<br />
              Postgatan 14, 411 13 Göteborg<br />
              Västra Götalands län, Sverige
            </p>
            <p className="font-body-sm text-body-sm text-surface-dim pt-1">
              E-post:{" "}
              <a href="mailto:kontakt@gospelss.org" className="text-primary-container hover:underline">
                kontakt@gospelss.org
              </a>
              <br />
              Telefon: +46 (0)31 789 20 00
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-primary-container hover:text-on-primary text-surface flex items-center justify-center transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-primary-container hover:text-on-primary text-surface flex items-center justify-center transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Spotify"
                className="w-9 h-9 rounded-full bg-surface-container-lowest/10 hover:bg-primary-container hover:text-on-primary text-surface flex items-center justify-center transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.518 17.307c-.22.355-.683.468-1.037.248-2.846-1.738-6.428-2.13-10.648-1.166-.403.092-.806-.16-.898-.563-.092-.403.16-.806.563-.898 4.622-1.056 8.583-.615 11.772 1.342.354.22.467.683.248 1.037zm1.472-3.272c-.276.448-.865.59-1.313.314-3.258-2.003-8.225-2.584-12.078-1.414-.503.153-1.033-.134-1.186-.637-.153-.503.134-1.033.637-1.186 4.407-1.338 9.885-.694 13.626 1.61.448.276.59.865.314 1.313zm.127-3.41c-3.906-2.32-10.354-2.533-14.086-1.399-.598.182-1.23-.162-1.412-.76-.182-.598.162-1.23.76-1.412 4.29-1.302 11.399-1.053 15.894 1.614.538.319.715 1.018.396 1.556-.319.539-1.018.716-1.552.401z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footnote Row with Scripture Citation & Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-surface-dim font-body-sm text-body-sm text-center sm:text-left">
          <p className="font-scripture-citation text-scripture-citation text-primary-container/80 tracking-normal">
            “Gör alla folk till lärjungar” — Matt 28:19 • Tillsammans för Göteborg
          </p>
          <p className="text-center sm:text-right text-xs sm:text-body-sm">
            © 2026 GOSPELS Music Ministry. Ideell förening i Göteborg (Org.nr: 802557-4883). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

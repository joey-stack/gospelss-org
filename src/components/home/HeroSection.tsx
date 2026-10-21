"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Church, Calendar, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onOpenRSVP: () => void;
  onOpenSwish: () => void;
  onOpenPrayer?: () => void;
}

export function HeroSection({ onOpenRSVP, onOpenSwish, onOpenPrayer }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0E1113] text-stone-100 overflow-hidden min-h-screen min-h-[100dvh] flex items-center justify-center">
      {/* Cinematic Full-Bleed Atmospheric Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsmAGYb6RK-ffekW0k1ug8sZl-dZP_PUsGhKVnebisdEiUNGWRhT1zZrF0Ya4MQM0mMCKtA9Nanp_ziaQD8NyRcd4fWMM7IvWu3_5KMD79lSKCbtEtg8a0JoVsrud5t0AUG6sRezGiXfcWzFJOZJbaoePdRI8oE_RyOX16UHinSXgCWW0_uVL8xPNGcpD-wDTPOycpoyfCdfCVFa_9Aosbtr9vr-25sEWg2YZ5idLWVKmfvDaarfNTvQ"
          alt="Outdoor gospel worship concert in Gothenburg Sweden at twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125 scale-105 transition-transform duration-1000"
        />
        {/* Soft Organic Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1113]/80 via-[#0E1113]/40 to-[#0E1113]"></div>
        <div className="absolute inset-0 bg-radial-gradient from-teal-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Main Sanctuary Stage Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col items-center">
        {/* Quiet, Minimal Event Anchor Pill */}
        <Link
          href="/events/holy-spirit-worship"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md mb-8 transition duration-200 group"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-xs font-mono font-medium tracking-wider text-teal-200 uppercase">
            {t("Nästa Samling: Holy Spirit Worship • 18 Okt 2026", "Next Gathering: Holy Spirit Worship • Oct 18, 2026")}
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {/* Monumental Headline: Sans + Poetic Serif Accent */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
          {t("För Lovsång till ", "Bring Worship to the ")}
          <span className="text-teal-400 font-extrabold">
            {t("Gatorna", "Streets")}
          </span>
          <span className="block font-serif font-normal italic text-stone-200 text-3xl sm:text-5xl md:text-6xl mt-2 sm:mt-3">
            {t("i Göteborg & Västsverige", "of Gothenburg & West Sweden")}
          </span>
        </h1>

        {/* Calm, Reverent Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-2xl leading-relaxed">
          {t(
            "Skapar stunder av helig tillbedjan som förvandlar generationer. Vi förenar lokala församlingar i öppen utomhuslovsång, andlig förnyelse och varm gemenskap i stadens offentliga rum.",
            "Creating moments of sacred praise that transform generations. Uniting local congregations in open-air worship, spiritual renewal, and compassionate presence across our city's public squares."
          )}
        </p>

        {/* Minimal Action Cluster (High Touch, No Clutter) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-teal-600 hover:bg-teal-500 text-white font-medium px-8 py-3.5 rounded-full transition duration-150 shadow-md active:scale-95 text-center text-sm sm:text-base"
          >
            <span>{t("Utforska Samlingar", "Explore Gatherings")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/partners"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-stone-200 border border-white/20 font-medium px-8 py-3.5 rounded-full backdrop-blur-md transition duration-150 active:scale-95 text-center text-sm sm:text-base"
          >
            <Church className="w-4 h-4 text-stone-300" />
            <span>{t("Partnerförsamlingar", "Partner Churches")}</span>
          </Link>
        </div>

        {/* Quiet Minimal Metrics Baseline (No Boxed Clutter) */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 w-full max-w-2xl flex flex-wrap items-center justify-around gap-6 text-stone-400 text-xs sm:text-sm font-medium">
          <div className="text-center">
            <span className="block text-xl sm:text-2xl font-bold text-white font-sans">42+</span>
            <span className="text-stone-400 text-xs">{t("Samverkande Församlingar", "Partner Churches")}</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <span className="block text-xl sm:text-2xl font-bold text-teal-400 font-sans">15 000</span>
            <span className="text-stone-400 text-xs">{t("Årliga Deltagare", "Annual Worshipers")}</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <span className="block text-xl sm:text-2xl font-bold text-white font-sans">100%</span>
            <span className="text-stone-400 text-xs">{t("Gratis & Ideellt", "Free & Non-Profit")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

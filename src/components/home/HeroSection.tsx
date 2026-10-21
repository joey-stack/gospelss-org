"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Church } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onOpenRSVP: () => void;
  onOpenSwish: () => void;
  onOpenPrayer?: () => void;
}

export function HeroSection({ onOpenRSVP, onOpenSwish, onOpenPrayer }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0E1113] text-stone-100 overflow-hidden min-h-[75vh] md:min-h-[82vh] flex items-center justify-center">
      {/* Cinematic Full-Bleed Atmospheric Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsmAGYb6RK-ffekW0k1ug8sZl-dZP_PUsGhKVnebisdEiUNGWRhT1zZrF0Ya4MQM0mMCKtA9Nanp_ziaQD8NyRcd4fWMM7IvWu3_5KMD79lSKCbtEtg8a0JoVsrud5t0AUG6sRezGiXfcWzFJOZJbaoePdRI8oE_RyOX16UHinSXgCWW0_uVL8xPNGcpD-wDTPOycpoyfCdfCVFa_9Aosbtr9vr-25sEWg2YZ5idLWVKmfvDaarfNTvQ"
          alt="Outdoor gospel worship concert in Gothenburg Sweden at twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125 scale-102 transition-transform duration-1000"
        />
        {/* Soft Organic Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1113]/85 via-[#0E1113]/50 to-[#0E1113]"></div>
        <div className="absolute inset-0 bg-radial-gradient from-teal-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Main Sanctuary Stage Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-14 sm:pt-28 sm:pb-18 flex flex-col items-center">
        {/* Quiet, Minimal Event Anchor Pill */}
        <Link
          href="/events/holy-spirit-worship"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md mb-6 transition duration-150 group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-[11px] font-mono font-medium tracking-wider text-teal-200 uppercase">
            {t("Nästa Samling: Holy Spirit Worship • 18 Okt 2026", "Next Gathering: Holy Spirit Worship • Oct 18, 2026")}
          </span>
          <ArrowRight className="w-3 h-3 text-stone-300 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {/* Monumental Headline: Balanced Proportion (Not Zoomed In) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12] max-w-3xl">
          {t("För Lovsång till ", "Bring Worship to the ")}
          <span className="text-teal-400 font-extrabold">
            {t("Gatorna", "Streets")}
          </span>
          <span className="block font-serif font-normal italic text-stone-200 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] mt-1.5 sm:mt-2">
            {t("i Göteborg & Västsverige", "of Gothenburg & West Sweden")}
          </span>
        </h1>

        {/* Calm, Reverent Subtitle */}
        <p className="mt-5 text-sm sm:text-base text-stone-300 font-light max-w-xl leading-relaxed">
          {t(
            "Skapar stunder av helig tillbedjan som förvandlar generationer. Vi förenar lokala församlingar i öppen utomhuslovsång, andlig förnyelse och varm gemenskap i stadens offentliga rum.",
            "Creating moments of sacred praise that transform generations. Uniting local congregations in open-air worship, spiritual renewal, and compassionate presence across our city's public squares."
          )}
        </p>

        {/* Minimal Action Cluster (Proportional Scale) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-2.5 rounded-full transition duration-150 shadow-sm active:scale-95 text-center text-sm"
          >
            <span>{t("Utforska Samlingar", "Explore Gatherings")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/partners"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-stone-200 border border-white/20 font-medium px-6 py-2.5 rounded-full backdrop-blur-md transition duration-150 active:scale-95 text-center text-sm"
          >
            <Church className="w-4 h-4 text-stone-300" />
            <span>{t("Partnerförsamlingar", "Partner Churches")}</span>
          </Link>
        </div>

        {/* Quiet Minimal Metrics Baseline */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-white/10 w-full max-w-lg flex items-center justify-around text-stone-400 text-xs font-medium">
          <div className="text-center">
            <span className="block text-lg sm:text-xl font-bold text-white font-sans">42+</span>
            <span className="text-stone-400 text-[11px]">{t("Församlingar", "Churches")}</span>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="text-center">
            <span className="block text-lg sm:text-xl font-bold text-teal-400 font-sans">15 000</span>
            <span className="text-stone-400 text-[11px]">{t("Årliga Deltagare", "Attendees")}</span>
          </div>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="text-center">
            <span className="block text-lg sm:text-xl font-bold text-white font-sans">100%</span>
            <span className="text-stone-400 text-[11px]">{t("Gratis & Ideellt", "Free & Non-Profit")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

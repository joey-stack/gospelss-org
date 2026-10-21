"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden bg-slate-900 text-white">
      {/* Background Cinematic Image with Deep Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1800&auto=format&fit=crop&q=80"
          alt="GOSPELS Worship Gathering in Gothenburg"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Layered cinematic vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/65 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-transparent to-slate-900/70" />
      </div>

      {/* Hero Content (The "Five-Second Test") */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pb-36 flex flex-col items-center">
        {/* Date & City Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-body-sm font-medium mb-6 transition-all hover:bg-white/15">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
          <MapPin className="w-3.5 h-3.5 text-brand-500" />
          <span>Göteborg, Sweden</span>
          <span className="text-white/40">•</span>
          <Calendar className="w-3.5 h-3.5 text-brand-500" />
          <span>{t("18 Maj 2026", "May 18, 2026")}</span>
        </div>

        {/* Bold H1 Headline */}
        <h1 className="display text-white max-w-3xl font-bold tracking-tight mb-6 drop-shadow-sm">
          {t(
            "Bring Worship to the Streets of Gothenburg",
            "Bring Worship to the Streets of Gothenburg"
          )}
        </h1>

        {/* Editorial Subtitle */}
        <p className="body-lg text-grey-200 max-w-2xl mb-10 font-normal leading-relaxed">
          {t(
            "Gospelkonserter och lovsångssamlingar som förmedlar hopp, tro och förvandling.",
            "Gospel concerts and worship gatherings that bring hope, faith, and transformation."
          )}
        </p>

        {/* Single Prominent Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            href="/events/holy-spirit-worship"
            variant="primary"
            size="lg"
            className="shadow-xl text-base px-8 py-4 font-semibold tracking-wide hover:shadow-brand-500/25 transition-colors duration-200"
            icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            iconPosition="right"
          >
            {t("Next Event", "Next Event")}
          </Button>

          <Link
            href="/about/story"
            className="text-body-sm text-grey-300 hover:text-white transition-colors underline-offset-4 hover:underline py-2 px-3"
          >
            {t("Läs vår vision", "Explore our story")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

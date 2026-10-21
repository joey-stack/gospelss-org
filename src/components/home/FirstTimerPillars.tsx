"use client";

import React from "react";
import { Coffee, Clock, Sparkles, Smile, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export function FirstTimerPillars() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Coffee,
      title: t("Kaffe i foajén", "Coffee in the foyer"),
      desc: t(
        "Färskt kaffe från lokalt rosteri, serverat av volontärer. Gratis före och efter alla våra samlingar.",
        "Fresh coffee poured by welcoming volunteers. Always free before and after every gathering."
      ),
    },
    {
      icon: Clock,
      title: t("Sjuttiofem minuter", "Seventy-five minutes"),
      desc: t(
        "Lovsång, bibelläsning, ett kort budskap och gemensam bön. Vi slutar alltid på utsatt tid.",
        "Worship, Scripture, a concise message, and closing prayer. We always conclude on time."
      ),
    },
    {
      icon: Sparkles,
      title: t("Barn & Unga i trygghet", "Safe space for kids"),
      desc: t(
        "Engagerade ledare med utdrag ur belastningsregistret. Skapande verkstad, sång och lek.",
        "Dedicated background-checked team. Creative activities, worship, and room to play."
      ),
    },
    {
      icon: Smile,
      title: t("Kom precis som du är", "Come as you are"),
      desc: t(
        "Jeans eller finkläder – allt passar lika bra. Sitt var du vill, ingen ber dig ställa dig upp och hälsa.",
        "Jeans or Sunday best, both fit right in. Sit anywhere, slip out anytime — no spotlight on you."
      ),
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#F5F4EE] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-800">
              {t("DITT FÖRSTA BESÖK", "YOUR FIRST VISIT")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 mt-2">
              {t("Fyra saker värda att veta innan du kommer", "Four things worth knowing before you arrive")}
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal-800 hover:text-teal-900 uppercase tracking-wider group"
          >
            <span>{t("Se alla samlingar", "View all gatherings")}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4-Column Reassurance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F5] p-6 rounded-2xl border border-stone-200/90 flex flex-col justify-between hover:border-stone-300 transition duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-4">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200/60 font-mono text-[10px] text-stone-600 font-semibold uppercase tracking-wider">
                  0{idx + 1} · {t("GÄSTFRIHET", "HOSPITALITY")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

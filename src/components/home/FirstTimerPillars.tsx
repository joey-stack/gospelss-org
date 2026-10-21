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
    <section className="py-16 sm:py-20 bg-[var(--grey-100)] border-b border-[var(--grey-200)]">
      <div className="max-w-[var(--container)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="overline block mb-2">
              {t("01 / Ditt första besök", "01 / Your first visit")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[var(--grey-900)] font-[family-name:var(--font-heading)]">
              {t("Fyra saker värda att veta innan du kommer", "Four things worth knowing before you arrive")}
            </h2>
          </div>
          <Link
            href="/events"
            className="btn btn-secondary text-xs"
          >
            <span>{t("Se alla samlingar", "View all gatherings")}</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        {/* 4-Column Reassurance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-[var(--radius-lg)] border border-[var(--grey-200)] shadow-[var(--shadow-sm)] flex flex-col justify-between hover:shadow-[var(--shadow-md)] transition duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-[10px] bg-[var(--turquoise-50)] border border-[var(--turquoise-200)] flex items-center justify-center text-[var(--turquoise-700)] mb-4">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--grey-900)] mb-2 leading-snug font-[family-name:var(--font-heading)]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--grey-600)] font-light leading-relaxed font-[family-name:var(--font-body)]">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--grey-100)] text-[10px] text-[var(--grey-500)] font-semibold uppercase tracking-[0.12em] font-[family-name:var(--font-heading)]">
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

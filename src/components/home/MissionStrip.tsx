"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { Music, Globe, Sparkles } from "lucide-react";

export function MissionStrip() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Music,
      title: "Worship",
      headline: t(
        "Worship — Encounters that renew hearts and restore faith.",
        "Worship — Encounters that renew hearts and restore faith."
      ),
      description: t(
        "Vi samlar församlingar och troende över alla samfundsgränser i innerlig, Kristuscentrerad tillbedjan som lyfter Jesus högt i Göteborg.",
        "Uniting churches and believers across denominational lines in authentic, Christ-centered worship that lifts Jesus high over our city."
      ),
    },
    {
      icon: Globe,
      title: "Outreach",
      headline: t(
        "Outreach — Taking God's love beyond church walls.",
        "Outreach — Taking God's love beyond church walls."
      ),
      description: t(
        "Vi tar lovsången ut ur kyrksalarna till torg, parker och offentliga rum så att varje invånare får uppleva evangeliets godhet och frid.",
        "Taking praise beyond four walls onto public squares, arenas, and streets so every resident experiences the peace and truth of the Gospel."
      ),
    },
    {
      icon: Sparkles,
      title: "Transformation",
      headline: t(
        "Transformation — Lives changed by the power of worship.",
        "Transformation — Lives changed by the power of worship."
      ),
      description: t(
        "Genom bön, betjäning och generös kärlek ser vi generationer helas och Västsverige förvandlas i grunden av Guds rikes närvaro.",
        "Through prayer, selfless service, and compassion, we witness generations healed and Western Sweden fundamentally renewed."
      ),
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-slate-900 border-b border-slate-800 text-white">
      <Container>
        <SectionHeader
          overline={t("VÅR VISION", "OUR CORE FOUNDATION")}
          title={t(
            "Enhet i lovsång. Frimodighet i uppdrag.",
            "Unity in worship. Boldness in mission."
          )}
          subtitle={t(
            "GOSPELS är en registrerad ideell förening (802557-4883) som verkar för att förena Kristi kropp och sprida ljus i Göteborg.",
            "GOSPELS is a registered non-profit ministry dedicated to uniting the Body of Christ and shining light in Gothenburg."
          )}
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/60 shadow-xl hover:shadow-2xl hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400 font-inter mb-2">
                  {pillar.title}
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-hanken text-white mb-3 leading-snug">
                  {pillar.headline}
                </h3>
                <p className="text-sm md:text-base text-grey-300 font-inter leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default MissionStrip;

"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SocialProof() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t(
        "Att se unga och äldre från olika kyrkofamiljer samlas i samma sal med en enda längtan — att upphöja Jesus — gav mig nytt hopp för Göteborg.",
        "Seeing youth and elders from different denominations gather under one roof with one single longing — to lift Jesus high — brought fresh hope to our city."
      ),
      author: "Stefan Claar",
      role: t("Pastor, Smyrna Göteborg", "Pastor, Smyrna Church Gothenburg"),
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    },
    {
      quote: t(
        "Det var en helig atmosfär utan prestige. Inga stjärnor på scenen, bara en ödmjuk tillbedjan som berörde hjärtat på djupet.",
        "A sacred atmosphere free from ego or performance. No celebrities on stage, just authentic, humble worship that resonated deeply in my soul."
      ),
      author: "Elin Lindqvist",
      role: t("Lovsångsledare & Musiklärare", "Worship Leader & Musician"),
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    },
    {
      quote: t(
        "Detta är inte bara en konsert, det är ett andligt hem för oss som vill se Guds kärlek bli synlig i Västsveriges gator och torg.",
        "This is not merely a concert; it is a kingdom home for everyone who desires to see God's love manifest across the public squares of Western Sweden."
      ),
      author: "Marcus Berglund",
      role: t("Ungdomsledare, Göteborg", "Youth Director, Gothenburg"),
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-slate-900 border-b border-slate-800 text-white">
      <Container>
        <SectionHeader
          overline={t("RÖSTER FRÅN GEMENSKAPEN", "COMMUNITY TESTIMONIES")}
          title={t("Berättelser som Förvandlar", "Stories That Transform")}
          subtitle={t(
            "Vad händer när Kristi kropp i Västsverige står tillsammans i enhet, bön och tillbedjan?",
            "What happens when the body of Christ across Western Sweden stands together in sacred unity?"
          )}
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/60 shadow-xl hover:shadow-2xl hover:border-slate-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="mb-8">
                <Quote className="w-8 h-8 text-brand-400 mb-4 opacity-75" />
                <p className="text-base text-grey-200 font-inter italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-6 border-t border-slate-700/50">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-500/30 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold font-hanken text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-grey-400 font-inter">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SocialProof;

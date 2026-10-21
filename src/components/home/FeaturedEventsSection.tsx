"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EventCard } from "@/components/ui/EventCard";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function FeaturedEventsSection() {
  const { t } = useLanguage();

  const events = [
    {
      title: "Holy Spirit Worship 2026",
      dateBadge: "15 MAJ 2026",
      venue: "Smyrna Kyrkan, Frihamnen, Göteborg",
      description: t(
        "En kväll med oavbruten lovsång, förkunnelse och förbön tillsammans med församlingar från hela Göteborgsregionen. Fri entré för alla.",
        "An unhurried evening of worship, prayer, and ministry uniting believers across Greater Gothenburg. Free admission."
      ),
      imageSrc:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&auto=format&fit=crop&q=80",
      href: "/events/holy-spirit-worship",
      ctaText: t("RSVP Gratis", "RSVP for Free"),
    },
    {
      title: "Göteborgs Lovsångskonsert 2027",
      dateBadge: "12 JUNI 2027",
      venue: "Slottsskogen / Utomhusscenen, Göteborg",
      description: t(
        "Vår årliga sommarkonsert under öppen himmel. Hundratals sångare och musiker lyfter Jesus mitt i Göteborgs hjärta.",
        "Our grand open-air summer celebration with united choir and brass in the heart of Gothenburg. Free entry."
      ),
      imageSrc:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1000&auto=format&fit=crop&q=80",
      href: "/events/goteborgs-lovsangskonsert",
      ctaText: t("Förhandsboka", "Pre-register"),
    },
    {
      title: "Ungdomarnas Lovsångsnatt",
      dateBadge: "04 OKT 2026",
      venue: "Betlehemskyrkan, Vasastan, Göteborg",
      description: t(
        "En helkväll för unga vuxna och tonåringar med fokus på efterföljelse, biblisk undervisning och kraftfull tillbedjan.",
        "An all-evening gathering for teenagers and young adults emphasizing discipleship, truth, and passionate praise."
      ),
      imageSrc:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&auto=format&fit=crop&q=80",
      href: "/events/holy-spirit-worship",
      ctaText: t("RSVP Gratis", "RSVP for Free"),
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-slate-900 border-b border-slate-800 text-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            overline={t("SAMMANKOMSTER", "UPCOMING GATHERINGS")}
            title={t(
              "Kommande Samlingar i Göteborg",
              "Upcoming Events in Gothenburg"
            )}
            subtitle={t(
              "Alla våra samlingar och konserter är 100% kostnadsfria. Säkra din plats så att vi kan planera mottagandet.",
              "All our concerts and gatherings are 100% free of charge. RSVP to guarantee your seat."
            )}
            theme="dark"
            className="mb-0 md:mb-0"
          />

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-base font-semibold text-brand-400 hover:text-brand-300 transition-colors self-start md:self-end group"
          >
            <span>{t("Visa alla samlingar", "Explore all events")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Column Event Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <EventCard
              key={idx}
              title={event.title}
              dateBadge={event.dateBadge}
              venue={event.venue}
              description={event.description}
              imageSrc={event.imageSrc}
              href={event.href}
              ctaText={event.ctaText}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedEventsSection;

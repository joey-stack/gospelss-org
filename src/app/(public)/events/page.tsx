"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { EventCard } from "@/components/ui/EventCard";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, Sparkles } from "lucide-react";

type EventCategory = "all" | "indoor" | "outdoor" | "past";

interface EventItem {
  id: string;
  title: string;
  dateBadge: string;
  venue: string;
  description: string;
  imageSrc: string;
  category: "indoor" | "outdoor" | "past";
  href: string;
  ctaText: string;
}

export default function EventsPage() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<EventCategory>("all");

  const events: EventItem[] = [
    {
      id: "holy-spirit-worship",
      title: "Holy Spirit Worship Night · Smyrna",
      dateBadge: "18 MAJ 2026",
      venue: "Smyrna Kyrkan, Frihamnen, Göteborg",
      description: t(
        "En helig kväll av oavbruten lovsång och bön tillsammans med församlingar från hela Göteborgsregionen. Fri entré.",
        "An evening of uninterrupted worship and prayer uniting believers across Greater Gothenburg. Free admission."
      ),
      imageSrc:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&auto=format&fit=crop&q=80",
      category: "indoor",
      href: "/events/holy-spirit-worship",
      ctaText: t("RSVP Gratis", "RSVP for Free"),
    },
    {
      id: "goteborgs-lovsangskonsert",
      title: "Göteborgs Lovsångskonsert 2027",
      dateBadge: "12 JUNI 2027",
      venue: "Slottsskogen / Utomhusscenen, Göteborg",
      description: t(
        "Vår årliga sommarkonsert under bar himmel. Hundratals körsångare, blåsare och musiker upphöjer Jesus mitt i staden.",
        "Our grand annual open-air summer worship celebration with mass choir, brass, and live orchestra in the heart of Gothenburg."
      ),
      imageSrc:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1000&auto=format&fit=crop&q=80",
      category: "outdoor",
      href: "/events/goteborgs-lovsangskonsert",
      ctaText: t("Förhandsboka", "Pre-register"),
    },
    {
      id: "youth-worship-night",
      title: "Ungdomarnas Lovsångsnatt (Youth Awake)",
      dateBadge: "04 OKT 2026",
      venue: "Betlehemskyrkan, Vasastan, Göteborg",
      description: t(
        "En helkväll för unga vuxna och tonåringar med fokus på efterföljelse, biblisk undervisning och kraftfull tillbedjan.",
        "An all-evening gathering for teenagers and young adults emphasizing discipleship, Biblical truth, and passionate praise."
      ),
      imageSrc:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&auto=format&fit=crop&q=80",
      category: "indoor",
      href: "/events/holy-spirit-worship",
      ctaText: t("RSVP Gratis", "RSVP for Free"),
    },
    {
      id: "past-gospels-2025",
      title: "GOSPELS Gothenburg Inaugural Rally (2025)",
      dateBadge: "15 NOV 2025",
      venue: "Scandinavium Foajé & Sal, Göteborg",
      description: t(
        "Den historiska startkvällen där 800+ troende från 14 samfund samlades för gemensam bön över Göteborgs andliga framtid.",
        "The historic launch gathering where 800+ believers across 14 church communities united in prayer over Gothenburg."
      ),
      imageSrc:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1000&auto=format&fit=crop&q=80",
      category: "past",
      href: "/watch",
      ctaText: t("Se Inspelning", "Watch Replay"),
    },
  ];

  const filteredEvents = events.filter((ev) => {
    if (selectedFilter === "all") return ev.category !== "past";
    return ev.category === selectedFilter;
  });

  const filterTabs: { key: EventCategory; label: string }[] = [
    { key: "all", label: t("Alla Kommande", "All Upcoming") },
    { key: "indoor", label: t("Inomhus / Kyrkor", "Indoor") },
    { key: "outdoor", label: t("Utomhus / Parker", "Outdoor") },
    { key: "past", label: t("Tidigare Samlingar", "Past Events") },
  ];

  return (
    <div className="w-full py-16 lg:py-24 bg-white min-h-[80vh]">
      <Container>
        {/* Minimalist Hero */}
        <div className="max-w-3xl mb-12">
          <Badge variant="brand" shape="md" className="mb-3">
            {t("KALENDARIUM & BILJETTER", "CALENDAR & PASSES")}
          </Badge>
          <h1 className="h1 text-grey-900 mb-4 tracking-tight">
            {t("Kommande Samlingar", "Upcoming Events")}
          </h1>
          <p className="body-lg text-grey-600 font-normal leading-relaxed">
            {t(
              "Alla våra samlingar och konserter är 100% kostnadsfria. Säkra din plats genom en snabb RSVP så att vi kan planera mottagandet.",
              "All our concerts and gatherings are 100% free of charge. Secure your reservation so our hospitality teams can welcome you."
            )}
          </p>
        </div>

        {/* Filter Bar with Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-grey-200">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSelectedFilter(tab.key)}
                className={`px-5 py-2.5 rounded-full text-body-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-brand-600 text-white shadow-md shadow-brand-500/20 scale-[1.02]"
                    : "bg-grey-100 text-grey-600 hover:text-grey-900 hover:bg-grey-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
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

        {filteredEvents.length === 0 && (
          <div className="text-center py-20 bg-grey-50 rounded-md border border-grey-200">
            <Calendar className="w-10 h-10 text-grey-400 mx-auto mb-3" />
            <h3 className="h4 text-grey-900 mb-1">
              {t("Inga samlingar i denna kategori", "No events found in this category")}
            </h3>
            <p className="body-sm text-grey-600">
              {t("Välj en annan kategori ovan.", "Please select another filter above.")}
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}

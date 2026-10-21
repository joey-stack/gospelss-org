"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  MapPin,
  Users,
  PlayCircle,
  Sparkles,
  ArrowRight,
  Headphones,
  Music,
  Video,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PastEventsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const archiveCards = [
    {
      id: "gothenburg-praise-night-2025",
      category: "highlights",
      dateBadge: "DEC 2025",
      attendees: t("520 Deltagare", "520 Attendees"),
      subBadge: t("Liveinspelning • 40-mannakör", "Watch Recording • 40-Voice Choir"),
      title: t("Gothenburg Praise Night 2025", "Gothenburg Praise Night 2025"),
      venue: "Frihamnen Sanctuary Hall",
      quote: t(
        "»Enheten i rummet var påtaglig när klassisk svensk psalmtradition mötte modern gospelharmoni över sex samfund.«",
        "“The unity in the room was palpable as Swedish hymnody met modern gospel harmony across six churches.”"
      ),
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
      actionText: t("Se Inspelning", "Watch in Media Hub"),
      actionLink: "/watch",
    },
    {
      id: "skargardslovsang-2025",
      category: "archipelago",
      dateBadge: "JUL 2025",
      attendees: t("380 Deltagare", "380 Attendees"),
      subBadge: t("Akustiskt bryggset • Styrsö", "Acoustic Pier Set • Styrsö"),
      title: t("Skärgårdsvsång på Styrsö", "Archipelago Praise 2025"),
      venue: "Styrsö Bratten Brygga, Göteborg",
      quote: t(
        "»Att tillbe vid det öppna havet när skärgårdsbåten lade till blev ett starkt vittnesbörd för alla resenärer.«",
        "“Worshipping by the open sea as the island ferry arrived was a profound testimony to vacationers.”"
      ),
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
      actionText: t("Lyssna på Ljudspår", "Listen to Stream"),
      actionLink: "/watch",
    },
    {
      id: "youth-revival-night-2024",
      category: "youth",
      dateBadge: "NOV 2024",
      attendees: t("410 Unga & Studenter", "410 Students"),
      subBadge: t("Ungdomskväll • 8 Skolgrupper", "Youth Night • 8 Campus Groups"),
      title: t("Youth Revival Night i Vasastaden", "Youth Revival Night"),
      venue: "Betlehemskyrkan, Vasastaden",
      quote: t(
        "»Över fyra hundra gymnasieelever och studenter stod enade i bön för sina skolor och klasskamrater.«",
        "“Over four hundred high school and university students stood united in deep worship and prayers for their campuses.”"
      ),
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80",
      actionText: t("Se Höjdpunkter", "Watch Highlights"),
      actionLink: "/watch",
    },
    {
      id: "nordic-midsummer-praise-2024",
      category: "highlights",
      dateBadge: "JUN 2024",
      attendees: t("850 Besökare", "850 Attendees"),
      subBadge: t("Friluftskonsert i Slottsskogen", "Open Air Praise • Slottsskogen"),
      title: t("Nordisk Midsommardagskonsert", "Nordic Midsummer Praise"),
      venue: "Slottsskogen, Göteborg",
      quote: t(
        "»En familjefest där picknickfiltar fyllde gräsmattan och lovsången ekade mellan björkarna i sommarkvällen.«",
        "“A family gathering where picnic blankets covered the lawn and songs of praise echoed through the summer trees.”"
      ),
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80",
      actionText: t("Se Fotogalleri", "View Photos & Media"),
      actionLink: "/watch",
    },
  ];

  const filteredCards =
    activeCategory === "all"
      ? archiveCards
      : archiveCards.filter((c) => c.category === activeCategory);

  return (
    <div className="w-full bg-white">
      {/* 1. Hero: Past Events Archive */}
      <section className="py-20 lg:py-28 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="brand" shape="md" className="mb-4">
              {t("ARKIV & DOKUMENTATION", "ARCHIVE & DOCUMENTATION")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-6 tracking-tight">
              {t("Tidigare Samlingar & Konserter", "Past Gatherings & Archive")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed mb-6">
              {t(
                "Återupplev stunder av gemensam lovsång, bön och enhet som format Göteborg under de senaste åren. Alla ljudupptagningar och videor finns tillgängliga utan kostnad.",
                "Relive moments of unified praise, prayer, and church unity that have transformed Gothenburg. All master audio tracks and video broadcasts are accessible freely."
              )}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="brand" size="md">
                <Link href="/events">
                  {t("Se Kommande Evenemang", "Upcoming Events")}
                </Link>
              </Button>
              <Button asChild variant="secondary" size="md">
                <Link href="/watch">
                  {t("Gå till Mediabanken", "Open Media Hub")}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Filter Pills */}
      <section className="py-6 bg-white border-b border-grey-200">
        <Container>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: t("Alla Samlingar", "All Archives") },
              { id: "highlights", label: t("Höjdpunkter", "Highlights") },
              { id: "archipelago", label: t("Skärgård", "Archipelago") },
              { id: "youth", label: t("Ungdom", "Youth") },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-body-xs font-semibold transition ${
                  activeCategory === tab.id
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-grey-100 text-grey-600 hover:bg-grey-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Archive Cards Grid */}
      <section className="py-20 bg-grey-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCards.map((event) => (
              <div
                key={event.id}
                className="rounded-3xl bg-white border border-grey-200 overflow-hidden shadow-sm flex flex-col justify-between hover:border-brand-500 transition duration-200"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-body-xs font-bold">
                      {event.dateBadge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-body-xs font-mono text-brand-300 font-semibold mb-1">
                      {event.subBadge}
                    </div>
                    <h3 className="h4 text-white">{event.title}</h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-body-xs text-grey-500 font-mono">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-600" />
                        {event.venue}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-brand-600" />
                        {event.attendees}
                      </span>
                    </div>

                    <blockquote className="scripture text-grey-800 text-body-base font-serif italic border-l-2 border-brand-500 pl-4 py-1 leading-relaxed">
                      {event.quote}
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-grey-200">
                    <Button asChild variant="secondary" size="sm" className="w-full justify-center">
                      <Link href={event.actionLink}>
                        <PlayCircle className="w-4 h-4 mr-2 text-brand-600" />
                        {event.actionText}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Bottom CTA Strip */}
      <section className="py-20 bg-grey-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="h2 text-white">
              {t("Vill du uppleva detta live?", "Want to experience this live?")}
            </h2>
            <p className="body-lg text-grey-300 font-light">
              {t(
                "Se våra kommande samlingar i Frihamnen och boka din kostnadsfria plats redan idag.",
                "Explore upcoming worship nights and reserve your free admission pass today."
              )}
            </p>
            <Button asChild variant="brand" size="lg">
              <Link href="/events">
                {t("Se Kommande Evenemang", "View Upcoming Events")}
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

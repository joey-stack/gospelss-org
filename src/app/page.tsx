"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  Music,
  Megaphone,
  HeartHandshake,
  ArrowRight,
  Pin,
  Building,
  Building2,
  Play,
  PlayCircle,
  Headphones,
  Handshake,
  Copy,
  Check,
  Send,
  ShieldCheck,
  ExternalLink,
  Users,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  // Category filter state for upcoming events
  const [eventCategory, setEventCategory] = useState<string>("all");

  // Swish quick amount preset state
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(150);
  const [copiedSwish, setCopiedSwish] = useState(false);

  // Prayer form submission state
  const [prayerName, setPrayerName] = useState("");
  const [prayerEmail, setPrayerEmail] = useState("");
  const [prayerRequest, setPrayerRequest] = useState("");
  const [confidential, setConfidential] = useState(true);
  const [prayerSubmitting, setPrayerSubmitting] = useState(false);
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);
  const [prayerError, setPrayerError] = useState("");

  const handleCopySwish = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("1234567890");
      setCopiedSwish(true);
      setTimeout(() => setCopiedSwish(false), 2000);
    }
  };

  const handlePrayerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPrayerSubmitting(true);
    setPrayerError("");

    try {
      const res = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: prayerName || "Anonym",
          email: prayerEmail || undefined,
          topic: "Böneförfrågan",
          content: prayerRequest,
          gdprConsent: confidential,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Ett fel uppstod vid inskickning.");
      }

      setPrayerSubmitted(true);
      setPrayerRequest("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Ett okänt fel inträffade.";
      setPrayerError(msg);
    } finally {
      setPrayerSubmitting(false);
    }
  };

  const allEvents = [
    {
      id: "holy-spirit-worship-2026",
      title: "Holy Spirit Worship 2026",
      date: "OCT 18 • 18:00",
      location: "Frihamnen Church, Gothenburg",
      category: "indoor",
      categoryLabel: "Indoor",
      badgeClass: "bg-secondary-container text-on-secondary-container",
      attendees: "340 Attending",
      description:
        "A regional night of collective acoustic praise, intercession, and gospel communion. Featuring the Gothenburg United Gospel Choir.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDTYNWYf6T944Ks-J_VkQzdXhL5g9ViSXo1X72RK9WWouMHEspLjCOtg-nbaGqu6wnZB6yRZjg0E3rQAdMTvjiZaCK7p7WN3KQhWdOVv_eagNA5gcg_bjzrcdbexTVR79_maRwMkpLcVH5P8qWuiotkGnbs-IiIaiZH_jy9kt-g4hhGlGwukSASaHNW7VPWUkk60QLnZChwbvxW6UL_u-rmuJDOEOTO5gBXZDI8TLUiaIQUjRuIk_Qx3A",
      icon: Pin,
      action: "rsvp",
    },
    {
      id: "goteborgs-lovsangskonsert-2027",
      title: "Göteborgs Lovsångskonsert 2027",
      date: "JUN 12, 2027",
      location: "Gustav Adolfs Torg, Göteborg",
      category: "outdoor",
      categoryLabel: "Outdoor Public",
      badgeClass: "bg-primary-fixed text-on-primary-fixed",
      attendees: "1,850 Interested",
      description:
        "The massive annual summer gathering in central Gothenburg. 200+ musicians, 35 partner churches, proclaiming grace to the civic heart.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD2Xzb92yWXgjAm17QCeGSYsbsHRUUTHHBr_aMx7cdjSnxNRuqvTU7iFahaU-GISdmahfZTfvuFmNj5fMXPGSVd47gEDS9-PoiyYkCf9hLhErmUkMsOjdkHSWQve3zfZAo5h-ifhOYCTxyPKxC9rMCLD5HauJHs49Ef3FNaH0HZxTXv9iuZBjUekM8FdBs3ALM1ui7uCX0TE0yBsOcAsnreegDmkW-O86E9KVJg1HZ6hAZ9FMzNSkDz7Q",
      icon: Building2,
      action: "details",
    },
    {
      id: "youth-revival-gothenburg",
      title: "Youth Revival Gothenburg",
      date: "NOV 04 • 19:30",
      location: "Betlehemskyrkan, Vasastan",
      category: "conferences",
      categoryLabel: "Next-Gen",
      badgeClass: "bg-secondary-container text-on-secondary-container",
      attendees: "510 Registered",
      description:
        "A night consecrated for high school and university students across Västra Götaland to encounter spiritual hope, testimony, and gospel fellowship.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBNHl-CQJJh_9eGTFiaI4j2SGhqGtcTw6ggGES1uFwdZ1wB4jRJK9YNCYP2NB5BWPIQvjm9QGsnh2xHX51nt0-VEV3IVZ0mRodL_-uhAD9Mz_DC52B0gz7-izGQxVWW9LglwDXuWYtABDEe-cJBj7dp1zR_cUgA5WonrBFCfV-VGqDVLZVEBMX29FCeq0zoaDZHNvK2DpXWh5KathrbrqUJ2BYLm6VzBTHOTWk93nY1erw1QeUOyBeArQ",
      icon: Building,
      action: "rsvp",
    },
  ];

  const filteredEvents =
    eventCategory === "all"
      ? allEvents
      : allEvents.filter((ev) => ev.category === eventCategory);

  return (
    <div className="bg-background text-on-surface antialiased font-body-md text-body-md selection:bg-primary-container selection:text-on-primary min-h-screen flex flex-col">
      {/* 1. TOP NAVIGATION BAR */}
      <Navbar
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
        onOpenPrayer={() => setPrayerOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      <main id="main-content" className="flex-1">
        {/* 2. HERO SECTION */}
        <HeroSection
          onOpenRSVP={() => setRsvpOpen(true)}
          onOpenSwish={() => setSwishOpen(true)}
          onOpenPrayer={() => setPrayerOpen(true)}
        />

        {/* 3. MISSION STRIP: 3 Pillars with Clean Nordic Line Iconography */}
        <section className="py-10 sm:py-16 bg-surface-container-lowest border-b border-outline-variant/30">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-label-sm font-label-sm tracking-widest uppercase text-primary font-bold">
                {t("Våra Verksamhetspelare", "Our Ministry Pillars")}
              </h2>
              <p className="font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md text-on-background mt-1">
                {t("Byggt för att tjäna, sjunga och förvandla", "Built to Serve, Sing, and Transform")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Pillar 1: Worship */}
              <div className="p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-surface border border-outline-variant/40 hover:border-primary-container hover:shadow-lg transition duration-200 group">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-secondary-container/60 text-secondary flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition duration-200">
                  <Music className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md text-on-background mb-2">
                  {t("Lovsång", "Worship")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {t(
                    "Förenar kyrkor i offentlig lovsång. Vi river samfundsmurar för att ära Gud med storslagen, modern och mångkulturell gospelsång.",
                    "Uniting churches in open-air praise. We break ecclesiastical silos to glorify God with majestic, modern, and cross-cultural gospel song."
                  )}
                </p>
                <Link
                  href="/events"
                  className="mt-4 sm:mt-6 inline-flex items-center gap-1 text-primary font-label-md text-label-md hover:underline"
                >
                  <span>{t("Utforska musikmissionen", "Discover music ministry")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Pillar 2: Outreach */}
              <div className="p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-surface border border-outline-variant/40 hover:border-primary-container hover:shadow-lg transition duration-200 group">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-secondary-container/60 text-secondary flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition duration-200">
                  <Megaphone className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md text-on-background mb-2">
                  {t("Uppsökande", "Outreach")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {t(
                    "Delar tro och hopp direkt på stadens torg, i parker, hamnområden och vid universitet med gästfrihet, musik och kärlek.",
                    "Sharing faith and hope directly into public squares, city parks, harbor docks, and university centers with hospitality, music, and love."
                  )}
                </p>
                <Link
                  href="/events"
                  className="mt-4 sm:mt-6 inline-flex items-center gap-1 text-primary font-label-md text-label-md hover:underline"
                >
                  <span>{t("Utforska torgmissioner", "Explore public missions")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Pillar 3: Transformation */}
              <div className="p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-surface border border-outline-variant/40 hover:border-primary-container hover:shadow-lg transition duration-200 group">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-secondary-container/60 text-secondary flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition duration-200">
                  <HeartHandshake className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md text-on-background mb-2">
                  {t("Förvandling", "Transformation")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {t(
                    "Berör människors liv genom förbön, vittnesbörd, själavård och praktiskt stöd för utsatta göteborgare.",
                    "Impacting lives through prayer, testimonies, spiritual mentorship, and active charity for vulnerable Gothenburg residents."
                  )}
                </p>
                <Link
                  href="/prayer"
                  className="mt-4 sm:mt-6 inline-flex items-center gap-1 text-primary font-label-md text-label-md hover:underline"
                >
                  <span>{t("Läs vittnesbörd & bön", "Read community stories")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. UPCOMING EVENTS SHOWCASE */}
        <section className="py-10 sm:py-16 md:py-20 bg-surface" id="events">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            {/* Section Header & Filter Chips */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div>
                <span className="text-label-sm font-label-sm uppercase tracking-wider text-primary font-semibold">
                  {t("Stadskalender 2026/2027", "City Calendar 2026/2027")}
                </span>
                <h2 className="font-headline-md sm:font-headline-lg text-headline-md sm:text-headline-lg text-on-background mt-1">
                  {t("Kommande Samlingar & Stadskonserter", "Upcoming Gatherings & City Concerts")}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
                  {t(
                    "Förena din röst med tusentals i offentlig lovsång över Göteborg. Alla samlingar är gratis och öppna för alla.",
                    "Join thousands of voices in public worship across Gothenburg. All gatherings are free and open to everyone regardless of background."
                  )}
                </p>
              </div>

              {/* Pill Filter Chips - Horizontal smooth scroll on mobile */}
              <div
                className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
                role="tablist"
              >
                {[
                  { id: "all", label: t("Alla Samlingar", "All Gatherings") },
                  { id: "indoor", label: t("Inomhus", "Indoor Sanctuaries") },
                  { id: "outdoor", label: t("Torg & Utomhus", "Outdoor Squares") },
                  { id: "conferences", label: t("Konferenser", "Conferences") },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setEventCategory(tab.id)}
                    className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full font-label-sm sm:font-label-md text-label-sm sm:text-label-md transition duration-150 whitespace-nowrap shrink-0 ${
                      eventCategory === tab.id
                        ? "bg-primary-container text-on-primary shadow-xs font-bold"
                        : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-variant"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3-Column Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredEvents.map((event) => {
                const IconComponent = event.icon;
                return (
                  <article
                    key={event.id}
                    className="bg-surface-container-lowest rounded-xl md:rounded-2xl border border-outline-variant/50 overflow-hidden shadow-sm hover:shadow-xl transition duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface text-[11px] sm:text-label-sm font-label-sm font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md shadow-xs">
                          {event.date}
                        </div>
                        <div
                          className={`absolute top-3 right-3 text-[11px] sm:text-label-sm font-label-sm font-semibold px-2 py-0.5 sm:px-2.5 rounded-full ${event.badgeClass}`}
                        >
                          {event.categoryLabel}
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center gap-1.5 text-on-surface-variant text-body-sm font-body-sm mb-2">
                          <IconComponent className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs sm:text-body-sm">{event.location}</span>
                        </div>
                        <h3 className="font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md text-on-background group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-2">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                      <span className="text-xs sm:text-body-sm font-body-sm text-outline font-medium">
                        {event.attendees}
                      </span>
                      {event.action === "rsvp" ? (
                        <button
                          type="button"
                          onClick={() => setRsvpOpen(true)}
                          className="bg-primary-container text-on-primary hover:bg-secondary text-label-sm sm:text-label-md font-label-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg transition duration-150"
                        >
                          {t("Anmäl dig gratis", "RSVP Free")}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setRsvpOpen(true)}
                          className="border border-outline-variant text-on-surface hover:border-primary text-label-sm sm:text-label-md font-label-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg transition duration-150"
                        >
                          {t("Detaljer & Karta", "Details & Map")}
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. SCRIPTURE EDITORIAL BANNER (Nordic Editorial Style) */}
        <section className="py-8 sm:py-14 bg-surface-container-low border-y border-outline-variant/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-5 sm:p-8 rounded-2xl bg-surface-container-low border-l-4 border-l-primary border border-surface-container shadow-sm space-y-3 text-center sm:text-left">
              <div className="inline-block w-8 h-1 bg-primary-container rounded-full mb-2"></div>
              <blockquote className="font-scripture-quote text-lg sm:text-scripture-quote italic text-on-surface leading-snug sm:leading-relaxed tracking-wide">
                “Sing to the Lord a new song; sing to the Lord, all the earth. Proclaim his salvation day after day.”
              </blockquote>
              <div className="pt-2 border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-1">
                <cite className="font-scripture-citation text-xs sm:text-scripture-citation not-italic uppercase tracking-widest text-on-surface-variant font-semibold">
                  Psalm 96:1–2
                </cite>
                <span className="text-[11px] font-label-sm uppercase tracking-wider text-primary font-bold">
                  Göteborgs Stadsbön
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. WATCH & LISTEN (Multimedia & Live Recordings - Dark Inversion Surface) */}
        <section
          className="py-10 sm:py-16 md:py-20 bg-on-background text-surface relative overflow-hidden"
          id="watch-listen"
        >
          {/* Atmospheric subtle backdrop glow */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
            {/* Headline Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
              <div>
                <span className="text-label-sm font-label-sm uppercase tracking-wider text-primary-fixed font-semibold">
                  {t("Sändningar & Multimedia", "Broadcast & Multimedia")}
                </span>
                <h2 className="font-headline-md sm:font-headline-lg text-headline-md sm:text-headline-lg text-white mt-1">
                  {t("Se & Lyssna", "Watch & Listen")}
                </h2>
                <p className="font-body-md text-body-md text-surface-variant max-w-xl mt-2">
                  {t(
                    "Upplev lovsångssessioner i Göteborg, akustiska studioversioner och dokumentära kortfilmer från stadens gator.",
                    "Experience Gothenburg praise sessions, studio acoustic versions, and documentary shorts from street missions."
                  )}
                </p>
              </div>
              <Link
                href="/watch"
                className="inline-flex items-center gap-1.5 text-primary-fixed hover:text-white font-label-sm sm:font-label-md text-label-sm sm:text-label-md transition-colors"
              >
                <span>{t("Visa alla 60+ livespelningar", "View All 60+ Live Sets")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Bento Multimedia Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8 sm:mb-12">
              {/* Large Featured Video Player (7 Columns) */}
              <div className="lg:col-span-7 bg-surface-container-lowest/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between group">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black/40">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9jEPafcKtkj9m-ANdOeyM9zaTjsXQoQzy7zQC7NMCk4sFUI2IAIHakGNszPcSJpEpu6vH2h82d0079j1mfBAXE0fSFnVKRbnIgwVGNda0endhWF4lwfKeryAAjtBAEO-Po5p5EEvoAt-hOBLsrh8ZptqP6JqZwg4JENUBnn9U4lyyjb30PoC3l0F38t3OpNXe8QMTYdoacJLdY9o56ADOga5R4MmYIGC9KHh_-J_L9ublJ0C_kyUTqQ"
                    alt="Gothenburg United Gospel Choir on Brunnsparken plaza in twilight"
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover group-hover:scale-105 transition duration-500 opacity-90"
                  />
                  {/* Frosted Glass Circular Play Button */}
                  <button
                    type="button"
                    aria-label="Play Concert Video"
                    onClick={() => setRsvpOpen(true)}
                    className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-primary-container hover:border-primary-container transition duration-200 group-hover:scale-110 shadow-xl"
                  >
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
                  </button>
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] sm:text-label-sm font-label-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded">
                    34:12 Live Master
                  </div>
                </div>

                <div className="pt-4 sm:pt-5">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-label-sm font-label-sm text-primary-fixed mb-1">
                    <span>Full Concert Set</span>
                    <span>•</span>
                    <span>Recorded live at Brunnsparken</span>
                  </div>
                  <h3 className="font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md text-white">
                    Hela Staden Prisar: Open Air Live in Central Gothenburg
                  </h3>
                  <p className="font-body-md text-body-md text-surface-variant mt-2">
                    Over 30 minutes of non-stop worship, featuring original Swedish gospel arrangements and traditional English hymns orchestrated for full choir and brass section.
                  </p>
                </div>
              </div>

              {/* 3-Item Video Stack (5 Columns) */}
              <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
                {/* Mini Video 1 */}
                <div
                  onClick={() => setRsvpOpen(true)}
                  className="bg-surface-container-lowest/5 border border-white/10 rounded-xl p-3 flex items-center gap-3 sm:gap-4 hover:bg-surface-container-lowest/10 transition duration-150 cursor-pointer group"
                >
                  <div className="w-28 sm:w-36 aspect-video rounded-lg overflow-hidden relative shrink-0">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Em1w6paLo-x8X6QGOOlARn1KZv62HJzlPPLkzssnuxnv6iCtH_eXttJT4NACC3Q9FYNz9uBsViwuY_k2_5SU7AElKMehCnEEJ9Ka2LaeX3Gi2vyGMOdpMeQY56oZf-cY5uaLRIAnM2gthRbhS4HrZ4njt273JFLeFxZRg5bqXS92L475zJNyaL7ok09KlPpBc0MEV40rWuL0rwHwFInWz3eAsK78svIDDFzeNOVhBTU9P2gDXsfhGw"
                      alt="Acoustic worship trio in historic Swedish church"
                      fill
                      sizes="144px"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <PlayCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[11px] sm:text-label-sm font-label-sm text-primary-fixed truncate">
                      Acoustic Session • 05:42
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-white text-xs sm:text-sm line-clamp-1 group-hover:text-primary-fixed transition-colors">
                      Guds Nåd Över Haga
                    </h4>
                    <p className="text-xs sm:text-body-sm font-body-sm text-surface-variant line-clamp-1 mt-0.5">
                      Intimate acoustic guitar session recorded at Haga Church.
                    </p>
                  </div>
                </div>

                {/* Mini Video 2 */}
                <div
                  onClick={() => setRsvpOpen(true)}
                  className="bg-surface-container-lowest/5 border border-white/10 rounded-xl p-3 flex items-center gap-3 sm:gap-4 hover:bg-surface-container-lowest/10 transition duration-150 cursor-pointer group"
                >
                  <div className="w-28 sm:w-36 aspect-video rounded-lg overflow-hidden relative shrink-0">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJzdjcF2DdQWrosH6IJOhp8hGXKLlw0XszAqdOUSNZjDhxH7bnADZOrYmBZtbQpF_aLnXLePsB7gftfZ1kG8GU8xvFEf7tmdjTOXLQYwnD7Q3bQ64w_OVvB2t9iLzfwyzlO6_XDFF0QAqXRNzdyhZ0e6exS5ZZAOvAx_dO6E2aQ5IA8P2UdUhBthFo1xSsBJscW6OQcfKHy-8v07WGa2svsVgttlHRfH8jnzS4LyU-RT0RGPXM6kLUMQ"
                      alt="Gospel praise on Gothenburg archipelago pier"
                      fill
                      sizes="144px"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <PlayCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[11px] sm:text-label-sm font-label-sm text-primary-fixed truncate">
                      Archipelago Sessions • 04:18
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-white text-xs sm:text-sm line-clamp-1 group-hover:text-primary-fixed transition-colors">
                      Strandens Lovsång (Live at Styrsö)
                    </h4>
                    <p className="text-xs sm:text-body-sm font-body-sm text-surface-variant line-clamp-1 mt-0.5">
                      Vocal and Rhodes piano arrangement facing the Kattegat sea.
                    </p>
                  </div>
                </div>

                {/* Mini Video 3 */}
                <div
                  onClick={() => setRsvpOpen(true)}
                  className="bg-surface-container-lowest/5 border border-white/10 rounded-xl p-3 flex items-center gap-3 sm:gap-4 hover:bg-surface-container-lowest/10 transition duration-150 cursor-pointer group"
                >
                  <div className="w-28 sm:w-36 aspect-video rounded-lg overflow-hidden relative shrink-0">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXa4YI8sDrJ5LfKLaX-LxHjfASIKO4R9lM4MVdmj28rDgonET3zxqbDkNUo3gPpfuyPaM3GxB5K9AlTLSguO5myHuitsw7koflA4PdmwCsAiqMV-5LjvOGOH7Kn0nDMeUMPzxUVRylD0Ih3z8sc8eIPaOqLyPM0H5jPXidnTZHBaNukO0X8o1EdwLKVm0ImvoB0FpOEjSlJmSQT0LqJhiC6jXV8pkz0droMwDNsTZ8U7Y-oQ9N3NyLcw"
                      alt="Volunteer street teams offering coffee and prayer in Gothenburg"
                      fill
                      sizes="144px"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <PlayCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[11px] sm:text-label-sm font-label-sm text-primary-fixed truncate">
                      Documentary • 08:50
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-white text-xs sm:text-sm line-clamp-1 group-hover:text-primary-fixed transition-colors">
                      Stories of Hope: City Outreach
                    </h4>
                    <p className="text-xs sm:text-body-sm font-body-sm text-surface-variant line-clamp-1 mt-0.5">
                      Testimonies of life transformation through street hospitality.
                    </p>
                  </div>
                </div>

                {/* Audio Streaming Channels Pill Banner */}
                <div className="mt-2 p-3.5 sm:p-4 rounded-xl bg-surface-container-lowest/10 border border-primary-container/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-primary-fixed shrink-0" />
                    <div>
                      <p className="text-xs sm:text-label-md font-label-md text-white font-semibold">Stream 'GOSPELS Vol. 1' Live EP</p>
                      <p className="text-[11px] sm:text-label-sm font-label-sm text-surface-variant">
                        Available on Spotify &amp; Apple Music
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <a
                      href="https://spotify.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-initial text-center px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-xs sm:text-label-sm font-label-sm text-white cursor-pointer transition"
                    >
                      Spotify
                    </a>
                    <a
                      href="https://apple.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-initial text-center px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-xs sm:text-label-sm font-label-sm text-white cursor-pointer transition"
                    >
                      Apple Music
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. DUAL PARTNERSHIP & PRAYER SECTION */}
        <section className="py-10 sm:py-16 md:py-20 bg-surface-bright" id="give">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left: Become a Kingdom Partner & Swish Giving (7 Columns) */}
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl sm:rounded-2xl border border-outline-variant/40 p-5 sm:p-6 lg:p-8 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/50 text-secondary text-label-sm font-label-sm font-semibold mb-3 sm:mb-4">
                  <Handshake className="w-4 h-4" />
                  <span>{t("Givarnätverk • Kingdom Builders", "Kingdom Builders Network")}</span>
                </div>
                <h2 className="font-headline-md sm:font-headline-lg text-headline-md sm:text-headline-lg text-on-background">
                  {t("Bli Kingdom Partner", "Become a Kingdom Partner")}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
                  {t(
                    "100% av våra stadskonserter och uppsökande insatser är helt gratis för allmänheten. Din gåva finansierar scenlogistik, ungdomslovsångsakademier och ljudtillstånd.",
                    "100% of our city concerts and outreach events are provided freely to the public. Your monthly gift fuels stage logistics, youth worship academies, and public sound permits."
                  )}
                </p>

                {/* Swish Fast Giving Module */}
                <div className="mt-6 sm:mt-8 bg-surface-container-low rounded-xl p-4 sm:p-6 border border-outline-variant/50">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                    {/* Mock Swish QR Code Container */}
                    <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white p-2.5 sm:p-3 rounded-xl border border-outline-variant flex flex-col items-center justify-between shrink-0 shadow-xs">
                      <div className="flex items-center justify-between w-full px-1">
                        <span className="text-[10px] font-bold text-slate-800">Swish</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      </div>
                      {/* Crisp Stylized SVG QR Pattern Representation */}
                      <svg className="w-20 h-20 sm:w-24 sm:h-24 text-on-background" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm8-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h4v4h-2v-2h-2v-2zm2-2h2v2h-2v-2zm-4 4h-2v2h2v-2zM6 6h2v2H6V6zm12 0h2v2h-2V6zm-12 12h2v2H6v-2z"></path>
                      </svg>
                      <span className="text-[9px] font-mono text-outline">{t("Skanna för att ge", "Scan to Give")}</span>
                    </div>

                    {/* Giving Details & Preset Amounts */}
                    <div className="w-full space-y-3 sm:space-y-4">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs sm:text-label-sm font-label-sm uppercase text-outline">
                          {t("Officiellt Swish-nummer", "Official Swish Number")}
                        </span>
                        <button
                          type="button"
                          onClick={handleCopySwish}
                          className="inline-flex items-center gap-1 text-primary hover:underline text-xs sm:text-label-sm font-label-sm font-semibold"
                        >
                          {copiedSwish ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-600">{t("Kopierat!", "Copied!")}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>123 456 78 90</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Quick Presets */}
                      <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                        {[
                          { val: 50, label: "50 kr" },
                          { val: 150, label: "150 kr" },
                          { val: 300, label: "300 kr" },
                          { val: "custom", label: t("Valfritt", "Custom") },
                        ].map((tier) => (
                          <button
                            key={tier.label}
                            type="button"
                            onClick={() => setSelectedAmount(tier.val as any)}
                            className={`py-2 px-1 text-xs sm:text-label-sm font-label-sm font-semibold rounded-lg transition text-center ${
                              selectedAmount === tier.val
                                ? "border border-primary bg-primary-container/10 text-primary"
                                : "border border-outline-variant hover:border-primary hover:bg-surface-container text-on-surface"
                            }`}
                          >
                            {tier.label}
                          </button>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setSwishOpen(true)}
                          className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary hover:bg-secondary font-label-sm sm:font-label-md text-label-sm sm:text-label-md py-2.5 rounded-lg transition duration-150"
                        >
                          <span>{t("Ge via Swish App", "Give via Swish App")}</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setSwishOpen(true)}
                          className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-outline-variant text-on-surface hover:bg-surface text-label-sm sm:text-label-md font-label-md transition text-center"
                        >
                          Bankgiro
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax / Non-Profit Legals */}
                <div className="mt-4 sm:mt-6 flex items-start sm:items-center gap-2 text-outline text-xs sm:text-body-sm font-body-sm">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    {t(
                      "Registrerad ideell förening (802557-4883) i Göteborg. Skattebefriad och transparent verksamhet.",
                      "Registered non-profit association (802557-4883) in Gothenburg. Tax-exempt and transparent ministry."
                    )}
                  </span>
                </div>
              </div>

              {/* Right: Need Prayer? Pastoral Form (5 Columns) */}
              <div
                className="lg:col-span-5 bg-surface-container rounded-xl sm:rounded-2xl border border-outline-variant/40 p-5 sm:p-6 lg:p-8 shadow-sm"
                id="prayer"
              >
                <div className="flex items-center gap-2 text-primary text-label-sm font-label-sm font-semibold uppercase mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>{t("Omsorg & Förbön", "Care & Ministry")}</span>
                </div>
                <h3 className="font-headline-md sm:font-headline-lg text-headline-md sm:text-headline-lg text-on-background">
                  {t("Behöver du Bön?", "Need Prayer?")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  {t(
                    "Vårt pastorala förbönsteam i Göteborg ber dagligen för varje inkommen förfrågan i fullständig tystnadsplikt.",
                    "Our pastoral and intercession team in Gothenburg prays daily for every submitted request in complete confidence."
                  )}
                </p>

                {prayerSubmitted ? (
                  <div className="mt-6 p-6 rounded-xl bg-primary-container/10 border border-primary-container text-center space-y-3">
                    <ShieldCheck className="w-10 h-10 text-primary mx-auto" />
                    <h4 className="font-headline-md text-headline-md text-on-background">
                      Tack för din bön
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Ditt böneämne har mottagits i fullständig konfidentialitet enligt svensk GDPR Artikel 9. Vårt själavårdsteam ber för dig.
                    </p>
                    <button
                      type="button"
                      onClick={() => setPrayerSubmitted(false)}
                      className="mt-2 text-primary font-label-md text-label-md hover:underline"
                    >
                      Skicka ett till böneämne
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePrayerSubmit} className="mt-6 space-y-4">
                    {prayerError && (
                      <div className="p-3 rounded-lg bg-error-container text-on-error-container text-body-sm">
                        {prayerError}
                      </div>
                    )}
                    <div>
                      <label
                        className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1.5"
                        htmlFor="prayer-name"
                      >
                        Your Name (or Anonymous)
                      </label>
                      <input
                        id="prayer-name"
                        value={prayerName}
                        onChange={(e) => setPrayerName(e.target.value)}
                        placeholder="Fyll i namn eller lämna tomt"
                        type="text"
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 py-2.5 px-3.5 transition"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1.5"
                        htmlFor="prayer-email"
                      >
                        Email (if you wish to receive a response)
                      </label>
                      <input
                        id="prayer-email"
                        value={prayerEmail}
                        onChange={(e) => setPrayerEmail(e.target.value)}
                        placeholder="namn@exempel.se"
                        type="email"
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 py-2.5 px-3.5 transition"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1.5"
                        htmlFor="prayer-request"
                      >
                        How Can We Pray for You?
                      </label>
                      <textarea
                        id="prayer-request"
                        required
                        rows={3}
                        value={prayerRequest}
                        onChange={(e) => setPrayerRequest(e.target.value)}
                        placeholder="Skriv din bön eller situation här..."
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 py-2.5 px-3.5 transition"
                      ></textarea>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        id="confidential"
                        type="checkbox"
                        checked={confidential}
                        onChange={(e) => setConfidential(e.target.checked)}
                        className="rounded text-primary focus:ring-primary border-outline-variant h-4 w-4"
                      />
                      <label
                        htmlFor="confidential"
                        className="text-xs sm:text-body-sm font-body-sm text-on-surface-variant cursor-pointer"
                      >
                        Keep this request strictly confidential (GDPR Art. 9)
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={prayerSubmitting}
                      className="w-full mt-2 bg-on-background hover:bg-slate-800 text-surface font-label-md text-label-md py-3 rounded-lg shadow-sm transition duration-150 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{prayerSubmitting ? "Skickar..." : "Submit Prayer Request"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 8. PARTNER CHURCHES STRIP: Civic Unity */}
        <section className="py-10 sm:py-16 bg-surface border-t border-outline-variant/30" id="partners">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
            <p className="text-label-sm font-label-sm uppercase tracking-widest text-outline font-semibold mb-4 sm:mb-6">
              United With Over 40 Partner Congregations in West Sweden
            </p>
            {/* Logo Marks Row */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 sm:gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition duration-300">
              <span className="text-sm sm:font-headline-sm sm:text-headline-sm font-bold text-on-surface-variant tracking-wider">
                Smyrna Göteborg
              </span>
              <span className="text-outline text-xs sm:hidden">•</span>
              <span className="text-sm sm:font-headline-sm sm:text-headline-sm font-bold text-on-surface-variant tracking-wider">
                Betlehemskyrkan
              </span>
              <span className="text-outline text-xs sm:hidden">•</span>
              <span className="text-sm sm:font-headline-sm sm:text-headline-sm font-bold text-on-surface-variant tracking-wider">
                Fiskebäcks Missionskyrka
              </span>
              <span className="text-outline text-xs sm:hidden">•</span>
              <span className="text-sm sm:font-headline-sm sm:text-headline-sm font-bold text-on-surface-variant tracking-wider">
                Sankt Pauli Församling
              </span>
              <span className="text-outline text-xs sm:hidden">•</span>
              <span className="text-sm sm:font-headline-sm sm:text-headline-sm font-bold text-on-surface-variant tracking-wider">
                Frälsningsarmén
              </span>
            </div>
            <div className="mt-6 sm:mt-8">
              <button
                type="button"
                onClick={() => setVolunteerOpen(true)}
                className="inline-flex items-center gap-1.5 text-primary hover:text-secondary font-label-sm sm:font-label-md text-label-sm sm:text-label-md font-semibold text-center"
              >
                <span>Vill din församling stå med oss? Bli partnerförsamling</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </section>

        {/* 9. VOLUNTEER CALLOUT STRIP */}
        <section className="py-10 sm:py-16 bg-surface-container-low border-t border-outline-variant/30 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/60 text-secondary text-label-sm font-label-sm font-semibold mb-3 sm:mb-4">
              <Users className="w-4 h-4" />
              <span>Tjäna i Göteborg • Volontärteam</span>
            </div>
            <h2 className="font-headline-md sm:font-headline-lg text-headline-md sm:text-headline-lg text-on-background mb-3">
              Vill du vara med och tjäna bakom kulisserna?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-xl mx-auto">
              Vi söker dig som vill vara med i vårt värdskap, ljud/ljus, foto/media, scenbygge eller
              förbönsteam. Vi erbjuder varm kristen gemenskap och trygg handledning för alla åldrar.
            </p>
            <button
              type="button"
              onClick={() => setVolunteerOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary hover:bg-secondary font-label-md text-label-md px-6 py-3.5 rounded-lg shadow-md custom-halo transition duration-150 active:scale-95"
            >
              <Users className="w-4 h-4" />
              <span>Ansök som Volontär</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* 11. INTERACTIVE SYSTEM MODALS */}
      <RSVPModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
      <SwishModal isOpen={swishOpen} onClose={() => setSwishOpen(false)} />
      <PrayerModal isOpen={prayerOpen} onClose={() => setPrayerOpen(false)} />
      <VolunteerModal isOpen={volunteerOpen} onClose={() => setVolunteerOpen(false)} />
    </div>
  );
}

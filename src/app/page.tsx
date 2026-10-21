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
  Calendar,
  MapPin,
  Users,
  Play,
  PlayCircle,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Headphones,
  Music,
  ExternalLink,
  Check,
  Copy,
  Heart,
  Church,
  Send,
  ShieldCheck,
  Building,
  Quote,
} from "lucide-react";

export default function Home() {
  const { t, language } = useLanguage();
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  // Filter state for Events Showcase
  const [eventCategory, setEventCategory] = useState<string>("all");

  // Swish fast copy
  const [copiedSwish, setCopiedSwish] = useState(false);

  // Prayer quick form in page
  const [prayerName, setPrayerName] = useState("");
  const [prayerEmail, setPrayerEmail] = useState("");
  const [prayerRequest, setPrayerRequest] = useState("");
  const [confidential, setConfidential] = useState(true);
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);
  const [prayerSubmitting, setPrayerSubmitting] = useState(false);
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
    if (!prayerRequest.trim()) return;

    setPrayerSubmitting(true);
    setPrayerError("");

    try {
      const res = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: prayerName.trim() || undefined,
          email: prayerEmail.trim() || undefined,
          topic: "Allmänt",
          content: prayerRequest.trim(),
          gdprConsent: confidential,
        }),
      });

      if (!res.ok) {
        throw new Error(
          t("Kunde inte skicka bönen. Försök igen.", "Could not submit prayer. Please try again.")
        );
      }

      setPrayerSubmitted(true);
      setPrayerRequest("");
      setPrayerName("");
      setPrayerEmail("");
    } catch (err: any) {
      setPrayerError(
        err.message ||
          t("Nätverksfel. Kontrollera din anslutning.", "Network error. Please check your connection.")
      );
    } finally {
      setPrayerSubmitting(false);
    }
  };

  const allEvents = [
    {
      id: "holy-spirit-worship-2026",
      title: "Holy Spirit Worship 2026",
      category: "indoor",
      categoryLabel: t("Inomhus", "Indoor Sanctuary"),
      date: t("Lördag 18 Okt 2026 • 18:00", "Saturday Oct 18, 2026 • 18:00"),
      location: t("Smyrna Frihamnskyrkan, Göteborg", "Smyrna Frihamnen, Gothenburg"),
      attendees: t("340 Förbokade", "340 RSVP'd"),
      description: t(
        "En djup kväll av akustisk tillbedjan, nattvardsgemenskap och förbön för Göteborgs andliga förnyelse. Öppen och fri entré för alla åldrar.",
        "An intimate evening of acoustic praise, communion, and citywide prayer for Gothenburg's renewal. Open and free admission for all ages."
      ),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDP0MME-ZWQuFzCbalUpQBYJjv0lBYOMe7oQZL1EhtEHNFncqrpVn1H2O3yY4NNw_JE4KHjSXEWphMj2IWc3-YyLEI6M0kR3DwJAiQO0OFrRiCbDQuUHZkBoik8Ro-RGNqgNHqKBDPTkPeyDN47L-m9pDrvdp_lovUmqGgWJh3tq0RcwSvmlnU3kcjGnw8zhPdZVQtOLHILmaplpl4YIyUIw23OR8duA2GH67eWXyiYLImbXav2BF8WmA",
      link: "/events/holy-spirit-worship",
      action: "rsvp",
    },
    {
      id: "goteborgs-lovsangskonsert-2027",
      title: "Göteborgs Lovsångskonsert 2027",
      category: "outdoor",
      categoryLabel: t("Torg & Utomhus", "Outdoor Plaza"),
      date: t("Lördag 12 Juni 2027 • 15:00", "Saturday June 12, 2027 • 15:00"),
      location: t("Götaplatsen / Frihamnspiren", "Götaplatsen / Harbor Pier"),
      attendees: t("1 200 Förväntade", "1,200 Expected"),
      description: t(
        "Västsveriges största öppna gospelkonsert i det offentliga rummet. Förenade körer, blåsensemble och evangelium mitt i stadens hjärta.",
        "West Sweden's largest open-air gospel concert in the public square. United choir, brass ensemble, and hope in the heart of the city."
      ),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2v_Nl2QdYv2Wp8Nl0-eJ-t5R6KkW9XyZs0t7pA5R4D8k1Q2E3A4B5C6D7E8F9G0H1I2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z",
      link: "/events",
      action: "details",
    },
    {
      id: "vastsvenska-pastorsnatverket",
      title: t("Ekumeniskt Pastors- & Ledardygn", "Ecumenical Leadership Summit"),
      category: "conferences",
      categoryLabel: t("Konferens", "Conference"),
      date: t("Torsdag 19 Nov 2026 • 09:30", "Thursday Nov 19, 2026 • 09:30"),
      location: t("Betlehemskyrkan, Vasastan", "Betlehemskyrkan, Gothenburg"),
      attendees: t("85 Församlingsledare", "85 Church Leaders"),
      description: t(
        "Ledardag kring samverkan, gemensam bön och musikmission över samfundsgränser i Västra Götaland.",
        "Leadership retreat focusing on cross-denominational unity, citywide prayer, and music outreach across West Sweden."
      ),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBNHl-CQJJh_9eGTFiaI4j2SGhqGtcTw6ggGES1uFwdZ1wB4jRJK9YNCYP2NB5BWPIQvjm9QGsnh2xHX51nt0-VEV3IVZ0mRodL_-uhAD9Mz_DC52B0gz7-izGQxVWW9LglwDXuWYtABDEe-cJBj7dp1zR_cUgA5WonrBFCfV-VGqDVLZVEBMX29FCeq0zoaDZHNvK2DpXWh5KathrbrqUJ2BYLm6VzBTHOTWk93nY1erw1QeUOyBeArQ",
      link: "/events",
      action: "rsvp",
    },
  ];

  const filteredEvents =
    eventCategory === "all"
      ? allEvents
      : allEvents.filter((ev) => ev.category === eventCategory);

  return (
    <div className="bg-[#FAF9F5] text-stone-900 antialiased min-h-screen flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-900">
      {/* 1. Global Navigation */}
      <Navbar
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
        onOpenPrayer={() => setPrayerOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      <main id="main-content" className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onOpenRSVP={() => setRsvpOpen(true)}
          onOpenSwish={() => setSwishOpen(true)}
          onOpenPrayer={() => setPrayerOpen(true)}
        />

        {/* ========================================================================= */}
        {/* 3. MISSION PILLARS: Open Editorial 3-Column Layout (Zero AI Slop)         */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-24 md:py-28 bg-[#FAF9F5] border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-800">
                {t("VÅRT UPPDRAG I VÄSTSVERIGE", "OUR MISSION IN WEST SWEDEN")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mt-2">
                {t(
                  "Byggt för att tjäna, sjunga och förvandla",
                  "Built to Serve, Sing, and Transform"
                )}
              </h2>
              <p className="text-base text-stone-600 mt-3 font-light leading-relaxed">
                {t(
                  "GOSPELS verkar ekumeniskt för att föra kristen lovsång bortom kyrkoväggarna och möta människor mitt i stadens liv.",
                  "GOSPELS exists to carry sacred praise beyond traditional walls, meeting people with warmth and hope in the public sphere."
                )}
              </p>
            </div>

            {/* Clean 3-Column Editorial Grid (No pastel circular icon boxes) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {/* Pillar 01: Lovsång */}
              <div className="pt-6 border-t border-stone-300 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-teal-700 tracking-wider">
                    01 / {t("LOVSÅNG", "WORSHIP")}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-3 mb-3">
                    {t("Förenad Tillbedjan", "United Worship")}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                    {t(
                      "Vi river samfundsmurar och samlar kristna från olika traditioner i storslagen, nyskriven och mångkulturell gospelsång.",
                      "Breaking down denominational barriers to unite believers from across Gothenburg in majestic, contemporary gospel praise."
                    )}
                  </p>
                </div>
                <Link
                  href="/events"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900 tracking-wide uppercase font-mono"
                >
                  <span>{t("Se Våra Samlingar", "Explore Gatherings")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Pillar 02: Uppsökande */}
              <div className="pt-6 border-t border-stone-300 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-teal-700 tracking-wider">
                    02 / {t("UPPSÖKANDE", "OUTREACH")}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-3 mb-3">
                    {t("Närvaro i Stadsrummet", "Public Presence")}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                    {t(
                      "Vi tar musiken och gemenskapen direkt ut på torg, kajer och parker med gästfrihet, varmt kaffe och personliga samtal.",
                      "Carrying hope and hospitality onto city squares, harbor piers, and university campuses with music, coffee, and care."
                    )}
                  </p>
                </div>
                <Link
                  href="/events"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900 tracking-wide uppercase font-mono"
                >
                  <span>{t("Torg- & Utemissioner", "Public Missions")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Pillar 03: Förvandling */}
              <div className="pt-6 border-t border-stone-300 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-teal-700 tracking-wider">
                    03 / {t("FÖRVANDLING", "TRANSFORMATION")}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-3 mb-3">
                    {t("Omsorg & Förbön", "Care & Renewal")}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                    {t(
                      "Ett engagerat pastoralt team erbjuder konfidentiell förbön, själavårdande stöd och praktisk omsorg för utsatta medmänniskor.",
                      "A committed pastoral team providing strictly confidential prayer, spiritual support, and practical charity across our city."
                    )}
                  </p>
                </div>
                <Link
                  href="/prayer"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-900 tracking-wide uppercase font-mono"
                >
                  <span>{t("Behöver du Bön?", "Need Prayer?")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. UPCOMING EVENTS: Clean, Calm Gallery Cards                             */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-24 bg-white border-b border-stone-200/80" id="events">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-800">
                  {t("STADSKALENDER 2026/2027", "CITY CALENDAR 2026/2027")}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mt-2">
                  {t("Kommande Samlingar & Konserter", "Upcoming Gatherings & City Concerts")}
                </h2>
                <p className="text-sm sm:text-base text-stone-600 mt-2 font-light max-w-xl">
                  {t(
                    "Förena din röst med tusentals i öppen lovsång. Alla våra konserter och samlingar är gratis och välkomnande för alla.",
                    "Join thousands in united praise across Gothenburg. All gatherings are free, non-ticketed, and welcoming to all."
                  )}
                </p>
              </div>

              {/* Minimal Category Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                {[
                  { id: "all", label: t("Alla", "All") },
                  { id: "indoor", label: t("Inomhus", "Indoor") },
                  { id: "outdoor", label: t("Torg & Ute", "Outdoor") },
                  { id: "conferences", label: t("Konferenser", "Conferences") },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setEventCategory(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                      eventCategory === tab.id
                        ? "bg-teal-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Event Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <article
                  key={event.id}
                  className="bg-[#FAF9F5] rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition group flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Container */}
                    <div className="relative aspect-[16/10] bg-stone-900 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white font-mono text-xs font-semibold px-2.5 py-1 rounded-md border border-white/10">
                        {event.date}
                      </div>

                      <div className="absolute top-3 right-3 bg-teal-900/80 backdrop-blur-md text-teal-200 font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-teal-500/30">
                        {event.categoryLabel}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-teal-600" />
                        <span>{event.location}</span>
                      </div>

                      <h3 className="font-bold text-stone-900 text-xl leading-snug group-hover:text-teal-700 transition mb-3">
                        {event.title}
                      </h3>

                      <p className="text-sm text-stone-600 line-clamp-3 leading-relaxed font-light">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Row */}
                  <div className="px-6 pb-6 pt-3 border-t border-stone-200/70 flex items-center justify-between text-xs text-stone-500">
                    <span className="font-medium font-mono text-stone-600">{event.attendees}</span>
                    <Link
                      href={event.link}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold transition active:scale-95 shadow-2xs"
                    >
                      <span>{t("Anmäl dig gratis", "RSVP Free")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SCRIPTURE EDITORIAL PAUSE: Typographic Sacred Space                     */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#F3F2EC] border-b border-stone-200/80">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <blockquote className="font-serif italic text-2xl sm:text-4xl text-stone-900 leading-relaxed mb-4">
              {t(
                "”Sjung till Herren en ny sång, sjung till Herren, hela jorden! Sjung till Herren, prisa hans namn, förkunna hans frälsning dag efter dag.”",
                "“Sing to the Lord a new song; sing to the Lord, all the earth. Proclaim his salvation day after day.”"
              )}
            </blockquote>
            <p className="font-mono text-xs tracking-widest uppercase text-teal-800 font-semibold">
              {t("PSALTAREN 96:1–2 • GÖTEBORGS STADSBÖN", "PSALM 96:1–2 • GOTHENBURG CITYWIDE PRAYER")}
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. WATCH & LISTEN MULTIMEDIA: Widescreen Showcase                         */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-24 bg-[#0E1113] text-white" id="watch-listen">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-400">
                  {t("MULTIMEDIA & INSPELNINGAR", "MULTIMEDIA & RECORDINGS")}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
                  {t("Se & Lyssna", "Watch & Listen")}
                </h2>
                <p className="text-stone-300 text-sm sm:text-base mt-2 font-light max-w-xl">
                  {t(
                    "Konsertinspelningar, intima akustiska sessioner och dokumentära kortfilmer från Göteborgs torg och kyrkor.",
                    "Live concert recordings, acoustic sanctuary sessions, and documentaries from Gothenburg's streets and churches."
                  )}
                </p>
              </div>
              <Link
                href="/watch"
                className="inline-flex items-center gap-2 text-teal-300 hover:text-white font-medium text-sm transition"
              >
                <span>{t("Öppna hela mediearkivet", "Open Full Media Archive")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Featured Showcase Widescreen Player Card */}
            <div className="bg-[#141719] rounded-3xl border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
              <div className="lg:col-span-8 relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9jEPafcKtkj9m-ANdOeyM9zaTjsXQoQzy7zQC7NMCk4sFUI2IAIHakGNszPcSJpEpu6vH2h82d0079j1mfBAXE0fSFnVKRbnIgwVGNda0endhWF4lwfKeryAAjtBAEO-Po5p5EEvoAt-hOBLsrh8ZptqP6JqZwg4JENUBnn9U4lyyjb30PoC3l0F38t3OpNXe8QMTYdoacJLdY9o56ADOga5R4MmYIGC9KHh_-J_L9ublJ0C_kyUTqQ"
                  alt="Brunnsparken Live Worship Recording"
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <Link
                  href="/watch"
                  aria-label="Play Concert Recording"
                  className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-teal-500 group-hover:text-stone-950 group-hover:scale-110 transition duration-300 shadow-2xl"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </Link>
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-white font-mono text-xs px-2.5 py-1 rounded-md">
                  34:12 Live Master
                </div>
              </div>

              <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-[#141719]">
                <div>
                  <span className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-wider block mb-2">
                    {t("Live i Brunnsparken", "Live in Brunnsparken")}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                    {t(
                      "Hela Staden Prisar: Open Air Live",
                      "The Whole City Praises: Open Air Live"
                    )}
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed font-light mb-6">
                    {t(
                      "Över 30 minuter oavbruten lovsång från Brunnsparken med originalarrangemang, kör, blås och tusentals förbipasserande.",
                      "Over 30 minutes of non-stop worship recorded in central Gothenburg with original gospel arrangements, full choir, and brass."
                    )}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://spotify.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition"
                    >
                      Spotify
                    </a>
                    <a
                      href="https://apple.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition"
                    >
                      Apple Music
                    </a>
                  </div>
                  <Link
                    href="/watch"
                    className="text-teal-400 font-semibold text-xs hover:underline flex items-center gap-1"
                  >
                    <span>{t("Se fler", "Watch more")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. DUAL PARTNERSHIP & CONFIDENTIAL PRAYER                                */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-24 bg-[#FAF9F5] border-b border-stone-200/80" id="give">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Giving & Kingdom Builders (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-10 shadow-xs">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-800">
                  {t("GIVANDE & STÖD", "GIVING & SUPPORT")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 mt-2 mb-3">
                  {t("Bli Kingdom Partner", "Become a Kingdom Partner")}
                </h2>
                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed mb-8">
                  {t(
                    "Alla våra stadskonserter och torginsatser är 100% gratis och öppna för allmänheten. Din månadsgåva finansierar scenhyra, polistillstånd och ungdomslovsångsutbildning.",
                    "100% of our city concerts and public missions are free for everyone. Your gift funds stage logistics, city permits, and training for young gospel artists."
                  )}
                </p>

                {/* Clean Swish Box */}
                <div className="p-6 rounded-2xl bg-[#F5F4EE] border border-stone-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold uppercase text-stone-500">
                      {t("Officiellt Swish-nummer", "Official Swish Number")}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopySwish}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal-800 hover:text-teal-900"
                    >
                      {copiedSwish ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-teal-600" />
                          <span>{t("Kopierat!", "Copied!")}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>123 456 78 90</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setSwishOpen(true)}
                      className="flex-1 py-3 px-5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs sm:text-sm shadow-xs transition active:scale-95 text-center"
                    >
                      {t("Öppna Swish-Gåva", "Give with Swish")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSwishOpen(true)}
                      className="py-3 px-5 rounded-xl border border-stone-300 hover:border-teal-600 text-stone-800 font-semibold text-xs sm:text-sm bg-white transition active:scale-95"
                    >
                      Bankgiro: 512-3456
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-stone-500 text-xs">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>
                    {t(
                      "Registrerad ideell förening (802557-4883) i Göteborg. Full transparens.",
                      "Registered non-profit association (802557-4883) in Gothenburg. Full transparency."
                    )}
                  </span>
                </div>
              </div>

              {/* Confidential Prayer Intake (5 cols) */}
              <div
                className="lg:col-span-5 bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-10 shadow-xs"
                id="prayer"
              >
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-800">
                  {t("SJÄLAVÅRD & FÖRBÖN", "PASTORAL CARE & PRAYER")}
                </span>
                <h3 className="text-2xl font-extrabold tracking-tight text-stone-900 mt-2 mb-2">
                  {t("Behöver du Bön?", "Need Prayer?")}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                  {t(
                    "Vårt pastorala förbönsteam ber dagligen under fullständig tystnadsplikt och GDPR Artikel 9.",
                    "Our prayer team intercedes daily with complete pastoral discretion and strict GDPR Article 9 privacy."
                  )}
                </p>

                {prayerSubmitted ? (
                  <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3">
                    <ShieldCheck className="w-8 h-8 text-teal-700 mx-auto" />
                    <h4 className="font-bold text-stone-900 text-base">
                      {t("Vi Ber För Dig", "We Are Praying For You")}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      {t(
                        "Ditt böneämne har mottagits i förtroende och överlämnats till vårt pastorala team.",
                        "Your request has been received with deep care and entrusted to our prayer ministers."
                      )}
                    </p>
                    <button
                      type="button"
                      onClick={() => setPrayerSubmitted(false)}
                      className="text-xs font-bold text-teal-800 hover:underline pt-2 block mx-auto"
                    >
                      {t("Skicka ett nytt böneämne", "Send another prayer request")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePrayerSubmit} className="space-y-4">
                    {prayerError && (
                      <div className="p-3 rounded-xl bg-red-50 text-red-800 text-xs font-medium">
                        {prayerError}
                      </div>
                    )}

                    <div>
                      <input
                        value={prayerName}
                        onChange={(e) => setPrayerName(e.target.value)}
                        placeholder={t("Ditt namn (valfritt)", "Your name (optional)")}
                        type="text"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-teal-600 py-3 px-4 transition"
                      />
                    </div>

                    <div>
                      <input
                        value={prayerEmail}
                        onChange={(e) => setPrayerEmail(e.target.value)}
                        placeholder={t("E-post (valfritt för personligt svar)", "Email (optional for personal reply)")}
                        type="email"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-teal-600 py-3 px-4 transition"
                      />
                    </div>

                    <div>
                      <textarea
                        required
                        rows={3}
                        value={prayerRequest}
                        onChange={(e) => setPrayerRequest(e.target.value)}
                        placeholder={t(
                          "Vad ligger på ditt hjärta? Vi står med dig i tro...",
                          "What is on your heart? We stand with you in faith..."
                        )}
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-teal-600 py-3 px-4 transition resize-none font-sans"
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-2 pt-1 text-xs text-stone-500">
                      <input
                        id="confidential"
                        type="checkbox"
                        checked={confidential}
                        onChange={(e) => setConfidential(e.target.checked)}
                        className="rounded text-teal-600 focus:ring-teal-500 border-stone-300 h-4 w-4 mt-0.5"
                      />
                      <label htmlFor="confidential" className="cursor-pointer font-light leading-normal">
                        {t(
                          "Behandla konfidentiellt enligt GDPR Artikel 9 (delas ej offentligt).",
                          "Process confidentially under GDPR Article 9 (never shared publicly)."
                        )}
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={prayerSubmitting}
                      className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm py-3.5 rounded-xl transition duration-150 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>
                        {prayerSubmitting
                          ? t("Skickar bön...", "Submitting...")
                          : t("Skicka Böneämne i Förtroende", "Send Prayer Request")}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. PARTNER CHURCHES: Dignified Civic Unity                                */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-stone-200/80" id="partners">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-stone-500 mb-6 block">
              {t(
                "FÖRENADE MED ÖVER 40 FÖRSAMLINGAR I VÄSTSVERIGE",
                "UNITED WITH OVER 40 CONGREGATIONS IN WEST SWEDEN"
              )}
            </span>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-10 text-stone-600 font-medium text-sm sm:text-base">
              <span className="hover:text-stone-900 transition-colors">Smyrna Göteborg</span>
              <span className="text-stone-300">•</span>
              <span className="hover:text-stone-900 transition-colors">Betlehemskyrkan</span>
              <span className="text-stone-300">•</span>
              <span className="hover:text-stone-900 transition-colors">Fiskebäcks Missionskyrka</span>
              <span className="text-stone-300">•</span>
              <span className="hover:text-stone-900 transition-colors">Sankt Pauli Församling</span>
              <span className="text-stone-300">•</span>
              <span className="hover:text-stone-900 transition-colors">Frälsningsarmén</span>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setVolunteerOpen(true)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-teal-800 hover:text-teal-900 uppercase font-mono tracking-wider"
              >
                <span>
                  {t(
                    "Vill din församling samverka? Bli partnerförsamling",
                    "Does your church wish to collaborate? Partner with us"
                  )}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. VOLUNTEER CALLOUT: Warm & Dignified                                    */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-[#F5F4EE] text-center">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-800 mb-3 block">
              {t("ENGAGERA DIG • VOLONTÄRTEAM", "GET INVOLVED • VOLUNTEER TEAMS")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 mb-3">
              {t("Vill du vara med och tjäna bakom kulisserna?", "Want to serve behind the scenes?")}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light max-w-xl mx-auto mb-8 leading-relaxed">
              {t(
                "Vi välkomnar dig som vill hjälpa till med värdskap, ljud/ljus, foto/media, scenbygge eller förbön. Vi erbjuder varm kristen gemenskap och trygg handledning.",
                "Join our hospitality, audio/lighting, photo/media, stage, or prayer teams. We offer warm Christian fellowship and thoughtful mentorship."
              )}
            </p>
            <button
              type="button"
              onClick={() => setVolunteerOpen(true)}
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-medium px-8 py-3.5 rounded-full transition duration-150 shadow-xs active:scale-95 text-sm sm:text-base"
            >
              <Users className="w-4 h-4" />
              <span>{t("Ansök som Volontär", "Apply as a Volunteer")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive System Modals */}
      <RSVPModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
      <SwishModal isOpen={swishOpen} onClose={() => setSwishOpen(false)} />
      <PrayerModal isOpen={prayerOpen} onClose={() => setPrayerOpen(false)} />
      <VolunteerModal isOpen={volunteerOpen} onClose={() => setVolunteerOpen(false)} />
    </div>
  );
}

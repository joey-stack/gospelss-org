"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FirstTimerPillars } from "@/components/home/FirstTimerPillars";
import { WeeklyRhythm } from "@/components/home/WeeklyRhythm";
import { PathwaySteps } from "@/components/home/PathwaySteps";
import { StoryFacePicker } from "@/components/home/StoryFacePicker";
import { FirstTimerFAQ } from "@/components/home/FirstTimerFAQ";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Play,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  ShieldCheck,
  Users,
  Send,
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();
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
      dayBadge: "18",
      monthBadge: t("OKT", "OCT"),
      location: t("Smyrna Frihamnskyrkan, Göteborg", "Smyrna Frihamnen, Gothenburg"),
      attendees: t("340 Förbokade", "340 RSVP'd"),
      description: t(
        "En djup kväll av akustisk tillbedjan, nattvardsgemenskap och förbön för Göteborgs andliga förnyelse. Öppen och fri entré för alla åldrar.",
        "An intimate evening of acoustic praise, communion, and citywide prayer for Gothenburg's renewal. Open and free admission for all ages."
      ),
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85",
      link: "/events/holy-spirit-worship",
      action: "rsvp",
    },
    {
      id: "goteborgs-lovsangskonsert-2027",
      title: "Göteborgs Lovsångskonsert 2027",
      category: "outdoor",
      categoryLabel: t("Torg & Utomhus", "Outdoor Plaza"),
      date: t("Lördag 12 Juni 2027 • 15:00", "Saturday June 12, 2027 • 15:00"),
      dayBadge: "12",
      monthBadge: t("JUN", "JUN"),
      location: t("Götaplatsen / Frihamnspiren", "Götaplatsen / Harbor Pier"),
      attendees: t("1 200 Förväntade", "1,200 Expected"),
      description: t(
        "Västsveriges största öppna gospelkonsert i det offentliga rummet. Förenade körer, blåsensemble och evangelium mitt i stadens hjärta.",
        "West Sweden's largest open-air gospel concert in the public square. United choir, brass ensemble, and hope in the heart of the city."
      ),
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85",
      link: "/events",
      action: "details",
    },
    {
      id: "vastsvenska-pastorsnatverket",
      title: t("Ekumeniskt Pastors- & Ledardygn", "Ecumenical Leadership Summit"),
      category: "conferences",
      categoryLabel: t("Konferens", "Conference"),
      date: t("Torsdag 19 Nov 2026 • 09:30", "Thursday Nov 19, 2026 • 09:30"),
      dayBadge: "19",
      monthBadge: t("NOV", "NOV"),
      location: t("Betlehemskyrkan, Vasastan", "Betlehemskyrkan, Gothenburg"),
      attendees: t("85 Församlingsledare", "85 Church Leaders"),
      description: t(
        "Ledardag kring samverkan, gemensam bön och musikmission över samfundsgränser i Västra Götaland.",
        "Leadership retreat focusing on cross-denominational unity, citywide prayer, and music outreach across West Sweden."
      ),
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
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
        {/* 2. Hero Section: Architectural Pacing & Sacred Authority */}
        <HeroSection
          onOpenRSVP={() => setRsvpOpen(true)}
          onOpenSwish={() => setSwishOpen(true)}
          onOpenPrayer={() => setPrayerOpen(true)}
        />

        {/* 3. First-Timer Pillar Bar: Dispelling Arrival Anxiety (Morrow Touch) */}
        <FirstTimerPillars />

        {/* 4. Weekly Rhythm Cadence: Mon-Sun Across Gothenburg */}
        <WeeklyRhythm />

        {/* 5. Upcoming Gatherings: High-Taste Editorial Grid */}
        <section className="py-16 sm:py-20 bg-white border-b border-stone-200/80" id="events">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-800">
                  {t("STADSKALENDER 2026/2027", "CITY CALENDAR 2026/2027")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 mt-2">
                  {t("Kommande Samlingar & Konserter", "Upcoming Gatherings & City Concerts")}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light max-w-xl">
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
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                      eventCategory === tab.id
                        ? "bg-teal-700 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Event Cards Grid with Design System Date Badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <article
                  key={event.id}
                  className="bg-[#FAF9F5] rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition duration-300 group flex flex-col justify-between"
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

                      {/* Design System Date Badge */}
                      <div className="absolute top-3 left-3 bg-teal-800 text-white rounded-xl px-2.5 py-1.5 text-center min-w-[54px] shadow-sm">
                        <strong className="block font-sans text-lg font-bold leading-none">
                          {event.dayBadge}
                        </strong>
                        <small className="block font-mono text-[9px] uppercase tracking-wider font-semibold text-teal-100 mt-0.5">
                          {event.monthBadge}
                        </small>
                      </div>

                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-stone-200 font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full border border-white/10">
                        {event.categoryLabel}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-teal-700" />
                        <span>{event.location}</span>
                      </div>

                      <h3 className="font-bold text-stone-900 text-lg leading-snug group-hover:text-teal-700 transition mb-2">
                        {event.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed font-light">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Row */}
                  <div className="px-5 pb-5 pt-3 border-t border-stone-200/70 flex items-center justify-between text-xs text-stone-500">
                    <span className="font-medium font-mono text-stone-600 text-xs">{event.attendees}</span>
                    <Link
                      href={event.link}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-semibold text-xs transition active:scale-95 shadow-2xs"
                    >
                      <span>{t("Anmäl dig gratis", "RSVP Free")}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Pathway Steps: 01 to 04 Milestones */}
        <PathwaySteps />

        {/* 7. Watch & Listen Multimedia: Midnight Obsidian Surface */}
        <section className="py-16 sm:py-24 bg-[#0F172A] text-white" id="watch-listen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-300">
                  {t("MULTIMEDIA & INSPELNINGAR", "MULTIMEDIA & RECORDINGS")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2">
                  {t("Se & Lyssna", "Watch & Listen")}
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm mt-1.5 font-light max-w-xl">
                  {t(
                    "Konsertinspelningar, intima akustiska sessioner och dokumentära kortfilmer från Göteborgs torg och kyrkor.",
                    "Live concert recordings, acoustic sanctuary sessions, and documentaries from Gothenburg's streets and churches."
                  )}
                </p>
              </div>
              <Link
                href="/watch"
                className="inline-flex items-center gap-1.5 text-teal-300 hover:text-white font-medium text-xs sm:text-sm transition"
              >
                <span>{t("Öppna hela mediearkivet", "Open Full Media Archive")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Featured Showcase Widescreen Player Card */}
            <div className="bg-[#1E293B] rounded-3xl border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
              <div className="lg:col-span-8 relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85"
                  alt="Brunnsparken Live Worship Recording"
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <Link
                  href="/watch"
                  aria-label="Play Concert Recording"
                  className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-teal-500 group-hover:text-stone-950 group-hover:scale-110 transition duration-300 shadow-xl"
                >
                  <Play className="w-6 h-6 fill-current ml-1" />
                </Link>
                <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white font-mono text-[11px] px-2.5 py-1 rounded-md">
                  34:12 Live Master
                </div>
              </div>

              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[#1E293B]">
                <div>
                  <span className="text-[11px] font-mono font-semibold text-teal-300 uppercase tracking-wider block mb-1.5">
                    {t("Live i Brunnsparken", "Live in Brunnsparken")}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {t(
                      "Hela Staden Prisar: Open Air Live",
                      "The Whole City Praises: Open Air Live"
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-4">
                    {t(
                      "Över 30 minuter oavbruten lovsång från Brunnsparken med originalarrangemang, kör, blås och tusentals förbipasserande.",
                      "Over 30 minutes of non-stop worship recorded in central Gothenburg with original gospel arrangements, full choir, and brass."
                    )}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://spotify.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition"
                    >
                      Spotify
                    </a>
                    <a
                      href="https://apple.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition"
                    >
                      Apple Music
                    </a>
                  </div>
                  <Link
                    href="/watch"
                    className="text-teal-300 font-semibold text-xs hover:underline flex items-center gap-1"
                  >
                    <span>{t("Se fler", "Watch more")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Interactive Stories: Face Picker Avatar Selector */}
        <StoryFacePicker />

        {/* 9. First-Timer FAQ: Dispelling Visitor Questions */}
        <FirstTimerFAQ />

        {/* 10. Dual Partnership & Confidential Prayer Form */}
        <section className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-stone-200/80" id="give">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Giving & Kingdom Builders (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-10 shadow-xs">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-800">
                  {t("GIVANDE & STÖD", "GIVING & SUPPORT")}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-stone-900 mt-1.5 mb-2">
                  {t("Bli Kingdom Partner", "Become a Kingdom Partner")}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                  {t(
                    "Alla våra stadskonserter och torginsatser är 100% gratis och öppna för allmänheten. Din månadsgåva finansierar scenhyra, polistillstånd och ungdomslovsångsutbildning.",
                    "100% of our city concerts and public missions are free for everyone. Your gift funds stage logistics, city permits, and training for young gospel artists."
                  )}
                </p>

                {/* Clean Swish Box */}
                <div className="p-5 rounded-2xl bg-[#F5F4EE] border border-stone-200 space-y-3">
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
                      className="flex-1 py-2.5 px-4 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-semibold text-xs sm:text-sm shadow-xs transition active:scale-95 text-center"
                    >
                      {t("Öppna Swish-Gåva", "Give with Swish")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSwishOpen(true)}
                      className="py-2.5 px-4 rounded-xl border border-stone-300 hover:border-teal-700 text-stone-800 font-semibold text-xs sm:text-sm bg-white transition active:scale-95"
                    >
                      Bankgiro: 512-3456
                    </button>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-stone-500 text-xs">
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
                className="lg:col-span-5 bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-10 shadow-xs"
                id="prayer"
              >
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-800">
                  {t("SJÄLAVÅRD & FÖRBÖN", "PASTORAL CARE & PRAYER")}
                </span>
                <h3 className="text-xl font-extrabold tracking-tight text-stone-900 mt-1.5 mb-2">
                  {t("Behöver du Bön?", "Need Prayer?")}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed mb-4">
                  {t(
                    "Vårt pastorala förbönsteam ber dagligen under fullständig tystnadsplikt och GDPR Artikel 9.",
                    "Our prayer team intercedes daily with complete pastoral discretion and strict GDPR Article 9 privacy."
                  )}
                </p>

                {prayerSubmitted ? (
                  <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-2.5">
                    <ShieldCheck className="w-7 h-7 text-teal-700 mx-auto" />
                    <h4 className="font-bold text-stone-900 text-sm">
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
                      className="text-xs font-bold text-teal-800 hover:underline pt-1 block mx-auto"
                    >
                      {t("Skicka ett nytt böneämne", "Send another prayer request")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePrayerSubmit} className="space-y-3">
                    {prayerError && (
                      <div className="p-2.5 rounded-lg bg-red-50 text-red-800 text-xs font-medium">
                        {prayerError}
                      </div>
                    )}

                    <div>
                      <input
                        value={prayerName}
                        onChange={(e) => setPrayerName(e.target.value)}
                        placeholder={t("Ditt namn (valfritt)", "Your name (optional)")}
                        type="text"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-teal-600 py-2.5 px-3.5 transition"
                      />
                    </div>

                    <div>
                      <input
                        value={prayerEmail}
                        onChange={(e) => setPrayerEmail(e.target.value)}
                        placeholder={t("E-post (valfritt för personligt svar)", "Email (optional for personal reply)")}
                        type="email"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-teal-600 py-2.5 px-3.5 transition"
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
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-teal-600 py-2.5 px-3.5 transition resize-none font-sans"
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-2 pt-0.5 text-xs text-stone-500">
                      <input
                        id="confidential"
                        type="checkbox"
                        checked={confidential}
                        onChange={(e) => setConfidential(e.target.checked)}
                        className="rounded text-teal-600 focus:ring-teal-500 border-stone-300 h-3.5 w-3.5 mt-0.5"
                      />
                      <label htmlFor="confidential" className="cursor-pointer font-light leading-normal text-[11px]">
                        {t(
                          "Behandla konfidentiellt enligt GDPR Artikel 9 (delas ej offentligt).",
                          "Process confidentially under GDPR Article 9 (never shared publicly)."
                        )}
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={prayerSubmitting}
                      className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm py-2.5 rounded-xl transition duration-150 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
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

        {/* 11. Partner Churches & Volunteer Callout */}
        <section className="py-14 sm:py-16 bg-white border-b border-stone-200/80" id="partners">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-stone-500 mb-4 block">
              {t(
                "FÖRENADE MED ÖVER 40 FÖRSAMLINGAR I VÄSTSVERIGE",
                "UNITED WITH OVER 40 CONGREGATIONS IN WEST SWEDEN"
              )}
            </span>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-8 text-stone-600 font-medium text-xs sm:text-sm">
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

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setVolunteerOpen(true)}
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-600 text-white font-medium px-5 py-2.5 rounded-full transition duration-150 shadow-xs active:scale-95 text-xs sm:text-sm"
              >
                <Users className="w-4 h-4" />
                <span>{t("Engagera dig som Volontär", "Join Volunteer Team")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <Link
                href="/partners"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-stone-300 hover:border-teal-700 text-stone-800 text-xs sm:text-sm font-semibold transition"
              >
                <span>
                  {t(
                    "Bli Partnerförsamling",
                    "Partner Church Inquiry"
                  )}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
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

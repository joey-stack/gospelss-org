"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Bookmark,
  Share2,
  Music,
  Video,
  Headphones,
  Navigation,
  ExternalLink,
  ChevronRight,
  Flame,
  Coffee,
  HeartHandshake,
  Mic,
  Copy,
  Check,
  PlayCircle,
  ShieldCheck,
  Info,
  Timer,
  CalendarPlus,
  ArrowRight,
  Sparkles,
  Accessibility,
  Radio,
  Speaker,
  Volume2,
  Check as CheckIcon,
  Ticket,
} from "lucide-react";

export default function HolySpiritWorshipExactPage() {
  const { language, t } = useLanguage();
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  // RSVP Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [seatCount, setSeatCount] = useState("2");
  const [homeChurch, setHomeChurch] = useState("");
  const [wheelchair, setWheelchair] = useState(false);
  const [tSlinga, setTSlinga] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  // Swish Giving State
  const [selectedAmount, setSelectedAmount] = useState("100 kr");
  const [copiedSwish, setCopiedSwish] = useState(false);

  const handleCopySwish = () => {
    navigator.clipboard?.writeText("1234567890");
    setCopiedSwish(true);
    setTimeout(() => setCopiedSwish(false), 2000);
  };

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: "holy-spirit-worship-2026",
          name: fullName,
          email,
          seats: parseInt(seatCount, 10),
          homeChurch,
          wheelchair,
          tSlinga,
        }),
      });
    } catch {
      // Demo fallback
    }
    setSubmitting(false);
    setConfirmed(true);
  };

  const handleDownloadCalendar = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//GOSPELS//Holy Spirit Worship 2026//EN",
      "BEGIN:VEVENT",
      "SUMMARY:Holy Spirit Worship 2026 — GOSPELS Gothenburg",
      "DESCRIPTION:Gothenburg City-Wide Praise Night in Frihamnen Sanctuary Hall. 50-voice choir, orchestral anthems, and Nordic fika.",
      "LOCATION:Frihamnen Sanctuary Hall, Södra Frihamnspiren 1, Göteborg, Sweden",
      "DTSTART:20261018T160000Z",
      "DTEND:20261018T190000Z",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "holy-spirit-worship-2026.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-background text-on-surface antialiased font-body-md text-body-md min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container w-full">
      <Navbar
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
        onOpenPrayer={() => setPrayerOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      {/* ================= SUB-HEADER BREADCRUMB & LIVE ACCESSIBILITY STATUS ================= */}
      <div className="bg-surface-container-low border-b border-outline-variant/30 pt-24 pb-3 sm:pt-28 sm:pb-3 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant overflow-x-auto whitespace-nowrap">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span>{t("Göteborg, Sverige", "Gothenburg, Sweden")}</span>
            <span className="text-outline-variant">•</span>
            <Link href="/events" className="hover:text-primary transition-colors">
              {t("Stadens Samlingar & Lovsångsarkiv", "Citywide Gatherings & Worship Archive")}
            </Link>
            <span className="text-outline-variant">›</span>
            <span className="font-bold text-on-surface">Holy Spirit Worship 2026</span>
          </div>
          <div className="flex items-center gap-4 text-label-sm font-label-sm">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span>{t("Sanctuary Ljud & Sändning Aktiv", "Live Sanctuary Sound & Broadcast Active")}</span>
            </div>
            <span className="text-outline-variant/60 hidden sm:inline">•</span>
            <div className="hidden sm:flex items-center gap-1.5 text-on-surface-variant">
              <Radio className="w-4 h-4 text-primary" />
              <span>{t("Aktiv för T-Slinga (Hörslinga)", "Live for T-Audio loop (T-Slinga)")}</span>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 w-full">
        {/* ================= 1. CINEMATIC FULL-WIDTH HERO & METADATA SECTION (100VH) ================= */}
        <section
          className="relative overflow-hidden bg-[#0b1320] text-surface-container-lowest border-b border-white/10 shadow-2xl min-h-screen min-h-[100dvh] flex items-center w-full"
          id="hero"
        >
          {/* Cinematic Background Image & Lighting Overlays */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida/AEtjO1XucE5DeB4Ucnkz-KYD0OdRKeKe8EcJFIskmMLmZ6kqzg62_wCW_kwkW7CC9-ns9xG-y0p0yRLeJwzwLqr2-1kEcQne1vfgbMqOkK6YC5QhQEntVVDHrvCi1hH5n08dotSTBWfXr_-1y-Oy3_yVzq9F0Z84zX9sjXt5Y4ub1taVxXCBLxizK47w4Y27bqMUP9KKTqBmqBiBxELkgNlXT0muAsERa2SCKGrzq6Dep77ISUnYA-mKhlrO1PE"
              alt="Dramatic contemporary Christian gospel worship night in Gothenburg"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1320] via-[#0b1320]/80 to-[#0b1320]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1320]/95 via-[#0b1320]/75 to-transparent"></div>
          </div>

          {/* Ambient glowing orbs */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl pointer-events-none"></div>

          {/* Main Content Container */}
          <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 lg:py-20">
            <div className="max-w-5xl space-y-6 sm:space-y-8">
              {/* Category & Date Badges */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/20 text-secondary-fixed border border-secondary-fixed/30 text-label-sm font-label-sm font-bold tracking-wide uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                {t("Göteborgs Gemensamma Lovsångskväll", "Gothenburg City-Wide Praise Night")}
              </span>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-primary-fixed text-label-sm font-label-sm font-semibold">
                <Calendar className="w-4 h-4 text-primary-container" />
                <span>{t("SÖN, 18 OKT 2026", "SUN, 18 OCT 2026")}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-300 text-label-sm font-label-sm">
                <MapPin className="w-4 h-4 text-primary-container" />
                <span>{t("Frihamnen Sanctuary Hall, Göteborg", "Frihamnen Sanctuary Hall, Gothenburg")}</span>
              </div>
            </div>

            {/* Headline & Subtitle */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display-hero">
                Holy Spirit Worship <span className="text-primary-container font-extrabold">2026</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-body-md leading-relaxed max-w-3xl">
                {t(
                  "En ekumenisk kväll av spontan lovsång, orkestrerade gospelhymner och förbön i Frihamnens historiska hamnmiljö. Förenar över 25 församlingar, ungdomskörer och sökande från hela Västsverige under en gemensam bekännelse.",
                  "An all-denominational evening of spontaneous praise, orchestral gospel anthems, and extended ministry in the historic shipyard district of Frihamnen. Uniting over 25 fellowship churches, youth choirs, and seekers from across Western Sweden under one unified confession."
                )}
              </p>
            </div>

            {/* Quick Logistics Highlights Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300 border-y border-white/10 py-3.5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-container" />
                <span className="font-medium text-white">{t("Dörrar 17:00 CEST", "Doors 17:00 CEST")}</span>
                <span className="text-slate-400">• {t("Lovsång 18:00 – 21:00", "Worship 18:00 – 21:00")}</span>
              </div>
              <div className="hidden sm:inline text-white/20">|</div>
              <div className="flex items-center gap-2">
                <Ticket className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-medium">{t("100% Fri Entré", "100% Free Admission")}</span>
                <span className="text-slate-400">({t("Föranmälan Krävs", "RSVP Required")})</span>
              </div>
              <div className="hidden sm:inline text-white/20">|</div>
              <div className="flex items-center gap-2">
                <Accessibility className="w-4 h-4 text-primary-container" />
                <span>{t("T-Slinga & Tillgänglighetsanpassat", "T-Audio Loop & Step-Free Access")}</span>
              </div>
            </div>

            {/* Real-Time Capacity & Action Bar */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-6 w-full shadow-xl space-y-4 sm:space-y-5">
              {/* Capacity Progress Indicator */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-label-sm font-label-sm">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Users className="w-4 h-4 text-primary-container" />
                    <span className="font-semibold">{t("Sanctuary Kapacitet Live", "Live Sanctuary Capacity")}</span>
                  </div>
                  <span className="text-primary-fixed font-bold text-sm">
                    {t("340 av 500 platser reserverade (68%)", "340 of 500 spots reserved (68%)")}
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-white/5">
                  <div className="bg-primary-container h-full rounded-full transition-all duration-1000" style={{ width: "68%" }}></div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{t("Stora Salen Golvplatser + Läktare", "Main Sanctuary Floor Seating + Balcony")}</span>
                  <span className="text-secondary-fixed font-medium">
                    {t("Begränsat antal platser kvar", "Limited Seats Remaining")}
                  </span>
                </div>
              </div>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <a
                  className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-bold text-label-md font-label-md px-6 py-3.5 rounded-xl transition duration-150 active:scale-95 shadow-lg"
                  href="#rsvp"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t("Boka Din Gratisplats", "Reserve Your Free Seat")}</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 transition duration-150 px-5 py-3.5 rounded-xl font-semibold text-label-md font-label-md shadow-sm"
                  href="#schedule"
                >
                  <Clock className="w-4 h-4 text-primary-container" />
                  <span>{t("Se Hålltider & Program", "View Run of Show")}</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white transition duration-150 px-4 py-3.5 rounded-xl font-medium text-label-md font-label-md"
                  href="#transit"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t("Hitta Hit & Vägbeskrivning", "Transit & Directions")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Content sections wrapper with standard padding */}
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 space-y-16">

        {/* ================= 2. RUN OF SHOW & SCHEDULE + QUICK RSVP CARD ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full" id="schedule">
          {/* Left: Run of Show Timeline (7 Cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-outline-variant/40 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
              <div>
                <span className="text-label-sm font-label-sm text-primary uppercase font-bold tracking-wider">
                  {t("Liturgi & Programflöde", "Liturgy & Flow")}
                </span>
                <h2 className="text-headline-md font-headline-md text-on-surface">
                  {t("Hålltider & Programöversikt", "Run of Show & Schedule")}
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">
                <Timer className="w-4 h-4 text-primary" />
                <span>{t("4 timmar total samlingstid", "4h Total Gathering Duration")}</span>
              </span>
            </div>

            <div className="relative pl-6 space-y-7 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-outline-variant/60">
              {/* Item 1: 17:00 */}
              <div className="relative flex items-start gap-4">
                <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-primary-container flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                </div>
                <div className="flex-1 bg-surface-container-low/60 rounded-2xl p-4 border border-outline-variant/30">
                  <div className="flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-primary font-bold font-mono">17:00 CEST</span>
                    <span className="text-body-sm font-body-sm text-on-surface-variant">60 min</span>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1">
                    {t("Dörrarna öppnas & Sanctuary-preludium", "Doors Open & Sanctuary Prelude")}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    {t(
                      "Stilla ankomst i kyrksalen med akustiska gitarr- och pianomeditationer samt bönebrevlådor öppna för förbön.",
                      "Quiet sanctuary arrival, acoustic guitar and piano meditations, and prayer requests deposited at prayer boxes."
                    )}
                  </p>
                </div>
              </div>

              {/* Item 2: 18:00 (Highlight) */}
              <div className="relative flex items-start gap-4">
                <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <Music className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1 bg-surface-container-low/60 rounded-2xl p-4 border-l-4 border-l-primary-container border-y border-r border-outline-variant/30">
                  <div className="flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-primary font-bold font-mono">18:00 CEST</span>
                    <span className="text-body-sm font-body-sm text-on-surface-variant">75 min</span>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 flex items-center gap-2 flex-wrap">
                    <span>{t("Gemensam Körlovsång & Nordiska Hymner", "United Choral Worship & Nordic Anthems")}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary">
                      {t("HUVUDSAMLING", "CORE SERVICE")}
                    </span>
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    {t(
                      "50-stämmig gemensam kör och kompband som förenar klassiska svenska väckelsesånger med kraftfull gospelpris.",
                      "50-voice collective choir and rhythm section blending classic Swedish revival hymns with energetic gospel praise."
                    )}
                  </p>
                </div>
              </div>

              {/* Item 3: 19:15 */}
              <div className="relative flex items-start gap-4">
                <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-primary-container flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                </div>
                <div className="flex-1 bg-surface-container-low/60 rounded-2xl p-4 border border-outline-variant/30">
                  <div className="flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-primary font-bold font-mono">19:15 CEST</span>
                    <span className="text-body-sm font-body-sm text-on-surface-variant">30 min</span>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1">
                    {t("Förkunnelse & Välsignelse över Staden", "Keynote Word & Citywide Blessing")}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    {t(
                      "Kort Kristus-centrerat budskap om enhet och andlig förnyelse i Göteborg av Pastor Samuel Mensah.",
                      "Short Christ-centered message on civic unity and spiritual renewal across Gothenburg by Pastor Samuel Mensah."
                    )}
                  </p>
                </div>
              </div>

              {/* Item 4: 19:45 */}
              <div className="relative flex items-start gap-4">
                <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-primary-container flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                </div>
                <div className="flex-1 bg-surface-container-low/60 rounded-2xl p-4 border border-outline-variant/30">
                  <div className="flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-primary font-bold font-mono">19:45 CEST</span>
                    <span className="text-body-sm font-body-sm text-on-surface-variant">60 min</span>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1">
                    {t("Spontan Tillbedjan & Personlig Förbön", "Spontaneous Adoration & Prayer Ministry")}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    {t(
                      "Öppet altare med 14 utbildade förbönsteam runt kyrkorummet. Fullständig tystnadsplikt och alla välkomna.",
                      "Open altar ministry with 14 trained intercessory prayer teams stationed around the sanctuary perimeter. All traditions welcome."
                    )}
                  </p>
                </div>
              </div>

              {/* Item 5: 20:45 */}
              <div className="relative flex items-start gap-4">
                <div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-lowest border-2 border-primary-container flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                </div>
                <div className="flex-1 bg-surface-container-low/60 rounded-2xl p-4 border border-outline-variant/30">
                  <div className="flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-primary font-bold font-mono">20:45 CEST</span>
                    <span className="text-body-sm font-body-sm text-on-surface-variant">
                      {t("Gemenskap & Fika", "Social & Fika")}
                    </span>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1">
                    {t("Gemenskap & Nordiskt Kyrkfika", "Fellowship & Nordic Kyrkfika")}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    {t(
                      "Varma kanelbullar, rättvisemärkt kaffe och varm gemenskap i kyrkans foajé.",
                      "Warm cinnamon buns (kanelbullar), fair-trade pour-over coffee, and community connection lounge in the church atrium."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Secure Your Free Seat RSVP Card (5 Cols Sticky) */}
          <div
            className="lg:col-span-5 bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-outline-variant/40 shadow-sm sticky top-28 space-y-6"
            id="rsvp"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-semibold mb-2">
                {t("Kostnadsfri Föranmälan", "Instant Free Reservation")}
              </span>
              <h2 className="text-headline-md font-headline-md text-on-surface font-bold">
                {t("Boka Din Gratisplats", "Secure Your Free Seat")}
              </h2>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                {t(
                  "Allmän entré är 100% gratis med bekräftad fribiljett. Biljetter skickas direkt via E-post.",
                  "General admission is 100% free with confirmed reservation. Passes sent immediately via Email."
                )}
              </p>
            </div>

            {confirmed ? (
              <div className="p-6 rounded-2xl bg-primary-container/10 border border-primary-container text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
                <h4 className="font-headline-sm font-bold text-on-surface">
                  {t("Plats Reserverad!", "Reservation Confirmed!")}
                </h4>
                <p className="text-body-sm text-on-surface-variant">
                  {t(
                    `Tack, ${fullName}! En bekräftelse för ${seatCount} platser har registrerats för ${email}.`,
                    `Thank you, ${fullName}! A confirmation pass for ${seatCount} seats has been registered for ${email}.`
                  )}
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={handleDownloadCalendar}
                    className="w-full py-2.5 rounded-xl bg-primary-container text-white font-bold text-sm shadow-xs flex items-center justify-center gap-2 hover:bg-primary transition"
                  >
                    <CalendarPlus className="w-4 h-4" />
                    <span>{t("Lägg till i kalender (.ics)", "Add to Calendar (.ics)")}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmed(false)}
                    className="text-xs text-primary font-semibold hover:underline"
                  >
                    {t("Boka för ytterligare ett sällskap", "Book for another group")}
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleRsvpSubmit}>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5 font-semibold">
                    {t("För- och efternamn *", "Full Name *")}
                  </label>
                  <input
                    className="w-full rounded-xl border-outline-variant text-body-md font-body-md py-3 px-4 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all bg-surface-container-low border"
                    placeholder={t("t.ex. Linnea Lindqvist", "e.g. Linnea Lindqvist")}
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface mb-1.5 font-semibold">
                    {t("E-postadress *", "Email Address *")}
                  </label>
                  <input
                    className="w-full rounded-xl border-outline-variant text-body-md font-body-md py-3 px-4 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all bg-surface-container-low border"
                    placeholder="linnea@example.se"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface mb-1.5 font-semibold">
                      {t("Antal Platser", "Seat Count")}
                    </label>
                    <select
                      className="w-full rounded-xl border-outline-variant text-body-md font-body-md py-3 px-3 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all bg-surface-container-low border"
                      value={seatCount}
                      onChange={(e) => setSeatCount(e.target.value)}
                    >
                      <option value="1">{t("1 Person", "1 Person")}</option>
                      <option value="2">{t("2 Personer", "2 Persons")}</option>
                      <option value="3">{t("3 Personer", "3 Persons")}</option>
                      <option value="4">{t("4 Personer", "4 Persons")}</option>
                      <option value="5">{t("5 Personer", "5 Persons")}</option>
                      <option value="6">{t("6 Personer (Max Sällskap)", "6 Persons (Max Delegation)")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface mb-1.5 font-semibold">
                      {t("Hemförsamling", "Home Church")}
                    </label>
                    <input
                      className="w-full rounded-xl border-outline-variant text-body-md font-body-md py-3 px-3 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all bg-surface-container-low border"
                      placeholder={t("t.ex. Smyrna, Betlehem eller Sökare", "e.g. Smyrna, Hillsong, or Seeker")}
                      type="text"
                      value={homeChurch}
                      onChange={(e) => setHomeChurch(e.target.value)}
                    />
                  </div>
                </div>
                <div className="pt-2 space-y-2.5">
                  <label className="flex items-center gap-2.5 text-body-sm font-body-sm text-on-surface-variant cursor-pointer">
                    <input
                      className="rounded border-outline text-primary focus:ring-primary h-4 w-4"
                      type="checkbox"
                      checked={wheelchair}
                      onChange={(e) => setWheelchair(e.target.checked)}
                    />
                    <span>{t("Rullstolsplats / Tillgänglighetsanpassad sittplats", "Wheelchair access / Accessible seating")}</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-body-sm font-body-sm text-on-surface-variant cursor-pointer">
                    <input
                      className="rounded border-outline text-primary focus:ring-primary h-4 w-4"
                      type="checkbox"
                      checked={tSlinga}
                      onChange={(e) => setTSlinga(e.target.checked)}
                    />
                    <span>{t("Hörslinga (T-Slinga) mottagarstöd", "Hearing loop (T-Audio / T-Slinga) receiver support")}</span>
                  </label>
                </div>
                <div className="pt-2">
                  <button
                    className="w-full py-3.5 px-6 rounded-xl bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition duration-150 font-bold text-label-md font-label-md shadow-md active:scale-95 flex items-center justify-center gap-2"
                    type="submit"
                    disabled={submitting}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{submitting ? t("Bekräftar...", "Confirming...") : t("Bekräfta Gratisbokning", "Confirm Free Reservation")}</span>
                  </button>
                </div>

                {/* Calendar Sync */}
                <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between text-xs text-on-surface-variant">
                  <span>{t("Lägg till i kalender:", "Add to Calendar:")}</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleDownloadCalendar}
                      className="px-2.5 py-1 rounded-md bg-surface-container-low border border-outline-variant/50 hover:bg-surface-container transition-colors text-on-surface font-medium"
                    >
                      Apple
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadCalendar}
                      className="px-2.5 py-1 rounded-md bg-surface-container-low border border-outline-variant/50 hover:bg-surface-container transition-colors text-on-surface font-medium"
                    >
                      Google
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadCalendar}
                      className="px-2.5 py-1 rounded-md bg-surface-container-low border border-outline-variant/50 hover:bg-surface-container transition-colors text-on-surface font-medium"
                    >
                      Outlook
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ================= 3. WHAT TO EXPECT (3-Pillar Cards) ================= */}
        <section className="space-y-6 w-full">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-label-sm font-label-sm text-primary uppercase font-bold tracking-wider">
              {t("Samlingens Hjärta", "Heart of the Gathering")}
            </span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mt-1 font-bold">
              {t("Vad du kan Förvänta dig", "What to Expect")}
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-2">
              {t(
                "Förankrad i liturgiskt djup och modern gospelsång, varje del av samlingen är formad för stillhet och Guds närvaro.",
                "Rooted in ancient liturgical depth and modern gospel vibrancy, every component of the gathering is designed for unhurried presence."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-surface-container-lowest rounded-3xl p-7 border border-outline-variant/30 hover:border-primary-container/60 hover:shadow-lg transition duration-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 text-secondary flex items-center justify-center">
                <Speaker className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                {t("Djup Lovsång & Körhymner", "Deep Worship & Choral Anthems")}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                {t(
                  "En samlad kör med sångare från Smyrna, Betlehemskyrkan och Hillsong Göteborg som framför tidlösa koraler, nordisk psalmodi och spontana harmonier.",
                  "A combined choir of vocalists from Smyrna, Betlehemskyrkan, and Hillsong Göteborg delivering timeless chorales, Nordic psalmody, and spontaneous harmony."
                )}
              </p>
              <ul className="text-body-sm font-body-sm text-on-surface-variant/80 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary shrink-0" />
                  <span>{t("Live blås, rytmsektion & kammarmusik", "Live brass, rhythm section & chamber strings")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary shrink-0" />
                  <span>{t("Öppen deltagande gemensam lovsång", "Open participatory corporate praise")}</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-surface-container-lowest rounded-3xl p-7 border border-outline-variant/30 hover:border-primary-container/60 hover:shadow-lg transition duration-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 text-secondary flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                {t("Förbön & Personlig Omsorg", "Intercessory Prayer & Ministry")}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                {t(
                  "Stilla förbönsstationer för personlig bön, fysiskt helande och uppmuntran bemannade av erfarna pastorer och ledare från samverkande kyrkor.",
                  "Quiet perimeter stations for personal prayer, physical healing, and spiritual encouragement staffed by vetted pastors and elders from partner congregations."
                )}
              </p>
              <ul className="text-body-sm font-body-sm text-on-surface-variant/80 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary shrink-0" />
                  <span>{t("Konfidentiell och icke-dömande miljö", "Confidential, non-judgmental space")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary shrink-0" />
                  <span>{t("Tvåspråkiga bönateam (SV & EN)", "Bilingual ministry teams (SV & EN)")}</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-surface-container-lowest rounded-3xl p-7 border border-outline-variant/30 hover:border-primary-container/60 hover:shadow-lg transition duration-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/60 text-secondary flex items-center justify-center">
                <Coffee className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                {t("Levande Ord & Nordiskt Kyrkfika", "Living Word & Nordic Kyrkfika")}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                {t(
                  "Ett fokuserat Kristus-budskap grundat i Ordet följt av Göteborgs klassiska kyrkfika för äkta gemenskap.",
                  "A concise, Christ-centered message grounded in scripture followed by Gothenburg’s signature post-service coffee table to foster authentic lifelong community."
                )}
              </p>
              <ul className="text-body-sm font-body-sm text-on-surface-variant/80 space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary shrink-0" />
                  <span>{t("Nybryggt kaffe från lokala rosterier", "Specialty roast coffee from Ringön roasteries")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary shrink-0" />
                  <span>{t("Färska kanelbullar, glutenfria & veganska val", "Fresh cinnamon buns, gluten-free & vegan options")}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= 4. SCRIPTURE ACCENT QUOTE BLOCK ================= */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 lg:p-12 border-l-4 border-l-primary-container border border-outline-variant/30 shadow-xs w-full">
          <div className="max-w-4xl space-y-4">
            <blockquote className="text-scripture-quote font-scripture-quote italic text-on-surface leading-relaxed text-xl sm:text-2xl lg:text-3xl">
              {t(
                "“Herren är nära alla som åkallar honom, alla som åkallar honom i sanning. Han gör vad de gudfruktiga begär, han hör deras rop och frälsar dem.”",
                "“The Lord is near to all who call on him, to all who call on him in truth. He fulfills the desire of those who fear him; he also hears their cry and saves them.”"
              )}
            </blockquote>
            <div className="flex items-center gap-3 pt-2">
              <span className="h-0.5 w-8 bg-primary-container"></span>
              <cite className="text-scripture-citation font-scripture-citation uppercase tracking-widest text-xs font-bold text-primary not-italic">
                {t("PSALTAREN 145:18 (Svenska Folkbibeln / ESV)", "PSALM 145:18 (ESV / Svenska Folkbibeln)")}
              </cite>
            </div>
          </div>
        </section>

        {/* ================= 5. WORSHIP LEADERS & MINISTERS ================= */}
        <section className="space-y-6 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-outline-variant/30 pb-4 gap-2">
            <div>
              <span className="text-label-sm font-label-sm text-primary uppercase font-bold tracking-wider">
                {t("Tjänande Ledarskap", "Servant Leadership")}
              </span>
              <h2 className="text-headline-md font-headline-md text-on-surface mt-1 font-bold">
                {t("Lovsångsledare & Förkunnare", "Worship Leaders & Ministers")}
              </h2>
            </div>
            <span className="text-body-sm font-body-sm text-on-surface-variant">
              {t("Representerar 25 kristna församlingar i Göteborg", "Representing 25 Gothenburg Christian Traditions")}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Leader 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 hover:border-primary-container/50 hover:shadow-md transition duration-200 flex flex-col space-y-3.5">
              <div className="w-full aspect-square rounded-xl overflow-hidden border border-outline-variant/30 shadow-xs relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8H71-55XWnZcWjF_nI5PnysFwTNyjQG_kIzyOyeYKeELxSGlTGqnjQcGPd15Aa2Jj2l8ZwQNBFxDOASKdMbe8f6vaI9hQiYqWf1tI9rvfPUmDhxIih-u8fBGzQqJlXHbeuBT2FOo3pCsSXBZrCLe770CG0VR40iud6RCQSuweyDAz64CtpyWVza04PEzIXnv0RywnRIwIA3PWgbS6AJNTUjLoq3KMgd2lGH__8cSuck4bIsAE5HP2Ug"
                  alt="Elias Lindqvist"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-container/50 text-secondary">
                    {t("Lovsångsledare", "Worship Director")}
                  </span>
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface font-bold pt-1">
                  Elias Lindqvist
                </h4>
                <p className="text-body-sm font-body-sm text-primary font-medium">GOSPELS Ministry</p>
                <p className="text-xs text-on-surface-variant">Frihamnen Collective</p>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 hover:border-primary-container/50 hover:shadow-md transition duration-200 flex flex-col space-y-3.5">
              <div className="w-full aspect-square rounded-xl overflow-hidden border border-outline-variant/30 shadow-xs relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs6JXLmA552v9ab74OTSHOoiayoG8GAXAdnSeLWu7Za5IU9amzFpcbsVcjeVW5DLYY6O4eIHaKfV9x4M9D0mYXjbkkWhuyrHPPuWJW-unm9mOZRYdLUz6pA1w9dGg98ASx3pcatI4z3hFbFJfczjyjieoLDGAr19hzJv6oeJhaG1XeJelRWuNWhaYniV-t7X1UznDb6gK8uudl8TR3tFBI8kmXW7ONtHKQhpTTcPZSeEw55vC5KeEvoQ"
                  alt="Astrid Bergström"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-container/50 text-secondary">
                    {t("Huvudsångerska", "Lead Vocalist")}
                  </span>
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface font-bold pt-1">
                  Astrid Bergström
                </h4>
                <p className="text-body-sm font-body-sm text-primary font-medium">{t("Låtskrivare & Sångerska", "Songwriter & Vocalist")}</p>
                <p className="text-xs text-on-surface-variant">Smyrna Church Gothenburg</p>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 hover:border-primary-container/50 hover:shadow-md transition duration-200 flex flex-col space-y-3.5">
              <div className="w-full aspect-square rounded-xl overflow-hidden border border-outline-variant/30 shadow-xs relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkgyuuiNVeYkheIlva9e7mVXhLSRu2UcTG5-b9FCYX9DhATIAAGoa97REI4LFEFGKzTAHnF95tQBVoTHdrC7xnpjWz1fIrEXWmeGr95qVNco26m0FC_GAw07tdboqaxrO44DzKdv7tiXOJswZlyn2EADEkrAu7sv9G3-BcU8Z-Hnt83KcVI_v3HMfmUgj1yW4i_vcZVd4TdPc1D_orOSaJbHsuidZLc2dxJ5hEnYDsiOPFo04kBCoVCg"
                  alt="Pastor Samuel Mensah"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-container/50 text-secondary">
                    {t("Gästpredikant", "Keynote Speaker")}
                  </span>
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface font-bold pt-1">
                  Pastor Samuel Mensah
                </h4>
                <p className="text-body-sm font-body-sm text-primary font-medium">{t("Gästpastor", "Guest Minister")}</p>
                <p className="text-xs text-on-surface-variant">Betlehemskyrkan Alliance</p>
              </div>
            </div>

            {/* Leader 4 */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 hover:border-primary-container/50 hover:shadow-md transition duration-200 flex flex-col space-y-3.5">
              <div className="w-full aspect-square rounded-xl overflow-hidden border border-outline-variant/30 shadow-xs relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxcb4MrD5QdAg7sPuPhImcKBgsJw7_VPbtLEKluV6f90gx4_6NcWMLpTUbE1fDPF-B8_N2j-hlBbbhke5-8GVM8PcgrWQmJJJJmS0EzqoN1elddUgDN0Hx59rVG3telU-Xn9SQZhW015JkNZ_mqJG_Xgut0JVzmv-Ft8jxSDz3nDMP4R3E9sR9u3EsOimKblHmf-EgtHw_xfl3Zd6rPB6HHO_XKYYpZuW2x77fUq19BiAYDkHpiIqPog"
                  alt="Maja Holmberg"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-container/50 text-secondary">
                    {t("Förbönsansvarig", "Prayer Lead")}
                  </span>
                </div>
                <h4 className="text-headline-sm font-headline-sm text-on-surface font-bold pt-1">
                  Maja Holmberg
                </h4>
                <p className="text-body-sm font-body-sm text-primary font-medium">{t("Förbönssamordnare", "Intercession Coordinator")}</p>
                <p className="text-xs text-on-surface-variant">Västra Götaland Intercessors</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 6. VOLUNTARY GIVING & GLOBAL STREAM (Dual Section) ================= */}
        <section
          id="giving"
          className="rounded-3xl border border-outline-variant/30 bg-surface-container-low/60 p-6 sm:p-10 lg:p-12 w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative & Non-profit Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-bold uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4 text-primary" />
                  {t("Frivillig Kollekt", "Voluntary Offering")}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-sm font-label-sm bg-surface-container text-on-surface-variant font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  {t("Ideell Förening • Insamlingskontroll", "Non-Profit 90-Konto Verified")}
                </span>
              </div>

              <h2 className="text-headline-lg font-headline-lg text-on-surface font-extrabold tracking-tight">
                {t("Stöd Gospelmissionen i Göteborg via Swish", "Support Gospel Ministry in Gothenburg via Swish")}
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed max-w-2xl">
                {t(
                  "GOSPELS är 100% gåvofinansierat. Bidrag upprätthåller akustik, orkester- och körresor samt garanterar fri entré för ungdomar i hela Västsverige.",
                  "GOSPELS is 100% community and donor funded. Contributions directly sustain Frihamnen Sanctuary Hall acoustics, guest choir and orchestral travel, and guaranteed free access for youth across Western Sweden."
                )}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-on-surface-variant">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>
                    Org.nr: <strong className="font-semibold text-on-surface">802557-4883</strong>
                  </span>
                </div>
                <span className="text-outline-variant/60 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="material-symbols-outlined text-sm text-primary">account_balance</span>
                  <span>
                    Bankgiro: <strong className="font-semibold text-on-surface">512-3456</strong>
                  </span>
                </div>
                <span className="text-outline-variant/60 hidden sm:inline">•</span>
                <span className="text-on-surface-variant/80">
                  {t("Svensk Insamlingskontroll & Transparens", "Swedish Foundation Oversight (Svensk Insamlingskontroll)")}
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Giving Box & Presets */}
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-3xl p-6 lg:p-8 border border-outline-variant/40 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-1 border-b border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-rose-400 flex items-center justify-center text-white font-black text-lg shadow-sm">
                    S
                  </div>
                  <div>
                    <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                      {t("Officiell Swish-gåva", "Official Swish Transfer")}
                    </h3>
                    <span className="text-xs text-on-surface-variant">
                      {t("Direkt och skattebefriad gåva till ideell förening", "Instant & tax deductible non-profit gift")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Presets Row */}
              <div className="space-y-2">
                <label className="block text-xs uppercase font-bold text-on-surface-variant tracking-wider">
                  {t("Välj Belopp", "Select Amount")}
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {["50 kr", "100 kr", "250 kr", "500 kr"].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelectedAmount(amt)}
                      className={`py-2.5 rounded-xl text-center font-label-md text-sm transition-all active:scale-95 ${
                        selectedAmount === amt
                          ? "bg-primary-container/15 border-2 border-primary-container text-primary font-bold shadow-xs"
                          : "border border-outline-variant text-on-surface hover:border-primary-container hover:bg-surface-container"
                      }`}
                    >
                      {amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Swish Number & Copy Box */}
              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-on-surface-variant block uppercase tracking-wider font-semibold">
                      {t("Swish-nummer", "Swish Number")}
                    </span>
                    <span className="text-headline-sm font-headline-sm text-on-surface font-bold tracking-wider font-mono">
                      123 456 7890
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopySwish}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container-lowest border border-outline-variant hover:border-primary text-label-sm font-label-sm font-semibold text-primary transition-colors shadow-xs active:scale-95"
                  >
                    {copiedSwish ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>{t("Kopierat!", "Copied!")}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>{t("Kopiera nummer", "Copy Number")}</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between text-xs text-on-surface-variant">
                  <span>
                    {t("Mottagare:", "Recipient:")} <strong>GOSPELS Göteborg</strong>
                  </span>
                  <span className="text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> {t("Direktöverföring", "Direct Clearing")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 7. VENUE & TRANSIT GUIDE (Browser Frame & Bento Options) ================= */}
        <section id="transit" className="bg-surface-container-lowest rounded-3xl border border-outline-variant/30 p-6 sm:p-10 lg:p-12 w-full">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#14b8a6]/10 text-[#0f766e] mb-3">
              {t("HITTA HIT", "GETTING THERE")}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] text-center mb-2 font-headline-lg">
              {t("Lokal & Reseinformation", "Venue & Transit Guide")}
            </h2>
            <p className="text-center text-[#64748b] text-sm max-w-xl mx-auto font-body-md">
              {t("Beläget precis vid kajkanten vid Göta älv i Frihamnen.", "Located right at the waterfront along the Göta River in Frihamnen.")}
            </p>
          </div>

          {/* Two-Column Side-by-Side Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Browser Frame Map Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#e2e8f0] shadow-sm overflow-hidden flex flex-col">
              {/* Top Chrome Bar with macOS dots */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#e2e8f0] bg-slate-50 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                  <span className="ml-3 font-semibold text-slate-800 text-label-sm font-label-sm">
                    {t("GOSPELS — Göteborgs Lovsångskväll", "GOSPELS — Gothenburg Praise Night")}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="text-primary font-semibold">{t("Samling", "Event")}</span>
                  <span className="hover:text-slate-900 cursor-pointer">{t("Resväg", "Transit")}</span>
                  <span className="hover:text-slate-900 cursor-pointer">{t("Salöversikt", "Sanctuary Map")}</span>
                </div>
              </div>

              {/* Map Canvas Frame with Vector River Map & Anchored Pin Card */}
              <div className="p-4 bg-white space-y-3">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-xs bg-[#eef2f6]">
                  {/* Stylized Gothenburg Harbor & Göta River SVG Map */}
                  <svg
                    className="w-full h-full object-cover"
                    viewBox="0 0 700 450"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#cbd5e1" strokeWidth="0.5" strokeOpacity="0.4"></path>
                      </pattern>
                      <linearGradient id="riverGrad" x1="0%" y1="30%" x2="100%" y2="70%">
                        <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.8"></stop>
                        <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.9"></stop>
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.75"></stop>
                      </linearGradient>
                    </defs>
                    <rect width="700" height="450" fill="#f1f5f9"></rect>
                    <rect width="700" height="450" fill="url(#grid)"></rect>

                    {/* City landmasses */}
                    <path d="M0,0 L700,0 L700,160 C550,150 480,210 320,180 C180,150 80,190 0,160 Z" fill="#e2e8f0"></path>
                    <path d="M0,280 C120,290 220,260 360,280 C500,300 580,250 700,270 L700,450 L0,450 Z" fill="#e2e8f0"></path>

                    {/* Göta älv (River) */}
                    <path d="M0,160 C80,190 180,150 320,180 C480,210 550,150 700,160 L700,270 C580,250 500,300 360,280 C220,260 120,290 0,280 Z" fill="url(#riverGrad)"></path>

                    {/* Roads & Bridges */}
                    <path d="M220,0 L260,450" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.9"></path>
                    <path d="M220,0 L260,450" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" strokeDasharray="4,3"></path>
                    <path d="M480,0 C470,160 490,260 510,450" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.9"></path>
                    <path d="M480,0 C470,160 490,260 510,450" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" strokeDasharray="4,3"></path>
                    <path d="M0,220 C180,210 320,225 700,215" stroke="#0284c7" strokeWidth="2" strokeDasharray="6,6" opacity="0.6"></path>

                    {/* River Ferry 286 Route Line */}
                    <path d="M240,275 C270,230 310,210 340,190" stroke="#0d9488" strokeWidth="3" strokeDasharray="5,4"></path>

                    {/* Frihamnen Pier and docks */}
                    <path d="M310,180 L350,180 L360,220 L320,220 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5"></path>
                    <path d="M250,170 L280,170 L285,205 L255,205 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1"></path>

                    {/* Water Ferry Point */}
                    <circle cx="340" cy="190" r="6" fill="#0d9488" stroke="#ffffff" strokeWidth="2"></circle>
                    <text x="350" y="194" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#0f766e">Ferry 286 Stop</text>

                    {/* Tram Stop */}
                    <rect x="230" y="135" width="12" height="12" rx="2" fill="#0284c7"></rect>
                    <text x="248" y="145" fontFamily="Inter" fontSize="10" fontWeight="600" fill="#0369a1">Frihamnen Tram 5 &amp; 6</text>

                    {/* Pulse Ring for Sanctuary */}
                    <circle cx="350" cy="145" r="26" fill="#14b8a6" fillOpacity="0.2" className="animate-pulse"></circle>
                    <circle cx="350" cy="145" r="16" fill="#14b8a6" fillOpacity="0.35"></circle>

                    {/* Main Sanctuary Pin */}
                    <g transform="translate(336, 120)">
                      <path d="M14,0 C6.27,0 0,6.27 0,14 C0,24.5 14,38 14,38 C14,38 28,24.5 28,14 C28,6.27 21.73,0 14,0 Z" fill="#006b5f" stroke="#ffffff" strokeWidth="2"></path>
                      <circle cx="14" cy="14" r="6" fill="#ffffff"></circle>
                      <circle cx="14" cy="14" r="3.5" fill="#14b8a6"></circle>
                    </g>
                    <rect x="290" y="90" width="120" height="22" rx="11" fill="#0f172a" fillOpacity="0.85"></rect>
                    <text x="350" y="105" fontFamily="Hanken Grotesk" fontSize="11" fontWeight="700" fill="#ffffff" textAnchor="middle">Frihamnen Sanctuary</text>
                  </svg>

                  {/* Location Info Overlay Bar */}
                  <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white/95 backdrop-blur-md p-3.5 rounded-2xl text-[#0f172a] border border-[#e2e8f0] shadow-md flex items-center justify-between gap-4">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-label-md font-label-md font-bold text-on-surface">Frihamnen Sanctuary Hall</h4>
                        <p className="text-xs text-[#64748b]">Lundbyvass, 417 06 Göteborg, Sweden</p>
                      </div>
                    </div>
                    <a
                      className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline ml-2"
                      href="https://maps.google.com/?q=Frihamnen+Gothenburg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Map Footnote GPS & Schedule Action */}
                <div className="flex items-center justify-between px-2 pt-1 text-xs text-[#64748b] font-mono">
                  <div className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-primary" />
                    <span>GPS: 57.7143° N, 11.9622° E</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a className="text-primary hover:underline font-semibold font-body-sm" href="#schedule">
                      View Schedule
                    </a>
                    <span>•</span>
                    <span className="text-slate-400">Frihamnen District</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Stacked Bento Transit Option Cards */}
            <div className="lg:col-span-5 flex flex-col justify-start gap-4">
              {/* Transit Card 1: By Tram / Spårvagn */}
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-container/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                      By Tram / Spårvagn
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-container/40 text-on-secondary-container">
                      Lines 5 &amp; 6
                    </span>
                  </div>
                  <p className="text-body-sm font-body-sm text-[#64748b] leading-relaxed">
                    Take Tram 5 or 6 from Brunnsparken or Centralstationen. Alight at Frihamnen stop (5 min ride).
                  </p>
                </div>
              </div>

              {/* Transit Card 2: By City River Ferry */}
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                      By City River Ferry
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-container/20 text-primary">
                      Free Transit
                    </span>
                  </div>
                  <p className="text-body-sm font-body-sm text-[#64748b] leading-relaxed">
                    Ferry 286 (Älvsnabbare) runs free of charge from Stenpiren to Lindholmspiren on weekends.
                  </p>
                </div>
              </div>

              {/* Transit Card 3: Parking & Bike Racks */}
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-container/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                      Parking &amp; Bike Racks
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface-container text-on-surface-variant">
                      P-hus
                    </span>
                  </div>
                  <p className="text-body-sm font-body-sm text-[#64748b] leading-relaxed">
                    200 parking stalls available via EasyPark (Zone 4310), 50 covered Styr &amp; Ställ bicycle stands nearby.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>

      <Footer />

      {/* Global Modals */}
      <RSVPModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
      <SwishModal isOpen={swishOpen} onClose={() => setSwishOpen(false)} />
      <PrayerModal isOpen={prayerOpen} onClose={() => setPrayerOpen(false)} />
      <VolunteerModal isOpen={volunteerOpen} onClose={() => setVolunteerOpen(false)} />
    </div>
  );
}

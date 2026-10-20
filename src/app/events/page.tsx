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
  MapPin,
  Users,
  PlayCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Volume2,
  Headphones,
  Music,
  Video,
  ExternalLink,
  CheckCircle2,
  Bookmark,
  Share2,
  Clock,
  Church,
  Flame,
  Radio,
  Copy,
  Check,
  Sun,
  Waves,
  Zap,
  Trees,
} from "lucide-react";

export default function EventsPage() {
  const { language, t } = useLanguage();
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  // Filter state for archives
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Swish copied state
  const [copiedSwish, setCopiedSwish] = useState(false);

  // Quick RSVP form state for Holy Spirit Worship
  const [rsvpForm, setRsvpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    seats: "2",
  });
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const handleCopySwish = () => {
    navigator.clipboard?.writeText("1234567890");
    setCopiedSwish(true);
    setTimeout(() => setCopiedSwish(false), 2000);
  };

  const handleQuickRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSubmitted(true);
    setTimeout(() => {
      alert(`Tack ${rsvpForm.firstName}! En digital fribiljett för ${rsvpForm.seats} platser har skickats till ${rsvpForm.email}.`);
      setRsvpSubmitted(false);
      setRsvpForm({ firstName: "", lastName: "", email: "", seats: "2" });
    }, 400);
  };

  const handleAddToCalendar = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//GOSPELS//Gatherings//SV",
      "BEGIN:VEVENT",
      "SUMMARY:Göteborgs Lovsångskonsert 2027",
      "DESCRIPTION:Mass Gospel Choir at Gustav Adolfs Torg, Gothenburg - 120 voices across Western Sweden.",
      "LOCATION:Gustav Adolfs Torg, Göteborg, Sweden",
      "DTSTART:20270612T140000Z",
      "DTEND:20270612T173000Z",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "goteborgs-lovsangskonsert-2027.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Archive exhibits from Stitch "Event Archive Page Desktop"
  const archiveCards = [
    {
      id: "gothenburg-praise-night-2025",
      category: "highlights",
      dateBadge: "DEC 2025",
      attendees: "520 Attendees",
      subBadge: "Watch Recording • 40-Voice Choir",
      subIcon: PlayCircle,
      title: "Gothenburg Praise Night 2025",
      venue: "Frihamnen Sanctuary Hall",
      quote:
        "“The unity in the room was palpable as Swedish hymnody met modern gospel harmony across 6 churches.”",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDQGw5jv1lS9zlEkKihdQlRGzeUDO4ad_Dk-ePzV3fjBw8z4azhSfulAwlKIzeMpzl2hWswgyGCA54ktAonTMUEQdq6ieObk0EUz2SQi8RJBvQyHmartKAnED4iDGiDEP6gmZ23vbKXIuJOMvg1RVAP0zQnTQCqyfo6jI5VFlGPnKaCK_PGJp7NtgwKgaGI-de8o8lvx1IcTUDbsQDGXbpXMcTJhMmjELuVEobcwwKy5Mc0Ej_YtDF-vA",
      actionText: "Watch in Watch & Listen",
      actionLink: "/watch#gothenburg-2025",
    },
    {
      id: "skargardslovsang-2025",
      category: "archipelago",
      dateBadge: "JUL 2025",
      attendees: "380 Attendees",
      subBadge: "Listen on Spotify • Acoustic Pier Set",
      subIcon: Headphones,
      title: "Skärgårdsvsång 2025",
      venue: "Styrsö Bratten Brygga, Göteborg",
      quote:
        "“Worshipping by the open sea as the ferry arrived was a profound testimony to vacationers.”",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPu7GCurVCyeyRkxafejZoYDEk9sZbnhhEu4e49G6fFj-QSUtJm5r2w9ZAR0nxZGzppyI40ZMgkUfl3SnJPtO6CHu2FELSu20E1Xfel2nl7-AZCDiNNSkiRPDiL0cNXCFrEkqDkRlUeM-1RrQh4X_3VkL4O3HISE7J9KJU-8NFI4w7uTwbRtZFZwbs0YU3Ok_hfQL2QBlos9Ry_S4T1RctBgm2K2alJMgGsWr-VN35FfNaMdpMPI95vw",
      actionText: "Open Audio Stream",
      actionLink: "/watch#styrso-2025",
    },
    {
      id: "youth-revival-night-2024",
      category: "2024",
      dateBadge: "NOV 2024",
      attendees: "410 Students",
      subBadge: "Highlight Reel • 8 Campus Ministries",
      subIcon: Video,
      title: "Youth Revival Night",
      venue: "Betlehemskyrkan, Vasastaden",
      quote:
        "“Over four hundred high school and university students stood united in deep worship and prayers for their campuses.”",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBHU6XUKOSObJ4VIAXp-5Odr0oQ9Jz6NRZQgTLXtmioEAIrywux7uK7g4v_TgjQVu9lN8zFPhisoI9DFw-NlCgsOjATJLAF29bpUt2ukHD8edt8RpxzdBMUuJegR-2j8XjDwUmOQFplEALXmz6z0Y1f6-ppezsPO02ZJ0mwNTxdXKDNFQQiT0FYER1HU2Dl8wy-tFQVCEKM8s2h5JtQlKvHO70xeNaUSWRmvbTXXiKTzcgx0rX3SKUIZw",
      actionText: "Watch Highlight Video",
      actionLink: "/watch#youth-revival-2024",
    },
    {
      id: "nordic-midsummer-praise-2024",
      category: "choral",
      dateBadge: "JUN 2024",
      attendees: "850 Attendees",
      subBadge: "Live Album • Open Park Praise",
      subIcon: Music,
      title: "Nordic Midsummer Praise",
      venue: "Slottsskogen Pavilion, Göteborg",
      quote:
        "“Families brought blankets, picnic baskets, and open hearts as songs of grace resonated through the city park.”",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQj_DgpG3_4FyGAEGHAUDwv2BGdhUXb7yRDfLcIfOVgbPMSjVps7SLaU2u9TBhwPIyJ6Xid9wc-szDSi7Bju2uGSzJ8KpgkkfX6_9mDUsUmkpLtrkwOIkfrOLlp5D--fRoBdkDXNkUhSAC0zHgZmoRkw2OZwa46tDywjV6tJzxjKp8jCu_ONGBmxordM-RcNYJWVHmLpz8VFOJcCIXiWEIUkZvmv4ZsjS-2aHF5bNCXD_YIfO5ZEa3LA",
      actionText: "Listen to Live Album",
      actionLink: "/watch#midsummer-2024",
    },
  ];

  const filteredArchiveCards = archiveCards.filter((c) => {
    if (activeCategory === "all") return true;
    return c.category === activeCategory;
  });

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col font-body-md selection:bg-primary-container selection:text-on-primary-container w-full">
      <Navbar
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
        onOpenPrayer={() => setPrayerOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      <main id="main-content" className="flex-grow w-full">
        {/* ==================== PAGE HERO & BREADCRUMB HEADER (CINEMATIC FULL WIDTH 100VH) ==================== */}
        <section className="relative bg-on-background text-surface overflow-hidden min-h-screen min-h-[100dvh] flex items-center w-full mb-12 border-b border-white/10">
          {/* Atmospheric Background Image with Nordic Twilight Gradients */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTYNWYf6T944Ks-J_VkQzdXhL5g9ViSXo1X72RK9WWouMHEspLjCOtg-nbaGqu6wnZB6yRZjg0E3rQAdMTvjiZaCK7p7WN3KQhWdOVv_eagNA5gcg_bjzrcdbexTVR79_maRwMkpLcVH5P8qWuiotkGnbs-IiIaiZH_jy9kt-g4hhGlGwukSASaHNW7VPWUkk60QLnZChwbvxW6UL_u-rmuJDOEOTO5gBXZDI8TLUiaIQUjRuIk_Qx3A"
              alt="Gospel worship gatherings across Gothenburg"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-35 mix-blend-luminosity filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-background via-on-background/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-on-background via-transparent to-black/50"></div>
          </div>

          {/* Ambient Glowing Orbs */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Full-width container with standard padding */}
          <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
            <div className="max-w-4xl space-y-4 sm:space-y-6">
              {/* Breadcrumb / Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest/20 border border-white/15 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shrink-0"></span>
                <span className="text-label-sm font-label-sm text-primary-fixed tracking-wider uppercase font-semibold">
                  {t("Göteborg, Sverige • Stadens Samlingar & Lovsångsarkiv", "Gothenburg, Sweden • Citywide Gatherings & Worship Archive")}
                </span>
              </div>

              {/* Display Hero Headline & Mission Subtitle */}
              <div>
                <h1 className="text-display-hero-mobile sm:text-display-hero font-display-hero text-white tracking-tight leading-tight mb-3">
                  {t("Lovsångssamlingar & ", "Worship Gatherings & ")}
                  <span className="text-primary-container font-extrabold">{t("Arkiv", "Archive")}</span>
                </h1>
                <p className="text-body-md sm:text-body-lg font-body-lg text-slate-200 leading-relaxed max-w-3xl">
                  {t(
                    "Samlar Kristi kropp över Göteborg och Västsverige i ande och sanning. Utforska kommande storsamlingar med program och fribiljetter, eller lyssna på tidigare konsertinspelningar och vittnesbörd.",
                    "Gathering the body of Christ across Gothenburg and Western Sweden in spirit and in truth. Explore featured upcoming gatherings with integrated run of shows, reserve seats, and browse past night recordings and testimonies."
                  )}
                </p>
              </div>

              {/* Quick Navigation Anchor Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#featured-events"
                  className="inline-flex items-center gap-2 bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md px-5 py-3 rounded-lg shadow-md transition duration-150 active:scale-95 font-semibold"
                >
                  <span>{t("Kommande Samlingar", "Upcoming Gatherings")}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#archive"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-label-md text-label-md px-5 py-3 rounded-lg backdrop-blur-sm transition duration-150 active:scale-95 font-semibold"
                >
                  <PlayCircle className="w-4 h-4 text-primary-container" />
                  <span>{t("Bläddra i Arkivet", "Browse Past Archive")}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TWO PRIMARY FEATURED GATHERINGS (FULL WIDTH) ==================== */}
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 pb-14 space-y-10" id="featured-events">
          {/* PRIMARY GATHERING 1: Holy Spirit Worship 2026 */}
          <div className="bg-inverse-surface text-inverse-on-surface rounded-3xl overflow-hidden shadow-xl border border-white/10 w-full">
            {/* Top Hero Banner with Integrated Tags */}
            <div className="grid grid-cols-1 lg:grid-cols-12 relative border-b border-white/10">
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[440px] overflow-hidden group">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1V0yu0E_fM68qqoWhwmg3eWacGipxMzCB0NN3p8OT0pqCgdqcsWGeA8fTxqNG2b81PYzlRfoaJulI2l2IR2kQpNLZXPJGPCCGVwIIam7sUbsNKp9t3hzWf4CPSta2BYu3S8-DqDNUFffR1W6PIx_0GhwM6doQMluqWn9GI8bHkkXsf7T2d-n8MgX4qI1v-9iB3OK87tDlENSjsY8eZbst_QZ1C1UAQJF0ASOVOe8A26YDoiyW49H-fk2wrs"
                  alt="Atmospheric modern sanctuary in Frihamnen Gothenburg with turquoise stage lights, hands lifted in congregational worship, and high wooden Nordic ceilings"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/30 to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:to-inverse-surface"></div>
                
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex flex-wrap items-center gap-2">
                  <span className="bg-primary-container text-on-primary-container text-label-sm font-label-sm px-3 sm:px-3.5 py-1.5 rounded-full font-bold shadow-md tracking-wider flex items-center gap-1.5">
                    <Flame className="w-4 h-4" />
                    NEXT GATHERING
                  </span>
                  <span className="bg-black/60 backdrop-blur-md text-white text-label-sm font-label-sm px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-primary-container" />
                    Frihamnen, Göteborg
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-lg bg-surface-container-highest/20 border border-white/15 text-primary-fixed text-label-sm font-label-sm font-bold tracking-wider">
                      SÖN, 18 OKT 2026
                    </span>
                    <span className="text-tertiary-fixed-dim text-label-sm font-label-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      18:00 – 21:00 CEST
                    </span>
                  </div>

                  <h2 className="text-headline-lg font-headline-lg text-white mb-2 leading-tight">
                    Holy Spirit Worship 2026
                  </h2>
                  <p className="text-primary-container text-body-md font-body-md font-semibold mb-3 flex items-center gap-1.5">
                    <Church className="w-4 h-4" />
                    Smyrna Church Frihamnen, Göteborg
                  </p>
                  <p className="text-tertiary-fixed-dim text-body-sm font-body-sm leading-relaxed mb-6">
                    An all-denominational evening of spontaneous praise, orchestral gospel anthems, and extended prayer over the Gothenburg metropolitan region. Free community admission with live Nordic praise leaders.
                  </p>

                  {/* Capacity Status Indicator */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
                    <div className="flex justify-between items-center text-label-sm font-label-sm mb-2">
                      <span className="text-tertiary-fixed-dim flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-primary-container" />
                        Capacity Status
                      </span>
                      <span className="text-primary-fixed font-bold font-mono">
                        340 of 500 spots reserved (68%)
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-container rounded-full transition-all duration-1000" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="/events/holy-spirit-worship"
                    className="inline-flex items-center gap-2 text-primary-fixed hover:text-white text-label-md font-label-md font-semibold transition-colors group"
                  >
                    <span>View Full Event Page</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Integrated Program & Quick RSVP Experience Sub-Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-slate-900/60 backdrop-blur-md">
              {/* Run of Show / Program Preview */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-headline-sm font-headline-sm text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary-container" />
                    Integrated Program &amp; Run of Show
                  </h3>
                  <span className="text-label-sm font-label-sm text-tertiary-fixed-dim">Doors open 17:15</span>
                </div>

                <div className="space-y-3 font-body-sm text-body-sm">
                  <div className="flex items-start gap-4 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/5">
                    <span className="font-mono text-primary-fixed font-bold text-label-sm min-w-[56px] pt-0.5">17:15</span>
                    <div>
                      <p className="font-semibold text-white">Doors Open &amp; Acoustic Prelude</p>
                      <p className="text-tertiary-fixed-dim text-xs">Quiet acoustic instrumental prayer &amp; welcoming in the sanctuary hall</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/5">
                    <span className="font-mono text-primary-fixed font-bold text-label-sm min-w-[56px] pt-0.5">18:00</span>
                    <div>
                      <p className="font-semibold text-white">United Choral Worship &amp; Swedish Hymns</p>
                      <p className="text-tertiary-fixed-dim text-xs">Led by GOSPELS City Collective &amp; combined West Coast choirs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/5">
                    <span className="font-mono text-primary-fixed font-bold text-label-sm min-w-[56px] pt-0.5">19:15</span>
                    <div>
                      <p className="font-semibold text-white">The Word &amp; Pastoral Citywide Blessing</p>
                      <p className="text-tertiary-fixed-dim text-xs">Message on Psalm 96 and inter-church unity across Gothenburg</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/5">
                    <span className="font-mono text-primary-fixed font-bold text-label-sm min-w-[56px] pt-0.5">19:45</span>
                    <div>
                      <p className="font-semibold text-white">Spontaneous Praise &amp; Prayer Stations</p>
                      <p className="text-tertiary-fixed-dim text-xs">Open ministry time with intercession teams available for personal prayer</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors border border-white/5">
                    <span className="font-mono text-primary-fixed font-bold text-label-sm min-w-[56px] pt-0.5">20:45</span>
                    <div>
                      <p className="font-semibold text-white">Fellowship &amp; Swedish Kyrkfika</p>
                      <p className="text-tertiary-fixed-dim text-xs">Coffee, tea, and kanelbullar served in the Smyrna atrium foyer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick RSVP Form Card */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-black/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-headline-sm font-headline-sm text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary-container" />
                      Quick RSVP Card
                    </h3>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-2.5 py-0.5 rounded">
                      Free Admission
                    </span>
                  </div>

                  <form className="space-y-3.5" onSubmit={handleQuickRsvp}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-tertiary-fixed-dim mb-1 font-medium">First Name</label>
                        <input
                          className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                          placeholder="Linnea"
                          required
                          type="text"
                          value={rsvpForm.firstName}
                          onChange={(e) => setRsvpForm({ ...rsvpForm, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-tertiary-fixed-dim mb-1 font-medium">Last Name</label>
                        <input
                          className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                          placeholder="Lindqvist"
                          required
                          type="text"
                          value={rsvpForm.lastName}
                          onChange={(e) => setRsvpForm({ ...rsvpForm, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-tertiary-fixed-dim mb-1 font-medium">Email Address</label>
                      <input
                        className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                        placeholder="linnea@kyrka.se"
                        required
                        type="email"
                        value={rsvpForm.email}
                        onChange={(e) => setRsvpForm({ ...rsvpForm, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-tertiary-fixed-dim mb-1 font-medium">Number of Reserved Seats</label>
                      <select
                        className="w-full bg-slate-800 border border-white/15 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                        value={rsvpForm.seats}
                        onChange={(e) => setRsvpForm({ ...rsvpForm, seats: e.target.value })}
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons (Family / Small Group)</option>
                        <option value="5">5+ Persons</option>
                      </select>
                    </div>

                    <button
                      className="w-full bg-primary-container hover:bg-primary-fixed text-on-primary-container text-label-md font-label-md font-bold py-3 px-5 rounded-xl transition duration-150 active:scale-98 shadow-md flex items-center justify-center gap-2 mt-4"
                      type="submit"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Confirm Free RSVP</span>
                    </button>
                  </form>
                </div>

                <p className="text-[11px] text-tertiary-fixed-dim text-center mt-3">
                  Instant email confirmation &amp; digital pass sent immediately.
                </p>
              </div>
            </div>
          </div>

          {/* SPOTLIGHT GATHERING 2: Göteborgs Lovsångskonsert 2027 */}
          <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md border border-outline-variant/50 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Visual */}
              <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQj_DgpG3_4FyGAEGHAUDwv2BGdhUXb7yRDfLcIfOVgbPMSjVps7SLaU2u9TBhwPIyJ6Xid9wc-szDSi7Bju2uGSzJ8KpgkkfX6_9mDUsUmkpLtrkwOIkfrOLlp5D--fRoBdkDXNkUhSAC0zHgZmoRkw2OZwa46tDywjV6tJzxjKp8jCu_ONGBmxordM-RcNYJWVHmLpz8VFOJcCIXiWEIUkZvmv4ZsjS-2aHF5bNCXD_YIfO5ZEa3LA"
                  alt="Massive open-air worship gathering in Gustav Adolfs Torg under Scandinavian summer twilight"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                  <span className="bg-surface-container-lowest/95 backdrop-blur-md text-on-surface text-label-sm font-label-sm px-3.5 py-1.5 rounded-full font-bold shadow-sm border border-outline-variant/40 flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-primary" />
                    SUMMER CITYWIDE FESTIVAL
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary-container block mb-1">
                    Open Air Stage
                  </span>
                  <p className="text-sm font-semibold text-white/90">
                    Gustav Adolfs Torg, Göteborg • Mass Choir with 120 Voices
                  </p>
                </div>
              </div>

              {/* Right Details & Run of Show Preview */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <span className="px-3 py-1 rounded-lg bg-primary-container/15 text-primary text-label-sm font-label-sm font-bold tracking-wider">
                      LÖR, 12 JUN 2027
                    </span>
                    <span className="text-outline text-label-sm font-label-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      16:00 – 19:30 CEST
                    </span>
                    <span className="text-xs bg-surface-container text-on-surface-variant font-semibold px-2.5 py-1 rounded-full border border-outline-variant/40">
                      Free Admission • No Ticket Required
                    </span>
                  </div>

                  <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">
                    Göteborgs Lovsångskonsert 2027
                  </h2>
                  <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-5">
                    A public declaration of praise in the very heart of Gothenburg. Featuring an unprecedented 120-voice mass gospel choir uniting Pentecostal, Lutheran, Mission, and Salvation Army congregations across Western Sweden.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 text-center">
                    <div>
                      <p className="text-headline-sm sm:text-headline-md font-bold text-primary">120</p>
                      <p className="text-xs text-outline font-medium">Mass Choir Voices</p>
                    </div>
                    <div className="border-x border-outline-variant/50">
                      <p className="text-headline-sm sm:text-headline-md font-bold text-on-surface">100%</p>
                      <p className="text-xs text-outline font-medium">Free Public Access</p>
                    </div>
                    <div>
                      <p className="text-headline-sm sm:text-headline-md font-bold text-primary">14</p>
                      <p className="text-xs text-outline font-medium">Partner Congregations</p>
                    </div>
                  </div>

                  {/* Festival Run of Show */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-label-sm font-label-sm font-bold text-on-surface uppercase tracking-wider">
                      Festival Run of Show
                    </h4>
                    <div className="flex items-center gap-3 text-body-sm text-on-surface-variant">
                      <span className="font-mono text-primary font-bold text-xs">16:00</span>
                      <span>Opening Brass Preludes &amp; Children&apos;s Choir Anthems</span>
                    </div>
                    <div className="flex items-center gap-3 text-body-sm text-on-surface-variant">
                      <span className="font-mono text-primary font-bold text-xs">17:15</span>
                      <span>120-Voice United Mass Gospel Choir &amp; Public Declaration</span>
                    </div>
                    <div className="flex items-center gap-3 text-body-sm text-on-surface-variant">
                      <span className="font-mono text-primary font-bold text-xs">18:45</span>
                      <span>Citywide Pastoral Prayer for Gothenburg Youth &amp; Families</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-outline-variant/40">
                  <button
                    type="button"
                    onClick={handleAddToCalendar}
                    className="bg-primary-container hover:bg-primary hover:text-on-primary text-on-primary-container text-label-md font-label-md font-bold px-6 py-3 rounded-xl transition duration-150 active:scale-98 shadow-sm flex items-center gap-2"
                  >
                    <Bookmark className="w-4 h-4" />
                    <span>Add to Calendar &amp; Remind Me</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVolunteerOpen(true)}
                    className="border border-outline-variant hover:border-primary-container text-on-surface-variant hover:text-on-surface text-label-md font-label-md font-semibold px-5 py-3 rounded-xl transition duration-150 flex items-center gap-2"
                  >
                    <Users className="w-4 h-4 text-primary" />
                    <span>Join the Mass Choir</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SCRIPTURE INTERSTITIAL (FULL WIDTH) ==================== */}
        <section className="w-full bg-surface-container-low border-y border-outline-variant/40 py-12 sm:py-14 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 mb-16">
          <div className="w-full pl-6 border-l-4 border-primary-container">
            <blockquote className="text-scripture-quote font-scripture-quote italic text-on-surface leading-relaxed text-2xl sm:text-3xl lg:text-4xl mb-3">
              “Sing to the Lord a new song; sing to the Lord, all the earth. Proclaim his salvation day after day.”
            </blockquote>
            <cite className="text-scripture-citation font-scripture-citation uppercase tracking-widest text-primary font-bold not-italic">
              Psalm 96:1–2 — Svenska Folkbibeln
            </cite>
          </div>
        </section>

        {/* ==================== PAST GATHERINGS & IMPACT ARCHIVE (FULL WIDTH) ==================== */}
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 pb-20" id="archive">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-bold text-label-sm font-label-sm uppercase tracking-wider mb-2">
                <Music className="w-4 h-4" />
                <span>Heritage &amp; Recorded Nights</span>
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface">
                Past Gatherings &amp; Impact Archive
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-3xl mt-1">
                Revisit moments of unity across Western Sweden. Access full audio streams, live video recordings, photo galleries, and community reflections.
              </p>
            </div>

            {/* Year & Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {[
                { id: "all", label: "All Archives (18)" },
                { id: "highlights", label: "2025 Highlights" },
                { id: "2024", label: "2024 Nights" },
                { id: "archipelago", label: "Archipelago Worship" },
                { id: "choral", label: "Choral" },
              ].map((chip) => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setActiveCategory(chip.id)}
                  className={`font-label-sm text-label-sm px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === chip.id
                      ? "bg-primary text-on-primary shadow-sm font-semibold"
                      : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* Archive Grid: Full Width Multi-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-6 w-full">
            {filteredArchiveCards.map((card) => {
              const SubIcon = card.subIcon;
              return (
                <article
                  key={card.id}
                  className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/40 hover:border-primary-container hover:shadow-lg transition-all duration-200 flex flex-col group w-full"
                >
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-surface-container-lowest/95 backdrop-blur-md rounded-lg px-2.5 py-1 text-center shadow-sm border border-outline-variant/30">
                      <span className="text-[11px] font-bold text-primary block leading-none">
                        {card.dateBadge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-primary-container" />
                      <span>{card.attendees}</span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-primary font-semibold mb-1.5">
                        <SubIcon className="w-4 h-4" />
                        <span>{card.subBadge}</span>
                      </div>
                      <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1 group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-outline mb-3">{card.venue}</p>
                      <p className="text-body-sm font-body-sm text-on-surface-variant italic border-l-2 border-primary-container/60 pl-3 leading-relaxed mb-4">
                        {card.quote}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between">
                      <Link
                        href={card.actionLink}
                        className="text-primary text-label-sm font-label-sm font-bold flex items-center gap-1 hover:underline"
                      >
                        <span>{card.actionText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ==================== ECUMENICAL GOTHENBURG CHURCH UNITY RIBBON (FULL WIDTH) ==================== */}
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 pb-16">
          <div className="border-t border-outline-variant/40 pt-10 text-center w-full">
            <p className="text-label-sm font-label-sm uppercase tracking-widest text-outline font-semibold mb-6">
              Gathered in Unity with Western Swedish Congregations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-300">
              {[
                "Smyrna Göteborg",
                "Betlehemskyrkan",
                "Fiskebäcks Mission",
                "Sankt Pauli Göteborg",
                "Frälsningsarmén Haga",
              ].map((church, idx) => (
                <span
                  key={idx}
                  className="text-headline-sm font-headline-sm font-bold text-on-surface-variant tracking-wide hover:text-primary transition-colors cursor-default"
                >
                  {church}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== SWISH DONATION BANNER (FULL WIDTH) ==================== */}
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 pb-16">
          <div className="bg-inverse-surface text-inverse-on-surface rounded-3xl p-6 sm:p-10 border border-white/10 shadow-md w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                  <span className="text-xs font-bold text-white tracking-wider uppercase">
                    Stöd GOSPELS med Swish
                  </span>
                  <span className="text-[11px] text-tertiary-fixed-dim font-mono">
                    Org.nr: 802557-4883
                  </span>
                </div>
                <h4 className="text-lg sm:text-2xl font-headline-md font-bold text-white">
                  Alla våra offentliga evenemang har 100% fri entré
                </h4>
                <p className="text-xs sm:text-body-sm text-tertiary-fixed-dim leading-relaxed">
                  Dina frivilliga gåvor möjliggör scenljud, lokalhyror, kyrkfika och musikläger för ungdomar i Göteborg.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex items-center justify-between bg-black/40 px-5 py-3.5 rounded-xl border border-white/10">
                  <div className="mr-5">
                    <span className="block text-[10px] text-outline uppercase font-semibold">
                      Swish-nummer
                    </span>
                    <span className="font-mono text-base text-white font-bold tracking-wider">
                      123 456 78 90
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopySwish}
                    className="bg-primary-container hover:bg-primary-fixed text-on-primary-container text-xs font-bold px-3.5 py-2 rounded-lg active:scale-95 transition flex items-center gap-1 shadow-xs"
                  >
                    {copiedSwish ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Kopierat!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kopiera</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSwishOpen(true)}
                  className="bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold py-3.5 px-5 rounded-xl transition text-center"
                >
                  Visa QR-kod
                </button>
              </div>
            </div>
          </div>
        </section>
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

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import {
  Calendar,
  Pin,
  Building,
  Building2,
  Users,
  Search,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Clock,
  History,
} from "lucide-react";

export default function EventsPage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const events = [
    {
      id: "holy-spirit-worship-2026",
      slug: "/events/holy-spirit-worship",
      title: "Holy Spirit Worship 2026",
      date: "Lördag 18 Oktober 2026",
      time: "18:00 - 21:30",
      location: "Frihamnen Church, Göteborg",
      category: "indoor",
      categoryLabel: "Inomhussamling",
      badgeClass: "bg-secondary-container text-on-secondary-container",
      attendees: 340,
      totalCapacity: 500,
      description:
        "En regional helafton med innerlig akustisk förbön, mäktig gospelkör och profetisk lovsång. Fri entré för alla åldrar.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDTYNWYf6T944Ks-J_VkQzdXhL5g9ViSXo1X72RK9WWouMHEspLjCOtg-nbaGqu6wnZB6yRZjg0E3rQAdMTvjiZaCK7p7WN3KQhWdOVv_eagNA5gcg_bjzrcdbexTVR79_maRwMkpLcVH5P8qWuiotkGnbs-IiIaiZH_jy9kt-g4hhGlGwukSASaHNW7VPWUkk60QLnZChwbvxW6UL_u-rmuJDOEOTO5gBXZDI8TLUiaIQUjRuIk_Qx3A",
      icon: Pin,
    },
    {
      id: "goteborgs-lovsangskonsert-2027",
      slug: "/events/goteborgs-lovsangskonsert",
      title: "Göteborgs Lovsångskonsert 2027",
      date: "Lördag 12 Juni 2027",
      time: "14:00 - 21:00",
      location: "Gustav Adolfs Torg, Göteborg",
      category: "outdoor",
      categoryLabel: "Offentlig Festival",
      badgeClass: "bg-primary-fixed text-on-primary-fixed",
      attendees: 1850,
      totalCapacity: 5000,
      description:
        "Västsveriges största öppna gospelkonsert i hjärtat av Göteborg. Över 200 musiker och 35 partnerförsamlingar förenade i lovsång.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD2Xzb92yWXgjAm17QCeGSYsbsHRUUTHHBr_aMx7cdjSnxNRuqvTU7iFahaU-GISdmahfZTfvuFmNj5fMXPGSVd47gEDS9-PoiyYkCf9hLhErmUkMsOjdkHSWQve3zfZAo5h-ifhOYCTxyPKxC9rMCLD5HauJHs49Ef3FNaH0HZxTXv9iuZBjUekM8FdBs3ALM1ui7uCX0TE0yBsOcAsnreegDmkW-O86E9KVJg1HZ6hAZ9FMzNSkDz7Q",
      icon: Building2,
    },
    {
      id: "youth-revival-gothenburg",
      slug: "/events/holy-spirit-worship",
      title: "Youth Revival Gothenburg",
      date: "Onsdag 4 November 2026",
      time: "19:30 - 22:00",
      location: "Betlehemskyrkan, Vasastan",
      category: "conferences",
      categoryLabel: "Ungdomsmöte",
      badgeClass: "bg-secondary-container text-on-secondary-container",
      attendees: 510,
      totalCapacity: 650,
      description:
        "En kväll helgad för gymnasie- och universitetsungdomar i Västra Götaland med vittnesbörd, bön, modern lovsång och gemenskap.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBNHl-CQJJh_9eGTFiaI4j2SGhqGtcTw6ggGES1uFwdZ1wB4jRJK9YNCYP2NB5BWPIQvjm9QGsnh2xHX51nt0-VEV3IVZ0mRodL_-uhAD9Mz_DC52B0gz7-izGQxVWW9LglwDXuWYtABDEe-cJBj7dp1zR_cUgA5WonrBFCfV-VGqDVLZVEBMX29FCeq0zoaDZHNvK2DpXWh5KathrbrqUJ2BYLm6VzBTHOTWk93nY1erw1QeUOyBeArQ",
      icon: Building,
    },
  ];

  const filteredEvents = events.filter((ev) => {
    const matchesTab = activeTab === "all" || ev.category === activeTab;
    const matchesSearch =
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-background text-on-surface antialiased font-body-md text-body-md min-h-screen flex flex-col">
      <Navbar
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
        onOpenPrayer={() => setPrayerOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      <main id="main-content" className="flex-1">
        {/* Header Hero Banner */}
        <section className="relative bg-on-background text-surface py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsmAGYb6RK-ffekW0k1ug8sZl-dZP_PUsGhKVnebisdEiUNGWRhT1zZrF0Ya4MQM0mMCKtA9Nanp_ziaQD8NyRcd4fWMM7IvWu3_5KMD79lSKCbtEtg8a0JoVsrud5t0AUG6sRezGiXfcWzFJOZJbaoePdRI8oE_RyOX16UHinSXgCWW0_uVL8xPNGcpD-wDTPOycpoyfCdfCVFa_9Aosbtr9vr-25sEWg2YZ5idLWVKmfvDaarfNTvQ"
              alt="Gospel Gathering Atmosphere"
              fill
              className="object-cover opacity-30 mix-blend-luminosity filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/80 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest/20 border border-white/10 backdrop-blur-md mb-4">
              <Sparkles className="w-4 h-4 text-primary-fixed" />
              <span className="text-label-sm font-label-sm tracking-wide text-primary-fixed uppercase">
                Evenemangskalender • Göteborg 2026/2027
              </span>
            </div>

            <h1 className="font-display-hero text-display-hero text-white tracking-tight leading-tight max-w-3xl">
              Öppna Samlingar &amp; Konserter
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mt-4 leading-relaxed">
              Alla konserter med Gospels är 100% kostnadsfria och öppna för alla. Boka din gratisplats för att säkra inträde vid lokaler med begränsad kapacitet.
            </p>

            {/* Quick Archive Link */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/events/past"
                className="inline-flex items-center gap-2 text-primary-fixed hover:underline text-label-md font-label-md"
              >
                <History className="w-4 h-4" />
                <span>Utforska arkivet för tidigare samlingar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="py-8 bg-surface-container-low border-b border-outline-variant/30 sticky top-20 z-30 backdrop-blur-md bg-surface-container-low/95">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0" role="tablist">
              {[
                { id: "all", label: "Alla Samlingar" },
                { id: "indoor", label: "Kyrkosalar" },
                { id: "outdoor", label: "Offentliga Torg" },
                { id: "conferences", label: "Ungdomskvällar" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full font-label-md text-label-md transition duration-150 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-primary-container text-on-primary shadow-xs font-bold"
                      : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-variant"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-outline absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Sök evenemang eller plats..."
                className="w-full rounded-full border border-outline-variant/60 bg-surface-container-lowest text-on-surface text-body-sm pl-10 pr-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
          </div>
        </section>

        {/* Event Cards Grid */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-20 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                <Calendar className="w-12 h-12 text-outline mx-auto mb-3" />
                <h3 className="font-headline-md text-headline-md text-on-background">Inga evenemang matchade din sökning</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Prova att ändra filter eller söka efter en annan plats.
                </p>
                <button
                  onClick={() => {
                    setActiveTab("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md"
                >
                  Återställ filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => {
                  const IconComponent = event.icon;
                  const remainingSeats = Math.max(0, event.totalCapacity - event.attendees);

                  return (
                    <article
                      key={event.id}
                      className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 overflow-hidden shadow-sm hover:shadow-xl transition duration-200 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-105 transition duration-500"
                          />
                          <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface text-label-sm font-label-sm font-bold px-3 py-1 rounded-md shadow-xs">
                            {event.date}
                          </div>
                          <div
                            className={`absolute top-3 right-3 text-label-sm font-label-sm font-semibold px-2.5 py-0.5 rounded-full ${event.badgeClass}`}
                          >
                            {event.categoryLabel}
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-1.5 text-on-surface-variant text-body-sm font-body-sm mb-1">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-on-surface-variant text-body-sm font-body-sm mb-3">
                            <IconComponent className="w-3.5 h-3.5 text-primary" />
                            <span>{event.location}</span>
                          </div>

                          <h3 className="font-headline-md text-headline-md text-on-background group-hover:text-primary transition-colors">
                            <Link href={event.slug}>{event.title}</Link>
                          </h3>

                          <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-2">
                            {event.description}
                          </p>

                          {/* Remaining capacity bar */}
                          <div className="mt-4 pt-4 border-t border-outline-variant/30">
                            <div className="flex items-center justify-between text-xs text-outline mb-1.5">
                              <span>Bokade platser: {event.attendees}</span>
                              <span className="font-semibold text-primary">{remainingSeats} kvar</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
                              <div
                                className="h-full bg-primary-container rounded-full"
                                style={{ width: `${Math.min(100, (event.attendees / event.totalCapacity) * 100)}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-6 pb-6 pt-3 flex items-center justify-between gap-3">
                        <Link
                          href={event.slug}
                          className="flex-1 text-center border border-outline-variant hover:border-primary text-on-surface hover:text-primary text-label-md font-label-md py-2.5 rounded-lg transition"
                        >
                          Mer information
                        </Link>
                        <button
                          type="button"
                          onClick={() => setRsvpOpen(true)}
                          className="flex-1 bg-primary-container text-on-primary hover:bg-secondary text-label-md font-label-md py-2.5 rounded-lg transition shadow-xs flex items-center justify-center gap-1"
                        >
                          <span>Boka gratis</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      <RSVPModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
      <SwishModal isOpen={swishOpen} onClose={() => setSwishOpen(false)} />
      <PrayerModal isOpen={prayerOpen} onClose={() => setPrayerOpen(false)} />
      <VolunteerModal isOpen={volunteerOpen} onClose={() => setVolunteerOpen(false)} />
    </div>
  );
}

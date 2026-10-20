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
  Clock,
  MapPin,
  Users,
  ShieldCheck,
  CheckCircle,
  Share2,
  CalendarPlus,
  ArrowLeft,
  Sparkles,
  Music,
  Heart,
} from "lucide-react";

export default function HolySpiritWorshipPage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  // Direct RSVP Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: "holy-spirit-worship-2026",
          name,
          email,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Bokningen misslyckades. Vänligen försök igen.");
      }

      setConfirmed(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Ett fel uppstod.";
      setErrorMsg(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const shareLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Holy Spirit Worship 2026 — GOSPELS"
  )}&dates=20261018T160000Z/20261018T193000Z&details=${encodeURIComponent(
    "En kväll av helig lovsång, bön och gemenskap i Frihamnen Church med Gospels. Fri entré."
  )}&location=${encodeURIComponent("Frihamnen Church, Frihamnen 12, 417 55 Göteborg")}`;

  return (
    <div className="bg-background text-on-surface antialiased font-body-md text-body-md min-h-screen flex flex-col">
      <Navbar
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
        onOpenPrayer={() => setPrayerOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Bar */}
        <div className="bg-surface-container-low border-b border-outline-variant/30 py-3">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-2 text-body-sm text-outline">
            <Link href="/" className="hover:text-primary transition">Hem</Link>
            <span>/</span>
            <Link href="/events" className="hover:text-primary transition">Evenemang</Link>
            <span>/</span>
            <span className="text-on-surface font-semibold">Holy Spirit Worship 2026</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-on-background text-surface py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTYNWYf6T944Ks-J_VkQzdXhL5g9ViSXo1X72RK9WWouMHEspLjCOtg-nbaGqu6wnZB6yRZjg0E3rQAdMTvjiZaCK7p7WN3KQhWdOVv_eagNA5gcg_bjzrcdbexTVR79_maRwMkpLcVH5P8qWuiotkGnbs-IiIaiZH_jy9kt-g4hhGlGwukSASaHNW7VPWUkk60QLnZChwbvxW6UL_u-rmuJDOEOTO5gBXZDI8TLUiaIQUjRuIk_Qx3A"
              alt="Holy Spirit Worship in industrial chapel"
              fill
              priority
              className="object-cover opacity-40 mix-blend-luminosity filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/80 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/20 border border-secondary-container/40 text-primary-fixed text-label-sm font-label-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Flaggskeppskonsert • Fri entré</span>
            </div>

            <h1 className="font-display-hero text-display-hero text-white tracking-tight leading-tight max-w-4xl">
              Holy Spirit Worship 2026
            </h1>

            <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mt-4 leading-relaxed">
              En regional helafton med innerlig akustisk förbön, mäktig gospelkör och profetisk lovsång i Frihamnskyrkans historiska kapell.
            </p>

            {/* Event Key Facts Row */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="flex items-center gap-3 bg-surface-container-lowest/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <Calendar className="w-5 h-5 text-primary-fixed shrink-0" />
                <div>
                  <p className="text-xs text-surface-variant font-medium">Datum</p>
                  <p className="text-sm font-bold text-white">Lördag 18 Okt 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-container-lowest/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <Clock className="w-5 h-5 text-primary-fixed shrink-0" />
                <div>
                  <p className="text-xs text-surface-variant font-medium">Tid</p>
                  <p className="text-sm font-bold text-white">18:00 – 21:30</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-container-lowest/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <MapPin className="w-5 h-5 text-primary-fixed shrink-0" />
                <div>
                  <p className="text-xs text-surface-variant font-medium">Plats</p>
                  <p className="text-sm font-bold text-white">Frihamnen Church, Gbg</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content & Booking Grid */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Schedule & Program Details (7 cols) */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
                    Om Samlingen
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Holy Spirit Worship är en samlingspunkt för kristna och sökande från hela Västsverige. Under en hel kväll lägger vi åt sidan alla samfundsgränser för att fördjupa oss i tillbedjan, bön för Göteborg och personlig förnyelse.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                    Musiken leds av Gothenburg United Gospel Choir tillsammans med gästande lovsångsledare och musiker från lokala församlingar. Det finns gott om utrymme för stillhet, förbön med erfarna förebedjare och gemenskap vid fikat.
                  </p>
                </div>

                {/* Evening Schedule Timeline */}
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-6">
                    Program &amp; Tider
                  </h3>
                  <div className="space-y-4 border-l-2 border-primary-container/40 pl-6 ml-2">
                    <div className="relative">
                      <span className="w-3.5 h-3.5 rounded-full bg-primary-container absolute -left-[31px] top-1"></span>
                      <p className="text-sm font-bold text-primary">17:30 — Dörrarna öppnas</p>
                      <p className="text-sm text-on-surface-variant mt-0.5">Välkomstmingel, te och kaffe i foajén.</p>
                    </div>

                    <div className="relative">
                      <span className="w-3.5 h-3.5 rounded-full bg-primary-container absolute -left-[31px] top-1"></span>
                      <p className="text-sm font-bold text-primary">18:00 — Samlingen inleds</p>
                      <p className="text-sm text-on-surface-variant mt-0.5">Akustisk inledning och gemensam psalmton med hela församlingen.</p>
                    </div>

                    <div className="relative">
                      <span className="w-3.5 h-3.5 rounded-full bg-primary-container absolute -left-[31px] top-1"></span>
                      <p className="text-sm font-bold text-primary">19:15 — Förbön för Göteborg &amp; Vittnesbörd</p>
                      <p className="text-sm text-on-surface-variant mt-0.5">Riktad bön för stadens unga, skolor och församlingar. Öppen förbön i sidoskeppet.</p>
                    </div>

                    <div className="relative">
                      <span className="w-3.5 h-3.5 rounded-full bg-primary-container absolute -left-[31px] top-1"></span>
                      <p className="text-sm font-bold text-primary">20:15 — United Gospel Choir Lovsångsblock</p>
                      <p className="text-sm text-on-surface-variant mt-0.5">Full gospelkör med blås- och kompsektion.</p>
                    </div>

                    <div className="relative">
                      <span className="w-3.5 h-3.5 rounded-full bg-primary-container absolute -left-[31px] top-1"></span>
                      <p className="text-sm font-bold text-primary">21:30 — Avslutning &amp; Eftermingel</p>
                      <p className="text-sm text-on-surface-variant mt-0.5">Gemenskap och efterbön för den som önskar.</p>
                    </div>
                  </div>
                </div>

                {/* Practical Information */}
                <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-4">
                  <h4 className="font-headline-sm text-headline-sm text-on-background font-semibold">
                    Praktisk Information &amp; Resväg
                  </h4>
                  <ul className="space-y-2 text-body-sm text-on-surface-variant">
                    <li>• <strong>Hållplats:</strong> Frihamnen (Buss 16, 17, 31 eller Spårvagn 5, 6 till Frihamnen).</li>
                    <li>• <strong>Parkering:</strong> Begränsat antal avgiftsbelagda platser finns runt Frihamnskyrkan och Jubileumsparken.</li>
                    <li>• <strong>Tillgänglighet:</strong> Lokalen är rullstolsanpassad med hörslinga och ramp vid sidoentrén.</li>
                    <li>• <strong>Kostnad:</strong> Fri entré för alla. Frivillig kollekt/Swish-gåva tas upp till föreningens öppna gatukonserter.</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Instant Booking Card (5 cols) */}
              <div className="lg:col-span-5 sticky top-24">
                <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                    <div>
                      <span className="text-xs uppercase font-semibold text-primary tracking-wider">Fri entrébiljett</span>
                      <h3 className="font-headline-md text-headline-md text-on-background mt-0.5">Boka din plats</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary font-bold text-xs">
                      100% Gratis
                    </span>
                  </div>

                  {confirmed ? (
                    <div className="mt-6 text-center space-y-4 py-4">
                      <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
                      <h4 className="font-headline-md text-headline-md text-on-background">
                        Tack, din plats är bokad!
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        En bekräftelse har skickats till <strong>{email}</strong>. Vi ser så mycket fram emot att mötas i Frihamnen!
                      </p>

                      <div className="pt-2 flex flex-col gap-2">
                        <a
                          href={calendarUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary hover:bg-secondary font-label-md text-label-md py-3 rounded-lg shadow-sm transition"
                        >
                          <CalendarPlus className="w-4 h-4" />
                          <span>Lägg till i kalender</span>
                        </a>

                        <button
                          type="button"
                          onClick={shareLink}
                          className="w-full inline-flex items-center justify-center gap-2 border border-outline-variant hover:border-primary text-on-surface font-label-md text-label-md py-2.5 rounded-lg transition"
                        >
                          <Share2 className="w-4 h-4" />
                          <span>{copiedLink ? "Länk kopierad!" : "Dela evenemanget"}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleBooking} className="mt-6 space-y-4">
                      {errorMsg && (
                        <div className="p-3 rounded-lg bg-error-container text-on-error-container text-body-sm">
                          {errorMsg}
                        </div>
                      )}

                      <div>
                        <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="book-name">
                          För- och efternamn
                        </label>
                        <input
                          id="book-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Anna Andersson"
                          className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 py-2.5 px-3.5 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="book-email">
                          E-postadress (för biljettbekräftelse)
                        </label>
                        <input
                          id="book-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="anna@exempel.se"
                          className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 py-2.5 px-3.5 transition"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary hover:bg-secondary font-label-md text-label-md py-3.5 rounded-lg shadow-md custom-halo transition duration-150 active:scale-95 disabled:opacity-50"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>{submitting ? "Bokar plats..." : "Säkra min fribiljett"}</span>
                        </button>
                      </div>

                      <p className="text-[11px] text-outline text-center">
                        Ingen betalning eller konto krävs. Dina uppgifter sparas endast för deltagarhantering och påminnelse.
                      </p>
                    </form>
                  )}

                  {/* Seat Counter Strip */}
                  <div className="mt-6 pt-6 border-t border-outline-variant/30 flex items-center justify-between text-body-sm">
                    <span className="text-outline">Bokningsstatus:</span>
                    <span className="font-semibold text-primary">340 av 500 platser fyllda</span>
                  </div>
                </div>
              </div>
            </div>
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

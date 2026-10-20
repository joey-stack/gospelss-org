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
  ArrowRight,
  Sparkles,
  Music,
  Heart,
  Megaphone,
} from "lucide-react";

export default function GoteborgsLovsangskonsertPage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const [savedEmail, setSavedEmail] = useState("");
  const [remindSuccess, setRemindSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSaveDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (savedEmail) {
      setRemindSuccess(true);
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
    "Göteborgs Lovsångskonsert 2027 — GOSPELS"
  )}&dates=20270612T120000Z/20270612T190000Z&details=${encodeURIComponent(
    "Västsveriges största öppna gospelkonsert i hjärtat av Göteborg med över 200 musiker och 35 församlingar. Fri entré."
  )}&location=${encodeURIComponent("Gustav Adolfs Torg, 411 10 Göteborg")}`;

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
            <span className="text-on-surface font-semibold">Göteborgs Lovsångskonsert 2027</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-on-background text-surface py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2Xzb92yWXgjAm17QCeGSYsbsHRUUTHHBr_aMx7cdjSnxNRuqvTU7iFahaU-GISdmahfZTfvuFmNj5fMXPGSVd47gEDS9-PoiyYkCf9hLhErmUkMsOjdkHSWQve3zfZAo5h-ifhOYCTxyPKxC9rMCLD5HauJHs49Ef3FNaH0HZxTXv9iuZBjUekM8FdBs3ALM1ui7uCX0TE0yBsOcAsnreegDmkW-O86E9KVJg1HZ6hAZ9FMzNSkDz7Q"
              alt="Open-air gospel concert in Gustav Adolfs Torg"
              fill
              priority
              className="object-cover opacity-45 mix-blend-luminosity filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/80 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container/20 border border-primary-container/40 text-primary-fixed text-label-sm font-label-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Sommarfestival 2027 • Offentlig samling</span>
            </div>

            <h1 className="font-display-hero text-display-hero text-white tracking-tight leading-tight max-w-4xl">
              Göteborgs Lovsångskonsert 2027
            </h1>

            <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mt-4 leading-relaxed">
              Över 200 musiker, 35 partnerförsamlingar och tusentals göteborgare samlas mitt i stadens hjärta på Gustav Adolfs Torg för att proklamera hopp, tro och helig tillbedjan.
            </p>

            {/* Key Facts */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="flex items-center gap-3 bg-surface-container-lowest/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <Calendar className="w-5 h-5 text-primary-fixed shrink-0" />
                <div>
                  <p className="text-xs text-surface-variant font-medium">Datum</p>
                  <p className="text-sm font-bold text-white">Lördag 12 Juni 2027</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-container-lowest/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <Clock className="w-5 h-5 text-primary-fixed shrink-0" />
                <div>
                  <p className="text-xs text-surface-variant font-medium">Tid</p>
                  <p className="text-sm font-bold text-white">14:00 – 21:00</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-container-lowest/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <MapPin className="w-5 h-5 text-primary-fixed shrink-0" />
                <div>
                  <p className="text-xs text-surface-variant font-medium">Plats</p>
                  <p className="text-sm font-bold text-white">Gustav Adolfs Torg</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content & Save-the-date Grid */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
                    Västsveriges Största Ekumeniska Lovsångskonsert
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Göteborgs Lovsångskonsert är föreningens största årliga satsning. Mitt under den ljusaste sommardagen reser vi en modern scen med förstklassig ljudproduktion och bjuder in hela staden till en dag fylld av gospel, samtida lovsång och kristen enhet.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                    Ingen entréavgift tas ut — konserten är en gåva från stadens kyrkor till Göteborgs invånare och besökare.
                  </p>
                </div>

                {/* Festival Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-2">
                    <Music className="w-6 h-6 text-primary" />
                    <h4 className="font-headline-sm text-headline-sm text-on-background font-semibold">
                      200+ Körsångare
                    </h4>
                    <p className="text-body-sm text-on-surface-variant">
                      Körsångare från ett trettiotal församlingar övar under våren för att tillsammans bilda en mäktig masskör.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-2">
                    <Users className="w-6 h-6 text-primary" />
                    <h4 className="font-headline-sm text-headline-sm text-on-background font-semibold">
                      Öppen Servering &amp; Bön
                    </h4>
                    <p className="text-body-sm text-on-surface-variant">
                      Gratis kaffe, bullar, förbönstält och gemenskapstorg med aktiviteter för barn och unga.
                    </p>
                  </div>
                </div>

                {/* Choir Participation Callout */}
                <div className="p-8 rounded-2xl bg-primary-container/10 border border-primary-container/40 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-background">
                      Vill du sjunga i festivalens masskör?
                    </h4>
                    <p className="text-body-md text-on-surface-variant mt-1">
                      Körövningarna startar i mars 2027. Alla sångare oavsett körbakgrund är välkomna att anmäla intresse!
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setVolunteerOpen(true)}
                    className="shrink-0 px-5 py-3 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-secondary transition"
                  >
                    Anmäl körintresse
                  </button>
                </div>
              </div>

              {/* Right Column: Save the Date & Calendar Sync (5 cols) */}
              <div className="lg:col-span-5 sticky top-24">
                <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 shadow-xl">
                  <span className="text-xs uppercase font-semibold text-primary tracking-wider">Save the Date</span>
                  <h3 className="font-headline-md text-headline-md text-on-background mt-1">
                    Boka in 12 Juni 2027
                  </h3>
                  <p className="text-body-md text-on-surface-variant mt-2">
                    Spara datumet direkt i din telefonkalender eller ange din e-post för att få programschema och nyheter inför konserten.
                  </p>

                  <div className="mt-6 space-y-3">
                    <a
                      href={calendarUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary hover:bg-secondary font-label-md text-label-md py-3.5 rounded-xl shadow-md custom-halo transition"
                    >
                      <CalendarPlus className="w-5 h-5" />
                      <span>Spara i min kalender</span>
                    </a>

                    <button
                      type="button"
                      onClick={shareLink}
                      className="w-full inline-flex items-center justify-center gap-2 border border-outline-variant hover:border-primary text-on-surface font-label-md text-label-md py-3 rounded-xl transition"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>{copiedLink ? "Länk kopierad!" : "Dela festivalen med vänner"}</span>
                    </button>
                  </div>

                  {/* Email Reminder Box */}
                  <div className="mt-8 pt-6 border-t border-outline-variant/30">
                    <h4 className="text-sm font-semibold text-on-surface mb-2">Få påminnelse när programmet släpps</h4>
                    {remindSuccess ? (
                      <div className="p-4 rounded-xl bg-primary-container/10 border border-primary-container text-center text-sm text-primary font-medium">
                        Tack! Vi skickar en påminnelse inför konsertdagen.
                      </div>
                    ) : (
                      <form onSubmit={handleSaveDate} className="space-y-2">
                        <input
                          type="email"
                          required
                          value={savedEmail}
                          onChange={(e) => setSavedEmail(e.target.value)}
                          placeholder="namn@exempel.se"
                          className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-sm py-2.5 px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        />
                        <button
                          type="submit"
                          className="w-full bg-on-background hover:bg-slate-800 text-surface text-sm font-semibold py-2.5 rounded-lg transition"
                        >
                          Påminn mig
                        </button>
                      </form>
                    )}
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

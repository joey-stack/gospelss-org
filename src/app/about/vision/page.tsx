"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import { Sparkles, Heart, Shield, Music, CheckCircle2, ArrowRight } from "lucide-react";

export default function VisionPage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  return (
    <div className="bg-background text-on-surface antialiased font-body-md text-body-md min-h-screen flex flex-col">
      <Navbar
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
        onOpenPrayer={() => setPrayerOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-surface-container-low border-b border-outline-variant/30 py-3">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 flex items-center gap-2 text-body-sm text-outline">
            <Link href="/" className="hover:text-primary transition">Hem</Link>
            <span>/</span>
            <Link href="/om-oss" className="hover:text-primary transition">Om oss</Link>
            <span>/</span>
            <span className="text-on-surface font-semibold">Vision &amp; Teologi</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/30 text-center">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-4xl mx-auto">
            <span className="text-xs uppercase font-semibold text-primary tracking-wider">
              Teologisk Grund &amp; Riktning
            </span>
            <h1 className="font-display-hero text-display-hero text-on-background mt-2">
              Vision, Mission &amp; Värderingar
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed max-w-2xl mx-auto">
              Vi drivs av övertygelsen att Jesus Kristus är evangeliets centrum, och att kristen enhet i bön och lovsång bär kraften att förvandla en stad.
            </p>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="py-16 bg-surface">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/50 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background">Vår Vision</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Att se Göteborg och Västsverige förvandlat genom helig tillbedjan, där varje stadsdel och generation får uppleva Guds närvaro och kärlek i offentliga rum.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/50 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-container/60 text-secondary flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background">Vår Mission</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Att anordna 100% kostnadsfria lovsångskonserter, träna unga musiker och lovsångsledare samt förena stadens kyrkor i gemensam förbön och diakoni.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="font-headline-lg text-headline-lg text-on-background mb-6 text-center">
                Våra Fyra Grundpelare
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Helighet",
                    desc: "Djup gudsfruktan och innerlig tillbedjan i Ande och sanning.",
                  },
                  {
                    title: "Välkomnande",
                    desc: "Radikal öppenhet och värme mot varje sökande människa.",
                  },
                  {
                    title: "Excellens",
                    desc: "Musikalisk, teknisk och organisatorisk omsorg till Guds ära.",
                  },
                  {
                    title: "Givmildhet",
                    desc: "100% fri entré för att evangeliet ska vara tillgängligt för alla.",
                  },
                ].map((val) => (
                  <div
                    key={val.title}
                    className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h4 className="font-headline-sm text-headline-sm text-on-background font-semibold">
                      {val.title}
                    </h4>
                    <p className="text-body-sm text-on-surface-variant">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Theological Statement */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/50 shadow-sm space-y-4">
              <h3 className="font-headline-md text-headline-md text-on-background">
                Teologisk Förankring &amp; Ekumenisk Enhet
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                GOSPELS vilar på klassisk kristen bekännelse grundad i Bibeln som Guds ord, de tre fornkyrkliga trosbekännelserna (den Apostoliska, Nicenska och Athanasianska) och <em>Lausanne-deklarationen</em>. Vi bejakar hela Kristi kropp och samarbetar med församlingar från Svenska kyrkan, Pingströrelsen, Equmeniakyrkan, EFK, Frälsningsarmén och Katolska kyrkan.
              </p>
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

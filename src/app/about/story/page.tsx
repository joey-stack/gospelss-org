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
import { Sparkles, Calendar, Heart, Shield, ArrowRight } from "lucide-react";

export default function StoryPage() {
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
            <span className="text-on-surface font-semibold">Vår Berättelse</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-xs uppercase font-semibold text-primary tracking-wider">
              Våra Rötter • Grundat 2021
            </span>
            <h1 className="font-display-hero text-display-hero text-on-background mt-2">
              Berättelsen om GOSPELS
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
              Hur en liten bönegrupp av unga musiker och pastorer i Göteborg växte till en rörelse för offentlig tillbedjan och kristen enhet i Västsverige.
            </p>
          </div>
        </section>

        {/* Narrative Chapters */}
        <section className="py-16 bg-surface">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
                1. Fröet i Pandemins Skugga (2021)
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Under hösten 2021 samlades en grupp kristna studenter, musiker och ungdomsledare från olika församlingar i Göteborg — Smyrna, Betlehemskyrkan och Frälsningsarmén — för att be för staden. Göteborg präglades, liksom många andra europeiska storstäder, av ensamhet, psykisk ohälsa bland unga och splittring.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                Ur dessa bönestunder föddes en enkel men brinnande längtan: att ta lovsången ut ur kyrksalarna och föra ut evangeliet i full frihet på stadens torg och gator.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/40">
              <blockquote className="font-scripture-quote text-scripture-quote italic text-on-surface leading-relaxed">
                ”Vi insåg att staden inte behövde ytterligare en intern konferens; Göteborg behövde få höra sången om Guds nåd ljuda öppet mitt i vimlet.”
              </blockquote>
              <cite className="block text-xs uppercase tracking-wider text-primary font-semibold mt-3 not-italic">
                — Grundargruppen, Göteborg 2021
              </cite>
            </div>

            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
                2. Första Stegen på Brunnsparken &amp; Haga (2022–2024)
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Föreningen formaliserades som en ideell förening (Org.nr: 802557-4883). Med enkla tillstånd, ett litet PA-system och varma kaffekannor ställde vi oss i Brunnsparken. Reaktionen var överväldigande. Unga människor som aldrig satt sin fot i en kyrka stannade och lyssnade med tårar i ögonen.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                Snart anslöt fler musiker, och konceptet <em>Holy Spirit Worship</em> etablerades som regionala helaftnar med djup tillbedjan och personlig förbön.
              </p>
            </div>

            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
                3. Mot Framtiden — Förenade för Göteborg (2025–2027)
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Idag samverkar Gospels med över 40 församlingar i Västsverige. Vårt mål inför 2027 är att samla 5 000 röster på Gustav Adolfs Torg och fortsätta träna nästa generations lovsångsledare och musiker i andlig och musikalisk excellens.
              </p>
            </div>

            {/* Navigation links */}
            <div className="pt-8 border-t border-outline-variant/30 flex items-center justify-between">
              <Link href="/about/vision" className="text-primary font-semibold inline-flex items-center gap-1.5 hover:underline">
                <span>Läs om vår Vision &amp; Teologi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about/team" className="text-primary font-semibold inline-flex items-center gap-1.5 hover:underline">
                <span>Möt vårt Team &amp; Ledarskap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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

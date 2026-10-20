"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import { ShieldCheck, Building, FileText, CheckCircle } from "lucide-react";

export default function OrganisationPage() {
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
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-2 text-body-sm text-outline">
            <Link href="/" className="hover:text-primary transition">Hem</Link>
            <span>/</span>
            <span className="text-on-surface font-semibold">Organisationsinformation</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/30 text-center">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/50 text-secondary text-label-sm font-label-sm mb-4">
              <Building className="w-4 h-4" />
              <span>Svensk Ideell Förening • Org.nr 802557-4883</span>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-background mt-2">
              Organisation &amp; Transparens
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed max-w-2xl mx-auto">
              Full insyn och ansvarsskyldighet är en självklarhet. Här hittar du juridisk information, säte och riktlinjer för GOSPELS.
            </p>
          </div>
        </section>

        {/* Legal Details Grid */}
        <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 shadow-sm space-y-6">
              <h3 className="font-headline-md text-headline-md text-on-background">
                Föreningsuppgifter
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-body-md">
                <div>
                  <span className="text-xs uppercase text-outline font-semibold block">Officiellt namn</span>
                  <span className="font-bold text-on-background">GOSPELS Musikförening</span>
                </div>
                <div>
                  <span className="text-xs uppercase text-outline font-semibold block">Organisationsnummer</span>
                  <span className="font-mono font-bold text-on-background">802557-4883</span>
                </div>
                <div>
                  <span className="text-xs uppercase text-outline font-semibold block">Säte &amp; Län</span>
                  <span className="text-on-background">Göteborg, Västra Götalands län</span>
                </div>
                <div>
                  <span className="text-xs uppercase text-outline font-semibold block">Juridisk form</span>
                  <span className="text-on-background">Ideell förening (Kategori A)</span>
                </div>
                <div>
                  <span className="text-xs uppercase text-outline font-semibold block">Bankgiro</span>
                  <span className="font-mono font-bold text-on-background">512-3456</span>
                </div>
                <div>
                  <span className="text-xs uppercase text-outline font-semibold block">Swish</span>
                  <span className="font-mono font-bold text-on-background">123 456 78 90</span>
                </div>
              </div>
            </div>

            {/* Governance & Bylaws */}
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 shadow-sm space-y-4">
              <h3 className="font-headline-md text-headline-md text-on-background">
                Stadgar &amp; Insamlingskontroll
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Föreningens högsta beslutande organ är årsmötet, där medlemmar utser styrelse och revisorer. All insamlingsverksamhet granskas kontinuerligt enligt Svensk Insamlingskontrolls standarder.
              </p>
              <ul className="space-y-2 text-body-sm text-on-surface-variant pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Minst 75% av totala intäkter används för det ideella ändamålet.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Styrelseledamöter arbetar oavlönat för styrelseuppdraget.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Auktoriserad revisor granskar årsredovisning och förvaltning.</span>
                </li>
              </ul>
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

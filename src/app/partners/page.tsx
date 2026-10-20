"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import {
  Church,
  MapPin,
  Users,
  Search,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function PartnersPage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const [activeDenom, setActiveDenom] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const partnerChurches = [
    {
      name: "Smyrna Göteborg",
      district: "Frihamnen / Centrum",
      denom: "Pingst",
      role: "Värdförsamling & Körsamarbete",
    },
    {
      name: "Betlehemskyrkan",
      district: "Vasastan",
      denom: "Equmeniakyrkan",
      role: "Ungdomskvällar & Lovsångsakademi",
    },
    {
      name: "Fiskebäcks Missionskyrka",
      district: "Västra Göteborg",
      denom: "Equmeniakyrkan",
      role: "Körsångare & Ledarstöd",
    },
    {
      name: "Sankt Pauli Församling",
      district: "Örgryte",
      denom: "Svenska kyrkan",
      role: "Ekumenisk Bön & Diakoni",
    },
    {
      name: "Frälsningsarmén Göteborg",
      district: "Haga / Nordstaden",
      denom: "Frälsningsarmén",
      role: "Gatuuppsökande Team & Servering",
    },
    {
      name: "Korskyrkan Göteborg",
      district: "Gamlestaden",
      denom: "EFK",
      role: "Förbönsteam & Unga Vuxna",
    },
    {
      name: "Hagakyrkan",
      district: "Haga",
      denom: "Svenska kyrkan",
      role: "Akustiska Lovsångssessioner",
    },
    {
      name: "Centrumkyrkan Kortedala",
      district: "Kortedala",
      denom: "Pingst",
      role: "Förortsevangelisation & Ljudstöd",
    },
  ];

  const filteredChurches = partnerChurches.filter((ch) => {
    const matchesDenom = activeDenom === "all" || ch.denom === activeDenom;
    const matchesSearch =
      ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.denom.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDenom && matchesSearch;
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
        {/* Breadcrumb */}
        <div className="bg-surface-container-low border-b border-outline-variant/30 py-3">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-2 text-body-sm text-outline">
            <Link href="/" className="hover:text-primary transition">Hem</Link>
            <span>/</span>
            <span className="text-on-surface font-semibold">Partnerförsamlingar</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/30 text-center">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/50 text-secondary text-label-sm font-label-sm mb-4">
              <Church className="w-4 h-4" />
              <span>Ekumenisk Enhet i Västsverige • 40+ Församlingar</span>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-background mt-2">
              Partnerförsamlingar
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed max-w-2xl mx-auto">
              Vi tror inte på silos. GOSPELS samlar kristna från stadens alla traditioner — tillsammans för att prisa Gud och tjäna Göteborg.
            </p>

            <div className="mt-8">
              <Link
                href="/partners/become"
                className="inline-flex items-center gap-2 bg-primary-container text-on-primary hover:bg-secondary font-label-md px-6 py-3.5 rounded-xl shadow-md custom-halo transition"
              >
                <span>Bli Partnerförsamling</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Directory Controls & Cards */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-outline-variant/30">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                {[
                  { id: "all", label: "Alla Samfund" },
                  { id: "Pingst", label: "Pingst" },
                  { id: "Equmeniakyrkan", label: "Equmenia" },
                  { id: "Svenska kyrkan", label: "Sv. kyrkan" },
                  { id: "Frälsningsarmén", label: "Frälsningsarmén" },
                  { id: "EFK", label: "EFK" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveDenom(tab.id)}
                    className={`px-4 py-2 rounded-full font-label-md text-label-md transition whitespace-nowrap ${
                      activeDenom === tab.id
                        ? "bg-primary-container text-on-primary shadow-xs font-bold"
                        : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[260px]">
                <Search className="w-4 h-4 text-outline absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Sök kyrka eller stadsdel..."
                  className="w-full rounded-full border border-outline-variant/60 bg-surface-container-lowest text-on-surface text-body-sm pl-10 pr-4 py-2 focus:border-primary transition"
                />
              </div>
            </div>

            {/* Churches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredChurches.map((church) => (
                <div
                  key={church.name}
                  className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition"
                >
                  <div>
                    <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary-container/10">
                      {church.denom}
                    </span>
                    <h3 className="font-headline-md text-lg font-bold text-on-background mt-3">
                      {church.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-outline mt-1 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{church.district}</span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant leading-relaxed">
                      {church.role}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-outline-variant/30 text-xs text-primary font-semibold flex items-center justify-between">
                    <span>Aktiv Partner</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              ))}
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

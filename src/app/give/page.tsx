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
  Heart,
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
  CreditCard,
  Building,
  Sparkles,
  ArrowRight,
  HandHeart,
} from "lucide-react";

export default function GivePage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const [selectedPreset, setSelectedPreset] = useState<number | "custom">(150);
  const [customAmount, setCustomAmount] = useState("");
  const [copiedSwish, setCopiedSwish] = useState(false);
  const [copiedBg, setCopiedBg] = useState(false);

  const handleCopySwish = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("1234567890");
      setCopiedSwish(true);
      setTimeout(() => setCopiedSwish(false), 2000);
    }
  };

  const handleCopyBg = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("512-3456");
      setCopiedBg(true);
      setTimeout(() => setCopiedBg(false), 2000);
    }
  };

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
            <span className="text-on-surface font-semibold">Gåvor &amp; Stöd</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/30 text-center">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <span className="text-xs uppercase font-semibold text-primary tracking-wider">
              Ideellt Gåvoarbete • 90-Konto
            </span>
            <h1 className="font-display-hero text-display-hero text-on-background mt-2">
              Stöd Lovsången i Göteborg
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed max-w-2xl mx-auto">
              100% av våra samlingar och konserter är gratis för allmänheten. Din gåva möjliggör scenbygge, professionell ljudutrustning, ungas musikutbildning och gatuevangelisation.
            </p>
          </div>
        </section>

        {/* Giving Methods Grid */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Swish Method Card (6 cols) */}
              <div className="lg:col-span-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                      S
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-background">Swish Direktgåva</h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    Svenskt 1-klick
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 bg-surface-container-low p-6 rounded-xl border border-outline-variant/40">
                  {/* Swish QR SVG */}
                  <div className="w-36 h-36 bg-white p-3 rounded-xl border border-outline-variant flex flex-col items-center justify-between shrink-0 shadow-xs">
                    <div className="flex items-center justify-between w-full px-1">
                      <span className="text-[10px] font-bold text-slate-800">Swish</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <svg className="w-24 h-24 text-on-background" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm8-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h4v4h-2v-2h-2v-2zm2-2h2v2h-2v-2zm-4 4h-2v2h2v-2zM6 6h2v2H6V6zm12 0h2v2h-2V6zm-12 12h2v2H6v-2z"></path>
                    </svg>
                    <span className="text-[9px] font-mono text-outline">Skanna i appen</span>
                  </div>

                  <div className="space-y-3 w-full">
                    <div>
                      <span className="text-xs uppercase text-outline font-semibold">Swish-nummer</span>
                      <div className="flex items-center justify-between mt-0.5">
                        <span className="font-mono font-bold text-lg text-on-background">123 456 78 90</span>
                        <button
                          type="button"
                          onClick={handleCopySwish}
                          className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-variant text-xs font-semibold flex items-center gap-1 transition"
                        >
                          {copiedSwish ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-600">Kopierat!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Kopiera</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-outline">
                      Mottagare: <strong>GOSPELS Musikförening</strong> • Märkes: GÅVA
                    </p>
                  </div>
                </div>

                {/* Preset Amount Selector */}
                <div>
                  <span className="text-xs uppercase text-outline font-semibold block mb-2">Välj belopp</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[50, 150, 300, 500].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setSelectedPreset(amt)}
                        className={`py-2 rounded-lg text-sm font-semibold transition ${
                          selectedPreset === amt
                            ? "bg-primary-container text-on-primary shadow-xs"
                            : "border border-outline-variant hover:border-primary text-on-surface"
                        }`}
                      >
                        {amt} kr
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSwishOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary hover:bg-secondary font-label-md py-3.5 rounded-xl shadow-md custom-halo transition"
                >
                  <HandHeart className="w-4 h-4" />
                  <span>Ge gåva via Swish App ({selectedPreset} kr)</span>
                </button>
              </div>

              {/* Recurring Kingdom Partner Card (6 cols) */}
              <div className="lg:col-span-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="font-headline-md text-headline-md text-on-background">Kingdom Partner</h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-container/10 text-primary">
                    Månadsgivare
                  </span>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Som Kingdom Partner bär du visionen långsiktigt. Med 150 kr, 300 kr eller 500 kr i månaden via kort eller autogiro möjliggör du fast planeringshorisont för stora torgkonserter.
                </p>

                {/* Tier Highlights */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-on-background">Partner Bas (150 kr/mån)</p>
                      <p className="text-xs text-outline">Finansierar 1 timmes öppen gatukonsert &amp; bön</p>
                    </div>
                    <span className="font-bold text-primary text-sm">150 kr/mån</span>
                  </div>

                  <div className="p-4 rounded-xl bg-primary-container/10 border border-primary-container flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-on-background">Partner Plus (300 kr/mån)</p>
                      <p className="text-xs text-outline">Möjliggör ungdomsakademi och musikalisk ledarträning</p>
                    </div>
                    <span className="font-bold text-primary text-sm">300 kr/mån</span>
                  </div>
                </div>

                <Link
                  href="/get-involved/kingdom-partners"
                  className="w-full inline-flex items-center justify-center gap-2 bg-on-background hover:bg-slate-800 text-surface font-label-md py-3.5 rounded-xl shadow-md transition"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Bli Månadsgivare online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Bankgiro Alternative */}
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-body-sm">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-outline" />
                    <span>Bankgiro: <strong>512-3456</strong></span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyBg}
                    className="text-xs text-primary font-semibold hover:underline"
                  >
                    {copiedBg ? "Kopierat!" : "Kopiera BG"}
                  </button>
                </div>
              </div>
            </div>

            {/* Accountability & 90-Konto Banner */}
            <div className="mt-12 p-8 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-background font-bold">
                    Tryggt och granskat givande
                  </h4>
                  <p className="text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    GOSPELS (Org.nr: 802557-4883) följer Svensk Insamlingskontrolls etiska riktlinjer. Minst 75% av alla insamlade medel går oavkortat till ändamålet. Fullständig årsredovisning och revisionsberättelse publiceras årligen.
                  </p>
                </div>
              </div>

              <Link
                href="/legal/organisation"
                className="shrink-0 text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                <span>Läs organisationsrapport</span>
                <ArrowRight className="w-3.5 h-3.5" />
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

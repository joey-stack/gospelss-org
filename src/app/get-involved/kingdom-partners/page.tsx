"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import {
  Sparkles,
  Check,
  ShieldCheck,
  Users,
  CreditCard,
  Heart,
  ArrowRight,
  HandHeart,
  CalendarCheck,
} from "lucide-react";

export default function KingdomPartnersPage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const [partnerCount, setPartnerCount] = useState<number>(48);
  const [selectedTier, setSelectedTier] = useState<number>(150);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "swish">("stripe");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("/api/partner/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data.totalPartners) setPartnerCount(data.totalPartners);
      })
      .catch(() => {});
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribing(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/partner/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tierAmount: selectedTier,
          method: paymentMethod,
          name: donorName,
          email: donorEmail,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Prenumerationen misslyckades.");
      }

      setSubscribed(true);
      setPartnerCount((prev) => prev + 1);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Ett fel inträffade.";
      setErrorMsg(msg);
    } finally {
      setSubscribing(false);
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
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 flex items-center gap-2 text-body-sm text-outline">
            <Link href="/" className="hover:text-primary transition">Hem</Link>
            <span>/</span>
            <Link href="/give" className="hover:text-primary transition">Ge</Link>
            <span>/</span>
            <span className="text-on-surface font-semibold">Kingdom Partners</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/30 text-center">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/30 text-primary text-label-sm font-label-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Gemenskap av Månadsgivare • {partnerCount} Aktiva Partners</span>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-background mt-2">
              Bli Kingdom Partner
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed max-w-2xl mx-auto">
              Som Kingdom Partner står du troget med oss varje månad. Ditt stöd bär ljudtillstånd, scener, ungdomsakademi och gatubön över hela Västsverige.
            </p>
          </div>
        </section>

        {/* Tier Cards & Checkout */}
        <section className="py-16 bg-surface">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            {/* 3 Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  amount: 150,
                  name: "Partner Bas",
                  desc: "Finansierar 1 timmes öppen gatukonsert och bön i staden.",
                  features: ["Månadsbrev från ledningen", "Inbjudan till bönefrukostar", "Bönerapporter"],
                },
                {
                  amount: 300,
                  name: "Partner Plus",
                  desc: "Möjliggör ungdomsakademi och musikalisk ledarträning.",
                  features: [
                    "Allt i Bas",
                    "Reserverade sittplatser vid konserter",
                    "GOSPELS Vol. 1 digital EP",
                  ],
                  highlighted: true,
                },
                {
                  amount: 500,
                  name: "Kingdom Builder",
                  desc: "Bär scenbygge och storkonserter på Gustav Adolfs Torg.",
                  features: [
                    "Allt i Plus",
                    "Årligt partnermöte med styrelsen",
                    "Direktkontakt med själavårdsteamet",
                  ],
                },
              ].map((tier) => (
                <div
                  key={tier.amount}
                  onClick={() => setSelectedTier(tier.amount)}
                  className={`rounded-2xl p-8 flex flex-col justify-between cursor-pointer transition relative ${
                    selectedTier === tier.amount
                      ? "bg-surface-container-lowest border-2 border-primary shadow-xl ring-4 ring-primary/10"
                      : "bg-surface-container-lowest border border-outline-variant/40 hover:border-primary shadow-sm"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Mest Populär
                    </span>
                  )}

                  <div>
                    <span className="text-xs font-bold uppercase text-primary tracking-wider">{tier.name}</span>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="font-headline-lg text-4xl font-extrabold text-on-background">
                        {tier.amount}
                      </span>
                      <span className="text-sm font-semibold text-outline">kr/mån</span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                      {tier.desc}
                    </p>

                    <div className="mt-6 pt-6 border-t border-outline-variant/30 space-y-2.5">
                      {tier.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-on-surface">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className={`w-full py-2.5 rounded-lg text-sm font-semibold transition ${
                        selectedTier === tier.amount
                          ? "bg-primary-container text-on-primary shadow-xs"
                          : "border border-outline-variant text-on-surface"
                      }`}
                    >
                      {selectedTier === tier.amount ? "Valt belopp" : "Välj nivå"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Subscription Form */}
            <div className="max-w-xl mx-auto bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 shadow-md">
              <h3 className="font-headline-md text-headline-md text-on-background text-center">
                Slutför ditt Månadsgivande ({selectedTier} kr/mån)
              </h3>
              <p className="text-body-sm text-on-surface-variant text-center mt-1">
                Du kan när som helst avsluta eller ändra ditt givande via e-post eller Mina Sidor.
              </p>

              {subscribed ? (
                <div className="mt-6 p-6 rounded-xl bg-primary-container/10 border border-primary-container text-center space-y-3">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto" />
                  <h4 className="font-headline-md text-headline-md text-on-background">
                    Välkommen som Kingdom Partner!
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Tack {donorName}! En bekräftelse och välkomsthälsning har skickats till <strong>{donorEmail}</strong>. Tillsammans förvandlar vi Göteborg.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-6 space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-error-container text-on-error-container text-body-sm">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="donor-name">
                      Ditt För- och efternamn
                    </label>
                    <input
                      id="donor-name"
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Mikael Larsson"
                      className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 py-2.5 px-3.5 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="donor-email">
                      E-postadress
                    </label>
                    <input
                      id="donor-email"
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="mikael@exempel.se"
                      className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 py-2.5 px-3.5 transition"
                    />
                  </div>

                  {/* Payment method selector */}
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1">
                      Betalningsmetod
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("stripe")}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-semibold transition ${
                          paymentMethod === "stripe"
                            ? "border-primary bg-primary-container/10 text-primary"
                            : "border-outline-variant text-on-surface"
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        <span>Kort / Stripe</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("swish")}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-semibold transition ${
                          paymentMethod === "swish"
                            ? "border-primary bg-primary-container/10 text-primary"
                            : "border-outline-variant text-on-surface"
                        }`}
                      >
                        <HandHeart className="w-4 h-4" />
                        <span>Swish Autogiro</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={subscribing}
                    className="w-full mt-2 bg-primary-container text-on-primary hover:bg-secondary font-label-md py-3.5 rounded-xl shadow-md custom-halo transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    <span>{subscribing ? "Aktiverar..." : `Starta Månadsgivande (${selectedTier} kr/mån)`}</span>
                  </button>

                  <p className="text-[11px] text-outline text-center">
                    Krypterad och säker hantering via Stripe och Swish. Org.nr: 802557-4883.
                  </p>
                </form>
              )}
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

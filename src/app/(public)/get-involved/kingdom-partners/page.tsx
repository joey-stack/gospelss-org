"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function KingdomPartnersPage() {
  const { t } = useLanguage();

  const [partnerCount, setPartnerCount] = useState<number>(48);
  const [selectedTier, setSelectedTier] = useState<number>(150);
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
        throw new Error(data.error || "Prenumeration misslyckades.");
      }

      setSubscribed(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Ett fel uppstod.";
      setErrorMsg(msg);
    } finally {
      setSubscribing(false);
    }
  };

  const tiers = [
    {
      amount: 150,
      name: t("Stödmedlem", "Supporter"),
      tagline: t("Möjliggör gratis entré för 2 personer", "Enables free admission for 2 attendees"),
      perks: [
        t("Månatlig förböns- och visionsrapport", "Monthly prayer & vision briefing"),
        t("Digitalt tackbrev med årsredovisning", "Digital annual stewardship report"),
        t("Inbjudan till årlig partnersamling", "Invitation to annual partners retreat"),
      ],
    },
    {
      amount: 300,
      name: t("Pelare", "Pillar"),
      featured: true,
      tagline: t("Finansierar scenteknik & körarrangemang", "Funds audio staging & choral charts"),
      perks: [
        t("Allt i Stödmedlem", "All Supporter privileges"),
        t("Tidig tillgång till liveinspelningar", "Early access to unreleased master audio"),
        t("Förtur till workshops & körevents", "Priority booking for choral clinics"),
      ],
    },
    {
      amount: 500,
      name: t("Visionär", "Visionary"),
      tagline: t("Bär sommarkonserten på Gustav Adolfs Torg", "Sponsors the open-air city concert"),
      perks: [
        t("Allt i Pelare", "All Pillar privileges"),
        t("Personligt möte med styrelse & ledning", "Quarterly executive briefing with board"),
        t("Särskild förbönsrapportering", "Direct ministerial prayer updates"),
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero */}
      <section className="py-20 lg:py-28 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="brand" shape="md" className="mb-4">
              {t("MÅNADSSTÖD · KINGDOM PARTNERS", "MONTHLY GIVING · KINGDOM PARTNERS")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-6 tracking-tight">
              {t("Bli en Kingdom Partner", "Become a Kingdom Partner")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed mb-6">
              {t(
                "Genom ett månatligt partnerskap bär du visionen om gratis lovsångskonserter i Göteborg. 100% av gåvorna går oavkortat till konsertproduktion, tillstånd och teknisk utrustning.",
                "Through regular monthly giving, you sustain the vision of 100% free worship festivals across Gothenburg. Every krona directly finances concert production, staging permits, and sacred music outreach."
              )}
            </p>
            <div className="flex items-center gap-2 text-body-sm text-brand-700 font-mono font-medium">
              <Users className="w-4 h-4 text-brand-600" />
              <span>{partnerCount} {t("aktiva Kingdom Partners bär arbetet idag", "Kingdom Partners currently supporting the mission")}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Tiers Grid */}
      <section className="py-20 bg-white border-b border-grey-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="overline text-brand-600 font-semibold tracking-wider block mb-2">
              {t("VÄLJ DIN NIVÅ", "CHOOSE YOUR LEVEL")}
            </span>
            <h2 className="h2 text-grey-900 tracking-tight">
              {t("Fasta Månadsgåvor som Förvandlar Staden", "Monthly Seeds Transforming the City")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.amount}
                onClick={() => setSelectedTier(tier.amount)}
                className={`p-8 rounded-3xl border cursor-pointer transition flex flex-col justify-between relative ${
                  selectedTier === tier.amount
                    ? "border-brand-600 bg-brand-50/40 shadow-md ring-2 ring-brand-500/20"
                    : "border-grey-200 bg-grey-50 hover:border-grey-300"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-600 text-white font-mono text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {t("Populärast", "Most Popular")}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="h3 text-grey-900">{tier.name}</h3>
                    <p className="body-xs text-grey-500 mt-1">{tier.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-grey-900 font-sans tracking-tight">
                      {tier.amount}
                    </span>
                    <span className="text-body-sm font-mono text-grey-500 font-semibold">
                      SEK / {t("månad", "mo")}
                    </span>
                  </div>

                  <ul className="space-y-3 pt-6 border-t border-grey-200/80">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-body-sm text-grey-700">
                        <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-grey-200">
                  <div
                    className={`w-full py-2.5 rounded-xl text-center text-body-sm font-semibold transition ${
                      selectedTier === tier.amount
                        ? "bg-brand-600 text-white"
                        : "bg-grey-200 text-grey-700 hover:bg-grey-300"
                    }`}
                  >
                    {selectedTier === tier.amount
                      ? t("✓ Vald Nivå", "✓ Selected Level")
                      : t("Välj denna nivå", "Select level")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Checkout Form */}
      <section className="py-20 bg-grey-50">
        <Container>
          <div className="max-w-xl mx-auto">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-grey-200 shadow-sm">
              {subscribed ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="h3 text-grey-900">
                      {t("Varmt välkommen som Kingdom Partner!", "Welcome as a Kingdom Partner!")}
                    </h2>
                    <p className="body-base text-grey-600">
                      {t(
                        `Tack ${donorName}! Din månadsgåva på ${selectedTier} SEK gör skillnad för tusentals sökande i Göteborg. En bekräftelse har skickats till ${donorEmail}.`,
                        `Thank you ${donorName}! Your monthly pledge of ${selectedTier} SEK transforms lives across Gothenburg. A receipt has been dispatched to ${donorEmail}.`
                      )}
                    </p>
                  </div>
                  <Button asChild variant="brand">
                    <Link href="/about/story">
                      {t("Läs Vår Historia", "Read Our Story")}
                    </Link>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div>
                    <h2 className="h3 text-grey-900 mb-2">
                      {t("Slutför ditt Månadsstöd", "Complete Monthly Pledge")}
                    </h2>
                    <p className="body-sm text-grey-500">
                      {t(
                        `Vald nivå: ${selectedTier} SEK per månad. Kan pausas eller avslutas när som helst.`,
                        `Selected level: ${selectedTier} SEK per month. Can be paused or canceled at any time.`
                      )}
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-body-sm">
                      {errorMsg}
                    </div>
                  )}

                  {/* Payment Method Selector */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("stripe")}
                      className={`p-3.5 rounded-xl border text-center text-body-sm font-semibold transition ${
                        paymentMethod === "stripe"
                          ? "border-brand-600 bg-brand-50 text-brand-800"
                          : "border-grey-300 bg-white text-grey-600 hover:bg-grey-50"
                      }`}
                    >
                      <CreditCard className="w-4 h-4 mx-auto mb-1 text-brand-600" />
                      <span>{t("Kortbetalning", "Card / Stripe")}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("swish")}
                      className={`p-3.5 rounded-xl border text-center text-body-sm font-semibold transition ${
                        paymentMethod === "swish"
                          ? "border-brand-600 bg-brand-50 text-brand-800"
                          : "border-grey-300 bg-white text-grey-600 hover:bg-grey-50"
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-brand-600 text-white font-mono text-[9px] flex items-center justify-center mx-auto mb-1">
                        S
                      </div>
                      <span>{t("Swish Autogiro", "Swish Recurring")}</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                        {t("Ditt Namn *", "Your Name *")}
                      </label>
                      <input
                        type="text"
                        required
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder={t("Förnamn och efternamn", "First and last name")}
                        className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                        {t("E-postadress *", "Email Address *")}
                      </label>
                      <input
                        type="email"
                        required
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="namn@epost.se"
                        className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-grey-50 border border-grey-200 text-body-xs text-grey-600 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{t("Säker kryptering och direkt kvitto via e-post.", "Encrypted transaction and instant email receipt.")}</span>
                  </div>

                  <Button
                    type="submit"
                    variant="brand"
                    size="lg"
                    disabled={subscribing}
                    className="w-full justify-center"
                  >
                    {subscribing ? (
                      t("Behandlar gåva...", "Processing...")
                    ) : (
                      <span>
                        {t(`Bli Partner — ${selectedTier} SEK / mån`, `Join Partner — ${selectedTier} SEK / mo`)}
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

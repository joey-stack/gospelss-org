"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
import { useLanguage } from "@/context/LanguageContext";

export default function GivePage() {
  const { t } = useLanguage();
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

  const activeAmount = selectedPreset === "custom" ? customAmount || "0" : selectedPreset;

  return (
    <div className="w-full bg-white">
      {/* 1. Hero: Generosity */}
      <section className="py-20 lg:py-28 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="brand" shape="md" className="mb-4">
              {t("IDELL GÅVA · 100% FRI ENTRÉ", "NON-PROFIT GIVING · 100% FREE ADMISSION")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-6 tracking-tight">
              {t("Ge en Gåva till Lovsången", "Support Sacred Music in Gothenburg")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed mb-6">
              {t(
                "GOSPELS är en ideell förening som drivs helt utan vinstintresse. Våra konserter och samlingar är alltid 100% gratis för besökare. Din gåva finansierar scenteknik, tillstånd, unga musiker och öppen gemenskap.",
                "GOSPELS is a registered Swedish non-profit operating with zero commercial profit motives. Every gathering is 100% free to the public. Your gift funds high-fidelity audio gear, civic staging permits, and youth mentorship."
              )}
            </p>
            <div className="text-overline text-grey-400 font-mono">
              Gospels Ideell Förening · Org.nr: 802557-4883 · Bankgiro: 512-3456 · Swish: 123 456 78 90
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Giving Options Grid */}
      <section className="py-20 bg-white border-b border-grey-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Swish Direct Transfer Card */}
            <div className="lg:col-span-7 space-y-8">
              <div className="p-8 sm:p-10 rounded-3xl bg-grey-50 border border-grey-200 shadow-sm space-y-8">
                <div>
                  <span className="overline text-brand-600 font-semibold tracking-wider block mb-1">
                    {t("SNABB GÅVA VIA SWISH", "INSTANT GIVING VIA SWISH")}
                  </span>
                  <h2 className="h3 text-grey-900">
                    {t("Välj Belopp & Swisha Direkt", "Select Amount & Swish")}
                  </h2>
                </div>

                {/* Preset Chips */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                  {[50, 150, 300, 500, 1000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelectedPreset(amt)}
                      className={`py-3 px-2 rounded-xl text-center text-body-sm font-bold transition font-sans ${
                        selectedPreset === amt
                          ? "bg-brand-600 text-white shadow-sm"
                          : "bg-white border border-grey-200 text-grey-800 hover:bg-grey-100"
                      }`}
                    >
                      {amt} SEK
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelectedPreset("custom")}
                    className={`py-3 px-2 rounded-xl text-center text-body-sm font-semibold transition font-sans col-span-3 sm:col-span-5 ${
                      selectedPreset === "custom"
                        ? "bg-brand-600 text-white shadow-sm"
                        : "bg-white border border-grey-200 text-grey-800 hover:bg-grey-100"
                    }`}
                  >
                    {t("Valfritt Belopp", "Custom Amount")}
                  </button>
                </div>

                {selectedPreset === "custom" && (
                  <div className="space-y-2">
                    <label className="block text-body-xs font-semibold text-grey-700 uppercase">
                      {t("Ange belopp i SEK", "Enter amount in SEK")}
                    </label>
                    <input
                      type="number"
                      min={10}
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="T.ex. 250"
                      className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-lg focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>
                )}

                {/* Swish Number Box */}
                <div className="p-6 rounded-2xl bg-white border border-grey-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-body-xs font-mono uppercase text-grey-400">
                      {t("SWISH-NUMMER (GOSPELS)", "SWISH NUMBER (GOSPELS)")}
                    </div>
                    <div className="text-2xl font-mono font-extrabold text-grey-900 tracking-wider">
                      123 456 78 90
                    </div>
                    <div className="text-body-xs text-grey-500 font-mono mt-0.5">
                      Mottagare: Gospels Ideell Förening
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="brand"
                    size="md"
                    onClick={handleCopySwish}
                    className="shrink-0 w-full sm:w-auto justify-center"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copiedSwish ? t("Nummer Kopierat!", "Copied!") : t("Kopiera Nummer", "Copy Number")}
                  </Button>
                </div>

                {/* Bankgiro Alternative */}
                <div className="p-6 rounded-2xl bg-white border border-grey-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-body-xs font-mono uppercase text-grey-400">
                      {t("BANKGIRO FÖR FÖRSAMLINGAR & FÖRETAG", "BANKGIRO FOR CHURCHES & GRANTS")}
                    </div>
                    <div className="text-xl font-mono font-bold text-grey-900">
                      512-3456
                    </div>
                    <div className="text-body-xs text-grey-500 font-mono mt-0.5">
                      OCR / Meddelande: Gåva Lovsång
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="secondary"
                    size="md"
                    onClick={handleCopyBg}
                    className="shrink-0 w-full sm:w-auto justify-center"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copiedBg ? t("Bankgiro Kopierat!", "Copied!") : t("Kopiera BG", "Copy Bankgiro")}
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: Stewardship & Kingdom Partner CTA */}
            <div className="lg:col-span-5 space-y-6">
              {/* Monthly Subscription Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-brand-50/70 border border-brand-500/20 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-bold">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="h3 text-grey-900">
                    {t("Föredrar du att ge varje månad?", "Prefer to Give Monthly?")}
                  </h3>
                  <p className="body-sm text-grey-700 mt-2 leading-relaxed">
                    {t(
                      "Som Kingdom Partner möjliggör du kontinuerlig planering för stora sommarkonserter, ljudinvesteringar och unga musiker.",
                      "As a Kingdom Partner, your recurring monthly gift provides continuous runway for outdoor praise festivals and free admission for all."
                    )}
                  </p>
                </div>
                <div className="pt-2">
                  <Button asChild variant="brand" size="lg" className="w-full justify-center">
                    <Link href="/get-involved/kingdom-partners">
                      <span>{t("Bli Kingdom Partner", "Join Kingdom Partners")}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Stewardship & Accountability Box */}
              <div className="p-8 rounded-3xl bg-grey-50 border border-grey-200 space-y-4">
                <div className="flex items-center gap-2 text-brand-700 font-semibold text-body-sm">
                  <ShieldCheck className="w-5 h-5 text-brand-600" />
                  <span>{t("God Förvaltning & Insyn", "Stewardship & Transparency")}</span>
                </div>
                <p className="body-sm text-grey-600 leading-relaxed">
                  {t(
                    "Vi tillämpar full öppenhet enligt svensk föreningslag. Vår bokföring granskas av auktoriserad revisor och verksamhetsberättelsen publiceras årligen öppet på hemsidan.",
                    "We practice radical financial transparency under Swedish non-profit law. Accounts are audited by certified accountants and made accessible annually."
                  )}
                </p>
                <div className="pt-2 text-body-xs font-mono text-grey-500">
                  {t("Org.nr: 802557-4883 · Säte: Göteborg", "Org.nr: 802557-4883 · Headquarters: Gothenburg")}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

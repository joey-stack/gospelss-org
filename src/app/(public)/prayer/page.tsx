"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Heart,
  ShieldCheck,
  Send,
  Lock,
  Sparkles,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrayerPage() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Förbön");
  const [content, setContent] = useState("");
  const [gdprConsent, setGdprConsent] = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Anonym",
          email: email || undefined,
          topic,
          content,
          gdprConsent,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Inskickningen misslyckades.");
      }

      setSubmitted(true);
      setContent("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Ett fel uppstod.";
      setErrorMsg(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Hero: Prayer Intake */}
      <section className="py-20 lg:py-28 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="brand" shape="md" className="mb-4">
              {t("KONFIDENTIELL FÖRBÖN · GDPR ART 9", "CONFIDENTIAL PRAYER · GDPR ART 9")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-6 tracking-tight">
              {t("Vi Ber för Dig", "We Pray With You")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed mb-6">
              {t(
                "Ingen bör bära livets tyngsta bördor ensam. Vårt pastorala bönepam tar emot ditt böneämne i fullständig konfidentialitet och ber troget för din situation inför Gud.",
                "No one should bear life's heaviest burdens alone. Our intercessory team and pastoral ministers receive your prayer request under strict confidentiality, lifting your burdens faithfully before God."
              )}
            </p>
            <div className="text-overline text-grey-400 font-mono">
              Inget böneämne publiceras offentligt · AI-triagering skyddar akuta ärenden direkt till ansvarig pastor
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Scripture Anchor */}
      <section className="py-12 bg-brand-50 border-b border-brand-500/20">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <blockquote className="scripture text-grey-900 text-xl font-serif italic">
              {t(
                "»Gör er inga bekymmer för något, utan låt Gud i allt få veta era önskningar genom åkallan och bön med tacksägelse.«",
                "“Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.”"
              )}
            </blockquote>
            <cite className="block text-body-xs font-semibold text-brand-700 tracking-wider">
              — Filipperbrevet 4:6
            </cite>
          </div>
        </Container>
      </section>

      {/* 3. Prayer Intake Form + Safeguard Info */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-grey-50 border border-grey-200 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="h3 text-grey-900">
                        {t("Ditt böneämne har tagits emot", "Your prayer request has been received")}
                      </h2>
                      <p className="body-base text-grey-600">
                        {t(
                          "Vårt förbönsteam ber för detta under vår nästa bönesamling. Må Guds frid och närvaro omsluta dig.",
                          "Our intercessory collective will lift this in prayer during our next vigil. May God’s peace rest upon you."
                        )}
                      </p>
                    </div>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setSubmitted(false);
                      }}
                    >
                      {t("Skicka ytterligare ett ämne", "Submit another request")}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="h3 text-grey-900 mb-2">
                        {t("Skriv ditt Böneämne", "Share Your Prayer Request")}
                      </h2>
                      <p className="body-sm text-grey-500">
                        {t("Du kan välja att vara helt anonym.", "You may choose to remain completely anonymous.")}
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-body-sm">
                        {errorMsg}
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                            {t("Ditt Namn (Valfritt)", "Your Name (Optional)")}
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={t("Lämna tomt för anonym", "Leave blank for anonymous")}
                            className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                            {t("E-post (Valfritt)", "Email (Optional)")}
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t("Endast om du vill ha svar", "Only if you desire a pastoral reply")}
                            className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                          {t("Kategori *", "Category *")}
                        </label>
                        <select
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                        >
                          <option value="Hälsa & Helande">{t("Hälsa & Helande", "Health & Healing")}</option>
                          <option value="Familj & Relationer">{t("Familj & Relationer", "Family & Relationships")}</option>
                          <option value="Psykisk Hälsa & Frid">{t("Psykisk Hälsa & Frid", "Mental Peace & Anxiety")}</option>
                          <option value="Tro & Vägledning">{t("Tro & Vägledning", "Faith & Guidance")}</option>
                          <option value="Tacksägelse">{t("Tacksägelse", "Thanksgiving & Praise")}</option>
                          <option value="Övrigt">{t("Övrigt", "Other")}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                          {t("Beskriv vad du vill att vi ber för *", "What would you like us to pray for? *")}
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          placeholder={t("Skriv så mycket eller lite du känner dig bekväm med...", "Share as much or as little as you feel comfortable with...")}
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none resize-y"
                        />
                      </div>

                      {/* GDPR Article 9 Explicit Consent */}
                      <div className="p-4 rounded-xl bg-white border border-grey-200">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            checked={gdprConsent}
                            onChange={(e) => setGdprConsent(e.target.checked)}
                            className="mt-1 w-4 h-4 text-brand-600 rounded"
                          />
                          <span className="text-body-xs text-grey-700 leading-relaxed">
                            {t(
                              "Jag lämnar härmed mitt uttryckliga samtycke enligt svensk GDPR Artikel 9 till att GOSPELS förbönsteam behandlar mina andliga och personliga uppgifter konfidentiellt i syfte att be för mitt ämne.",
                              "I hereby give my explicit consent under Swedish GDPR Article 9 for GOSPELS prayer ministers to process my personal and spiritual data confidentially for the sole purpose of prayer."
                            )}
                          </span>
                        </label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="brand"
                      size="lg"
                      disabled={submitting}
                      className="w-full justify-center"
                    >
                      {submitting ? (
                        t("Skickar till bönepamet...", "Submitting request...")
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>{t("Skicka Konfidentiellt Böneämne", "Send Confidential Prayer Request")}</span>
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Pastoral Care & Privacy Assurance */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-grey-50 border border-grey-200 space-y-4">
                <div className="flex items-center gap-2 text-brand-600 font-semibold text-body-sm">
                  <Lock className="w-5 h-5" />
                  <span>{t("Hur Vi Skyddar Ditt Böneämne", "How We Safeguard Your Prayer")}</span>
                </div>
                <ul className="space-y-3 text-body-sm text-grey-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 shrink-0" />
                    <span>{t("Inga böneämnen publiceras någonsin på webben eller i sociala medier.", "No requests are ever published online or shared on public channels.")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 shrink-0" />
                    <span>{t("Endast betrodda medlemmar i bönepamet med avlagd tystnadsplikt har tillgång.", "Only vetted prayer team intercessors under pastoral confidentiality have access.")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 shrink-0" />
                    <span>{t("All data raderas eller anonymiseras efter avslutad förbönscykel.", "All data is securely purged or de-identified following the intercessory vigil.")}</span>
                  </li>
                </ul>
              </div>

              {/* Acute Crisis Fast Track */}
              <div className="p-8 rounded-3xl bg-red-50/70 border border-red-200 space-y-3">
                <div className="flex items-center gap-2 text-red-800 font-semibold text-body-sm">
                  <PhoneCall className="w-4 h-4 text-red-600" />
                  <span>{t("Är situationen akut?", "In Immediate Crisis?")}</span>
                </div>
                <p className="body-xs text-red-700 leading-relaxed">
                  {t(
                    "Om du eller någon du känner mår mycket dåligt eller har akuta självmordstankar — kontakta genast 112 eller ring Självmordslinjen på 90101 (öppet dygnet runt). Kyrkans SOS finns på 0771-800 650.",
                    "If you or someone you love is experiencing acute crisis or thoughts of self-harm, please immediately contact 112 or call Mind Suicide Hotline at 90101 (24/7). Church Crisis Hotline: 0771-800 650."
                  )}
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-brand-50/70 border border-brand-500/20 space-y-3">
                <h4 className="h4 text-grey-900">
                  {t("Vill du bli en del av förbönsteamet?", "Want to join the prayer collective?")}
                </h4>
                <p className="body-xs text-grey-700">
                  {t("Vi utbildar och stöttar bedjare från alla lokala församlingar.", "We equip and support prayer ministers across local churches.")}
                </p>
                <Button asChild variant="brand" size="sm">
                  <Link href="/get-involved/prayer-team">
                    {t("Ansök till Bönepamet", "Join Prayer Team")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

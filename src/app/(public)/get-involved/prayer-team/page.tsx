"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heart, ShieldCheck, CheckCircle, Send, ArrowRight, Lock, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrayerTeamPage() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [church, setChurch] = useState("");
  const [experience, setExperience] = useState("");
  const [confidentialityConsent, setConfidentialityConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/volunteer/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          age: 25,
          team: "Förbön & Själavård",
          notes: `Hemförsamling: ${church}. Erfarenhet: ${experience}. Tystnadsplikt godkänd: ja.`,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Ansökan misslyckades.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Ett fel uppstod.";
      setErrorMsg(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Hero */}
      <section className="py-20 lg:py-28 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="brand" shape="md" className="mb-4">
              {t("FÖRBÖNSTEAM & SJÄLAVÅRD", "PRAYER MINISTRY & PASTORAL CARE")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-6 tracking-tight">
              {t("Bli en del av Bönepamet", "Join the Intercessory Prayer Team")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed mb-6">
              {t(
                "Att be för andra är en helig kallelse. Vårt bönepam står till tjänst under alla konserter och samlingar för att möta människor med Kristi kärlek, lyssna och be i fullständig konfidentialitet.",
                "Interceding for others is a sacred calling. Our prayer ministers serve during all gatherings and concerts to meet seekers with Christ’s love, listen attentively, and pray with strict pastoral confidentiality."
              )}
            </p>
            <div className="text-overline text-grey-400 font-mono">
              Svensk GDPR Artikel 9 · Pastoral tystnadsplikt tillämpas
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Three Pillars of Prayer Ministry */}
      <section className="py-16 bg-white border-b border-grey-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-grey-50 border border-grey-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="h4 text-grey-900">
                {t("Absolut Tystnadsplikt", "Strict Confidentiality")}
              </h3>
              <p className="body-sm text-grey-600 leading-relaxed">
                {t(
                  "All förbön skyddas under svensk GDPR Artikel 9 och pastorala etiska riktlinjer. Det som sägs vid böneplatsen stannar mellan den sökande, förbönen och Gud.",
                  "All prayer requests are protected under Swedish GDPR Article 9 special category rules. What is shared in prayer remains strictly confidential."
                )}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-grey-50 border border-grey-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="h4 text-grey-900">
                {t("Pastoral Handledning", "Pastoral Mentorship")}
              </h3>
              <p className="body-sm text-grey-600 leading-relaxed">
                {t(
                  "Våra bedjare arbetar alltid i par och har direkt tillgång till närvarande ordinerade pastorer och legitimerad själavård vid akuta kriser.",
                  "Prayer ministers always serve in pairs, with ordained pastors present on site to immediately step in whenever acute crisis or grief arises."
                )}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-grey-50 border border-grey-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="h4 text-grey-900">
                {t("Gemensam Utbildning", "Regular Training")}
              </h3>
              <p className="body-sm text-grey-600 leading-relaxed">
                {t(
                  "Vi anordnar regelbundna böne- och själavårdskvällar där vi övar i aktivt lyssnande, sund teologisk bön och etiskt bemötande.",
                  "We gather regularly for prayer retreats and pastoral care training, developing healthy boundaries, compassionate listening, and biblical grounding."
                )}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Application Form */}
      <section className="py-20 bg-grey-50">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-grey-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="h3 text-grey-900">
                      {t("Tack för din anmälan!", "Thank you for applying!")}
                    </h2>
                    <p className="body-base text-grey-600">
                      {t(
                        "Vår pastorala samordnare kommer att kontakta dig för ett personligt samtal och introduktion till teamet.",
                        "Our pastoral director will contact you for a personal conversation and onboarding into the prayer collective."
                      )}
                    </p>
                  </div>
                  <Button asChild variant="secondary">
                    <Link href="/about/story">
                      {t("Läs om Vår Vision", "Read About Our Vision")}
                    </Link>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="h3 text-grey-900 mb-2">
                      {t("Ansökan till Bönepamet", "Prayer Team Application")}
                    </h2>
                    <p className="body-sm text-grey-500">
                      {t("Fyll i formuläret så tar vår pastorala samordnare kontakt med dig.", "Complete the fields below and our pastoral leader will reach out.")}
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-body-sm">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                        {t("Ditt Namn *", "Your Name *")}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("Förnamn och efternamn", "First and last name")}
                        className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                          {t("E-postadress *", "Email Address *")}
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="namn@epost.se"
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                          {t("Telefonnummer *", "Phone Number *")}
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="070-123 45 67"
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                        {t("Hemförsamling / Kyrka *", "Home Church / Fellowship *")}
                      </label>
                      <input
                        type="text"
                        required
                        value={church}
                        onChange={(e) => setChurch(e.target.value)}
                        placeholder={t("T.ex. Smyrna, Hagakyrkan, Korskyrkan...", "E.g. Smyrna, Haga Church, Betlehemskyrkan...")}
                        className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                        {t("Berätta kort om din bönebakgrund & varför du vill tjäna", "Your background in prayer ministry & why you wish to serve")}
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        placeholder={t("Beskriv din erfarenhet av själavård eller bön...", "Describe any prior experience in intercessory prayer...")}
                        className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none resize-y"
                      />
                    </div>

                    {/* Confidentiality Checkbox */}
                    <div className="p-4 rounded-xl bg-grey-50 border border-grey-200">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={confidentialityConsent}
                          onChange={(e) => setConfidentialityConsent(e.target.checked)}
                          className="mt-1 w-4 h-4 text-brand-600 rounded"
                        />
                        <span className="text-body-xs text-grey-700 leading-relaxed">
                          {t(
                            "Jag godkänner och förbinder mig till GOSPELS tystnadsplikt och etiska riktlinjer under svensk GDPR Artikel 9 för hantering av personliga och andliga böneämnen.",
                            "I affirm and commit to GOSPELS’ pastoral code of confidentiality and Swedish GDPR Article 9 special category privacy standards."
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
                      t("Skickar ansökan...", "Submitting application...")
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>{t("Skicka Ansökan till Bönepamet", "Submit Prayer Team Application")}</span>
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

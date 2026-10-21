"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Mail, CheckCircle, Sparkles, Send, Bell, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NewsletterPage() {
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubscribed(true);
    }, 500);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Hero */}
      <section className="py-20 lg:py-28 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="brand" shape="md" className="mb-4">
              {t("MÅNADSUTSKICK & BÖNERAPPORTER", "MONTHLY BRIEFINGS & PRAYER UPDATES")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-6 tracking-tight">
              {t("Håll dig Uppdaterad", "Stay Connected")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed mb-6">
              {t(
                "Följ vad Gud gör i Göteborg och Västsverige. Vårt nyhetsbrev skickas ut en gång i månaden med konsertdatum, böneämnen, vittnesbörd och fria nedladdningar av lovsångsresurser.",
                "Follow what God is doing in Gothenburg and West Sweden. Our monthly dispatch arrives once per month with concert dates, prayer items, testimonies, and free worship resources."
              )}
            </p>
            <div className="text-overline text-grey-400 font-mono">
              Inget spam · Avsluta prenumeration med ett klick när som helst
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Perks + Form */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: What You Get */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-grey-50 border border-grey-200 space-y-6">
                <h2 className="h4 text-grey-900">
                  {t("Vad du får i brevet", "What is included")}
                </h2>

                <ul className="space-y-4">
                  {[
                    {
                      title: t("Tidig inbjudan till evenemang", "Priority event access"),
                      desc: t("Boka gratis platser till samlingar före det officiella biljettsläppet.", "Reserve free admission passes before open public release."),
                    },
                    {
                      title: t("Nya liveinspelningar & ackord", "Live recordings & chords"),
                      desc: t("Direktlänkar till nysläppt musik, ackordblad och stämsättningar för kyrkor.", "Direct links to unreleased tracks, chord charts, and vocal arrangements."),
                    },
                    {
                      title: t("Månatlig förbönerapport", "Monthly prayer briefing"),
                      desc: t("Aktuella böneämnen för Göteborgs stadsdelar, skolor och församlingar.", "Focused intercessory prayer targets for Gothenburg districts and schools."),
                    },
                  ].map((perk, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-body-sm font-bold text-grey-900">{perk.title}</h3>
                        <p className="text-body-xs text-grey-600">{perk.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-brand-50/60 border border-brand-500/20 text-body-xs text-brand-800 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0" />
                <span>
                  {t("Vi delar aldrig din e-postadress med tredje part enligt svensk GDPR-standard.", "We never share your email with third parties in accordance with Swedish GDPR.")}
                </span>
              </div>
            </div>

            {/* Right: Signup Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-grey-50 border border-grey-200 shadow-sm">
                {subscribed ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="h3 text-grey-900">
                        {t("Varmt välkommen till gemenskapen!", "Welcome to the fellowship!")}
                      </h2>
                      <p className="body-base text-grey-600">
                        {t(
                          `Vi har skickat en bekräftelse till ${email}. Nästa månadsbrev skickas den 1:a i månaden.`,
                          `We sent a confirmation to ${email}. The next monthly edition lands on the 1st.`
                        )}
                      </p>
                    </div>
                    <Button asChild variant="brand">
                      <Link href="/events">
                        {t("Se Våra Evenemang", "Explore Events")}
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="h3 text-grey-900 mb-2">
                        {t("Prenumerera på Månadsbrevet", "Subscribe to the Newsletter")}
                      </h2>
                      <p className="body-sm text-grey-500">
                        {t("Skriv in ditt namn och e-postadress för att gå med.", "Enter your details to receive monthly dispatches.")}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                          {t("Ditt Förnamn *", "First Name *")}
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t("Förnamn", "First name")}
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
                        />
                      </div>

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
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
                        />
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
                        t("Registrerar...", "Registering...")
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>{t("Gå med i Nyhetsbrevet", "Subscribe to Newsletter")}</span>
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

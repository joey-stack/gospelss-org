"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Send, MessageSquare, HeartHandshake, CheckCircle2, Shield, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "allmant",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate dispatch
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Hero: Contact */}
      <section className="py-20 lg:py-28 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="brand" shape="md" className="mb-4">
              {t("HÖR AV DIG TILL OSS", "GET IN TOUCH WITH US")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-6 tracking-tight">
              {t("Vi vill gärna höra från dig.", "We would love to hear from you.")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed mb-6">
              {t(
                "Oavsett om du har frågor om våra konserter, vill samarbeta som församling, ansöka som volontär eller söker själavård — vi finns här för dig.",
                "Whether you have questions regarding upcoming gatherings, wish to partner as a church, apply to volunteer, or seek prayer — we are here for you."
              )}
            </p>
            <div className="text-overline text-grey-400 font-mono">
              Gospels Ideell Förening · Org.nr: 802557-4883 · Göteborg, Sweden
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Contact Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Ministry Links */}
            <div className="lg:col-span-5 space-y-8">
              {/* Org Details Box */}
              <div className="p-8 rounded-2xl bg-grey-50 border border-grey-200 space-y-6">
                <h2 className="h4 text-grey-900">
                  {t("Föreningsinformation & Adresser", "Organisation Details & Office")}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-body-xs font-mono uppercase text-grey-400">
                        {t("E-POST", "EMAIL")}
                      </div>
                      <a
                        href="mailto:kontakt@gospelss.org"
                        className="text-body-sm font-semibold text-grey-900 hover:text-brand-600 transition"
                      >
                        kontakt@gospelss.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-body-xs font-mono uppercase text-grey-400">
                        {t("SÄTE", "HEADQUARTERS")}
                      </div>
                      <div className="text-body-sm font-medium text-grey-900">
                        Göteborg, Sverige
                      </div>
                      <div className="text-body-xs text-grey-500">
                        Gospels Ideell Förening · Org.nr: 802557-4883
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast Tracks */}
              <div className="p-8 rounded-2xl bg-brand-50/60 border border-brand-500/20 space-y-4">
                <div className="flex items-center gap-2 text-brand-700 font-semibold text-body-sm">
                  <Heart className="w-4 h-4" />
                  <span>{t("Behöver du förbön eller själavård?", "Need prayer or pastoral care?")}</span>
                </div>
                <p className="body-sm text-grey-700 leading-relaxed">
                  {t(
                    "Vi har ett dedikerat bönepam och pastorer redo att be för dig. Alla förfrågningar hanteras konfidentiellt under svensk GDPR Artikel 9.",
                    "We have a dedicated intercessory prayer team and pastoral ministers ready to pray for you under strict Swedish GDPR Article 9 privacy safeguards."
                  )}
                </p>
                <div className="pt-2">
                  <Button asChild variant="brand" size="sm">
                    <Link href="/prayer">
                      {t("Skicka Böneämne", "Send Prayer Request")}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Giving Fast Track */}
              <div className="p-8 rounded-2xl bg-grey-50 border border-grey-200 space-y-4">
                <div className="flex items-center gap-2 text-grey-900 font-semibold text-body-sm">
                  <HeartHandshake className="w-4 h-4 text-brand-600" />
                  <span>{t("Stöd Arbetet Ekonomiskt", "Support the Mission")}</span>
                </div>
                <p className="body-sm text-grey-600 leading-relaxed">
                  {t(
                    "Som ideell förening finansieras alla konserter helt genom frivilliga gåvor via Swish och månadsgivare.",
                    "As a non-profit association, all public events are 100% funded through voluntary donations via Swish and Kingdom Partners."
                  )}
                </p>
                <div className="pt-2">
                  <Button asChild variant="secondary" size="sm">
                    <Link href="/give">
                      {t("Ge en Gåva via Swish", "Give via Swish")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-grey-50 border border-grey-200">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="h3 text-grey-900">
                        {t("Tack för ditt meddelande!", "Thank you for reaching out!")}
                      </h3>
                      <p className="body-base text-grey-600 max-w-md mx-auto">
                        {t(
                          "Vi har tagit emot ditt meddelande och vår styrelse eller relevanta kontaktperson återkommer till dig inom 1–2 vardagar.",
                          "We have received your message and our team will get back to you within 1–2 business days."
                        )}
                      </p>
                    </div>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "allmant", message: "" });
                      }}
                    >
                      {t("Skicka ett till meddelande", "Send another message")}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="h3 text-grey-900 mb-2">
                        {t("Skicka ett Meddelande", "Send a Message")}
                      </h2>
                      <p className="body-sm text-grey-500">
                        {t("Fyll i formuläret så återkommer vi snarast möjligt.", "Fill out the fields below and we will respond as soon as possible.")}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2"
                        >
                          {t("Ditt Namn *", "Your Name *")}
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t("Förnamn och efternamn", "First and last name")}
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 bg-white text-grey-900 text-body-base focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2"
                        >
                          {t("E-postadress *", "Email Address *")}
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="namn@epost.se"
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 bg-white text-grey-900 text-body-base focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2"
                        >
                          {t("Ärende *", "Subject Category *")}
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 bg-white text-grey-900 text-body-base focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                        >
                          <option value="allmant">
                            {t("Allmän förfrågan", "General Inquiries")}
                          </option>
                          <option value="samverkan">
                            {t("Församlingssamverkan & Partnerkyrkor", "Church Partnerships")}
                          </option>
                          <option value="volontar">
                            {t("Volontärfrågor & Ungdomsinsats", "Volunteering & Youth Teams")}
                          </option>
                          <option value="press">
                            {t("Press & Medieförfrågan", "Press & Media")}
                          </option>
                          <option value="ekonomi">
                            {t("Gåvor, Swish & Föreningsadministration", "Donations & Finance")}
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2"
                        >
                          {t("Meddelande *", "Your Message *")}
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={t("Skriv ditt meddelande här...", "Type your message here...")}
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 bg-white text-grey-900 text-body-base focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-y"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="brand"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                    >
                      {isSubmitting ? (
                        t("Skickar...", "Sending...")
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>{t("Skicka Meddelande", "Send Message")}</span>
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

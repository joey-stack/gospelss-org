"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin, HeartHandshake, ShieldCheck, Flame, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function NextEventDetails() {
  const { t } = useLanguage();

  const expectations = [
    {
      icon: Flame,
      title: t("Oavbruten Lovsång", "Spirit-Led Worship"),
      description: t(
        "Fokus ligger helt på Jesus. Ingen underhållning eller föreställning — bara innerlig, kraftfull lovsång ledd av musiker från olika församlingar.",
        "Completely Christ-centered. No showmanship or entertainment — just genuine, uninterrupted worship led by teams across Gothenburg churches."
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Helt Kostnadsfritt", "100% Free Community Entry"),
      description: t(
        "Alla samlingar är gratis. Alla är välkomna oavsett bakgrund eller kyrkotillhörighet. Ingen föranmälan krävs för inträde, men RSVP garanterar sittplats.",
        "Every concert and gathering is completely free. No admission fees, welcoming every citizen regardless of church affiliation or background."
      ),
    },
    {
      icon: HeartHandshake,
      title: t("Förbön & Betjäning", "Prayer & Pastoral Care"),
      description: t(
        "Ett utbildat och tryggt bönateam finns till hands hela kvällen för den som önskar personlig förbön, uppmuntran eller själavård.",
        "A trained, confidential intercession and pastoral team is on site throughout the evening for anyone seeking prayer, healing, or guidance."
      ),
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-slate-900 border-b border-slate-800 text-white">
      <Container>
        {/* Structural Header (Reunion / Gothenburg Gospel dark aesthetic) */}
        <div className="max-w-3xl mb-16">
          <SectionHeader
            overline={t("NÄSTA STORMINISTATION", "NEXT GATHERING")}
            title={t("Holy Spirit Worship Night · Maj 2026", "Holy Spirit Worship Night · May 2026")}
            subtitle={t(
              "En unik kväll där vi fyller Smyrna Kyrkan i Frihamnen med tusentals röster i lovsång över staden Göteborg.",
              "A historic gathering filling Smyrna Church in Frihamnen with united voices lifting praise across the city of Gothenburg."
            )}
            theme="dark"
            className="mb-6"
          />

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium font-inter text-grey-300">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800 border border-slate-700/80">
              <Calendar className="w-4 h-4 text-brand-400" />
              <span>{t("Måndag 18 Maj 2026 · 18:30", "Monday May 18, 2026 · 18:30")}</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800 border border-slate-700/80">
              <MapPin className="w-4 h-4 text-brand-400" />
              <span>Smyrna Kyrkan, Frihamnen, Göteborg</span>
            </div>
          </div>
        </div>

        {/* 3-Column What to Expect Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {expectations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/60 shadow-xl hover:shadow-2xl hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-hanken text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-grey-300 font-inter leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Callout banner */}
        <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-2xl md:text-3xl font-bold font-hanken text-white">
              {t("Vill du vara med och tjäna som volontär?", "Want to join the team as a volunteer?")}
            </h4>
            <p className="text-base text-grey-300 font-inter leading-relaxed">
              {t(
                "Vi söker värdar, tekniker och bönledare för att välkomna staden och betjäna tillsammans.",
                "We are welcoming hosts, technicians, and prayer volunteers to serve Western Sweden together."
              )}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Button href="/get-involved/volunteer" variant="secondary" size="lg">
              {t("Bli Volontär", "Join Volunteer Team")}
            </Button>
            <Button
              href="/events/holy-spirit-worship"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              {t("RSVP Gratis", "RSVP for Free")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NextEventDetails;

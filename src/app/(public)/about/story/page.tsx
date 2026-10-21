"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Sparkles, Calendar, Heart, Shield, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutStoryPage() {
  const { t } = useLanguage();

  const timelineEvents = [
    {
      year: "2023",
      title: t("Bönen i Gryningen", "Dawn Prayer Vigils"),
      description: t(
        "En liten grupp lovsångsledare och pastorer från tre olika samfund började samlas i Frihamnen för att be om andlig förnyelse och enhet över Göteborg.",
        "A small gathering of worship leaders and pastors from three distinct denominations met weekly in Frihamnen praying for revival and church unity across Gothenburg."
      ),
    },
    {
      year: "2024",
      title: t("Det Första Ekumeniska Mötet", "First Ecumenical Summit"),
      description: t(
        "Över 12 församlingar samlades för att formulera en gemensam vision: att ta lovsången ut till allmänna platser och bjuda in hela staden till gratis gudstjänster.",
        "Leaders from 12 congregations convened to formulate a joint vision: bringing worship beyond auditorium walls into open civic spaces."
      ),
    },
    {
      year: "2025",
      title: t("GOSPELS Förening Bildas (802557-4883)", "Formal Non-Profit Entity Registered"),
      description: t(
        "Officiell registrering som ideell förening i Göteborg för att säkerställa full transparens, juridisk efterlevnad och god förvaltning av gåvor.",
        "Official non-profit registration under Swedish law (Org.nr: 802557-4883) ensuring absolute financial transparency and ethical stewardship."
      ),
    },
    {
      year: "2026",
      title: t("Holy Spirit Worship i Frihamnen", "Holy Spirit Worship Night"),
      description: t(
        "Första storsamlingen i Smyrna Kyrkan med över tusen deltagare, ett 40-tal volontärer och liveinspelning distribuerad kostnadsfritt på webben.",
        "Inaugural city-wide worship gathering at Smyrna Church with over 1,000 attendees, volunteer teams, and high-fidelity media distribution."
      ),
    },
    {
      year: "2027",
      title: t("Vision 2027: Slottsskogen Konsert", "Vision 2027: Open Air Concert"),
      description: t(
        "En helg av gratis lovsångsfestival under bar himmel för alla invånare och familjer i Göteborg.",
        "A historic outdoor worship festival welcoming all citizens and families in Gothenburg under open skies."
      ),
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero: Our Story */}
      <section className="py-20 lg:py-28 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="brand" shape="md" className="mb-4">
              {t("VÅRT URSPRUNG & IDENTITET", "OUR ORIGIN & IDENTITY")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-6 tracking-tight">
              {t("Vår Berättelse", "Our Story")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed mb-6">
              {t(
                "GOSPELS föddes ur en brinnande längtan att se Kristi kropp i Göteborg förenas. Vi är inte en kyrka som konkurrerar med andra — vi är en ideell plattform som tjänar hela församlingsfamiljen.",
                "GOSPELS was born from an unyielding desire to see the Body of Christ unite in Gothenburg. We are not a church competing with others; we are a dedicated non-profit ministry serving every local congregation."
              )}
            </p>
            <div className="text-overline text-grey-400 font-mono">
              Gospels Ideell Förening · Org.nr: 802557-4883 · Göteborg, Sweden
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Scripture & Vision Quotes (EB Garamond Accent) */}
      <section className="py-16 lg:py-24 bg-brand-50 border-b border-brand-500/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="overline text-brand-600 font-semibold tracking-[0.1em] block">
              {t("SKRIFTENS GRUNDVAL", "SCRIPTURAL ANCHOR")}
            </span>
            <blockquote className="scripture text-grey-900 text-2xl md:text-3xl font-serif italic leading-relaxed">
              {t(
                "»Sjung till Herrens ära en ny sång, sjung till Herrens ära, hela jorden! Sjung till Herrens ära, prisa hans namn, förkunna hans frälsning dag efter dag.«",
                "“Sing to the Lord a new song; sing to the Lord, all the earth. Sing to the Lord, praise his name; proclaim his salvation day after day.”"
              )}
            </blockquote>
            <cite className="block text-body-sm font-sans font-semibold text-brand-700 tracking-wider">
              — Psaltaren 96:1–2
            </cite>
          </div>
        </Container>
      </section>

      {/* 3. Gospelverkstaden-Inspired Vertical Timeline */}
      <section className="py-20 lg:py-28 bg-white border-b border-grey-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="overline text-brand-600 block mb-2 font-semibold tracking-[0.1em]">
              {t("KRONOLOGI", "OUR JOURNEY")}
            </span>
            <h2 className="h2 text-grey-900 mb-4">
              {t("Steg i Tro & Lydnad", "Steps of Faith & Obedience")}
            </h2>
            <p className="body-lg text-grey-600 font-normal">
              {t(
                "Från tidiga morgonböner i Frihamnen till sammankallandet av hundratals lovsångare över staden.",
                "From dawn prayer vigils in Frihamnen to mobilizing hundreds of worshipers across Gothenburg."
              )}
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Center vertical timeline stem */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-grey-200 -translate-x-1/2" />

            <div className="space-y-12">
              {timelineEvents.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Node marker */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-500 border-4 border-white shadow-md flex items-center justify-center text-white z-10">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>

                    {/* Content Box */}
                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                      <div className="bg-grey-50 rounded-md p-6 border border-grey-200 shadow-sm hover:shadow-md transition-shadow">
                        <span className="inline-block px-2.5 py-1 rounded bg-brand-50 text-brand-700 text-xs font-mono font-bold mb-2">
                          {item.year}
                        </span>
                        <h3 className="h4 text-grey-900 mb-2 font-semibold">
                          {item.title}
                        </h3>
                        <p className="body-sm text-grey-600 font-normal leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Second Scripture Quote block */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-4">
            <blockquote className="scripture text-grey-200 text-xl md:text-2xl font-serif italic">
              {t(
                "»Men den stund kommer, ja, den är redan här, då sanna tillbedjare skall tillbe Fadern i ande och sanning.«",
                "“Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth.”"
              )}
            </blockquote>
            <cite className="block text-body-sm font-sans font-semibold text-brand-500 tracking-wider">
              — Johannes 4:23
            </cite>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-grey-50 text-center">
        <Container>
          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="h3 text-grey-900">
              {t("Vill du vara en del av visionen?", "Want to be part of the story?")}
            </h3>
            <p className="body text-grey-600">
              {t(
                "Kom på vår nästa samling eller anmäl dig som volontär.",
                "Join our next worship night or sign up as a volunteer."
              )}
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <Button href="/events/holy-spirit-worship" variant="primary" size="md">
                {t("Nästa Samling", "Next Event")}
              </Button>
              <Button href="/get-involved/volunteer" variant="secondary" size="md">
                {t("Bli Volontär", "Join Team")}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

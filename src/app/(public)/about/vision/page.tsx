"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Sparkles, Heart, Shield, Music, CheckCircle2, ArrowRight, BookOpen, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function VisionPage() {
  const { t } = useLanguage();

  const corePillars = [
    {
      title: t("Helighet", "Sacred Presence"),
      desc: t(
        "Djup gudsfruktan och innerlig tillbedjan i Ande och sanning, där Jesus Kristus är centrum i varje ton.",
        "Reverent, sacred worship in Spirit and Truth, exalting Jesus Christ as the singular focus of every song."
      ),
      icon: Sparkles,
    },
    {
      title: t("Välkomnande", "Radical Hospitality"),
      desc: t(
        "Generös öppenhet och värme mot varje människa oavsett bakgrund, tvivel eller livssituation.",
        "Generous warmth and open doors for every seeker, neighbor, and stranger across Gothenburg."
      ),
      icon: Heart,
    },
    {
      title: t("Excellens", "Artistic Excellence"),
      desc: t(
        "Musikalisk, teknisk och konstnärlig omsorg som hedrar Skaparen och berör människors hjärtan.",
        "Musical craftsmanship, acoustic fidelity, and logistical discipline worthy of the sacred message."
      ),
      icon: Music,
    },
    {
      title: t("Givmildhet", "Radical Generosity"),
      desc: t(
        "100% fri entré till alla konserter och samlingar — evangeliet ska aldrig hindras av en biljettavgift.",
        "100% free admission to every gathering — the Gospel message remains unconditionally open to all."
      ),
      icon: Shield,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero: Vision & Theological Ground */}
      <section className="py-20 lg:py-28 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="brand" shape="md" className="mb-4">
              {t("TEOLOGISK GRUND & RIKTNING", "THEOLOGICAL FOUNDATION & CALLING")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-6 tracking-tight">
              {t("Vision, Mission & Grundvärden", "Vision, Mission & Core Values")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed mb-6">
              {t(
                "Vi drivs av övertygelsen att Jesus Kristus är evangeliets centrum, och att kristen enhet i bön och lovsång bär kraften att förvandla en hel stad.",
                "We are propelled by the enduring conviction that Jesus Christ is the center of the Gospel, and that church unity in prayer and worship has the transformative power to awaken a whole city."
              )}
            </p>
            <div className="text-overline text-grey-400 font-mono">
              Gospels Ideell Förening · Org.nr: 802557-4883 · Göteborg, Sweden
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Scripture Anchor (EB Garamond Accent) */}
      <section className="py-16 lg:py-24 bg-brand-50 border-b border-brand-500/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="overline text-brand-600 font-semibold tracking-[0.1em] block">
              {t("KRISTI BÖN OM ENHET", "CHRIST'S PRAYER FOR ONENESS")}
            </span>
            <blockquote className="scripture text-grey-900 text-2xl md:text-3xl font-serif italic leading-relaxed">
              {t(
                "»Jag ber att de alla skall vara ett, och att såsom du, Fader, är i mig och jag i dig, också de skall vara i oss, för att världen skall tro att du har sänt mig.«",
                "“I pray that they will all be one, just as you and I are one—as you are in me, Father, and I am in you. And may they be in us so that the world will believe you sent me.”"
              )}
            </blockquote>
            <cite className="block text-body-sm font-sans font-semibold text-brand-700 tracking-wider">
              — Johannes 17:21
            </cite>
          </div>
        </Container>
      </section>

      {/* 3. Vision & Mission Pillars */}
      <section className="py-20 bg-white border-b border-grey-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-grey-50 border border-grey-200 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="h3 text-grey-900">
                  {t("Vår Vision", "Our Vision")}
                </h2>
                <p className="body-base text-grey-600 leading-relaxed">
                  {t(
                    "Att se Göteborg och Västsverige förvandlat genom helig tillbedjan — där varje stadsdel, skola och arbetsplats får uppleva Guds försonande kärlek i det offentliga rummet.",
                    "To see Gothenburg and Western Sweden awakened through sacred worship — where every district, school, and civic space experiences God’s reconciling presence in public squares."
                  )}
                </p>
              </div>
              <div className="pt-4 border-t border-grey-200 text-body-sm text-grey-500 font-mono">
                {t("Mål 2026–2030: Årlig konsert i Frihamnen & Slottsskogen", "Goal 2026–2030: Annual public praise festivals in Frihamnen & Slottsskogen")}
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-grey-50 border border-grey-200 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="h3 text-grey-900">
                  {t("Vår Mission", "Our Mission")}
                </h2>
                <p className="body-base text-grey-600 leading-relaxed">
                  {t(
                    "Att anordna 100% kostnadsfria lovsångskonserter, träna nästa generations musiker och lovsångsledare samt mobilisera lokala församlingar till gemensam bön och diakonalt ansvar.",
                    "To produce 100% free sacred concert events, equip emerging worship leaders and youth vocalists, and unite local churches in unceasing prayer and compassionate community service."
                  )}
                </p>
              </div>
              <div className="pt-4 border-t border-grey-200 text-body-sm text-grey-500 font-mono">
                {t("Full transparens under svensk ideell föreningslag", "Governed under Swedish Non-Profit Association Law")}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Four Foundations */}
      <section className="py-20 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="overline text-brand-600 font-semibold tracking-wider block mb-2">
              {t("VÅRA FYRA GRUNDPELARE", "OUR FOUR PILLARS")}
            </span>
            <h2 className="h2 text-grey-900 tracking-tight">
              {t("Värderingar som Styr Allt Vi Gör", "Values Directing Every Gathering")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-grey-200 shadow-sm flex flex-col justify-between hover:border-brand-500 transition-colors duration-200"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="h4 text-grey-900">{pillar.title}</h3>
                    <p className="body-sm text-grey-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Theological Statement & Ecumenical Anchor */}
      <section className="py-20 bg-white border-b border-grey-200">
        <Container>
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-grey-50 border border-grey-200">
            <div className="flex items-center gap-3 text-brand-600 mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="overline font-semibold tracking-wider">
                {t("BEKÄNNELSE & ENHET", "CONFESSION & ECUMENISM")}
              </span>
            </div>
            <h2 className="h3 text-grey-900 mb-6">
              {t("Teologisk Förankring i Skriften & Ekumeniken", "Rooted in Scripture & Ecumenical Unity")}
            </h2>
            <div className="space-y-4 text-body-base text-grey-700 leading-relaxed">
              <p>
                {t(
                  "GOSPELS vilar på klassisk kristen bekännelse grundad i Bibeln som Guds inspirerade och auktoritativa ord. Vi delar de fornkyrkliga trosbekännelserna (den Apostoliska, Nicenska och Athanasianska) och ansluter oss till Lausanne-deklarationens vision om hela evangeliets förkunnelse till hela världen.",
                  "GOSPELS stands firmly on historic Christian orthodoxy, grounded in the Holy Scriptures as God’s inspired and authoritative Word. We confess the historic creeds (Apostles’, Nicene, and Athanasian) and resonate with the Lausanne Covenant’s vision of proclaiming the whole Gospel to the whole world."
                )}
              </p>
              <p>
                {t(
                  "Vi bejakar hela Kristi kropp. Våra styrande organ och volontärteam representerar troende från Svenska kyrkan, Pingströrelsen, Equmeniakyrkan, Evangeliska Frikyrkan (EFK), Frälsningsarmén och oberoende församlingar. Vi söker enhet i det väsentliga, frihet i det icke-väsentliga och kärlek i allt.",
                  "We embrace the whole Body of Christ. Our leadership council and volunteer worship teams comprise believers from the Church of Sweden, Pentecostal Movement, Uniting Church (Equmeniakyrkan), Evangelical Free Church (EFK), Salvation Army, and independent fellowships. In essentials unity, in non-essentials liberty, in all things charity."
                )}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-grey-200 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-2 text-body-sm text-grey-600">
                <Users className="w-4 h-4 text-brand-600" />
                <span>{t("Över 42 lokala partnerförsamlingar", "Over 42 local partner congregations")}</span>
              </div>
              <Link
                href="/partners"
                className="text-body-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1.5"
              >
                <span>{t("Se våra partnerkyrkor", "Explore partner churches")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Action CTA */}
      <section className="py-20 bg-grey-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="h2 text-white">
              {t("Vill din församling stå med oss?", "Will your church stand with us?")}
            </h2>
            <p className="body-lg text-grey-300 font-light leading-relaxed">
              {t(
                "Varje kyrka, pastor och lovsångsteam är välkommen att samarbeta i bön, volontärinsatser och gemensamma samlingar.",
                "Every church, pastor, and music ministry is warmly invited to co-labor with us in prayer, volunteer teams, and unified city praise."
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="brand" size="lg">
                <Link href="/partners">
                  {t("Bli Partnerkyrka", "Become a Partner Church")}
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/about/story">
                  {t("Läs Vår Historia", "Read Our Story")}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

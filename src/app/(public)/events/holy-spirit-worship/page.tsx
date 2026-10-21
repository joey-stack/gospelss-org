"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { RSVPForm } from "@/components/events/RSVPForm";
import { Calendar, Clock, MapPin, Sparkles, Check, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HolySpiritWorshipDetailPage() {
  const { t } = useLanguage();

  const leaders = [
    {
      name: "Hannah Sjöström",
      role: t("Lovsångsledare", "Worship Leader"),
      church: "Smyrna Göteborg",
      bio: t(
        "Leder lovsång med hjärta för Guds helighet och församlingens enhet. Aktiv i Göteborgs lovsångsnätverk sedan 2018.",
        "Leads worship with a heart for God's holiness and church unity. Active in Gothenburg's worship collective since 2018."
      ),
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "David Olofsson",
      role: t("Musikalisk Ledare & Pianist", "Music Director & Pianist"),
      church: "Korskyrkan Göteborg",
      bio: t(
        "Arrangör och musiker med passion för gospel och koraler. Samordnar det ekumeniska bandet och stråkarna.",
        "Arranger and instrumentalist passionate about contemporary praise and gospel chorales. Coordinates the ecumenical band."
      ),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Beatrice Lind",
      role: t("Vokalist & Böneledare", "Vocalist & Intercessor"),
      church: "Hillsong Sweden (Göteborg)",
      bio: t(
        "Brinner för att se unga vuxna möta Jesus i tillbedjan och helande bön.",
        "Passionate for the next generation to encounter Jesus in deep worship and transforming prayer."
      ),
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero: Full-Width Dark Image with H1 "Holy Spirit Worship" */}
      <section className="relative w-full min-h-[55vh] md:min-h-[62vh] flex items-center justify-center text-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1800&auto=format&fit=crop&q=80"
          alt="Holy Spirit Worship Night in Gothenburg"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-16 pb-24 md:pb-28">
          <Badge variant="brand" shape="md" className="mb-4">
            {t("EKUMENISK LOVSÅNGSKVÄLL", "ECUMENICAL WORSHIP NIGHT")}
          </Badge>
          <h1 className="display text-white mb-4 tracking-tight drop-shadow-md">
            Holy Spirit Worship
          </h1>
          <p className="body-lg text-grey-200 max-w-2xl mx-auto font-light leading-relaxed">
            {t(
              "En kväll med oavbruten lovsång, förkunnelse och bön i Frihamnen, Göteborg. Samlar troende och sökare över hela Västsverige.",
              "An unhurried night of worship, prayer, and intercession in Frihamnen, Gothenburg. Welcoming everyone across Western Sweden."
            )}
          </p>
        </div>
      </section>

      {/* 2. Details Bar: Overlapping the Hero bottom */}
      <div className="relative -mt-10 md:-mt-12 z-20 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-md shadow-lg border border-grey-200 p-5 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-grey-100">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-md bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-overline text-grey-400 font-semibold">{t("DATUM", "DATE")}</p>
              <p className="text-body font-semibold text-grey-900">
                {t("Måndag 18 Maj 2026", "Monday May 18, 2026")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-10 h-10 rounded-md bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-overline text-grey-400 font-semibold">{t("TID", "TIME")}</p>
              <p className="text-body font-semibold text-grey-900">18:30 – 21:30 CEST</p>
              <p className="text-xs text-grey-400">{t("Dörrar öppnas 18:00", "Doors open 18:00")}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-10 h-10 rounded-md bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-overline text-grey-400 font-semibold">{t("PLATS", "LOCATION")}</p>
              <p className="text-body font-semibold text-grey-900">Smyrna Church</p>
              <p className="text-xs text-grey-400">Frihamnen, Göteborg</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. RSVP Experience (Luma-Inspired, Frictionless Single Column) */}
      <section className="py-20 bg-grey-50 border-b border-grey-200">
        <Container>
          <RSVPForm />
        </Container>
      </section>

      {/* 4. Worship Leaders (Solid Gospel-Inspired Profile Cards) */}
      <section className="py-20 lg:py-28 bg-white border-b border-grey-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="overline text-brand-600 block mb-2 font-semibold tracking-[0.1em]">
              {t("MEDVERKANDE", "WORSHIP LEADERS & MINISTERS")}
            </span>
            <h2 className="h2 text-grey-900 mb-4">
              {t("Ledare & Musiker", "Worship Leaders")}
            </h2>
            <p className="body-lg text-grey-600 font-normal">
              {t(
                "En mångfald av röster och musiker från lokala församlingar förenade under ett namn: Jesus.",
                "A unified collective of worship leaders and instrumentalists from local churches across Gothenburg."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md border border-grey-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-square w-full bg-slate-900">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-overline text-brand-600 font-semibold block mb-1">
                      {leader.role}
                    </span>
                    <h3 className="h4 text-grey-900 mb-1">{leader.name}</h3>
                    <p className="text-xs text-grey-400 mb-4">{leader.church}</p>
                    <p className="body-sm text-grey-600 font-normal leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Practical Information Strip */}
      <section className="py-16 bg-grey-50">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-md border border-grey-200 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-5 h-5 text-brand-600" />
              <h3 className="h4 text-grey-900">
                {t("Praktisk Information inför Samlingen", "Practical Event Details")}
              </h3>
            </div>
            <ul className="space-y-3 text-body-sm text-grey-600">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>
                  <strong>{t("Kollekt & Gåvor:", "Giving:")}</strong> {t("Helt frivilligt via Swish (802557-4883). Inga entréavgifter.", "Voluntary via Swish (802557-4883). No fees.")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>
                  <strong>{t("Kollektivtrafik:", "Public Transit:")}</strong> {t("Spårvagn och buss stannar vid Frihamnen (5 min från Centralstationen).", "Trams and buses stop directly at Frihamnen (5 min from Central Station).")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>
                  <strong>{t("Tillgänglighet:", "Accessibility:")}</strong> {t("Full rullstolsanpassning och hörselslinga i hela auditoriet.", "Wheelchair accessible with hearing loops available.")}
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { LayoutGrid, Map, MapPin, Clock, Globe, ExternalLink, Church } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PartnerChurch {
  id: string;
  name: string;
  denomination: string;
  address: string;
  serviceTimes: string;
  website: string;
  coordinates: { x: number; y: number }; // For visual interactive map
  image: string;
  pastor: string;
}

export default function PartnersPage() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<"gallery" | "map">("gallery");
  const [selectedChurch, setSelectedChurch] = useState<string | null>(null);

  const partnerChurches: PartnerChurch[] = [
    {
      id: "smyrna",
      name: "Smyrna Kyrkan",
      denomination: "Pingströrelsen (Pentecostal)",
      address: "Frihamnen 12, 417 56 Göteborg",
      serviceTimes: "Söndagar 11:00 & 18:00",
      website: "https://smyrna.se",
      coordinates: { x: 48, y: 38 },
      image: "https://images.unsplash.com/photo-1548625361-195973e21820?w=600&auto=format&fit=crop&q=80",
      pastor: "Stefan Claar",
    },
    {
      id: "korskyrkan",
      name: "Korskyrkan Göteborg",
      denomination: "Evangeliska Frikyrkan (EFK)",
      address: "Vasagatan 45, 411 37 Göteborg",
      serviceTimes: "Söndagar 10:30",
      website: "https://korskyrkan.se",
      coordinates: { x: 52, y: 56 },
      image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=600&auto=format&fit=crop&q=80",
      pastor: "Per-Arne Jacobsson",
    },
    {
      id: "betlehemskyrkan",
      name: "Betlehemskyrkan",
      denomination: "Equmeniakyrkan",
      address: "Vasagatan 26, 411 24 Göteborg",
      serviceTimes: "Söndagar 11:00",
      website: "https://betlehemskyrkan.se",
      coordinates: { x: 50, y: 52 },
      image: "https://images.unsplash.com/photo-1543854589-cb4898425d0c?w=600&auto=format&fit=crop&q=80",
      pastor: "Helena Högberg",
    },
    {
      id: "hillsong-gbg",
      name: "Hillsong Sweden (Göteborg)",
      denomination: "Ekumenisk / Karismatisk",
      address: "Stigbergstorget 8, 414 63 Göteborg",
      serviceTimes: "Söndagar 16:00 & 18:30",
      website: "https://hillsong.se/goteborg",
      coordinates: { x: 34, y: 62 },
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&auto=format&fit=crop&q=80",
      pastor: "Andreas & Lina Nielsen",
    },
    {
      id: "fralsningsarmen",
      name: "Frälsningsarmén Första Kåren",
      denomination: "Frälsningsarmén",
      address: "Sankt Badhusgatan 10, 411 21 Göteborg",
      serviceTimes: "Söndagar 11:00",
      website: "https://fralsningsarmen.se",
      coordinates: { x: 44, y: 48 },
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&auto=format&fit=crop&q=80",
      pastor: "Major Kjell Karlsten",
    },
    {
      id: "sankt-birgitta",
      name: "Sankta Birgittas Kapell (Klippan)",
      denomination: "Svenska Kyrkan",
      address: "Adolf Edelsvärds gata 11, 414 51 Göteborg",
      serviceTimes: "Söndagar 10:00 & Veckomässor",
      website: "https://svenskakyrkan.se/goteborg",
      coordinates: { x: 26, y: 68 },
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=600&auto=format&fit=crop&q=80",
      pastor: "Komminister Johan Lind",
    },
  ];

  return (
    <div className="w-full py-16 lg:py-24 bg-white min-h-[85vh]">
      <Container>
        {/* Minimalist Hero */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Badge variant="brand" shape="md" className="mb-3">
              {t("EKUMENISKT SAMARBETE", "CHURCH COLLABORATION")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-4 tracking-tight">
              {t("Partnerförsamlingar", "Partner Churches")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed">
              {t(
                "GOSPELS är inte en egen församling utan en gemensam bro mellan Göteborgs kyrkor för att lyfta Jesus och tjäna vår stad tillsammans.",
                "GOSPELS is not an independent church, but a unifying bridge empowering local congregations to praise Jesus and serve our city side by side."
              )}
            </p>
          </div>

          {/* View Toggle: [Gallery View] [Map View] */}
          <div className="inline-flex p-1 rounded-md bg-grey-100 border border-grey-200 self-start md:self-end">
            <button
              type="button"
              onClick={() => setViewMode("gallery")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-body-sm font-semibold transition-all duration-200 ${
                viewMode === "gallery"
                  ? "bg-white text-grey-900 shadow-sm"
                  : "text-grey-600 hover:text-grey-900"
              }`}
            >
              <LayoutGrid className="w-4 h-4 text-brand-600" />
              <span>{t("Gallerivy", "Gallery View")}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("map")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-body-sm font-semibold transition-all duration-200 ${
                viewMode === "map"
                  ? "bg-white text-grey-900 shadow-sm"
                  : "text-grey-600 hover:text-grey-900"
              }`}
            >
              <Map className="w-4 h-4 text-brand-600" />
              <span>{t("Kartvy", "Map View")}</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Gallery View */}
        {viewMode === "gallery" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerChurches.map((church) => (
              <div
                key={church.id}
                className="bg-white rounded-md border border-grey-200 overflow-hidden shadow-sm hover:shadow-md hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full bg-slate-900">
                    <Image
                      src={church.image}
                      alt={church.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-sm text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-sm">
                        {church.denomination}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="h4 text-grey-900 mb-3">{church.name}</h3>

                    <div className="space-y-2 text-body-sm text-grey-600 mb-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{church.address}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{church.serviceTimes}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Church className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>Kontakt: {church.pastor}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-grey-100 flex items-center justify-between">
                  <a
                    href={church.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Besök hemsida</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-xs text-grey-400 font-mono">Göteborg</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Mode 2: Interactive Map View */}
        {viewMode === "map" && (
          <div className="bg-slate-900 rounded-md border border-slate-800 p-6 lg:p-8 text-white">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Map Canvas */}
              <div className="relative w-full lg:w-2/3 aspect-[4/3] bg-slate-950 rounded-md border border-slate-800 overflow-hidden">
                {/* Stylized Gothenburg River & Coast Outline */}
                <svg
                  className="w-full h-full text-slate-800 opacity-60"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {/* Göta Älv curve */}
                  <path d="M 0,45 Q 35,40 50,55 T 100,50" fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeOpacity="0.4" />
                  <path d="M 30,0 Q 40,30 35,60 T 60,100" fill="none" stroke="#334155" strokeWidth="1" />
                  {/* Grid lines */}
                  <line x1="20" y1="0" x2="20" y2="100" stroke="#1E293B" strokeWidth="0.5" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#1E293B" strokeWidth="0.5" />
                  <line x1="80" y1="0" x2="80" y2="100" stroke="#1E293B" strokeWidth="0.5" />
                  <line x1="0" y1="30" x2="100" y2="30" stroke="#1E293B" strokeWidth="0.5" />
                  <line x1="0" y1="60" x2="100" y2="60" stroke="#1E293B" strokeWidth="0.5" />
                </svg>

                {/* City Landmarks label */}
                <div className="absolute top-4 left-4 text-xs font-mono text-grey-400 tracking-wider">
                  GÖTA ÄLV · GÖTEBORG CENTRUM
                </div>

                {/* Interactive Pins */}
                {partnerChurches.map((church) => {
                  const isSelected = selectedChurch === church.id;
                  return (
                    <button
                      key={church.id}
                      type="button"
                      onClick={() => setSelectedChurch(church.id)}
                      style={{ top: `${church.coordinates.y}%`, left: `${church.coordinates.x}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group p-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                        isSelected
                          ? "bg-brand-500 ring-4 ring-brand-500/30 scale-125 z-30"
                          : "bg-slate-800 hover:bg-brand-600 border border-white/20 z-10"
                      }`}
                      aria-label={church.name}
                    >
                      <MapPin className="w-4 h-4 text-white" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded bg-black/90 text-white text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {church.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Map Info Sidebar */}
              <div className="w-full lg:w-1/3 space-y-4">
                <h3 className="h4 text-white">
                  {selectedChurch
                    ? partnerChurches.find((c) => c.id === selectedChurch)?.name
                    : t("Klicka på en kyrka på kartan", "Select a church on the map")}
                </h3>

                {selectedChurch ? (
                  (() => {
                    const church = partnerChurches.find((c) => c.id === selectedChurch)!;
                    return (
                      <div className="bg-slate-800/80 rounded-md p-5 border border-slate-700 space-y-3">
                        <span className="text-overline text-brand-500 font-semibold block">
                          {church.denomination}
                        </span>
                        <p className="text-body-sm text-grey-300">
                          <strong>{t("Adress:", "Address:")}</strong> {church.address}
                        </p>
                        <p className="text-body-sm text-grey-300">
                          <strong>{t("Gudstjänst:", "Services:")}</strong> {church.serviceTimes}
                        </p>
                        <p className="text-body-sm text-grey-300">
                          <strong>{t("Föreståndare:", "Pastor:")}</strong> {church.pastor}
                        </p>
                        <div className="pt-2">
                          <a
                            href={church.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-body-sm text-brand-500 hover:text-white font-semibold transition-colors"
                          >
                            <span>Besök webbplats</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <p className="text-body-sm text-grey-400">
                    {t(
                      "Se var alla 6 partnerförsamlingar finns utspridda längs Göta älv och i centrala Göteborg.",
                      "Explore how local congregations are distributed along Göta Älv and central Gothenburg."
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Partnership Intake Callout */}
        <div className="mt-16 bg-grey-50 rounded-md border border-grey-200 p-8 text-center max-w-3xl mx-auto">
          <h3 className="h3 text-grey-900 mb-2">
            {t("Vill er församling ansluta sig till GOSPELS?", "Does your church want to partner with GOSPELS?")}
          </h3>
          <p className="body text-grey-600 mb-6 max-w-xl mx-auto">
            {t(
              "Vi välkomnar alla kristna församlingar i Västsverige som delar vår bekännelse och längtan att upphöja Jesus.",
              "We welcome every Christian church community across Western Sweden committed to lifting Jesus together."
            )}
          </p>
          <Button href="/about/contact" variant="primary" size="md">
            {t("Kontakta Pastorsteamet", "Contact Church Liaison")}
          </Button>
        </div>
      </Container>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface DayPlan {
  dayCode: string;
  dayLabel: string;
  title: string;
  time: string;
  location: string;
  desc: string;
  tag: string;
}

export function WeeklyRhythm() {
  const { t } = useLanguage();

  const days: DayPlan[] = [
    {
      dayCode: "SÖN",
      dayLabel: t("Söndag", "Sunday"),
      title: t("Gudstjänst & Lovsång", "Sunday Gatherings"),
      time: "10:30 & 17:00",
      location: t("Smyrna Frihamnen & Vasakyrkan", "Smyrna Frihamnen & Vasa"),
      desc: t(
        "Två samlingar, en gemensam lovsång. Kaffe serveras från en halvtimme innan i foajén.",
        "Two gatherings, one united worship. Fresh coffee poured thirty minutes prior."
      ),
      tag: t("Hela Församlingen", "All Welcome"),
    },
    {
      dayCode: "MÅN",
      dayLabel: t("Måndag", "Monday"),
      title: t("Bön & Vila för Teamen", "Prayer & Rest"),
      time: t("Hela dagen", "All Day"),
      location: t("Stadens bönealtare", "Prayer Altar"),
      desc: t(
        "Vila och förbön för Göteborgs andliga liv och unga som söker framtidstro.",
        "A quiet day of personal sabbath and intercession for youth across Gothenburg."
      ),
      tag: t("Stillhet", "Stillness"),
    },
    {
      dayCode: "TIS",
      dayLabel: t("Tisdag", "Tuesday"),
      title: t("Öppet Tisdagsbord & Mat", "Community Dinner"),
      time: "18:00",
      location: t("Haga Gemenskapshus", "Haga Community Hall"),
      desc: t(
        "Gratis varm hemlagad måltid för alla som vill äta tillsammans. Ta med en granne.",
        "A free sit-down dinner for anyone in the neighborhood. Come hungry, bring a friend."
      ),
      tag: t("Gratis Måltid", "Free Supper"),
    },
    {
      dayCode: "ONS",
      dayLabel: t("Onsdag", "Wednesday"),
      title: t("Gospelkör & Ungdomskväll", "Gospel Youth & Choir"),
      time: "18:30",
      location: t("Linnegatan Musiksal", "Linnégatan Music Hall"),
      desc: t(
        "Körrepetition, stämsång och mentorskap för unga musiker och sångare i Västsverige.",
        "Vocal coaching, choir rehearsal, and creative fellowship for emerging gospel artists."
      ),
      tag: t("Unga & Musik", "Youth & Music"),
    },
    {
      dayCode: "TOR",
      dayLabel: t("Torsdag", "Thursday"),
      title: t("Husgrupper i Stadsdelarna", "Home Groups"),
      time: "19:00",
      location: t("Majorna, Johanneberg, Hisingen", "Majorna, Johanneberg, Hisingen"),
      desc: t(
        "8–12 personer som delar kvällsfika, läser söndagens bibeltext och ber för varandra.",
        "Small groups sharing dessert, talking through Scripture, and praying for one another."
      ),
      tag: t("Husgemenskap", "Small Groups"),
    },
    {
      dayCode: "FRE",
      dayLabel: t("Fredag", "Friday"),
      title: t("Akustisk Lovsång & Eldkväll", "Acoustic Night & Fire Pit"),
      time: "19:30",
      location: t("Frihamnspiren / Slottsskogen", "Harbor Pier / Slottsskogen"),
      desc: t(
        "Intim akustisk sång, varm choklad vid eldkorgarna och öppen förbön under bar himmel.",
        "Acoustic praise, hot chocolate beside the fire, and open-air prayer under the stars."
      ),
      tag: t("Unga Vuxna", "Young Adults"),
    },
    {
      dayCode: "LÖR",
      dayLabel: t("Lördag", "Saturday"),
      title: t("Torgmission & Gatulovsång", "Serve & Street Worship"),
      time: "13:00 - 16:00",
      location: t("Brunnsparken / Drottningtorget", "Brunnsparken Plaza"),
      desc: t(
        "Lovsångsteam och fika-utdelning mitt i lördagsvimlet. Vi bjuder på hopp och värme.",
        "Live street praise and warm coffee in Gothenburg's central transit plazas."
      ),
      tag: t("Torginsats", "Public Presence"),
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const activeDay = days[activeIdx];

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-800">
              {t("VARDAGSLIV • GÖTEBORG", "WEEKDAY CADENCE • GOTHENBURG")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 mt-2">
              {t("En vecka i GOSPELS", "A week in GOSPELS")}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light max-w-xl">
              {t(
                "Gemenskapen lever inte bara på söndagar. Runt matbord, vid eldkorgar och på stadens torg möts vi hela veckan.",
                "Community happens far beyond the weekend: around dinner tables, beside fire pits, and across Gothenburg's public squares."
              )}
            </p>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal-800 hover:text-teal-900 uppercase tracking-wider"
          >
            <span>{t("Hela stadskalendern", "Full city calendar")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Day Selector Pill Strip */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-3 mb-6 overflow-x-auto pb-1">
          {days.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.dayCode}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`py-3 px-2 sm:px-4 rounded-xl text-center transition flex flex-col items-center justify-center border ${
                  isSelected
                    ? "bg-teal-700 text-white border-teal-700 shadow-xs"
                    : "bg-[#FAF9F5] text-stone-700 border-stone-200/80 hover:bg-stone-100"
                }`}
              >
                <span className="font-mono text-xs sm:text-sm font-bold block">{item.dayCode}</span>
                <span className={`text-[10px] hidden sm:block mt-0.5 ${isSelected ? "text-teal-100" : "text-stone-600"}`}>
                  {item.dayLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Day Detail Card */}
        <div className="bg-[#FAF9F5] rounded-2xl border border-stone-200/90 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-teal-700 uppercase tracking-wider">
                {activeDay.dayLabel}
              </span>
              <span className="text-stone-300">•</span>
              <span className="px-2 py-0.5 rounded-full bg-teal-50 border border-teal-100 font-mono text-[11px] text-teal-800 font-medium">
                {activeDay.tag}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              {activeDay.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-4">
              {activeDay.desc}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                {activeDay.time}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                {activeDay.location}
              </span>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/events"
              className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-medium text-xs sm:text-sm transition shadow-xs inline-flex items-center gap-2 active:scale-95"
            >
              <span>{t("Kom förbi", "Join in")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

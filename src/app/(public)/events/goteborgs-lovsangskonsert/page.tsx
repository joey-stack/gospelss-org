"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ShieldCheck,
  CheckCircle,
  Share2,
  CalendarPlus,
  ArrowRight,
  Sparkles,
  Music,
  Heart,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GoteborgsLovsangskonsertPage() {
  const { t } = useLanguage();
  const [savedEmail, setSavedEmail] = useState("");
  const [remindSuccess, setRemindSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSaveDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (savedEmail) {
      setRemindSuccess(true);
    }
  };

  const shareLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Göteborgs Lovsångskonsert 2027 — GOSPELS"
  )}&dates=20270612T120000Z/20270612T190000Z&details=${encodeURIComponent(
    "Västsveriges största öppna gospelkonsert i hjärtat av Göteborg med över 200 musiker och 35 församlingar. Fri entré."
  )}&location=${encodeURIComponent("Gustav Adolfs Torg, 411 10 Göteborg")}`;

  return (
    <div className="w-full bg-white">
      {/* 1. Hero: Full-Width Atmospheric Stage */}
      <section className="relative w-full min-h-[55vh] md:min-h-[62vh] flex items-center justify-center text-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1800&auto=format&fit=crop&q=80"
          alt="Göteborgs Lovsångskonsert 2027"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />

        <div className="relative z-10 max-w-4xl px-4 py-16 sm:py-20 mx-auto">
          <Badge variant="brand" shape="md" className="mb-4">
            {t("SOMMARFESTIVAL 2027 · FRI ENTRÉ", "SUMMER FESTIVAL 2027 · FREE ADMISSION")}
          </Badge>

          <h1 className="h1 text-white mb-6 tracking-tight">
            {t("Göteborgs Lovsångskonsert 2027", "Gothenburg Praise Concert 2027")}
          </h1>

          <p className="body-lg text-slate-200 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            {t(
              "Västsveriges största öppna gospel- och lovsångskonsert på Gustav Adolfs Torg. Över 200 musiker, förenade körer från 35 församlingar och tusentals göteborgare under öppen himmel.",
              "West Sweden’s largest open-air gospel and praise festival at Gustav Adolfs Torg. Uniting 200+ musicians, massive ecumenical choirs from 35 congregations, and thousands of Gothenburgers under open skies."
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-body-sm font-mono text-slate-300">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-400" />
              {t("Lördag 12 Juni 2027", "Saturday June 12, 2027")}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-400" />
              14:00 – 21:00 CEST
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-400" />
              Gustav Adolfs Torg, Göteborg
            </span>
          </div>
        </div>
      </section>

      {/* 2. Key Highlights Strip */}
      <section className="border-b border-grey-200 bg-grey-50 py-6">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white border border-grey-200">
              <span className="block text-xl font-bold text-grey-900 font-sans">0 SEK</span>
              <span className="text-body-xs font-mono text-grey-500 uppercase">{t("Alltid Fri Entré", "Always Free")}</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-grey-200">
              <span className="block text-xl font-bold text-brand-600 font-sans">200+</span>
              <span className="text-body-xs font-mono text-grey-500 uppercase">{t("Kör & Musiker", "Choir & Orchestra")}</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-grey-200">
              <span className="block text-xl font-bold text-grey-900 font-sans">35+</span>
              <span className="text-body-xs font-mono text-grey-500 uppercase">{t("Partnerkyrkor", "Partner Churches")}</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-grey-200">
              <span className="block text-xl font-bold text-brand-600 font-sans">10 000</span>
              <span className="text-body-xs font-mono text-grey-500 uppercase">{t("Kapacitet", "Open Air Capacity")}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Main Content: Details + Save Date Box */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Vision & Event Description */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="overline text-brand-600 font-semibold tracking-wider block mb-2">
                  {t("OM SOMMARKONSERTEN", "ABOUT THE FESTIVAL")}
                </span>
                <h2 className="h2 text-grey-900 tracking-tight mb-6">
                  {t("Ett Historiskt Möte i Stadens Hjärta", "A Historic Gathering in the City Center")}
                </h2>
                <div className="space-y-4 text-body-base text-grey-700 leading-relaxed">
                  <p>
                    {t(
                      "Under en hel lördag förvandlas Gustav Adolfs Torg till en plats för glädje, helig tillbedjan och generös gemenskap. Vi samlar körer, orkestrar och solister från hela Västsveriges kyrkliga bredd för att sjunga ut evangeliet över vår stad.",
                      "For an entire Saturday, Gustav Adolfs Torg will be transformed into an epic space of joy, sacred praise, and open hospitality. We gather choirs, string players, gospel rhythm sections, and vocalists representing the breadth of Western Sweden’s church community."
                    )}
                  </p>
                  <p>
                    {t(
                      "Evenemanget är helt kostnadsfritt och kräver ingen föranmälan för allmänheten — alla sitt- och ståplatser är öppna enligt först-till-kvarn-principen. Ta med familj, vänner och grannar!",
                      "The festival is completely free and requires no advance ticketing — open seating and lawn space are accessible to all. Bring your family, coworkers, and neighbors!"
                    )}
                  </p>
                </div>
              </div>

              {/* Schedule Timeline */}
              <div className="space-y-6 pt-6 border-t border-grey-200">
                <h3 className="h3 text-grey-900">
                  {t("Preliminärt Program för Dagen", "Preliminary Schedule")}
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      time: "14:00",
                      title: t("Invigning & Barn- & Ungdomskörer", "Opening & Youth Gospel Ensembles"),
                      desc: t("Ungdomskörer och lokala unga talanger öppnar festivalen med energi och sångglädje.", "Youth gospel groups kick off the day with vibrant praise and uplifting rhythm."),
                    },
                    {
                      time: "16:00",
                      title: t("Akustisk Tillbedjan & Bön för Göteborg", "Acoustic Praise & Prayer for Gothenburg"),
                      desc: t("Pastorer från stadens församlingar leder gemensam förbön för Göteborgs unga, skolor och beslutsfattare.", "Pastors and community leaders lead unified prayer for youth, schools, and city peace."),
                    },
                    {
                      time: "18:30",
                      title: t("Stora Festkonserten: 200 Röster i Frihamnen", "Mass Concert: 200-Voice United Choir"),
                      desc: t("Den stora ekumeniska festivalorkestern och kören i ett storslaget arrangemang av klassiska gospelsånger och nya nordiska lovsånger.", "The ecumenical mass choir and rhythm section in an unforgettable evening of soul-stirring worship."),
                    },
                  ].map((slot, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-grey-50 border border-grey-200 flex gap-4">
                      <div className="text-body-sm font-mono font-bold text-brand-600 shrink-0 w-16 pt-0.5">
                        {slot.time}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-body-base font-bold text-grey-900">{slot.title}</h4>
                        <p className="text-body-sm text-grey-600">{slot.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Info Box */}
              <div className="p-8 rounded-2xl bg-grey-50 border border-grey-200 space-y-4">
                <h3 className="h4 text-grey-900">
                  {t("Praktisk Information & Tillgänglighet", "Logistics & Accessibility")}
                </h3>
                <ul className="space-y-2 text-body-sm text-grey-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{t("Kollektivtrafik: Hållplats Brunnsparken / Gustav Adolfs Torg ligger 50m bort.", "Public transit: Brunnsparken hub is 50 meters from the venue.")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{t("Rullstolsanpassad plattform med god sikt över scenen.", "Designated wheelchair accessible platform with clear stage line of sight.")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{t("Fikaförsäljning och matvagnar till självkostnadspris.", "Refreshments and food trucks with all proceeds supporting local community charities.")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Save Date Card + Share */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-grey-50 border border-grey-200 shadow-sm space-y-6">
                <div>
                  <Badge variant="brand" shape="sm" className="mb-2">
                    {t("PÅMINNELSE", "REMINDER")}
                  </Badge>
                  <h3 className="h3 text-grey-900">
                    {t("Spara Datumet i Kalendern", "Save the Date")}
                  </h3>
                  <p className="body-sm text-grey-600 mt-2">
                    {t(
                      "Lägg till konserten direkt i din Google Kalender eller prenumerera för att få konsertprogram och uppdateringar via e-post.",
                      "Add the gathering directly to your Google Calendar or subscribe to receive lineup updates directly."
                    )}
                  </p>
                </div>

                <div className="space-y-3">
                  <Button asChild variant="brand" size="lg" className="w-full justify-center">
                    <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                      <CalendarPlus className="w-4 h-4 mr-2" />
                      {t("Lägg till i Google Kalender", "Add to Google Calendar")}
                    </a>
                  </Button>

                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    onClick={shareLink}
                    className="w-full justify-center"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    {copiedLink ? t("Länk kopierad!", "Link Copied!") : t("Dela med Vänner", "Share Event")}
                  </Button>
                </div>

                {/* Email Alert Box */}
                <div className="pt-6 border-t border-grey-200">
                  {remindSuccess ? (
                    <div className="p-4 rounded-xl bg-brand-50 border border-brand-500/20 text-brand-800 text-body-sm flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-600 shrink-0" />
                      <span>{t("Tack! Vi skickar påminnelse när det närmar sig.", "Thank you! We will notify you as the date approaches.")}</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSaveDate} className="space-y-3">
                      <label htmlFor="remindEmail" className="block text-body-xs font-semibold text-grey-700 uppercase">
                        {t("Få påminnelse via e-post", "Get an email alert")}
                      </label>
                      <input
                        id="remindEmail"
                        type="email"
                        required
                        value={savedEmail}
                        onChange={(e) => setSavedEmail(e.target.value)}
                        placeholder="namn@epost.se"
                        className="w-full px-4 py-2.5 rounded-xl border border-grey-300 bg-white text-grey-900 text-body-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                      <Button type="submit" variant="secondary" size="md" className="w-full justify-center">
                        {t("Bevaka Evenemanget", "Watch Gathering")}
                      </Button>
                    </form>
                  )}
                </div>
              </div>

              {/* Choir & Musician Recruitment Card */}
              <div className="p-8 rounded-3xl bg-brand-50/70 border border-brand-500/20 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                  <Music className="w-5 h-5" />
                </div>
                <h4 className="h4 text-grey-900">
                  {t("Vill du sjunga i storkören?", "Want to Sing in the Mass Choir?")}
                </h4>
                <p className="body-sm text-grey-700 leading-relaxed">
                  {t(
                    "Vi välkomnar sångare från alla församlingar och körer i Västsverige. Gemensamma repetitioner startar under våren 2027.",
                    "We welcome vocalists from every church choir in Western Sweden. Rehearsals will commence in spring 2027."
                  )}
                </p>
                <Button asChild variant="brand" size="sm">
                  <Link href="/get-involved/volunteer">
                    {t("Anmäl Intresse som Körmedlem", "Join Mass Choir")}
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

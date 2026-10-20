"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  Users,
  CheckCircle,
  ShieldCheck,
  Music,
  Camera,
  Heart,
  Wrench,
  Send,
  Sparkles,
} from "lucide-react";

export default function VolunteerPage() {
  const { t } = useLanguage();
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState<number>(22);
  const [team, setTeam] = useState("Värdskap & Välkomnande");
  const [notes, setNotes] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentConsent, setParentConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const isMinor = age < 18;

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
          age,
          team,
          notes,
          parentName: isMinor ? parentName : undefined,
          parentPhone: isMinor ? parentPhone : undefined,
          parentConsent: isMinor ? parentConsent : undefined,
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

  const tracks = [
    {
      id: "Värdskap & Välkomnande",
      title: "Värdskap & Välkomnande",
      desc: "Ta emot besökare med värme, dela ut program, koka kaffe och svara på frågor.",
      icon: Users,
    },
    {
      id: "Ljud, Ljus & Scen",
      title: "Ljud, Ljus & Scen",
      desc: "Rikta strålkastare, kabla scen, mikrofonera kören och bistå professionella tekniker.",
      icon: Wrench,
    },
    {
      id: "Foto, Film & Media",
      title: "Foto, Film & Media",
      desc: "Fånga atmosfären, filma lovsångsögonblick och skapa korta klipp för sociala medier.",
      icon: Camera,
    },
    {
      id: "Förbön & Omsorg",
      title: "Förbön & Omsorg",
      desc: "Stå redo under samlingarna för att be och samtala med människor som söker stöd.",
      icon: Heart,
    },
    {
      id: "Sång & Kör",
      title: "Sång & Kör",
      desc: "Sjung i United Gospel Choir under våra offentliga konserter och lovsångskvällar.",
      icon: Music,
    },
  ];

  return (
    <div className="bg-background text-on-surface antialiased font-body-md text-body-md min-h-screen flex flex-col">
      <Navbar
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
        onOpenPrayer={() => setPrayerOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      <main id="main-content" className="flex-1 w-full">
        {/* Cinematic Full-Width Hero Section with 100vh */}
        <section className="relative bg-on-background text-surface overflow-hidden min-h-screen min-h-[100dvh] flex items-center w-full border-b border-white/10">
          {/* Atmospheric Background Image with Twilight Gradients */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTYNWYf6T944Ks-J_VkQzdXhL5g9ViSXo1X72RK9WWouMHEspLjCOtg-nbaGqu6wnZB6yRZjg0E3rQAdMTvjiZaCK7p7WN3KQhWdOVv_eagNA5gcg_bjzrcdbexTVR79_maRwMkpLcVH5P8qWuiotkGnbs-IiIaiZH_jy9kt-g4hhGlGwukSASaHNW7VPWUkk60QLnZChwbvxW6UL_u-rmuJDOEOTO5gBXZDI8TLUiaIQUjRuIk_Qx3A"
              alt="Volunteers serving together with joy and dedication in Gothenburg"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-background via-on-background/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-on-background via-transparent to-black/50"></div>
          </div>

          {/* Ambient Glowing Orbs */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Full-width container with standard padding */}
          <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
            <div className="max-w-4xl space-y-4 sm:space-y-6">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest/20 border border-white/15 backdrop-blur-md shadow-xs">
                <Users className="w-4 h-4 text-primary-container" />
                <span className="text-label-sm font-label-sm text-primary-fixed tracking-wider uppercase font-semibold">
                  {t("Tjäna i Göteborg • Volontärteam", "Serve in Gothenburg • Volunteer Teams")}
                </span>
              </div>

              {/* Display Hero Headline & Mission Subtitle */}
              <div>
                <h1 className="text-display-hero-mobile sm:text-display-hero font-display-hero text-white tracking-tight leading-tight mb-3">
                  {t("Bli Volontär i ", "Become a Volunteer with ")}
                  <span className="text-primary-container font-extrabold">GOSPELS</span>
                </h1>
                <p className="text-body-md sm:text-body-lg font-body-lg text-slate-200 leading-relaxed max-w-2xl">
                  {t(
                    "Var med och tjäna bakom kulisserna. Vi erbjuder en varm kristen gemenskap, ledarskapsträning och trygg handledning oavsett om du har lång erfarenhet eller provar för första gången.",
                    "Serve behind the scenes. We offer warm Christian community, leadership coaching, and trusted mentorship whether you have years of experience or are serving for the first time."
                  )}
                </p>
              </div>

              {/* Safeguarding highlight */}
              <div className="pt-2 flex items-center gap-2 text-label-sm font-label-sm text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>
                  {t(
                    "Trygg miljö: Utdrag ur belastningsregistret och handledarstöd för alla under 18 år.",
                    "Safe environment: Criminal record background checks and supervision support for everyone under 18."
                  )}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Form and Tracks Grid */}
        <section className="py-16 bg-surface">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Team Tracks (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                  Våra Volontärspår
                </h3>
                {tracks.map((tr) => {
                  const IconComp = tr.icon;
                  return (
                    <div
                      key={tr.id}
                      onClick={() => setTeam(tr.id)}
                      className={`p-5 rounded-2xl border transition cursor-pointer ${
                        team === tr.id
                          ? "bg-primary-container/10 border-primary shadow-xs"
                          : "bg-surface-container-lowest border-outline-variant/40 hover:border-primary"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            team === tr.id
                              ? "bg-primary-container text-on-primary"
                              : "bg-surface-container text-primary"
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-headline-sm text-sm font-bold text-on-background">
                            {tr.title}
                          </h4>
                          <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                            {tr.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Application Form (7 cols) */}
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 shadow-sm">
                <h3 className="font-headline-md text-headline-md text-on-background">
                  Volontäranmälan
                </h3>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  Valt spår: <strong className="text-primary">{team}</strong>
                </p>

                {submitted ? (
                  <div className="mt-6 p-8 rounded-xl bg-primary-container/10 border border-primary-container text-center space-y-4">
                    <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
                    <h4 className="font-headline-md text-headline-md text-on-background">
                      Tack för din intresseanmälan!
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Vi har skickat en bekräftelse till <strong>{email}</strong>. Vårt teamledarskap kommer att kontakta dig inför nästa samling och introduktionsträff.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {errorMsg && (
                      <div className="p-3 rounded-lg bg-error-container text-on-error-container text-body-sm">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="vol-name">
                          För- och efternamn
                        </label>
                        <input
                          id="vol-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Karin Lind"
                          className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="vol-age">
                          Ålder
                        </label>
                        <input
                          id="vol-age"
                          type="number"
                          required
                          min={13}
                          max={99}
                          value={age}
                          onChange={(e) => setAge(parseInt(e.target.value) || 18)}
                          className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="vol-email">
                          E-postadress
                        </label>
                        <input
                          id="vol-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="karin@exempel.se"
                          className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="vol-phone">
                          Mobilnummer
                        </label>
                        <input
                          id="vol-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="070-123 45 67"
                          className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        />
                      </div>
                    </div>

                    {/* Youth Safeguarding Gate for Minors */}
                    {isMinor && (
                      <div className="p-4 rounded-xl bg-surface-container-low border border-primary-container/40 space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase">
                          <ShieldCheck className="w-4 h-4" />
                          <span>Trygghetsrutin för sökande under 18 år</span>
                        </div>
                        <p className="text-xs text-outline leading-relaxed">
                          För unga under 18 år inhämtar vi kontaktuppgifter och skriftligt samtycke från målsman i enlighet med föreningens barn- och ungdomsskyddspolicy.
                        </p>

                        <div>
                          <label className="block text-xs font-semibold text-on-surface mb-1" htmlFor="parent-name">
                            Målsmans fullständiga namn
                          </label>
                          <input
                            id="parent-name"
                            type="text"
                            required
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            placeholder="Målsmans namn"
                            className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-body-sm py-2 px-3 focus:border-primary transition"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-on-surface mb-1" htmlFor="parent-phone">
                            Målsmans telefonnummer
                          </label>
                          <input
                            id="parent-phone"
                            type="tel"
                            required
                            value={parentPhone}
                            onChange={(e) => setParentPhone(e.target.value)}
                            placeholder="07X-XXX XX XX"
                            className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-body-sm py-2 px-3 focus:border-primary transition"
                          />
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <input
                            id="parent-consent"
                            type="checkbox"
                            required
                            checked={parentConsent}
                            onChange={(e) => setParentConsent(e.target.checked)}
                            className="rounded text-primary focus:ring-primary border-outline-variant h-4 w-4"
                          />
                          <label htmlFor="parent-consent" className="text-xs text-on-surface-variant cursor-pointer">
                            Jag bekräftar att målsman godkänt mitt engagemang som volontär
                          </label>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="vol-notes">
                        Berätta lite om dig själv och din erfarenhet (valfritt)
                      </label>
                      <textarea
                        id="vol-notes"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Har du varit med i kör tidigare, spelar du något instrument eller har du teknikvana?..."
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-primary-container text-on-primary hover:bg-secondary font-label-md py-3.5 rounded-xl shadow-md custom-halo transition duration-150 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? "Skickar ansökan..." : "Skicka volontäransökan"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <RSVPModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
      <SwishModal isOpen={swishOpen} onClose={() => setSwishOpen(false)} />
      <PrayerModal isOpen={prayerOpen} onClose={() => setPrayerOpen(false)} />
      <VolunteerModal isOpen={volunteerOpen} onClose={() => setVolunteerOpen(false)} />
    </div>
  );
}

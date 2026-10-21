"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
  ArrowRight,
  Info,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function VolunteerPage() {
  const { t } = useLanguage();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState<number>(24);
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
      title: t("Värdskap & Välkomnande", "Hospitality & Welcome"),
      desc: t(
        "Ta emot besökare med värme, dela ut program, koka kaffe och svara på frågor i entrén.",
        "Welcome attendees with warmth, distribute song programs, brew coffee, and guide guests."
      ),
      icon: Users,
    },
    {
      id: "Ljud, Ljus & Scen",
      title: t("Ljud, Ljus & Scen", "Audio, Lighting & Stage"),
      desc: t(
        "Rikta strålkastare, kabla scen, mikrofonera kören och bistå professionella ljudtekniker.",
        "Stage management, cable runs, choral miking, and audio-visual production support."
      ),
      icon: Wrench,
    },
    {
      id: "Foto, Film & Media",
      title: t("Foto, Film & Media", "Photo, Video & Socials"),
      desc: t(
        "Fånga stämningen under samlingar, fota deltagare, producera korta reels och hjälpa till med livestream.",
        "Capture sacred moments, stage photography, highlight reels, and broadcast livestream support."
      ),
      icon: Camera,
    },
    {
      id: "Förbön & Själavård",
      title: t("Förbön & Själavård", "Prayer & Pastoral Care"),
      desc: t(
        "Stå till förfogande för förbön under och efter samlingarna under handledning av pastorer.",
        "Serve in confidential intercessory prayer under guidance of ordained local pastors."
      ),
      icon: Heart,
    },
    {
      id: "Kör & Lovsångsteam",
      title: t("Kör & Lovsångsteam", "Choir & Music Team"),
      desc: t(
        "Sjunga i den ekumeniska storkören eller delta som instrumentalist under sommarkonserterna.",
        "Vocal participation in the city mass choir or auditioning for festival rhythm ensembles."
      ),
      icon: Music,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero */}
      <section className="py-20 lg:py-28 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="brand" shape="md" className="mb-4">
              {t("ENGAGERA DIG · VOLONTÄRTEAM", "GET INVOLVED · VOLUNTEER TEAM")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-6 tracking-tight">
              {t("Tjäna Tillsammans i Göteborg", "Serve Together in Gothenburg")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed mb-6">
              {t(
                "Ingen konsert är möjlig utan våra fantastiska volontärer. Oavsett om du älskar att välkomna människor, rigga ljudutrustning eller be för sökande finns det en plats för dig.",
                "No public gathering happens without our faithful volunteers. Whether you excel in welcoming seekers, audio staging, camera operation, or confidential prayer, your gifts belong here."
              )}
            </p>
            <div className="text-overline text-grey-400 font-mono">
              Gospels Ideell Förening · Org.nr: 802557-4883 · Ungdomsskydd under 18 år tillämpas
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Tracks Overview */}
      <section className="py-16 bg-white border-b border-grey-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="overline text-brand-600 font-semibold tracking-wider block mb-2">
              {t("TEAMSPÅR", "MINISTRY TRACKS")}
            </span>
            <h2 className="h2 text-grey-900 tracking-tight">
              {t("Hitta Ditt Team", "Find Your Serving Track")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {tracks.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.id}
                  onClick={() => setTeam(track.id)}
                  className={`p-6 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                    team === track.id
                      ? "border-brand-600 bg-brand-50/50 shadow-sm"
                      : "border-grey-200 bg-grey-50 hover:border-grey-300"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-brand-600 border border-grey-200 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="h4 text-grey-900 text-base">{track.title}</h3>
                    <p className="body-xs text-grey-600 leading-relaxed">{track.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-grey-200/60 text-body-xs font-semibold text-brand-600">
                    {team === track.id ? t("✓ Valt spår", "✓ Selected") : t("Välj spår", "Select")}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Form Section */}
      <section className="py-20 bg-grey-50">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-grey-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="h3 text-grey-900">
                      {t("Tack för din anmälan!", "Thank you for applying!")}
                    </h2>
                    <p className="body-base text-grey-600">
                      {t(
                        `Vi har tagit emot din ansökan för teamet ${team}. En bekräftelse har skickats till ${email}. Vår teamledare kontaktar dig inom kort!`,
                        `We have received your application for the ${team} track. A confirmation has been sent to ${email}. Our team lead will be in touch shortly!`
                      )}
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setNotes("");
                    }}
                  >
                    {t("Skicka en ny anmälan", "Submit another application")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="h3 text-grey-900 mb-2">
                      {t("Ansök som Volontär", "Volunteer Application")}
                    </h2>
                    <p className="body-sm text-grey-500">
                      {t("Fyll i dina uppgifter nedan. Vi återkommer med introduktionsträff.", "Complete the fields below and we will follow up with orientation details.")}
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-body-sm">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                        {t("Fullständigt Namn *", "Full Name *")}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("Förnamn och efternamn", "First and last name")}
                        className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                          {t("Telefonnummer *", "Phone Number *")}
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="070-123 45 67"
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                          {t("Ålder *", "Age *")}
                        </label>
                        <input
                          type="number"
                          required
                          min={13}
                          max={99}
                          value={age}
                          onChange={(e) => setAge(parseInt(e.target.value) || 18)}
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                          {t("Önskat Team *", "Chosen Team Track *")}
                        </label>
                        <select
                          value={team}
                          onChange={(e) => setTeam(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none"
                        >
                          {tracks.map((tr) => (
                            <option key={tr.id} value={tr.id}>
                              {tr.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Minor Safeguarding Check (Gate 4) */}
                    {isMinor && (
                      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-4">
                        <div className="flex items-center gap-2 text-amber-800 font-semibold text-body-sm">
                          <ShieldCheck className="w-4 h-4 text-amber-600" />
                          <span>{t("Ungdomsskydd: Målsmans Samtycke Krävs (<18 år)", "Youth Safeguarding: Parental Consent Required (<18)")}</span>
                        </div>
                        <p className="body-xs text-amber-700">
                          {t(
                            "Eftersom du är under 18 år måste målsman godkänna ditt deltagande enligt vår trygghets- och skyddspolicy.",
                            "Because you are under 18, a parent or legal guardian must consent to your volunteer participation."
                          )}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            required
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            placeholder={t("Målsmans namn *", "Parent/Guardian Name *")}
                            className="w-full px-3 py-2 rounded-lg border border-amber-300 text-body-sm focus:outline-none"
                          />
                          <input
                            type="tel"
                            required
                            value={parentPhone}
                            onChange={(e) => setParentPhone(e.target.value)}
                            placeholder={t("Målsmans telefon *", "Parent/Guardian Phone *")}
                            className="w-full px-3 py-2 rounded-lg border border-amber-300 text-body-sm focus:outline-none"
                          />
                        </div>
                        <label className="flex items-start gap-2 pt-2 cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            checked={parentConsent}
                            onChange={(e) => setParentConsent(e.target.checked)}
                            className="mt-1 w-4 h-4 text-brand-600 rounded"
                          />
                          <span className="text-body-xs text-amber-900">
                            {t("Jag bekräftar att målsman har lämnat tillstånd till min volontärinsats.", "I confirm that my parent/guardian has granted permission for my volunteering.")}
                          </span>
                        </label>
                      </div>
                    )}

                    <div>
                      <label className="block text-body-xs font-semibold uppercase tracking-wider text-grey-700 mb-2">
                        {t("Tidigare Erfarenhet eller Önskemål", "Prior Experience or Preferences")}
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder={t("Berätta kort om din erfarenhet, hemförsamling eller varför du vill vara med...", "Briefly mention your background, home church, or why you wish to serve...")}
                        className="w-full px-4 py-3 rounded-xl border border-grey-300 text-grey-900 text-body-base focus:ring-2 focus:ring-brand-500 focus:outline-none resize-y"
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
                      t("Skickar ansökan...", "Submitting application...")
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>{t("Skicka Volontäransökan", "Submit Volunteer Application")}</span>
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

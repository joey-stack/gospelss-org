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
  Heart,
  ShieldCheck,
  Send,
  Lock,
  Sparkles,
  CheckCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function DedicatedPrayerPage() {
  const { t } = useLanguage();
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Förbön");
  const [content, setContent] = useState("");
  const [gdprConsent, setGdprConsent] = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Anonym",
          email: email || undefined,
          topic,
          content,
          gdprConsent,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Inskickningen misslyckades.");
      }

      setSubmitted(true);
      setContent("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Ett fel uppstod.";
      setErrorMsg(msg);
    } finally {
      setSubmitting(false);
    }
  };

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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Em1w6paLo-x8X6QGOOlARn1KZv62HJzlPPLkzssnuxnv6iCtH_eXttJT4NACC3Q9FYNz9uBsViwuY_k2_5SU7AElKMehCnEEJ9Ka2LaeX3Gi2vyGMOdpMeQY56oZf-cY5uaLRIAnM2gthRbhS4HrZ4njt273JFLeFxZRg5bqXS92L475zJNyaL7ok09KlPpBc0MEV40rWuL0rwHwFInWz3eAsK78svIDDFzeNOVhBTU9P2gDXsfhGw"
              alt="Sacred prayer atmosphere and intercession in Gothenburg"
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
          <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl space-y-4 sm:space-y-6">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest/20 border border-white/15 backdrop-blur-md shadow-xs">
                <Lock className="w-4 h-4 text-primary-container" />
                <span className="text-label-sm font-label-sm text-primary-fixed tracking-wider uppercase font-semibold">
                  {t("Fullständig Tystnadsplikt • GDPR Artikel 9", "Complete Confidentiality • GDPR Article 9")}
                </span>
              </div>

              {/* Display Hero Headline & Mission Subtitle */}
              <div>
                <h1 className="text-display-hero-mobile sm:text-display-hero font-display-hero text-white tracking-tight leading-tight mb-3">
                  {t("Behöver du ", "Need ")}<span className="text-primary-container font-extrabold">{t("Bön?", "Prayer?")}</span>
                </h1>
                <p className="text-body-md sm:text-body-lg font-body-lg text-slate-200 leading-relaxed max-w-2xl">
                  {t(
                    "Du är aldrig ensam. Vårt pastorala bönteam i Göteborg ber dagligen för varje inkommet böneämne i fullständig sekretess och kärlek.",
                    "You are never alone. Our pastoral prayer team in Gothenburg prays daily for each prayer request in strict confidentiality and grace."
                  )}
                </p>
              </div>

              {/* Security Highlight Pill */}
              <div className="pt-2 flex items-center gap-2 text-label-sm font-label-sm text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>
                  {t(
                    "Krypterad och lösenordsskyddad hantering av betrodda själavårdare.",
                    "Encrypted and password-protected management by trusted pastoral caregivers."
                  )}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Prayer Form & Guarantee Grid */}
        <section className="py-16 bg-surface">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Form (7 cols) */}
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 shadow-sm">
                <h3 className="font-headline-md text-headline-md text-on-background">
                  Skriv din Böneförfrågan
                </h3>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  Dela vad du bär på. Inget ämne är för litet eller för svårt.
                </p>

                {submitted ? (
                  <div className="mt-6 p-8 rounded-xl bg-primary-container/10 border border-primary-container text-center space-y-4">
                    <ShieldCheck className="w-14 h-14 text-emerald-600 mx-auto" />
                    <h4 className="font-headline-md text-headline-md text-on-background">
                      Tack, vi ber för dig
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Ditt böneämne har tagits emot och hanteras under strikt tystnadsplikt enligt svensk GDPR Artikel 9.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-primary font-label-md text-label-md hover:underline"
                    >
                      Skicka ett till ämne
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {errorMsg && (
                      <div className="p-3 rounded-lg bg-error-container text-on-error-container text-body-sm">
                        {errorMsg}
                      </div>
                    )}

                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="prayer-topic">
                        Kategori för förbönen
                      </label>
                      <select
                        id="prayer-topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                      >
                        <option value="Hälsa & Helande">Hälsa &amp; Helande</option>
                        <option value="Familj & Relationer">Familj &amp; Relationer</option>
                        <option value="Andlig Förnyelse">Andlig Förnyelse</option>
                        <option value="Ekonomi & Arbete">Ekonomi &amp; Arbete</option>
                        <option value="Ångest & Ensamhet">Ångest &amp; Ensamhet</option>
                        <option value="Allmänt / Annat">Allmänt / Annat</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="p-name">
                        Ditt Namn (eller lämna tomt för att vara anonym)
                      </label>
                      <input
                        id="p-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Fyll i eller lämna tomt för anonymitet"
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="p-email">
                        E-post (om du önskar ett personligt svar från en själavårdare)
                      </label>
                      <input
                        id="p-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="namn@exempel.se (valfritt)"
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="p-content">
                        Hur kan vi be för dig?
                      </label>
                      <textarea
                        id="p-content"
                        required
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Beskriv vad du önskar förbön för..."
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                      />
                    </div>

                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        id="gdpr-consent"
                        type="checkbox"
                        required
                        checked={gdprConsent}
                        onChange={(e) => setGdprConsent(e.target.checked)}
                        className="rounded text-primary focus:ring-primary border-outline-variant h-4 w-4 mt-0.5"
                      />
                      <label htmlFor="gdpr-consent" className="text-body-sm text-on-surface-variant cursor-pointer leading-relaxed">
                        Jag samtycker till att GOSPELS behandlar denna böneförfrågan enligt svensk GDPR Artikel 9 (känsliga personuppgifter med religiös anknytning) under strikt tystnadsplikt.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-on-background hover:bg-slate-800 text-surface font-label-md py-3.5 rounded-xl shadow-md transition disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? "Skickar bön..." : "Skicka böneförfrågan"}</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Confidentiality & FAQ (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-4">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Sekretessgaranti</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-background font-semibold">
                    Hur vi hanterar dina böner
                  </h4>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    • <strong>Ingen offentlig publicering:</strong> Böner publiceras aldrig på nätet, i sociala medier eller i församlingsblad.
                  </p>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    • <strong>Tystnadsplikt:</strong> Endast ordinerade själavårdare och auktoriserade förebedjare har tillgång till ämnena.
                  </p>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    • <strong>Rätt till radering:</strong> Du kan när som helst begära att dina uppgifter och ditt böneämne raderas permanent.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-3">
                  <h4 className="font-headline-sm text-sm font-semibold text-on-background">
                    Behöver du akut samtalsstöd?
                  </h4>
                  <p className="text-xs text-outline leading-relaxed">
                    Om du befinner dig i akut nöd eller kris rekommenderar vi att du kontaktar <strong>Jourhavande Präst</strong> via <strong>112</strong> eller <strong>Mind Självmordslinjen</strong> på <strong>90101</strong>.
                  </p>
                </div>
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

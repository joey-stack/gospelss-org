"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import { Mail, CheckCircle, Sparkles, Send, Bell } from "lucide-react";

export default function NewsletterPage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubscribed(true);
    }, 500);
  };

  return (
    <div className="bg-background text-on-surface antialiased font-body-md text-body-md min-h-screen flex flex-col">
      <Navbar
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
        onOpenPrayer={() => setPrayerOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-surface-container-low border-b border-outline-variant/30 py-3">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-2 text-body-sm text-outline">
            <Link href="/" className="hover:text-primary transition">Hem</Link>
            <span>/</span>
            <span className="text-on-surface font-semibold">Nyhetsbrev</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/30 text-center">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/30 text-primary text-label-sm font-label-sm mb-4">
              <Bell className="w-4 h-4" />
              <span>Håll dig Uppdaterad • Månadsvisa Brev</span>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-background mt-2">
              GOSPELS Nyhetsbrev
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed max-w-2xl mx-auto">
              Få inbjudningar till konserter, nyskrivna sånger, vittnesbörd från stadens gator och böneämnen direkt i din inkorg en gång per månad.
            </p>
          </div>
        </section>

        {/* Subscription Card */}
        <section className="py-16 bg-surface">
          <div className="max-w-xl mx-auto px-6 lg:px-8">
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 shadow-sm">
              {subscribed ? (
                <div className="p-8 text-center space-y-4">
                  <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h3 className="font-headline-md text-headline-md text-on-background">
                    Tack för din prenumeration!
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Vi har registrerat <strong>{email}</strong>. Du kan när som helst avsluta prenumerationen via länken längst ner i varje brev.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="nl-name">
                      Ditt Förnamn
                    </label>
                    <input
                      id="nl-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Maria"
                      className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary transition"
                    />
                  </div>

                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="nl-email">
                      E-postadress
                    </label>
                    <input
                      id="nl-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="maria@exempel.se"
                      className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary transition"
                    />
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold text-on-surface uppercase">Jag är intresserad av:</span>
                    <label className="flex items-center gap-2 text-sm text-on-surface-variant cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary h-4 w-4" />
                      <span>Konserter &amp; Evenemangskalender</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-on-surface-variant cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary h-4 w-4" />
                      <span>Bönerapporter &amp; Vittnesbörd</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-on-surface-variant cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary h-4 w-4" />
                      <span>Körövningar &amp; Volontärbehov</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-4 bg-primary-container text-on-primary hover:bg-secondary font-label-md py-3.5 rounded-xl shadow-md custom-halo transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? "Registrerar..." : "Börja prenumerera gratis"}</span>
                  </button>

                  <p className="text-[11px] text-outline text-center">
                    Vi delar aldrig din e-post med tredje part. Läs vår integritetspolicy.
                  </p>
                </form>
              )}
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

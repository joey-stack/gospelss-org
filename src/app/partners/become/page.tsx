"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import {
  Church,
  ShieldCheck,
  CheckCircle,
  Send,
  ArrowRight,
  Handshake,
} from "lucide-react";

export default function BecomePartnerPage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const [churchName, setChurchName] = useState("");
  const [denomination, setDenomination] = useState("Pingst");
  const [contactPerson, setContactPerson] = useState("");
  const [role, setRole] = useState("Pastor / Föreståndare");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [collaborationType, setCollaborationType] = useState("Kör & Musiker");
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
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
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 flex items-center gap-2 text-body-sm text-outline">
            <Link href="/" className="hover:text-primary transition">Hem</Link>
            <span>/</span>
            <Link href="/partners" className="hover:text-primary transition">Partnerförsamlingar</Link>
            <span>/</span>
            <span className="text-on-surface font-semibold">Bli Partnerförsamling</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/30 text-center">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-4xl mx-auto">
            <span className="text-xs uppercase font-semibold text-primary tracking-wider">
              Ekumenisk Samverkan • Göteborg
            </span>
            <h1 className="font-display-hero text-display-hero text-on-background mt-2">
              Bli Partnerförsamling
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed max-w-2xl mx-auto">
              Vill din församling stå med och förena Göteborg i lovsång och förbön? Vi välkomnar församlingar och kristna gemenskaper från hela Västsverige.
            </p>
          </div>
        </section>

        {/* Form Container */}
        <section className="py-16 bg-surface">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-8 shadow-sm">
              <h3 className="font-headline-md text-headline-md text-on-background">
                Intresseanmälan för Församlingar
              </h3>
              <p className="text-body-sm text-on-surface-variant mt-1">
                Fyll i uppgifterna nedan så kontaktar vår ordförande och pastorala samordnare er för ett personligt möte och samtal.
              </p>

              {submitted ? (
                <div className="mt-8 p-8 rounded-xl bg-primary-container/10 border border-primary-container text-center space-y-4">
                  <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h4 className="font-headline-md text-headline-md text-on-background">
                    Tack för er intresseanmälan!
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Vi har tagit emot intresseanmälan för <strong>{churchName}</strong>. Vårt ledarskap kommer att ta kontakt med {contactPerson} inom kort.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="church-name">
                        Församlingens officiella namn
                      </label>
                      <input
                        id="church-name"
                        type="text"
                        required
                        value={churchName}
                        onChange={(e) => setChurchName(e.target.value)}
                        placeholder="t.ex. Smyrna Göteborg"
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary transition"
                      />
                    </div>

                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="church-denom">
                        Samfundstillhörighet
                      </label>
                      <select
                        id="church-denom"
                        value={denomination}
                        onChange={(e) => setDenomination(e.target.value)}
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary transition"
                      >
                        <option value="Pingst">Pingströrelsen</option>
                        <option value="Equmeniakyrkan">Equmeniakyrkan</option>
                        <option value="Svenska kyrkan">Svenska kyrkan</option>
                        <option value="EFK">Evangeliska Frikyrkan (EFK)</option>
                        <option value="Frälsningsarmén">Frälsningsarmén</option>
                        <option value="Katolska kyrkan">Katolska kyrkan</option>
                        <option value="Fristående">Fristående / Annan</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="contact-person">
                        Kontaktpersonens namn
                      </label>
                      <input
                        id="contact-person"
                        type="text"
                        required
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        placeholder="Pastor / Föreståndare"
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary transition"
                      />
                    </div>

                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="contact-role">
                        Roll i församlingen
                      </label>
                      <input
                        id="contact-role"
                        type="text"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="church-email">
                        E-postadress
                      </label>
                      <input
                        id="church-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="pastor@forsamling.se"
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary transition"
                      />
                    </div>

                    <div>
                      <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="church-phone">
                        Telefonnummer
                      </label>
                      <input
                        id="church-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="031-XXX XX XX"
                        className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="collab-type">
                      Hur önskar ni främst samverka?
                    </label>
                    <select
                      id="collab-type"
                      value={collaborationType}
                      onChange={(e) => setCollaborationType(e.target.value)}
                      className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary transition"
                    >
                      <option value="Kör & Musiker">Skicka sångare till festivalens masskör</option>
                      <option value="Värdkyrka">Upplåta kyrksal för regionala lovsångskvällar</option>
                      <option value="Förbön">Ställa förebedjare till förfogande vid gatukonserter</option>
                      <option value="Givande">Stödja med årlig kollekt eller projektbidrag</option>
                      <option value="Allt ovanstående">Fullvärdigt församlingspartnerskap</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface font-semibold mb-1" htmlFor="church-notes">
                      Hälsning eller kommentar till ledningen (valfritt)
                    </label>
                    <textarea
                      id="church-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Skriv dina tankar här..."
                      className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface text-body-md py-2.5 px-3.5 focus:border-primary transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary-container text-on-primary hover:bg-secondary font-label-md py-3.5 rounded-xl shadow-md custom-halo transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Handshake className="w-4 h-4" />
                    <span>{submitting ? "Skickar..." : "Skicka intresseanmälan"}</span>
                  </button>
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

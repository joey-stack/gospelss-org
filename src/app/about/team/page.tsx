"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import { Users, Mail, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function TeamPage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const teamMembers = [
    {
      name: "Samuel Lindqvist",
      role: "Ordförande & Grundare",
      bio: "Lovsångsledare med 12 års erfarenhet av körverksamhet och gatuevangelisation i Göteborg. Brinner för att förena stadens unga.",
      badge: "Styrelse",
    },
    {
      name: "Elinor Bergström",
      role: "Körledare & Musikalisk Ledare",
      bio: "Musiker och sångpedagog med bakgrund i klassisk gospel och samtida tillbedjan. Leder United Gospel Choir.",
      badge: "Musik",
    },
    {
      name: "David Almqvist",
      role: "Verksamhetsledare & Scenansvarig",
      bio: "Ljudtekniker och projektledare som ansvarar för tillstånd, säkerhet och professionell konsertproduktion på offentliga platser.",
      badge: "Produktion",
    },
    {
      name: "Hanna Nygren",
      role: "Pastoral Samordnare & Böneledare",
      bio: "Pastor med fokus på själavård, ungas psykiska hälsa och GDPR Artikel 9-skyddad förbönshantering.",
      badge: "Själavård",
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

      <main id="main-content" className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-surface-container-low border-b border-outline-variant/30 py-3">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 flex items-center gap-2 text-body-sm text-outline">
            <Link href="/" className="hover:text-primary transition">Hem</Link>
            <span>/</span>
            <Link href="/om-oss" className="hover:text-primary transition">Om oss</Link>
            <span>/</span>
            <span className="text-on-surface font-semibold">Ledarskap &amp; Team</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-20 bg-surface-container-lowest border-b border-outline-variant/30 text-center">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 max-w-4xl mx-auto">
            <span className="text-xs uppercase font-semibold text-primary tracking-wider">
              Ideell Förening • Göteborg
            </span>
            <h1 className="font-display-hero text-display-hero text-on-background mt-2">
              Ledarskap &amp; Medarbetare
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed max-w-2xl mx-auto">
              Människorna som med hängivenhet och tro bär visionen om att sprida lovsång och hopp i Göteborgs offentliga rum.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 bg-surface">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition"
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center font-headline-md font-bold text-xl mb-4 shadow-sm">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>

                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-surface-container text-primary">
                      {member.badge}
                    </span>

                    <h3 className="font-headline-md text-lg font-bold text-on-background mt-2">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-outline mb-3">{member.role}</p>
                    <p className="text-body-sm text-on-surface-variant leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-outline-variant/30 flex items-center justify-between text-xs text-primary font-semibold">
                    <span>kontakt@gospelss.org</span>
                    <Mail className="w-4 h-4 text-outline" />
                  </div>
                </div>
              ))}
            </div>

            {/* Pastoral Council Strip */}
            <div className="mt-16 p-8 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Pastoralt Råd &amp; Tillsyn</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background">
                Ekumenisk Vägledning och Tillsyn
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Föreningens verksamhet och själavårdande insatser följs av ett pastoralt råd bestående av ordinerade pastorer och präster från samverkande församlingar i Göteborg. Detta garanterar sund teologisk förankring, trygg själavård och transparent ansvarsskyldighet.
              </p>
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

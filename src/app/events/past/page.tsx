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
import {
  Calendar,
  MapPin,
  Users,
  PlayCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Quote,
} from "lucide-react";

export default function PastEventsPage() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  const pastEvents = [
    {
      id: "brunnsparken-2025",
      title: "Hela Staden Prisar: Brunnsparken 2025",
      date: "23 Augusti 2025",
      location: "Brunnsparken, Göteborg",
      attendance: "3 200 besökare",
      summary:
        "Ett historiskt ögonblick när Brunnsparkens torg fylldes av lovsång, gospel och förbön under en sensommarlördag. Över 14 församlingar tjänade tillsammans.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA9jEPafcKtkj9m-ANdOeyM9zaTjsXQoQzy7zQC7NMCk4sFUI2IAIHakGNszPcSJpEpu6vH2h82d0079j1mfBAXE0fSFnVKRbnIgwVGNda0endhWF4lwfKeryAAjtBAEO-Po5p5EEvoAt-hOBLsrh8ZptqP6JqZwg4JENUBnn9U4lyyjb30PoC3l0F38t3OpNXe8QMTYdoacJLdY9o56ADOga5R4MmYIGC9KHh_-J_L9ublJ0C_kyUTqQ",
      mediaLink: "/watch#brunnsparken-2025",
    },
    {
      id: "haga-kyrka-2025",
      title: "Guds Nåd Över Haga: Akustisk Förbönskväll",
      date: "15 Maj 2025",
      location: "Hagakyrkan, Haga",
      attendance: "450 besökare (fullsatt)",
      summary:
        "En stilla kväll med levande ljus, akustisk gitarr och innerlig bön för de mest utsatta i Göteborg. Många unga vittnade om djup andlig frid.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC4Em1w6paLo-x8X6QGOOlARn1KZv62HJzlPPLkzssnuxnv6iCtH_eXttJT4NACC3Q9FYNz9uBsViwuY_k2_5SU7AElKMehCnEEJ9Ka2LaeX3Gi2vyGMOdpMeQY56oZf-cY5uaLRIAnM2gthRbhS4HrZ4njt273JFLeFxZRg5bqXS92L475zJNyaL7ok09KlPpBc0MEV40rWuL0rwHwFInWz3eAsK78svIDDFzeNOVhBTU9P2gDXsfhGw",
      mediaLink: "/watch#haga-2025",
    },
    {
      id: "styrso-sessions-2024",
      title: "Strandens Lovsång: Skärgårdskonsert",
      date: "10 Juli 2024",
      location: "Styrsö Bratten, Göteborgs södra skärgård",
      attendance: "800 besökare",
      summary:
        "Lovsång vid bryggan med havet och horisonten som kuliss. Ett initiativ för att sprida evangeliet till sommarbesökare och boende i skärgården.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJzdjcF2DdQWrosH6IJOhp8hGXKLlw0XszAqdOUSNZjDhxH7bnADZOrYmBZtbQpF_aLnXLePsB7gftfZ1kG8GU8xvFEf7tmdjTOXLQYwnD7Q3bQ64w_OVvB2t9iLzfwyzlO6_XDFF0QAqXRNzdyhZ0e6exS5ZZAOvAx_dO6E2aQ5IA8P2UdUhBthFo1xSsBJscW6OQcfKHy-8v07WGa2svsVgttlHRfH8jnzS4LyU-RT0RGPXM6kLUMQ",
      mediaLink: "/watch#styrso-2024",
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
        {/* Breadcrumb Bar */}
        <div className="bg-surface-container-low border-b border-outline-variant/30 py-3">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-2 text-body-sm text-outline">
            <Link href="/" className="hover:text-primary transition">Hem</Link>
            <span>/</span>
            <Link href="/events" className="hover:text-primary transition">Evenemang</Link>
            <span>/</span>
            <span className="text-on-surface font-semibold">Tidigare samlingar</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-surface-container-lowest border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs uppercase font-semibold text-primary tracking-wider">Arkiv &amp; Vittnesbörd</span>
              <h1 className="font-headline-lg text-headline-lg text-on-background mt-2">
                Tidigare Samlingar i Göteborg
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 leading-relaxed">
                Varje samling har skrivit ett nytt kapitel i berättelsen om vad Gud gör i Västsverige. Här samlar vi inspelningar, foton och minnen från våra tidigare gatu- och kyrkokonserter.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline & Archive Cards */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
            {pastEvents.map((event) => (
              <article
                key={event.id}
                className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 overflow-hidden shadow-sm hover:shadow-lg transition duration-200 grid grid-cols-1 lg:grid-cols-12 items-center"
              >
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-on-background/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-md">
                    {event.date}
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-body-sm text-outline">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.attendance}</span>
                    </div>
                  </div>

                  <h3 className="font-headline-md text-headline-md text-on-background">
                    {event.title}
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {event.summary}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={event.mediaLink}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition"
                    >
                      <PlayCircle className="w-5 h-5" />
                      <span>Se &amp; Lyssna på konsertklipp</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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

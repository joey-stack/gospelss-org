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
import { useLanguage } from "@/context/LanguageContext";
import {
  Play,
  PlayCircle,
  Pause,
  Headphones,
  Music,
  Share2,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Volume2,
} from "lucide-react";

export default function WatchPage() {
  const { t } = useLanguage();
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  // Audio player mock state
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);

  const tracks = [
    {
      id: 1,
      title: t(
        "Hela Staden Prisar (Live i Brunnsparken)",
        "The Whole City Praises (Live in Brunnsparken)"
      ),
      duration: "06:14",
      artist: "Gothenburg United Gospel Choir",
      lyrics: t(
        "Från hamnen till bergen, från gata till torg. Vi sjunger ditt namn, du tar all vår sorg. Hela staden prisar, hela jorden sjunger.",
        "From harbor to hilltops, from avenue to square. We sing your name, you carry all our care. The whole city praises, all creation rejoices."
      ),
    },
    {
      id: 2,
      title: t(
        "Guds Nåd Över Haga (Akustisk Session)",
        "God's Grace Over Haga (Acoustic Session)"
      ),
      duration: "05:42",
      artist: "Gospels Acoustic Trio",
      lyrics: t(
        "Där skuggorna faller i gränderna ner, finns en kärlek som lyfter, en fader som ser. Din nåd är ny varje morgon.",
        "Where shadows descend through the cobblestone lane, a love that redeems and washes our pain. Your mercy is new every dawn."
      ),
    },
    {
      id: 3,
      title: t(
        "Strandens Lovsång (Live på Styrsö)",
        "Coastline Praise (Live at Styrsö)"
      ),
      duration: "04:18",
      artist: "Rhodes Piano & Vokal",
      lyrics: t(
        "Havet brusar mot klippans kant, ditt löfte står fast och evigt sant. Vi böjer knä på västkustens strand.",
        "Waves break against granite in tidal decree, your promise endures eternally free. We bow on the shores of the west coast sea."
      ),
    },
  ];

  const videos = [
    {
      id: "brunnsparken",
      title: t(
        "Hela Staden Prisar: Open Air Live i Centrala Göteborg",
        "The Whole City Praises: Open Air Live in Central Gothenburg"
      ),
      duration: "34:12 Live Master",
      category: t("Hela Konsertsetet", "Full Concert Set"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA9jEPafcKtkj9m-ANdOeyM9zaTjsXQoQzy7zQC7NMCk4sFUI2IAIHakGNszPcSJpEpu6vH2h82d0079j1mfBAXE0fSFnVKRbnIgwVGNda0endhWF4lwfKeryAAjtBAEO-Po5p5EEvoAt-hOBLsrh8ZptqP6JqZwg4JENUBnn9U4lyyjb30PoC3l0F38t3OpNXe8QMTYdoacJLdY9o56ADOga5R4MmYIGC9KHh_-J_L9ublJ0C_kyUTqQ",
      description: t(
        "Över 30 minuter oavbruten lovsång från Brunnsparken med originalarrangemang, kör, blås och tusentals förbipasserande göteborgare.",
        "Over 30 minutes of unceasing praise recorded in Brunnsparken with original arrangements, choir, brass section, and thousands of gathering locals."
      ),
    },
    {
      id: "haga",
      title: t(
        "Guds Nåd Över Haga: Akustisk Session",
        "God's Grace Over Haga: Acoustic Session"
      ),
      duration: "05:42",
      category: t("Akustisk Session", "Acoustic Session"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC4Em1w6paLo-x8X6QGOOlARn1KZv62HJzlPPLkzssnuxnv6iCtH_eXttJT4NACC3Q9FYNz9uBsViwuY_k2_5SU7AElKMehCnEEJ9Ka2LaeX3Gi2vyGMOdpMeQY56oZf-cY5uaLRIAnM2gthRbhS4HrZ4njt273JFLeFxZRg5bqXS92L475zJNyaL7ok09KlPpBc0MEV40rWuL0rwHwFInWz3eAsK78svIDDFzeNOVhBTU9P2gDXsfhGw",
      description: t(
        "Intimt gitarr- och sångarrangemang inspelat i stearinljusskenet i Hagakyrkan.",
        "Intimate guitar and vocal acoustic arrangement captured in candlelight within Hagakyrkan."
      ),
    },
    {
      id: "styrso",
      title: t(
        "Strandens Lovsång: Live på Styrsö",
        "Coastline Praise: Live at Styrsö"
      ),
      duration: "04:18",
      category: t("Skärgårdssessioner", "Archipelago Sessions"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJzdjcF2DdQWrosH6IJOhp8hGXKLlw0XszAqdOUSNZjDhxH7bnADZOrYmBZtbQpF_aLnXLePsB7gftfZ1kG8GU8xvFEf7tmdjTOXLQYwnD7Q3bQ64w_OVvB2t9iLzfwyzlO6_XDFF0QAqXRNzdyhZ0e6exS5ZZAOvAx_dO6E2aQ5IA8P2UdUhBthFo1xSsBJscW6OQcfKHy-8v07WGa2svsVgttlHRfH8jnzS4LyU-RT0RGPXM6kLUMQ",
      description: t(
        "Vokal och Rhodes-piano med utsikt över Kattegatt och Göteborgs skärgård.",
        "Lead vocal and vintage Rhodes electric piano gazing across Kattegat and the Gothenburg Archipelago."
      ),
    },
    {
      id: "outreach",
      title: t(
        "Hoppets Röster: Outreach i Staden",
        "Voices of Hope: City Outreach"
      ),
      duration: "08:50",
      category: t("Dokumentär", "Documentary"),
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXa4YI8sDrJ5LfKLaX-LxHjfASIKO4R9lM4MVdmj28rDgonET3zxqbDkNUo3gPpfuyPaM3GxB5K9AlTLSguO5myHuitsw7koflA4PdmwCsAiqMV-5LjvOGOH7Kn0nDMeUMPzxUVRylD0Ih3z8sc8eIPaOqLyPM0H5jPXidnTZHBaNukO0X8o1EdwLKVm0ImvoB0FpOEjSlJmSQT0LqJhiC6jXV8pkz0droMwDNsTZ8U7Y-oQ9N3NyLcw",
      description: t(
        "Vittnesbörd om förvandlade liv och möten under föreningens gatukaffe- och förbönsteam i staden.",
        "Testimonies of transformed lives and encounters through street coffee hospitality and prayer teams in Gothenburg."
      ),
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9jEPafcKtkj9m-ANdOeyM9zaTjsXQoQzy7zQC7NMCk4sFUI2IAIHakGNszPcSJpEpu6vH2h82d0079j1mfBAXE0fSFnVKRbnIgwVGNda0endhWF4lwfKeryAAjtBAEO-Po5p5EEvoAt-hOBLsrh8ZptqP6JqZwg4JENUBnn9U4lyyjb30PoC3l0F38t3OpNXe8QMTYdoacJLdY9o56ADOga5R4MmYIGC9KHh_-J_L9ublJ0C_kyUTqQ"
              alt="Live concert recording and congregational praise in Gothenburg"
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
                <Music className="w-4 h-4 text-primary-container" />
                <span className="text-label-sm font-label-sm text-primary-fixed tracking-wider uppercase font-semibold">
                  {t("Multimedia & Lovsångsarkiv", "Multimedia & Worship Archive")}
                </span>
              </div>

              {/* Display Hero Headline & Mission Subtitle */}
              <div>
                <h1 className="text-display-hero-mobile sm:text-display-hero font-display-hero text-white tracking-tight leading-tight mb-3">
                  {t("Se & ", "Watch & ")}
                  <span className="text-primary-container font-extrabold">
                    {t("Lyssna", "Listen")}
                  </span>
                </h1>
                <p className="text-body-md sm:text-body-lg font-body-lg text-slate-200 leading-relaxed max-w-2xl">
                  {t(
                    "Ta del av konsertinspelningar, akustiska lovsångssessioner och dokumentära vittnesbörd från Göteborgs torg och kyrkor. Allt material är fritt tillgängligt.",
                    "Experience concert recordings, acoustic worship sessions, and documentary testimonies from Gothenburg's public squares and churches. All content is freely accessible."
                  )}
                </p>
              </div>

              {/* External Streaming Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md inline-flex items-center gap-2 border border-white/15 backdrop-blur-md transition duration-150"
                >
                  <span>{t("Lyssna på Spotify", "Listen on Spotify")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md inline-flex items-center gap-2 border border-white/15 backdrop-blur-md transition duration-150"
                >
                  <span>Apple Music</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-label-md text-label-md inline-flex items-center gap-2 border border-white/15 backdrop-blur-md transition duration-150"
                >
                  <span>{t("YouTube-kanal", "YouTube Channel")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Video Player */}
        <section className="py-16 bg-surface">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div className="bg-on-background text-surface rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-6 lg:p-10">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/60 group">
                <Image
                  src={videos[0].image}
                  alt={videos[0].title}
                  fill
                  sizes="100vw"
                  className="object-cover opacity-90 group-hover:scale-105 transition duration-700"
                />
                <button
                  type="button"
                  aria-label={t("Spela video", "Play video")}
                  onClick={() =>
                    alert(
                      t(
                        "Spelar live-master från Brunnsparken.",
                        "Playing live master recording from Brunnsparken."
                      )
                    )
                  }
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-primary-container hover:border-primary-container transition duration-200 group-hover:scale-110 shadow-2xl"
                >
                  <Play className="w-9 h-9 fill-white translate-x-0.5" />
                </button>
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                  {videos[0].duration}
                </div>
              </div>

              <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase text-primary-fixed font-semibold tracking-wider">
                    {videos[0].category}
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-white mt-1">
                    {videos[0].title}
                  </h2>
                  <p className="font-body-md text-body-md text-surface-variant max-w-3xl mt-2 leading-relaxed">
                    {videos[0].description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSwishOpen(true)}
                    className="px-5 py-3 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-secondary transition"
                  >
                    {t("Stöd produktionen", "Support Production")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audio Tracks & Lyrics Player Section */}
        <section className="py-16 bg-surface-container-low border-y border-outline-variant/30">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div className="max-w-2xl mb-8">
              <span className="text-xs uppercase font-semibold text-primary tracking-wider">
                {t("Ljudspår & Lovsång", "Audio Tracks & Worship")}
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-background mt-1">
                {t("Lyssna & Sjung Med", "Listen & Sing Along")}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                {t(
                  "Klicka på ett spår för att spela upp och läsa texten.",
                  "Click any track to listen and display lyrics."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Tracklist (6 cols) */}
              <div className="lg:col-span-6 space-y-3">
                {tracks.map((track) => (
                  <div
                    key={track.id}
                    onClick={() => setPlayingTrack(track.id)}
                    className={`p-4 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                      playingTrack === track.id
                        ? "bg-primary-container/10 border-primary shadow-xs"
                        : "bg-surface-container-lowest border-outline-variant/40 hover:border-primary"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          playingTrack === track.id
                            ? "bg-primary-container text-on-primary"
                            : "bg-surface-container text-primary"
                        }`}
                      >
                        {playingTrack === track.id ? (
                          <Volume2 className="w-5 h-5 animate-pulse" />
                        ) : (
                          <Play className="w-5 h-5 fill-current" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-sm font-semibold text-on-background">
                          {track.title}
                        </h4>
                        <p className="text-xs text-outline">{track.artist}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-outline">{track.duration}</span>
                  </div>
                ))}
              </div>

              {/* Lyrics Box (6 cols) */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40">
                <span className="text-xs uppercase font-semibold text-primary tracking-wider">
                  {t("Sångtext", "Lyrics")}
                </span>
                <h4 className="font-headline-md text-headline-md text-on-background mt-1">
                  {playingTrack
                    ? tracks.find((t) => t.id === playingTrack)?.title
                    : t("Välj ett spår för att visa sångtext", "Select a track to view lyrics")}
                </h4>
                <blockquote className="mt-4 font-scripture-quote text-scripture-quote italic text-on-surface-variant leading-relaxed p-4 rounded-xl bg-surface-container-low border-l-4 border-primary-container">
                  {playingTrack
                    ? `”${tracks.find((t) => t.id === playingTrack)?.lyrics}”`
                    : t(
                        "”Från hamnen till bergen, från gata till torg. Vi sjunger ditt namn, du tar all vår sorg...”",
                        "“From harbor to hilltops, from avenue to square. We sing your name, you carry all our care...”"
                      )}
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Video Archive Grid */}
        <section className="py-16 bg-surface">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <h3 className="font-headline-lg text-headline-lg text-on-background mb-8">
              {t("Korta Sessioner & Dokumentärer", "Short Sessions & Documentaries")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.slice(1).map((video) => (
                <article
                  key={video.id}
                  className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-video overflow-hidden bg-surface-container">
                      <Image
                        src={video.image}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-white/90 group-hover:scale-110 transition" />
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-0.5 rounded">
                        {video.duration}
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-xs uppercase font-semibold text-primary">
                        {video.category}
                      </span>
                      <h4 className="font-headline-md text-base font-bold text-on-background mt-1 line-clamp-1">
                        {video.title}
                      </h4>
                      <p className="text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        alert(
                          t(
                            `Spelar ${video.title}`,
                            `Playing ${video.title}`
                          )
                        )
                      }
                      className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
                    >
                      <span>{t("Spela video", "Play video")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
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

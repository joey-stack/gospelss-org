"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Play, ArrowRight, Music2, Sparkles, Volume2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function WatchListenPreview() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Typography & Playlist info (Reunion style) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700/80 text-brand-400 text-xs font-semibold uppercase tracking-[0.2em] font-inter">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("LIVE INSPELNINGAR", "LIVE RECORDINGS")}</span>
            </div>

            {/* Exact H2: "Watch Worship Moments" */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-hanken text-white tracking-tight leading-[1.05]">
              {t("Watch Worship Moments", "Watch Worship Moments")}
            </h2>

            {/* Exact Subtext: "Experience the presence of God through our latest gatherings." */}
            <p className="text-lg md:text-xl text-grey-300 font-inter font-normal leading-relaxed">
              {t(
                "Upplev Guds närvaro genom våra senaste samlingar i Göteborg.",
                "Experience the presence of God through our latest gatherings."
              )}
            </p>

            {/* Track highlights list */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-brand-500/40 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                    <Music2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-hanken text-white">Helig Ande Fyll Vår Stad</h4>
                    <p className="text-xs text-grey-400 font-inter">Live från Smyrna Frihamnen · 09:24</p>
                  </div>
                </div>
                <Volume2 className="w-4 h-4 text-brand-400" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-slate-700/60 text-grey-400 flex items-center justify-center shrink-0">
                    <Music2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-hanken text-white">Välsignelsen (Göteborgs Kår)</h4>
                    <p className="text-xs text-grey-400 font-inter">Ekumenisk Kör · 07:15</p>
                  </div>
                </div>
                <span className="text-xs text-grey-400 font-mono">07:15</span>
              </div>
            </div>

            {/* Exact CTA: "Watch More" (Secondary button, white outline) */}
            <div className="pt-2">
              <Link
                href="/watch"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white bg-transparent border-2 border-white/80 hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-sm gap-2.5 group"
              >
                <span>{t("Watch More", "Watch More")}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Immersion Video Showcase with Hover Play Button */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black aspect-video flex items-center justify-center">
              {/* Thumbnail Image */}
              <Image
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80"
                alt="Watch Worship Moments"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40 group-hover:opacity-75 transition-opacity" />

              {/* Floating Meta Pills */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10 font-inter">
                  4K Ultra HD
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-semibold uppercase tracking-wider font-inter">
                  {t("Officiell Video", "Official Premiere")}
                </span>
              </div>

              {/* Central Smooth Hover Play Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative z-10 w-20 h-20 rounded-full bg-brand-500 hover:bg-brand-400 text-white flex items-center justify-center shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 focus:outline-none focus:ring-4 focus:ring-brand-500/40"
                aria-label="Play recording"
              >
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </button>

              {/* Bottom Caption Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white text-sm font-inter">
                <div>
                  <p className="font-semibold">{t("Lovsångsnatt Göteborg 2025", "Gothenburg Worship Night 2025")}</p>
                  <p className="text-xs text-grey-400">Inspelad live med 800+ deltagare</p>
                </div>
                <Link
                  href="/watch"
                  className="text-xs font-semibold text-brand-400 hover:text-white transition-colors"
                >
                  {t("Se fler", "View more")} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WatchListenPreview;

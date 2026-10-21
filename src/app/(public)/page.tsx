import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeaturedEventsSection } from "@/components/home/FeaturedEventsSection";
import { MissionStrip } from "@/components/home/MissionStrip";
import { WatchListenPreview } from "@/components/home/WatchListenPreview";
import { NextEventDetails } from "@/components/home/NextEventDetails";
import { SocialProof } from "@/components/home/SocialProof";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <div className="w-full bg-slate-900 min-h-screen">
      {/* 1. Cinematic Hero Section (100vh, Full-bleed, Zero floating cards) */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* 1.1 Cinematic Background Image */}
        <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center"></div>

        {/* 1.2 Dark Directional Gradient Overlay for Optimal Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/30"></div>

        {/* 1.3 Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
          <div className="max-w-4xl">
            {/* Metadata Overline */}
            <div className="flex items-center gap-4 text-brand-400 font-semibold tracking-[0.2em] uppercase text-sm mb-8 font-inter">
              <span>Gothenburg, SE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
              <span>May 15, 2026</span>
            </div>

            {/* Massive Editorial H1 (Reunion Style) */}
            <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] font-bold text-white font-hanken leading-[0.95] tracking-tighter mb-8">
              Bring Worship <br className="hidden md:block" />
              to the Streets.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-2xl text-grey-200 font-inter max-w-2xl mb-12 leading-relaxed">
              Gospel concerts and worship gatherings that bring hope, faith, and transformation.
            </p>

            {/* Reunion Pill CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                href="/events/holy-spirit-worship"
                className="bg-brand-500 hover:bg-brand-400 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-brand-500/25"
              >
                RSVP for Next Event
              </Link>
              <Link
                href="/watch"
                className="text-white font-semibold text-lg flex items-center gap-2 hover:text-brand-400 transition-colors bg-white/10 backdrop-blur-sm py-4 px-8 rounded-full border border-white/20"
              >
                <span>Watch the Vision</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Upcoming Gatherings Section */}
      <FeaturedEventsSection />

      {/* 3. Core Foundation & Mission Strip */}
      <MissionStrip />

      {/* 4. Watch & Listen Immersion Preview */}
      <WatchListenPreview />

      {/* 5. Next Event Deep Dive & What to Expect */}
      <NextEventDetails />

      {/* 6. Community Testimonies & Voices */}
      <SocialProof />

      {/* 7. Newsletter & Engagement */}
      <NewsletterSection />
    </div>
  );
}

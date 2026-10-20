"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Church, Sparkles, ArrowUpRight } from "lucide-react";

interface HeroSectionProps {
  onOpenRSVP: () => void;
  onOpenSwish: () => void;
  onOpenPrayer?: () => void;
}

export function HeroSection({ onOpenRSVP, onOpenSwish, onOpenPrayer }: HeroSectionProps) {
  return (
    <section className="relative bg-on-background text-surface overflow-hidden min-h-[640px] flex items-center">
      {/* Atmospheric Background Image with Nordic Deep Twilight Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsmAGYb6RK-ffekW0k1ug8sZl-dZP_PUsGhKVnebisdEiUNGWRhT1zZrF0Ya4MQM0mMCKtA9Nanp_ziaQD8NyRcd4fWMM7IvWu3_5KMD79lSKCbtEtg8a0JoVsrud5t0AUG6sRezGiXfcWzFJOZJbaoePdRI8oE_RyOX16UHinSXgCWW0_uVL8xPNGcpD-wDTPOycpoyfCdfCVFa_9Aosbtr9vr-25sEWg2YZ5idLWVKmfvDaarfNTvQ"
          alt="Outdoor gospel worship concert in Gothenburg Sweden at twilight"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-luminosity filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-background via-on-background/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text & Intent */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest/20 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="text-label-sm font-label-sm tracking-wide text-primary-fixed uppercase">
                Gothenburg Music Ministry • Est. 2021
              </span>
            </div>

            <h1 className="font-display-hero text-display-hero tracking-tight text-white leading-tight">
              Bring Worship to the{" "}
              <span className="text-primary-fixed underline decoration-primary-container/40 underline-offset-8">
                Streets
              </span>{" "}
              of Gothenburg
            </h1>

            <p className="font-body-lg text-body-lg text-surface-variant/90 max-w-xl leading-relaxed">
              Creating moments of worship that impact generations across West Sweden. Uniting local
              congregations in vibrant outdoor praise, spiritual encounter, and compassionate civic renewal.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#events"
                className="inline-flex items-center gap-2 bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md px-6 py-3.5 rounded-lg shadow-md custom-halo transition duration-150 active:scale-95"
              >
                <span>Explore Events</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#partners"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-surface border border-white/30 font-label-md text-label-md px-6 py-3.5 rounded-lg backdrop-blur-sm transition duration-150 active:scale-95"
              >
                <Church className="w-4 h-4" />
                <span>Partner Churches</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="font-headline-lg text-headline-lg font-bold text-white">42+</p>
                <p className="text-label-sm font-label-sm text-surface-variant">Congregations</p>
              </div>
              <div>
                <p className="font-headline-lg text-headline-lg font-bold text-primary-fixed">15,000</p>
                <p className="text-label-sm font-label-sm text-surface-variant">Annual Attendees</p>
              </div>
              <div>
                <p className="font-headline-lg text-headline-lg font-bold text-white">100%</p>
                <p className="text-label-sm font-label-sm text-surface-variant">Non-Profit &amp; Free</p>
              </div>
            </div>
          </div>

          {/* Hero Feature Spotlight Card (Floating Page 1/Page 2 Accent) */}
          <div className="lg:col-span-5">
            <div className="bg-surface-container-lowest/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 lg:p-7 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary-container" />
                  <span className="text-label-sm font-label-sm tracking-wider uppercase text-primary-fixed">
                    Featured Gathering
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-label-sm font-label-sm">
                  Free Admission
                </span>
              </div>

              {/* Card Thumbnail Banner */}
              <div className="mt-5 rounded-xl overflow-hidden aspect-[16/9] relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP0MME-ZWQuFzCbalUpQBYJjv0lBYOMe7oQZL1EhtEHNFncqrpVn1H2O3yY4NNw_JE4KHjSXEWphMj2IWc3-YyLEI6M0kR3DwJAiQO0OFrRiCbDQuUHZkBoik8Ro-RGNqgNHqKBDPTkPeyDN47L-m9pDrvdp_lovUmqGgWJh3tq0RcwSvmlnU3kcjGnw8zhPdZVQtOLHILmaplpl4YIyUIw23OR8duA2GH67eWXyiYLImbXav2BF8WmA"
                  alt="Holy Spirit Worship 2026 Concert Gathering"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="mt-5">
                <span className="text-label-sm font-label-sm text-primary-fixed uppercase tracking-wider font-semibold">
                  Saturday • Oct 18, 2026 • 18:00
                </span>
                <h3 className="font-headline-md text-headline-md text-white mt-1">
                  Holy Spirit Worship 2026
                </h3>
                <p className="text-body-sm font-body-sm text-surface-variant mt-2 line-clamp-2">
                  An intimate night of deep acoustic intercession, united gospel chorals, and prophetic
                  praise welcoming worshipers from across West Sweden.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex -space-x-2">
                    <span className="inline-block w-7 h-7 rounded-full bg-surface-container-high border-2 border-slate-900 text-[10px] flex items-center justify-center font-bold text-on-surface">
                      JD
                    </span>
                    <span className="inline-block w-7 h-7 rounded-full bg-primary-container border-2 border-slate-900 text-[10px] flex items-center justify-center font-bold text-white">
                      KL
                    </span>
                    <span className="inline-block w-7 h-7 rounded-full bg-surface-variant border-2 border-slate-900 text-[10px] flex items-center justify-center font-bold text-on-surface">
                      +
                    </span>
                  </span>
                  <span className="text-label-sm font-label-sm text-surface-variant">340 RSVP'd</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenRSVP}
                  className="inline-flex items-center gap-1.5 bg-primary-container text-on-primary hover:bg-secondary font-label-sm text-label-sm px-4 py-2 rounded-lg transition duration-150"
                >
                  <span>RSVP Free</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

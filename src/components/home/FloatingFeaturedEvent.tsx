"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function FloatingFeaturedEvent() {
  const { t } = useLanguage();

  return (
    <div className="relative -mt-20 md:-mt-24 z-20 max-w-5xl mx-auto px-4 sm:px-6">
      {/* On hover, card lifts by 4px and shadow deepens */}
      <div className="bg-white rounded-md shadow-md border border-grey-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Visual Side */}
          <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-[340px] bg-slate-900 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&auto=format&fit=crop&q=80"
              alt="Holy Spirit Worship 2026"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />

            {/* Floating Date Badge */}
            <div className="absolute top-4 left-4 z-10">
              <Badge variant="brand" shape="md" className="shadow-lg font-bold">
                {t("15 MAJ 2026", "MAY 15, 2026")}
              </Badge>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-overline text-brand-50 bg-black/40 px-2.5 py-1 rounded-sm backdrop-blur-sm">
                GOSPELS 2026
              </span>
            </div>
          </div>

          {/* Details & RSVP Side */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              {/* Exact Meta: "📍 Gothenburg · 📅 May 15, 2026" */}
              <div className="text-body-sm text-grey-600 mb-3 font-medium flex items-center gap-2">
                <span>📍 {t("Gothenburg", "Gothenburg")}</span>
                <span className="text-grey-300">·</span>
                <span>📅 {t("May 15, 2026", "May 15, 2026")}</span>
              </div>

              {/* Exact Title: "Holy Spirit Worship 2026" */}
              <h2 className="h3 text-grey-900 mb-3 hover:text-brand-600 transition-colors">
                <Link href="/events/holy-spirit-worship">
                  Holy Spirit Worship 2026
                </Link>
              </h2>

              <p className="body text-grey-600 line-clamp-2 mb-6 font-normal">
                {t(
                  "En kväll dedikerad till oavbruten lovsång, bön och tillbedjan över vår stad. Tillsammans med lovsångsledare från hela Västsverige.",
                  "An evening dedicated to unhurried worship, prayer, and intercession over our city with worship teams from across Western Sweden."
                )}
              </p>
            </div>

            {/* Bottom Meta & Exact CTA: "RSVP Today" */}
            <div className="pt-4 border-t border-grey-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-body-sm text-grey-600">
                <span className="font-medium text-grey-900">420+ {t("anmälda", "registered")}</span>
                <span className="text-grey-400"> ({t("fri entré", "free admission")})</span>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  href="/events/holy-spirit-worship"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  {t("RSVP Today", "RSVP Today")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatingFeaturedEvent;

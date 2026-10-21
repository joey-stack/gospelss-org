"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowRight } from "lucide-react";

export interface EventCardProps {
  title: string;
  dateBadge: string; // e.g. "18 MAJ" or "18 MAY 2026"
  venue: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  href: string;
  ctaText?: string;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  dateBadge,
  venue,
  description,
  imageSrc,
  imageAlt,
  href,
  ctaText = "RSVP Gratis",
  className,
}) => {
  return (
    <article
      className={cn(
        "group bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-700/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-slate-600 flex flex-col justify-between text-white",
        className
      )}
    >
      <div>
        {/* Image Container with Floating Date Badge */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 pointer-events-none" />

          {/* Floating Date Badge (absolute top-4 left-4) */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center bg-brand-500 text-white font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
              {dateBadge}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8">
          {/* Venue & Location */}
          <div className="flex items-center gap-2 text-sm text-grey-300 font-inter mb-3">
            <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
            <span className="line-clamp-1">{venue}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold font-hanken text-white group-hover:text-brand-400 transition-colors duration-200 mb-3 tracking-tight">
            <Link href={href} className="focus:outline-none">
              {title}
            </Link>
          </h3>

          {/* Description */}
          {description && (
            <p className="text-sm md:text-base text-grey-300 font-inter line-clamp-2 leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Action Row */}
      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-slate-700/40 flex items-center justify-between">
        <Link
          href={href}
          className="text-sm font-semibold text-grey-300 hover:text-white inline-flex items-center gap-1.5 transition-colors group/link"
        >
          <span>Läs mer</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>

        <Button href={href} variant="primary" size="sm">
          {ctaText}
        </Button>
      </div>
    </article>
  );
};

export default EventCard;

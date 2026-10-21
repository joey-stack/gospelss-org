"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Lock,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminPrayerPage() {
  const [filter, setFilter] = useState<"all" | "urgent" | "standard">("all");
  const [handledIds, setHandledIds] = useState<number[]>([]);

  const mockPrayers = [
    {
      id: 1,
      name: "Anonym (Kvinna, 24 år)",
      date: "2026-10-19 21:15",
      urgency: 3,
      urgencyLabel: "Akut Kris (Själavård prioriterad)",
      topic: "Ångest & Ensamhet",
      content:
        "Känner djup ensamhet och hopplöshet inför framtiden efter att ha flyttat till Göteborg. Behöver förstå att Gud ser mig.",
      confidential: true,
    },
    {
      id: 2,
      name: "Lars",
      date: "2026-10-18 14:30",
      urgency: 2,
      urgencyLabel: "Pastoral Omsorg",
      topic: "Hälsa & Helande",
      content:
        "Min mamma genomgår strålbehandling på Sahlgrenska. Be för styrka till familjen och ett mirakel.",
      confidential: true,
    },
    {
      id: 3,
      name: "Johan & Sara",
      date: "2026-10-17 09:40",
      urgency: 1,
      urgencyLabel: "Standard Förbön",
      topic: "Familj & Relationer",
      content: "Tackar för helande i vårt äktenskap och ber om vägledning för våra barns skolgång.",
      confidential: true,
    },
  ];

  const filteredPrayers = mockPrayers.filter((p) => {
    if (filter === "urgent") return p.urgency >= 2;
    if (filter === "standard") return p.urgency === 1;
    return true;
  });

  const toggleHandled = (id: number) => {
    if (handledIds.includes(id)) {
      setHandledIds(handledIds.filter((x) => x !== id));
    } else {
      setHandledIds([...handledIds, id]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Title & Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-sans tracking-tight">
              Konfidentiella Böneärenden
            </h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
              <Lock className="w-3.5 h-3.5 text-teal-600" />
              <span>GDPR Art 9 Skyddad</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-mono">
            Pastoral triage och förbönshantering med behörighetsbegränsad åtkomst
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
              filter === "all"
                ? "bg-stone-900 text-white"
                : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-50"
            }`}
          >
            Alla ({mockPrayers.length})
          </button>
          <button
            onClick={() => setFilter("urgent")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
              filter === "urgent"
                ? "bg-red-600 text-white"
                : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-50"
            }`}
          >
            Akut & Omsorg (2)
          </button>
          <button
            onClick={() => setFilter("standard")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
              filter === "standard"
                ? "bg-teal-600 text-white"
                : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-50"
            }`}
          >
            Standard (1)
          </button>
        </div>
      </div>

      {/* GDPR Article 9 Compliance Notice Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/80 border border-teal-200 text-teal-900 text-xs flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold">Pastoral Tystnadsplikt och IMY-efterlevnad:</span>
          <p className="leading-relaxed text-teal-800">
            Dessa uppgifter utgör särskild kategori av personuppgifter enligt GDPR Artikel 9. De får endast hanteras av
            auktoriserade själavårdare och förbönsteam. All data raderas automatiskt efter avslutad böneperiod.
          </p>
        </div>
      </div>

      {/* Prayer Cards Grid */}
      <div className="space-y-4">
        {filteredPrayers.map((prayer) => {
          const isHandled = handledIds.includes(prayer.id);

          return (
            <div
              key={prayer.id}
              className={`p-6 rounded-3xl border transition bg-white shadow-xs ${
                isHandled
                  ? "border-stone-200 opacity-60"
                  : prayer.urgency >= 3
                  ? "border-red-200 ring-2 ring-red-500/10"
                  : "border-stone-200"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                      prayer.urgency >= 3
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : prayer.urgency === 2
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-teal-50 text-teal-700 border border-teal-200"
                    }`}
                  >
                    {prayer.urgencyLabel}
                  </span>
                  <span className="text-sm font-bold text-stone-900">
                    {prayer.topic}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-stone-400 font-mono">
                  <span>{prayer.date}</span>
                  <button
                    onClick={() => toggleHandled(prayer.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                      isHandled
                        ? "bg-stone-100 text-stone-600"
                        : "bg-teal-50 text-teal-700 hover:bg-teal-100"
                    }`}
                  >
                    {isHandled ? "✓ Bedd för" : "Markera som bedd"}
                  </button>
                </div>
              </div>

              <blockquote className="scripture text-stone-800 text-sm font-serif italic bg-stone-50 p-4 rounded-xl border border-stone-100 leading-relaxed">
                »{prayer.content}«
              </blockquote>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
                <span>Avsändare: {prayer.name}</span>
                <span className="text-teal-600 font-medium">Sekretess: Strikt konfidentiell</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

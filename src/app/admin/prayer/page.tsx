"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Lock,
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter,
} from "lucide-react";

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
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-body-md text-body-md">
      {/* Admin Top Navigation */}
      <header className="bg-surface-container-lowest border-b border-outline-variant/40 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="p-2 rounded-lg hover:bg-surface-container text-on-surface-variant transition"
              title="Tillbaka till Dashboard"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              <span className="font-headline-sm font-bold text-on-background">
                Pastoral Böneinkorg (GDPR Art. 9)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-outline px-3 py-1 rounded-full bg-surface-container">
              Strikt tystnadsplikt
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 w-full flex-1 space-y-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-background">
              Konfidentiella Böneförfrågningar
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Hanteras endast av utsedda själavårdare och auktoriserade förebedjare.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2">
            {[
              { id: "all", label: "Alla" },
              { id: "urgent", label: "Prioriterade" },
              { id: "standard", label: "Standard" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  filter === tab.id
                    ? "bg-primary-container text-on-primary shadow-xs"
                    : "border border-outline-variant text-on-surface hover:bg-surface-container"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Prayer List */}
        <div className="space-y-4">
          {filteredPrayers.map((prayer) => {
            const isHandled = handledIds.includes(prayer.id);

            return (
              <div
                key={prayer.id}
                className={`p-6 rounded-2xl border transition space-y-4 ${
                  isHandled
                    ? "bg-surface-container-low/60 border-outline-variant/30 opacity-70"
                    : prayer.urgency === 3
                    ? "bg-surface-container-lowest border-amber-400 shadow-md ring-2 ring-amber-400/20"
                    : "bg-surface-container-lowest border-outline-variant/50 shadow-sm"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-on-background">{prayer.name}</span>
                    <span className="text-xs text-outline">• {prayer.date}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-container font-medium text-on-surface">
                      {prayer.topic}
                    </span>
                  </div>

                  <div>
                    {prayer.urgency === 3 ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Akut prioritet</span>
                      </span>
                    ) : prayer.urgency === 2 ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
                        <span>Pastoral omsorg</span>
                      </span>
                    ) : (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold">
                        Standard
                      </span>
                    )}
                  </div>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  ”{prayer.content}”
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-outline-variant/30 text-xs">
                  <div className="flex items-center gap-1.5 text-outline">
                    <Lock className="w-3.5 h-3.5 text-primary" />
                    <span>Skyddad under GDPR Artikel 9</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleHandled(prayer.id)}
                    className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition ${
                      isHandled
                        ? "bg-emerald-100 text-emerald-800"
                        : "border border-outline-variant hover:border-primary text-on-surface"
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{isHandled ? "Bedd för (Klar)" : "Markera som bedd för"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

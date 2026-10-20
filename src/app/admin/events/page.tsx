"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Users,
  ArrowLeft,
  RefreshCw,
  Search,
  CheckCircle,
  Plus,
  Pin,
  Clock,
} from "lucide-react";

export default function AdminEventsPage() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/events");
      const data = await res.json();
      if (data.events) setEvents(data.events);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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
            <span className="font-headline-sm font-bold text-on-background">
              Evenemangsöversikt &amp; Deltagarlistor
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              disabled={loading}
              className="px-3.5 py-1.5 rounded-lg border border-outline-variant hover:bg-surface-container text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Uppdatera</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 w-full flex-1 space-y-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-background">
              Hantera Evenemang
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Realtidsstatistik över fribokningar, lokalkapacitet och deltagarlistor.
            </p>
          </div>

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-outline absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filtrera evenemang..."
              className="w-full rounded-xl border border-outline-variant/60 bg-surface-container-lowest text-on-surface text-body-sm pl-10 pr-4 py-2 focus:border-primary transition"
            />
          </div>
        </div>

        {/* Events Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((ev) => (
            <div
              key={ev.id}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-6 space-y-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-primary tracking-wider">{ev.category}</span>
                  <h3 className="font-headline-md text-xl font-bold text-on-background mt-1">{ev.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-outline mt-1">
                    <Pin className="w-3.5 h-3.5" />
                    <span>{ev.location}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  Aktiv
                </span>
              </div>

              {/* Progress and Numbers */}
              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-outline">Bokade platser:</span>
                  <span className="font-bold text-on-background">{ev.reservedAttendees} / {ev.capacity}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                  <div
                    className="h-full bg-primary-container rounded-full"
                    style={{ width: `${Math.min(100, (ev.reservedAttendees / ev.capacity) * 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-outline pt-1">
                  <span>Platser kvar: {ev.remainingSeats}</span>
                  <span>Mättnad: {Math.round((ev.reservedAttendees / ev.capacity) * 100)}%</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  href={`/events/${ev.id === "holy-spirit-worship-2026" ? "holy-spirit-worship" : "goteborgs-lovsangskonsert"}`}
                  className="text-primary hover:underline text-xs font-semibold"
                >
                  Visa publik sida
                </Link>
                <button
                  type="button"
                  onClick={() => alert(`Laddar ner deltagarlista för ${ev.title} som CSV...`)}
                  className="px-3.5 py-1.5 rounded-lg bg-on-background text-surface text-xs font-semibold hover:bg-slate-800 transition"
                >
                  Exportera deltagarlista (CSV)
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

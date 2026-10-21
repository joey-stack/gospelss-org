"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Users,
  RefreshCw,
  Search,
  CheckCircle,
  Plus,
  Clock,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface EventItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  venue: string;
  capacity: number;
  rsvps?: any[];
  _count?: { rsvps: number };
}

export default function AdminEventsPage() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/events");
      const data = await res.json();
      if (data.events) setEvents(data.events);
    } catch (err) {
      console.error("Failed to load events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredEvents = events.filter((ev) =>
    ev.title.toLowerCase().includes(search.toLowerCase()) ||
    ev.venue.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Title & Actions Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-sans tracking-tight">
            Evenemangsöversikt & Platskapacitet
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 font-mono">
            Hantera publicerade samlingar, platstilldelning och deltagarlistor
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 shadow-xs transition disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Uppdatera</span>
          </button>
          <Button asChild variant="brand" size="sm">
            <Link href="/admin/events/new">
              <Plus className="w-4 h-4 mr-1.5" />
              <span>Skapa Nytt Evenemang</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Sök evenemang eller lokal..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-900 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
        />
      </div>

      {/* Events Table / Cards */}
      <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs">
        {loading ? (
          <div className="py-16 text-center text-stone-500 text-sm">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-teal-600" />
            <span>Hämtar samlingar från databasen...</span>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="py-16 text-center text-stone-500 text-sm">
            Inga evenemang hittades.
          </div>
        ) : (
          <div className="divide-y divide-stone-200">
            {filteredEvents.map((ev) => {
              const booked = ev._count?.rsvps || ev.rsvps?.length || 0;
              const saturation = Math.min(100, Math.round((booked / ev.capacity) * 100));

              return (
                <div key={ev.id} className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-stone-50/50 transition">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-teal-50 text-teal-800 border border-teal-200">
                        Aktiv
                      </span>
                      <h2 className="text-lg font-bold text-stone-900 font-sans">
                        {ev.title}
                      </h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 font-mono">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-teal-600" />
                        {new Date(ev.date).toLocaleDateString("sv-SE", { dateStyle: "medium" })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-teal-600" />
                        {ev.venue}
                      </span>
                    </div>
                  </div>

                  {/* Capacity Bar & Links */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="w-48 space-y-1.5">
                      <div className="flex justify-between text-xs font-mono font-medium text-stone-600">
                        <span>{booked} bokade</span>
                        <span>{ev.capacity} max</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                        <div
                          className="h-full bg-teal-600 rounded-full transition-all duration-300"
                          style={{ width: `${saturation}%` }}
                        />
                      </div>
                      <div className="text-[11px] font-mono text-stone-400 text-right">
                        {saturation}% mättnad
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button asChild variant="secondary" size="sm">
                        <Link href={`/events/${ev.slug}`} target="_blank">
                          <ExternalLink className="w-3.5 h-3.5 mr-1 text-stone-500" />
                          <span>Publik Sida</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

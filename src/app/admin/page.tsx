"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Calendar,
  Heart,
  Shield,
  Sparkles,
  RefreshCw,
  Lock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { HuggingFaceIcon } from "@/components/icons/HuggingFaceIcon";
import { Button } from "@/components/ui/Button";

interface AdminStats {
  flagshipEvent: {
    title: string;
    capacity: number;
    reservedAttendees: number;
    totalBookings: number;
    capacitySaturationPercent: number;
    projectedPhysicalAttendance: {
      min: number;
      max: number;
    };
  };
  kingdomPartners: {
    totalPartners: number;
    monthlyRevenueSEK: number;
    averagePledgeSEK: number;
  };
  volunteers: {
    totalVolunteers: number;
    byRole: {
      hospitality: number;
      tech: number;
      media: number;
      prayer: number;
      stage: number;
    };
    under18Count: number;
  };
  aiBriefing: string;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/sidekick");
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (err) {
      console.error("Failed to load admin stats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="space-y-8">
      {/* Title & Actions Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-sans tracking-tight">
              Ledningsöversikt & Operationell Beredskap
            </h1>
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold"
              title="AI Sidekick är aktiv med Gemini Flash och Hugging Face protocol"
            >
              <HuggingFaceIcon size={14} color="#0D9488" />
              <span>AI Sidekick Aktiv</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-mono">
            Gospels Ideell Förening (Org.nr: 802557-4883) · Göteborgs Lovsångsmission
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchStats}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 shadow-xs transition disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Uppdatera</span>
          </button>
          <Button asChild variant="brand" size="sm">
            <Link href="/admin/events/new">
              + Skapa Evenemang
            </Link>
          </Button>
        </div>
      </div>

      {/* AI Sidekick Executive Briefing Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-teal-900 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2.5 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider">
            <HuggingFaceIcon size={16} color="#5EEAD4" />
            <span>AI Sidekick Executive Briefing (Gemini Flash)</span>
          </div>
          <p className="text-base sm:text-lg text-teal-50 font-light leading-relaxed">
            {stats?.aiBriefing ||
              "Laddar intelligent operationell analys över kapacitetsmättnad, volontärberedskap och givarutveckling..."}
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs text-teal-200 font-mono">
            <span>Modell: Gemini 2.5 Flash</span>
            <span>•</span>
            <span>GDPR Art 9 Skydd: Aktiv</span>
            <span>•</span>
            <span>Fall-off Heuristik: 25–35%</span>
          </div>
        </div>
      </div>

      {/* Key Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric 1: Event Capacity */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-stone-500 text-xs font-mono uppercase font-semibold">
            <span>Kapacitetsmättnad</span>
            <Calendar className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-3xl font-extrabold text-stone-900 font-sans">
            {stats ? `${stats.flagshipEvent.capacitySaturationPercent}%` : "—"}
          </div>
          <div className="text-xs text-stone-500">
            {stats
              ? `${stats.flagshipEvent.reservedAttendees} / ${stats.flagshipEvent.capacity} bokade platser`
              : "Beräknar platser..."}
          </div>
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-teal-700 font-medium">
            <span>Faktisk närvaro (est.):</span>
            <span className="font-bold">
              {stats
                ? `${stats.flagshipEvent.projectedPhysicalAttendance.min}–${stats.flagshipEvent.projectedPhysicalAttendance.max}`
                : "—"}
            </span>
          </div>
        </div>

        {/* Metric 2: Kingdom Partners */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-stone-500 text-xs font-mono uppercase font-semibold">
            <span>Kingdom Partners</span>
            <TrendingUp className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-3xl font-extrabold text-stone-900 font-sans">
            {stats ? `${stats.kingdomPartners.totalPartners}` : "—"}
          </div>
          <div className="text-xs text-stone-500">
            {stats
              ? `${stats.kingdomPartners.monthlyRevenueSEK.toLocaleString()} SEK / månad (MRR)`
              : "Laddar givare..."}
          </div>
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600">
            <span>Snittgåva:</span>
            <span className="font-bold">
              {stats ? `${stats.kingdomPartners.averagePledgeSEK} SEK` : "—"}
            </span>
          </div>
        </div>

        {/* Metric 3: Volunteers */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-stone-500 text-xs font-mono uppercase font-semibold">
            <span>Volontärstyrka</span>
            <Users className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-3xl font-extrabold text-stone-900 font-sans">
            {stats ? `${stats.volunteers.totalVolunteers}` : "—"}
          </div>
          <div className="text-xs text-stone-500">
            {stats
              ? `${stats.volunteers.byRole.hospitality} värdar · ${stats.volunteers.byRole.tech} teknik · ${stats.volunteers.byRole.prayer} bön`
              : "Laddar volontärer..."}
          </div>
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-amber-700 font-medium">
            <span>Ungdomsskydd (&lt;18):</span>
            <span className="font-bold">
              {stats ? `${stats.volunteers.under18Count} målsmansintyg` : "—"}
            </span>
          </div>
        </div>

        {/* Metric 4: Prayer Triage */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between text-stone-500 text-xs font-mono uppercase font-semibold">
            <span>Konfidentiell Bön</span>
            <Lock className="w-4 h-4 text-teal-600" />
          </div>
          <div className="text-3xl font-extrabold text-stone-900 font-sans">
            100%
          </div>
          <div className="text-xs text-stone-500">
            GDPR Artikel 9 sekretess tillämpad på alla inkomna ärenden
          </div>
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-teal-700 font-medium">
            <span>Akut själavård:</span>
            <span className="font-bold">0 olösta larm</span>
          </div>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        <Link
          href="/admin/events"
          className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-teal-500 hover:shadow-xs transition flex items-center justify-between"
        >
          <div>
            <div className="text-sm font-bold text-stone-900">Hantera Samlingar</div>
            <div className="text-xs text-stone-500">Kapacitet, schema & deltagare</div>
          </div>
          <ArrowRight className="w-4 h-4 text-teal-600" />
        </Link>

        <Link
          href="/admin/events/new"
          className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-teal-500 hover:shadow-xs transition flex items-center justify-between"
        >
          <div>
            <div className="text-sm font-bold text-stone-900">Skapa Ny Samling</div>
            <div className="text-xs text-stone-500">Publicera konsert eller möte</div>
          </div>
          <ArrowRight className="w-4 h-4 text-teal-600" />
        </Link>

        <Link
          href="/admin/prayer"
          className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-teal-500 hover:shadow-xs transition flex items-center justify-between"
        >
          <div>
            <div className="text-sm font-bold text-stone-900">Böneärenden (GDPR)</div>
            <div className="text-xs text-stone-500">Pastoral sekretess & triage</div>
          </div>
          <ArrowRight className="w-4 h-4 text-teal-600" />
        </Link>

        <Link
          href="/admin/volunteers"
          className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-teal-500 hover:shadow-xs transition flex items-center justify-between"
        >
          <div>
            <div className="text-sm font-bold text-stone-900">Volontärregister</div>
            <div className="text-xs text-stone-500">Teamfördelning & målsmansintyg</div>
          </div>
          <ArrowRight className="w-4 h-4 text-teal-600" />
        </Link>
      </div>
    </div>
  );
}

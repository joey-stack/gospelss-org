"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Calendar,
  Heart,
  Shield,
  Sparkles,
  ArrowLeft,
  RefreshCw,
  Lock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { HuggingFaceIcon } from "@/components/icons/HuggingFaceIcon";

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
  const [activeTab, setActiveTab] = useState<"forecast" | "prayer" | "partners" | "volunteers">("forecast");

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
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-canvas)", display: "flex", flexDirection: "column" }}>
      {/* Top Header */}
      <header
        style={{
          backgroundColor: "var(--bg-card)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Image src="/assets/brand/logo-full.svg" alt="GOSPELS" width={130} height={28} />
          </Link>
          <span
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 700,
              backgroundColor: "var(--color-warm-grey-200)",
              color: "var(--color-charcoal-800)",
              padding: "0.25rem 0.625rem",
              borderRadius: "var(--radius-sm)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Admin Portal
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Hugging Face AI Sidekick Badge (Enforcing Section 10 of AGENTS.md) */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--color-turquoise-50)",
              border: "1px solid var(--color-turquoise-200)",
              padding: "0.375rem 0.875rem",
              borderRadius: "var(--radius-pill)",
              fontSize: "var(--text-xs)",
              fontWeight: 700,
              color: "var(--color-turquoise-800)",
            }}
            title="AI Sidekick är aktiv med Gemini Flash och Hugging Face protocol"
          >
            <HuggingFaceIcon size={16} color="var(--color-turquoise-600)" />
            <span>AI Sidekick Aktiv</span>
          </div>

          <Link
            href="/"
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-charcoal-600)",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.375rem 0.75rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <ArrowLeft size={14} />
            <span>Till Sajten</span>
          </Link>
        </div>
      </header>

      {/* Main Body */}
      <main style={{ flex: 1, padding: "2.5rem 2rem", maxWidth: "1240px", margin: "0 auto", width: "100%" }}>
        {/* Title Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 800, color: "var(--color-charcoal-900)", marginBottom: "0.25rem" }}>
              Ledningsöversikt & Operationell Beredskap
            </h1>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-600)" }}>
              Gospels (Org.nr: 802557-4883) · Göteborgs Lovsångsmission
            </p>
          </div>

          <button
            onClick={fetchStats}
            disabled={loading}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-default)",
              padding: "0.625rem 1.25rem",
              borderRadius: "var(--radius-pill)",
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-charcoal-800)",
              cursor: "pointer",
            }}
          >
            <RefreshCw size={14} style={{ animation: loading ? "spin 1s linear infinite" : "none" }} />
            <span>Uppdatera Siffror</span>
          </button>
        </div>

        {/* KPI Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Card 1: Projected Attendance */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: "var(--radius-xl)",
              padding: "1.75rem",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-subtle)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-charcoal-500)", textTransform: "uppercase" }}>
                Projekterat Fysiskt Deltagande
              </span>
              <Calendar size={18} color="var(--color-turquoise-600)" />
            </div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-charcoal-900)", marginBottom: "0.5rem" }}>
              {stats ? `${stats.flagshipEvent.projectedPhysicalAttendance.min}–${stats.flagshipEvent.projectedPhysicalAttendance.max}` : "160–190"}
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--color-charcoal-500)", marginLeft: "0.5rem" }}>
                pers
              </span>
            </div>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-600)" }}>
              Baserat på {stats ? stats.flagshipEvent.reservedAttendees : 0} reserverade platser (30% drop-off modell)
            </span>
          </div>

          {/* Card 2: Kingdom Partner MRR */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: "var(--radius-xl)",
              padding: "1.75rem",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-subtle)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-charcoal-500)", textTransform: "uppercase" }}>
                Månatligt Givarstöd (MRR)
              </span>
              <Heart size={18} color="var(--color-turquoise-600)" />
            </div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-charcoal-900)", marginBottom: "0.5rem" }}>
              {stats ? stats.kingdomPartners.monthlyRevenueSEK.toLocaleString("sv-SE") : "7 200"}
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--color-charcoal-500)", marginLeft: "0.5rem" }}>
                kr/mån
              </span>
            </div>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--color-turquoise-700)", fontWeight: 600 }}>
              {stats ? stats.kingdomPartners.totalPartners : 48} aktiva Kingdom Partners
            </span>
          </div>

          {/* Card 3: Volontärteam */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: "var(--radius-xl)",
              padding: "1.75rem",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-subtle)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-charcoal-500)", textTransform: "uppercase" }}>
                Volontärberedskap
              </span>
              <Users size={18} color="var(--color-turquoise-600)" />
            </div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-charcoal-900)", marginBottom: "0.5rem" }}>
              {stats ? stats.volunteers.totalVolunteers : 0}
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--color-charcoal-500)", marginLeft: "0.5rem" }}>
                anmälda
              </span>
            </div>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-600)" }}>
              {stats ? `${stats.volunteers.under18Count} st med ungdomsintyg (<18)` : "Redo för schemaläggning"}
            </span>
          </div>
        </div>

        {/* AI Sidekick Executive Briefing Box */}
        <div
          style={{
            backgroundColor: "var(--color-warm-grey-100)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
            marginBottom: "2.5rem",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
            <HuggingFaceIcon size={22} color="var(--color-turquoise-600)" />
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-charcoal-900)" }}>
              AI Sidekick · Lägesanalys & Beslutsstöd
            </h3>
          </div>

          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--color-charcoal-800)",
              lineHeight: 1.7,
              whiteSpace: "pre-line",
            }}
          >
            {stats ? stats.aiBriefing : "Laddar operationell briefing från Gemini Flash..."}
          </p>
        </div>

        {/* Management Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "0.75rem" }}>
          {[
            { id: "forecast", label: "Kapacitetsmodell" },
            { id: "prayer", label: "GDPR Art. 9 Böneöversikt" },
            { id: "partners", label: "Kingdom Partners" },
            { id: "volunteers", label: "Volontärroster" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius-pill)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                backgroundColor: activeTab === tab.id ? "var(--color-turquoise-600)" : "transparent",
                color: activeTab === tab.id ? "var(--color-white)" : "var(--color-charcoal-700)",
                cursor: "pointer",
                transition: "all var(--transition-fast)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Kapacitetsmodell */}
        {activeTab === "forecast" && (
          <div style={{ backgroundColor: "var(--bg-card)", padding: "2rem", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)" }}>
            <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "1rem" }}>
              Holy Spirit Worship 2026 — Lokalbeläggning
            </h4>
            <div style={{ width: "100%", height: "12px", backgroundColor: "var(--color-warm-grey-200)", borderRadius: "var(--radius-pill)", overflow: "hidden", marginBottom: "1rem" }}>
              <div
                style={{
                  width: `${Math.min(stats ? stats.flagshipEvent.capacitySaturationPercent : 45, 100)}%`,
                  height: "100%",
                  backgroundColor: "var(--color-turquoise-500)",
                  borderRadius: "var(--radius-pill)",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-xs)", color: "var(--color-charcoal-600)" }}>
              <span>Reserverat: {stats ? stats.flagshipEvent.reservedAttendees : 0} platser</span>
              <span>Lokalens Maxgräns: {stats ? stats.flagshipEvent.capacity : 250} st</span>
            </div>
          </div>
        )}

        {/* Tab 2: GDPR Art 9 Böneöversikt */}
        {activeTab === "prayer" && (
          <div style={{ backgroundColor: "var(--bg-card)", padding: "2rem", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Lock size={18} color="var(--color-turquoise-600)" />
              <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700 }}>
                Sekretess & Triage (GDPR Artikel 9)
              </h4>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              I enlighet med svensk dataskyddslagstiftning och IMY:s riktlinjer för religiösa samfund
              exponeras inga känsliga personuppgifter offentligt. Endast ordinerade pastorer och
              auktoriserade förböneledare har behörighet att läsa detaljerade böneämnen.
            </p>
            <div style={{ backgroundColor: "var(--color-warm-grey-50)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", fontSize: "var(--text-xs)", color: "var(--color-charcoal-600)" }}>
              ✓ Alla böneämnen klassificeras automatiskt i brådskandegrad 1–3 av Gemini Flash.<br />
              ✓ Akuta kriser flaggas omedelbart till jourhavande själavårdare.
            </div>
          </div>
        )}

        {/* Tab 3: Kingdom Partners */}
        {activeTab === "partners" && (
          <div style={{ backgroundColor: "var(--bg-card)", padding: "2rem", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)" }}>
            <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "1rem" }}>
              Kingdom Partner Månadsflöde
            </h4>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)", marginBottom: "1.5rem" }}>
              {stats ? stats.kingdomPartners.totalPartners : 48} aktiva månadsgivare finansierar
              verksamheten med en snittgåva på {stats ? stats.kingdomPartners.averagePledgeSEK : 150} kr/mån.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ backgroundColor: "var(--color-warm-grey-50)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)" }}>Swish-månadsgivare</span>
                <div style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>24 st</div>
              </div>
              <div style={{ backgroundColor: "var(--color-warm-grey-50)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)" }}>Stripe-kortbetalare</span>
                <div style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>24 st</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Volontärroster */}
        {activeTab === "volunteers" && (
          <div style={{ backgroundColor: "var(--bg-card)", padding: "2rem", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)" }}>
            <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "1rem" }}>
              Teamfördelning & Ungdomsskydd
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
              <div style={{ backgroundColor: "var(--color-warm-grey-50)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)" }}>Värdskap</span>
                <div style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>{stats ? stats.volunteers.byRole.hospitality : 0} pers</div>
              </div>
              <div style={{ backgroundColor: "var(--color-warm-grey-50)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)" }}>Ljud & Ljus</span>
                <div style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>{stats ? stats.volunteers.byRole.tech : 0} pers</div>
              </div>
              <div style={{ backgroundColor: "var(--color-warm-grey-50)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)" }}>Media</span>
                <div style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>{stats ? stats.volunteers.byRole.media : 0} pers</div>
              </div>
              <div style={{ backgroundColor: "var(--color-warm-grey-50)", padding: "1rem", borderRadius: "var(--radius-md)" }}>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)" }}>Förbön</span>
                <div style={{ fontSize: "var(--text-lg)", fontWeight: 700 }}>{stats ? stats.volunteers.byRole.prayer : 0} pers</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

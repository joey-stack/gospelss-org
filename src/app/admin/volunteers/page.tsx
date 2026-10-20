"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  ArrowLeft,
  ShieldCheck,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  AlertCircle,
} from "lucide-react";

export default function AdminVolunteersPage() {
  const [filterTrack, setFilterTrack] = useState<string>("all");

  const volunteers = [
    {
      id: 1,
      name: "Karin Lind",
      age: 22,
      email: "karin@exempel.se",
      phone: "070-123 45 67",
      team: "Värdskap & Välkomnande",
      status: "Aktiv",
      isMinor: false,
    },
    {
      id: 2,
      name: "Filip Söderlund",
      age: 17,
      email: "filip@exempel.se",
      phone: "072-987 65 43",
      team: "Ljud, Ljus & Scen",
      status: "Målsmans samtycke verifierat",
      isMinor: true,
      parentName: "Helena Söderlund",
      parentPhone: "070-555 44 33",
    },
    {
      id: 3,
      name: "Sara Ek",
      age: 28,
      email: "sara@exempel.se",
      phone: "073-456 78 90",
      team: "Förbön & Omsorg",
      status: "Aktiv",
      isMinor: false,
    },
    {
      id: 4,
      name: "Elias Holm",
      age: 16,
      email: "elias@exempel.se",
      phone: "076-111 22 33",
      team: "Sång & Kör",
      status: "Målsmans samtycke verifierat",
      isMinor: true,
      parentName: "Marcus Holm",
      parentPhone: "070-888 99 00",
    },
  ];

  const filteredVolunteers = volunteers.filter(
    (v) => filterTrack === "all" || v.team === filterTrack
  );

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-body-md text-body-md">
      {/* Admin Top Navigation */}
      <header className="bg-surface-container-lowest border-b border-outline-variant/40 sticky top-0 z-40">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="p-2 rounded-lg hover:bg-surface-container text-on-surface-variant transition"
              title="Tillbaka till Dashboard"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="font-headline-sm font-bold text-on-background">
                Volontärregister &amp; Ungdomstillsyn
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-10 flex-1 space-y-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-background">
              Volontärteam i Göteborg
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Teamfördelning, kontaktuppgifter och verifiering av målsmansgodkännande för minderåriga.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            {["all", "Värdskap & Välkomnande", "Ljud, Ljus & Scen", "Förbön & Omsorg", "Sång & Kör"].map((tr) => (
              <button
                key={tr}
                type="button"
                onClick={() => setFilterTrack(tr)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  filterTrack === tr
                    ? "bg-primary-container text-on-primary shadow-xs"
                    : "border border-outline-variant text-on-surface hover:bg-surface-container"
                }`}
              >
                {tr === "all" ? "Alla team" : tr}
              </button>
            ))}
          </div>
        </div>

        {/* Volunteers Table Card */}
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-container-low text-xs uppercase text-outline border-b border-outline-variant/30">
                <tr>
                  <th className="py-3.5 px-6">Namn &amp; Ålder</th>
                  <th className="py-3.5 px-6">Teamspår</th>
                  <th className="py-3.5 px-6">Kontakt</th>
                  <th className="py-3.5 px-6">Trygghetsstatus (&lt;18)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {filteredVolunteers.map((vol) => (
                  <tr key={vol.id} className="hover:bg-surface-container-low/40 transition">
                    <td className="py-4 px-6">
                      <div className="font-bold text-on-background">{vol.name}</div>
                      <div className="text-xs text-outline">{vol.age} år</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary">
                        {vol.team}
                      </span>
                    </td>
                    <td className="py-4 px-6 space-y-0.5 text-xs">
                      <div className="flex items-center gap-1.5 text-on-surface">
                        <Mail className="w-3.5 h-3.5 text-outline" />
                        <span>{vol.email}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-outline">
                        <Phone className="w-3.5 h-3.5 text-outline" />
                        <span>{vol.phone}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {vol.isMinor ? (
                        <div className="space-y-1">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Målsman godkänd</span>
                          </span>
                          <p className="text-[11px] text-outline">
                            Målsman: {vol.parentName} ({vol.parentPhone})
                          </p>
                        </div>
                      ) : (
                        <span className="text-xs text-outline">Myndig (18+)</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

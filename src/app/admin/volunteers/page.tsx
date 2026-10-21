"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  AlertCircle,
  Filter,
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
    <div className="space-y-8">
      {/* Title & Filter Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-sans tracking-tight">
              Volontärregister & Ungdomsskydd
            </h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Gate 4 Verifierad</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-mono">
            Kvalitetssäkrat register med obligatoriskt målsmansintyg för volontärer under 18 år
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { id: "all", label: "Alla Team" },
            { id: "Värdskap & Välkomnande", label: "Värdskap" },
            { id: "Ljud, Ljus & Scen", label: "Ljud/Scen" },
            { id: "Förbön & Omsorg", label: "Förbön" },
            { id: "Sång & Kör", label: "Kör" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterTrack(item.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                filterTrack === item.id
                  ? "bg-teal-600 text-white"
                  : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Volunteer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVolunteers.map((vol) => (
          <div
            key={vol.id}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-stone-100 text-stone-800 border border-stone-200">
                  {vol.team}
                </span>
                {vol.isMinor ? (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>Målsman Intygad (&lt;18)</span>
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-teal-50 text-teal-800 border border-teal-200">
                    Myndig ({vol.age} år)
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-bold text-stone-900 font-sans">
                  {vol.name}
                </h3>
                <p className="text-xs text-stone-500 font-mono">Ålder: {vol.age} år</p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-stone-100 text-xs font-mono text-stone-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-stone-400" />
                  <a href={`mailto:${vol.email}`} className="hover:text-teal-600 transition">
                    {vol.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-stone-400" />
                  <a href={`tel:${vol.phone}`} className="hover:text-teal-600 transition">
                    {vol.phone}
                  </a>
                </div>
              </div>

              {/* Minor Guardian Details */}
              {vol.isMinor && (
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <span className="font-bold block">Målsman för ungdom:</span>
                  <div>{vol.parentName} · Tel: {vol.parentPhone}</div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1.5 text-teal-700 font-medium">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                <span>{vol.status}</span>
              </span>
              <a
                href={`mailto:${vol.email}?subject=GOSPELS%20Volont%C3%A4r`}
                className="text-stone-700 hover:text-teal-600 font-semibold"
              >
                Kontakta →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

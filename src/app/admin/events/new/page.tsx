"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Users2,
  Save,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AdminCreateEventPage() {
  const { t } = useLanguage();

  // Form State
  const [title, setTitle] = useState("");
  const [eventType, setEventType] = useState("worship_night");
  const [date, setDate] = useState("2026-05-18");
  const [startTime, setStartTime] = useState("18:30");
  const [endTime, setEndTime] = useState("21:30");
  const [venue, setVenue] = useState("");
  const [address, setAddress] = useState("");
  const [capacity, setCapacity] = useState("600");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState(
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&auto=format&fit=crop&q=80"
  );

  // Toggles (Required: [RSVP Enabled] [Swish Button] [Prayer Team])
  const [rsvpEnabled, setRsvpEnabled] = useState(true);
  const [swishEnabled, setSwishEnabled] = useState(true);
  const [prayerTeamEnabled, setPrayerTeamEnabled] = useState(true);

  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSavedSuccess(false);

    // Simulate backend persistence
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSaving(false);
    setSavedSuccess(true);
  };

  return (
    <div className="min-h-screen bg-grey-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation & Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-grey-600 hover:text-brand-600 mb-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("Tillbaka till Admin", "Back to Admin Dashboard")}</span>
            </Link>
            <div className="flex items-center gap-3">
              <h1 className="h2 text-grey-900 tracking-tight">
                {t("Skapa Nytt Evenemang", "Create New Event")}
              </h1>
              <Badge variant="brand" shape="sm">
                ADMIN
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/events"
              target="_blank"
              className="text-body-sm font-medium text-grey-600 hover:text-grey-900 px-3 py-2 rounded-md hover:bg-grey-200 transition-colors"
            >
              {t("Förhandsgranska", "Preview Public Feed")}
            </Link>
            <Button
              onClick={handleSave}
              variant="primary"
              size="md"
              isLoading={isSaving}
              icon={<Save className="w-4 h-4" />}
            >
              {t("Publicera Samling", "Publish Event")}
            </Button>
          </div>
        </div>

        {/* Success Alert */}
        {savedSuccess && (
          <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-md flex items-center gap-3 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <p className="font-semibold text-body-sm">
                {t("Evenemanget har skapats och publicerats!", "Event successfully created and published!")}
              </p>
              <p className="text-xs text-emerald-700">
                {t("RSVP-flödet och schema-metadata är nu aktivt.", "RSVP flow and Schema.org metadata are active.")}
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-8">
          {/* Section 1: Grunduppgifter (Title & Type) */}
          <div className="bg-white rounded-md p-6 sm:p-8 border border-grey-200 shadow-sm space-y-6">
            <div className="border-b border-grey-100 pb-4">
              <h2 className="h4 text-grey-900 font-semibold">
                {t("1. Grundinformation", "1. Basic Details")}
              </h2>
              <p className="text-body-sm text-grey-600">
                {t(
                  "Namn, typ av samling och målgrupp.",
                  "Title, event category, and pastoral context."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Input
                  label={t("Evenemangstitel", "Event Title")}
                  placeholder="t.ex. Holy Spirit Worship Night · Smyrna"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-body-sm text-grey-600 font-medium mb-1.5 block select-none">
                  {t("Typ av Samling", "Event Type")}
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-white border border-grey-200 rounded-md p-3 text-body text-grey-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="worship_night">Lovsångskväll (Worship Night)</option>
                  <option value="open_air">Utomhuskonsert (Open Air Concert)</option>
                  <option value="youth_rally">Ungdomsmöte (Youth Rally)</option>
                  <option value="prayer_summit">Bönekonferens (Prayer Summit)</option>
                </select>
              </div>

              <div>
                <Input
                  type="number"
                  label={t("Max Kapacitet (platser)", "Maximum Venue Capacity")}
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  helperText={t("För Luma drop-off beräkning (25-40%)", "Used for capacity modeling")}
                />
              </div>

              <div className="md:col-span-2">
                <Textarea
                  label={t("Beskrivning", "Description")}
                  placeholder="Beskriv syftet med samlingen, medverkande musiker och vad besökaren kan förvänta sig..."
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Datum & Plats (Date, Time, Venue) */}
          <div className="bg-white rounded-md p-6 sm:p-8 border border-grey-200 shadow-sm space-y-6">
            <div className="border-b border-grey-100 pb-4">
              <h2 className="h4 text-grey-900 font-semibold">
                {t("2. Tid & Plats", "2. Date & Venue")}
              </h2>
              <p className="text-body-sm text-grey-600">
                {t("Ange exakt lokal och hålltider för besökare.", "Specify physical venue and start/end schedules.")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Input
                  type="date"
                  label={t("Datum", "Date")}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="time"
                  label={t("Starttid", "Start Time")}
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="time"
                  label={t("Sluttid", "End Time")}
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <Input
                  label={t("Lokal / Kyrka", "Venue Name")}
                  placeholder="t.ex. Smyrna Kyrkan, Stora Salen"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  label={t("Gatuadress & Stad", "Street Address & City")}
                  placeholder="Frihamnen 12, Göteborg"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 3: Feature Toggles ([RSVP Enabled] [Swish Button] [Prayer Team]) */}
          <div className="bg-white rounded-md p-6 sm:p-8 border border-grey-200 shadow-sm space-y-6">
            <div className="border-b border-grey-100 pb-4">
              <h2 className="h4 text-grey-900 font-semibold">
                {t("3. Funktioner & Tjänster (Toggles)", "3. Operational Features (Toggles)")}
              </h2>
              <p className="text-body-sm text-grey-600">
                {t(
                  "Aktivera eller stäng av nyckelfunktioner för evenemangssidan.",
                  "Enable or disable key capabilities on the public registration page."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Toggle 1: RSVP Enabled */}
              <div
                onClick={() => setRsvpEnabled(!rsvpEnabled)}
                className={`p-5 rounded-md border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  rsvpEnabled
                    ? "bg-brand-50/50 border-brand-500 shadow-sm"
                    : "bg-grey-50 border-grey-200 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-md bg-brand-50 text-brand-600 flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="checkbox"
                    checked={rsvpEnabled}
                    onChange={(e) => setRsvpEnabled(e.target.checked)}
                    className="w-4 h-4 text-brand-600 rounded focus:ring-brand-500"
                  />
                </div>
                <div>
                  <h4 className="text-body font-bold text-grey-900 mb-1">
                    RSVP Enabled
                  </h4>
                  <p className="text-xs text-grey-600">
                    {t(
                      "Aktiverar Luma-inspirerat gratis anmälningsformulär med bekräftelse.",
                      "Activates frictionless registration flow."
                    )}
                  </p>
                </div>
              </div>

              {/* Toggle 2: Swish Button */}
              <div
                onClick={() => setSwishEnabled(!swishEnabled)}
                className={`p-5 rounded-md border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  swishEnabled
                    ? "bg-brand-50/50 border-brand-500 shadow-sm"
                    : "bg-grey-50 border-grey-200 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-md bg-brand-50 text-brand-600 flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <input
                    type="checkbox"
                    checked={swishEnabled}
                    onChange={(e) => setSwishEnabled(e.target.checked)}
                    className="w-4 h-4 text-brand-600 rounded focus:ring-brand-500"
                  />
                </div>
                <div>
                  <h4 className="text-body font-bold text-grey-900 mb-1">
                    Swish Button
                  </h4>
                  <p className="text-xs text-grey-600">
                    {t(
                      "Visar Swish-nummer (802557-4883) för frivillig kollekt och gåvor.",
                      "Displays Swish QR/number for donations."
                    )}
                  </p>
                </div>
              </div>

              {/* Toggle 3: Prayer Team */}
              <div
                onClick={() => setPrayerTeamEnabled(!prayerTeamEnabled)}
                className={`p-5 rounded-md border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  prayerTeamEnabled
                    ? "bg-brand-50/50 border-brand-500 shadow-sm"
                    : "bg-grey-50 border-grey-200 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-md bg-brand-50 text-brand-600 flex items-center justify-center">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <input
                    type="checkbox"
                    checked={prayerTeamEnabled}
                    onChange={(e) => setPrayerTeamEnabled(e.target.checked)}
                    className="w-4 h-4 text-brand-600 rounded focus:ring-brand-500"
                  />
                </div>
                <div>
                  <h4 className="text-body font-bold text-grey-900 mb-1">
                    Prayer Team
                  </h4>
                  <p className="text-xs text-grey-600">
                    {t(
                      "Aktiverar förbönsteam och GDPR Artikel 9 konfidentiell bönehantering.",
                      "Deploys intercessory team and GDPR prayer routing."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Bild & Media */}
          <div className="bg-white rounded-md p-6 sm:p-8 border border-grey-200 shadow-sm space-y-6">
            <div className="border-b border-grey-100 pb-4">
              <h2 className="h4 text-grey-900 font-semibold">
                {t("4. Omslagsbild & Grafik", "4. Cover Media & Graphics")}
              </h2>
              <p className="text-body-sm text-grey-600">
                {t("Bild som visas i hero och EventCard.", "Image used in the hero and EventCard thumbnail.")}
              </p>
            </div>

            <Input
              label={t("Bildadress (URL)", "Image URL")}
              value={imageSrc}
              onChange={(e) => setImageSrc(e.target.value)}
              helperText={t("Stödjer Unsplash eller lokala assets.", "Supports Unsplash or local assets.")}
            />
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <Link
              href="/admin"
              className="px-5 py-2.5 rounded-md border border-grey-200 text-body-sm font-semibold text-grey-700 hover:bg-grey-100 transition-colors"
            >
              {t("Avbryt", "Cancel")}
            </Link>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSaving}
              icon={<Save className="w-4 h-4" />}
            >
              {t("Spara & Publicera Evenemang", "Save & Publish Event")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

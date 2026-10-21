"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Calendar, MapPin, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function RSVPForm() {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) {
      setError(t("Vänligen ange ditt namn.", "Please enter your full name."));
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError(t("Vänligen ange en giltig e-postadress.", "Please enter a valid email address."));
      return;
    }

    setIsLoading(true);
    // Simulate frictionless server action
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
    } catch {
      setError(t("Något gick fel. Försök igen.", "Something went wrong. Please try again."));
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-xl mx-auto bg-white rounded-md shadow-md border border-grey-200 p-8 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <Badge variant="brand" shape="full" className="mb-3">
          {t("PLATS BEKRÄFTAD", "RESERVATION CONFIRMED")}
        </Badge>
        <h3 className="h3 text-grey-900 mb-2 font-bold">
          {t("Välkommen till Holy Spirit Worship!", "Welcome to Holy Spirit Worship!")}
        </h3>
        <p className="body text-grey-600 mb-6 max-w-md mx-auto">
          {t(
            `Tack, ${fullName}! En bekräftelse har skickats till ${email}. Inga biljetter behöver skrivas ut — uppge ditt namn i entrén.`,
            `Thank you, ${fullName}! A confirmation has been sent to ${email}. No printing required — simply state your name at the door.`
          )}
        </p>

        {/* Quick Affirmative Actions */}
        <div className="bg-grey-50 rounded-md p-4 border border-grey-200 text-left mb-6 space-y-2 text-body-sm text-grey-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-brand-600" />
            <span className="font-semibold">Måndag 18 Maj 2026 · 18:30 (Dörrar 18:00)</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-600" />
            <span>Smyrna Kyrkan, Frihamnen, Göteborg</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-md border border-grey-200 text-body-sm font-semibold text-grey-700 hover:bg-grey-100 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-brand-600" />
            <span>{t("Lägg till i Kalender", "Add to Calendar")}</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFullName("");
              setEmail("");
            }}
            className="text-body-sm text-brand-600 hover:text-brand-700 underline font-medium py-2 px-3"
          >
            {t("Registrera ytterligare en person", "Register another guest")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-md shadow-md border border-grey-200 p-8 transition-all duration-300">
      <div className="text-center mb-6">
        <Badge variant="brand" shape="md" className="mb-2">
          {t("FRI ENTRÉ · BEGRÄNSAT ANTAL", "FREE ADMISSION · LIMITED CAPACITY")}
        </Badge>
        <h3 className="h3 text-grey-900 mb-2 font-bold">
          {t("Säkra Din Gratisplats", "RSVP for Free")}
        </h3>
        <p className="body-sm text-grey-600">
          {t(
            "Fyll i dina uppgifter nedan för att registrera dig på gästlistan. Tar 10 sekunder.",
            "Complete your details below to join the guestlist. Takes 10 seconds."
          )}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-error rounded-md text-body-sm font-medium">
            {error}
          </div>
        )}

        <Input
          label={t("Fullständigt Namn", "Full Name")}
          placeholder={t("t.ex. Maria Andersson", "e.g. Maria Andersson")}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          autoComplete="name"
        />

        <Input
          type="email"
          label={t("E-postadress", "Email Address")}
          placeholder={t("namn@exempel.se", "name@example.com")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          helperText={t(
            "Vi skickar endast din bekräftelse och praktisk ankomstinformation.",
            "We only send your confirmation and arrival details."
          )}
        />

        {/* Single Primary CTA */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full font-bold shadow-md hover:shadow-brand-500/25 py-3.5"
          isLoading={isLoading}
        >
          {t("Slutför RSVP", "Complete RSVP")}
        </Button>

        {/* Micro footer guarantee */}
        <div className="flex items-center justify-center gap-2 pt-2 text-xs text-grey-400">
          <Heart className="w-3.5 h-3.5 text-brand-600" />
          <span>
            {t(
              "GOSPELS är en ideell förening (802557-4883) · GDPR Skyddad",
              "GOSPELS is a registered non-profit (802557-4883) · GDPR Protected"
            )}
          </span>
        </div>
      </form>
    </div>
  );
}

export default RSVPForm;

"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function NewsletterSection() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Strict email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError(t("Please enter a valid email.", "Please enter a valid email."));
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setIsSuccess(true);
    } catch {
      setError(t("Something went wrong. Please try again.", "Something went wrong. Please try again."));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-24 md:py-32 bg-slate-900 border-b border-slate-800 text-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Exact H2: "Stay Connected" */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-hanken text-white mb-4 tracking-tight">
            {t("Stay Connected", "Stay Connected")}
          </h2>

          {/* Exact Subtext: "Get updates on events, testimonies, and prayer focus. No spam." */}
          <p className="text-lg md:text-xl text-grey-300 font-inter mb-10 font-normal leading-relaxed">
            {t(
              "Få uppdateringar om samlingar, vittnesbörd och böneämnen. Ingen spam.",
              "Get updates on events, testimonies, and prayer focus. No spam."
            )}
          </p>

          {/* Conditional Rendering: Success State replaces form */}
          {isSuccess ? (
            <div className="p-8 bg-slate-800/80 rounded-2xl border border-brand-500/40 text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="text-2xl font-bold font-hanken text-white mb-2">
                {t("Tack! Kontrollera din inkorg för att bekräfta.", "Thank you! Check your inbox to confirm.")}
              </p>
              <p className="text-sm text-grey-300 font-inter mt-1">
                {t(
                  "Ett bekräftelsemail har skickats till din e-post.",
                  "A confirmation email has been dispatched to your address."
                )}
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setEmail("");
                }}
                className="mt-6 text-xs font-semibold text-brand-400 hover:text-brand-300 underline"
              >
                {t("Prenumerera med en annan adress", "Subscribe with another address")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3">
                <div className="flex-1 text-left">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder={t("Enter your email address", "Enter your email address")}
                      aria-label="Email address"
                      aria-invalid={error ? "true" : "false"}
                      aria-describedby={error ? "newsletter-error" : undefined}
                      className={`w-full bg-slate-800/90 rounded-full py-4 px-6 text-base font-inter text-white placeholder:text-grey-400 transition-all duration-200 focus:outline-none ${
                        error
                          ? "border-2 border-error text-error focus:ring-2 focus:ring-error"
                          : "border border-slate-700 focus:ring-2 focus:ring-brand-500"
                      }`}
                    />
                  </div>
                  {/* Exact Error State: Red border on input with specific text */}
                  {error && (
                    <p id="newsletter-error" className="text-sm text-error mt-2 font-medium pl-4" role="alert">
                      {error}
                    </p>
                  )}
                </div>

                {/* Exact Button: "Subscribe" */}
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isLoading}
                  className="px-8 py-4 text-base font-semibold shrink-0"
                >
                  {t("Subscribe", "Subscribe")}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-1.5 pt-2 text-xs text-grey-400 font-inter">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                <span>
                  {t(
                    "GOSPELS är en ideell förening (802557-4883) · GDPR Skyddad",
                    "GOSPELS is a registered non-profit (802557-4883) · GDPR Protected"
                  )}
                </span>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

export default NewsletterSection;

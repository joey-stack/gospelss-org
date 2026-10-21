"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PathwaySteps() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t("Besök en samling", "Visit on a Sunday"),
      desc: t(
        "Sitt var du vill och gå när du behöver. Ingen ber dig ställa dig upp eller presentera dig.",
        "Sit anywhere and slip out whenever you need. Nobody will ask you to stand up or say hello."
      ),
      linkText: t("Se samlingar", "Explore gatherings"),
      href: "/events",
    },
    {
      num: "02",
      title: t("Hitta en husgrupp", "Join a home group"),
      desc: t(
        "Små grupper i Göteborgs olika stadsdelar där vi äter tillsammans, samtalar och ber.",
        "Neighborhood groups across Gothenburg sharing dinner, honest conversations, and prayer."
      ),
      linkText: t("Hitta en grupp", "Find a group"),
      href: "/get-involved",
    },
    {
      num: "03",
      title: t("Tjäna i ett team", "Serve somewhere"),
      desc: t(
        "Häll kaffe, sköt ljudmixen, sjung i kören, bygg scenen eller be i förbönsteamet.",
        "Pour coffee, run the audio desk, sing in the choir, or pray with our pastoral team."
      ),
      linkText: t("Se volontärteam", "See volunteer teams"),
      href: "/volunteer",
    },
    {
      num: "04",
      title: t("Bli Kingdom Partner", "Become a partner"),
      desc: t(
        "Bär musiken och evangeliet vidare till nästa generation med en månadsgåva via Swish eller kort.",
        "Carry worship and hope to the next generation with monthly support via Swish or card."
      ),
      linkText: t("Bli partner", "Become a partner"),
      href: "/partners",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[var(--grey-200)]">
      <div className="max-w-[var(--container)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="overline block mb-2">
            {t("03 / Din väg framåt", "03 / Next steps")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.025em] text-[var(--grey-900)] font-[family-name:var(--font-heading)]">
            {t("Du hör hemma från första dagen", "You belong from your very first Sunday")}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--grey-600)] mt-3 font-light leading-relaxed font-[family-name:var(--font-body)]">
            {t(
              "När du är redo att ta nästa steg i din egen takt, finns det enkla och trygga vägar in i gemenskapen.",
              "When you are ready for more, here are the simple, unpressured steps many take at their own pace."
            )}
          </p>
        </div>

        {/* 4-Step Milestone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step) => (
            <div key={step.num} className="pt-6 border-t-2 border-[var(--grey-200)] flex flex-col justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-[var(--turquoise-600)] block mb-3 font-[family-name:var(--font-heading)]">
                  {step.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--grey-900)] mb-2 leading-snug font-[family-name:var(--font-heading)]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--grey-600)] font-light leading-relaxed mb-6 font-[family-name:var(--font-body)]">
                  {step.desc}
                </p>
              </div>
              <Link
                href={step.href}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--turquoise-700)] hover:text-[var(--turquoise-800)] font-[family-name:var(--font-body)] transition group"
              >
                <span>{step.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

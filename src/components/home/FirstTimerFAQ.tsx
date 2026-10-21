"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export function FirstTimerFAQ() {
  const { t } = useLanguage();

  const faqs: FAQItem[] = [
    {
      q: t("Finns det någon klädkod?", "Is there a dress code?"),
      a: t(
        "Inte alls. Kom i vad som känns bekvämt och naturligt för dig – jeans, t-shirt eller söndagsfin, allt smälter in precis lika väl.",
        "Not at all. Come in what feels natural to you, from jeans to a jacket and tie. Everyone belongs."
      ),
    },
    {
      q: t("Var parkerar jag eller åker kollektivt?", "Where do I park or take public transit?"),
      a: t(
        "De flesta av våra centrala samlingar i Göteborg ligger intill knutpunkter som Järntorget, Brunnsparken och Frihamnen. Frihamnspiren har goda parkeringsmöjligheter och spårvagnarna (linje 5, 6, 10) stannar i direkt anslutning.",
        "Most central Gothenburg gatherings are steps from transit hubs like Järntorget, Brunnsparken, and Frihamnen. Tram lines and free parking areas are directly adjacent."
      ),
    },
    {
      q: t("Vad händer med barnen under samlingen?", "What about children and teenagers?"),
      a: t(
        "Barn i alla åldrar är varmt välkomna. Vi har dedikerade barnvärdar med utdrag ur belastningsregistret som erbjuder sång, bibelberättelser och lek i anpassade rum, så att föräldrar kan delta i lugn och ro.",
        "Children of all ages are deeply welcome. Our vetted, background-checked leaders provide creative lessons, songs, and games in dedicated rooms."
      ),
    },
    {
      q: t("Kommer någon att peka ut mig som ny?", "Will anyone put me on the spot?"),
      a: t(
        "Nej, absolut inte. Ingen ber dig ställa dig upp, räcka upp handen eller presentera dig. Du kan sjunga med, sitta tyst i bänkraden eller bara observera. Du sätter takten själv.",
        "No. There is no standing up, no visitor badges, and no show of hands. Sing along, sit quietly, or just listen — you are in complete control."
      ),
    },
    {
      q: t("Är lokalerna tillgängliga för rullstol och barnvagn?", "Is the space accessible for wheelchairs and strollers?"),
      a: t(
        "Ja. Alla våra huvudlokaler är trappfria eller utrustade med ramp och rymliga hissar. Anpassade toaletter finns alltid i anslutning till foajén.",
        "Yes. All main sanctuary spaces are step-free or equipped with ramps and spacious elevators, with accessible restrooms nearby."
      ),
    },
    {
      q: t("Vad kostar det att delta?", "What does it cost to attend?"),
      a: t(
        "Alla våra samlingar, torgkonserter och gudstjänster har 100% fri entré. Vi vill att ingenting ska stå i vägen för att uppleva gospelsång och gemenskap.",
        "100% free admission. All concerts, worship nights, and gatherings are completely non-ticketed and open to everyone."
      ),
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[var(--grey-200)]">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="overline block mb-2">
            {t("05 / Frågor & svar", "05 / Frequently asked questions")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[var(--grey-900)] font-[family-name:var(--font-heading)]">
            {t("Det folk brukar undra innan de kommer", "Things people ask before they come")}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--grey-600)] mt-2 font-light font-[family-name:var(--font-body)]">
            {t(
              "Har du fler funderingar? Hör gärna av dig till oss på hej@gospelss.org.",
              "Curious about something else? Reach out anytime at hej@gospelss.org."
            )}
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[var(--grey-200)] border-y border-[var(--grey-200)]">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[var(--grey-900)] text-sm sm:text-base group-hover:text-[var(--turquoise-700)] transition font-[family-name:var(--font-heading)]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--grey-500)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[var(--turquoise-700)]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-[var(--grey-600)] font-light leading-relaxed pr-6 font-[family-name:var(--font-body)]">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

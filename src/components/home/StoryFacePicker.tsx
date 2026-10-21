"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Story {
  id: string;
  name: string;
  role: string;
  city: string;
  quote: string;
  avatar: string;
  initial: string;
  index: string;
}

export function StoryFacePicker() {
  const { t } = useLanguage();

  const stories: Story[] = [
    {
      id: "hanna",
      name: "Hanna K., 22 år",
      role: t("Student vid Göteborgs Universitet", "Student, University of Gothenburg"),
      city: "Vasastan",
      quote: t(
        "För en stund kändes hela staden som en enda familj. Jag kom för musikens skull och lämnade med framtidshopp och djup inre frid.",
        "For a moment, the whole city felt like one family. I came for the music and left with genuine hope and deep peace."
      ),
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80",
      initial: "H",
      index: "01 / 05",
    },
    {
      id: "lukas",
      name: "Lukas E., 24 år",
      role: t("Ungdomsledare & Musiker", "Youth Leader & Musician"),
      city: "Mölndal",
      quote: t(
        "Det var inte bara en vanlig konsert, det var en helig stillhet. Unga från helt olika kyrkor och stadsdelar stod bredvid varandra i timmar och sjöng.",
        "It wasn’t just an ordinary concert; there was a sacred stillness. Youth from completely different backgrounds stood side-by-side for hours singing."
      ),
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&h=240&q=80",
      initial: "L",
      index: "02 / 05",
    },
    {
      id: "sara",
      name: "Sara M., 38 år",
      role: t("Förbönsteam & Diakoni", "Prayer Minister & Diaconal Care"),
      city: "Partille",
      quote: t(
        "Vi såg trasiga relationer upprättas och människor som fann inre frid mitt i en tid av oro och ensamhet. Bönen bär hela rummet.",
        "We saw fractured relationships reconciled and individuals finding profound inner peace in an age of anxiety. Prayer truly carries the whole room."
      ),
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&h=240&q=80",
      initial: "S",
      index: "03 / 05",
    },
    {
      id: "daniel",
      name: "Daniel O., 45 år",
      role: t("Husgruppsvärd & Volontär", "Home Group Host & Volunteer"),
      city: "Majorna",
      quote: t(
        "Det finns ingen prestige här. Oavsett om du har en livslång tro eller är full av tvivel och frågor, finns det en plats vid bordet för dig.",
        "There is zero pretension here. Whether you have walked in faith for decades or come with a head full of honest questions, there is an open seat for you."
      ),
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&h=240&q=80",
      initial: "D",
      index: "04 / 05",
    },
    {
      id: "maria",
      name: "Maria L., 29 år",
      role: t("Korsångerska & Arkitekt", "Choir Singer & Architect"),
      city: "Linnéstaden",
      quote: t(
        "Att sjunga gospel mitt på Brunnsparken och se förbipasserande stanna upp med tårar i ögonen – det visar vad musik kan betyda för en hel stad.",
        "Singing gospel in the middle of Brunnsparken and seeing commuters stop with tears in their eyes — that shows what music can mean to a city."
      ),
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&h=240&q=80",
      initial: "M",
      index: "05 / 05",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const current = stories[activeIndex];

  return (
    <section className="py-16 sm:py-24 bg-[var(--grey-50)] border-b border-[var(--grey-200)]">
      <div className="max-w-[var(--container)] mx-auto px-4 sm:px-6 text-center">
        <span className="overline block mb-2">
          {t("04 / Röster från gemenskapen", "04 / Stories that stay")}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[var(--grey-900)] mb-2 font-[family-name:var(--font-heading)]">
          {t("I deras egna ord", "In their own words")}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--grey-600)] font-light mb-10 font-[family-name:var(--font-body)]">
          {t("Tryck på en person för att byta berättelse.", "Tap a face to switch reflections.")}
        </p>

        {/* Exact Gospels Design System Testimonial Spec */}
        <div className="testimonial mx-auto text-left shadow-[var(--shadow-sm)] border border-[var(--grey-200)]">
          <div className="quote-mark">“</div>
          <blockquote>{current.quote}</blockquote>
          <div className="author">
            <div className="avatar">{current.initial}</div>
            <div>
              <strong>{current.name}</strong>
              <small>{current.role} · {current.city}</small>
            </div>
            <div className="ml-auto text-[11px] font-semibold text-[var(--grey-500)] font-[family-name:var(--font-heading)]">
              {current.index}
            </div>
          </div>
        </div>

        {/* Face Picker Row */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8">
          {stories.map((story, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={story.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={story.name}
                className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-200 ${
                  isSelected
                    ? "ring-2 ring-[var(--turquoise-600)] scale-105 shadow-[var(--shadow-md)]"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={story.avatar}
                  alt={story.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
        "”Jag kom för musikens skull och planerade att sitta längst bak i trettio minuter. Två år senare är jag en av dem som brygger kaffet och hälsar alla välkomna i dörren.”",
        "“I came for the music and planned to sit in the back row for thirty minutes. Two years later, I’m the one brewing the coffee and welcoming people at the door.”"
      ),
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80",
      index: "01 / 05",
    },
    {
      id: "lukas",
      name: "Lukas E., 24 år",
      role: t("Ungdomsledare & Musiker", "Youth Leader & Musician"),
      city: "Mölndal",
      quote: t(
        "”Det var inte bara en vanlig konsert, det var en helig stillhet. Unga från helt olika kyrkor och stadsdelar stod bredvid varandra i timmar och sjöng.”",
        "“It wasn’t just an ordinary concert; there was a sacred stillness. Youth from completely different backgrounds stood side-by-side for hours singing.”"
      ),
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&h=240&q=80",
      index: "02 / 05",
    },
    {
      id: "sara",
      name: "Sara M., 38 år",
      role: t("Förbönsteam & Diakoni", "Prayer Minister & Diaconal Care"),
      city: "Partille",
      quote: t(
        "”Vi såg trasiga relationer upprättas och människor som fann inre frid mitt i en tid av oro och ensamhet. Bönen bär hela rummet.”",
        "“We saw fractured relationships reconciled and individuals finding profound inner peace in an age of anxiety. Prayer truly carries the whole room.”"
      ),
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&h=240&q=80",
      index: "03 / 05",
    },
    {
      id: "daniel",
      name: "Daniel O., 45 år",
      role: t("Husgruppsvärd & Volontär", "Home Group Host & Volunteer"),
      city: "Majorna",
      quote: t(
        "”Det finns ingen prestige här. Oavsett om du har en livslång tro eller är full av tvivel och frågor, finns det en plats vid bordet för dig.”",
        "“There is zero pretension here. Whether you have walked in faith for decades or come with a head full of honest questions, there is an open seat for you.”"
      ),
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&h=240&q=80",
      index: "04 / 05",
    },
    {
      id: "maria",
      name: "Maria L., 29 år",
      role: t("Korsångerska & Arkitekt", "Choir Singer & Architect"),
      city: "Linnéstaden",
      quote: t(
        "”Att sjunga gospel mitt på Brunnsparken och se förbipasserande stanna upp med tårar i ögonen – det visar vad musik kan betyda för en hel stad.”",
        "“Singing gospel in the middle of Brunnsparken and seeing commuters stop with tears in their eyes — that shows what music can mean to a city.”"
      ),
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&h=240&q=80",
      index: "05 / 05",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const current = stories[activeIndex];

  return (
    <section className="py-16 sm:py-24 bg-[#F5F4EE] border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-teal-800 mb-3 block">
          {t("RÖSTER FRÅN GEMENSKAPEN", "VOICES FROM OUR COMMUNITY")}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 mb-2">
          {t("I deras egna ord", "In their own words")}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-light mb-10">
          {t("Tryck på en person för att byta berättelse.", "Tap a face to switch reflections.")}
        </p>

        {/* Big Testimonial Quote in EB Garamond */}
        <div className="bg-[#FAF9F5] p-8 sm:p-12 rounded-3xl border border-stone-200/90 shadow-xs relative mb-8 min-h-[220px] flex flex-col justify-between transition-all duration-300">
          <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-2xl text-stone-900 leading-relaxed max-w-2xl mx-auto">
            {current.quote}
          </blockquote>

          <div className="mt-8 pt-4 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="text-center sm:text-left">
              <strong className="block text-stone-900 font-bold">{current.name}</strong>
              <span className="text-stone-500 font-light">
                {current.role} • {current.city}
              </span>
            </div>
            <span className="font-mono text-stone-600 font-semibold text-[11px]">
              {current.index}
            </span>
          </div>
        </div>

        {/* Face Picker Row */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {stories.map((story, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={story.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={story.name}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden transition-all duration-200 ${
                  isSelected
                    ? "ring-3 ring-teal-600 scale-105 shadow-md"
                    : "opacity-60 hover:opacity-100 hover:scale-102"
                }`}
              >
                <Image
                  src={story.avatar}
                  alt={story.name}
                  fill
                  sizes="56px"
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

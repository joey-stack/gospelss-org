"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Users, Mail, ShieldCheck, Heart, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamPage() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Samuel Lindqvist",
      role: t("Ordförande & Grundare", "Chairman & Founder"),
      badge: t("Styrelse", "Board"),
      bio: t(
        "Lovsångsledare med 12 års erfarenhet av körverksamhet och gatuevangelisation i Göteborg. Brinner för att förena stadens unga.",
        "Worship leader with 12 years of experience leading gospel ensembles and public outreaches across Gothenburg. Passionate about youth revival."
      ),
      initials: "SL",
    },
    {
      name: "Elinor Bergström",
      role: t("Körledare & Musikalisk Ledare", "Choir Director & Music Lead"),
      badge: t("Musik", "Music"),
      bio: t(
        "Musiker och sångpedagog med bakgrund i klassisk gospel och samtida tillbedjan. Leder West Sweden United Choir.",
        "Vocal educator and arranger with roots in classical gospel and contemporary praise. Directs the West Sweden United Choir."
      ),
      initials: "EB",
    },
    {
      name: "David Almqvist",
      role: t("Verksamhetsledare & Scenansvarig", "Operations & Production Lead"),
      badge: t("Produktion", "Production"),
      bio: t(
        "Ljudtekniker och projektledare som ansvarar för tillstånd, säkerhet och professionell konsertproduktion i offentliga rum.",
        "Audio engineer and logistics director managing civic permits, safety compliance, and high-fidelity concert staging."
      ),
      initials: "DA",
    },
    {
      name: "Hanna Nygren",
      role: t("Pastoral Samordnare & Böneledare", "Pastoral Care & Prayer Lead"),
      badge: t("Själavård", "Pastoral"),
      bio: t(
        "Pastor med fokus på själavård, ungas psykiska hälsa och GDPR Artikel 9-skyddad förbönshantering under våra samlingar.",
        "Ordained minister coordinating pastoral support, youth well-being, and confidential GDPR Article 9 prayer routing."
      ),
      initials: "HN",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero: Team & Leadership */}
      <section className="py-20 lg:py-28 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="brand" shape="md" className="mb-4">
              {t("IDEELL FÖRENING · GÖTEBORG", "NON-PROFIT ASSOCIATION · GOTHENBURG")}
            </Badge>
            <h1 className="h1 text-grey-900 mb-6 tracking-tight">
              {t("Ledarskap & Medarbetare", "Leadership & Team")}
            </h1>
            <p className="body-lg text-grey-600 font-normal leading-relaxed mb-6">
              {t(
                "Människorna som med tro, hängivenhet och professionell omsorg bär visionen om att sprida helig lovsång och hopp i Göteborgs offentliga rum.",
                "The dedicated servants who with faith, humility, and organizational excellence steward the vision of bringing sacred worship to Gothenburg’s public spaces."
              )}
            </p>
            <div className="text-overline text-grey-400 font-mono">
              Gospels Ideell Förening · Org.nr: 802557-4883 · Göteborg, Sweden
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Team Cards */}
      <section className="py-20 bg-white border-b border-grey-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-grey-50 border border-grey-200 flex flex-col justify-between hover:border-brand-500 hover:shadow-sm transition duration-200"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center font-bold text-lg font-sans">
                    {member.initials}
                  </div>
                  <div className="space-y-1">
                    <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full">
                      {member.badge}
                    </span>
                    <h3 className="h4 text-grey-900">{member.name}</h3>
                    <p className="text-body-sm font-medium text-brand-600">{member.role}</p>
                  </div>
                  <p className="body-sm text-grey-600 leading-relaxed pt-2 border-t border-grey-200">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-grey-200 flex items-center justify-between text-body-xs font-mono text-grey-500">
                  <span>kontakt@gospelss.org</span>
                  <Mail className="w-4 h-4 text-grey-400" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Pastoral Council Strip */}
      <section className="py-16 lg:py-24 bg-grey-50 border-b border-grey-200">
        <Container>
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-grey-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-brand-600">
              <ShieldCheck className="w-6 h-6" />
              <span className="overline font-semibold tracking-wider">
                {t("PASTORALT RÅD & EKUMENISK TILLSYN", "PASTORAL COUNCIL & ECUMENICAL OVERSIGHT")}
              </span>
            </div>
            <h2 className="h3 text-grey-900">
              {t("Sund Teologisk Vägledning och Trygghet", "Theological Integrity & Pastoral Oversight")}
            </h2>
            <p className="body-base text-grey-600 leading-relaxed">
              {t(
                "Föreningens verksamhet och själavårdande insatser följs av ett ekumeniskt pastoralt råd bestående av ordinerade pastorer och präster från samverkande församlingar i Göteborg. Detta garanterar sund teologisk förankring, trygg själavård under samlingar och transparent ansvarsskyldighet.",
                "All ministry activities and pastoral ministries operate under the guidance of an ecumenical pastoral advisory board of ordained pastors and clergy from partner churches across Gothenburg. This guarantees healthy theological balance, trustworthy prayer care, and absolute stewardship accountability."
              )}
            </p>
            <div className="pt-6 border-t border-grey-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-body-sm text-grey-500">
                {t("Vill du komma i kontakt med ledningen?", "Want to get in touch with our team?")}
              </span>
              <Button asChild variant="brand" size="sm">
                <Link href="/about/contact">
                  {t("Kontakta Oss", "Contact Us")}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Volunteer CTA */}
      <section className="py-20 bg-grey-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="h2 text-white">
              {t("Vill du tjäna med ditt ledarskap?", "Want to join our volunteer team?")}
            </h2>
            <p className="body-lg text-grey-300 font-light leading-relaxed">
              {t(
                "Vi söker alltid musiker, ljudtekniker, värdar och bönebedjare som vill ge av sin tid för stadens skull.",
                "We are continuously welcoming vocalists, sound engineers, hosts, and prayer servants eager to contribute to Gothenburg’s spiritual awakening."
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="brand" size="lg">
                <Link href="/get-involved/volunteer">
                  {t("Bli Volontär", "Volunteer With Us")}
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/about/contact">
                  {t("Skicka ett Meddelande", "Send a Message")}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Building, CheckCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Organisation & Transparens — Gospels",
  description:
    "Juridisk information, styrelsestruktur, säte och transparensprinciper för Gospels Ideell Förening (Org.nr: 802557-4883).",
};

export default function OrganisationPage() {
  return (
    <article className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-body-xs font-semibold text-brand-600 hover:text-brand-700 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Tillbaka till startsidan</span>
        </Link>
        <Badge variant="brand" shape="md">
          ORGANISATIONSINFORMATION & TRANSPARENS
        </Badge>
        <h1 className="h1 text-grey-900 tracking-tight">
          Organisation & Juridisk Information
        </h1>
        <p className="text-body-sm font-mono text-grey-500">
          Full insyn och ansvarsskyldighet · Gospels Ideell Förening (Org.nr: 802557-4883)
        </p>
      </div>

      {/* Intro Box */}
      <div className="p-8 rounded-3xl bg-white border border-grey-200 shadow-sm space-y-4 text-body-base text-grey-700 leading-relaxed">
        <p>
          Full insyn och etisk förvaltning är grundläggande för vår trovärdighet. GOSPELS är en allmännyttig ideell
          förening registrerad i Sverige och underställd svensk föreningslagstiftning. Nedan finner du föreningens
          officiella registeruppgifter och styrelseprinciper.
        </p>
      </div>

      {/* Legal Data Grid */}
      <div className="p-8 rounded-3xl bg-white border border-grey-200 shadow-sm space-y-6">
        <h2 className="h4 text-grey-900">
          Officiella Föreningsuppgifter
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-body-sm">
          <div className="p-4 rounded-xl bg-grey-50 border border-grey-200">
            <span className="text-body-xs uppercase text-grey-400 font-mono font-semibold block mb-1">Officiellt Namn</span>
            <span className="font-bold text-grey-900 text-body-base">Gospels Ideell Förening</span>
          </div>
          <div className="p-4 rounded-xl bg-grey-50 border border-grey-200">
            <span className="text-body-xs uppercase text-grey-400 font-mono font-semibold block mb-1">Organisationsnummer</span>
            <span className="font-mono font-bold text-brand-600 text-body-base">802557-4883</span>
          </div>
          <div className="p-4 rounded-xl bg-grey-50 border border-grey-200">
            <span className="text-body-xs uppercase text-grey-400 font-mono font-semibold block mb-1">Säte & Län</span>
            <span className="font-medium text-grey-900">Göteborg, Västra Götalands län</span>
          </div>
          <div className="p-4 rounded-xl bg-grey-50 border border-grey-200">
            <span className="text-body-xs uppercase text-grey-400 font-mono font-semibold block mb-1">Juridisk Form</span>
            <span className="font-medium text-grey-900">Ideell förening (Kategori A)</span>
          </div>
          <div className="p-4 rounded-xl bg-grey-50 border border-grey-200">
            <span className="text-body-xs uppercase text-grey-400 font-mono font-semibold block mb-1">Bankgiro</span>
            <span className="font-mono font-bold text-grey-900">512-3456</span>
          </div>
          <div className="p-4 rounded-xl bg-grey-50 border border-grey-200">
            <span className="text-body-xs uppercase text-grey-400 font-mono font-semibold block mb-1">Swish</span>
            <span className="font-mono font-bold text-grey-900">123 456 78 90</span>
          </div>
        </div>
      </div>

      {/* Governance & Accountability */}
      <div className="p-8 rounded-3xl bg-grey-50 border border-grey-200 space-y-4">
        <h2 className="h4 text-grey-900">
          Stadgar & Insamlingskontroll
        </h2>
        <p className="body-base text-grey-700 leading-relaxed">
          Föreningens högsta beslutande organ är det årliga föreningsmötet, där medlemmar utser styrelse och revisorer. All insamlingsverksamhet följer strikta förvaltningsstandarder inspirerade av Svensk Insamlingskontroll:
        </p>
        <ul className="space-y-2.5 text-body-sm text-grey-700 pt-2">
          <li className="flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-brand-600 shrink-0" />
            <span>Minst 75% av totala intäkter används direkt för det ideella ändamålet.</span>
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-brand-600 shrink-0" />
            <span>Styrelseledamöter arbetar oavlönat för styrelseuppdraget.</span>
          </li>
          <li className="flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-brand-600 shrink-0" />
            <span>Auktoriserad revisor granskar årsredovisning och ekonomisk förvaltning.</span>
          </li>
        </ul>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-grey-200 text-body-sm text-grey-600">
        Har du frågor rörande stadgar eller årsredovisning? Kontakta styrelsen på{" "}
        <a href="mailto:kontakt@gospelss.org" className="text-brand-600 font-semibold underline">
          kontakt@gospelss.org
        </a>.
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Lock, Mail, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Integritetspolicy & GDPR Artikel 9 — Gospels",
  description:
    "Information om hur Gospels (Org.nr: 802557-4883) behandlar personuppgifter enligt GDPR och hanterar andliga böneämnen under Artikel 9 med strikt sekretess.",
};

export default function PrivacyPolicyPage() {
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
          DATASKYDD & SVENSK GDPR ARTIKEL 9
        </Badge>
        <h1 className="h1 text-grey-900 tracking-tight">
          Integritetspolicy och skydd av känsliga uppgifter
        </h1>
        <p className="text-body-sm font-mono text-grey-500">
          Senast uppdaterad: 20 Oktober 2026 · Gospels Ideell Förening (Org.nr: 802557-4883)
        </p>
      </div>

      {/* Intro Box */}
      <div className="p-8 rounded-3xl bg-white border border-grey-200 shadow-sm space-y-4 text-body-base text-grey-700 leading-relaxed">
        <p>
          Gospels värnar om din personliga integritet och är fast besluten att skydda dina personuppgifter. Denna
          integritetspolicy förklarar hur vi samlar in, använder, lagrar och skyddar dina uppgifter i enlighet med
          EU:s allmänna dataskyddsförordning (GDPR) och gällande svensk lagstiftning under Integritetsskyddsmyndigheten (IMY).
        </p>
        <div className="pt-4 border-t border-grey-200 text-body-sm font-mono text-grey-600">
          <strong>Personuppgiftsansvarig:</strong> Gospels Ideell Förening · Org.nr: 802557-4883 · Göteborg, Sverige · E-post:{" "}
          <a href="mailto:kontakt@gospelss.org" className="text-brand-600 underline font-semibold">
            kontakt@gospelss.org
          </a>
        </div>
      </div>

      {/* Article 9 Specific Callout */}
      <section className="p-8 rounded-3xl bg-brand-50/70 border border-brand-500/30 space-y-4">
        <div className="flex items-center gap-3 text-brand-800">
          <Lock className="w-6 h-6 text-brand-600 shrink-0" />
          <h2 className="h3 text-grey-900">
            Särskild Kategori: Böneämnen & Andliga Uppgifter (GDPR Artikel 9)
          </h2>
        </div>
        <p className="body-base text-grey-700 leading-relaxed">
          Enligt GDPR Artikel 9 utgör uppgifter som avslöjar religiös eller filosofisk övertygelse en{" "}
          <strong>särskild kategori av personuppgifter</strong> med förhöjt skyddsvärde. När du skickar in ett
          böneämne via vår plattform tillämpas följande strikta skyddsregler:
        </p>
        <ul className="space-y-3 pt-2 text-body-sm text-grey-700">
          <li className="flex items-start gap-2.5">
            <span className="font-bold text-brand-600">✓</span>
            <span><strong>Uttryckligt samtycke krävs:</strong> Inget böneämne kan skickas in utan en aktiv, separat samtyckesmarkering.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-bold text-brand-600">✓</span>
            <span><strong>Anonymt alternativ:</strong> Du har alltid rätt att skicka in böneämnen helt anonymt utan namn eller kontaktuppgifter.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-bold text-brand-600">✓</span>
            <span><strong>Ingen offentlig publicering:</strong> Böneämnen indexeras aldrig av sökmotorer, visas aldrig offentligt och säljs aldrig vidare.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-bold text-brand-600">✓</span>
            <span><strong>Pastoral sekretess:</strong> Endast utsedda själavårdare och förbönsteam har behörighet att ta del av böneämnen. AI-triage (Gemini Flash) sker via krypterade API-anrop utan att data sparas för modellträning.</span>
          </li>
        </ul>
      </section>

      {/* Detailed Articles */}
      <div className="space-y-8 text-body-base text-grey-700 leading-relaxed">
        <section className="space-y-3">
          <h3 className="h4 text-grey-900">1. Vilka personuppgifter samlar vi in?</h3>
          <p>Vi samlar endast in minimala och nödvändiga uppgifter beroende på din interaktion med oss:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-body-sm">
            <li><strong>Konsert-RSVP:</strong> Fullständigt namn och e-postadress för att skicka digital platsbekräftelse och praktisk information.</li>
            <li><strong>Kingdom Partners:</strong> Namn, e-post och betalningsreferens (Stripe kund-ID eller Swish transaktionsreferens). Känsliga kortnummer hanteras uteslutande av certifierade betalväxlar (PCI-DSS nivå 1) och lagras aldrig i våra system.</li>
            <li><strong>Volontäransökan:</strong> Namn, e-post, telefon, intresseområde och ålder. För sökande under 18 år inhämtas dessutom målsmans kontaktuppgifter och skriftliga samtycke.</li>
            <li><strong>Böneämnen:</strong> Bönebeskrivning och valfritt namn/e-post (om du önskar personlig återkoppling från en pastor).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="h4 text-grey-900">2. Rättslig grund för behandlingen</h3>
          <p>Vi behandlar dina personuppgifter baserat på följande rättsliga grunder enligt GDPR:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-body-sm">
            <li><strong>Samtycke (Artikel 6.1 a och Artikel 9.2 a GDPR):</strong> För förbön, nyhetsbrev och volontäransökningar.</li>
            <li><strong>Fullgörande av avtal (Artikel 6.1 b GDPR):</strong> För hantering av konsertplatser och återkommande partnerskap.</li>
            <li><strong>Rättslig förpliktelse (Artikel 6.1 c GDPR):</strong> Bokföringslagen gällande ekonomiska gåvor och verifikationer.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="h4 text-grey-900">3. Lagringstid och gallring</h3>
          <p>Vi sparar inte dina personuppgifter längre än vad som är nödvändigt för det ändamål för vilket de samlades in:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-body-sm">
            <li><strong>RSVP för konserter:</strong> Raderas senast 30 dagar efter att arrangemanget ägt rum, såvida du inte valt att prenumerera på framtida inbjudningar.</li>
            <li><strong>Böneämnen:</strong> Arkiveras under strikt behörighet och raderas permanent efter 90 dagar.</li>
            <li><strong>Ekonomiska gåvor:</strong> Bevaras enligt Bokföringslagen i sju år efter kalenderårets utgång.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="h4 text-grey-900">4. Dina rättigheter enligt GDPR</h3>
          <p>Du har full kontroll över dina personuppgifter och har rätt att när som helst:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-body-sm">
            <li><strong>Få tillgång till dina uppgifter (Registerutdrag):</strong> Begära ett kostnadsfritt utdrag över vilka personuppgifter vi behandlar om dig.</li>
            <li><strong>Rättelse:</strong> Få felaktiga eller ofullständiga uppgifter rättade utan onödigt dröjsmål.</li>
            <li><strong>Radering (&rdquo;Rätten att bli bortglömd&rdquo;):</strong> Begära att vi raderar alla dina personuppgifter när de inte längre behövs.</li>
            <li><strong>Återkalla samtycke:</strong> När som helst ta tillbaka ditt samtycke för framtida behandling av exempelvis böneämnen.</li>
            <li><strong>Klagomål till IMY:</strong> Lämna klagomål till Integritetsskyddsmyndigheten (www.imy.se) om du anser att vi brustit i vår hantering.</li>
          </ul>
        </section>

        <div className="p-6 rounded-2xl bg-white border border-grey-200 flex items-center justify-between gap-4">
          <div>
            <div className="text-body-xs font-mono uppercase text-grey-400">KONTAKTA OSS FÖR REGISTERUTDRAG</div>
            <div className="text-body-base font-bold text-grey-900">kontakt@gospelss.org</div>
          </div>
          <a
            href="mailto:kontakt@gospelss.org?subject=GDPR%20Registerutdrag"
            className="px-4 py-2 rounded-xl bg-brand-600 text-white text-body-sm font-semibold hover:bg-brand-700 transition"
          >
            Skicka Förfrågan
          </a>
        </div>
      </div>
    </article>
  );
}

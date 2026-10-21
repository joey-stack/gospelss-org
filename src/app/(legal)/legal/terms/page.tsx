import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { FileText, CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Användarvillkor — Gospels",
  description:
    "Allmänna användarvillkor för deltagande i konserter, gåvogivande och användning av webbplatsen gospelss.org (Org.nr: 802557-4883).",
};

export default function TermsPage() {
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
          ALLMÄNNA VILLKOR · IDEELL VERKSAMHET
        </Badge>
        <h1 className="h1 text-grey-900 tracking-tight">
          Användarvillkor för Gospels
        </h1>
        <p className="text-body-sm font-mono text-grey-500">
          Gäller från och med 20 Oktober 2026 · Gospels Ideell Förening (Org.nr: 802557-4883)
        </p>
      </div>

      {/* Intro Box */}
      <div className="p-8 rounded-3xl bg-white border border-grey-200 shadow-sm space-y-4 text-body-base text-grey-700 leading-relaxed">
        <p>
          Välkommen till Gospels webbplats (<strong>gospelss.org</strong>). Genom att använda vår webbplats,
          anmäla dig till våra konserter, ge en gåva eller ansöka om volontärskapsgodkännande godkänner du dessa
          användarvillkor. Verksamheten drivs av den ideella föreningen Gospels (organisationsnummer: 802557-4883)
          med säte i Göteborg.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8 text-body-base text-grey-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="h4 text-grey-900">
            1. Kostnadsfria samlingar & Platsbokning
          </h2>
          <p>
            Gospels konserter och lovsångskvällar är alltid <strong>100% kostnadsfria</strong> för allmänheten.
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-body-sm">
            <li>Platsbokningar (RSVP) är personliga och garanterar reserverad sitt- eller ståplats fram till 15 minuter före evenemangets start.</li>
            <li>Det är strängt förbjudet att sälja, vidarebefordra mot ekonomisk ersättning eller kommersiellt utnyttja kostnadsfria konsertbiljetter.</li>
            <li>Om du får förhinder uppmuntrar vi dig att avboka din plats så att en annan besökare kan få tillgång till konserten.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="h4 text-grey-900">
            2. Gåvor & Kingdom Partners
          </h2>
          <p>
            Alla ekonomiska bidrag till Gospels via Swish, bankgiro eller kortbetalning utgör frivilliga ideella gåvor till föreningens ändamål.
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-body-sm">
            <li>Månatliga prenumerationer (Kingdom Partners) kan pausas eller avslutas när som helst utan uppsägningstid via kontakt med kontakt@gospelss.org.</li>
            <li>Gåvor är inte återbetalningsbara, förutom i händelse av tekniska fel vid betalningsöverföringen.</li>
            <li>Samtliga gåvor hanteras under svensk redovisnings- och bokföringslag med årlig revision.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="h4 text-grey-900">
            3. Volontärverksamhet & Etiska Riktlinjer
          </h2>
          <p>
            Som volontär för Gospels representerar du Kristi kärlek och föreningens värdegrund:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-body-sm">
            <li>Alla volontärer och ledare förbinder sig att bemöta besökare med respekt, värme och trygghet.</li>
            <li>För volontärer under 18 år krävs skriftligt samtycke från målsman innan tjänstgöring påbörjas.</li>
            <li>Förbön och själavård sker under strikt tystnadsplikt i enlighet med svensk GDPR Artikel 9.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="h4 text-grey-900">
            4. Immaterialrätt & Mediadelning
          </h2>
          <p>
            Ljudupptagningar, ackordblad, videor och bilder som publiceras på gospelss.org tillhandahålls för personlig och kyrklig uppbyggelse:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-body-sm">
            <li>Ackordblad och sångresurser får fritt användas och spridas i lokala församlingars gudstjänster och ungdomsgrupper.</li>
            <li>Kommersiell återanvändning eller vidareförsäljning av inspelningar och media kräver skriftligt tillstånd från Gospels styrelse.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="h4 text-grey-900">
            5. Tillämplig Lag & Tvister
          </h2>
          <p>
            Dessa villkor regleras av svensk lag. Eventuella tvister ska i första hand lösas i dialog och samförstånd, och i andra hand av allmän domstol med Göteborgs tingsrätt som första instans.
          </p>
        </section>

        <div className="p-6 rounded-2xl bg-white border border-grey-200 text-body-sm text-grey-600 space-y-2">
          <div className="font-bold text-grey-900">Har du frågor om våra användarvillkor?</div>
          <p>Kontakta vår styrelse på <a href="mailto:kontakt@gospelss.org" className="text-brand-600 font-semibold underline">kontakt@gospelss.org</a>.</p>
        </div>
      </div>
    </article>
  );
}

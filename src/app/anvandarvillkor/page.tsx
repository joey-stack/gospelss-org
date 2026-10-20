import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileText, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Användarvillkor — Gospels",
  description:
    "Allmänna användarvillkor för deltagande i konserter, gåvogivande och användning av webbplatsen gospelss.org (Org.nr: 802557-4883).",
};

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-canvas)" }}>
      <Navbar />

      <main id="main-content" style={{ flex: 1, padding: "7rem 0 5rem 0" }}>
        <div className="container-page" style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <span className="badge-pill" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              <FileText size={14} style={{ color: "var(--color-turquoise-500)", marginRight: "0.5rem" }} />
              Allmänna Villkor
            </span>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                fontWeight: 600,
                color: "var(--color-charcoal-900)",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Användarvillkor för Gospels
            </h1>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-500)" }}>
              Gäller från och med 20 Oktober 2026 · Gospels (Org.nr: 802557-4883)
            </p>
          </div>

          <div
            style={{
              padding: "2rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              marginBottom: "3rem",
              lineHeight: 1.7,
              fontSize: "var(--text-base)",
              color: "var(--color-charcoal-700)",
            }}
          >
            <p>
              Välkommen till Gospels webbplats (<strong>gospelss.org</strong>). Genom att använda vår webbplats,
              anmäla dig till våra konserter, ge en gåva eller ansöka om volontärskapsgodkännande godkänner du dessa
              användarvillkor. Verksamheten drivs av den ideella föreningen Gospels (organisationsnummer 802557-4883)
              med säte i Göteborg.
            </p>
          </div>

          <div style={{ display: "grid", gap: "2.5rem", color: "var(--color-charcoal-800)", lineHeight: 1.8 }}>
            <section>
              <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.75rem" }}>
                1. Kostnadsfria samlingar & Platsbokning
              </h2>
              <p style={{ fontSize: "var(--text-sm)", marginBottom: "0.5rem" }}>
                Gospels konserter och lovsångskvällar är alltid <strong>100% kostnadsfria</strong>.
              </p>
              <ul style={{ paddingLeft: "1.25rem", fontSize: "var(--text-sm)", display: "grid", gap: "0.5rem" }}>
                <li>Platsbokningar (RSVP) är personliga och garanterar reserverad sitt- eller ståplats fram till 15 minuter före evenemangets start.</li>
                <li>Det är strängt förbjudet att sälja, vidarebefordra mot ersättning eller kommersiellt utnyttja kostnadsfria konsertbiljetter.</li>
                <li>Om du får förhinder uppmuntrar vi dig att avboka din plats så att någon annan kan få tillgång till konserten.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.75rem" }}>
                2. Gåvor & Kingdom Partners
              </h2>
              <p style={{ fontSize: "var(--text-sm)", marginBottom: "0.5rem" }}>
                Gåvor som ges till Gospels via Swish, Bankgiro eller kortbetalning (Stripe) utgör frivilliga donationer till föreningens allmännyttiga ändamål.
              </p>
              <ul style={{ paddingLeft: "1.25rem", fontSize: "var(--text-sm)", display: "grid", gap: "0.5rem" }}>
                <li>Månatliga Kingdom Partner-medlemskap förnyas automatiskt månadsvis. Du kan när som helst avsluta eller ändra ditt givande via e-post till <a href="mailto:kontakt@gospelss.org" style={{ color: "var(--color-turquoise-700)" }}>kontakt@gospelss.org</a> utan uppsägningstid.</li>
                <li>Enligt svensk skattelagstiftning är ideella gåvor som huvudregel inte återbetalningsbara när de väl har mottagits och bokförts, såvida inte uppenbara tekniska dubbeldragningar skett.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.75rem" }}>
                3. Trygghet & Uppförandekod för Volontärer
              </h2>
              <p style={{ fontSize: "var(--text-sm)", marginBottom: "0.5rem" }}>
                Gospels strävar efter att erbjuda en helig, trygg och inkluderande miljö för alla deltagare och volontärer:
              </p>
              <ul style={{ paddingLeft: "1.25rem", fontSize: "var(--text-sm)", display: "grid", gap: "0.5rem" }}>
                <li>Varje volontär förbinder sig att bemöta besökare med respekt, vänlighet och integritet.</li>
                <li>Diskriminering, kränkande särbehandling, trakasserier eller otillbörlig påverkan tolereras under inga omständigheter och leder till omedelbar avstängning.</li>
                <li>Volontärer under 18 år måste ha skriftligt godkännande från vårdnadshavare före sitt första tjänstgöringspass.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.75rem" }}>
                4. Immateriella Rättigheter & Medieanvändning
              </h2>
              <p style={{ fontSize: "var(--text-sm)", marginBottom: "0.5rem" }}>
                Allt material på gospelss.org – inklusive logotyper, texter, ljudinspelningar och bilder – tillhör Gospels eller dess licensgivare:
              </p>
              <ul style={{ paddingLeft: "1.25rem", fontSize: "var(--text-sm)", display: "grid", gap: "0.5rem" }}>
                <li>Lovsångsljudspår och texter får användas och delas för personligt bruk och gemensam tillbedjan.</li>
                <li>Kommersiell återanvändning av Gospels ljudspår eller varumärke kräver skriftligt tillstånd från styrelsen.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.75rem" }}>
                5. Ansvarsbegränsning & Tillämplig Lag
              </h2>
              <p style={{ fontSize: "var(--text-sm)" }}>
                Webbplatsen och dess tjänster tillhandahålls i befintligt skick. Föreningen friskriver sig från ansvar för eventuella tekniska störningar, driftavbrott eller förluster som uppstår till följd av användning av webbplatsen.
                <br /><br />
                Dessa villkor regleras uteslutande av svensk lagstiftning. Tvister med anledning av dessa villkor ska i första hand lösas genom samförstånd, och i andra hand avgöras av allmän domstol med Göteborgs tingsrätt som första instans.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Lock, UserCheck, AlertTriangle, FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Integritetspolicy & GDPR Artikel 9 — Gospels",
  description:
    "Information om hur Gospels (Org.nr: 802557-4883) behandlar personuppgifter enligt GDPR och hanterar andliga böneämnen under Artikel 9 med strikt sekretess.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-canvas)" }}>
      <Navbar />

      <main id="main-content" style={{ flex: 1, padding: "7rem 0 5rem 0" }}>
        <div className="container-page" style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <span className="badge-pill" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              <ShieldCheck size={14} style={{ color: "var(--color-turquoise-500)", marginRight: "0.5rem" }} />
              Dataskydd & GDPR Artikel 9
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
              Integritetspolicy och skydd av känsliga uppgifter
            </h1>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-500)" }}>
              Senast uppdaterad: 20 Oktober 2026 · Tillämplig för Gospels (Org.nr: 802557-4883)
            </p>
          </div>

          {/* Intro Box */}
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
            <p style={{ marginBottom: "1rem" }}>
              Gospels värnar om din personliga integritet och är fast besluten att skydda dina personuppgifter. Denna
              integritetspolicy förklarar hur vi samlar in, använder, lagrar och skyddar dina uppgifter i enlighet med
              EU:s allmänna dataskyddsförordning (GDPR) och gällande svensk lagstiftning (Integritetsskyddsmyndigheten, IMY).
            </p>
            <p>
              <strong>Personuppgiftsansvarig:</strong> Gospels (ideell förening), Organisationsnummer: 802557-4883,
              Göteborg, Sverige. E-post för integritetsärenden:{" "}
              <a href="mailto:kontakt@gospelss.org" style={{ color: "var(--color-turquoise-700)", fontWeight: 600 }}>
                kontakt@gospelss.org
              </a>.
            </p>
          </div>

          {/* Article 9 Specific Callout */}
          <section
            style={{
              padding: "2rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "rgba(20, 184, 166, 0.06)",
              border: "1px solid rgba(20, 184, 166, 0.25)",
              marginBottom: "3rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <Lock size={22} style={{ color: "var(--color-turquoise-600)" }} />
              <h2 style={{ fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--color-charcoal-900)", margin: 0 }}>
                Särskild kategori: Böneämnen & Andliga uppgifter (GDPR Artikel 9)
              </h2>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)", lineHeight: 1.7, marginBottom: "1rem" }}>
              Enligt GDPR Artikel 9 utgör uppgifter som avslöjar religiös eller filosofisk övertygelse en{" "}
              <strong>särskild kategori av personuppgifter</strong> med förhöjt skyddsvärde. När du skickar in ett
              böneämne via vår plattform tillämpas följande strikta skyddsregler:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem", fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)" }}>
              <li style={{ display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "var(--color-turquoise-600)", fontWeight: 700 }}>✓</span>
                <span><strong>Uttryckligt samtycke krävs:</strong> Inget böneämne kan skickas in utan en aktiv, separat samtyckesmarkering.</span>
              </li>
              <li style={{ display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "var(--color-turquoise-600)", fontWeight: 700 }}>✓</span>
                <span><strong>Anonymt alternativ:</strong> Du har alltid rätt att skicka in böneämnen helt anonymt utan namn eller kontaktuppgifter.</span>
              </li>
              <li style={{ display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "var(--color-turquoise-600)", fontWeight: 700 }}>✓</span>
                <span><strong>Ingen offentlig publicering:</strong> Böneämnen indexeras aldrig av sökmotorer, visas aldrig offentligt och säljs aldrig vidare.</span>
              </li>
              <li style={{ display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "var(--color-turquoise-600)", fontWeight: 700 }}>✓</span>
                <span><strong>Pastoral sekretess:</strong> Endast utsedda själavårdare och förbönsteam har behörighet att ta del av böneämnen. AI-triage (Gemini Flash) sker via krypterade API-anrop utan att data sparas för AI-träning.</span>
              </li>
            </ul>
          </section>

          {/* Detailed Sections */}
          <div style={{ display: "grid", gap: "2.5rem", color: "var(--color-charcoal-800)", lineHeight: 1.8 }}>
            <section>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.75rem" }}>
                1. Vilka personuppgifter samlar vi in?
              </h3>
              <p style={{ fontSize: "var(--text-sm)", marginBottom: "0.75rem" }}>
                Vi samlar endast in minimala och nödvändiga uppgifter beroende på din interaktion med oss:
              </p>
              <ul style={{ paddingLeft: "1.25rem", fontSize: "var(--text-sm)", display: "grid", gap: "0.5rem" }}>
                <li><strong>Konsert-RSVP:</strong> Fullständigt namn och e-postadress för att skicka bekräftelse och platsinformation.</li>
                <li><strong>Kingdom Partners:</strong> Namn, e-post och betalningsreferens (Stripe kund-ID eller Swish transaktionsreferens). Känsliga kortnummer hanteras uteslutande av certifierade betalväxlar (PCI-DSS nivå 1) och lagras aldrig i våra system.</li>
                <li><strong>Volontäransökan:</strong> Namn, e-post, telefon, intresseområde och erfarenhet. För sökande under 18 år inhämtas dessutom målsmans kontaktuppgifter och skriftliga samtycke.</li>
                <li><strong>Böneämnen:</strong> Bönebeskrivning och valfritt namn/e-post (om du önskar personlig återkoppling).</li>
              </ul>
            </section>

            <section>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.75rem" }}>
                2. Rättslig grund för behandlingen
              </h3>
              <p style={{ fontSize: "var(--text-sm)" }}>
                Vi behandlar dina personuppgifter baserat på följande rättsliga grunder:
              </p>
              <ul style={{ paddingLeft: "1.25rem", fontSize: "var(--text-sm)", display: "grid", gap: "0.5rem", marginTop: "0.5rem" }}>
                <li><strong>Samtycke (Artikel 6.1 a och Artikel 9.2 a GDPR):</strong> För förbön, nyhetsbrev och volontäransökningar.</li>
                <li><strong>Fullgörande av avtal (Artikel 6.1 b GDPR):</strong> För hantering av konsertplatser och återkommande partnerskap.</li>
                <li><strong>Rättslig förpliktelse (Artikel 6.1 c GDPR):</strong> Bokföringslagen gällande ekonomiska gåvor och verifikationer.</li>
              </ul>
            </section>

            <section>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.75rem" }}>
                3. Lagringstid och gallring
              </h3>
              <p style={{ fontSize: "var(--text-sm)" }}>
                Vi sparar inte dina personuppgifter längre än vad som är nödvändigt för det ändamål för vilket de samlades in:
              </p>
              <ul style={{ paddingLeft: "1.25rem", fontSize: "var(--text-sm)", display: "grid", gap: "0.5rem", marginTop: "0.5rem" }}>
                <li><strong>RSVP för konserter:</strong> Raderas senast 30 dagar efter att arrangemanget ägt rum, om du inte valt att prenumerera på framtida inbjudningar.</li>
                <li><strong>Böneämnen:</strong> Arkiveras under strikt behörighet och raderas permanent efter 90 dagar.</li>
                <li><strong>Ekonomiska gåvor:</strong> Bevaras enligt Bokföringslagen i sju år efter kalenderårets utgång.</li>
              </ul>
            </section>

            <section>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: "0.75rem" }}>
                4. Dina rättigheter enligt GDPR
              </h3>
              <p style={{ fontSize: "var(--text-sm)", marginBottom: "0.75rem" }}>
                Du har full kontroll över dina personuppgifter och har rätt att:
              </p>
              <ul style={{ paddingLeft: "1.25rem", fontSize: "var(--text-sm)", display: "grid", gap: "0.5rem" }}>
                <li><strong>Få tillgång till dina uppgifter (Registerutdrag):</strong> Begära ett kostnadsfritt utdrag över vilka personuppgifter vi behandlar om dig.</li>
                <li><strong>Rättelse:</strong> Få felaktiga eller ofullständiga uppgifter rättade utan onödigt dröjsmål.</li>
                <li><strong>Radering (&rdquo;Rätten att bli bortglömd&rdquo;):</strong> Begära att vi raderar alla dina personuppgifter när de inte längre behövs eller när du återkallar ditt samtycke.</li>
                <li><strong>Återkalla samtycke:</strong> När som helst ta tillbaka ditt samtycke för framtida behandling av exempelvis böneämnen.</li>
                <li><strong>Klagomål till IMY:</strong> Om du anser att Gospels behandlar dina personuppgifter i strid med dataskyddsförordningen har du rätt att lämna klagomål till Integritetsskyddsmyndigheten (www.imy.se).</li>
              </ul>
            </section>

            <section
              style={{
                padding: "1.5rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, marginBottom: "0.5rem" }}>
                Hur utövar du dina rättigheter?
              </h4>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-600)", margin: 0 }}>
                Kontakta vår styrelse via e-post på{" "}
                <a href="mailto:kontakt@gospelss.org" style={{ color: "var(--color-turquoise-700)", fontWeight: 600 }}>
                  kontakt@gospelss.org
                </a>. Vi besvarar alla registerutdrag och raderingsförfrågningar inom 30 dagar.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

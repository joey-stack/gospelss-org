import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-canvas)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "4rem 0 2rem 0",
      }}
    >
      <div className="container-page">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <Image
              src="/assets/brand/logo-full.svg"
              alt="GOSPELS"
              width={140}
              height={32}
              style={{ marginBottom: "1rem" }}
            />
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-600)", lineHeight: 1.6 }}>
              Gospels är en registrerad svensk ideell förening (Org.nr: 802557-4883) med säte i
              Göteborg, Sverige. Verksamheten drivs för att förena unga människor genom helig tillbedjan och kostnadsfria konserter.
            </p>
          </div>

          <div>
            <h5 style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 700 }}>
              Gemenskap & Navigering
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "var(--text-sm)", lineHeight: 2 }}>
              <li>
                <Link href="/" style={{ color: "var(--color-charcoal-600)" }}>
                  Hem & Konserter
                </Link>
              </li>
              <li>
                <Link href="/om-oss" style={{ color: "var(--color-charcoal-600)" }}>
                  Om Oss & Teologi
                </Link>
              </li>
              <li>
                <Link href="/#partner" style={{ color: "var(--color-charcoal-600)" }}>
                  Kingdom Partners
                </Link>
              </li>
              <li>
                <Link href="/#volunteer" style={{ color: "var(--color-charcoal-600)" }}>
                  Bli Volontär
                </Link>
              </li>
              <li>
                <Link href="/admin" style={{ color: "var(--color-charcoal-600)" }}>
                  Administrationsportal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 700 }}>
              Gåvor & Stöd
            </h5>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-charcoal-700)", lineHeight: 1.8 }}>
              <strong>Swish:</strong> 123 557 48 83
              <br />
              <strong>Bankgiro:</strong> 5123-4567
              <br />
              <strong>Kingdom Partner:</strong> 150 SEK/mån via Stripe / Swish
            </p>
          </div>

          <div>
            <h5 style={{ fontSize: "var(--text-sm)", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 700 }}>
              Juridiskt & Skydd
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "var(--text-sm)", lineHeight: 2 }}>
              <li>
                <Link href="/integritetspolicy" style={{ color: "var(--color-charcoal-600)" }}>
                  Integritetspolicy (GDPR Art. 9)
                </Link>
              </li>
              <li>
                <Link href="/anvandarvillkor" style={{ color: "var(--color-charcoal-600)" }}>
                  Användarvillkor
                </Link>
              </li>
              <li>
                <Link href="/kontakt" style={{ color: "var(--color-charcoal-600)" }}>
                  Kontakt & Förbön
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "var(--text-xs)",
            color: "var(--color-charcoal-500)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p>© {new Date().getFullYear()} Gospels (Org.nr 802557-4883). Alla rättigheter förbehållna.</p>
          <p>Helig · Välkomnande · Livsförvandlande</p>
        </div>
      </div>
    </footer>
  );
}

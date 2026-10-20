import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-canvas)" }}>
      <Navbar />

      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8rem 1.5rem 6rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "rgba(20, 184, 166, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem auto",
            }}
          >
            <Compass size={32} style={{ color: "var(--color-turquoise-600)" }} />
          </div>

          <span className="badge-pill" style={{ marginBottom: "1rem", display: "inline-block" }}>
            404 · Sidan Kunde Inte Hittas
          </span>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 600,
              color: "var(--color-charcoal-900)",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Vilsen? Låt oss leda dig hem.
          </h1>

          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-charcoal-600)",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            Sidan du söker finns inte eller har flyttats. Gå gärna tillbaka till startsidan för att upptäcka
            våra kommande konserter eller lyssna på lovsång.
          </p>

          <Link href="/" className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Home size={16} />
            <span>Tillbaka till Startsidan</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

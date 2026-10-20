import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gospelss.org"),
  title: {
    default: "GOSPELS — Göteborgs Unga & Heliga Lovsång",
    template: "%s | GOSPELS",
  },
  description:
    "GOSPELS är en ideell förening (org.nr 802557-4883) i Göteborg som förenar unga människor genom helig tillbedjan, kostnadsfria lovsångskonserter och gemenskap.",
  keywords: [
    "GOSPELS",
    "lovsångskonsert Göteborg",
    "kristna konserter Göteborg",
    "Holy Spirit Worship",
    "kristen gemenskap unga",
    "ungdomskonsert",
    "ideell förening Göteborg",
  ],
  authors: [{ name: "Gospels", url: "https://gospelss.org" }],
  creator: "Gospels",
  publisher: "Gospels",
  icons: {
    icon: "/assets/brand/favicon.svg",
    apple: "/assets/brand/logo-mark.svg",
  },
  openGraph: {
    title: "GOSPELS — Göteborgs Unga & Heliga Lovsång",
    description:
      "Upplev helig tillbedjan och kostnadsfria konserter som förvandlar liv i Göteborg. En öppen kristen gemenskap för alla generationer.",
    url: "https://gospelss.org",
    siteName: "GOSPELS",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: "Gospels",
    alternateName: "GOSPELS",
    url: "https://gospelss.org",
    logo: "https://gospelss.org/assets/brand/logo-full.svg",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Göteborg",
        addressCountry: "SE",
      },
    },
    identifier: "802557-4883",
    description:
      "Ideell förening i Göteborg för lovsång, ungdomsgemenskap och kostnadsfria konserter.",
  };

  return (
    <html lang="sv" className={`${inter.variable} ${ebGaramond.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

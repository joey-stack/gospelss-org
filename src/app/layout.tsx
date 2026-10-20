import type { Metadata } from "next";
import { Inter, EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
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
    "GOSPELS är en ideell förening (org.nr 802557-4883) i Göteborg som förenar unga människor genom helig tillbedjan, 100% kostnadsfria lovsångskonserter och gemenskap.",
  keywords: [
    "GOSPELS",
    "gospelkonsert Göteborg",
    "kristna konserter Göteborg",
    "lovsångskonsert Göteborg",
    "Holy Spirit Worship Göteborg",
    "gratis konsert Göteborg",
    "kristen gemenskap unga",
    "ungdomskonsert",
    "ideell förening Göteborg",
    "gospel i Göteborg",
  ],
  authors: [{ name: "Gospels", url: "https://gospelss.org" }],
  creator: "Gospels",
  publisher: "Gospels",
  icons: {
    icon: "/assets/brand/favicon.svg",
    apple: "/assets/brand/logo-mark.svg",
  },
  alternates: {
    canonical: "https://gospelss.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "GOSPELS — Göteborgs Unga & Heliga Lovsång",
    description:
      "Upplev helig tillbedjan och 100% kostnadsfria konserter som förvandlar liv i Göteborg. En öppen kristen gemenskap för alla generationer.",
    url: "https://gospelss.org",
    siteName: "GOSPELS",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOSPELS — Göteborgs Unga & Heliga Lovsång",
    description:
      "Upplev helig tillbedjan och 100% kostnadsfria konserter i Göteborg. Org.nr: 802557-4883.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NonprofitOrganization",
        "@id": "https://gospelss.org/#organization",
        name: "Gospels",
        alternateName: "GOSPELS",
        url: "https://gospelss.org",
        logo: "https://gospelss.org/assets/brand/logo-full.svg",
        identifier: "802557-4883",
        taxID: "802557-4883",
        foundingLocation: {
          "@type": "Place",
          name: "Göteborg",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Göteborg",
            addressRegion: "Västra Götalands län",
            addressCountry: "SE",
          },
        },
        description:
          "Svensk ideell förening (org.nr 802557-4883) i Göteborg för helig tillbedjan, ungdomsgemenskap och 100% kostnadsfria konserter.",
        contactPoint: {
          "@type": "ContactPoint",
          email: "kontakt@gospelss.org",
          contactType: "customer support",
          areaServed: "SE",
          availableLanguage: ["Swedish", "English"],
        },
      },
      {
        "@type": "Event",
        "@id": "https://gospelss.org/#event-live",
        name: "GOSPELS Live: Helig Mark — Lovsångskonsert i Göteborg",
        description:
          "En kväll av helig tillbedjan, lovsång och förvandlade liv i hjärtat av Göteborg. 100% kostnadsfri entré för alla.",
        startDate: "2026-11-14T18:00:00+01:00",
        endDate: "2026-11-14T21:30:00+01:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        isAccessibleForFree: true,
        location: {
          "@type": "Place",
          name: "Trädgårdsföreningen / Göteborg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Slussgatan 1",
            addressLocality: "Göteborg",
            postalCode: "411 06",
            addressCountry: "SE",
          },
        },
        offers: {
          "@type": "Offer",
          url: "https://gospelss.org",
          price: "0",
          priceCurrency: "SEK",
          availability: "https://schema.org/InStock",
          validFrom: "2026-10-01T00:00:00+01:00",
        },
        organizer: {
          "@id": "https://gospelss.org/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://gospelss.org/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Kostar det något att gå på Gospels konserter?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nej. Alla konserter och samlingar med Gospels är 100% kostnadsfria för att alla ska kunna delta oavsett ekonomiska förutsättningar.",
            },
          },
          {
            "@type": "Question",
            name: "Hur anmäler jag mig till konserterna?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Du bokar enkelt din gratisplats på gospelss.org med endast ditt för- och efternamn samt e-postadress. Inget lösenord eller användarkonto krävs.",
            },
          },
          {
            "@type": "Question",
            name: "Hur hanteras konfidentiella böneämnen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Böneämnen skyddas enligt svensk GDPR Artikel 9 (känsliga personuppgifter med religiös anknytning). De publiceras aldrig offentligt och hanteras under strikt tystnadsplikt av själavårdare.",
            },
          },
          {
            "@type": "Question",
            name: "Kan man engagera sig som volontär om man är under 18 år?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ja. Gospels välkomnar unga volontärer, men sökande under 18 år måste ange kontaktuppgifter och inhämta skriftligt samtycke från målsman i enlighet med våra trygghetsrutiner.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="sv" className={`scroll-smooth ${inter.variable} ${hankenGrotesk.variable} ${ebGaramond.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Hoppa till huvudinnehåll
        </a>
        {children}
      </body>
    </html>
  );
}

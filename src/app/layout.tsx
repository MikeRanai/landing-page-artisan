import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { siteConfig } from "@/data/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: siteConfig.seo.titre,
  description: siteConfig.seo.description,
  metadataBase: new URL("https://entreprise-bm.re"),
  openGraph: {
    title: siteConfig.seo.titre,
    description: siteConfig.seo.description,
    locale: "fr_FR",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://entreprise-bm.re",
  name: siteConfig.entreprise.nom,
  description: siteConfig.seo.description,
  url: "https://entreprise-bm.re",
  telephone: "+262693877457",
  email: siteConfig.entreprise.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.entreprise.adresse.rue,
    postalCode: siteConfig.entreprise.adresse.codePostal,
    addressLocality: siteConfig.entreprise.adresse.ville,
    addressRegion: "La Réunion",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -21.009,
    longitude: 55.2708,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -21.1151,
      longitude: 55.5364,
    },
    geoRadius: "50000",
  },
  priceRange: "$$",
  image: "https://entreprise-bm.re/logo-entreprise-bm.svg",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.reponse,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}

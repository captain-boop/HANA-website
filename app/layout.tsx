import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://myhana.com";
const OG_IMAGE = "/og-hana.jpg";
const DESCRIPTION =
  "HANA, a 42.60m CRN motor yacht. Italian craftsmanship, reimagined for the modern Mediterranean. Available for private charter — 11 guests across 5 ensuite cabins.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "HANA — 42.6m CRN Motor Yacht | Mediterranean Charter",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "HANA — 42.6m CRN Motor Yacht | Mediterranean Charter",
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "HANA",
    locale: "en_GB",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "HANA — 42.60m CRN motor yacht under way in the Mediterranean",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HANA — 42.6m CRN Motor Yacht | Mediterranean Charter",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#eae5d8",
  width: "device-width",
  initialScale: 1,
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HANA — Private Yacht Charter",
  serviceType: "Luxury motor yacht charter",
  description: DESCRIPTION,
  image: `${SITE_URL}${OG_IMAGE}`,
  url: SITE_URL,
  areaServed: {
    "@type": "Place",
    name: "Mediterranean",
  },
  provider: {
    "@type": "Organization",
    name: "HANA",
    email: "captain@myhana.com",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} no-js`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}

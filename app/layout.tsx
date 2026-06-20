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

export const metadata: Metadata = {
  title: "HANA — 42.6m CRN Motor Yacht · Mediterranean Charter",
  description:
    "HANA, a 42.60m CRN motor yacht. Italian craftsmanship, reimagined for the modern Mediterranean. Available for charter from €150,000 per week.",
  openGraph: {
    title: "HANA — 42.6m CRN Motor Yacht",
    description:
      "Italian craftsmanship, reimagined for the modern Mediterranean. Mediterranean charter from €150,000 per week.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#eae5d8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} no-js`}>
      <body>{children}</body>
    </html>
  );
}

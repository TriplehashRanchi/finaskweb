import { Playfair_Display, Manrope, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

const siteUrl = "https://www.finaskvalue.com";
const defaultTitle = "FinAsk Value | Wealth Management, Investment & Financial Planning";
const defaultDescription =
  "FinAsk Value helps individuals, families and businesses build, protect and grow wealth through personalized investment, tax and financial planning services across India.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | FinAsk Value",
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    siteName: "FinAsk Value",
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    images: [
      {
        url: "/logo1.webp",
        width: 1200,
        height: 630,
        alt: "FinAsk Value",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/logo1.webp"],
  },
};

import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=telma@300,400,500,700,900&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${playfair.variable} ${manrope.variable} ${greatVibes.variable} font-sans antialiased overflow-x-hidden`}
      >
        <Navbar />
        <ExitIntentPopup />
        {children}
      </body>
    </html>
  );
}

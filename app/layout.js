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

import { buildMetadata, SITE_URL } from "@/lib/seo";

const defaultTitle = "FinAsk Value | Wealth Management, Investment & Financial Planning";
const defaultDescription =
  "FinAsk Value helps individuals, families and businesses build, protect and grow wealth through personalized investment, tax and financial planning services across India.";

export const metadata = {
  ...buildMetadata({ title: defaultTitle, description: defaultDescription, path: "/" }),
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | FinAsk Value",
  },
};

import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import ExitIntentPopup from "@/components/ExitIntentPopup";

// Set to true to take the entire site down and show a "back soon" message.
// Set back to false to restore normal site behaviour.
const MAINTENANCE_MODE = true;

function MaintenanceScreen() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        background: "#0f172a",
        color: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: 520 }}>
        <h1 style={{ fontSize: "1.75rem", marginBottom: 12, fontWeight: 600 }}>
          We&rsquo;ll be back soon
        </h1>
        <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#cbd5e1", margin: 0 }}>
          FinAsk Value is currently undergoing scheduled maintenance. We should
          be back online shortly. Thank you for your patience.
        </p>
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=telma@300,400,500,700,900&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${playfair.variable} ${manrope.variable} ${greatVibes.variable} font-sans antialiased overflow-x-hidden`}
      >
        {MAINTENANCE_MODE ? (
          <MaintenanceScreen />
        ) : (
          <>
            <Navbar />
            <ExitIntentPopup />
            {children}
          </>
        )}
      </body>
    </html>
  );
}

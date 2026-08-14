import type { Metadata } from "next";
import { Public_Sans, Spectral } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

// Public Sans: the U.S. Web Design System's official typeface — distinctive,
// highly legible, and thematically apt for a diplomacy/policy association.
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Spectral: an editorial serif for headings — gives the institutional
// gravitas the brief asked for without the generic single-sans-everywhere look.
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: {
    default: `${siteConfig.orgName} (${siteConfig.orgAbbreviation})`,
    template: `%s | ${siteConfig.orgAbbreviation}`,
  },
  description:
    "The ICAP Fellows Association connects, elevates, and supports a global community of leaders working across diplomacy, foreign policy, government, nonprofit organizations, and the private sector.",
  openGraph: {
    type: "website",
    siteName: siteConfig.orgName,
    images: ["/images/og-placeholder.svg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${spectral.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

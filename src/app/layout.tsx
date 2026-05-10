import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LeadHud from "@/components/LeadHud";
import { LeadProvider } from "@/components/LeadContext";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Papa Pasta — The Colour in Your City Hasn't Been Claimed Yet",
  description:
    "Papa Pasta is a franchise RECRUITMENT WEAPON. The Living Crest™ lets you create your own crest, find an open territory, and apply to franchise.",
  openGraph: {
    title: "Papa Pasta — Franchise Your City",
    description: "2 crew. 40sqm. 11-month payback. The colour in your city hasn't been claimed yet.",
    locale: "en_ZA",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Papa Pasta",
  url: "https://papa-pasta.com",
  logo: "https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/crest-default.png",
  description: "Fresh pasta QSR franchise built for South African operators. 2 crew. 40sqm. 11-month payback.",
  areaServed: { "@type": "Country", name: "South Africa" },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-[color:var(--color-pp-primary)] focus:text-[color:var(--color-pp-cream)] focus:px-5 focus:py-3 focus:rounded-[var(--radius-lg)] focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <LeadProvider>
          <Nav />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <LeadHud />
          <Footer />
        </LeadProvider>
      </body>
    </html>
  );
}

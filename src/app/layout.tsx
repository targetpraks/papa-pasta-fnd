import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LeadHud from "@/components/LeadHud";
import { LeadProvider } from "@/components/LeadContext";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap", weight: ["400","500","600"]});

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LeadProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <LeadHud />
          <Footer />
        </LeadProvider>
      </body>
    </html>
  );
}

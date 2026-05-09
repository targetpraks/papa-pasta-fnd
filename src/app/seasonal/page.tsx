import type { Metadata } from "next";
import SeasonalClientPage from "./SeasonalClientPage";

export const metadata: Metadata = {
  title: "Curated Picks — Papa Pasta",
  description: "Twenty crests we'd sign under. Curated by our Franchise Director and brand team.",
  openGraph: {
    title: "Curated Picks — Papa Pasta",
    description: "The best crest designs from our community, hand-picked by the brand team.",
    locale: "en_ZA",
    type: "website",
  },
};

export default function SeasonalPage() {
  return <SeasonalClientPage />;
}

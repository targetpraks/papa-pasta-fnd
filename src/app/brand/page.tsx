import type { Metadata } from "next";
import BrandClientPage from "./BrandClientPage";

export const metadata: Metadata = {
  title: "Brand Story — Papa Pasta",
  description: "Two obsessions. One crest. Fresh pasta made every morning, and a Living Crest™ that belongs to your city.",
  openGraph: {
    title: "Brand Story — Papa Pasta",
    description: "Fresh pasta. Fresh identity. One crest per city.",
    locale: "en_ZA",
    type: "website",
  },
};

export default function BrandPage() {
  return <BrandClientPage />;
}

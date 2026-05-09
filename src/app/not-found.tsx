import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found — Papa Pasta",
  description: "The page you're looking for doesn't exist. Try the home page or explore territories.",
};

export default function NotFound() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[960px] mx-auto px-6 text-center">
        <div className="font-[family-name:var(--font-serif)] font-extrabold text-[clamp(80px,15vw,160px)] leading-none text-[color:var(--color-pp-primary)] opacity-10 mb-4">
          404
        </div>
        <h1 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4vw,56px)] mb-4">
          This territory hasn&apos;t been claimed yet.
        </h1>
        <p className="text-[19px] text-[color:var(--color-pp-mute)] max-w-[52ch] mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved. But there are plenty of open territories waiting for you.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-[color:var(--color-pp-primary)] text-white px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)] transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Back to home
          </Link>
          <Link
            href="/interest/"
            className="inline-flex items-center gap-2.5 border border-[color:var(--color-pp-line)] px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:bg-[rgba(10,22,40,0.03)] transition-all duration-200"
          >
            Explore territories
          </Link>
        </div>
      </div>
    </section>
  );
}

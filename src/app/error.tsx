"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log error to monitoring service
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[960px] mx-auto px-6 text-center">
        <div className="font-[family-name:var(--font-serif)] font-extrabold text-[clamp(60px,12vw,120px)] leading-none text-[color:var(--color-pp-primary)] opacity-10 mb-4">
          Oops
        </div>
        <h1 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4vw,56px)] mb-4">
          Something went wrong
        </h1>
        <p className="text-[19px] text-[color:var(--color-pp-mute)] max-w-[52ch] mx-auto mb-8">
          We hit a snag while loading this page. Try refreshing, or head back to a known good territory.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2.5 bg-[color:var(--color-pp-primary)] text-white px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)] transition-all duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 border border-[color:var(--color-pp-line)] px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:bg-[rgba(10,22,40,0.03)] transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Back to home
          </Link>
        </div>
        {error.digest && (
          <p className="mt-8 font-[family-name:var(--font-mono)] text-[11px] text-[color:var(--color-pp-mute)]">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </section>
  );
}

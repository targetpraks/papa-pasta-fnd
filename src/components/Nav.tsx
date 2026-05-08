"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CrestMini } from "@/components/Crest";
import { seasons } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/create/", label: "Crest Creator" },
  { href: "/brand/", label: "Brand" },
  { href: "/interest/", label: "Territories" },
  { href: "/franchise/", label: "Franchise" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/seasonal/", label: "Curated" },
];

function getCurrentSeasonKey(): "summer" | "autumn" | "winter" | "spring" {
  const month = new Date().getMonth() + 1;
  if (month >= 12 || month <= 2) return "summer";
  if (month <= 5) return "autumn";
  if (month <= 8) return "winter";
  return "spring";
}

export default function Nav() {
  const pathname = usePathname() ?? "/";
  const [seasonKey, setSeasonKey] = useState(getCurrentSeasonKey());
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setSeasonKey(getCurrentSeasonKey());
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const season = seasons[seasonKey];

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
      <div className="backdrop-blur-xl border-b border-[color:var(--color-pp-line)] bg-[color:var(--color-pp-paper)]/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-5">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <CrestMini style={{ width: 28, height: 32 }} />
            <span className="font-[family-name:var(--font-playfair)] font-extrabold text-xl tracking-wide whitespace-nowrap">Papa Pasta</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3.5 py-2 rounded-full text-[13px] font-medium transition-all ${
                  pathname === l.href
                    ? "bg-[rgba(10,22,40,0.08)] text-[color:var(--color-pp-ink)]"
                    : "text-[color:var(--color-pp-mute)] hover:text-[color:var(--color-pp-ink)] hover:bg-[rgba(10,22,40,0.04)]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-4 border-l border-[color:var(--color-pp-line)] text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-pp-mute)]">
              <span className="w-2 h-2 rounded-sm" style={{ background: season.primary }} />
              {season.name}
            </div>
            <Link
              href="/create/"
              className="ml-3 inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-pp-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-pp-paper)] bg-[color:var(--color-pp-navy)] text-white hover:-translate-y-0.5 hover:shadow-lg px-4 py-2.5 text-[13px]"
            >
              Create Your Crest
            </Link>
          </nav>

          <button
            className="lg:hidden ml-auto p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-pp-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-pp-paper)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-nav" className="lg:hidden bg-white border-b border-[color:var(--color-pp-line)] px-6 py-4 flex flex-col gap-2 shadow-lg">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium ${
                  pathname === l.href ? "bg-[rgba(10,22,40,0.08)] text-[color:var(--color-pp-ink)]" : "text-[color:var(--color-pp-mute)]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/create/"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-pp-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-white bg-[color:var(--color-pp-navy)] text-white px-4 py-3 text-sm"
            >
              Create Your Crest
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

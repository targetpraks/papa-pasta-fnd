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
      <div className="backdrop-blur-xl border-b border-[rgba(10,22,40,0.12)]">
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
                    ? "bg-[rgba(10,22,40,0.08)] text-[#0A1628]"
                    : "text-[rgba(10,22,40,0.56)] hover:text-[#0A1628] hover:bg-[rgba(10,22,40,0.04)]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-4 border-l border-[rgba(10,22,40,0.12)] text-[11px] uppercase tracking-[0.12em] text-[rgba(10,22,40,0.56)]">
              <span className="w-2 h-2 rounded-sm" style={{ background: season.primary }} />
              {season.name}
            </div>
            <Link
              href="/create/"
              className="ml-3 bg-[#0A1628] text-white px-4 py-2.5 rounded-full text-[13px] font-semibold hover:-translate-y-0.5 transition-transform"
            >
              Create Your Crest
            </Link>
          </nav>

          <button className="lg:hidden ml-auto p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-[rgba(10,22,40,0.12)] px-6 py-4 flex flex-col gap-2 shadow-lg">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium ${pathname === l.href ? "bg-[rgba(10,22,40,0.08)] text-[#0A1628]" : "text-[rgba(10,22,40,0.56)]"}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/create/" onClick={() => setMobileOpen(false)} className="mt-2 bg-[#0A1628] text-white text-center px-4 py-3 rounded-full text-sm font-semibold">Create Your Crest</Link>
          </div>
        )}
      </div>
    </header>
  );
}

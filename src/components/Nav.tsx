"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
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
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const season = seasons[seasonKey];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-[0_1px_3px_rgba(10,22,40,0.08)]" : ""}`}>
      <div className="backdrop-blur-xl border-b border-[color:var(--color-pp-line)] bg-[color:var(--color-pp-paper)]/85">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <CrestMini style={{ width: 28, height: 34 }} className="transition-transform duration-200 group-hover:scale-105" />
            <span className="font-[family-name:var(--font-serif)] font-extrabold text-lg tracking-wide whitespace-nowrap transition-colors duration-200 group-hover:text-[color:var(--color-pp-tertiary)]">
              Papa Pasta
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 ml-auto">
            {navLinks.map((l) => {
              const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-3.5 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[color:var(--color-pp-ink)]"
                      : "text-[color:var(--color-pp-mute)] hover:text-[color:var(--color-pp-ink)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-[rgba(10,22,40,0.06)] rounded-full"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              );
            })}
            <div className="flex items-center gap-2 pl-4 ml-2 border-l border-[color:var(--color-pp-line)]">
              <span className="w-2 h-2 rounded-sm shrink-0 transition-colors duration-500" style={{ background: season.primary }} />
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[color:var(--color-pp-mute)]">
                {season.name}
              </span>
            </div>
            <Link
              href="/create/"
              className="ml-3 inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-pp-tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-pp-paper)] bg-[color:var(--color-pp-primary)] text-[color:var(--color-pp-on-primary)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)] px-4 py-2.5 text-[13px]"
            >
              Create Crest
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          <button
            className="lg:hidden ml-auto p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-pp-tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-pp-paper)] transition-colors hover:bg-[rgba(10,22,40,0.04)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:hidden overflow-hidden bg-[color:var(--color-pp-white)] border-b border-[color:var(--color-pp-line)]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l, i) => {
                const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                        isActive
                          ? "bg-[rgba(10,22,40,0.06)] text-[color:var(--color-pp-ink)]"
                          : "text-[color:var(--color-pp-mute)] hover:text-[color:var(--color-pp-ink)] hover:bg-[rgba(10,22,40,0.03)]"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05 }}
                className="mt-2 pt-2 border-t border-[color:var(--color-pp-line)]"
              >
                <Link
                  href="/create/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full font-semibold bg-[color:var(--color-pp-primary)] text-[color:var(--color-pp-on-primary)] px-5 py-3 text-[15px] hover:-translate-y-0.5 transition-all"
                >
                  Create Your Crest
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
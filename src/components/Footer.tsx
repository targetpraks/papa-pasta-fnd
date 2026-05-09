"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { CrestMini } from "@/components/Crest";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Field";

const footerLinks = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/create/", label: "Crest Creator" },
    { href: "/brand/", label: "Brand Story" },
    { href: "/seasonal/", label: "Curated Picks" },
  ],
  franchise: [
    { href: "/interest/", label: "Territory Map" },
    { href: "/franchise/", label: "The Model" },
    { href: "/franchise/", label: "Apply" },
    { href: "/gallery/", label: "Community Gallery" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-[color:var(--color-pp-primary)] text-[color:var(--color-pp-cream)]">
      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <CrestMini style={{ width: 28, height: 36 }} />
              <span className="font-[family-name:var(--font-serif)] font-extrabold text-xl">Papa Pasta</span>
            </div>
            <p className="text-[15px] leading-relaxed text-[rgba(245,230,200,0.65)] max-w-[380px] mb-6">
              2 crew. 40sqm. 11-month payback. Fresh pasta QSR built for South African operators who want theatre, margin, and a crest of their own.
            </p>
            <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[rgba(245,230,200,0.4)]">Territory live</span>
              <span className="w-2 h-2 rounded-full bg-[color:var(--color-pp-available)] animate-pulse" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-[family-name:var(--font-serif)] font-bold text-base mb-5">Pages</h5>
            <ul className="space-y-3">
              {footerLinks.pages.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-sm text-[rgba(245,230,200,0.6)] hover:text-[color:var(--color-pp-cream)] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-[family-name:var(--font-serif)] font-bold text-base mb-5">Franchise</h5>
            <ul className="space-y-3">
              {footerLinks.franchise.map((l, i) => (
                <li key={l.href + l.label + i}>
                  <Link href={l.href} className="text-sm text-[rgba(245,230,200,0.6)] hover:text-[color:var(--color-pp-cream)] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="font-[family-name:var(--font-serif)] font-bold text-base mb-3">Newsletter</h5>
            <p className="text-sm text-[rgba(245,230,200,0.55)] mb-5 max-w-[320px]">
              Territory updates, seasonal drops, and franchise news — no spam, no fluff.
            </p>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[rgba(212,160,23,0.12)] border border-[rgba(212,160,23,0.3)] rounded-[var(--radius-lg)] px-4 py-3"
              >
                <p className="text-sm text-[color:var(--color-pp-tertiary)] font-medium">Thanks! You're on the list.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) { setSubmitted(true); }
                  else { setMsg("Please enter an email."); }
                }}
                className="flex gap-2"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setMsg(""); }}
                  placeholder="your@email.com"
                  className="flex-1 rounded-[var(--radius-pill)] px-4 py-2.5 bg-[rgba(245,230,200,0.06)] border border-[rgba(245,230,200,0.12)] text-[color:var(--color-pp-cream)] placeholder:text-[rgba(245,230,200,0.35)] focus-visible:border-[color:var(--color-pp-tertiary)] focus-visible:ring-offset-[color:var(--color-pp-primary)]"
                />
                <Button
                  type="submit"
                  className="bg-[color:var(--color-pp-tertiary)] text-[color:var(--color-pp-on-tertiary)] hover:brightness-110 hover:shadow-none hover:translate-y-0 rounded-[var(--radius-pill)] px-5 shrink-0"
                >
                  Subscribe
                </Button>
              </form>
            )}
            {msg && <span className="text-xs text-[color:var(--color-pp-tertiary)] mt-2 block">{msg}</span>}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(245,230,200,0.08)]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-xs text-[rgba(245,230,200,0.4)]">&copy; 2026 Papa Pasta &middot; Infinity Brands</span>
            <div className="flex items-center gap-6 text-xs text-[rgba(245,230,200,0.4)]">
              <span>POPIA</span>
              <span>Terms</span>
              <span>Privacy</span>
              <span>Cookies</span>
              <span>v3.1</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
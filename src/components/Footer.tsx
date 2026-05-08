"use client";

import Link from "next/link";
import { useState } from "react";
import { CrestMini } from "@/components/Crest";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Field";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <footer className="bg-[color:var(--color-pp-navy)] text-[color:var(--color-pp-cream)]">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <CrestMini style={{ width: 28, height: 36 }} />
              <span className="font-[family-name:var(--font-playfair)] font-extrabold text-xl">Papa Pasta</span>
            </div>
            <p className="text-sm leading-relaxed text-[rgba(245,230,200,0.7)] max-w-[340px]">
              2 crew. 40sqm. 11-month payback. Fresh pasta QSR built for South African operators who want theatre, margin, and a crest of their own.
            </p>
          </div>

          <div>
            <h5 className="font-[family-name:var(--font-playfair)] font-bold text-lg mb-5">Pages</h5>
            <ul className="space-y-2.5 text-sm text-[rgba(245,230,200,0.7)]">
              <li><Link href="/" className="hover:text-[color:var(--color-pp-cream)] transition-colors">Home</Link></li>
              <li><Link href="/create/" className="hover:text-[color:var(--color-pp-cream)] transition-colors">Crest Creator</Link></li>
              <li><Link href="/brand/" className="hover:text-[color:var(--color-pp-cream)] transition-colors">Brand Story</Link></li>
              <li><Link href="/seasonal/" className="hover:text-[color:var(--color-pp-cream)] transition-colors">Curated Picks</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-[family-name:var(--font-playfair)] font-bold text-lg mb-5">Franchise</h5>
            <ul className="space-y-2.5 text-sm text-[rgba(245,230,200,0.7)]">
              <li><Link href="/interest/" className="hover:text-[color:var(--color-pp-cream)] transition-colors">Territory Map</Link></li>
              <li><Link href="/franchise/" className="hover:text-[color:var(--color-pp-cream)] transition-colors">The Model</Link></li>
              <li><Link href="/franchise/" className="hover:text-[color:var(--color-pp-cream)] transition-colors">Apply</Link></li>
              <li><Link href="/gallery/" className="hover:text-[color:var(--color-pp-cream)] transition-colors">Community Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-[family-name:var(--font-playfair)] font-bold text-lg mb-5">Newsletter</h5>
            <p className="text-sm text-[rgba(245,230,200,0.7)] mb-4 max-w-[280px]">
              Get the latest territory updates, seasonal drops, and franchise news.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setMsg(email ? "Thanks! We'll be in touch." : "Please enter an email.");
              }}
              className="flex flex-col gap-2"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setMsg(""); }}
                placeholder="your@email.com"
                className="rounded-full px-4 py-2.5 bg-[rgba(245,230,200,0.08)] border border-[rgba(245,230,200,0.15)] text-[color:var(--color-pp-cream)] placeholder:text-[rgba(245,230,200,0.4)] focus-visible:ring-offset-[color:var(--color-pp-navy)]"
              />
              {msg && <span className="text-xs text-[color:var(--color-pp-gold)]">{msg}</span>}
              <Button type="submit" className="w-full bg-[color:var(--color-pp-gold)] text-[color:var(--color-pp-navy)] hover:brightness-105 hover:shadow-none hover:translate-y-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(245,230,200,0.1)] flex flex-col sm:flex-row justify-between text-xs text-[rgba(245,230,200,0.5)] gap-2">
          <span>&copy; 2026 Papa Pasta · Infinity Brands</span>
          <span>POPIA · Terms · Privacy · Cookies · v3.1</span>
        </div>
      </div>
    </footer>
  );
}

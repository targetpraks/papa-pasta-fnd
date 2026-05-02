"use client";

import Link from "next/link";
import { useState } from "react";
import { CrestMini } from "@/components/Crest";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <footer className="bg-[#0A1628] text-[#F5E6C8]">
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
              <li><Link href="/" className="hover:text-[#F5E6C8] transition-colors">Home</Link></li>
              <li><Link href="/create/" className="hover:text-[#F5E6C8] transition-colors">Crest Creator</Link></li>
              <li><Link href="/brand/" className="hover:text-[#F5E6C8] transition-colors">Brand Story</Link></li>
              <li><Link href="/seasonal/" className="hover:text-[#F5E6C8] transition-colors">Curated Picks</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-[family-name:var(--font-playfair)] font-bold text-lg mb-5">Franchise</h5>
            <ul className="space-y-2.5 text-sm text-[rgba(245,230,200,0.7)]">
              <li><Link href="/interest/" className="hover:text-[#F5E6C8] transition-colors">Territory Map</Link></li>
              <li><Link href="/franchise/" className="hover:text-[#F5E6C8] transition-colors">The Model</Link></li>
              <li><Link href="/franchise/" className="hover:text-[#F5E6C8] transition-colors">Apply</Link></li>
              <li><Link href="/gallery/" className="hover:text-[#F5E6C8] transition-colors">Community Gallery</Link></li>
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
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setMsg(""); }}
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 bg-[rgba(245,230,200,0.08)] border border-[rgba(245,230,200,0.15)] rounded-full text-sm text-[#F5E6C8] placeholder:text-[rgba(245,230,200,0.4)] focus:outline-none focus:border-[#D4A017]"
              />
              {msg && <span className="text-xs text-[#D4A017]">{msg}</span>}
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-[#D4A017] text-[#0A1628] rounded-full text-sm font-semibold hover:brightness-105 transition-all"
              >
                Subscribe
              </button>
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

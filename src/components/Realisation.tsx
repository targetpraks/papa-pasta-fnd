"use client";

import Link from "next/link";
import Crest from "./Crest";
import { Button } from "@/components/ui/Button";

interface CrestState {
  bg: { hex: string };
  outline: { hex: string };
  inner: { hex: string };
  name: string;
}

export default function Realisation({ crest, onClose }: { crest: CrestState; onClose: () => void }) {
  const bg = crest.bg.hex;
  const out = crest.outline.hex;
  const inn = crest.inner.hex;
  const nm = crest.name || "Your crest";

  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[rgba(10,22,40,0.92)] backdrop-blur-md p-6 overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[color:var(--color-pp-cream)] text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-pp-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(10,22,40,0.92)] rounded"
      >
        Close ✕
      </button>

      <div className="text-center mb-6">
        <div className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(245,230,200,0.6)] mb-3">The Realisation Moment™</div>
        <h2 className="font-[family-name:var(--font-playfair)] font-extrabold text-3xl md:text-4xl text-[color:var(--color-pp-cream)]">
          This is <em className="text-[color:var(--color-pp-gold)] not-italic font-medium">{nm}</em>.
          <br />This is how it shows up.</h2>
      </div>

      <div className="flex flex-wrap items-end justify-center gap-6 md:gap-10 mb-8">
        {/* Bag */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-[10px] font-[family-name:var(--font-jetbrains)] uppercase tracking-wider text-[rgba(245,230,200,0.5)]">01 · Takeaway bag</div>
          <svg viewBox="0 0 200 240" width="120" className="drop-shadow-2xl">
            <path d="M20 40 L180 40 L170 230 Q170 236 164 236 L36 236 Q30 236 30 230 Z" fill={bg} stroke={out} strokeWidth="2"/>
            <path d="M60 40 Q60 20 100 20 Q140 20 140 40" fill="none" stroke={out} strokeWidth="2.5"/>
            <g transform="translate(60 90) scale(0.25)"><Crest bg={bg} outline={out} inner={inn} /></g>
          </svg>
          <div className="text-[11px] text-[rgba(245,230,200,0.5)]">Branded bag</div>
        </div>

        {/* Cup */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-[10px] font-[family-name:var(--font-jetbrains)] uppercase tracking-wider text-[rgba(245,230,200,0.5)]">02 · Cup sleeve</div>
          <svg viewBox="0 0 200 240" width="120" className="drop-shadow-2xl">
            <path d="M50 60 L150 60 L160 220 Q160 226 154 226 L46 226 Q40 226 40 220 Z" fill={inn} stroke={out} strokeWidth="2"/>
            <rect x="36" y="100" width="128" height="60" fill={bg} stroke={out} strokeWidth="2"/>
            <g transform="translate(68 106) scale(0.15)"><Crest bg={bg} outline={out} inner={inn} /></g>
          </svg>
          <div className="text-[11px] text-[rgba(245,230,200,0.5)]">Take-away cup</div>
        </div>

        {/* Storefront */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-[10px] font-[family-name:var(--font-jetbrains)] uppercase tracking-wider text-[rgba(245,230,200,0.5)]">03 · Storefront</div>
          <svg viewBox="0 0 200 240" width="120" className="drop-shadow-2xl">
            <rect x="10" y="40" width="180" height="180" fill={inn} stroke={out} strokeWidth="2"/>
            <rect x="10" y="40" width="180" height="60" fill={bg} stroke={out} strokeWidth="2"/>
            <rect x="30" y="120" width="60" height="90" fill="none" stroke={out} strokeWidth="1.5"/>
            <rect x="110" y="120" width="60" height="90" fill="none" stroke={out} strokeWidth="1.5"/>
            <g transform="translate(78 44) scale(0.16)"><Crest bg={bg} outline={out} inner={inn} /></g>
          </svg>
          <div className="text-[11px] text-[rgba(245,230,200,0.5)]">Shopfront sign</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/interest/">
          <Button className="bg-[color:var(--color-pp-gold)] text-[color:var(--color-pp-navy)] hover:brightness-105 hover:shadow-none hover:translate-y-0">
            Express interest in a territory →
          </Button>
        </Link>
        <Button variant="inverted" onClick={onClose}>
          Keep tweaking
        </Button>
      </div>
    </div>
  );
}

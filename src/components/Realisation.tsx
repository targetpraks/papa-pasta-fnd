"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X, ArrowRight, Store, ShoppingBag, Coffee } from "lucide-react";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[rgba(10,22,40,0.92)] backdrop-blur-md p-6 overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[color:var(--color-pp-cream)] text-sm font-medium hover:text-[color:var(--color-pp-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-pp-tertiary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(10,22,40,0.92)] rounded transition-colors"
      >
        <X className="w-5 h-5 inline mr-1" />
        Close
      </button>

      <div className="text-center mb-8">
        <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[rgba(245,230,200,0.5)] mb-3">
          The Realisation Moment™
        </div>
        <h2 className="font-[family-name:var(--font-serif)] font-extrabold text-3xl md:text-4xl text-[color:var(--color-pp-cream)]">
          This is{" "}
          <em className="text-[color:var(--color-pp-tertiary)] not-italic font-medium">
            {nm}
          </em>
          .
          <br />
          This is how it shows up.
        </h2>
      </div>

      <div className="flex flex-wrap items-end justify-center gap-6 md:gap-10 mb-8">
        {/* Bag */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[rgba(245,230,200,0.5)] flex items-center gap-1">
            <ShoppingBag className="w-3 h-3" /> 01 · Takeaway bag
          </div>
          <div className="relative w-[120px] h-[160px]">
            <svg viewBox="0 0 200 260" className="w-full h-full drop-shadow-2xl">
              <path d="M30 50 L170 50 L160 240 Q160 246 154 246 L46 246 Q40 246 40 240 Z" fill={bg} stroke={out} strokeWidth="2" />
              <path d="M70 50 Q70 30 100 30 Q130 30 130 50" fill="none" stroke={out} strokeWidth="2.5" />
              <g transform="translate(50 80) scale(0.22)">
                <Crest bg={bg} outline={out} inner={inn} />
              </g>
            </svg>
          </div>
          <div className="text-[11px] text-[rgba(245,230,200,0.5)]">Branded bag</div>
        </div>

        {/* Cup */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[rgba(245,230,200,0.5)] flex items-center gap-1">
            <Coffee className="w-3 h-3" /> 02 · Cup sleeve
          </div>
          <div className="relative w-[120px] h-[160px]">
            <svg viewBox="0 0 200 260" className="w-full h-full drop-shadow-2xl">
              <path d="M50 70 L150 70 L160 230 Q160 236 154 236 L46 236 Q40 236 40 230 Z" fill={inn} stroke={out} strokeWidth="2" />
              <rect x="36" y="110" width="128" height="60" fill={bg} stroke={out} strokeWidth="2" />
              <g transform="translate(68 116) scale(0.14)">
                <Crest bg={bg} outline={out} inner={inn} />
              </g>
            </svg>
          </div>
          <div className="text-[11px] text-[rgba(245,230,200,0.5)]">Take-away cup</div>
        </div>

        {/* Storefront */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[rgba(245,230,200,0.5)] flex items-center gap-1">
            <Store className="w-3 h-3" /> 03 · Storefront
          </div>
          <div className="relative w-[120px] h-[160px]">
            <svg viewBox="0 0 200 260" className="w-full h-full drop-shadow-2xl">
              <rect x="10" y="50" width="180" height="190" fill={inn} stroke={out} strokeWidth="2" />
              <rect x="10" y="50" width="180" height="60" fill={bg} stroke={out} strokeWidth="2" />
              <rect x="30" y="130" width="60" height="100" fill="none" stroke={out} strokeWidth="1.5" />
              <rect x="110" y="130" width="60" height="100" fill="none" stroke={out} strokeWidth="1.5" />
              <g transform="translate(78 54) scale(0.14)">
                <Crest bg={bg} outline={out} inner={inn} />
              </g>
            </svg>
          </div>
          <div className="text-[11px] text-[rgba(245,230,200,0.5)]">Shopfront sign</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/interest/">
          <Button className="bg-[color:var(--color-pp-tertiary)] text-[color:var(--color-pp-on-tertiary)] hover:brightness-105 hover:shadow-none hover:translate-y-0">
            Express interest in a territory
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Button variant="inverted" onClick={onClose}>
          Keep tweaking
        </Button>
      </div>
    </motion.div>
  );
}

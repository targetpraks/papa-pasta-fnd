"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Crest from "@/components/Crest";

const heroHeads = {
  colour: (
    <>
      The colour in your city
      <br />
      <em className="text-[#C97B2A] not-italic font-medium">hasn't been claimed yet.</em>
    </>
  ),
  model: (
    <>
      2 crew. 40 sqm.
      <br />
      <em className="text-[#C97B2A] not-italic font-medium">11-month payback.</em>
    </>
  ),
  craft: (
    <>
      A crest for every city.
      <br />
      <em className="text-[#C97B2A] not-italic font-medium">Yours is missing.</em>
    </>
  ),
};

type HeroVariant = keyof typeof heroHeads;

const steps = [
  { n: 1, h: "Details", d: "Name, email, phone. A quiet handshake.", pts: "+0" },
  { n: 2, h: "Create", d: "Pick colours for three regions. There are no presets.", pts: "+10" },
  { n: 3, h: "Realisation", d: "See your crest on a bag, a cup, a storefront.", pts: "+5" },
  { n: 4, h: "Express Interest", d: "Choose a territory on the map.", pts: "+10" },
  { n: 5, h: "Apply", d: "Submit a full franchise application.", pts: "+20" },
  { n: 6, h: "Nurture", d: "Zoho-driven 8-email sequence to close.", pts: "+25" },
];

export default function HomePage() {
  const [heroVariant, setHeroVariant] = useState<HeroVariant>("model");
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      {/* HERO */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 mb-8">
              <span className="bg-[#0A1628] text-[#F5E6C8] px-2.5 py-1 rounded text-[11px] uppercase tracking-[0.1em]">
                Territory live
              </span>
              <span className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)]">
                Franchise network · South Africa · v3.1
              </span>
            </div>

            <div className="flex gap-2 mb-6">
              {( ["colour", "model", "craft"] as HeroVariant[] ).map((k) => (
                <button
                  key={k}
                  onClick={() => setHeroVariant(k)}
                  className={`text-[11px] font-medium px-3 py-1.5 rounded-full border transition-all ${
                    heroVariant === k
                      ? "bg-[#0A1628] text-white border-[#0A1628]"
                      : "bg-transparent text-[rgba(10,22,40,0.56)] border-[rgba(10,22,40,0.18)] hover:border-[rgba(10,22,40,0.3)]"
                  }`}
                >
                  {k === "colour" ? "Colour" : k === "model" ? "Unit model" : "Craft"}
                </button>
              ))}
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(42px,7vw,104px)]">
              {heroHeads[heroVariant]}
            </h1>

            <p className="mt-6 font-[family-name:var(--font-playfair)] italic text-[clamp(18px,2vw,26px)] text-[rgba(10,22,40,0.56)] max-w-[40ch]">
              Papa Pasta isn't a restaurant brand you buy into — it's a{" "}
              <b className="text-[#0A1628]">Living Crest™</b>{" "}
              you finish. Pick a colour. Plant a flag. Own the block.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/create/"
                className="inline-flex items-center gap-2.5 bg-[#0A1628] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Create your crest →
              </Link>
              <Link
                href="/interest/"
                className="inline-flex items-center gap-2.5 border border-[rgba(10,22,40,0.18)] px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-[rgba(10,22,40,0.04)] transition-all"
              >
                Explore territories
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-[rgba(10,22,40,0.12)] grid grid-cols-3 gap-6">
              {[
                { num: "14", label: "territories in discussion" },
                { num: "11", unit: "mo", label: "target payback" },
                { num: "40", unit: "sqm", label: "unit footprint" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-[family-name:var(--font-playfair)] text-[clamp(28px,3vw,40px)] font-bold leading-none tracking-[-0.03em]">
                    {s.num}
                    {s.unit && <small className="text-[0.55em] font-normal">{s.unit}</small>}
                  </div>
                  <div className="mt-2 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.12em] text-[rgba(10,22,40,0.56)]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
            className="relative aspect-[1/1.2] flex items-center justify-center"
          >
            <div
              className="absolute inset-[10%] rounded-full blur-[40px] opacity-60"
              style={{ background: "radial-gradient(circle at 50% 40%, rgba(201,123,42,0.3), transparent 65%)" }}
            />
            <Crest className="relative w-[82%] max-w-[480px] drop-shadow-2xl" />

            {/* Floating callouts */}
            <div className="absolute top-[8%] left-[-2%] bg-white border border-[rgba(10,22,40,0.12)] rounded-xl px-3.5 py-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] flex items-center gap-2 animate-fade-in">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
              Available — Stellenbosch
            </div>
            <div className="absolute top-[40%] right-[-4%] bg-white border border-[rgba(10,22,40,0.12)] rounded-xl px-3.5 py-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] flex items-center gap-2 animate-fade-in animate-delay-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              Under discussion — JHB Central
            </div>
            <div className="absolute bottom-[10%] left-[4%] bg-white border border-[rgba(10,22,40,0.12)] rounded-xl px-3.5 py-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] flex items-center gap-2 animate-fade-in animate-delay-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A1628]" />
              Committed — Sandton
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-[#0A1628] text-[#F5E6C8]">
        <div className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "14", l: "territories under discussion" },
            { n: "37", l: "founders have expressed interest" },
            { n: "4", l: "palettes rotate with the calendar" },
            { n: "1", l: "crest per city — yours or someone else's" },
          ].map((s) => (
            <div key={s.l}>
              <b className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)]">{s.n}</b>
              <div className="mt-1.5 text-sm text-[rgba(245,230,200,0.7)]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-16">
            <div>
              <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">
                <span className="w-6 h-px bg-current" />
                The Papa Pasta Model
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4.6vw,64px)]">
                Small box.
                <br />
                <em className="text-[#C97B2A] not-italic font-medium">Big margin.</em>
              </h2>
            </div>
            <p className="text-[19px] leading-relaxed text-[rgba(10,22,40,0.56)] max-w-[52ch]">
              Built for South African rental economics. Two operators, a 40-square-metre counter, and a menu trimmed to the pasta that actually sells. No freezers full of regret.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                h: "Investment",
                big: "R1.4m",
                unit: "est.",
                body: "Total investment range covers fit-out, equipment, franchise fee, and 90 days of working capital. Final figures pending finance review.",
              },
              {
                n: "02",
                h: "Speed",
                big: "11",
                unit: "months",
                body: "Modelled against a 40sqm inline unit in a high-footfall mall. Claim shown with the standard legal disclaimer on the Franchise page.",
              },
              {
                n: "03",
                h: "Support",
                big: "360°",
                unit: "",
                body: "Brand kits, supply chain, Zoho-driven lead nurture, seasonal drops — the franchisor carries the theatre so you can carry the margin.",
              },
            ].map((c) => (
              <div key={c.n} className="group relative bg-white rounded-2xl p-8 border border-[rgba(10,22,40,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">
                  {c.n} · {c.h}
                </div>
                <div className="font-[family-name:var(--font-playfair)] text-[clamp(40px,5vw,64px)] font-bold leading-none tracking-[-0.03em] mb-3">
                  {c.big}
                  {c.unit && <small className="text-[0.35em] font-normal italic">{c.unit}</small>}
                </div>
                <p className="text-sm leading-relaxed text-[rgba(10,22,40,0.56)]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image band*/}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <Image
            src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/franchise-store-concept.png"
            alt="Papa Pasta franchise store inline concept"
            width={1400}
            height={600}
            className="w-full rounded-2xl object-cover"
            priority
          />
        </div>
      </section>

      {/* 6-step journey */}
      <section className="py-20 md:py-28 bg-[#0A1628] text-[#F5E6C8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(245,230,200,0.6)] mb-6">
              <span className="w-6 h-px bg-current" />
              The six-step journey
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4.6vw,64px)]">
              Curious visitor
              <br />
              to <em className="text-[#D4A017] not-italic font-medium">signed franchisee.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((s) => (
              <button
                key={s.n}
                onClick={() => setCurrentStep(s.n)}
                className={`text-left rounded-xl p-5 border transition-all ${
                  currentStep === s.n
                    ? "bg-[rgba(245,230,200,0.08)] border-[#D4A017]"
                    : "bg-transparent border-[rgba(245,230,200,0.1)] hover:border-[rgba(245,230,200,0.25)]"
                }`}
              >
                <span className={`inline-block font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.14em] rounded px-2 py-1 mb-3 ${
                  currentStep === s.n ? "bg-[#D4A017] text-[#0A1628]" : "text-[rgba(245,230,200,0.5)]"
                }`}>
                  {s.pts}
                </span>
                <div className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.1em] text-[rgba(245,230,200,0.5)]">
                  Step {String(s.n).padStart(2, "0")}
                </div>
                <h4 className="font-[family-name:var(--font-playfair)] font-bold text-lg mt-2">{s.h}</h4>
                <p className="text-sm text-[rgba(245,230,200,0.65)] mt-2 leading-relaxed">{s.d}</p>
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/create/"
              className="inline-flex items-center gap-2.5 bg-[#D4A017] text-[#0A1628] px-6 py-3.5 rounded-full text-sm font-semibold hover:brightness-105 transition-all"
            >
              Start at step 1 →
            </Link>
            <Link
              href="/interest/"
              className="inline-flex items-center gap-2.5 border border-[rgba(245,230,200,0.3)] text-[#F5E6C8] px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-[rgba(245,230,200,0.05)] transition-all"
            >
              Skip ahead to the map
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="py-20 md:py-28">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">
            <span className="w-6 h-px bg-current" />
            One crest, one city
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4.6vw,64px)]">
            Pick the colour.
            <br />
            <em className="text-[#C97B2A] not-italic font-medium">Claim the block.</em>
          </h2>
          <p className="mt-5 text-[19px] text-[rgba(10,22,40,0.56)] max-w-[52ch] mx-auto">
            You don't browse a menu. You discover that the colour in your city hasn't been claimed yet.
          </p>
          <div className="mt-8">
            <Link
              href="/create/"
              className="inline-flex items-center gap-2.5 bg-[#0A1628] text-white px-8 py-4 rounded-full text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Begin the game →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Ruler } from "lucide-react";
import Crest from "@/components/Crest";

const heroHeads = {
  colour: (<>
    The colour in your city
    <br />
    <em className="text-[color:var(--color-pp-accent)] not-italic font-medium">hasn't been claimed yet.</em>
  </>),
  model: (<>
    2 crew. 40 sqm.
    <br />
    <em className="text-[color:var(--color-pp-accent)] not-italic font-medium">11-month payback.</em>
  </>),
  craft: (<>
    A crest for every city.
    <br />
    <em className="text-[color:var(--color-pp-accent)] not-italic font-medium">Yours is missing.</em>
  </>),
};
type HeroVariant = keyof typeof heroHeads;

const steps = [
  { n: 1, h: "Details", d: "Name, email, phone. A quiet handshake.", pts: "+0" },
  { n: 2, h: "Create", d: "Pick colours for three regions. No presets.", pts: "+10" },
  { n: 3, h: "Realisation", d: "See your crest on a bag, a cup, a storefront.", pts: "+5" },
  { n: 4, h: "Express Interest", d: "Choose a territory on the map.", pts: "+10" },
  { n: 5, h: "Apply", d: "Submit a full franchise application.", pts: "+20" },
  { n: 6, h: "Nurture", d: "Zoho-driven 8-email sequence to close.", pts: "+25" },
];

const stats = [
  { num: "14", label: "territories in discussion", icon: MapPin },
  { num: "11", unit: "mo", label: "target payback", icon: Clock },
  { num: "40", unit: "sqm", label: "unit footprint", icon: Ruler },
];

const socialStats = [
  { n: "14", l: "territories under discussion" },
  { n: "37", l: "founders have expressed interest" },
  { n: "4", l: "palettes rotate with the calendar" },
  { n: "1", l: "crest per city — yours or someone else's" },
];

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const [heroVariant, setHeroVariant] = useState<HeroVariant>("model");
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      {/* HERO */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 mb-8">
              <span className="bg-[color:var(--color-pp-primary)] text-[color:var(--color-pp-cream)] px-2.5 py-1 rounded-[var(--radius-sm)] text-[11px] uppercase tracking-[0.1em] font-semibold">
                Territory live
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-pp-mute)]">
                Franchise network · South Africa · v3.1
              </span>
            </div>

            <div className="flex gap-2 mb-6">
              {(["colour", "model", "craft"] as HeroVariant[]).map((k) => (
                <button
                  key={k}
                  onClick={() => setHeroVariant(k)}
                  className={`text-[11px] font-semibold px-4 py-2 rounded-[var(--radius-pill)] border transition-all duration-200 ${
                    heroVariant === k
                      ? "bg-[color:var(--color-pp-primary)] text-white border-[color:var(--color-pp-primary)]"
                      : "bg-transparent text-[color:var(--color-pp-mute)] border-[color:var(--color-pp-line)] hover:border-[color:var(--color-pp-primary)] hover:text-[color:var(--color-pp-ink)]"
                  }`}
                >
                  {k === "colour" ? "Colour" : k === "model" ? "Unit model" : "Craft"}
                </button>
              ))}
            </div>

            <motion.h1
              key={heroVariant}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(42px,7vw,104px)]"
            >
              {heroHeads[heroVariant]}
            </motion.h1>

            <p className="mt-6 font-[family-name:var(--font-serif)] italic text-[clamp(18px,2vw,26px)] text-[color:var(--color-pp-mute)] max-w-[40ch]">
              Papa Pasta isn't a restaurant brand you buy into — it's a{" "}
              <b className="text-[color:var(--color-pp-ink)] not-italic">Living Crest™</b>{" "}
              you finish. Pick a colour. Plant a flag. Own the block.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/create/"
                className="inline-flex items-center gap-2.5 bg-[color:var(--color-pp-primary)] text-white px-7 py-4 rounded-[var(--radius-pill)] text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)] transition-all duration-200"
              >
                Create your crest
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/interest/"
                className="inline-flex items-center gap-2.5 border border-[color:var(--color-pp-line)] px-7 py-4 rounded-[var(--radius-pill)] text-sm font-semibold hover:bg-[rgba(10,22,40,0.03)] hover:border-[rgba(10,22,40,0.2)] transition-all duration-200"
              >
                Explore territories
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-[color:var(--color-pp-line)] grid grid-cols-3 gap-6">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label}>
                    <div className="font-[family-name:var(--font-serif)] text-[clamp(28px,3vw,40px)] font-bold leading-none tracking-[-0.03em]">
                      {s.num}
                      {s.unit && <small className="text-[0.55em] font-normal">{s.unit}</small>}
                    </div>
                    <div className="mt-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[color:var(--color-pp-mute)] flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
            className="relative aspect-[1/1.2] flex items-center justify-center"
          >
            <div
              className="absolute inset-[10%] rounded-full blur-[40px] opacity-50"
              style={{ background: "radial-gradient(circle at 50% 40%, rgba(201,123,42,0.35), transparent 65%)" }}
            />
            <Crest className="relative w-[82%] max-w-[420px] drop-shadow-2xl" />
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-[10%] left-[-2%] bg-white border border-[color:var(--color-pp-line)] rounded-[var(--radius-lg)] px-3.5 py-2.5 font-[family-name:var(--font-mono)] text-[11px] flex items-center gap-2 shadow-[var(--shadow-1)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-pp-available)]" />
              Available — Stellenbosch
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute top-[38%] right-[-4%] bg-white border border-[color:var(--color-pp-line)] rounded-[var(--radius-lg)] px-3.5 py-2.5 font-[family-name:var(--font-mono)] text-[11px] flex items-center gap-2 shadow-[var(--shadow-1)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-pp-discussion)]" />
              Under discussion — JHB Central
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-[12%] left-[4%] bg-white border border-[color:var(--color-pp-line)] rounded-[var(--radius-lg)] px-3.5 py-2.5 font-[family-name:var(--font-mono)] text-[11px] flex items-center gap-2 shadow-[var(--shadow-1)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-pp-committed)]" />
              Committed — Sandton
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-[color:var(--color-pp-primary)] text-[color:var(--color-pp-cream)]">
        <div className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {socialStats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <b className="text-3xl md:text-4xl font-[family-name:var(--font-serif)]">{s.n}</b>
              <div className="mt-1.5 text-sm text-[rgba(245,230,200,0.7)]">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-16">
              <div>
                <div className="kicker mb-6">The Papa Pasta Model</div>
                <h2 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4.6vw,64px)]">
                  Small box.
                  <br />
                  <em className="text-[color:var(--color-pp-accent)] not-italic font-medium">Big margin.</em>
                </h2>
              </div>
              <p className="text-[19px] leading-relaxed text-[color:var(--color-pp-mute)] max-w-[52ch]">
                Built for South African rental economics. Two operators, a 40-square-metre counter, and a menu trimmed to the pasta that actually sells. No freezers full of regret.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "01", h: "Investment", big: "R1.4m", unit: "est.", body: "Total investment range covers fit-out, equipment, franchise fee, and 90 days of working capital. Final figures pending finance review." },
              { n: "02", h: "Speed", big: "11", unit: "months", body: "Modelled against a 40sqm inline unit in a high-footfall mall. Claim shown with the standard legal disclaimer on the Franchise page." },
              { n: "03", h: "Support", big: "360°", unit: "", body: "Brand kits, supply chain, Zoho-driven lead nurture, seasonal drops — the franchisor carries the theatre so you can carry the margin." },
            ].map((c, i) => (
              <SectionReveal key={c.n} delay={i * 0.1}>
                <div className="group relative bg-white rounded-[var(--radius-xl)] p-8 border border-[color:var(--color-pp-line)] hover:shadow-[var(--shadow-2)] hover:-translate-y-1 transition-all duration-300">
                  <div className="kicker mb-6">{c.n} · {c.h}</div>
                  <div className="font-[family-name:var(--font-serif)] text-[clamp(40px,5vw,64px)] font-bold leading-none tracking-[-0.03em] mb-3">
                    {c.big}
                    {c.unit && <small className="text-[0.35em] font-normal italic">{c.unit}</small>}
                  </div>
                  <p className="text-sm leading-relaxed text-[color:var(--color-pp-mute)]">{c.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Store concept image */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionReveal>
            <Image
              src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/franchise-store-concept.png"
              alt="Papa Pasta franchise store inline concept"
              width={1400}
              height={600}
              className="w-full rounded-[var(--radius-xl)] object-cover border border-[color:var(--color-pp-line)]"
              priority
            />
          </SectionReveal>
        </div>
      </section>

      {/* Product range strip */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <Image
                src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/product-range.png"
                alt="Papa Pasta product range"
                width={600}
                height={400}
                className="w-full rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] object-cover"
              />
              <Image
                src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/central-kitchen-concept.png"
                alt="Central kitchen concept"
                width={600}
                height={400}
                className="w-full rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] object-cover"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Franchisee Identity Showcase */}
      <section className="py-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="kicker mb-4">Living Crest in the wild</div>
                <h3 className="font-[family-name:var(--font-serif)] font-bold text-2xl">Every franchisee gets a unique identity.</h3>
              </div>
              <p className="text-sm text-[color:var(--color-pp-mute)] max-w-[40ch]">
                Not a template. Not a Canva download. A full brand system generated from the crest you create.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <Image
                  key={n}
                  src={`https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/franchisee-logos-batch-${n}.png`}
                  alt={`Franchisee logo batch ${n}`}
                  width={300}
                  height={300}
                  className="w-full rounded-[var(--radius-lg)] border border-[color:var(--color-pp-line)] object-cover bg-white"
                />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 6-step journey — dark section */}
      <section className="py-20 md:py-28 bg-[color:var(--color-pp-primary)] text-[color:var(--color-pp-cream)]">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal>
            <div className="mb-12">
              <div className="kicker kicker-dark mb-6">The six-step journey</div>
              <h2 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4.6vw,64px)]">
                Curious visitor
                <br />
                to{" "}
                <em className="text-[color:var(--color-pp-tertiary)] not-italic font-medium">
                  signed franchisee.
                </em>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((s) => (
              <button
                key={s.n}
                onClick={() => setCurrentStep(s.n)}
                className={`text-left rounded-[var(--radius-lg)] p-5 border transition-all duration-200 ${
                  currentStep === s.n
                    ? "bg-[rgba(245,230,200,0.06)] border-[color:var(--color-pp-tertiary)]"
                    : "bg-transparent border-[rgba(245,230,200,0.1)] hover:border-[rgba(245,230,200,0.25)]"
                }`}
              >
                <span
                  className={`inline-block font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] rounded-[var(--radius-sm)] px-2 py-1 mb-3 ${
                    currentStep === s.n
                      ? "bg-[color:var(--color-pp-tertiary)] text-[color:var(--color-pp-on-tertiary)]"
                      : "text-[rgba(245,230,200,0.5)]"
                  }`}
                >
                  {s.pts}
                </span>
                <div className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[rgba(245,230,200,0.5)]">
                  Step {String(s.n).padStart(2, "0")}
                </div>
                <h4 className="font-[family-name:var(--font-serif)] font-bold text-lg mt-2">{s.h}</h4>
                <p className="text-sm text-[rgba(245,230,200,0.65)] mt-2 leading-relaxed">{s.d}</p>
              </button>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/create/"
              className="inline-flex items-center gap-2.5 bg-[color:var(--color-pp-tertiary)] text-[color:var(--color-pp-on-tertiary)] px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:brightness-105 transition-all duration-200"
            >
              Start at step 1
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/interest/"
              className="inline-flex items-center gap-2.5 border border-[rgba(245,230,200,0.2)] text-[color:var(--color-pp-cream)] px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:bg-[rgba(245,230,200,0.05)] transition-all duration-200"
            >
              Skip ahead to the map
            </Link>
          </div>
        </div>
      </section>

      {/* Colour story strip */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal>
            <div className="grid md:grid-cols-3 gap-6">
              <Image
                src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/colour-story-colour-reveal.png"
                alt="Colour reveal"
                width={400}
                height={300}
                className="w-full rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] object-cover"
              />
              <Image
                src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/colour-story-zone-map.png"
                alt="Zone map"
                width={400}
                height={300}
                className="w-full rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] object-cover"
              />
              <Image
                src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/colour-story-vs-traditional.png"
                alt="Colour vs traditional"
                width={400}
                height={300}
                className="w-full rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] object-cover"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Collectible Bowl Series */}
      <section className="py-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="kicker mb-4">Collectible Bowl Series</div>
                <h3 className="font-[family-name:var(--font-serif)] font-bold text-2xl">Ten bowl stories. One brand.</h3>
              </div>
              <p className="text-sm text-[color:var(--color-pp-mute)] max-w-[40ch]">
                Each franchisee gets a founding crest bowl. Seasonal drops, city editions, and collaboration series follow.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                "bowl-01-founding-crest",
                "bowl-02-franchisee-colour-drops",
                "bowl-03-sa-heritage-series",
                "bowl-04-neon-gamer-series",
                "bowl-05-takeover-partner-bowls",
                "bowl-06-local-artist-collab",
                "bowl-07-seasonal-harvest",
                "bowl-08-city-edition",
                "bowl-09-glow-in-dark",
                "bowl-10-rugby-sports-edition",
              ].map((name) => (
                <Image
                  key={name}
                  src={`https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/${name}.png`}
                  alt={name.replace(/-/g, " ")}
                  width={300}
                  height={300}
                  className="w-full rounded-[var(--radius-lg)] border border-[color:var(--color-pp-line)] object-cover bg-white"
                />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="py-20 md:py-28">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <SectionReveal>
            <div className="kicker mb-6">One crest, one city</div>
            <h2 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4.6vw,64px)]">
              Pick the colour.
              <br />
              <em className="text-[color:var(--color-pp-accent)] not-italic font-medium">Claim the block.</em>
            </h2>
            <p className="mt-5 text-[19px] text-[color:var(--color-pp-mute)] max-w-[52ch] mx-auto">
              You don't browse a menu. You discover that the colour in your city hasn't been claimed yet.
            </p>
            <div className="mt-8">
              <Link
                href="/create/"
                className="inline-flex items-center gap-2.5 bg-[color:var(--color-pp-primary)] text-white px-8 py-4 rounded-[var(--radius-pill)] text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)] transition-all duration-200"
              >
                Begin the game
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

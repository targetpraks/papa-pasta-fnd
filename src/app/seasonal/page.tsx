"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Crest from "@/components/Crest";
import { galleryCrests, seasons } from "@/lib/data";

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

export default function SeasonalPage() {
  const picks = useMemo(() => {
    const curated = galleryCrests.filter((c) => c.curated).slice(0, 20);
    const padding = 20 - curated.length;
    if (padding <= 0) return curated;
    const extras = galleryCrests.filter((c) => !c.curated).sort((a, b) => b.votes - a.votes).slice(0, padding);
    return [...curated, ...extras];
  }, []);

  const season = seasons.autumn;

  const pickReviews = [
    "Restraint. The cream inner wins it.",
    "A Cape Town brand could wear this honestly.",
    "Regional palette, national confidence.",
    "Green that doesn't look like supermarket signage.",
    "Dense, earthy — reads on a 40sqm counter.",
    "Coastal without the cliché.",
    "High-contrast. Works on a storefront at 40m.",
    "Serifs holding against a warm base.",
    "Gold on navy still wins. Always will.",
    "Balanced. Ownable. Good.",
    "Warm without being beige.",
    "The fork pops at small scale.",
    "Classy restraint with edge.",
    "SA summer in a crest.",
    "Strong type contrast.",
    "Heritage colours, modern confidence.",
    "The kind of brand you'd queue for.",
    "Readable at 3cm. Important.",
    "This one feels like home.",
    "Subtle texture. Good work.",
  ];

  return (
    <>
      <section className="bg-[color:var(--color-pp-primary)] text-[color:var(--color-pp-cream)] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="kicker kicker-dark mb-6">Head office picks · Updated monthly</div>
          <h1 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4vw,64px)] mb-4">
            Twenty crests<br />
            <em className="text-[color:var(--color-pp-tertiary)] not-italic font-medium">we'd sign under.</em>
          </h1>
          <p className="text-lg md:text-xl text-[rgba(245,230,200,0.85)] max-w-[640px] mb-8 font-[family-name:var(--font-serif)] italic">
            Curated by our Franchise Director and brand team. Not the most-voted, not the newest — the ones we think could hold a territory.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/create/" className="inline-flex items-center gap-2.5 bg-[color:var(--color-pp-tertiary)] text-[color:var(--color-pp-on-tertiary)] px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:brightness-105 transition-all">
              Submit your crest <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/gallery/" className="inline-flex items-center gap-2.5 border border-[rgba(245,230,200,0.2)] text-[color:var(--color-pp-cream)] px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:bg-[rgba(245,230,200,0.05)] transition-all">
              See the full gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {picks.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.05, duration: 0.4 }}
                className="bg-white rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] p-6 hover:shadow-[var(--shadow-2)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[color:var(--color-pp-mute)]">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-[var(--radius-sm)] ${c.curated ? "bg-[color:var(--color-pp-tertiary)] text-[color:var(--color-pp-on-tertiary)]" : "bg-[rgba(10,22,40,0.05)] text-[color:var(--color-pp-mute)]"}`}>
                    {c.curated ? "Curated" : "Community"}
                  </span>
                </div>
                <div className="flex justify-center">
                  <Crest bg={c.bg} outline={c.outline} inner={c.inner} size={100} />
                </div>
                <div className="mt-4">
                  <div className="font-[family-name:var(--font-serif)] font-bold text-lg">{c.name}</div>
                  <div className="text-[11px] text-[color:var(--color-pp-mute)]">{c.city} · {c.author}</div>
                </div>
                <p className="mt-3 text-sm text-[color:var(--color-pp-mute)] leading-relaxed">
                  {pickReviews[i] || "A strong contender."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <div className="kicker mb-6">Seasonal drop</div>
          <h2 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4vw,64px)] mb-4">
            {season.name}<br />
            <em className="text-[color:var(--color-pp-accent)] not-italic font-medium">Autumn Harvest.</em>
          </h2>
          <p className="text-[19px] text-[color:var(--color-pp-mute)] max-w-[52ch] mx-auto mb-8">
            Four palettes rotate with the calendar. Every season brings new swatches to the Crest Creator. Current season runs {season.months}.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {Object.entries(seasons).map(([k, s]) => (
              <div key={k} className={`px-5 py-4 rounded-[var(--radius-lg)] border text-center transition-all duration-200 ${k === "autumn" ? "border-[color:var(--color-pp-tertiary)] bg-[rgba(212,160,23,0.06)]" : "border-[color:var(--color-pp-line)] bg-white hover:shadow-[var(--shadow-1)]"}`}>
                <div className="w-8 h-8 rounded-full mx-auto mb-2 shadow-[var(--shadow-1)]" style={{ background: s.primary }} />
                <div className="text-sm font-semibold">{s.name}</div>
                <div className="text-[11px] text-[color:var(--color-pp-mute)]">{s.months}</div>
              </div>
            ))}
          </div>
          <Image src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/colour-story-colour-wheel.png" alt="Colour wheel" width={800} height={400} className="mx-auto rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)]" />
        </div>
      </section>
    </>
  );
}

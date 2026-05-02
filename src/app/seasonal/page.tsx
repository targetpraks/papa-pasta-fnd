"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Crest from "@/components/Crest";
import { galleryCrests, seasons } from "@/lib/data";

export default function SeasonalPage() {
  const picks = useMemo(() => {
    const curated = galleryCrests.filter((c) => c.curated).slice(0, 20);
    const padding = 20 - curated.length;
    if (padding <= 0) return curated;
    const extras = galleryCrests.filter((c) => !c.curated).sort((a,b) => b.votes - a.votes).slice(0, padding);
    return [...curated, ...extras];
  }, []);

  const season = seasons.autumn;

  return (
    <>
      <section className="bg-[#0A1628] text-[#F5E6C8] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(245,230,200,0.7)] mb-6">
            Head office picks · Updated monthly
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4vw,64px)] mb-4">
            Twenty crests<br /><em className="text-[#D4A017] not-italic font-medium">we'd sign under.</em>
          </h1>
          <p className="text-lg md:text-xl text-[rgba(245,230,200,0.85)] max-w-[640px] mb-8 font-[family-name:var(--font-playfair)] italic">
            Curated by our Franchise Director and brand team. Not the most-voted, not the newest — the ones we think could hold a territory.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/create/" className="inline-flex items-center gap-2.5 bg-[#D4A017] text-[#0A1628] px-6 py-3.5 rounded-full text-sm font-semibold hover:brightness-105 transition-all">Submit your crest →</Link>
            <Link href="/gallery/" className="inline-flex items-center gap-2.5 border border-[rgba(245,230,200,0.4)] text-[#F5E6C8] px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-[rgba(245,230,200,0.05)] transition-all">See the full gallery</Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {picks.map((c, i) => (
              <div key={c.name} className="bg-white rounded-2xl border border-[rgba(10,22,40,0.08)] p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[rgba(10,22,40,0.46)]">{String(i+1).padStart(2,"0")}</span>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${c.curated?"bg-[#D4A017] text-[#0A1628]":"bg-[rgba(10,22,40,0.05)] text-[rgba(10,22,40,0.46)]"}`}>
                    {c.curated ? "Curated" : "Community"}
                  </span>
                </div>
                <Crest bg={c.bg} outline={c.outline} inner={c.inner} size={100} />
                <div className="mt-4">
                  <div className="font-[family-name:var(--font-playfair)] font-bold text-lg">{c.name}</div>
                  <div className="text-[11px] text-[rgba(10,22,40,0.46)]">{c.city} · {c.author}</div>
                </div>
                <p className="mt-3 text-sm text-[rgba(10,22,40,0.56)] leading-relaxed">
                  {i===0?"Restraint. The cream inner wins it.":i===1?"A Cape Town brand could wear this honestly.":i===2?"Regional palette, national confidence.":i===3?"Green that doesn't look like supermarket signage.":i===4?"Dense, earthy — reads on a 40sqm counter.":i===5?"Coastal without the cliché.":i===6?"High-contrast. Works on a storefront at 40m.":i===7?"Serifs holding against a warm base.":i===8?"Gold on navy still wins. Always will.":"Balanced. Ownable. Good."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">
            <span className="w-6 h-px bg-current" />Seasonal drop
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4vw,64px)] mb-4">
            {season.name}<br />
            <em className="text-[#C97B2A] not-italic font-medium">Autumn Harvest.</em>
          </h2>
          <p className="text-[19px] text-[rgba(10,22,40,0.56)] max-w-[52ch] mx-auto mb-8">
            Four palettes rotate with the calendar. Every season brings new swatches to the Crest Creator. Current season runs {season.months}.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {Object.entries(seasons).map(([k, s]) => (
              <div key={k} className={`px-5 py-4 rounded-xl border text-center ${k==="autumn"?"border-[#D4A017] bg-[rgba(212,160,23,0.06)]":"border-[rgba(10,22,40,0.08)] bg-white"}`}>
                <div className="w-8 h-8 rounded-full mx-auto mb-2" style={{ background: s.primary }} />
                <div className="text-sm font-semibold">{s.name}</div>
                <div className="text-[11px] text-[rgba(10,22,40,0.46)]">{s.months}</div>
              </div>
            ))}
          </div>
          <Image src="https://raw.githubusercontent.com/targetpraks/papa-pasta-assets/main/images/colour-story-colour-wheel.png" alt="Colour wheel" width={800} height={400} className="mx-auto rounded-2xl" />
        </div>
      </section>
    </>
  );
}

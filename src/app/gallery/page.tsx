"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Crest from "@/components/Crest";
import { galleryCrests } from "@/lib/data";

const views = [
  { k: "top10", label: "Top 10" },
  { k: "top50", label: "Top 50" },
  { k: "trending", label: "Trending" },
  { k: "newest", label: "Newest" },
  { k: "alpha", label: "A–Z" },
];

export default function GalleryPage() {
  const [view, setView] = useState("top10");
  const [voted, setVoted] = useState<Record<string, boolean>>({});

  const sorted = useMemo(() => {
    const copy = [...galleryCrests];
    if (view === "newest") copy.sort((a, b) => a.daysAgo - b.daysAgo);
    else if (view === "alpha") copy.sort((a, b) => a.name.localeCompare(b.name));
    else copy.sort((a, b) => b.votes - a.votes);
    return copy.slice(0, view === "top10" ? 10 : view === "top50" ? 50 : copy.length);
  }, [view]);

  const showBadges = view === "top10" || view === "top50";

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">
            <span className="w-6 h-px bg-current" />Community gallery · {galleryCrests.length} crests
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(36px,5vw,72px)] mb-4">
            The leaderboard of <em className="text-[#C97B2A] not-italic font-medium">unclaimed cities.</em>
          </h1>
          <p className="text-[19px] text-[rgba(10,22,40,0.56)] max-w-[52ch]">
            Every crest here was made by a visitor who saw a gap. Vote for the ones you'd sign under. The leaders are the ones we start conversations with.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex gap-2">
            {views.map((v) => (
              <button key={v.k} onClick={() => setView(v.k)} className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-all ${view===v.k?"bg-[#0A1628] text-white border-[#0A1628]":"text-[rgba(10,22,40,0.56)] border-[rgba(10,22,40,0.12)] hover:border-[rgba(10,22,40,0.3)]"}`}>
                {v.label}
              </button>
            ))}
          </div>
          <div className="text-sm text-[rgba(10,22,40,0.46)]">Showing <b>{sorted.length}</b> of {galleryCrests.length}</div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sorted.map((c, i) => {
            const rank = i + 1;
            const v = c.votes + (voted[c.name] ? 1 : 0);
            const rankCls = rank === 1 ? "bg-[#D4A017] text-[#0A1628]" : rank === 2 ? "bg-[rgba(10,22,40,0.7)] text-[#F5E6C8]" : rank === 3 ? "bg-[#8B4513] text-[#F5E6C8]" : "bg-[rgba(10,22,40,0.05)] text-[rgba(10,22,40,0.56)]";
            return (
              <div key={c.name} className="bg-white rounded-2xl border border-[rgba(10,22,40,0.08)] p-5 hover:shadow-lg hover:-translate-y-1 transition-all">
                {showBadges && (
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold mb-3 ${rankCls}`}>
                    <span>{String(rank).padStart(2,"0")}</span>
                    <span className="opacity-70 font-normal">{rank===1?"Gold":rank===2?"Silver":rank===3?"Bronze":""}</span>
                  </div>
                )}
                <Crest bg={c.bg} outline={c.outline} inner={c.inner} size={80} />
                <div className="mt-3">
                  <div className="font-[family-name:var(--font-playfair)] font-bold text-base">{c.name}</div>
                  <div className="text-[11px] text-[rgba(10,22,40,0.46)]">{c.author} · {c.city}</div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <button onClick={() => setVoted((prev) => ({ ...prev, [c.name]: !prev[c.name] }))} className={`text-sm font-semibold transition-colors ${voted[c.name]?"text-[#C97B2A]":"text-[#0A1628] hover:text-[#C97B2A]"}`}>
                    ♥ {v.toLocaleString()}
                  </button>
                  <span className="text-[10px] font-[family-name:var(--font-jetbrains)] uppercase tracking-wider text-[rgba(10,22,40,0.4)]">{c.daysAgo}d</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/create/" className="inline-flex items-center gap-2.5 bg-[#0A1628] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all">
            Create your own →
          </Link>
        </div>
      </div>
    </section>
  );
}

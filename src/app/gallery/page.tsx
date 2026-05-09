"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Award, TrendingUp } from "lucide-react";
import Crest from "@/components/Crest";
import { galleryCrests } from "@/lib/data";

const views = [
  { k: "top10", label: "Top 10", icon: Award },
  { k: "top50", label: "Top 50", icon: TrendingUp },
  { k: "trending", label: "Trending", icon: TrendingUp },
  { k: "newest", label: "Newest", icon: ArrowRight },
  { k: "alpha", label: "A–Z", icon: ArrowRight },
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

  const handleVote = useCallback((name: string) => {
    setVoted((prev) => ({ ...prev, [name]: !prev[name] }));
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-10">
          <div className="kicker mb-6">
            Community gallery · {galleryCrests.length} crests
          </div>
          <h1 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(36px,5vw,72px)] mb-4">
            The leaderboard of{" "}
            <span className="text-[color:var(--color-pp-accent)] font-medium">
              unclaimed cities.
            </span>
          </h1>
          <p className="text-[19px] text-[color:var(--color-pp-mute)] max-w-[52ch]">
            Every crest here was made by a visitor who saw a gap. Vote for the ones you'd sign under. The leaders are the ones we start conversations with.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex gap-2">
            {views.map((v) => {
              const Icon = v.icon;
              return (
                <button
                  key={v.k}
                  onClick={() => setView(v.k)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-[var(--radius-pill)] text-[13px] font-semibold border transition-all duration-200 ${
                    view === v.k
                      ? "bg-[color:var(--color-pp-primary)] text-white border-[color:var(--color-pp-primary)]"
                      : "text-[color:var(--color-pp-mute)] border-[color:var(--color-pp-line)] hover:border-[color:var(--color-pp-primary)] hover:text-[color:var(--color-pp-ink)]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {v.label}
                </button>
              );
            })}
          </div>
          <div className="text-sm text-[color:var(--color-pp-mute)]">
            Showing <b>{sorted.length}</b> of {galleryCrests.length}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sorted.map((c, i) => {
            const rank = i + 1;
            const v = c.votes + (voted[c.name] ? 1 : 0);
            const rankCls =
              rank === 1
                ? "bg-[color:var(--color-pp-tertiary)] text-[color:var(--color-pp-on-tertiary)]"
                : rank === 2
                  ? "bg-[color:var(--color-pp-secondary)] text-[color:var(--color-pp-cream)]"
                  : rank === 3
                    ? "bg-[color:var(--color-pp-accent)] text-white"
                    : "bg-[rgba(10,22,40,0.05)] text-[color:var(--color-pp-mute)]";
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 5) * 0.05, duration: 0.4 }}
                className="bg-white rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] p-5 hover:shadow-[var(--shadow-2)] hover:-translate-y-1 transition-all duration-300"
              >
                {showBadges && (
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius-sm)] text-[10px] font-bold mb-3 ${rankCls}`}
                  >
                    <span>{String(rank).padStart(2, "0")}</span>
                    <span className="opacity-70 font-normal">
                      {rank === 1 ? "Gold" : rank === 2 ? "Silver" : rank === 3 ? "Bronze" : ""}
                    </span>
                  </div>
                )}
                <div className="flex justify-center">
                  <Crest bg={c.bg} outline={c.outline} inner={c.inner} size={80} />
                </div>
                <div className="mt-3">
                  <div className="font-[family-name:var(--font-serif)] font-bold text-base">{c.name}</div>
                  <div className="text-[11px] text-[color:var(--color-pp-mute)]">
                    {c.author} · {c.city}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <button
                    onClick={() => handleVote(c.name)}
                    className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                      voted[c.name]
                        ? "text-[color:var(--color-pp-error)]"
                        : "text-[color:var(--color-pp-ink)] hover:text-[color:var(--color-pp-error)]"
                    }`}
                    aria-label={voted[c.name] ? `Remove vote for ${c.name}` : `Vote for ${c.name}`}
                    aria-pressed={voted[c.name]}
                  >
                    <Heart
                      className={`w-4 h-4 ${voted[c.name] ? "fill-current" : ""}`}
                    />
                    {v.toLocaleString()}
                  </button>
                  <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[color:var(--color-pp-mute)]">
                    {c.daysAgo}d
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/create/"
            className="inline-flex items-center gap-2.5 bg-[color:var(--color-pp-primary)] text-white px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)] transition-all duration-200"
          >
            Create your own
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

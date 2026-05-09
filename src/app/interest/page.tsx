"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Users, Check } from "lucide-react";
import Crest from "@/components/Crest";
import { useLeadScore } from "@/components/LeadContext";
import { territories } from "@/lib/data";

const SA_PATHS: Record<string, { d: string; cx: number; cy: number; abbr: string; name: string }> = {
  "Northern Cape": { d: "m40,150 l100,-20 l30,40 l-10,30 l-40,20 l-100,-25 z", cx: 90, cy: 175, abbr: "NC", name: "Northern Cape" },
  "Western Cape": { d: "m30,200 l70,10 l40,10 l-10,50 l-60,5 l-30,-40 z", cx: 65, cy: 240, abbr: "WC", name: "Western Cape" },
  "Eastern Cape": { d: "m110,220 l80,-10 l40,20 l-20,30 l-80,10 z", cx: 160, cy: 245, abbr: "EC", name: "Eastern Cape" },
  "Free State": { d: "m130,150 l60,-5 l20,30 l-20,20 l-40,15 l-30,-30 z", cx: 165, cy: 175, abbr: "FS", name: "Free State" },
  "KwaZulu-Natal": { d: "m200,150 l40,-5 l30,20 l-10,30 l-40,10 l-20,-30 z", cx: 235, cy: 170, abbr: "KZN", name: "KwaZulu-Natal" },
  "Mpumalanga": { d: "m185,110 l55,-5 l25,20 l-15,25 l-50,5 z", cx: 220, cy: 130, abbr: "MP", name: "Mpumalanga" },
  "Limpopo": { d: "m150,50 l90,-5 l40,30 l-20,20 l-70,10 l-30,-25 z", cx: 200, cy: 70, abbr: "LP", name: "Limpopo" },
  "Gauteng": { d: "m160,100 l35,-5 l5,25 l-40,5 z", cx: 180, cy: 112, abbr: "GP", name: "Gauteng" },
  "North West": { d: "m95,80 l70,10 l15,25 l-30,15 l-45,-10 z", cx: 135, cy: 110, abbr: "NW", name: "North West" },
};

function SAMap({ selectedId, onProvinceClick }: { selectedId: string | null; onProvinceClick: (prov: string, firstId: string) => void }) {
  const stateOf = useMemo(() => {
    const cache: Record<string, string> = {};
    return (prov: string) => {
      if (cache[prov]) return cache[prov];
      const ts = territories.filter((t) => t.province === prov);
      const result = ts.some((t) => t.state === "committed") ? "committed" : ts.some((t) => t.state === "discussion") ? "discussion" : "available";
      cache[prov] = result;
      return result;
    };
  }, []);

  const [hovered, setHovered] = useState<string | null>(null);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, prov: string, firstId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onProvinceClick(prov, firstId);
    }
  }, [onProvinceClick]);

  return (
    <svg className="w-full h-auto" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map of South Africa showing franchise territories by province">
      <defs>
        <pattern id="p" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="transparent" />
          <circle cx="1" cy="1" r="0.3" fill="rgba(10,22,40,0.06)" />
        </pattern>
      </defs>
      <rect width="280" height="280" fill="url(#p)" />
      {Object.entries(SA_PATHS).map(([prov, { d, cx, cy, abbr }]) => {
        const cls = stateOf(prov);
        const sel = territories.some((t) => t.province === prov && t.id === selectedId);
        const firstId = territories.find((t) => t.province === prov)?.id ?? "";
        return (
          <g
            key={prov}
            role="button"
            tabIndex={0}
            aria-label={`${prov}: ${territories.filter((t) => t.province === prov).length} territories. Press Enter to select.`}
            onClick={() => onProvinceClick(prov, firstId)}
            onKeyDown={(e) => handleKeyDown(e, prov, firstId)}
            onMouseEnter={() => setHovered(prov)}
            onMouseLeave={() => setHovered(null)}
            className="cursor-pointer focus:outline-none"
          >
            <path d={d} className={`sa-province ${cls} ${sel ? "selected" : ""}`} />
            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              className="sa-province-label"
              fill={cls === "committed" ? "#F5E6C8" : "#0A1628"}
            >
              {abbr}
            </text>
          </g>
        );
      })}
      {(() => {
        if (!hovered) return null;
        const c = territories.filter((t) => t.province === hovered).length;
        return (
          <g>
            <rect x="180" y="10" width="90" height="40" rx="8" fill="#0A1628" />
            <text x="190" y="28" fill="#F5E6C8" fontFamily="var(--font-mono)" fontSize="10">
              {hovered?.toUpperCase()}
            </text>
            <text x="190" y="44" fill="rgba(245,230,200,0.7)" fontSize="11">
              {c} territories
            </text>
          </g>
        );
      })()}
    </svg>
  );
}

export default function InterestPage() {
  const { addPoints } = useLeadScore();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filterProvince, setFilterProvince] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selected = useMemo(() => territories.find((t) => t.id === selectedId), [selectedId]);
  const filtered = useMemo(() => filterProvince ? territories.filter((t) => t.province === filterProvince) : territories, [filterProvince]);

  const handleProvinceClick = useCallback((prov: string, firstId: string) => {
    setFilterProvince(prov);
    setSelectedId(firstId);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent || !form.email) return;
    setIsSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      addPoints(10);
      setSubmitted(true);
      setIsSubmitting(false);
    }, 800);
  }, [form, addPoints]);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-12">
          <div className="kicker mb-6">Step 04 — Express interest</div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8">
            <h1 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(36px,5vw,72px)]">
              Find the gap
              <br />
              <span className="text-[color:var(--color-pp-accent)] font-medium">
                in your city.
              </span>
            </h1>
            <p className="text-[19px] text-[color:var(--color-pp-mute)] max-w-[440px]">
              Every province is a palette. Green is open, amber is in conversation, navy is claimed. Click a province to drill down to territories.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="relative bg-white rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] p-6 shadow-[var(--shadow-1)]">
            <SAMap
              selectedId={selectedId}
              onProvinceClick={handleProvinceClick}
            />
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-pp-available)]" />
                Available
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-pp-discussion)]" />
                Under discussion
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-pp-committed)]" />
                Committed
              </div>
            </div>
            {filterProvince && (
              <button
                onClick={() => setFilterProvince(null)}
                className="absolute top-4 right-4 text-[11px] bg-[color:var(--color-pp-primary)] text-white px-3 py-1.5 rounded-[var(--radius-pill)] hover:-translate-y-0.5 transition-all"
              >
                Clear
              </button>
            )}
          </div>

          <div className="bg-white rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] overflow-hidden shadow-[var(--shadow-1)]">
            <div className="px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-pp-mute)] border-b border-[color:var(--color-pp-line)]">
              {filterProvince || "All provinces"} · {filtered.length}
            </div>
            <div className="max-h-[400px] overflow-y-auto" role="region" aria-label="Territory list">
              {filtered.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedId(t.id)}
                  className={`w-full text-left px-4 py-3 border-b border-[rgba(10,22,40,0.04)] flex items-center gap-3 hover:bg-[rgba(10,22,40,0.02)] transition-colors ${
                    selectedId === t.id ? "bg-[rgba(212,160,23,0.06)]" : ""
                  }`}
                >
                  <span
                    className={`shrink-0 w-2.5 h-2.5 rounded-full ${
                      t.state === "available"
                        ? "bg-[color:var(--color-pp-available)]"
                        : t.state === "discussion"
                          ? "bg-[color:var(--color-pp-discussion)]"
                          : "bg-[color:var(--color-pp-committed)]"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-[11px] text-[color:var(--color-pp-mute)]">
                      {t.province.toUpperCase()} · {t.interest} interested
                    </div>
                  </div>
                  {t.crest && <Crest bg={t.crest.bg} outline={t.crest.outline} inner={t.crest.inner} size={32} />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] p-6 shadow-[var(--shadow-1)]">
            {!selected && !submitted && (
              <div className="text-center py-12 text-[color:var(--color-pp-mute)]">
                <MapPin className="w-8 h-8 mx-auto mb-3 opacity-30" />
                <p className="font-[family-name:var(--font-serif)] italic text-lg">
                  Pick a territory on the map or list to see its status.
                </p>
              </div>
            )}
            {selected && !submitted && (
              <>
                <div className="mb-4">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--color-pp-mute)] mb-1">
                    {selected.province}
                  </div>
                  <h3 className="font-[family-name:var(--font-serif)] font-bold text-2xl">{selected.name}</h3>
                  <span
                    className={`inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-[var(--radius-sm)] text-[10px] uppercase tracking-[0.14em] font-semibold ${
                      selected.state === "available"
                        ? "bg-[color:var(--color-pp-available)] text-white"
                        : selected.state === "discussion"
                          ? "bg-[color:var(--color-pp-discussion)] text-white"
                          : "bg-[color:var(--color-pp-committed)] text-white"
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    {selected.state === "available"
                      ? "Available"
                      : selected.state === "discussion"
                        ? "Under discussion"
                        : "Committed"}
                  </span>
                </div>
                {selected.crest && (
                  <div className="my-4 flex justify-center">
                    <Crest
                      bg={selected.crest.bg}
                      outline={selected.crest.outline}
                      inner={selected.crest.inner}
                      size={120}
                    />
                  </div>
                )}
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-[color:var(--color-pp-mute)]">Interest</span>
                    <span className="font-semibold">{selected.interest} people</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[color:var(--color-pp-mute)]">Unit size</span>
                    <span className="font-semibold">40sqm inline</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[color:var(--color-pp-mute)]">Territory radius</span>
                    <span className="font-semibold">3km exclusive</span>
                  </div>
                </div>
                {selected.state === "committed" ? (
                  <div className="p-3 bg-[color:var(--color-pp-paper)] rounded-[var(--radius-md)] text-sm text-[color:var(--color-pp-mute)]">
                    Territory signed — view only.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-3">
                      <label className="block text-sm font-medium">Full name</label>
                      <input
                        required
                        placeholder="Full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        aria-label="Full name"
                      />
                      <label className="block text-sm font-medium">Email address</label>
                      <input
                        required
                        type="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        aria-label="Email address"
                      />
                      <label className="block text-sm font-medium">Phone number</label>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        aria-label="Phone number"
                      />
                      <label className="flex items-start gap-3 text-xs text-[color:var(--color-pp-mute)]">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                          required
                          className="mt-0.5 accent-[color:var(--color-pp-tertiary)]"
                        />
                        <span>
                          I consent to Papa Pasta storing and processing my information for franchise enquiry purposes (POPIA).
                        </span>
                      </label>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 bg-[color:var(--color-pp-primary)] text-white px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)] transition-all duration-200 disabled:opacity-60 disabled:translate-y-0 disabled:shadow-none"
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : selected.state === "discussion" ? (
                          <>Join the waitlist <Users className="w-4 h-4" /></>
                        ) : (
                          <>Express interest <MapPin className="w-4 h-4" /></>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="kicker mb-4">Interest logged</div>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl mb-3">
                  Lead{" "}
                  <span className="text-[color:var(--color-pp-accent)] font-medium">
                    #PP-{Math.floor(Date.now() / 1000) % 9000 + 1000}
                  </span>{" "}
                  recorded.
                </h3>
                <p className="text-sm text-[color:var(--color-pp-mute)] mb-6">
                  Expect a Day 0 email with your crest on a packaging mockup.
                </p>
                <Link
                  href="/franchise/"
                  className="inline-flex items-center gap-2.5 bg-[color:var(--color-pp-tertiary)] text-[color:var(--color-pp-on-tertiary)] px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:brightness-105 transition-all"
                >
                  Apply to franchise
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

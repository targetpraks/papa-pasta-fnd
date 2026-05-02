"use client";

import { useState } from "react";
import Link from "next/link";
import Crest from "@/components/Crest";
import { useLeadScore } from "@/components/LeadContext";
import { territories } from "@/lib/data";

const SA_PATHS: Record<string, { d: string; cx: number; cy: number; abbr: string }> = {
  "Northern Cape":  { d: "m40,150 l100,-20 l30,40 l-10,30 l-40,20 l-100,-25 z", cx: 90, cy: 175, abbr: "NC" },
  "Western Cape":   { d: "m30,200 l70,10 l40,10 l-10,50 l-60,5 l-30,-40 z", cx: 65, cy: 240, abbr: "WC" },
  "Eastern Cape":   { d: "m110,220 l80,-10 l40,20 l-20,30 l-80,10 z", cx: 160, cy: 245, abbr: "EC" },
  "Free State":     { d: "m130,150 l60,-5 l20,30 l-20,20 l-40,15 l-30,-30 z", cx: 165, cy: 175, abbr: "FS" },
  "KwaZulu-Natal":  { d: "m200,150 l40,-5 l30,20 l-10,30 l-40,10 l-20,-30 z", cx: 235, cy: 170, abbr: "KZN" },
  "Mpumalanga":     { d: "m185,110 l55,-5 l25,20 l-15,25 l-50,5 z", cx: 220, cy: 130, abbr: "MP" },
  "Limpopo":        { d: "m150,50 l90,-5 l40,30 l-20,20 l-70,10 l-30,-25 z", cx: 200, cy: 70, abbr: "LP" },
  "Gauteng":        { d: "m160,100 l35,-5 l5,25 l-40,5 z", cx: 180, cy: 112, abbr: "GP" },
  "North West":     { d: "m95,80 l70,10 l15,25 l-30,15 l-45,-10 z", cx: 135, cy: 110, abbr: "NW" },
};

function SAMap({ selectedId, onProvinceClick }: { selectedId: string | null; onProvinceClick: (prov: string, firstId: string) => void }) {
  const stateOf = (prov: string) => {
    const ts = territories.filter((t) => t.province === prov);
    if (ts.some((t) => t.state === "committed")) return "committed";
    if (ts.some((t) => t.state === "discussion")) return "discussion";
    return "available";
  };
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <svg className="w-full h-auto" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="p" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="transparent"/><circle cx="1" cy="1" r="0.3" fill="rgba(10,22,40,0.08)"/></pattern></defs>
      <rect width="280" height="280" fill="url(#p)"/>
      {Object.entries(SA_PATHS).map(([prov, {d,cx,cy,abbr}]) => {
        const cls = stateOf(prov);
        const sel = territories.some((t) => t.province === prov && t.id === selectedId);
        return (
          <g key={prov} onClick={() => { const t = territories.find((t) => t.province === prov); if (t) onProvinceClick(prov, t.id); }} onMouseEnter={() => setHovered(prov)} onMouseLeave={() => setHovered(null)} className="cursor-pointer">
            <path d={d} className={`sa-province ${cls} ${sel ? "selected" : ""}`}/>
            <text x={cx} y={cy} textAnchor="middle" className="sa-province-label" fill={cls==="committed"?"#F5E6C8":"#0A1628"}>{abbr}</text>
          </g>
        );
      })}
      {(() => { if (!hovered) return null; const c = territories.filter((t) => t.province === hovered).length; return (
        <g><rect x="180" y="10" width="90" height="40" rx="8" fill="#0A1628"/><text x="190" y="28" fill="#F5E6C8" fontFamily="var(--font-jetbrains)" fontSize="10">{hovered?.toUpperCase()}</text><text x="190" y="44" fill="rgba(245,230,200,0.7)" fontSize="11">{c} territories</text></g>
      ); })()}
    </svg>
  );
}

export default function InterestPage() {
  const { addPoints } = useLeadScore();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filterProvince, setFilterProvince] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", consent: false });
  const [submitted, setSubmitted] = useState(false);

  const selected = territories.find((t) => t.id === selectedId);
  const filtered = filterProvince ? territories.filter((t) => t.province === filterProvince) : territories;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.consent && form.email) { addPoints(10); setSubmitted(true); }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">
            <span className="w-6 h-px bg-current"/>Step 04 — Express interest
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8">
            <h1 className="font-[family-name:var(--font-playfair)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(36px,5vw,72px)]">
              Find the gap<br/><em className="text-[#C97B2A] not-italic font-medium">in your city.</em>
            </h1>
            <p className="text-[19px] text-[rgba(10,22,40,0.56)] max-w-[440px]">
              Every province is a palette. Green is open, amber is in conversation, navy is claimed. Click a province to drill down to territories.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="relative bg-white rounded-2xl border border-[rgba(10,22,40,0.08)] p-6">
            <SAMap selectedId={selectedId} onProvinceClick={(prov, firstId) => { setFilterProvince(prov); setSelectedId(firstId); }} />
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-xs"><span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"/>Available</div>
              <div className="flex items-center gap-2 text-xs"><span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"/>Under discussion</div>
              <div className="flex items-center gap-2 text-xs"><span className="w-2.5 h-2.5 rounded-full bg-[#0A1628]"/>Committed</div>
            </div>
            {filterProvince && <button onClick={() => setFilterProvince(null)} className="absolute top-4 right-4 text-[11px] bg-[#0A1628] text-white px-3 py-1.5 rounded-full">Clear</button>}
          </div>

          <div className="bg-white rounded-2xl border border-[rgba(10,22,40,0.08)] overflow-hidden">
            <div className="px-4 py-3 font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.14em] text-[rgba(10,22,40,0.46)] border-b border-[rgba(10,22,40,0.08)]">
              {filterProvince || "All provinces"} · {filtered.length}
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              {filtered.map((t) => (
                <button key={t.id} onClick={() => setSelectedId(t.id)} className={`w-full text-left px-4 py-3 border-b border-[rgba(10,22,40,0.06)] flex items-center gap-3 hover:bg-[rgba(10,22,40,0.02)] transition-colors ${selectedId===t.id?"bg-[rgba(212,160,23,0.06)]":""}`}>
                  <span className={`shrink-0 w-2 h-2 rounded-full ${t.state==="available"?"bg-[#22C55E]":t.state==="discussion"?"bg-[#F59E0B]":"bg-[#0A1628]"}`}/>
                  <div className="flex-1"><div className="text-sm font-medium">{t.name}</div><div className="text-[11px] text-[rgba(10,22,40,0.46)]">{t.province.toUpperCase()} · {t.interest} interested</div></div>
                  {t.crest && <Crest bg={t.crest.bg} outline={t.crest.outline} inner={t.crest.inner} size={32}/>}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[rgba(10,22,40,0.08)] p-6">
            {!selected && !submitted && (
              <div className="text-center py-12 text-[rgba(10,22,40,0.4)]"><p className="font-[family-name:var(--font-playfair)] italic text-lg">Pick a territory on the map or list to see its status.</p></div>
            )}
            {selected && !submitted && (
              <>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.14em] text-[rgba(10,22,40,0.46)] mb-1">{selected.province}</div>
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-2xl">{selected.name}</h3>
                  <span className={`inline-block mt-2 px-2 py-1 rounded text-[10px] uppercase tracking-[0.14em] font-medium ${selected.state==="available"?"bg-[#22C55E] text-white":selected.state==="discussion"?"bg-[#F59E0B] text-white":"bg-[#0A1628] text-white"}`}>
                    {selected.state === "available" ? "Available" : selected.state === "discussion" ? "Under discussion" : "Committed"}
                  </span>
                </div>
                {selected.crest && <div className="my-4"><Crest bg={selected.crest.bg} outline={selected.crest.outline} inner={selected.crest.inner} size={120}/></div>}
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between"><span className="text-[rgba(10,22,40,0.56)]">Interest</span><span>{selected.interest} people</span></div>
                  <div className="flex justify-between"><span className="text-[rgba(10,22,40,0.56)]">Unit size</span><span>40sqm inline</span></div>
                  <div className="flex justify-between"><span className="text-[rgba(10,22,40,0.56)]">Territory radius</span><span>3km exclusive</span></div>
                </div>
                {selected.state === "committed" ? (
                  <div className="p-3 bg-[#F8F3E7] rounded-lg text-sm text-[rgba(10,22,40,0.56)]">Territory signed — view only.</div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-3">
                      <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]"/>
                      <input required type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]"/>
                      <input type="tel" placeholder="Phone number" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]"/>
                      <label className="flex items-start gap-3 text-xs text-[rgba(10,22,40,0.56)]">
                        <input type="checkbox" checked={form.consent} onChange={(e) => setForm({...form, consent: e.target.checked})} required className="mt-0.5"/>
                        <span>I consent to Papa Pasta storing and processing my information for franchise enquiry purposes (POPIA).</span>
                      </label>
                      <button type="submit" className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0A1628] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all">
                        {selected.state === "discussion" ? "Join the waitlist →" : "Express interest →"}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
            {submitted && (
              <div className="text-center py-8">
                <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.14em] text-[rgba(10,22,40,0.56)] mb-4">Interest logged</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-3">Lead <em className="text-[#C97B2A] not-italic font-medium">#PP-{Math.floor(Math.random()*9000+1000)}</em> recorded.</h3>
                <p className="text-sm text-[rgba(10,22,40,0.56)] mb-6">Expect a Day 0 email with your crest on a packaging mockup.</p>
                <Link href="/franchise/" className="inline-flex items-center gap-2.5 bg-[#D4A017] text-[#0A1628] px-6 py-3.5 rounded-full text-sm font-semibold hover:brightness-105 transition-all">Apply to franchise →</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

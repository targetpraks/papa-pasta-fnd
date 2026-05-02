"use client";

import { useState } from "react";
import Image from "next/image";
import Crest from "@/components/Crest";
import { useLeadScore } from "@/components/LeadContext";

export default function FranchisePage() {
  const { addPoints } = useLeadScore();
  const [form, setForm] = useState({ fname:"", lname:"", email:"", phone:"", city:"", capital:"", experience:"", timeline:"", why:"", consent:false });
  const [done, setDone] = useState(false);

  const months = Array.from({ length: 12 }, (_, i) => i);
  const revenue = months.map((m) => Math.round(140 + m * 22 + (m > 3 ? 40 : 0)));
  const maxVal = Math.max(...revenue);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setDone(true);
    addPoints(20);
  };

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">
              <span className="w-6 h-px bg-current"/>Step 05 — The application
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end gap-8">
              <h1 className="font-[family-name:var(--font-playfair)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(36px,5vw,72px)]">
                Franchise<br/><em className="text-[#C97B2A] not-italic font-medium">opportunity.</em>
              </h1>
              <p className="text-[19px] text-[rgba(10,22,40,0.56)] max-w-[440px]">
                A premium QSR built for 40sqm inline boxes. Two operators, honest food, one crest per city. Final figures pending finance review.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">Investment model</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{label:"Total investment", value:"R 1.4m", note:"All-in: fit-out, equipment, fee, opening capital"},{label:"Franchise fee", value:"R 185k", note:"Once-off, includes training and launch support"},{label:"Royalty", value:"6%", note:"Of net revenue. No marketing levy in year one."},{label:"Target AUV", value:"R 4.2m", note:"Average unit volume, year one, high-footfall site"}].map((c) => (
              <div key={c.label} className="bg-white rounded-xl border border-[rgba(10,22,40,0.08)] p-6">
                <div className="text-[11px] uppercase tracking-wider text-[rgba(10,22,40,0.46)] mb-3">{c.label}</div>
                <div className="font-[family-name:var(--font-playfair)] text-[clamp(28px,3vw,40px)] font-bold mb-2">{c.value}</div>
                <p className="text-xs text-[rgba(10,22,40,0.56)]">{c.note}</p>
              </div>
            ))}
            </div>
          </div>

          <div className="bg-[#0A1628] text-[#F5E6C8] rounded-2xl p-6 md:p-10 mb-12">
            <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(245,230,200,0.5)] mb-4">12-month unit projection</div>
            <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl mb-8">Revenue climbs. Costs flatten. Payback around month 11.</h3>
            <div className="flex items-end gap-[2%] h-48 md:h-64 mb-4">
              {months.map((m) => (
                <div key={m} className="flex-1 flex flex-col items-center gap-1">
                  <div className={`w-full rounded-t-sm relative ${m === 10 ? "bg-[#D4A017]" : "bg-[rgba(245,230,200,0.25)]"}`} style={{ height: `${(revenue[m] / maxVal) * 100}%` }}>
                    {m === 10 && <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold">Payback</div>}
                  </div>
                  <div className="text-[9px] font-[family-name:var(--font-jetbrains)] mt-1">M{m+1}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 mt-6 text-[11px] font-[family-name:var(--font-jetbrains)] text-[rgba(245,230,200,0.6)]">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-[rgba(245,230,200,0.3)]"/>Monthly revenue</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-[#D4A017]"/>Payback month</div>
              <div className="ml-auto italic font-[family-name:var(--font-playfair)] text-xs">Illustrative — not a guarantee.</div>
            </div>
          </div>

          <div className="mb-12">
            <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">The model</div>
            <div className="grid md:grid-cols-3 gap-6">
              {[{num:"2",unit:"crew · per shift",h:"Two hands, no hangers-on.",p:"One on pasta, one on the counter. Our menu is trimmed to what two trained operators can execute at speed without dropping plating standards."},{num:"40",unit:"square metres",h:"Built for rent, not romance.",p:"Inline-mall footprint, no dine-in. Keeps rent under 8% of revenue in the markets we target and fits inside food-court slots most operators won't take."},{num:"11",unit:"months · to payback",h:"Theatre doesn't slow down the till.",p:"The Living Crest™ does the brand heavy lifting. Customers are there for the pasta; they stay for the colour."}].map((c) => (
              <div key={c.num} className="bg-white rounded-xl border border-[rgba(10,22,40,0.08)] p-8">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-[family-name:var(--font-playfair)] text-[clamp(40px,5vw,64px)] font-bold leading-none">{c.num}</span>
                  <span className="text-sm text-[rgba(10,22,40,0.56)]">{c.unit}</span>
                </div>
                <h4 className="font-[family-name:var(--font-playfair)] font-bold text-xl mb-2">{c.h}</h4>
                <p className="text-sm text-[rgba(10,22,40,0.56)] leading-relaxed">{c.p}</p>
              </div>
            ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
            <div>
              <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">Apply</div>
              <h3 className="font-[family-name:var(--font-playfair)] font-bold text-2xl mb-3">Tell us who you are.</h3>
              <p className="text-sm text-[rgba(10,22,40,0.56)] leading-relaxed mb-6">
                This form creates a Deal record in our CRM and routes to our Franchise Director. You'll receive an application reference number within 24 hours and a Day 0 email with your crest mockups.
              </p>
              <div className="bg-white rounded-xl border border-[rgba(10,22,40,0.08)] p-5">
                <div className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.14em] text-[rgba(10,22,40,0.46)] mb-3">Your crest preview</div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-20 bg-[#F5E6C8] rounded-lg flex items-center justify-center">
                    <Crest bg="#D4A017" outline="#0A1628" inner="#F5E6C8" size={48}/>
                  </div>
                  <div>
                    <div className="font-semibold">Untitled crest</div>
                    <div className="font-[family-name:var(--font-jetbrains)] text-[11px] text-[rgba(10,22,40,0.46)]">#D4A017 · #0A1628 · #F5E6C8</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[rgba(10,22,40,0.08)] p-6 md:p-8">
              {done ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.14em] text-[rgba(10,22,40,0.56)] mb-4">Application received</div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-2">Reference <em className="text-[#C97B2A] not-italic font-medium">#APP-{Math.floor(Math.random()*90000+10000)}</em></h3>
                  <p className="text-sm text-[rgba(10,22,40,0.56)]">We'll be in touch within two business days. Your lead score just jumped +20.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required placeholder="First name" value={form.fname} onChange={(e) => setForm({...form, fname:e.target.value})} className="px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]"/>
                    <input required placeholder="Last name" value={form.lname} onChange={(e) => setForm({...form, lname:e.target.value})} className="px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]"/>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email:e.target.value})} className="px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]"/>
                    <input required type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({...form, phone:e.target.value})} className="px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]"/>
                  </div>
                  <input placeholder="Preferred city / territory" value={form.city} onChange={(e) => setForm({...form, city:e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]"/>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <select required value={form.capital} onChange={(e) => setForm({...form, capital:e.target.value})} className="px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm bg-white focus:outline-none focus:border-[#D4A017]">
                      <option value="">Available capital...</option>
                      <option>R 500k – R 1m</option><option>R 1m – R 1.5m</option><option>R 1.5m – R 2m</option><option>R 2m +</option>
                    </select>
                    <select value={form.timeline} onChange={(e) => setForm({...form, timeline:e.target.value})} className="px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm bg-white focus:outline-none focus:border-[#D4A017]">
                      <option value="">Timeline...</option>
                      <option>0–3 months</option><option>3–6 months</option><option>6–12 months</option><option>Exploring</option>
                    </select>
                  </div>
                  <select value={form.experience} onChange={(e) => setForm({...form, experience:e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm bg-white focus:outline-none focus:border-[#D4A017]">
                    <option value="">F&B experience...</option>
                    <option>Operator — I've run a restaurant</option>
                    <option>Investor — funding and oversight only</option>
                    <option>First-time operator</option>
                    <option>Multi-unit franchisee</option>
                  </select>
                  <textarea rows={3} placeholder="Why Papa Pasta? (optional)" value={form.why} onChange={(e) => setForm({...form, why:e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]"/>
                  <label className="flex items-start gap-3 text-xs text-[rgba(10,22,40,0.56)]">
                    <input type="checkbox" checked={form.consent} onChange={(e) => setForm({...form, consent:e.target.checked})} required className="mt-0.5"/>
                    <span>I consent to Papa Pasta processing my application under POPIA. I understand all figures shown are illustrative and not earnings guarantees.</span>
                  </label>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0A1628] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all">
                    Submit application →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

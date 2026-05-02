"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Crest from "@/components/Crest";
import Realisation from "@/components/Realisation";
import { useLeadScore } from "@/components/LeadContext";
import { hslToHex, hexToHsl, seasons } from "@/lib/data";

function Picker({ label, hue, sat, light, onChange, swatches }: any) {
  const hex = hslToHex(hue, sat, light);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl border border-[rgba(10,22,40,0.08)] p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium">{label}</span>
        <span className="font-[family-name:var(--font-jetbrains)] text-xs text-[rgba(10,22,40,0.56)]">{hex.toUpperCase()}</span>
      </div>
      <div className="w-10 h-10 rounded-lg border border-[rgba(10,22,40,0.12)] mb-4" style={{ background: hex }} />
      <div className="space-y-3">
        <div className="flex items-center gap-3"><label className="w-3 text-xs font-medium">H</label><input type="range" min={0} max={360} value={hue} onChange={(e) => onChange({ h: +e.target.value, s: sat, l: light })} className="flex-1" /><span className="w-8 text-right text-xs font-[family-name:var(--font-jetbrains)]">{hue}</span></div>
        <div className="flex items-center gap-3"><label className="w-3 text-xs font-medium">S</label><input type="range" min={0} max={100} value={sat} onChange={(e) => onChange({ h: hue, s: +e.target.value, l: light })} className="flex-1" /><span className="w-8 text-right text-xs font-[family-name:var(--font-jetbrains)]">{sat}</span></div>
        <div className="flex items-center gap-3"><label className="w-3 text-xs font-medium">L</label><input type="range" min={0} max={100} value={light} onChange={(e) => onChange({ h: hue, s: sat, l: +e.target.value })} className="flex-1" /><span className="w-8 text-right text-xs font-[family-name:var(--font-jetbrains)]">{light}</span></div>
      </div>
      {swatches && <div className="mt-4"><div className="text-[10px] uppercase tracking-wider text-[rgba(10,22,40,0.4)] mb-2">Suggested</div><div className="flex gap-2 flex-wrap">{swatches.map((sw: string) => (
        <button key={sw} className="w-6 h-6 rounded-full border border-[rgba(10,22,40,0.12)]" style={{ background: sw }} onClick={() => { const [h, s, l] = hexToHsl(sw); onChange({ h, s, l }); }} />
      ))}</div></div>}
    </motion.div>
  );
}

export default function CreatePage() {
  const { addPoints } = useLeadScore();
  const seasonPal = seasons.autumn;
  const [step, setStep] = useState(0);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "", consent: false });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [bg, setBg] = useState({ h: 45, s: 70, l: 48, hex: "#D4A017" });
  const [outline, setOutline] = useState({ h: 215, s: 60, l: 10, hex: "#0A1628" });
  const [inner, setInner] = useState({ h: 40, s: 55, l: 87, hex: "#F5E6C8" });
  const [crestName, setCrestName] = useState("");
  const [ctx, setCtx] = useState("light");
  const [showRealisation, setShowRealisation] = useState(false);

  const swBg = [seasonPal.primary, seasonPal.secondary, seasonPal.accent, "#D4A017", "#E85C2A", "#7BC950"];
  const swText = ["#0A1628", "#1B3A4B", "#3A1F0A", "#8B4513", "#F5E6C8", "#FFFFFF"];
  const swInner = ["#F5E6C8", "#FFFFFF", "#FFD66E", "#E8D5B7", "#B8D4E3", "#FFD700"];

  const onSave = () => { addPoints(10); if (crestName) addPoints(5); setShowRealisation(true); };

  const crestForRealisation = { bg: { hex: bg.hex }, outline: { hex: outline.hex }, inner: { hex: inner.hex }, name: crestName };
  const bgCtx = ctx === "dark" ? "bg-[#0A1628]" : ctx === "packaging" ? "bg-[#D4A017]" : ctx === "storefront" ? "bg-[#F5E6C8]" : "bg-[#F8F3E7]";

  return (
    <section className="py-16 md:py-24">
      <AnimatePresence>{showRealisation && <Realisation key="real" crest={crestForRealisation} onClose={() => setShowRealisation(false)} />}</AnimatePresence>

      <div className="max-w-[1280px] mx-auto px-6">
        {step === 0 && !leadSubmitted && (
          <div className="max-w-[560px] mx-auto text-center py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">
                <span className="w-6 h-px bg-current" />Step 00 — Before we begin
              </div>
              <h1 className="font-[family-name:var(--font-playfair)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4vw,56px)] mb-4">
                A quiet handshake.<br/><em className="text-[#C97B2A] not-italic font-medium">Your details.</em>
              </h1>
              <p className="text-[19px] text-[rgba(10,22,40,0.56)] mb-8">We ask first so nothing is lost. Name, email, phone. Then the colour game.</p>

              <form onSubmit={(e) => { e.preventDefault(); if (leadForm.email && leadForm.consent) { addPoints(10); setLeadSubmitted(true); setStep(1); }}}
                className="text-left space-y-4 bg-white rounded-2xl border border-[rgba(10,22,40,0.08)] p-8">
                <input required placeholder="Full name" value={leadForm.name} onChange={(e) => setLeadForm({...leadForm, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]" />
                <input required type="email" placeholder="Email address" value={leadForm.email} onChange={(e) => setLeadForm({...leadForm, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]" />
                <input type="tel" placeholder="Phone number" value={leadForm.phone} onChange={(e) => setLeadForm({...leadForm, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]" />
                <label className="flex items-start gap-3 text-xs text-[rgba(10,22,40,0.56)]">
                  <input type="checkbox" checked={leadForm.consent} onChange={(e) => setLeadForm({...leadForm, consent: e.target.checked})} required className="mt-0.5" />
                  <span>I consent to Papa Pasta storing and processing my information for franchise enquiry purposes (POPIA).</span>
                </label>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0A1628] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all">
                  Save &amp; start the Creator →
                </button>
              </form>
              <p className="mt-4 text-xs text-[rgba(10,22,40,0.4)]">This creates a lead record in our CRM. +10 points.</p>
            </motion.div>
          </div>
        )}

        {(step >= 1 || leadSubmitted) && (
          <>
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <button onClick={() => setStep(0)} className="text-[11px] text-[rgba(10,22,40,0.46)] hover:text-[#0A1628] underline">← Back to Step 0</button>
              </div>
              <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.18em] text-[rgba(10,22,40,0.56)] mb-6">
                <span className="w-6 h-px bg-current" />Step 02 — The game
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end gap-8">
                <h1 className="font-[family-name:var(--font-playfair)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(36px,5vw,72px)]">Build it until it <em className="text-[#C97B2A] not-italic font-medium">feels like yours.</em></h1>
                <p className="text-[19px] text-[rgba(10,22,40,0.56)] max-w-[440px]">Three regions. No presets. No wrong answers. Slide until your city looks back at you.</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-[rgba(10,22,40,0.08)] p-6">
                <div className="flex gap-2 mb-4">
                  {["light","dark","packaging","storefront"].map((c) => (
                    <button key={c} onClick={() => setCtx(c)} className={`px-3 py-1.5 rounded-full text-[11px] font-medium border transition-all ${ctx===c ? "bg-[#0A1628] text-white border-[#0A1628]" : "text-[rgba(10,22,40,0.56)] border-[rgba(10,22,40,0.12)] hover:border-[rgba(10,22,40,0.3)]"}`}>
                      {c}
                    </button>
                  ))}
                </div>
                <div className={`flex items-center justify-center rounded-xl p-8 ${bgCtx}`}>
                  <motion.div layout className="w-full max-w-[320px]">
                    <Crest bg={bg.hex} outline={outline.hex} inner={inner.hex} label="PAPA PASTA" sub={crestName ? crestName.toUpperCase() : "EST. 2025"} className="w-full" />
                  </motion.div>
                </div>
              </div>

              <div className="space-y-4">
                <Picker label="Background" hue={bg.h} sat={bg.s} light={bg.l} onChange={(v: any) => setBg({ ...v, hex: hslToHex(v.h, v.s, v.l) })} swatches={swBg} />
                <Picker label="Text / Outline" hue={outline.h} sat={outline.s} light={outline.l} onChange={(v: any) => setOutline({ ...v, hex: hslToHex(v.h, v.s, v.l) })} swatches={swText} />
                <Picker label="Internal Fill" hue={inner.h} sat={inner.s} light={inner.l} onChange={(v: any) => setInner({ ...v, hex: hslToHex(v.h, v.s, v.l) })} swatches={swInner} />
                <div className="bg-white rounded-xl border border-[rgba(10,22,40,0.08)] p-5">
                  <label className="block text-sm font-medium mb-2">Name your crest <span className="text-[#D4A017] font-[family-name:var(--font-jetbrains)] text-[10px]">+5</span></label>
                  <input value={crestName} onChange={(e) => setCrestName(e.target.value)} maxLength={40} placeholder="e.g. Joburg Sunset" className="w-full px-4 py-2.5 rounded-lg border border-[rgba(10,22,40,0.12)] text-sm focus:outline-none focus:border-[#D4A017]" />
                  <p className="text-[11px] text-[rgba(10,22,40,0.46)] mt-2">Named crests can be submitted to the Community Gallery.</p>
                </div>
                <button onClick={onSave} className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0A1628] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all">
                  Save &amp; see the Realisation Moment™ →
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

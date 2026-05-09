"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Palette, Eye, Check } from "lucide-react";
import Crest from "@/components/Crest";
import Realisation from "@/components/Realisation";
import { useLeadScore } from "@/components/LeadContext";
import { hslToHex, hexToHsl, seasons } from "@/lib/data";

function Picker({ label, hue, sat, light, onChange, swatches }: any) {
  const hex = hslToHex(hue, sat, light);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[var(--radius-lg)] border border-[color:var(--color-pp-line)] p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold">{label}</span>
        <span className="font-[family-name:var(--font-mono)] text-xs text-[color:var(--color-pp-mute)]">
          {hex.toUpperCase()}
        </span>
      </div>
      <div
        className="w-10 h-10 rounded-[var(--radius-md)] border border-[color:var(--color-pp-line)] mb-4 shadow-[var(--shadow-1)]"
        style={{ background: hex }}
      />
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <label className="w-4 text-xs font-semibold text-[color:var(--color-pp-mute)]">H</label>
          <input
            type="range"
            min={0}
            max={360}
            value={hue}
            onChange={(e) => onChange({ h: +e.target.value, s: sat, l: light })}
            className="flex-1"
          />
          <span className="w-8 text-right text-xs font-[family-name:var(--font-mono)]">{hue}</span>
        </div>
        <div className="flex items-center gap-3">
          <label className="w-4 text-xs font-semibold text-[color:var(--color-pp-mute)]">S</label>
          <input
            type="range"
            min={0}
            max={100}
            value={sat}
            onChange={(e) => onChange({ h: hue, s: +e.target.value, l: light })}
            className="flex-1"
          />
          <span className="w-8 text-right text-xs font-[family-name:var(--font-mono)]">{sat}</span>
        </div>
        <div className="flex items-center gap-3">
          <label className="w-4 text-xs font-semibold text-[color:var(--color-pp-mute)]">L</label>
          <input
            type="range"
            min={0}
            max={100}
            value={light}
            onChange={(e) => onChange({ h: hue, s: sat, l: +e.target.value })}
            className="flex-1"
          />
          <span className="w-8 text-right text-xs font-[family-name:var(--font-mono)]">{light}</span>
        </div>
      </div>
      {swatches && (
        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-wider text-[color:var(--color-pp-mute)] mb-2 font-semibold">
            Suggested
          </div>
          <div className="flex gap-2 flex-wrap">
            {swatches.map((sw: string) => (
              <button
                key={sw}
                className="w-7 h-7 rounded-full border-2 border-[color:var(--color-pp-line)] hover:border-[color:var(--color-pp-tertiary)] hover:scale-110 transition-all duration-150"
                style={{ background: sw }}
                onClick={() => {
                  const [h, s, l] = hexToHsl(sw);
                  onChange({ h, s, l });
                }}
                aria-label={`Select colour ${sw}`}
              />
            ))}
          </div>
        </div>
      )}
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const swBg = [seasonPal.primary, seasonPal.secondary, seasonPal.accent, "#D4A017", "#E85C2A", "#7BC950"];
  const swText = ["#0A1628", "#1B3A4B", "#3A1F0A", "#8B4513", "#F5E6C8", "#FFFFFF"];
  const swInner = ["#F5E6C8", "#FFFFFF", "#FFD66E", "#E8D5B7", "#B8D4E3", "#FFD700"];

  const handleSave = useCallback(() => {
    addPoints(10);
    if (crestName) addPoints(5);
    setShowRealisation(true);
  }, [addPoints, crestName]);

  const handleLeadSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.email || !leadForm.consent) return;
    setIsSubmitting(true);
    setTimeout(() => {
      addPoints(10);
      setLeadSubmitted(true);
      setStep(1);
      setIsSubmitting(false);
    }, 600);
  }, [leadForm, addPoints]);

  const crestForRealisation = {
    bg: { hex: bg.hex },
    outline: { hex: outline.hex },
    inner: { hex: inner.hex },
    name: crestName,
  };

  const bgCtx =
    ctx === "dark"
      ? "bg-[#0A1628]"
      : ctx === "packaging"
        ? "bg-[#D4A017]"
        : ctx === "storefront"
          ? "bg-[#F5E6C8]"
          : "bg-[#F8F3E7]";

  return (
    <section className="py-16 md:py-24">
      <AnimatePresence>
        {showRealisation && (
          <Realisation
            key="real"
            crest={crestForRealisation}
            onClose={() => setShowRealisation(false)}
          />
        )}
      </AnimatePresence>

      <div className="max-w-[1280px] mx-auto px-6">
        {step === 0 && !leadSubmitted && (
          <div className="max-w-[560px] mx-auto text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="kicker mb-6">Step 00 — Before we begin</div>
              <h1 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(32px,4vw,56px)] mb-4">
                A quiet handshake.
                <br />
                <span className="text-[color:var(--color-pp-accent)] font-medium">Your details.</span>
              </h1>
              <p className="text-[19px] text-[color:var(--color-pp-mute)] mb-8">
                We ask first so nothing is lost. Name, email, phone. Then the colour game.
              </p>

              <form
                onSubmit={handleLeadSubmit}
                className="text-left space-y-4 bg-white rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] p-8 shadow-[var(--shadow-1)]"
              >
                <label className="block text-sm font-medium">Full name</label>
                <input
                  required
                  placeholder="Full name"
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                  aria-label="Full name"
                />
                <label className="block text-sm font-medium">Email address</label>
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                  aria-label="Email address"
                />
                <label className="block text-sm font-medium">Phone number</label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                  aria-label="Phone number"
                />
                <label className="flex items-start gap-3 text-xs text-[color:var(--color-pp-mute)]">
                  <input
                    type="checkbox"
                    checked={leadForm.consent}
                    onChange={(e) => setLeadForm({ ...leadForm, consent: e.target.checked })}
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
                  {isSubmitting ? "Saving..." : (
                    <>Save &amp; start the Creator <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
              <p className="mt-4 text-xs text-[color:var(--color-pp-mute)]">
                This creates a lead record in our CRM. +10 points.
              </p>
            </motion.div>
          </div>
        )}

        {(step >= 1 || leadSubmitted) && (
          <>
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => setStep(0)}
                  className="text-[11px] text-[color:var(--color-pp-mute)] hover:text-[color:var(--color-pp-ink)] underline transition-colors"
                >
                  <ArrowLeft className="w-3 h-3 inline mr-1" />
                  Back to Step 0
                </button>
              </div>
              <div className="kicker mb-6">Step 02 — The game</div>
              <div className="flex flex-col lg:flex-row lg:items-end gap-8">
                <h1 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(36px,5vw,72px)]">
                  Build it until it{" "}
                  <span className="text-[color:var(--color-pp-accent)] font-medium">
                    feels like yours.
                  </span>
                </h1>
                <p className="text-[19px] text-[color:var(--color-pp-mute)] max-w-[440px]">
                  Three regions. No presets. No wrong answers. Slide until your city looks back at you.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-[var(--radius-xl)] border border-[color:var(--color-pp-line)] p-6 shadow-[var(--shadow-1)]">
                <div className="flex gap-2 mb-4">
                  {["light", "dark", "packaging", "storefront"].map((c) => (
                    <button
                      key={c}
                      onClick={() => setCtx(c)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-pill)] text-[11px] font-semibold border transition-all duration-200 ${
                        ctx === c
                          ? "bg-[color:var(--color-pp-primary)] text-white border-[color:var(--color-pp-primary)]"
                          : "text-[color:var(--color-pp-mute)] border-[color:var(--color-pp-line)] hover:border-[color:var(--color-pp-primary)] hover:text-[color:var(--color-pp-ink)]"
                      }`}
                    >
                      {c === "light" && <Eye className="w-3 h-3" />}
                      {c === "dark" && <Eye className="w-3 h-3" />}
                      {c === "packaging" && <Palette className="w-3 h-3" />}
                      {c === "storefront" && <Palette className="w-3 h-3" />}
                      {c}
                    </button>
                  ))}
                </div>
                <div className={`flex items-center justify-center rounded-[var(--radius-lg)] p-8 ${bgCtx} transition-colors duration-300`}>
                  <motion.div layout className="w-full max-w-[320px]">
                    <Crest
                      bg={bg.hex}
                      outline={outline.hex}
                      inner={inner.hex}
                      label="PAPA PASTA"
                      sub={crestName ? crestName.toUpperCase() : "EST. 2025"}
                      className="w-full"
                    />
                  </motion.div>
                </div>
              </div>

              <div className="space-y-4">
                <Picker
                  label="Background"
                  hue={bg.h}
                  sat={bg.s}
                  light={bg.l}
                  onChange={(v: any) => setBg({ ...v, hex: hslToHex(v.h, v.s, v.l) })}
                  swatches={swBg}
                />
                <Picker
                  label="Text / Outline"
                  hue={outline.h}
                  sat={outline.s}
                  light={outline.l}
                  onChange={(v: any) => setOutline({ ...v, hex: hslToHex(v.h, v.s, v.l) })}
                  swatches={swText}
                />
                <Picker
                  label="Internal Fill"
                  hue={inner.h}
                  sat={inner.s}
                  light={inner.l}
                  onChange={(v: any) => setInner({ ...v, hex: hslToHex(v.h, v.s, v.l) })}
                  swatches={swInner}
                />
                <div className="bg-white rounded-[var(--radius-lg)] border border-[color:var(--color-pp-line)] p-5">
                  <label className="block text-sm font-semibold mb-2">
                    Name your crest{" "}
                    <span className="text-[color:var(--color-pp-tertiary)] font-[family-name:var(--font-mono)] text-[10px]">
                      +5
                    </span>
                  </label>
                  <input
                    value={crestName}
                    onChange={(e) => setCrestName(e.target.value)}
                    maxLength={40}
                    placeholder="e.g. Joburg Sunset"
                    aria-label="Crest name"
                  />
                  <p className="text-[11px] text-[color:var(--color-pp-mute)] mt-2">
                    Named crests can be submitted to the Community Gallery.
                  </p>
                </div>
                <button
                  onClick={handleSave}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[color:var(--color-pp-primary)] text-white px-6 py-3.5 rounded-[var(--radius-pill)] text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(10,22,40,0.2)] transition-all duration-200"
                >
                  <Check className="w-4 h-4" />
                  Save &amp; see the Realisation Moment™
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

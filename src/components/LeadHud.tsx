"use client";

import { motion } from "framer-motion";
import { useLeadScore } from "./LeadContext";
import { Zap } from "lucide-react";

export default function LeadHud() {
  const { score } = useLeadScore();
  const pct = Math.min(100, Math.round((score / 85) * 100));
  const tier = score >= 80 ? "Hot" : score >= 60 ? "Warm" : score >= 40 ? "Nurture" : score > 0 ? "New" : "";
  if (score === 0) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="fixed bottom-5 right-5 z-40 bg-[color:var(--color-pp-primary)] text-[color:var(--color-pp-cream)] rounded-[var(--radius-xl)] px-4 py-3 flex items-center gap-3 shadow-[0_8px_24px_rgba(10,22,40,0.25)] min-w-[220px] border border-[rgba(245,230,200,0.08)]"
      title="Your activity feeds this score. Hot leads get a 4-hour callback."
    >
      <Zap className="w-4 h-4 text-[color:var(--color-pp-tertiary)]" />
      <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.08em]">
        {tier ? `${tier} lead` : "Lead score"}
      </span>
      <div className="flex-1 h-1.5 bg-[rgba(255,255,255,0.12)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[color:var(--color-pp-tertiary)] transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <b className="font-[family-name:var(--font-mono)] text-[12px]">{score}/85</b>
    </motion.div>
  );
}

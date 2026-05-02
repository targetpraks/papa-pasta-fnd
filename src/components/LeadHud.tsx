"use client";

import { motion } from "framer-motion";

export default function LeadHud({ score }: { score: number }) {
  const pct = Math.min(100, Math.round((score / 85) * 100));
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-5 right-5 z-40 bg-[#0A1628] text-[#F5E6C8] rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl min-w-[220px]"
    >
      <span className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.08em]">Lead score</span>
      <div className="flex-1 h-1 bg-[rgba(255,255,255,0.15)] rounded-full overflow-hidden">
        <div className="h-full bg-[#D4A017] transition-all duration-700" style={{ width: `${pct}%` }} />
      </div>
      <b className="font-[family-name:var(--font-jetbrains)] text-[12px]">{score}/85</b>
    </motion.div>
  );
}

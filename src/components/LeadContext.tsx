"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface LeadScoreCtx {
  score: number;
  addPoints: (pts: number) => void;
}

const Ctx = createContext<LeadScoreCtx>({ score: 0, addPoints: () => {} });

export function LeadProvider({ children }: { children: ReactNode }) {
  const [score, setScore] = useState(0);
  const addPoints = (pts: number) => setScore((s) => Math.min(85, s + pts));
  return <Ctx.Provider value={{ score, addPoints }}>{children}</Ctx.Provider>;
}

export function useLeadScore() {
  return useContext(Ctx);
}

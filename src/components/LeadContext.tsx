"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

interface LeadScoreCtx {
  score: number;
  addPoints: (pts: number) => void;
  resetScore: () => void;
}

const Ctx = createContext<LeadScoreCtx>({ score: 0, addPoints: () => {}, resetScore: () => {} });

const STORAGE_KEY = "pp-lead-score";

export function LeadProvider({ children }: { children: ReactNode }) {
  const [score, setScore] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setScore(Number(saved) || 0);
    } catch {
      // localStorage not available
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (hydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, String(score));
      } catch {
        // localStorage not available
      }
    }
  }, [score, hydrated]);

  const addPoints = useCallback((pts: number) => {
    setScore((s) => Math.min(85, s + pts));
  }, []);

  const resetScore = useCallback(() => {
    setScore(0);
  }, []);

  return <Ctx.Provider value={{ score, addPoints, resetScore }}>{children}</Ctx.Provider>;
}

export function useLeadScore() {
  return useContext(Ctx);
}

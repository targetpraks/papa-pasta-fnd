"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? undefined : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: shouldReduce ? 0 : 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? undefined : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduce ? 0 : 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? undefined : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: shouldReduce ? 0 : 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

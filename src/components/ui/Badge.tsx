import * as React from "react";

import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "neutral" | "gold" | "navy" | "success" | "warning";
};

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  neutral: "bg-[rgba(10,22,40,0.06)] text-[color:var(--color-pp-ink)] border-[rgba(10,22,40,0.08)]",
  gold: "bg-[color:var(--color-pp-gold)] text-[color:var(--color-pp-navy)] border-[color:var(--color-pp-gold)]",
  navy: "bg-[color:var(--color-pp-navy)] text-white border-[color:var(--color-pp-navy)]",
  success: "bg-[color:var(--color-pp-available)] text-white border-[color:var(--color-pp-available)]",
  warning: "bg-[color:var(--color-pp-discussion)] text-white border-[color:var(--color-pp-discussion)]",
};

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2 py-1 text-[10px] uppercase tracking-[0.14em] font-medium border",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}


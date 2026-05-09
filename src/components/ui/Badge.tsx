import * as React from "react";

import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "neutral" | "gold" | "navy" | "success" | "warning" | "muted";
};

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  neutral: "bg-[rgba(10,22,40,0.05)] text-[color:var(--color-pp-ink)] border-[color:var(--color-pp-line)]",
  gold: "bg-[color:var(--color-pp-tertiary)] text-[color:var(--color-pp-on-tertiary)] border-[color:var(--color-pp-tertiary)]",
  navy: "bg-[color:var(--color-pp-primary)] text-[color:var(--color-pp-on-primary)] border-[color:var(--color-pp-primary)]",
  success: "bg-[color:var(--color-pp-available)] text-white border-[color:var(--color-pp-available)]",
  warning: "bg-[color:var(--color-pp-discussion)] text-white border-[color:var(--color-pp-discussion)]",
  muted: "bg-[rgba(10,22,40,0.03)] text-[color:var(--color-pp-mute)] border-[rgba(10,22,40,0.08)]",
};

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-sm)] px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] font-semibold border",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverted";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-pp-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-pp-paper)]";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[color:var(--color-pp-navy)] text-white hover:-translate-y-0.5 hover:shadow-lg",
  secondary:
    "border border-[color:var(--color-pp-line)] text-[color:var(--color-pp-ink)] hover:bg-[rgba(10,22,40,0.04)]",
  ghost: "text-[color:var(--color-pp-ink)] hover:bg-[rgba(10,22,40,0.04)]",
  inverted:
    "border border-[rgba(245,230,200,0.3)] text-[color:var(--color-pp-cream)] hover:bg-[rgba(245,230,200,0.05)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-[13px] px-4 py-2.5",
  md: "text-sm px-6 py-3.5",
  lg: "text-sm px-8 py-4",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({ className, variant = "primary", size = "md", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(base, variantClasses[variant], sizeClasses[size], className)} {...props} />;
}


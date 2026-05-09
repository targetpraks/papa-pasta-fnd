import * as React from "react";

import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "inverted" | "elevated" | "flush";
  hover?: boolean;
};

export function Card({ className, variant = "default", hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)]",
        variant === "default" && "bg-[color:var(--color-pp-white)] border border-[color:var(--color-pp-line)]",
        variant === "elevated" && "bg-[color:var(--color-pp-white)] border border-[color:var(--color-pp-line)] shadow-[var(--shadow-1)]",
        variant === "inverted" && "bg-[color:var(--color-pp-primary)] text-[color:var(--color-pp-cream)] border border-[rgba(245,230,200,0.1)]",
        variant === "flush" && "bg-transparent",
        hover && variant !== "flush" && "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)]",
        className,
      )}
      {...props}
    />
  );
}
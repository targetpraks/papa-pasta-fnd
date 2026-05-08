import * as React from "react";

import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "inverted";
};

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[color:var(--color-pp-line)]",
        variant === "default"
          ? "bg-white"
          : "bg-[color:var(--color-pp-navy)] text-[color:var(--color-pp-cream)] border-[rgba(245,230,200,0.12)]",
        className,
      )}
      {...props}
    />
  );
}


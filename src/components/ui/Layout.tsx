import * as React from "react";

import { cn } from "@/lib/utils";

export function PageShell({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <section className={cn("py-16 md:py-24", className)} {...props} />;
}

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("max-w-[1280px] mx-auto px-6", className)} {...props} />;
}

export function SectionHeader({
  kicker,
  title,
  description,
  className,
}: {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-12", className)}>
      {kicker ? (
        <div className="inline-flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-pp-mute)] mb-6">
          <span className="w-6 h-px bg-current" />
          {kicker}
        </div>
      ) : null}
      <div className="flex flex-col lg:flex-row lg:items-end gap-8">
        <h1 className="font-[family-name:var(--font-serif)] font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(36px,5vw,72px)]">
          {title}
        </h1>
        {description ? (
          <p className="text-[19px] text-[color:var(--color-pp-mute)] max-w-[440px]">{description}</p>
        ) : null}
      </div>
    </div>
  );
}


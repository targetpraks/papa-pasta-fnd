import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <section className="py-20 md:py-32 animate-pulse">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-[560px]">
          <Skeleton className="h-3 w-40 mb-6" />
          <Skeleton className="h-12 w-full mb-3" />
          <Skeleton className="h-12 w-3/4 mb-8" />
          <Skeleton className="h-24 w-full mb-8" />
          <div className="flex gap-3">
            <Skeleton className="h-12 w-40 rounded-[var(--radius-pill)]" />
            <Skeleton className="h-12 w-48 rounded-[var(--radius-pill)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

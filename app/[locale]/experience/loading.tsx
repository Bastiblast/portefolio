"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <Skeleton className="h-10 w-64" />
      <div className="mt-4 space-y-2">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-4/5" />
      </div>
    </section>
  );
}

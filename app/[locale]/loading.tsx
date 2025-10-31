"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
        <Skeleton className="h-[400px] w-full rounded-lg" />
      </div>
    </section>
  );
}

"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="mx-auto max-w-xl px-4 py-8 sm:py-12 h-full flex flex-col justify-center">
      <Skeleton className="h-9 w-32 mb-4 sm:mb-6" />
      <div className="space-y-3 sm:space-y-4">
        <div>
          <Skeleton className="h-4 w-16 mb-1" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div>
          <Skeleton className="h-4 w-16 mb-1" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div>
          <Skeleton className="h-4 w-20 mb-1" />
          <Skeleton className="h-24 w-full rounded-md" />
        </div>
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </section>
  );
}

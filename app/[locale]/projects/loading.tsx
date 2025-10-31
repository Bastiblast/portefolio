"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <Skeleton className="h-10 w-40 mb-8" />
      
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border border-sage/30 p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-32 w-full sm:w-48 rounded-md" />
              <div className="flex-1 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="flex gap-2 pt-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

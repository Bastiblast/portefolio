import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 space-y-4">
      <Skeleton className="h-10 w-48" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-5/6" />
    </section>
  );
}

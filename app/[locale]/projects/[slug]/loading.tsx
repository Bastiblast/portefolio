export default function ProjectLoading() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="space-y-8 animate-pulse">
        <div className="h-6 w-48 bg-muted rounded" />
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-48 h-48 bg-muted rounded-lg" />
          
          <div className="flex-1 space-y-4">
            <div className="h-10 w-3/4 bg-muted rounded" />
            <div className="flex gap-2">
              <div className="h-8 w-20 bg-muted rounded-full" />
              <div className="h-8 w-24 bg-muted rounded-full" />
              <div className="h-8 w-28 bg-muted rounded-full" />
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-32 bg-muted rounded-lg" />
              <div className="h-12 w-36 bg-muted rounded-lg" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 space-y-4">
          <div className="h-8 w-40 bg-muted rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-muted rounded" />
            <div className="h-4 w-5/6 bg-muted rounded" />
            <div className="h-4 w-4/6 bg-muted rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

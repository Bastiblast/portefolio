export default function ProjectLoading() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="space-y-8 animate-pulse">
        <div className="h-6 w-48 bg-sage/20 rounded" />
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-48 h-48 bg-sage/20 rounded-lg" />
          
          <div className="flex-1 space-y-4">
            <div className="h-10 w-3/4 bg-sage/20 rounded" />
            <div className="flex gap-2">
              <div className="h-8 w-20 bg-sage/20 rounded-full" />
              <div className="h-8 w-24 bg-sage/20 rounded-full" />
              <div className="h-8 w-28 bg-sage/20 rounded-full" />
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-32 bg-sage/20 rounded-lg" />
              <div className="h-12 w-36 bg-sage/20 rounded-lg" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-sage/30 pt-8 space-y-4">
          <div className="h-8 w-40 bg-sage/20 rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-sage/20 rounded" />
            <div className="h-4 w-5/6 bg-sage/20 rounded" />
            <div className="h-4 w-4/6 bg-sage/20 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

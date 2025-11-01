export default function Contact() {
  return (
    <section className="mx-auto max-w-xl px-4 py-8 sm:py-12 h-full flex flex-col justify-center">
      <h1 className="font-serif text-2xl sm:text-3xl text-secondary">Contact</h1>
      <form className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
        <div>
          <label className="block text-sm mb-1 text-foreground">Nom</label>
          <input className="w-full rounded-md border px-3 py-2 bg-background border-border focus:border-primary focus:ring-2 focus:ring-ring transition-colors" placeholder="Votre nom" />
        </div>
        <div>
          <label className="block text-sm mb-1 text-foreground">Email</label>
          <input type="email" className="w-full rounded-md border px-3 py-2 bg-background border-border focus:border-primary focus:ring-2 focus:ring-ring transition-colors" placeholder="vous@exemple.com" />
        </div>
        <div>
          <label className="block text-sm mb-1 text-foreground">Message</label>
          <textarea rows={4} className="w-full rounded-md border px-3 py-2 bg-background border-border focus:border-primary focus:ring-2 focus:ring-ring resize-none transition-colors" placeholder="Votre message..." />
        </div>
        <button type="submit" className="rounded-md bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors font-medium">
          Envoyer
        </button>
      </form>
    </section>
  );
}
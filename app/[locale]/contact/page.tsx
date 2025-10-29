export default function Contact() {
  return (
    <section className="mx-auto max-w-xl px-4 py-8 sm:py-12 h-full flex flex-col justify-center">
      <h1 className="font-serif text-2xl sm:text-3xl text-petrol">Contact</h1>
      <form className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
        <div>
          <label className="block text-sm mb-1">Nom</label>
          <input className="w-full rounded-md border px-3 py-2 bg-transparent border-sage" placeholder="Votre nom" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full rounded-md border px-3 py-2 bg-transparent border-sage" placeholder="vous@exemple.com" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea rows={4} className="w-full rounded-md border px-3 py-2 bg-transparent border-sage resize-none" placeholder="Votre message..." />
        </div>
        <button type="submit" className="rounded-md bg-sage px-4 py-2 text-ivory hover:bg-sage/90 transition-colors">
          Envoyer
        </button>
      </form>
    </section>
  );
}
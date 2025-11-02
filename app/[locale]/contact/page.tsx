import type { Locale } from "@/lib/i18n";
import { body } from "@/lib/i18n";

export default async function Contact({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = body.contact[locale];

  return (
    <section className="mx-auto max-w-xl px-4 py-8 sm:py-12 h-full flex flex-col justify-center">
      <h1 className="font-serif text-2xl sm:text-3xl text-secondary">{t.title}</h1>
      <p className="mt-2 text-foreground/80">{t.subtitle}</p>
      <form className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
        <div>
          <label className="block text-sm mb-1 text-foreground">{t.name}</label>
          <input className="w-full rounded-md border px-3 py-2 bg-background border-border focus:border-primary focus:ring-2 focus:ring-ring transition-colors" placeholder={t.name} />
        </div>
        <div>
          <label className="block text-sm mb-1 text-foreground">{t.email}</label>
          <input type="email" className="w-full rounded-md border px-3 py-2 bg-background border-border focus:border-primary focus:ring-2 focus:ring-ring transition-colors" placeholder={t.email} />
        </div>
        <div>
          <label className="block text-sm mb-1 text-foreground">{t.message}</label>
          <textarea rows={4} className="w-full rounded-md border px-3 py-2 bg-background border-border focus:border-primary focus:ring-2 focus:ring-ring resize-none transition-colors" placeholder={t.message} />
        </div>
        <button type="submit" className="rounded-md bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors font-medium">
          {t.send}
        </button>
      </form>
    </section>
  );
}
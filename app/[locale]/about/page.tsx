import type { Locale } from "@/lib/i18n";
import { body } from "@/lib/i18n";

export default async function About({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = body.about[locale];

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 space-y-4">
      <h1 className="font-serif text-3xl text-secondary">{t.title}</h1>
      <p className="text-foreground/90">
        {t.intro}
      </p>
      <p>
        <a href="https://lionside.fr/cvengine" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-colors">
          Curriculum
        </a>
      </p>
    </section>
  );
}
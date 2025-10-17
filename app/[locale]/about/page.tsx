import type { Locale } from "@/lib/i18n";

export default async function About({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 space-y-4">
      <h1 className="font-serif text-3xl text-petrol">À propos</h1>
      <p>
        Développeur web — équilibre et mouvement. Parcours, philosophie et approche.
        Lien vers le CV:{" "}
        <a href="https://lionside.fr/cvengine" target="_blank" rel="noreferrer">
          cvengine
        </a>
        .
      </p>
    </section>
  );
}
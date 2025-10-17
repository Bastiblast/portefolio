import type { Locale } from "@/lib/i18n";

export default async function Experience({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-serif text-3xl text-petrol">Expérience</h1>
      <p className="mt-4 opacity-80">
        Timeline et expériences viendront ici. Mises en avant des technologies et transitions fluides.
      </p>
    </section>
  );
}
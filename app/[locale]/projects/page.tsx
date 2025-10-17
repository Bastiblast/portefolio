import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default async function Projects({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-serif text-3xl text-petrol">Projets</h1>
      <p className="mt-4 opacity-80">
        Les projets seront ajoutés prochainement.
      </p>
      <div className="mt-6">
        <Link href={`/${locale}/contact`} className="underline hover:text-copper">
          Me contacter pour en savoir plus
        </Link>
      </div>
    </section>
  );
}
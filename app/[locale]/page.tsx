import Hero from "@/components/sections/Hero";
import type { Locale } from "@/lib/i18n";

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <Hero locale={locale} />;
}
import { Suspense } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import type { Locale } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  console.log("LocaleLayout - locale:", locale);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <NavBar locale={locale as Locale} />
      <main className="flex-1 overflow-y-auto">
        <Suspense fallback={<div className="animate-pulse bg-background" />}>
          {children}
        </Suspense>
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}
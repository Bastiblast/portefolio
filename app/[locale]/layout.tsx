import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import type { Locale } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  
  console.log("LocaleLayout - locale:", locale);

  return (
    <div className="flex flex-col h-screen">
      <NavBar locale={locale} />
      <main className="flex-1 overflow-y-auto">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
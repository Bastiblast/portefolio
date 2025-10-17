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
    <>
      <NavBar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
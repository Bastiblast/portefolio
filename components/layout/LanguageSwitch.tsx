"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const target = locale === "fr" ? "en" : "fr";
    // remplace /fr ou /en au début du chemin
    const newPath = pathname.replace(/^\/(fr|en)/, `/${target}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggle}
      className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-sage/20 hover:text-copper transition-colors"
      aria-label="Switch language"
    >
      {locale === "fr" ? "EN" : "FR"}
    </button>
  );
}
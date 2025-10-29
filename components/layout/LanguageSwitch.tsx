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
      className="group px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-petrol/15"
      aria-label="Switch language"
    >
      <span className="group-hover:text-petrol transition-colors">{locale === "fr" ? "EN" : "FR"}</span>
    </button>
  );
}
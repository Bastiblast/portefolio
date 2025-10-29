"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

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
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-label="Switch language"
      className="hover:bg-transparent hover:text-petrol"
    >
      {locale === "fr" ? "EN" : "FR"}
    </Button>
  );
}
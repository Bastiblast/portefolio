import Link from "next/link";
import { footerCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const safeLocale = locale || "fr";
  const copy = footerCopy[safeLocale] || footerCopy.fr;
  
  return (
    <footer className="border-t backdrop-blur bg-background/30 border-sage">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-foreground">© {new Date().getFullYear()} Odonate — {copy}</p>
        <div className="flex gap-4 text-muted-foreground">

          <span className="opacity-60 text-foreground">Odonate.fr</span>
        </div>
      </div>
    </footer>
  );
}
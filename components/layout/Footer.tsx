import Link from "next/link";
import { footerCopy } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const safeLocale = locale || "fr";
  const copy = footerCopy[safeLocale] || footerCopy.fr;
  
  return (
    <footer className="border-t border-sage/30">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="opacity-80">© {new Date().getFullYear()} Odonate — {copy}</p>
        <div className="flex gap-4">
          <Link href="https://lionside.fr/cvengine">CV</Link>
          <span className="opacity-60">Odonate.fr</span>
        </div>
      </div>
    </footer>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { nav } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitch } from "./LanguageSwitch";
import type { Locale } from "@/lib/i18n";
import { usePathname } from "next/navigation";

export default function NavBar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  
  // Fallback si locale n'est pas définie
  const safeLocale = locale || "fr";
  const t = nav[safeLocale];
  const base = `/${safeLocale}`;
  
  if (!t) {
    console.error("Locale missing or invalid:", locale);
    return null;
  }

  const link = (href: string, label: string) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`px-3 py-2 rounded-md text-sm transition-colors ${
          active ? "bg-sage text-ivory" : "hover:bg-sage/20"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-sage/30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={base} className="flex items-center gap-2 no-underline text-petrol">
          <Image src="/odonate-mark.svg" alt="Odonate logo" width={28} height={28} priority />
          <span className="font-serif tracking-wide text-lg">Odonate</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {link(`${base}`, t.home)}
          {link(`${base}/about`, t.about)}
          {link(`${base}/experience`, t.experience)}
          {link(`${base}/projects`, t.projects)}
          {link(`${base}/contact`, t.contact)}
        </div>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/Bastiblast/" aria-label="GitHub" className="p-2 hover:text-copper transition-colors">
            <Github size={18} />
          </Link>
          <Link href="https://www.linkedin.com/in/bastien-million-608740322" aria-label="LinkedIn" className="p-2 hover:text-copper transition-colors">
            <Linkedin size={18} />
          </Link>
          <ThemeToggle />
          <LanguageSwitch locale={locale} />
        </div>
      </nav>
    </header>
  );
}
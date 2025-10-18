"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { nav } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitch } from "./LanguageSwitch";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";
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
      <Link href={href} className="no-underline">
        <ButtonGroupItem data-active={active}>
          {label}
        </ButtonGroupItem>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-sage/30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={base} className="flex items-center gap-2 no-underline text-petrol">
          <Image src="/logo.png" alt="Odonate logo" width={28} height={28} priority />
          <span className="font-serif tracking-wide text-lg">Odonate</span>
        </Link>
        <div className="hidden md:flex items-center">
          <ButtonGroup>
            {link(`${base}`, t.home)}
            {link(`${base}/about`, t.about)}
            {link(`${base}/experience`, t.experience)}
            {link(`${base}/projects`, t.projects)}
            {link(`${base}/contact`, t.contact)}
          </ButtonGroup>
        </div>
        <div id="social-link" className="flex items-center">
          <ButtonGroup className="h-12 mr-4">
            <Link href="https://github.com/Bastiblast/" aria-label="GitHub" className="p-2 no-underline hover:text-copper transition-colors">
              <Github size={18} />
            </Link>
            <Link href="https://www.linkedin.com/in/bastien-million-608740322" aria-label="LinkedIn" className="p-2 no-underline hover:text-copper transition-colors">
              <Linkedin size={18} />
            </Link>
          </ButtonGroup>
            
          <ButtonGroup className="h-12">

            <ThemeToggle />
            <LanguageSwitch locale={locale} />
          </ButtonGroup>
        </div>
      </nav>
    </header>
  );
}
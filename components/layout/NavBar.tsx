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
            <Link href="https://github.com/Bastiblast/" aria-label="GitHub" className="p-2 no-underline hover:text-sage transition-colors">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="currentColor">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/bastien-million-608740322" aria-label="LinkedIn" className="p-2 no-underline hover:text-petrol transition-colors">
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
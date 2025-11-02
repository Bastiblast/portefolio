"use client";

import Image from "next/image";
import Link from "next/link";
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

  const Links = () => {

    return (
                <ButtonGroup className="h-12">
            <Link href={base} className="no-underline">
              <ButtonGroupItem data-active={pathname === base}>
              {t.home}
              </ButtonGroupItem>
            </Link>
            <Link href={`${base}/about`} className="no-underline text-sm">
              <ButtonGroupItem data-active={pathname === `${base}/about`}
              className="text-md">
              {t.about}
              </ButtonGroupItem>
            </Link>
            <Link href={`${base}/experience`} className="no-underline">
              <ButtonGroupItem data-active={pathname === `${base}/experience`}>
              {t.experience}
              </ButtonGroupItem>
            </Link>
            <Link href={`${base}/projects`} className="no-underline">
              <ButtonGroupItem data-active={pathname === `${base}/projects`}>
              {t.projects}
              </ButtonGroupItem>
            </Link>
            <Link href={`${base}/contact`} className="no-underline">
              <ButtonGroupItem data-active={pathname === `${base}/contact`}>
              {t.contact}
              </ButtonGroupItem>
            </Link>
          </ButtonGroup>
    )
  }
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-border">
      <nav>
        <div>

        <div id="mobile-first-row"  className="flex items-center justify-evenly py-3 min-w-screen">

        <Link href={base} className="flex items-center h-12 no-underline text-secondary hover:text-primary transition-colors">
          <Image src="/Logo-ruban.png" alt="Odonate logo" width={55} height={55} priority />
          <span className="font-serif md:tracking-wide text-lg">Odonate</span>
        </Link>
        <div className="hidden md:flex items-center h-12">
          <Links/>
        </div>
        <div id="social-link" className="flex items-center">
          <ButtonGroup className="md:h-12 mr-4">
            <Link href="https://github.com/Bastiblast/" aria-label="GitHub" className="p-2 no-underline text-primary hover:text-accent transition-colors">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-foreground hover:text-secondary w-[18px] h-[18px] fill-current"><title>GitHub</title><path d="M23.922 16.997C23.061 18.492 18.063 22.02 12 22.02 5.937 22.02.939 18.492.078 16.997A.641.641 0 0 1 0 16.741v-2.869a.883.883 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.098 10.098 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952C7.255 2.937 9.248 1.98 11.978 1.98c2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.841.841 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256Zm-11.75-5.992h-.344a4.359 4.359 0 0 1-.355.508c-.77.947-1.918 1.492-3.508 1.492-1.725 0-2.989-.359-3.782-1.259a2.137 2.137 0 0 1-.085-.104L4 11.746v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.359 4.359 0 0 1-.355-.508Zm2.328 3.25c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm-5 0c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm3.313-6.185c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"/></svg>
            </Link>
            <Link href="https://www.linkedin.com/in/bastien-million-608740322" aria-label="LinkedIn" className="p-2 no-underline text-primary-foreground hover:text-secondary transition-colors">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-foreground hover:text-secondary w-[18px] h-[18px] fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
          </ButtonGroup>
            
          <ButtonGroup className="md:h-12 ">

            <ThemeToggle />
            <LanguageSwitch locale={locale} />
          </ButtonGroup>
        </div>
        </div>
        <div id="mobile-second-row"  className="md:hidden mx-2 mb-2 py-2">
         <Links/>
        </div>
        </div>

      </nav>
    </header>
  );
}
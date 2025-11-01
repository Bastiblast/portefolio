"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { hero } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  const t = hero[locale];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <motion.h1
        className="font-serif text-3xl sm:text-5xl tracking-tight text-secondary"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {t.title}
      </motion.h1>

      <motion.p
        className="mt-4 max-w-2xl text-base sm:text-lg text-foreground/90"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        {t.subtitle}
      </motion.p>

      <motion.div
        className="mt-8 flex gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Link
          href={`/${locale}/projects`}
          className="rounded-md border border-primary bg-card/80 px-4 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 no-underline font-medium"
        >
          {t.ctaProjects}
        </Link>
        <Link
          href={`/${locale}/contact`}
          className="rounded-md border border-primary bg-card/80 px-4 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 no-underline font-medium"
        >
          {t.ctaContact}
        </Link>
      </motion.div>
  
      <motion.blockquote
        className="mt-10 italic text-secondary font-quote text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        οἶδα ὅτι οὐδὲν οἶδα
      </motion.blockquote>
    </section>
  );
}
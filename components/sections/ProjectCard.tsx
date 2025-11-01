"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  index: number;
}

export default function ProjectCard({ project, locale, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link 
        href={`/${locale}/projects/${project.id}`}
        className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/30 hover:border-primary transition-all hover:shadow-lg group no-underline"
      >
        <div className="relative w-16 h-16 flex-shrink-0 bg-card rounded-md overflow-hidden">
          <Image
            src={project.image}
            alt={project.title[locale]}
            fill
            className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div className="flex-1">
          <h2 className="font-serif text-xl text-foreground group-hover:text-secondary transition-colors">
            {project.title[locale]}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            {project.shortDescription[locale]}
          </p>
        </div>
        
        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-secondary" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="View project">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}

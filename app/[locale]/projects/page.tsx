import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { body } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/sections/ProjectCard";

export default async function Projects({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = body.projects[locale];

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-serif text-3xl text-secondary mb-8">{t.title}</h1>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            locale={locale} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
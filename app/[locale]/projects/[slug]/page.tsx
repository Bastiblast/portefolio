import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { projects, getProjectBySlug } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const translations = {
    fr: {
      backToProjects: "← Retour aux projets",
      viewDemo: "Voir la démo",
      viewGithub: "Voir sur GitHub",
      technologies: "Technologies",
      description: "Description"
    },
    en: {
      backToProjects: "← Back to projects",
      viewDemo: "View Demo",
      viewGithub: "View on GitHub",
      technologies: "Technologies",
      description: "Description"
    }
  };

  const t = translations[locale as Locale];

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <Link 
        href={`/${locale}/projects`}
        className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8 no-underline"
      >
        {t.backToProjects}
      </Link>

      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-full md:w-48 h-48 bg-card rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={project.image}
              alt={project.title[locale as Locale]}
              fill
              className="object-contain p-8"
            />
          </div>

          <div className="flex-1">
            <h1 className="font-serif text-4xl text-secondary mb-4">
              {project.title[locale as Locale]}
            </h1>
            
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-4">
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors no-underline font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="External link icon">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" x2="21" y1="14" y2="3"/>
                  </svg>
                  {t.viewDemo}
                </Link>
              )}
              
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors no-underline font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="GitHub icon">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                  {t.viewGithub}
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <h2 className="font-serif text-2xl text-secondary mb-4">
            {t.description}
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            {project.description[locale as Locale]}
          </p>
        </div>
      </div>
    </section>
  );
}

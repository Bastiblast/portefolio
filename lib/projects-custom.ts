import type { Project } from "@/lib/projects";

/**
 * Custom project definitions
 * Add your projects here with full control over metadata
 * These will be merged with auto-detected projects from /public/projects/
 */
export const customProjects: Partial<Record<string, Partial<Project>>> = {
  // Example: Override auto-detected project with custom data
  "homy": {
    description: {
      fr: "Homy est une application de gestion immobilière moderne qui permet de gérer facilement vos propriétés, locataires et paiements. Interface intuitive construite avec React et TypeScript.",
      en: "Homy is a modern property management application that makes it easy to manage your properties, tenants and payments. Intuitive interface built with React and TypeScript."
    },
    githubUrl: "https://github.com/yourusername/homy",
    tags: ["React", "TypeScript", "Vite", "Property Management"],
    featured: true
  },
  
  "scolar-flashcard": {
    description: {
      fr: "Application de cartes mémoire pour l'apprentissage efficace. Créez, organisez et révisez vos cartes avec un système de répétition espacée pour améliorer la rétention.",
      en: "Flashcard application for effective learning. Create, organize and review your cards with a spaced repetition system to improve retention."
    },
    tags: ["React", "TypeScript", "Vite", "Education"],
    featured: false
  },

  // Add more custom projects here...
  // "my-new-project": {
  //   title: {
  //     fr: "Mon Nouveau Projet",
  //     en: "My New Project"
  //   },
  //   shortDescription: {
  //     fr: "Description courte",
  //     en: "Short description"
  //   },
  //   description: {
  //     fr: "Description complète en français...",
  //     en: "Full description in English..."
  //   },
  //   image: "/images/my-project.png",
  //   demoUrl: "/projects/my-new-project/index.html",
  //   githubUrl: "https://github.com/yourusername/my-new-project",
  //   tags: ["React", "Next.js", "TypeScript"],
  //   featured: true
  // },
};

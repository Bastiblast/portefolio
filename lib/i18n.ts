export type Locale = "fr" | "en";

export const nav = {
  fr: { home: "Accueil", about: "À propos", experience: "Expérience", projects: "Projets", contact: "Contact" },
  en: { home: "Home", about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
} as const;

export const hero = {
  fr: {
    title: "Solution en informatique et développement web",
    subtitle: "J’aide les marques à créer des expériences numériques vivantes et durables.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
  },
  en: {
    title: "IT solutions and web development",
    subtitle: "I help brands build living and sustainable digital experiences.",
    ctaProjects: "View projects",
    ctaContact: "Contact me",
  },
} as const;

export const footerCopy = {
  fr: "Équilibre et mouvement",
  en: "Balance and movement",
} as const;
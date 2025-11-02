export type Locale = "fr" | "en";

export const nav = {
  fr: { home: "Accueil", about: "A propos", experience: "Expérience", projects: "Projets", contact: "Contact" },
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

// Page body content
export const body = {
  home: {
    fr: {
      welcome: "Bienvenue",
      intro: "Découvrez mes services en développement web et solutions informatiques.",
      featured: "Projets en vedette",
    },
    en: {
      welcome: "Welcome",
      intro: "Discover my web development and IT solution services.",
      featured: "Featured projects",
    },
  },
  about: {
    fr: {
      title: "À propos de moi",
      intro: "Développeur passionné par la création d'expériences numériques élégantes et performantes.",
      skills: "Compétences",
      background: "Parcours",
    },
    en: {
      title: "About me",
      intro: "Developer passionate about creating elegant and performant digital experiences.",
      skills: "Skills",
      background: "Background",
    },
  },
  experience: {
    fr: {
      title: "Expérience professionnelle",
      current: "Actuel",
      past: "Passé",
      duration: "Durée",
    },
    en: {
      title: "Professional experience",
      current: "Current",
      past: "Past",
      duration: "Duration",
    },
  },
  projects: {
    fr: {
      title: "Mes projets",
      filter: "Filtrer par",
      all: "Tous",
      viewProject: "Voir le projet",
      technologies: "Technologies utilisées",
    },
    en: {
      title: "My projects",
      filter: "Filter by",
      all: "All",
      viewProject: "View project",
      technologies: "Technologies used",
    },
  },
  contact: {
    fr: {
      title: "Me contacter",
      subtitle: "Parlons de votre projet",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      success: "Message envoyé avec succès !",
      error: "Une erreur s'est produite. Veuillez réessayer.",
    },
    en: {
      title: "Contact me",
      subtitle: "Let's talk about your project",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      success: "Message sent successfully!",
      error: "An error occurred. Please try again.",
    },
  },
} as const;
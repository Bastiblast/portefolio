export interface Project {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  image: string;
  path: string;
}

export const projects: Project[] = [
  {
    id: "homy",
    title: {
      fr: "Homy",
      en: "Homy"
    },
    description: {
      fr: "Application web interactive construite avec Vite et React",
      en: "Interactive web application built with Vite and React"
    },
    image: "/projects/homy/vite.svg",
    path: "/projects/homy/index.html"
  }
];

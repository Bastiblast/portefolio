import fs from 'fs';
import path from 'path';
import { customProjects } from './projects-custom';

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
  shortDescription: {
    fr: string;
    en: string;
  };
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  featured: boolean;
}

function getProjectsFromFileSystem(): Project[] {
  const projectsDir = path.join(process.cwd(), 'public', 'projects');
  
  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const folders = fs.readdirSync(projectsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  return folders.map(folderName => {
    const projectPath = path.join(projectsDir, folderName);
    const hasIndexHtml = fs.existsSync(path.join(projectPath, 'index.html'));
    
    // Find an image file (vite.svg, logo, or first image found)
    let imagePath = `/projects/${folderName}/vite.svg`;
    const assetsPath = path.join(projectPath, 'assets');
    
    if (fs.existsSync(assetsPath)) {
      const assets = fs.readdirSync(assetsPath);
      const imageFile = assets.find(file => 
        /\.(png|jpg|jpeg|svg|gif|webp)$/i.test(file)
      );
      if (imageFile) {
        imagePath = `/projects/${folderName}/assets/${imageFile}`;
      }
    } else if (fs.existsSync(path.join(projectPath, 'vite.svg'))) {
      imagePath = `/projects/${folderName}/vite.svg`;
    }

    // Format title from folder name
    const formattedTitle = folderName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Default project data
    const defaultProject: Project = {
      id: folderName,
      title: {
        fr: formattedTitle,
        en: formattedTitle
      },
      shortDescription: {
        fr: `Application web interactive`,
        en: `Interactive web application`
      },
      description: {
        fr: `Application web interactive construite avec Vite et React. Découvrez cette démo en ligne pour voir les fonctionnalités en action.`,
        en: `Interactive web application built with Vite and React. Check out this live demo to see the features in action.`
      },
      image: imagePath,
      demoUrl: hasIndexHtml ? `/projects/${folderName}/index.html` : `/projects/${folderName}`,
      tags: ['React', 'Vite', 'TypeScript'],
      featured: false
    };

    // Merge with custom project data if available
    const customData = customProjects[folderName];
    if (customData) {
      return {
        ...defaultProject,
        ...customData,
        title: customData.title || defaultProject.title,
        shortDescription: customData.shortDescription || defaultProject.shortDescription,
        description: customData.description || defaultProject.description,
      };
    }

    return defaultProject;
  });
}

export const projects: Project[] = getProjectsFromFileSystem();

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.id === slug);
}

# Projects Hybrid Architecture

## Overview

This portfolio uses a **hybrid approach** for projects:
- **Next.js pages** for project details, descriptions, and metadata
- **Static demos** in `/public/projects/` for live application previews

## Architecture

### Project Detail Pages (Next.js)
- **Route**: `/[locale]/projects/[slug]`
- **Purpose**: Rich project information, screenshots, tech stack, links
- **Benefits**: SEO, SSR/SSG, metadata, responsive design

### Live Demos (Static)
- **Location**: `/public/projects/[slug]/`
- **Purpose**: Embedded live demos of Vite/React apps
- **Access**: Linked from project detail pages via "View Demo" button

## How to Add a New Project

### Step 1: Add the Demo (Optional)
If you have a built Vite/React app:

1. Build your project with the correct base path in `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/projects/your-project-name/',
  // ... rest of config
})
```

2. Run `npm run build` or `pnpm build`

3. Copy the `dist/` contents to `/public/projects/your-project-name/`

### Step 2: Configure Project Metadata

The project is **automatically detected** from the filesystem, but you can customize it by editing `/lib/projects.ts`:

```typescript
// The system auto-detects projects, but you can add custom metadata:
export const projects: Project[] = [
  ...getProjectsFromFileSystem(),
  {
    id: "my-custom-project",
    title: {
      fr: "Mon Projet",
      en: "My Project"
    },
    shortDescription: {
      fr: "Description courte",
      en: "Short description"
    },
    description: {
      fr: "Description complète du projet avec détails...",
      en: "Full project description with details..."
    },
    image: "/images/my-project-preview.png",
    demoUrl: "/projects/my-project/index.html", // Optional
    githubUrl: "https://github.com/user/repo", // Optional
    tags: ["React", "TypeScript", "Tailwind"],
    featured: true
  }
];
```

### Step 3: Test

1. Start dev server: `npm run dev`
2. Navigate to `/[locale]/projects` to see the list
3. Click a project to see the detail page
4. Click "View Demo" to see the live application

## File Structure

```
app/
  [locale]/
    projects/
      page.tsx              # Projects list
      [slug]/
        page.tsx            # Project detail page
        loading.tsx         # Loading state

public/
  projects/
    homy/                   # Demo project 1
      index.html
      assets/
    scolar-flashcard/       # Demo project 2
      index.html
      assets/

lib/
  projects.ts               # Project data & auto-detection
```

## Project Interface

```typescript
interface Project {
  id: string;              // Unique identifier (slug)
  title: {
    fr: string;
    en: string;
  };
  shortDescription: {      // Shown in project cards
    fr: string;
    en: string;
  };
  description: {           // Full description on detail page
    fr: string;
    en: string;
  };
  image: string;           // Preview image path
  demoUrl?: string;        // Link to live demo
  githubUrl?: string;      // Link to GitHub repo
  tags: string[];          // Tech stack badges
  featured: boolean;       // Highlight special projects
}
```

## Benefits of This Approach

✅ **Automatic Detection**: Drop projects in `/public/projects/` and they appear
✅ **Rich Detail Pages**: SEO-optimized pages with metadata
✅ **Live Demos**: Embed working applications as iframes
✅ **Flexible**: Mix static demos with custom project pages
✅ **Maintainable**: Easy to add/remove projects
✅ **Localized**: Full i18n support for project descriptions

## Advanced: Custom Project Pages

For projects that need more than auto-detection, create manual entries in `/lib/projects.ts` and optionally add custom content in the detail page.

## Troubleshooting

### Demo not loading (404 errors on assets)
- Check that your Vite project was built with the correct `base` path
- Verify paths in `index.html` start with `/projects/[slug]/`

### Project not appearing in list
- Ensure folder exists in `/public/projects/`
- Check folder contains `index.html` or required files
- Restart dev server to refresh filesystem detection

### Images not showing
- Verify image path in project metadata
- Use absolute paths from `/public/` (e.g., `/projects/slug/image.png`)
- For Next.js Image component, ensure images are optimized

# Portfolio Project Documentation

> **Dernière mise à jour**: 31 octobre 2025  
> **Version**: 0.1.0  
> **Repository**: [Bastiblast/portefolio](https://github.com/Bastiblast/portefolio)

---

## 📋 Vue d'ensemble

Site portfolio personnel développé avec Next.js 15.5, React 19, et Tailwind CSS v4. Le projet utilise le système de routing App Router de Next.js avec support multilingue (i18n) intégré.

### Technologies principales

- **Framework**: Next.js 15.5.6 (avec Turbopack)
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS v4 + @tailwindcss/postcss
- **UI Components**: shadcn/ui (Radix UI)
- **Animations**: Framer Motion 12.23
- **Thème**: next-themes (dark/light mode)
- **Icons**: Lucide React

---

## 🏗️ Structure du projet

```
portefolio/
├── app/
│   ├── [locale]/           # Routes internationalisées
│   │   ├── page.tsx        # Page d'accueil
│   │   ├── about/          # Page À propos
│   │   ├── experience/     # Page Expérience
│   │   ├── projects/       # Page Projets
│   │   ├── contact/        # Page Contact
│   │   └── layout.tsx      # Layout avec NavBar et Footer
│   ├── layout.tsx          # Root layout (fonts, theme provider)
│   └── globals.css         # Styles globaux
│
├── components/
│   ├── layout/             # Composants de mise en page
│   │   ├── NavBar.tsx      # Navigation principale
│   │   ├── Footer.tsx      # Pied de page
│   │   ├── ThemeToggle.tsx # Bouton dark/light mode
│   │   ├── LanguageSwitch.tsx # Sélecteur de langue
│   │   └── ThemeProvider.tsx  # Provider next-themes
│   ├── sections/           # Sections de pages
│   │   ├── Hero.tsx        # Section hero
│   │   └── ProjectCard.tsx # Carte de projet
│   └── ui/                 # Composants UI shadcn
│       ├── button.tsx
│       ├── button-group.tsx
│       ├── skeleton.tsx
│       └── tooltip.tsx
│
├── lib/
│   ├── i18n.ts            # Configuration i18n et traductions
│   ├── projects.ts        # Données des projets
│   └── utils.ts           # Utilitaires (cn, etc.)
│
├── public/                # Assets statiques
├── middleware.ts          # Middleware i18n routing
└── tailwind.config.ts     # Configuration Tailwind
```

---

## 🎨 Système de design

### Palette de couleurs

Le projet utilise un thème personnalisé "Odonate" avec les couleurs principales :
- **Petrol**: Couleur primaire (vert bleuté)
- **Sage**: Couleur secondaire (vert sauge)
- **Cream**: Arrière-plan clair
- **Charcoal**: Texte sombre

### Typographie

- **Sans-serif**: Inter (variable font)
- **Serif**: Lora (variable font)
- **Display**: EB Garamond (italic + normal)

Configuration dans `app/layout.tsx` :
```typescript
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const ebg = EB_Garamond({ subsets: ["latin"], style: ["italic", "normal"], variable: "--font-ebg" });
```

### Composants UI

Le projet utilise **shadcn/ui** avec les composants :
- `Button` & `ButtonGroup` : Actions et navigation
- `Tooltip` : Info-bulles
- `Skeleton` : États de chargement

---

## 🌍 Internationalisation (i18n)

### Configuration

Fichier: `lib/i18n.ts`

Langues supportées :
- Français (`fr`) - par défaut
- Anglais (`en`)

### Structure des traductions

```typescript
export const nav = {
  fr: { home: "Accueil", about: "À propos", ... },
  en: { home: "Home", about: "About", ... }
};
```

### Routing

Le middleware (`middleware.ts`) gère automatiquement la redirection vers `/fr` ou `/en` selon la préférence du navigateur.

---

## 🐛 Problèmes résolus (Historique Git)

### Hydration Mismatch (9b6a4e6)
**Problème**: Erreur d'hydration React dans NavBar ligne 74  
**Cause**: Classe CSS invalide `px-auto` et ordre de classes incohérent entre SSR et client  
**Solution**: Remplacer `px-auto` par `px-4` et harmoniser l'ordre des classes

```diff
- className="md:hidden  flex max-w-6xl items-center justify-between mx-auto px-auto"
+ className="md:hidden mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
```

### Responsive Mobile (c02e33a)
**Problème**: Le body ne s'adapte pas correctement sur mobile  
**Solution potentielle**: Utiliser `min-h-screen` au lieu de `h-screen` avec `overflow-hidden`

### Tailwind v4 Build Error (4cea107)
**Problème**: Import cassé `tw-animate-css`  
**Solution**: Suppression de l'import et utilisation de `tailwindcss-animate`

### Hover Effects (74cfa00, bec66e2)
**Problème**: Effets hover ne fonctionnaient pas sur les boutons  
**Solution**: Ajout de `pointer-events-none` aux SVG icons

---

## 🚀 Scripts disponibles

```bash
# Développement avec Turbopack
pnpm dev

# Build de production
pnpm build

# Démarrer le serveur de production
pnpm start
```

---

## 📝 Bonnes pratiques du projet

### CSS avec Tailwind
- **Ne pas créer de fichiers CSS** : utiliser uniquement les classes Tailwind dans les composants
- Utiliser `cn()` de `lib/utils.ts` pour combiner des classes conditionnellement
- Préférer les composants shadcn pour la cohérence du design

### Responsive Design
- Utiliser `min-h-screen` au lieu de `h-screen` pour éviter les problèmes de scroll mobile
- Préférer `w-full` à `w-screen` pour respecter le container parent
- Tester les breakpoints Tailwind : `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

### Components
- Tous les composants client doivent avoir `"use client"` en première ligne
- Les composants layout utilisent Server Components par défaut
- Utiliser TypeScript strict pour tous les fichiers

### Git
- Messages de commit conventionnels : `feat:`, `fix:`, `refactor:`, `docs:`
- Commits atomiques (une fonctionnalité/fix par commit)

---

## 🔧 Configuration importante

### Tailwind CSS v4

Le projet utilise Tailwind v4 avec le nouveau système PostCSS :

```js
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

### Next.js Config

```typescript
// next.config.ts
const nextConfig = {
  // Turbopack activé par défaut via scripts
};
```

---

## 🎯 Prochaines étapes suggérées

1. **SEO**: Améliorer les métadonnées avec next-seo
2. **Animations**: Ajouter plus d'animations avec Framer Motion
3. **Performance**: Optimiser les images avec next/image
4. **Accessibilité**: Auditer avec Lighthouse et ajouter ARIA labels
5. **Testing**: Ajouter des tests avec Jest/Testing Library
6. **CI/CD**: Setup GitHub Actions pour déploiement automatique

---

## 📚 Ressources

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 👤 Contact

**Repository**: https://github.com/Bastiblast/portefolio  
**GitHub**: [@Bastiblast](https://github.com/Bastiblast/)

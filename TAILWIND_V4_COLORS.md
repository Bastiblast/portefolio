# Tailwind CSS v4 Custom Colors - Fixed

## The Issue
In **Tailwind CSS v4**, the configuration system changed from `tailwind.config.ts` to CSS-based configuration using the `@theme` directive.

## The Solution
Custom colors must be declared in BOTH places:

### 1. CSS Variables (in `app/globals.css`)
```css
:root {
  --color-sage: #8DAA91;
  --color-petrol: #355C7D;
  --color-copper: #B97A56;
  --color-ivory: #F5F3EE;
  --color-charcoal: #2E2E2E;
}
```

### 2. Theme Declaration (in `app/globals.css`)
```css
@theme inline {
  /* ... other theme variables ... */
  
  /* Odonate custom colors */
  --color-sage: var(--color-sage);
  --color-petrol: var(--color-petrol);
  --color-copper: var(--color-copper);
  --color-ivory: var(--color-ivory);
  --color-charcoal: var(--color-charcoal);
}
```

## Available Custom Colors

| Class Name | Hex Value | Usage |
|------------|-----------|-------|
| `bg-sage`, `text-sage`, `border-sage` | `#8DAA91` | Sage green (accent) |
| `bg-petrol`, `text-petrol`, `border-petrol` | `#355C7D` | Petrol blue (primary) |
| `bg-copper`, `text-copper`, `border-copper` | `#B97A56` | Copper (accent) |
| `bg-ivory`, `text-ivory`, `border-ivory` | `#F5F3EE` | Ivory (light background) |
| `bg-charcoal`, `text-charcoal`, `border-charcoal` | `#2E2E2E` | Charcoal (dark background) |

## Usage Examples

```tsx
// Background colors
<div className="bg-ivory dark:bg-charcoal">...</div>

// Text colors
<h1 className="text-petrol">...</h1>
<p className="text-sage">...</p>

// Borders
<div className="border border-sage/30">...</div>

// Hover states
<button className="hover:bg-sage hover:text-ivory">...</button>

// With opacity
<div className="bg-sage/10 text-sage">...</div>
```

## Why `tailwind.config.ts` Still Exists

In Tailwind v4:
- `tailwind.config.ts` is used for plugins, theme extensions (like keyframes), and content paths
- Color configuration is now done in CSS via `@theme`
- This provides better CSS variable integration and runtime theming

## Status

✅ Custom colors now work properly throughout the application
✅ Build includes all color utilities
✅ Dark mode variants work correctly

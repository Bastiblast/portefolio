import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#8DAA91",
        petrol: "#355C7D",
        copper: "#B97A56",
        ivory: "#F5F3EE",
        charcoal: "#2E2E2E",
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-lora)", "Georgia", "serif"],
        quote: ["var(--font-ebg)", "Georgia", "serif"],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0) rotate(0.5deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-0.5deg)' },
        },
        sway: {
          '0%': { transform: 'rotate(-1.2deg)' },
          '100%': { transform: 'rotate(1.2deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.75', filter: 'drop-shadow(0 0 0 rgba(185,122,86,0.0))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 14px rgba(185,122,86,0.55))' },
        },
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'bob-slow': 'bob 7s ease-in-out infinite',
        'sway-slower': 'sway 9s ease-in-out infinite alternate',
        'glow': 'glow 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;

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
    },
  },
  plugins: [],
};

export default config;

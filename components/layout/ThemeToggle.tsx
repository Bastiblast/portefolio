"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center rounded-md border px-3 py-2 text-sm transition-colors border-sage text-sage hover:bg-sage hover:text-ivory"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
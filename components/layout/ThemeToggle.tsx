"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="group px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-petrol/15"
      >
        <Moon size={16} className="pointer-events-none group-hover:text-petrol transition-colors" />
      </button>
    );
  }

  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-petrol/15"
    >
      {isDark ? <Sun size={16} className="pointer-events-none group-hover:text-petrol transition-colors" /> : <Moon size={16} className="pointer-events-none group-hover:text-petrol transition-colors" />}
    </button>
  );
}
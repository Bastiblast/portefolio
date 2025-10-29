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
        className="inline-flex items-center rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-petrol/15 hover:text-petrol focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
      >
        <Moon size={16} className="pointer-events-none" />
      </button>
    );
  }

  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-petrol/15 hover:text-petrol focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
    >
      {isDark ? <Sun size={16} className="pointer-events-none" /> : <Moon size={16} className="pointer-events-none" />}
    </button>
  );
}
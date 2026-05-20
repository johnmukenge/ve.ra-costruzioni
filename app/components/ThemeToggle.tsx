"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme = window.localStorage.getItem("vera-theme");
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme ? savedTheme === "dark" : preferredDark;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("vera-theme", next ? "dark" : "light");
  };

  return (
    <button
      aria-label="Attiva o disattiva modalità scura"
      onClick={toggleTheme}
      className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-[var(--color-primary)] hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

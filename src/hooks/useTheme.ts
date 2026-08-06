import { useState, useEffect } from "react";

export type Theme = "dark" | "light";

/**
 * The first render is always "dark" so that the server output and the client
 * hydration match. The inline script in index.html has already applied the
 * saved theme to <html>, so there is no flash; the effect below simply adopts
 * whatever class is already on the document.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, isDark: theme === "dark", toggle };
}

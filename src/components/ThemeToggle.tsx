"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem("theme");
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = (dark: boolean, persist = true) => {
      root.classList.toggle("dark", dark);
      setIsDark(dark);
      if (persist) localStorage.setItem("theme", dark ? "dark" : "light");
    };

    if (stored === "dark") apply(true);
    else if (stored === "light") apply(false);
    else apply(mq.matches);

    const onChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) apply(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = () =>
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-light-primary"
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full ${isDark ? "translate-x-6" : "translate-x-1"} bg-light-on-primary transition-transform`}
      />
    </button>
  );
}

"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";

export default function ThemeToggle() {
  // Start from whatever the no-flash script already set on <html>.
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      className="theme-btn"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title="Toggle theme"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

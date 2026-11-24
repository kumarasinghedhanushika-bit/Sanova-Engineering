"use client";
import { Moon, Sun } from "lucide-react";

// Stateless: icons swap via the `dark:` variant, so server and client markup always match.
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#030b1f" : "#f5f7fb");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`flex h-10 w-10 items-center justify-center rounded-xl border border-fg/15 bg-fg/5 text-fg/80 transition hover:border-volt/50 hover:text-accent ${className}`}
    >
      <Moon className="h-5 w-5 dark:hidden" />
      <Sun className="hidden h-5 w-5 dark:block" />
    </button>
  );
}

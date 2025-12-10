"use client";

import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="mb-5 cursor-pointer text-lg underline underline-offset-[2.5px] decoration-1 decoration-neutral-400 hover:decoration-neutral-300 dark:hover:decoration-neutral-500 transition-colors"
    >
      Toggle to <span className="dark:hidden">dark</span>
      <span className="hidden dark:inline">light</span>
    </button>
  );
};

export default ThemeButton;

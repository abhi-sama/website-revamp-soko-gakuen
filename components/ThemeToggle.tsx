"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
    >
      {/*
        Which icon shows is decided by CSS off the `dark` class that next-themes
        sets on <html> before first paint. Rendering both and hiding one keeps
        the markup identical on server and client, so there is no hydration
        mismatch and no need to gate on a mounted flag.
      */}
      <Moon className="size-5 dark:hidden" aria-hidden="true" />
      <Sun className="size-5 hidden dark:block" aria-hidden="true" />
    </Button>
  );
}

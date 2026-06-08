"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render the icon after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a same-size placeholder so layout doesn't shift
    return <div className="size-8" aria-hidden="true" />;
  }

  // resolvedTheme is always "light" or "dark" (accounts for "system" preference),
  // whereas theme can be "system" and would never equal "dark" on first visit.
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
    >
      {isDark ? (
        <Sun className="size-5" aria-hidden="true" />
      ) : (
        <Moon className="size-5" aria-hidden="true" />
      )}
    </Button>
  );
}

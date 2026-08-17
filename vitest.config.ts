import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "node",
    globals: true,
    // `e2e/` holds Playwright specs, which match vitest's default `*.spec.ts`
    // glob but import `@playwright/test` and need a running server. Without
    // this exclusion `pnpm test` collects them and fails at import time.
    exclude: [...configDefaults.exclude, "e2e/**"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});

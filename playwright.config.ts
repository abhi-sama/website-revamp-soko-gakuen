import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright config for the production-build console-error smoke check.
 *
 * This suite is deliberately separate from `pnpm test` (vitest): it needs a
 * real production build and a running Next.js server, which vitest neither
 * provides nor should wait for. `vitest.config.ts` excludes `e2e/**` so the
 * two runners never collect each other's files.
 *
 * The check runs against `next build` + `next start`, NOT `next dev`, because
 * the class of bug it guards (React hydration mismatches such as the minified
 * #418 that shipped on /scholarships) is reported differently in development,
 * and because dev-only overlays and HMR sockets add console noise of their own.
 */
const PORT = Number(process.env.E2E_PORT ?? 3100);
const BASE_URL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "./e2e",

  // Fail the run rather than mask a real console error behind a retry. A page
  // that logs an error only sometimes is still a page that logs an error.
  retries: 0,
  forbidOnly: !!process.env.CI,

  // Each test owns its own page and its own listeners, so they are safe to run
  // in parallel; the server under test is read-only.
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,

  reporter: process.env.CI
    ? [["github"], ["list"], ["html", { open: "never" }]]
    : [["list"]],

  use: {
    baseURL: BASE_URL,
    // No screenshots/video: the failure message carries the console text
    // verbatim, which is the whole diagnostic.
    trace: "off",
  },

  /**
   * Every route is visited twice, once per `prefers-color-scheme`. The
   * next-themes inline script reads that preference before React hydrates, so
   * it is a plausible source of server/client divergence that light-only
   * coverage would miss entirely.
   */
  projects: [
    {
      name: "chromium-light",
      use: { ...devices["Desktop Chrome"], colorScheme: "light" },
    },
    {
      name: "chromium-dark",
      use: { ...devices["Desktop Chrome"], colorScheme: "dark" },
    },
  ],

  webServer: {
    command: "pnpm run build && pnpm run start",
    url: BASE_URL,
    // `next start` reads PORT from the environment. Passing the port through
    // env rather than as a CLI flag avoids `pnpm run start -- --port N`, where
    // pnpm forwards the `--` itself and Next reads it as a directory argument.
    env: { PORT: String(PORT) },
    // A cold `next build` dominates this; five minutes leaves CI headroom.
    timeout: 300_000,
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
    stderr: "pipe",
  },
});

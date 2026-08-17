/**
 * Production-build console smoke check.
 *
 * WHY THIS EXISTS
 * A React hydration mismatch (minified error #418) shipped on /scholarships and
 * cost a full manual investigation to find, because "does any page log an error
 * in production?" had no cheap, repeatable answer. The unit suite's
 * `__tests__/html-nesting.test.tsx` catches exactly ONE cause of that class of
 * bug - flow content nested inside a `<p>` - by string-scanning server markup.
 * Every other cause is invisible to it:
 *   - a `Date`/`Math.random` value differing between server and client,
 *   - foster-parented content inside a `<table>`,
 *   - nested `<a>` or `<button>`,
 *   - a client-only branch on `typeof window`,
 *   - a plain runtime `TypeError` thrown inside a client component.
 * All of those DO surface as `console.error` or `pageerror` in a real browser,
 * which is what this spec listens for.
 *
 * WHAT IT ASSERTS
 * For every route, under both `prefers-color-scheme: light` and `dark`:
 * zero `console.error` messages and zero uncaught page errors during load.
 *
 * DETERMINISM
 * No clock, no RNG, no live network - the only traffic is the local production
 * server started by `playwright.config.ts`. The only wait is a fixed settle
 * window AFTER the network goes idle, which can only ever give an error more
 * time to appear, never less; it cannot turn a clean page red.
 */
import { test, expect, type ConsoleMessage, type Page } from "@playwright/test";

/**
 * Every route under `app/`, plus one deliberately-missing path so the 404
 * rendering path is covered too.
 *
 * Keep this list in sync with `app/`: a route added without a line here is a
 * route this check silently does not cover. `__tests__/pages-smoke.test.ts`
 * holds the parallel list for the unit layer.
 */
const ROUTES = [
  "/",
  "/children",
  "/contact",
  "/courses",
  "/directions",
  "/enroll",
  "/eval-exam",
  "/extra",
  "/faculty",
  "/mission",
  "/schedule",
  "/scholarships",
] as const;

/** A path with no `app/` segment, so Next.js renders its not-found page. */
const MISSING_ROUTE = "/__this-route-does-not-exist__";

/**
 * Console errors that are EXPECTED, keyed by the route that may produce them.
 *
 * This is an explicit per-route allow-list rather than a broad filter on
 * purpose: a global "ignore anything mentioning 404" would also swallow a real
 * broken asset on a real page, which is precisely the kind of bug this check is
 * meant to catch. Only the deliberately-missing route gets an exemption, and
 * only for the navigation's own 404 status.
 */
const ALLOWED_CONSOLE_ERRORS: Record<string, RegExp[]> = {
  [MISSING_ROUTE]: [
    // Chromium logs the navigation's own non-2xx status as a console error.
    // That 404 is the point of the route, not a defect.
    /Failed to load resource: the server responded with a status of 404/i,
  ],
};

type Captured = {
  consoleErrors: string[];
  pageErrors: string[];
};

/**
 * Cut off every request that does not go to the app under test.
 *
 * `/directions` embeds a live Google Maps iframe. Left alone, that makes this
 * suite depend on a third party's availability: an observed run went red on
 * `/directions` in dark mode and green on a rerun, because the embed - not our
 * code - failed. A smoke check that goes red for someone else's outage trains
 * people to rerun it, which is how a real regression gets waved through.
 *
 * Blocking is also the honest scope. This spec answers "does OUR app log an
 * error", so third-party availability is out of scope by design, not by
 * oversight - if the embed ever needs its own coverage, that is a separate
 * check that is allowed to be network-dependent.
 */
async function blockThirdPartyRequests(page: Page, origin: string) {
  await page.route("**/*", (route) => {
    const url = route.request().url();
    if (url.startsWith(origin)) return route.continue();
    return route.abort();
  });
}

/**
 * Attach listeners BEFORE the first navigation, so nothing logged during the
 * initial parse or hydration is missed.
 *
 * `origin` scopes what counts. A console message Chromium attributes to a
 * third-party URL (including the aborted requests above) is not a defect in our
 * markup, and this check would be useless if it reported them. This is a filter
 * on WHERE the message came from, never on what it says: an error attributed to
 * our own origin is always reported, even if it names a third party.
 */
function capture(page: Page, route: string, origin: string): Captured {
  const allowed = ALLOWED_CONSOLE_ERRORS[route] ?? [];
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on("console", (msg: ConsoleMessage) => {
    if (msg.type() !== "error") return;

    const source = msg.location().url;
    if (source && !source.startsWith(origin)) return;

    const text = msg.text();
    if (allowed.some((pattern) => pattern.test(text))) return;
    consoleErrors.push(text);
  });

  page.on("pageerror", (error: Error) => {
    pageErrors.push(`${error.name}: ${error.message}`);
  });

  return { consoleErrors, pageErrors };
}

/**
 * Load the route and give the client bundle time to hydrate.
 *
 * React reports a hydration mismatch AFTER the main bundle runs, so asserting
 * at `load` would race it. `networkidle` covers bundle fetch and execution; the
 * fixed settle window afterwards absorbs the microtask/effect flush. That
 * window only ever gives an error MORE time to surface, so it cannot turn a
 * clean page red - the failure mode of tuning it wrong is a miss, not a flake.
 */
async function loadAndSettle(page: Page, route: string) {
  await page.goto(route, { waitUntil: "load" });
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(750);
}

for (const route of [...ROUTES, MISSING_ROUTE]) {
  const label = route === MISSING_ROUTE ? `${route} (404)` : route;

  test(`loads ${label} with no browser console errors`, async ({
    page,
    baseURL,
  }) => {
    // Arrange
    const origin = new URL(baseURL!).origin;
    await blockThirdPartyRequests(page, origin);
    const captured = capture(page, route, origin);

    // Act
    await loadAndSettle(page, route);

    // Assert
    expect(
      captured.pageErrors,
      `${label} threw an uncaught error during load`,
    ).toEqual([]);
    expect(
      captured.consoleErrors,
      `${label} logged console.error during load`,
    ).toEqual([]);
  });
}

/**
 * Guards the guard. If the theme script stopped applying the OS preference, the
 * two colour-scheme projects above would still both pass while silently
 * exercising the same code path, and the dark-mode half of this suite would
 * become decoration.
 */
test("renders under the colour scheme the project asked for", async ({
  page,
  baseURL,
}, testInfo) => {
  // Arrange
  const expected =
    testInfo.project.name === "chromium-dark" ? "dark" : "light";
  await blockThirdPartyRequests(page, new URL(baseURL!).origin);

  // Act
  await loadAndSettle(page, "/");
  const applied = await page.evaluate(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );

  // Assert
  expect(applied).toBe(expected);
});

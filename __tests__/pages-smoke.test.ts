/**
 * Smoke tests: verify every page module exports a default React component.
 * These run without a Next.js server, so we mock any external dependencies.
 */
import { describe, it, expect, vi } from "vitest";

// Stub Next.js modules that are unavailable in the vitest environment
vi.mock("next/image", () => ({
  default: () => null,
}));
vi.mock("next/link", () => ({
  default: ({ children }: { children: React.ReactNode }) => children,
}));
vi.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter" }),
}));

const PAGE_MODULES = [
  "../app/page",
  "../app/schedule/page",
  "../app/courses/page",
  "../app/enroll/page",
  "../app/eval-exam/page",
  "../app/scholarships/page",
  "../app/faculty/page",
  "../app/directions/page",
  "../app/children/page",
  "../app/mission/page",
  "../app/extra/page",
  "../app/contact/page",
];

describe("Page modules export default components", () => {
  for (const modulePath of PAGE_MODULES) {
    it(`${modulePath} exports a default function`, async () => {
      const mod = await import(modulePath);
      expect(typeof mod.default).toBe("function");
    });
  }
});

/**
 * Regression guard: every page must declare its own title and description.
 * Before this was added, all 12 pages inherited the root layout's metadata and
 * were indistinguishable in a browser tab, a bookmark, or a search result.
 */
describe("Every page declares its own metadata", () => {
  for (const modulePath of PAGE_MODULES) {
    it(`${modulePath} exports a title and a description`, async () => {
      const mod = await import(modulePath);
      expect(mod.metadata, `${modulePath} has no metadata export`).toBeDefined();

      // A page title is either a plain string, or `{ absolute: string }`
      // for the home page, which opts out of the root layout's template.
      const { title } = mod.metadata;
      const titleText = typeof title === "string" ? title : title?.absolute;
      expect(typeof titleText, `${modulePath} has no usable title`).toBe("string");
      expect(titleText!.length).toBeGreaterThan(0);

      expect(typeof mod.metadata.description).toBe("string");
      expect(mod.metadata.description.length).toBeGreaterThan(0);
    });
  }

  it("gives every page a distinct title and description", async () => {
    const mods = await Promise.all(PAGE_MODULES.map((p) => import(p)));

    const titles = mods.map((m) =>
      typeof m.metadata.title === "string"
        ? m.metadata.title
        : m.metadata.title.absolute,
    );
    const descriptions = mods.map((m) => m.metadata.description);

    expect(new Set(titles).size).toBe(PAGE_MODULES.length);
    expect(new Set(descriptions).size).toBe(PAGE_MODULES.length);
  });
});

describe("Root layout owns the title template", () => {
  it("defines a default title and a template for child pages", async () => {
    const { metadata } = await import("../app/layout");
    expect(metadata.title).toMatchObject({
      default: expect.any(String),
      template: expect.stringContaining("%s"),
    });
  });
});

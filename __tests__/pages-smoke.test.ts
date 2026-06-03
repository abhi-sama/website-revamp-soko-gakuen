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

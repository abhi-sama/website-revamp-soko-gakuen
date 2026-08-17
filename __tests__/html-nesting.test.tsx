/**
 * Regression test for React hydration error #418 (server/client HTML mismatch).
 *
 * `<p>` may only contain phrasing content.
 * When the HTML parser meets a flow-content start tag (`<address>`, `<div>`,
 * `<ul>`, ...) while a `<p>` is open, it implicitly closes the `<p>`.
 * The DOM the browser builds from the server HTML then has that element as a
 * SIBLING of the paragraph, while React's client render expects it as a CHILD,
 * which is exactly the mismatch React reports as minified error #418.
 *
 * This test server-renders every page and the shared Footer and scans the
 * markup for that nesting mistake, so the bug cannot come back on any route.
 */
import { describe, it, expect, vi } from "vitest";
import type { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/image", () => ({
  default: () => null,
}));
vi.mock("next/link", () => ({
  default: ({ children }: { children: React.ReactNode }) => children,
}));
vi.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter" }),
}));

/**
 * Elements whose start tag implicitly closes an open `<p>`.
 * https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inbody
 */
const AUTO_CLOSES_P = new Set([
  "address", "article", "aside", "blockquote", "center", "details", "dialog",
  "dir", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form",
  "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "listing",
  "main", "menu", "nav", "ol", "p", "plaintext", "pre", "search", "section",
  "summary", "table", "ul", "xmp",
]);

/** Void elements never open a scope. */
const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
  "param", "source", "track", "wbr",
]);

const TAG_RE = /<(\/)?([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/)?>/g;

/**
 * Walk the markup with a tag stack and report every flow element opened while a
 * `<p>` is still on the stack. Returns human-readable findings, empty if clean.
 */
export function findInvalidParagraphNesting(html: string): string[] {
  const stack: string[] = [];
  const findings: string[] = [];

  for (const match of html.matchAll(TAG_RE)) {
    const isClosing = Boolean(match[1]);
    const tag = match[2].toLowerCase();
    const selfClosing = Boolean(match[4]);

    if (isClosing) {
      const index = stack.lastIndexOf(tag);
      if (index !== -1) stack.length = index;
      continue;
    }

    if (stack.includes("p") && AUTO_CLOSES_P.has(tag)) {
      findings.push(
        `<${tag}> inside <p> (stack: ${[...stack, tag].join(" > ")})`,
      );
    }

    if (!selfClosing && !VOID_ELEMENTS.has(tag)) stack.push(tag);
  }

  return findings;
}

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

describe("findInvalidParagraphNesting", () => {
  it("flags flow content nested inside a paragraph", () => {
    expect(
      findInvalidParagraphNesting(
        '<p class="mt-3">Mail to: <address class="inline">x</address></p>',
      ),
    ).toEqual(["<address> inside <p> (stack: p > address)"]);
  });

  it("accepts phrasing content inside a paragraph", () => {
    expect(
      findInvalidParagraphNesting(
        '<p>Email <a href="mailto:a@b.c">a@b.c</a><br/><strong>now</strong></p>',
      ),
    ).toEqual([]);
  });

  it("accepts a paragraph nested inside an address", () => {
    expect(
      findInvalidParagraphNesting(
        '<address class="not-italic"><p>440 Austin Street</p></address>',
      ),
    ).toEqual([]);
  });
});

describe("Server-rendered markup has no <p> nesting violations", () => {
  for (const modulePath of PAGE_MODULES) {
    it(`${modulePath} renders valid paragraph nesting`, async () => {
      const mod = await import(modulePath);
      const Page = mod.default as () => ReactElement;
      const html = renderToStaticMarkup(<Page />);
      expect(findInvalidParagraphNesting(html)).toEqual([]);
    });
  }

  it("components/Footer renders valid paragraph nesting", async () => {
    const { default: Footer } = await import("../components/Footer");
    const html = renderToStaticMarkup(<Footer />);
    expect(findInvalidParagraphNesting(html)).toEqual([]);
  });
});

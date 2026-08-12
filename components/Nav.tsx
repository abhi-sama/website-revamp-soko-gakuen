"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Courses", href: "/courses" },
  { label: "Enrollment", href: "/enroll" },
  { label: "Faculty", href: "/faculty" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Eval & Exams", href: "/eval-exam" },
  { label: "Directions", href: "/directions" },
  { label: "Children's Classes", href: "/children" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-[#1a3a1a] dark:text-green-300"
          >
            {/*
              symbol.gif is black line art on a transparent background, so it
              disappears against the dark header. It is fully achromatic, which
              makes inverting it lossless: the strokes come back as white.
            */}
            <Image
              src="/symbol.gif"
              alt="Soko Gakuen symbol"
              width={36}
              height={36}
              className="w-9 h-9 object-contain flex-shrink-0 dark:invert"
              unoptimized
            />
            <span className="hidden sm:inline">Soko Gakuen</span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden xl:flex items-center"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-[#1a3a1a] text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700 hover:text-[#1a3a1a] dark:hover:text-green-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: theme toggle + hamburger */}
          <div className="flex items-center gap-1">
            <ThemeToggle />

            {/* Hamburger button */}
            <button
              className="xl:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="xl:hidden bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 px-4 pb-4"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#1a3a1a] text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700 hover:text-[#1a3a1a] dark:hover:text-green-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

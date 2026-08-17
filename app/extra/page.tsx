import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Resources & Grades Repository",
  description:
    "Useful resources for Soko Gakuen students and the broader Japanese language learning community, including the student grades repository and a school video.",
};

const usefulLinks = [
  {
    label: "Japan Guide",
    url: "https://www.japan-guide.com",
    description: "Comprehensive travel and culture guide to Japan.",
  },
  {
    label: "Web Japan",
    url: "https://web-japan.org",
    description:
      "Official Japanese government site about Japanese culture, society, and language.",
  },
  {
    label: "NHK World – Read Japanese Newspapers Online",
    url: "https://www3.nhk.or.jp/nhkworld/",
    description:
      "NHK World — read current Japanese news in Japanese and English.",
  },
];

export default function ExtraPage() {
  return (
    <div className="bg-[#fafaf7] dark:bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a] dark:hover:text-green-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">Resources</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] dark:text-green-300 mb-4">
          Resources &amp; Grades Repository
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
          Useful resources for Soko Gakuen students and the broader Japanese
          language learning community.
        </p>

        <div className="space-y-6 max-w-3xl">
          {/* Grades Repository */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Student Grades Repository
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-3">
              <p>
                Soko Gakuen maintains a digitized Student Grades Repository for
                secure, long-term storage of academic records. Students who need
                to access their grades or academic history should contact the
                school.
              </p>
              <p>
                Contact:{" "}
                <a
                  href="mailto:sokogakuen@gmail.com"
                  className="text-[#1a3a1a] dark:text-green-300 hover:underline"
                >
                  sokogakuen@gmail.com
                </a>{" "}
                or{" "}
                <a
                  href="tel:4159289608"
                  className="text-[#1a3a1a] dark:text-green-300 hover:underline"
                >
                  415-928-9608
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Video */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                About Our School — Video
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-3">
              <p>
                Watch a short 3-minute video about Soko Gakuen Japanese Language
                School on Vimeo.
              </p>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-[#1a3a1a] hover:bg-[#2a5a2a] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch on Vimeo
              </a>
            </CardContent>
          </Card>

          {/* Useful Links */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Useful Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {usefulLinks.map((link) => (
                  <li key={link.url} className="flex flex-col gap-1">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#1a3a1a] dark:text-green-300 hover:underline flex items-center gap-1"
                    >
                      {link.label}
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{link.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-[#1a3a1a] dark:text-green-300 hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

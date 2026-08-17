import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Ben Yoshikawa Scholarship",
  description:
    "The Ben Yoshikawa Scholarship awards $1,000 to one qualifying student per cycle, as four-term tuition remission or the cash equivalent. See eligibility rules.",
};

export default function ScholarshipsPage() {
  return (
    <div className="bg-[#fafaf7] dark:bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a] dark:hover:text-green-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">Scholarships</span>
        </nav>

        <div className="max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] dark:text-green-300">
                Ben Yoshikawa Scholarship
              </h1>
              <Badge className="text-sm bg-[#b8860b] text-white">
                $1,000 Award
              </Badge>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Established 2003 &middot; Revised 2016
            </p>
            <blockquote
              className="mt-4 border-l-4 border-[#1a3a1a] dark:border-green-400 pl-4 italic text-gray-600 dark:text-gray-400 text-lg"
            >
              &ldquo;A Commitment To Excellence&rdquo;
            </blockquote>
          </div>

          {/* Award */}
          <Card className="shadow-sm mb-6">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                The Award
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                The Ben Yoshikawa Scholarship awards{" "}
                <strong>$1,000</strong> to one qualifying student per award
                cycle, in the form of either:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside ml-2">
                <li>Four-term tuition remission (covers a full year of courses), or</li>
                <li>Cash equivalent ($1,000)</li>
              </ul>
              <p className="mt-3 text-gray-500 dark:text-gray-400 text-xs">
                Subject to Board of Directors approval and fund availability.
              </p>
            </CardContent>
          </Card>

          {/* Eligibility */}
          <Card className="shadow-sm mb-6">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Eligibility Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-3">
              <p>
                To be eligible for the Ben Yoshikawa Scholarship, an applicant
                must meet <strong>all four</strong> of the following criteria:
              </p>
              <ol className="space-y-3 list-decimal list-inside">
                <li>
                  <strong>Current or former Soko Gakuen student</strong> — Must
                  be currently enrolled or have previously enrolled at Soko
                  Gakuen Japanese Language School.
                </li>
                <li>
                  <strong>Academic excellence</strong> — Must have achieved{" "}
                  <strong>95% or higher</strong> on final exams in at least{" "}
                  <strong>6 courses</strong>, with{" "}
                  <strong>100% attendance</strong> in each of those 6 courses.
                </li>
                <li>
                  <strong>Faculty recommendation</strong> — Must submit one
                  letter of recommendation from a current or former Soko Gakuen
                  instructor.
                </li>
                <li>
                  <strong>Written exit exam</strong> — Must pass a written
                  composition exam administered by Soko Gakuen.
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* How to Apply */}
          <Card className="shadow-sm mb-6">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                How to Apply
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-2">
              <p>Submit your application documents to the Soko Gakuen office:</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li>
                  Proof of final exam scores (6 exams with 95%+ scores and 100%
                  attendance records)
                </li>
                <li>One recommendation letter from a Soko Gakuen instructor</li>
                <li>
                  Written composition (submitted in connection with the exit
                  exam)
                </li>
              </ul>
              <address className="not-italic mt-3">
                <p>
                  Mail to: Soko Gakuen, 440 Austin Street, San Francisco, CA
                  94109
                </p>
              </address>
              <p className="mt-2">
                Questions? Email{" "}
                <a
                  href="mailto:sokogakuen@gmail.com"
                  className="text-[#1a3a1a] dark:text-green-300 hover:underline"
                >
                  sokogakuen@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Note */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-300">
            <strong>Note:</strong> The scholarship is awarded subject to Board
            of Directors approval and the availability of scholarship funds.
            Soko Gakuen reserves the right to defer or adjust the award in any
            given cycle.
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <Link
            href="/eval-exam"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-[#1a3a1a] hover:bg-[#2a5a2a] transition-colors"
          >
            Evaluation &amp; Exams
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border border-[#1a3a1a] dark:border-green-300 text-[#1a3a1a] dark:text-green-300 hover:bg-[#1a3a1a] dark:hover:bg-green-300 hover:text-white dark:hover:text-zinc-900 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Evaluation & Exams",
  description:
    "How Soko Gakuen assesses student progress: final exams and makeup policy, progress reports, certificates of course completion, and placement testing.",
};

export default function EvalExamPage() {
  return (
    <div className="bg-[#fafaf7] dark:bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a] dark:hover:text-green-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">Evaluation &amp; Exams</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] dark:text-green-300 mb-4">
          Evaluation &amp; Exams
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
          Soko Gakuen maintains high academic standards. Here is how student
          progress is assessed and how certificates and recommendations are
          issued.
        </p>

        <div className="space-y-6 max-w-3xl">
          {/* Final Exams */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Final Exams
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-2">
              <p>
                Final exams are administered at the end of each term. Completed
                exams are kept on file for at least one year. Students may
                request to view their corrected papers during that time.
              </p>
              <p>
                All exam results are stored in Soko Gakuen&apos;s digitized{" "}
                <strong>Student Grades Repository</strong> for long-term
                academic record keeping.
              </p>
            </CardContent>
          </Card>

          {/* Makeup Exams */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Final Exam Makeup Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                Makeup exams are only available in a supervised setting at Soko
                Gakuen. Students who miss their scheduled final exam must
                contact the school office to arrange a supervised makeup
                session. No remote or unsupervised makeups are permitted.
              </p>
            </CardContent>
          </Card>

          {/* Progress Reports */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Progress Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-2">
              <p>
                Progress Reports are available upon request. Grading uses a{" "}
                <strong>7-point scale</strong> assessing the following areas:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Grammar</li>
                <li>Writing</li>
                <li>Reading</li>
                <li>Oral / Speaking</li>
                <li>Listening comprehension</li>
                <li>Vocabulary</li>
                <li>Overall participation</li>
              </ul>
            </CardContent>
          </Card>

          {/* Certificates */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Certificate of Course Completion
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-2">
              <p>
                A <strong>Certificate of Course Completion</strong> is issued to
                students who meet both of the following criteria:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <strong>80% or higher attendance</strong> for the term
                </li>
                <li>
                  <strong>80% or higher score</strong> on the final exam
                </li>
              </ul>
              <p className="mt-2">
                Students who do not meet both thresholds will not receive a
                certificate for that term, regardless of overall performance.
              </p>
            </CardContent>
          </Card>

          {/* ACTFL Standards */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                ACTFL Proficiency Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                Soko Gakuen uses the{" "}
                <strong>
                  ACTFL (American Council on the Teaching of Foreign Languages)
                  Japanese Language Proficiency Guidelines
                </strong>{" "}
                as exit criteria for course levels. This ensures that student
                progress maps to nationally recognized standards of language
                proficiency.
              </p>
            </CardContent>
          </Card>

          {/* Proficiency / Placement Tests */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Proficiency &amp; Placement Tests
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-2">
              <p>
                The <strong>PT300 Proficiency Test</strong> is required for
                enrollment in advanced courses including:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Practical Communication</li>
                <li>Reading Comprehension</li>
              </ul>
              <p>
                Placement tests are also available for new students who have
                studied Japanese previously and wish to place into a level
                appropriate for their current ability. Contact the school to
                arrange a placement test.
              </p>
            </CardContent>
          </Card>

          {/* Advice & Letters of Recommendation */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Advice &amp; Letters of Recommendation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                Students may request academic advice or letters of
                recommendation from their instructors. Please allow reasonable
                lead time when requesting recommendation letters, especially for
                scholarship or academic program applications.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex gap-4">
          <Link
            href="/scholarships"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-[#1a3a1a] hover:bg-[#2a5a2a] transition-colors"
          >
            Scholarships
          </Link>
          <Link
            href="/enroll"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border border-[#1a3a1a] dark:border-green-300 text-[#1a3a1a] dark:text-green-300 hover:bg-[#1a3a1a] dark:hover:bg-green-300 hover:text-white dark:hover:text-zinc-900 transition-colors"
          >
            How to Enroll
          </Link>
        </div>
      </div>
    </div>
  );
}

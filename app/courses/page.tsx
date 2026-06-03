import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const courses = [
  {
    id: "beg-conv",
    title: "Beginning Conversation",
    level: "Beginner",
    textbook: "Japanese For Busy People I (Romanized)",
    description:
      "Introduction to conversational Japanese. Focuses on survival listening and speaking skills and basic vocabulary. Students will learn to: talk about nationalities and occupations, introduce themselves, ask for phone numbers, talk about prices, order at restaurants, discuss travel and weather.",
    note: "NO WRITING TAUGHT in this course. Ideal for students who want oral communication skills only.",
  },
  {
    id: "beg-1-3",
    title: "Beginning 1, 2, and 3",
    level: "Beginner",
    textbook: "Japanese For Busy People (JFBP)",
    description:
      "A systematic introduction to the Japanese language. Students learn hiragana, katakana, and basic kanji along with grammar, reading, and writing. The three-course sequence progresses through the complete beginner curriculum, building a solid foundation for intermediate study.",
  },
  {
    id: "beg-conv-2",
    title: "Beginning Conversation 2",
    level: "Beginner–Intermediate",
    textbook: "Japanese For Busy People (Romanized) — continuation",
    description:
      "Continuation of Beginning Conversation. Students develop more complex conversational skills and expand their vocabulary and situational fluency.",
  },
  {
    id: "int-1-6",
    title: "Intermediate 1 through 6",
    level: "Intermediate",
    textbook: "Speaking of Japanese (SFJ)",
    description:
      "A progressive six-level intermediate sequence covering advanced grammar, reading, and writing. Each level builds on the previous, developing increasingly sophisticated language skills appropriate for real-world communication in Japanese.",
  },
  {
    id: "jlpt-n5",
    title: "JLPTn5&k / JLPTn4&k",
    level: "Beginner–Intermediate",
    textbook: "JLPT preparation materials",
    description:
      "Preparation courses for the Japanese Language Proficiency Test at levels N5 and N4, with integrated kanji study. Structured to cover all JLPT exam components: vocabulary, grammar, reading comprehension, and listening.",
  },
  {
    id: "jlpt-n3",
    title: "JLPTn3&k",
    level: "Intermediate",
    textbook: "JLPT N3 preparation materials",
    description:
      "Preparation for the JLPT N3 exam with integrated kanji instruction. N3 represents an intermediate level of Japanese ability and is recognized by many employers and academic institutions.",
  },
  {
    id: "jlpt-n2",
    title: "JLPTn2 Prep Course",
    level: "Advanced",
    textbook: "JLPT N2 preparation materials",
    description:
      "Intensive preparation for the JLPT N2 examination. N2 is near-fluent level and widely recognized for employment and academic purposes. Covers advanced grammar structures, extensive vocabulary, reading passages, and listening comprehension.",
  },
  {
    id: "practical",
    title: "Practical Communication",
    level: "Advanced",
    textbook: "Advanced communication materials",
    description:
      "Advanced conversational and practical Japanese for real-world communication. Focuses on nuanced oral expression, cultural literacy, and situational language use.",
    prereq: "Pass Proficiency Test (PT300) required.",
  },
  {
    id: "reading",
    title: "Reading Comprehension",
    level: "Advanced",
    textbook: "Advanced reading materials",
    description:
      "Advanced reading skills in Japanese. Students work with authentic Japanese texts to develop comprehension, speed, and analytical ability.",
    prereq: "Pass Proficiency Test (PT300) required.",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-800",
  "Beginner–Intermediate": "bg-blue-100 text-blue-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800",
};

export default function CoursesPage() {
  return (
    <div className="bg-[#fafaf7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Course Descriptions</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] mb-4">
          Course Descriptions
        </h1>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Soko Gakuen offers a comprehensive range of Japanese language courses
          from absolute beginners through advanced levels, including JLPT
          preparation. Each course meets once a week for 3 hours over 11 weeks
          (33 contact hours).
        </p>

        <div className="space-y-6">
          {courses.map((course, idx) => (
            <Card key={course.id} className="bg-white shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-lg text-[#1a3a1a]">
                    {course.title}
                  </CardTitle>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      levelColors[course.level] ?? "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {course.level}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-medium">Textbook:</span>{" "}
                  {course.textbook}
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {course.description}
                </p>
                {course.note && (
                  <p className="text-sm bg-amber-50 text-amber-800 rounded px-3 py-1.5">
                    {course.note}
                  </p>
                )}
                {course.prereq && (
                  <p className="text-sm bg-blue-50 text-blue-800 rounded px-3 py-1.5">
                    <strong>Prerequisite:</strong> {course.prereq}
                  </p>
                )}
              </CardContent>
              {idx < courses.length - 1 && (
                <div className="px-6">
                  <Separator />
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-10 flex gap-4">
          <Link
            href="/schedule"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white"
            style={{ backgroundColor: "#1a3a1a" }}
          >
            View Schedule
          </Link>
          <Link
            href="/enroll"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border border-[#1a3a1a] text-[#1a3a1a] hover:bg-[#1a3a1a] hover:text-white transition-colors"
          >
            How to Enroll
          </Link>
        </div>
      </div>
    </div>
  );
}

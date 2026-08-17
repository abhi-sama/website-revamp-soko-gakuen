import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Class Schedule",
  description:
    "Soko Gakuen offers four 11-week Japanese language sessions each year, meeting once a week for 3-hour classes. View term dates and the Summer 2026 schedule.",
};

type Session = {
  label: string;
  time: string;
  dates: string;
  classes: string[];
  note?: string;
};

const terms = [
  { name: "Summer 2026", dates: "June 27 – Sep 12" },
  { name: "Fall 2026", dates: "Sep 19 – Dec 9" },
  { name: "Winter 2027", dates: "Jan 9 – Mar 24" },
  { name: "Spring 2027", dates: "Apr 3 – Jun 16" },
];

const satMorning = {
  label: "Saturday Morning",
  time: "9:00 AM – 12:00 PM",
  dates: "Jun 27 – Sep 12",
  classes: [
    "Beginning Conversation (SM)",
    "Beginning 1 (SM)",
    "Beginning 2 (SM)",
    "Beginning 3 (SM)",
  ],
};

const satAfternoon = {
  label: "Saturday Afternoon",
  time: "1:00 PM – 4:00 PM",
  dates: "Jun 27 – Sep 12",
  classes: [
    "Beginning 1 (SA)",
    "Beginning Conv 2 (SA)",
    "Intermediate 1 (SA)",
    "Intermediate 2 (SA)",
    "Intermediate 3 (SA)",
    "JLPTn2 Prep (SA)",
    "Practical Comm (SA)",
  ],
};

const monEvening = {
  label: "Monday Evening",
  time: "6:00 PM – 9:00 PM",
  dates: "Jun 29 – Sep 7",
  classes: [
    "Beginning 1 (ME)",
    "Intermediate 1 (ME)",
    "Intermediate 2 (ME)",
    "Intermediate 4 (ME)",
    "JLPTn4&k2 (ME)",
  ],
  note: "Beginning 2 NOT OFFERED this session.",
};

const wedEvening = {
  label: "Wednesday Evening",
  time: "6:00 PM – 9:00 PM",
  dates: "Jul 1 – Sep 9",
  classes: [
    "Beginning 1 (WE)",
    "Beginning 2 (WE)",
    "Beginning 3 (WE)",
    "Intermediate 5 (WE)",
  ],
};

const sessions: Session[] = [satMorning, satAfternoon, monEvening, wedEvening];

export default function SchedulePage() {
  return (
    <div className="bg-[#fafaf7] dark:bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a] dark:hover:text-green-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">Class Schedule</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] dark:text-green-300 mb-4">
          Class Schedule
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
          Soko Gakuen offers four 11-week Japanese language sessions (one
          quarter: 11 weeks, 33 contact hours) each year. Classes meet once a
          week for 3-hour sessions.
        </p>

        {/* Term table */}
        <Card className="mb-10 shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#1a3a1a] dark:text-green-300">
              Upcoming Term Dates &mdash; $260 per course
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b dark:border-zinc-700">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-700 dark:text-gray-300">
                      Term
                    </th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-700 dark:text-gray-300">
                      Dates
                    </th>
                    <th className="text-left py-2 font-semibold text-gray-700 dark:text-gray-300">
                      Tuition
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {terms.map((t, i) => (
                    <tr
                      key={t.name}
                      className={i % 2 === 0 ? "bg-gray-50 dark:bg-zinc-800/50" : ""}
                    >
                      <td className="py-2 pr-4 font-medium">{t.name}</td>
                      <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">{t.dates}</td>
                      <td className="py-2 text-[#b8860b] dark:text-amber-400 font-semibold">
                        $260
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
              Late registration: a $20 surcharge applies if registered more than
              1 week after the term start date.
            </p>
          </CardContent>
        </Card>

        {/* Summer 2026 schedule */}
        <h2 className="text-2xl font-bold text-[#1a3a1a] dark:text-green-300 mb-6">
          Summer 2026 Schedule
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {sessions.map((session) => (
            <Card key={session.label} className="shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-[#1a3a1a] dark:text-green-300">
                  {session.label}
                </CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">{session.time}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{session.dates}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {session.classes.map((cls) => (
                    <li
                      key={cls}
                      className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2"
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#1a3a1a] dark:bg-green-400"
                        aria-hidden="true"
                      />
                      {cls}
                    </li>
                  ))}
                </ul>
                {session.note && (
                  <p className="mt-3 text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded px-2 py-1">
                    Note: {session.note}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notes */}
        <Card className="shadow-sm mb-8">
          <CardContent className="pt-6">
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Class sizes:</strong> 5&ndash;19 students (average
                5&ndash;13 per class).
              </li>
              <li>
                <strong>Note:</strong> Not all courses listed above may be
                offered in every term. Class offerings depend on enrollment and
                instructor availability.
              </li>
              <li>
                <strong>Payment:</strong> Cash, check, or money order only. No
                ePayments.{" "}
                <Badge
                  variant="secondary"
                  className="text-xs"
                >
                  BCSF members: $20 off
                </Badge>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Link
            href="/enroll"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-[#1a3a1a] hover:bg-[#2a5a2a] transition-colors"
          >
            How to Enroll
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border border-[#1a3a1a] dark:border-green-300 text-[#1a3a1a] dark:text-green-300 hover:bg-[#1a3a1a] dark:hover:bg-green-300 hover:text-white dark:hover:text-zinc-900 transition-colors"
          >
            Course Descriptions
          </Link>
        </div>
      </div>
    </div>
  );
}

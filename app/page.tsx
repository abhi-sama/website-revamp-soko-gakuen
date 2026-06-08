import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const terms = [
  { name: "Summer 2026", dates: "June 27 – Sep 12", year: "2026" },
  { name: "Fall 2026", dates: "Sep 19 – Dec 9", year: "2026" },
  { name: "Winter 2027", dates: "Jan 9 – Mar 24", year: "2027" },
  { name: "Spring 2027", dates: "Apr 3 – Jun 16", year: "2027" },
];

const quickLinks = [
  { label: "Class Schedule", href: "/schedule", icon: "📅" },
  { label: "Course Descriptions", href: "/courses", icon: "📚" },
  { label: "How to Enroll", href: "/enroll", icon: "✏️" },
  { label: "Faculty", href: "/faculty", icon: "👩‍🏫" },
  { label: "Scholarships", href: "/scholarships", icon: "🎓" },
  { label: "Eval & Exams", href: "/eval-exam", icon: "📝" },
  { label: "Directions", href: "/directions", icon: "🗺️" },
  { label: "Children's Classes", href: "/children", icon: "🧒" },
  { label: "Mission Statement", href: "/mission", icon: "🏮" },
  { label: "Contact Us", href: "/contact", icon: "✉️" },
];

export default function HomePage() {
  return (
    <div className="bg-[#fafaf7] dark:bg-background">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-[#f0f4e8] via-[#e8f0e8] to-[#fafaf7] dark:from-zinc-800 dark:via-zinc-900 dark:to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-5xl mb-4" aria-hidden="true">
            蒼湖
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a1a] dark:text-green-300 mb-4 leading-tight">
            Most Comprehensive Japanese Language School in California
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Since 1915 &middot; Nonprofit &middot; San Francisco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-[#1a3a1a] hover:bg-[#2a5a2a] text-white px-8 border-transparent"
              )}
            >
              View Schedule
            </Link>
            <Link
              href="/enroll"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-[#b8860b] text-[#b8860b] dark:text-amber-400 dark:border-amber-400 hover:bg-[#b8860b] dark:hover:bg-amber-400 hover:text-white px-8"
              )}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-[#1a3a1a] dark:text-green-300">
                About Soko Gakuen
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
              <p>
                Soko Gakuen Japanese Language School is a nonprofit organization
                affiliated with the Buddhist Church of San Francisco. Founded in
                1915, we have been serving the Bay Area community for over a
                century with high-quality Japanese language instruction.
              </p>
              <p>
                We currently enroll approximately <strong>250 adult</strong> and{" "}
                <strong>50 children</strong> students each term. Our school
                employs modern teaching methods and maintains small class sizes,
                taught by bilingual professionals with advanced degrees in
                Japanese language pedagogy.
              </p>
              <p>
                As a nonprofit, we are committed to keeping tuition at the
                lowest possible rate while maintaining excellence in instruction.
                Our faculty training emphasis ensures that every student
                receives top-quality language education.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4e8] dark:bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a1a] dark:text-green-300 text-center mb-10">
            Why Choose Soko Gakuen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                  Lowest Tuition
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p className="text-3xl font-bold text-[#b8860b] dark:text-amber-400 mb-2">$260</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  per 11-week course (33 contact hours &mdash; ~$8/hr)
                </p>
                <p>
                  As a nonprofit, we are guided by the principle of making
                  quality Japanese education accessible to everyone. No jacking
                  money from the little guy.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                  Expert Faculty
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  All instructors are native Japanese speakers and bilingual
                  professionals holding master's or doctoral degrees in Japanese
                  language teaching or related fields. Many also teach at SFSU,
                  UC Berkeley, CCSF, and USF.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                  Flexible Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>
                  Classes available on <strong>Saturday mornings</strong> (9
                  AM&ndash;12 PM), <strong>Saturday afternoons</strong> (1
                  PM&ndash;4 PM), <strong>Monday evenings</strong> (6
                  PM&ndash;9 PM), and <strong>Wednesday evenings</strong> (6
                  PM&ndash;9 PM). Something for every schedule.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Terms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a1a] dark:text-green-300 text-center mb-10">
            Upcoming Terms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {terms.map((term) => (
              <Card
                key={term.name}
                className="shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-2">
                  <Badge
                    className="w-fit mx-auto mb-2 bg-[#1a3a1a] text-white"
                  >
                    {term.year}
                  </Badge>
                  <CardTitle className="text-base text-[#1a3a1a] dark:text-green-300">
                    {term.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{term.dates}</p>
                  <p className="text-xl font-bold text-[#b8860b] dark:text-amber-400">$260</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">per course</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/schedule"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-[#1a3a1a] dark:border-green-300 text-[#1a3a1a] dark:text-green-300 hover:bg-[#1a3a1a] dark:hover:bg-green-300 hover:text-white dark:hover:text-zinc-900"
              )}
            >
              See Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f4e8] dark:bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a1a] dark:text-green-300 text-center mb-10">
            Explore
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white dark:bg-zinc-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:bg-[#1a3a1a] dark:hover:bg-[#1a3a1a] hover:text-white group transition-all"
              >
                <div className="text-2xl mb-2">{link.icon}</div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Box */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card
            className="text-white bg-[#1a3a1a]"
          >
            <CardHeader>
              <CardTitle className="text-xl text-white">
                Find Us / Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-green-100">
              <div>
                <h3 className="font-semibold text-white mb-2">
                  Classes Held At
                </h3>
                <address className="not-italic text-sm leading-relaxed">
                  440 Austin Street Educational Building
                  <br />
                  San Francisco, CA 94109
                </address>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Contact</h3>
                <p className="text-sm">
                  Phone:{" "}
                  <a
                    href="tel:4159289608"
                    className="text-green-300 hover:text-white"
                  >
                    415-928-9608
                  </a>
                </p>
                <p className="text-sm mt-1">
                  Email:{" "}
                  <a
                    href="mailto:sokogakuen@gmail.com"
                    className="text-green-300 hover:text-white"
                  >
                    sokogakuen@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Payment</h3>
                <p className="text-sm">
                  Cash, check, or money order only.
                  <br />
                  No ePayments accepted.
                  <br />
                  BCSF members receive $20 off.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

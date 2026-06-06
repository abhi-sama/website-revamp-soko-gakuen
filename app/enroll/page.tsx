import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function EnrollPage() {
  return (
    <div className="bg-[#fafaf7] dark:bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a] dark:hover:text-green-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">How to Enroll</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] dark:text-green-300 mb-4">
          How to Enroll
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
          Enrolling at Soko Gakuen is simple. Follow the steps below to
          register for a course.
        </p>

        <div className="space-y-6 max-w-3xl">
          {/* Enrollment Process */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Enrollment Process
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3 text-sm leading-relaxed">
              <p>
                Mail your application specifying your desired class and section,
                along with a check, cash, or money order made payable to{" "}
                <strong>Soko Gakuen</strong> for the tuition amount to:
              </p>
              <address className="not-italic bg-gray-50 dark:bg-zinc-800 rounded p-3 font-medium">
                Soko Gakuen Japanese Language School
                <br />
                440 Austin Street
                <br />
                San Francisco, CA 94109
              </address>
              <p>
                <strong>No confirmation notices will be sent.</strong> Consider
                yourself registered unless you are otherwise notified by Soko
                Gakuen.
              </p>
            </CardContent>
          </Card>

          {/* Tuition */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">Tuition</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3 text-sm leading-relaxed">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-[#b8860b] dark:text-amber-400">$260</span>
                <span className="text-gray-500 dark:text-gray-400">
                  per course (33 contact hours &mdash; approx. $8/hour)
                </span>
              </div>
              <ul className="space-y-2">
                <li>
                  <strong>Nonrefundable:</strong> Tuition is nonrefundable once
                  paid.
                </li>
                <li>
                  <strong>BCSF Discount:</strong> Members of the Buddhist
                  Church of San Francisco receive $20 off.
                </li>
                <li>
                  <strong>Payment methods:</strong> Cash, check, or money order
                  only.{" "}
                  <span className="text-red-600 dark:text-red-400 font-medium">
                    No ePayments accepted.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Late Registration */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Late Registration Fee
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                A <strong>$20 surcharge</strong> applies to registrations
                postmarked after 1 week before the term start date. To avoid
                this fee, mail your registration at least one week before the
                first class.
              </p>
            </CardContent>
          </Card>

          {/* Application/Enrollment Fee */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Application / Enrollment Fee
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                <strong>None.</strong> Soko Gakuen has a firm{" "}
                <em>&ldquo;No Jacking Money from the Little Guy&rdquo;</em> policy. There
                are no application fees, enrollment fees, or hidden charges.
              </p>
            </CardContent>
          </Card>

          {/* Instructional Materials */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Instructional Materials
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-2">
              <p>
                Textbooks are available at{" "}
                <strong>SF Kinokuniya Bookstore</strong>:
              </p>
              <address className="not-italic bg-gray-50 dark:bg-zinc-800 rounded p-3">
                1581 Webster Street, San Francisco
                <br />
                Phone:{" "}
                <a
                  href="tel:4155677625"
                  className="text-[#1a3a1a] dark:text-green-300 hover:underline"
                >
                  415-567-7625
                </a>
              </address>
              <p>
                Soko Gakuen students receive a{" "}
                <strong>10% discount</strong> at Kinokuniya. Audio files for
                course materials are available online.
              </p>
            </CardContent>
          </Card>

          {/* Class Switching */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Class Switching
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                During the <strong>first two weeks</strong> of a term, students
                may switch to a different class or section with instructor
                approval. Speak with your instructor or contact the school
                office.
              </p>
            </CardContent>
          </Card>

          {/* Holidays */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Holidays — No Classes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <ul className="space-y-1 list-disc list-inside">
                <li>Christmas</li>
                <li>July 4th (Independence Day)</li>
                <li>Thanksgiving week</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Registration Form */}
        <div className="mt-12 max-w-3xl">
          <Separator className="mb-8" />
          <h2 className="text-2xl font-bold text-[#1a3a1a] dark:text-green-300 mb-2">
            Registration Form
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Print and mail this form with your tuition payment to the address
            above.
          </p>
          <Card className="shadow-sm border-2 border-dashed border-gray-300 dark:border-zinc-600">
            <CardContent className="pt-6">
              <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-1">
                      Student Name
                    </label>
                    <div className="border-b border-gray-400 dark:border-zinc-600 h-8" />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Phone</label>
                    <div className="border-b border-gray-400 dark:border-zinc-600 h-8" />
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-1">Address</label>
                  <div className="border-b border-gray-400 dark:border-zinc-600 h-8" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-1">Email</label>
                    <div className="border-b border-gray-400 dark:border-zinc-600 h-8" />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">ZIP Code</label>
                    <div className="border-b border-gray-400 dark:border-zinc-600 h-8" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-1">
                      Session (circle one)
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Fall &nbsp;&nbsp; Winter &nbsp;&nbsp; Spring &nbsp;&nbsp;
                      Summer
                    </p>
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Year</label>
                    <div className="border-b border-gray-400 dark:border-zinc-600 h-8" />
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Class Selection (course name and day/time)
                  </label>
                  <div className="border-b border-gray-400 dark:border-zinc-600 h-8" />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Previous Class / Level Completed
                  </label>
                  <div className="border-b border-gray-400 dark:border-zinc-600 h-8" />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Tuition Amount Enclosed ($)
                  </label>
                  <div className="border-b border-gray-400 dark:border-zinc-600 h-8" />
                </div>
                <div className="bg-gray-50 dark:bg-zinc-800 rounded p-3 text-xs text-gray-600 dark:text-gray-400">
                  By submitting this registration, I acknowledge that tuition is
                  nonrefundable and that I agree to abide by Soko Gakuen school
                  policies.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-1">Signature</label>
                    <div className="border-b border-gray-400 dark:border-zinc-600 h-8" />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Date</label>
                    <div className="border-b border-gray-400 dark:border-zinc-600 h-8" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex gap-4">
          <Link
            href="/schedule"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-[#1a3a1a] hover:bg-[#2a5a2a] transition-colors"
          >
            View Schedule
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

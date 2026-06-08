import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ChildrenPage() {
  return (
    <div className="bg-[#fafaf7] dark:bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a] dark:hover:text-green-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">Children&apos;s Classes</span>
        </nav>

        {/* Hero */}
        <div className="rounded-2xl px-8 py-12 mb-10 text-center bg-gradient-to-br from-[#f0f4e8] to-[#e8f0e8] dark:from-zinc-800 dark:to-zinc-900">
          <div className="flex justify-center gap-3 mb-4">
            <Badge className="bg-[#1a3a1a] text-white text-sm px-3 py-1">
              Ages 5–14
            </Badge>
            <Badge className="bg-[#b8860b] text-white text-sm px-3 py-1">
              Nonprofit
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Smartphone Free School
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] dark:text-green-300 mb-3">
            Japanese Language Lessons for Children
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">Ages 5–14</p>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Soko Gakuen offers Japanese language lessons for children ages 5 to
            14, emphasizing quality instruction in a focused and supportive
            learning environment. Our children&apos;s program is part of our
            nonprofit mission to bring Japanese language and culture to the
            entire community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-10">
          {/* About */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                About the Children&apos;s Program
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-3">
              <p>
                Our children&apos;s classes are designed for young learners ages
                5 through 14, with instruction tailored to each age group. We
                emphasize a warm, encouraging environment where children can
                develop genuine Japanese language skills.
              </p>
              <p>
                Soko Gakuen is a{" "}
                <strong>Smartphone Free School</strong> &mdash; we believe
                focused, distraction-free learning leads to better outcomes for
                our young students.
              </p>
              <p>
                As a nonprofit affiliated with the Buddhist Church of San
                Francisco, we are committed to keeping costs accessible for
                families in the community.
              </p>
            </CardContent>
          </Card>

          {/* Info */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Program Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 text-sm space-y-4">
              <div>
                <p className="font-medium mb-1">Location</p>
                <address className="not-italic text-gray-600 dark:text-gray-400">
                  440 Austin Street Educational Building
                  <br />
                  San Francisco, CA 94109
                </address>
              </div>
              <div>
                <p className="font-medium mb-1">Mailing Address</p>
                <address className="not-italic text-gray-600 dark:text-gray-400">
                  1881 Pine Street
                  <br />
                  San Francisco, CA 94109
                </address>
              </div>
              <div>
                <p className="font-medium mb-1">Contact</p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:4159289608"
                    className="text-[#1a3a1a] dark:text-green-300 hover:underline"
                  >
                    415-928-9608
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:sokogakuen@gmail.com"
                    className="text-[#1a3a1a] dark:text-green-300 hover:underline"
                  >
                    sokogakuen@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="rounded-lg p-6 text-white max-w-4xl bg-[#1a3a1a]">
          <h2 className="text-xl font-bold mb-2">
            Enroll Your Child Today
          </h2>
          <p className="text-green-100 text-sm mb-4">
            For more information about children&apos;s class schedules,
            tuition, and enrollment, please call or email us. We&apos;d love to
            welcome your child to our school.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:4159289608"
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-white text-[#1a3a1a] hover:bg-green-50 transition-colors"
            >
              Call 415-928-9608
            </a>
            <a
              href="mailto:sokogakuen@gmail.com"
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border border-white text-white hover:bg-white hover:text-[#1a3a1a] transition-colors"
            >
              Email Us
            </a>
          </div>
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

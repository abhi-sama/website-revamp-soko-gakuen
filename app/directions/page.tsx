import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How to Get Here",
  description:
    "Soko Gakuen classes are held at the Buddhist Church of San Francisco Educational Building on Austin Street, in the Western Addition / Japantown neighborhood.",
};

export default function DirectionsPage() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=440+Austin+Street+San+Francisco+CA+94109";

  return (
    <div className="bg-[#fafaf7] dark:bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a] dark:hover:text-green-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">Directions</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] dark:text-green-300 mb-4">
          How to Get Here
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
          Classes are held at the Buddhist Church of San Francisco Educational
          Building on Austin Street, in the Western Addition / Japantown
          neighborhood of San Francisco.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
          {/* Address Card */}
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                  Class Location
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
                <address className="not-italic">
                  <p className="font-semibold text-base">
                    440 Austin Street Educational Building
                  </p>
                  <p>San Francisco, CA 94109</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Buddhist Church of San Francisco
                  </p>
                </address>
                <div className="border-t dark:border-zinc-700 pt-4 space-y-2 text-sm">
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    <a
                      href="tel:4159289608"
                      className="text-[#1a3a1a] dark:text-green-300 hover:underline"
                    >
                      415-928-9608
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
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

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                  Mailing Address
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300 text-sm">
                <address className="not-italic">
                  <p className="font-medium">Soko Gakuen Japanese Language School</p>
                  <p>1881 Pine Street</p>
                  <p>San Francisco, CA 94109</p>
                </address>
                <p className="mt-3 text-gray-500 dark:text-gray-400 text-xs">
                  Please mail registration and tuition payments to the mailing
                  address above. Classes are held at 440 Austin Street.
                </p>
              </CardContent>
            </Card>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium text-white bg-[#1a3a1a] hover:bg-[#2a5a2a] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Open in Google Maps
            </a>
          </div>

          {/* Map embed */}
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 min-h-[300px] flex flex-col items-center justify-center">
            <iframe
              title="Soko Gakuen location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8!2d-122.4272!3d37.7858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b4f8e5a99%3A0x1!2s440+Austin+St%2C+San+Francisco%2C+CA+94109!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-[#1a3a1a] hover:bg-[#2a5a2a] transition-colors"
          >
            Contact Us
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

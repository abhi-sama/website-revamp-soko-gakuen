import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function MissionPage() {
  return (
    <div className="bg-[#fafaf7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Mission Statement</span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] mb-2">
            Mission Statement
          </h1>
          <p className="text-sm text-gray-500 mb-8">Rev. 2007</p>

          {/* Mission text */}
          <Card className="bg-white shadow-sm mb-10">
            <CardContent className="pt-8 pb-8">
              <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
                Soko Gakuen Japanese Language School (nonprofit), an affiliated
                organization of the Buddhist Church of San Francisco, has been
                providing Japanese language instruction with integrity to the
                community since 1915. The school is devoted to teaching the
                Japanese language and culture to the people in the community.
                The school is devoted to the conveyance of Japanese traditions,
                Buddhist teachings and principles. Soko Gakuen insists on a
                high standard of conduct by its faculty and students, and is
                committed to excellence. The school provides opportunities for
                everyone to learn the Japanese language at reasonable rates.
                Profit-oriented principles shall not overshadow the school&apos;s
                guiding principles.
              </p>
            </CardContent>
          </Card>

          <Separator className="mb-10" />

          {/* Quotes */}
          <h2 className="text-xl font-semibold text-[#1a3a1a] mb-6">
            Guiding Thoughts
          </h2>
          <div className="space-y-6">
            <figure className="border-l-4 pl-6 py-2" style={{ borderColor: "#1a3a1a" }}>
              <blockquote className="text-gray-700 italic text-base leading-relaxed">
                &ldquo;Codification of laws and rules creates difficulty and
                complexity in managing and governing.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-sm text-gray-500">
                &mdash; Laozi
              </figcaption>
            </figure>

            <figure className="border-l-4 pl-6 py-2" style={{ borderColor: "#b8860b" }}>
              <blockquote className="text-gray-700 italic text-base leading-relaxed">
                &ldquo;Education consists mainly of what we have unlearned.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-sm text-gray-500">
                &mdash; Mark Twain
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 p-6 rounded-lg text-center" style={{ backgroundColor: "#f0f4e8" }}>
            <p className="text-2xl text-[#1a3a1a] font-bold mb-1">蒼湖</p>
            <p className="text-gray-600 text-sm">
              Soko Gakuen Japanese Language School &middot; Est. 1915
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Affiliated with the Buddhist Church of San Francisco
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-[#1a3a1a] hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const faculty = [
  {
    name: "S. Greller",
    since: 2005,
    credentials: [
      "BA English Literature, Kwansai Women's College, Nagasaki",
      "MA (2006) Teaching Japanese as a Second Language, SFSU",
    ],
    experience: "Taught at CSU East Bay and UC Berkeley.",
  },
  {
    name: "S. Halper",
    since: 1989,
    credentials: [
      "BA English, Shoin Women's University, Kobe",
      "MA (1986) Language Studies",
      "MS (2006) Computer Science, SFSU",
    ],
    experience: "",
  },
  {
    name: "Y. Higashino",
    since: 2022,
    credentials: [
      "BA English Literature, Otsuma Women's University, Tokyo",
      "AA (2020) Asian American Studies / Marketing, CCSF",
      "MA (2023) Japanese Pedagogy, Columbia University",
      "MA (2024) Linguistics, SFSU",
    ],
    experience: "",
  },
  {
    name: "A. Kazama",
    since: 2010,
    credentials: [
      "BA Sociology, Rikkyo University, Japan",
      "Second BA Linguistics, University of Hawaii at Hilo",
      "MA (2011) Teaching Japanese as a Second Language, SFSU",
    ],
    experience: "Taught at SFSU (2020–present).",
  },
  {
    name: "R. Kondo",
    since: 2007,
    credentials: [
      "BA Linguistics, Shinshu University, Japan",
      "MEd (2006) Teaching ESL, SUNY Buffalo",
      "MA (2015) Teaching Japanese as a Second Language, SFSU",
    ],
    experience: "Taught at UC Berkeley (Summer 2008).",
  },
  {
    name: "Y. Kosaka",
    since: 2013,
    credentials: [
      "BA English & American Literature, Kanto Gakuin University, Japan",
      "MA (1990) Linguistics, West Virginia University",
    ],
    experience:
      "Taught at multiple Canadian schools; Diablo Valley College, CA (2014–present).",
  },
  {
    name: "M. Ota",
    since: 2007,
    credentials: [
      "BA Language and Culture, Osaka University of Foreign Studies",
      "MA (2007) Teaching ESL, SFSU",
    ],
    experience: "Taught at USF (2018–2022).",
  },
  {
    name: "H. Rustigan",
    since: 1988,
    credentials: [
      "BA Education, Aoyama Gakuin University, Japan",
      "MA (1991) Pedagogical Japanese, SFSU",
    ],
    experience:
      "Taught at CCSF (1989–present), Skyline College (1990–1994), SFSU (2004–present), USF (2018–2022).",
  },
  {
    name: "Y. Uda",
    since: 2006,
    credentials: [
      "BA International Language and Culture, University of Shizuoka, Japan",
      "MA (2006) Teaching Japanese as a Second Language, SFSU",
    ],
    experience: "Taught at CCSF (2007–2012) and USF (2007–2011).",
  },
];

const committee = [
  "K. Kojimoto",
  "F. Kunze",
  "K. Marek",
  "Y. Shimazu Ed.D. (Consultant)",
  "Y. McCormick Ed.D. (Board Member)",
  "A. Uchima",
];

export default function FacultyPage() {
  return (
    <div className="bg-[#fafaf7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Faculty</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] mb-2">
          Faculty
        </h1>
        <p className="text-gray-600 mb-4 max-w-3xl">
          Soko Gakuen, San Francisco&apos;s nonprofit Japanese language school
        </p>
        <p className="text-gray-700 mb-10 max-w-3xl bg-white rounded-lg p-4 shadow-sm text-sm leading-relaxed border-l-4 border-[#1a3a1a]">
          Soko Gakuen teachers are dedicated bilingual professionals and native
          Japanese speakers who hold master&apos;s degrees in second language
          teaching or related fields.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {faculty.map((member) => (
            <Card key={member.name} className="bg-white shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base text-[#1a3a1a]">
                    {member.name}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="text-xs shrink-0"
                  >
                    Since {member.since}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <ul className="space-y-1">
                  {member.credentials.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span
                        className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#b8860b] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                {member.experience && (
                  <p className="text-gray-500 text-xs pt-1">
                    {member.experience}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Affairs Committee */}
        <Card className="bg-white shadow-sm max-w-3xl">
          <CardHeader>
            <CardTitle className="text-lg text-[#1a3a1a]">
              Academic Affairs Committee
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-3">
              {committee.map((member) => (
                <li key={member}>
                  <Badge variant="secondary" className="text-sm">
                    {member}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="mt-10 flex gap-4">
          <Link
            href="/courses"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white"
            style={{ backgroundColor: "#1a3a1a" }}
          >
            Course Descriptions
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border border-[#1a3a1a] text-[#1a3a1a] hover:bg-[#1a3a1a] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

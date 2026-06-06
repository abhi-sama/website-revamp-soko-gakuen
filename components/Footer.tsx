import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Courses", href: "/courses" },
  { label: "Enrollment", href: "/enroll" },
  { label: "Faculty", href: "/faculty" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Eval & Exams", href: "/eval-exam" },
  { label: "Directions", href: "/directions" },
  { label: "Children's Classes", href: "/children" },
  { label: "Mission Statement", href: "/mission" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a3a1a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School info */}
          <div>
            <h2 className="text-xl font-bold mb-3">
              <span className="mr-2">蒼湖</span>Soko Gakuen
            </h2>
            <p className="text-sm text-green-200 mb-4">
              Japanese Language School
              <br />
              Nonprofit Organization · Est. 1915
            </p>
            <address className="not-italic text-sm text-green-100 space-y-1">
              <p>Classes held at:</p>
              <p>440 Austin Street Educational Building</p>
              <p>San Francisco, CA 94109</p>
              <p className="mt-2">Mailing Address:</p>
              <p>1881 Pine Street</p>
              <p>San Francisco, CA 94109</p>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="text-sm text-green-100 space-y-2">
              <li>
                <span className="text-green-300">Phone:</span>{" "}
                <a
                  href="tel:4159289608"
                  className="hover:text-white transition-colors"
                >
                  415-928-9608
                </a>
              </li>
              <li>
                <span className="text-green-300">Email:</span>{" "}
                <a
                  href="mailto:sokogakuen@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  sokogakuen@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-green-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-6 text-center text-sm text-green-300">
          <p>
            &copy; {new Date().getFullYear()} Soko Gakuen Japanese Language
            School. Nonprofit Organization.
          </p>
          <p className="mt-1">
            An affiliated organization of the{" "}
            <span className="text-green-200">
              Buddhist Church of San Francisco
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

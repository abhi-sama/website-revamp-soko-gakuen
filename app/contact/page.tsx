import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions about Soko Gakuen courses, enrollment, or anything else? Send the San Francisco Japanese language school a message, or reach us by phone or mail.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}

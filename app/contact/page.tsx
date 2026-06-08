"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormState("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await res.json();
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

  return (
    <div className="bg-[#fafaf7] dark:bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a] dark:hover:text-green-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">Contact</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] dark:text-green-300 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-3xl">
          Have questions about our courses, enrollment, or anything else? We&apos;d
          love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl">
          {/* Contact info */}
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <address className="not-italic text-gray-600 dark:text-gray-400 leading-relaxed">
                    440 Austin Street Educational Building
                    <br />
                    San Francisco, CA 94109
                    <br />
                    <span className="text-gray-400 dark:text-gray-500 text-xs">
                      (Buddhist Church of San Francisco)
                    </span>
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
                  <p className="font-medium mb-1">Phone</p>
                  <a
                    href="tel:4159289608"
                    className="text-[#1a3a1a] dark:text-green-300 hover:underline"
                  >
                    415-928-9608
                  </a>
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a
                    href="mailto:sokogakuen@gmail.com"
                    className="text-[#1a3a1a] dark:text-green-300 hover:underline"
                  >
                    sokogakuen@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="pt-5 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <p className="font-medium text-[#1a3a1a] dark:text-green-300">Quick Links</p>
                <ul className="space-y-1">
                  <li>
                    <Link href="/enroll" className="text-[#1a3a1a] dark:text-green-300 hover:underline">
                      How to Enroll
                    </Link>
                  </li>
                  <li>
                    <Link href="/schedule" className="text-[#1a3a1a] dark:text-green-300 hover:underline">
                      Class Schedule
                    </Link>
                  </li>
                  <li>
                    <Link href="/directions" className="text-[#1a3a1a] dark:text-green-300 hover:underline">
                      Directions
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-[#1a3a1a] dark:text-green-300">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {formState === "success" ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3" aria-hidden="true">
                    ✓
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a3a1a] dark:text-green-300 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Thank you for reaching out. We&apos;ll get back to you as soon
                    as possible.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setFormState("idle")}
                    className="border-[#1a3a1a] dark:border-green-300 text-[#1a3a1a] dark:text-green-300"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        disabled={formState === "loading"}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        disabled={formState === "loading"}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="415-000-0000"
                      disabled={formState === "loading"}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="subject">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Enrollment question, class info, etc."
                      disabled={formState === "loading"}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Your message..."
                      disabled={formState === "loading"}
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded px-3 py-2" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full text-white bg-[#1a3a1a] hover:bg-[#2a5a2a]"
                  >
                    {formState === "loading" ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

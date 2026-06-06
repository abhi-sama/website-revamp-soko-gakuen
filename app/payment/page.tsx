"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  SEMESTERS,
  TUITION_STANDARD,
  BCSF_DISCOUNT,
  type PaymentNotificationPayload,
} from "@/lib/payment";

type FormState = "idle" | "loading" | "success" | "error";

export default function PaymentPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [bcsfMember, setBcsfMember] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<
    "check" | "money_order" | "cash" | ""
  >("");

  const tuitionTotal = bcsfMember
    ? TUITION_STANDARD - BCSF_DISCOUNT
    : TUITION_STANDARD;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const fd = new FormData(e.currentTarget);

    const payload: PaymentNotificationPayload = {
      studentName: fd.get("studentName") as string,
      email: fd.get("email") as string,
      phone: (fd.get("phone") as string) || undefined,
      course: fd.get("course") as string,
      semester: fd.get("semester") as (typeof SEMESTERS)[number],
      bcsfMember,
      paymentMethod: paymentMethod as "check" | "money_order" | "cash",
      checkOrMoNumber: (fd.get("checkOrMoNumber") as string) || undefined,
      mailedDate: (fd.get("mailedDate") as string) || undefined,
      notes: (fd.get("notes") as string) || undefined,
    };

    try {
      const res = await fetch("/api/payment-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormState("success");
        (e.target as HTMLFormElement).reset();
        setBcsfMember(false);
        setPaymentMethod("");
      } else {
        const data = (await res.json()) as { error?: string };
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again."
        );
        setFormState("error");
      }
    } catch {
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
      setFormState("error");
    }
  }

  return (
    <div className="bg-[#fafaf7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1a3a1a]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Payment</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a1a] mb-4">
          Tuition &amp; Payment
        </h1>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Review payment instructions and submit a notification after mailing
          your tuition to Soko Gakuen.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl">
          {/* ── LEFT COLUMN — info ── */}
          <div className="space-y-6">
            {/* Tuition pricing */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#1a3a1a]">
                  Tuition
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-4 text-sm leading-relaxed">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-[#b8860b]">
                    ${TUITION_STANDARD}
                  </span>
                  <span className="text-gray-500">
                    per course &mdash; 33 contact hours (~$8/hr)
                  </span>
                </div>
                <ul className="space-y-2">
                  <li>
                    <strong>BCSF Members:</strong> Receive a{" "}
                    <span className="text-[#b8860b] font-semibold">
                      ${BCSF_DISCOUNT} discount
                    </span>{" "}
                    — pay only ${TUITION_STANDARD - BCSF_DISCOUNT}.
                  </li>
                  <li>
                    <strong>Nonrefundable:</strong> Tuition is nonrefundable
                    once paid.
                  </li>
                  <li>
                    <strong>Late fee:</strong> $20 surcharge if postmarked less
                    than one week before term start.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment methods */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#1a3a1a]">
                  Accepted Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>
                  Soko Gakuen accepts <strong>cash</strong>,{" "}
                  <strong>check</strong>, or{" "}
                  <strong>money order</strong> only.
                </p>
                <p className="text-red-600 font-medium text-xs bg-red-50 rounded px-3 py-2">
                  No ePayments, credit cards, or online transfers are accepted.
                </p>
                <p>
                  Make checks or money orders payable to{" "}
                  <strong>Soko Gakuen</strong>.
                </p>
              </CardContent>
            </Card>

            {/* Mailing instructions */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#1a3a1a]">
                  Where to Mail Your Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-3 leading-relaxed">
                <p>
                  Include your completed registration form with your payment
                  and mail to:
                </p>
                <address className="not-italic bg-gray-50 rounded p-3 font-medium">
                  Soko Gakuen Japanese Language School
                  <br />
                  1881 Pine Street
                  <br />
                  San Francisco, CA 94109
                </address>
                <p className="text-gray-500 text-xs">
                  <strong>No confirmation notices will be sent.</strong>{" "}
                  Consider yourself registered unless otherwise notified. You
                  may submit the form below to let us know your payment is on
                  its way.
                </p>
              </CardContent>
            </Card>

            {/* Links */}
            <div className="flex gap-3">
              <Link
                href="/enroll"
                className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white min-h-[44px]"
                style={{ backgroundColor: "#1a3a1a" }}
              >
                Enrollment Info
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border border-[#1a3a1a] text-[#1a3a1a] hover:bg-[#1a3a1a] hover:text-white transition-colors min-h-[44px]"
              >
                Class Schedule
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN — notification form ── */}
          <div>
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#1a3a1a]">
                  Payment Notification Form
                </CardTitle>
                <p className="text-xs text-gray-500 mt-1">
                  After mailing your payment, submit this form so we know to
                  expect it. This is optional but appreciated.
                </p>
              </CardHeader>
              <CardContent>
                {formState === "success" ? (
                  <div
                    className="text-center py-10"
                    role="status"
                    aria-live="polite"
                  >
                    <div
                      className="text-5xl mb-3"
                      aria-hidden="true"
                    >
                      ✓
                    </div>
                    <h3 className="text-lg font-semibold text-[#1a3a1a] mb-2">
                      Notification Sent!
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 max-w-xs mx-auto">
                      Thank you! We&apos;ve received your payment notification
                      and will look out for your mailed payment.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFormState("idle")}
                      className="border-[#1a3a1a] text-[#1a3a1a] min-h-[44px]"
                    >
                      Submit Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* Student name + email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="studentName">
                          Student Name{" "}
                          <span className="text-red-500" aria-hidden="true">
                            *
                          </span>
                        </Label>
                        <Input
                          id="studentName"
                          name="studentName"
                          required
                          minLength={2}
                          placeholder="Full name"
                          disabled={formState === "loading"}
                          aria-required="true"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">
                          Email{" "}
                          <span className="text-red-500" aria-hidden="true">
                            *
                          </span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          disabled={formState === "loading"}
                          aria-required="true"
                        />
                      </div>
                    </div>

                    {/* Phone */}
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

                    <Separator />

                    {/* Course + semester */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="course">
                          Course / Class{" "}
                          <span className="text-red-500" aria-hidden="true">
                            *
                          </span>
                        </Label>
                        <Input
                          id="course"
                          name="course"
                          required
                          placeholder="e.g. Japanese 1A – Mon 6pm"
                          disabled={formState === "loading"}
                          aria-required="true"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="semester">
                          Semester{" "}
                          <span className="text-red-500" aria-hidden="true">
                            *
                          </span>
                        </Label>
                        <select
                          id="semester"
                          name="semester"
                          required
                          disabled={formState === "loading"}
                          aria-required="true"
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select semester…</option>
                          {SEMESTERS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* BCSF member discount */}
                    <div className="flex items-center gap-3 bg-[#f0f4e8] rounded px-3 py-3 min-h-[44px]">
                      <input
                        id="bcsfMember"
                        type="checkbox"
                        checked={bcsfMember}
                        onChange={(e) => setBcsfMember(e.target.checked)}
                        disabled={formState === "loading"}
                        className="h-4 w-4 rounded border-gray-300 accent-[#1a3a1a]"
                        aria-describedby="bcsf-desc"
                      />
                      <label
                        htmlFor="bcsfMember"
                        className="text-sm font-medium text-[#1a3a1a] cursor-pointer select-none"
                      >
                        I am a BCSF member{" "}
                        <span
                          id="bcsf-desc"
                          className="text-gray-500 font-normal"
                        >
                          (Buddhist Church of SF — $20 discount applies)
                        </span>
                      </label>
                    </div>

                    {/* Tuition total preview */}
                    <div className="text-sm text-gray-700 bg-gray-50 rounded px-3 py-2 flex items-baseline gap-2">
                      <span>Tuition due:</span>
                      <span
                        className="text-xl font-bold text-[#b8860b]"
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        ${tuitionTotal}
                      </span>
                      {bcsfMember && (
                        <span className="text-xs text-gray-500">
                          (includes $20 BCSF discount)
                        </span>
                      )}
                    </div>

                    <Separator />

                    {/* Payment method */}
                    <div className="space-y-1.5">
                      <Label>
                        Payment Method{" "}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </Label>
                      <div
                        className="flex flex-wrap gap-3"
                        role="radiogroup"
                        aria-label="Payment method"
                      >
                        {(
                          [
                            { value: "check", label: "Check" },
                            { value: "money_order", label: "Money Order" },
                            { value: "cash", label: "Cash" },
                          ] as const
                        ).map(({ value, label }) => (
                          <label
                            key={value}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md border cursor-pointer text-sm font-medium transition-colors min-h-[44px] ${
                              paymentMethod === value
                                ? "border-[#1a3a1a] bg-[#1a3a1a] text-white"
                                : "border-gray-300 text-gray-700 hover:border-[#1a3a1a]"
                            }`}
                          >
                            <input
                              type="radio"
                              name="paymentMethodRadio"
                              value={value}
                              checked={paymentMethod === value}
                              onChange={() => setPaymentMethod(value)}
                              disabled={formState === "loading"}
                              className="sr-only"
                              aria-label={label}
                            />
                            {label}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Check / MO number (conditional) */}
                    {(paymentMethod === "check" ||
                      paymentMethod === "money_order") && (
                      <div className="space-y-1.5">
                        <Label htmlFor="checkOrMoNumber">
                          {paymentMethod === "check"
                            ? "Check Number"
                            : "Money Order Number"}{" "}
                          <span className="text-gray-400 text-xs">
                            (optional)
                          </span>
                        </Label>
                        <Input
                          id="checkOrMoNumber"
                          name="checkOrMoNumber"
                          placeholder={
                            paymentMethod === "check" ? "e.g. 1042" : "e.g. MO‑8891234"
                          }
                          disabled={formState === "loading"}
                        />
                      </div>
                    )}

                    {/* Mailed date */}
                    <div className="space-y-1.5">
                      <Label htmlFor="mailedDate">
                        Date Mailed{" "}
                        <span className="text-gray-400 text-xs">
                          (optional)
                        </span>
                      </Label>
                      <Input
                        id="mailedDate"
                        name="mailedDate"
                        type="date"
                        disabled={formState === "loading"}
                      />
                    </div>

                    {/* Notes */}
                    <div className="space-y-1.5">
                      <Label htmlFor="notes">
                        Notes{" "}
                        <span className="text-gray-400 text-xs">
                          (optional)
                        </span>
                      </Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        placeholder="Any additional information…"
                        disabled={formState === "loading"}
                      />
                    </div>

                    {/* Error message */}
                    {formState === "error" && (
                      <p
                        className="text-sm text-red-600 bg-red-50 rounded px-3 py-2"
                        role="alert"
                        aria-live="assertive"
                      >
                        {errorMessage}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={formState === "loading" || !paymentMethod}
                      className="w-full text-white min-h-[44px]"
                      style={{ backgroundColor: "#1a3a1a" }}
                      aria-disabled={
                        formState === "loading" || !paymentMethod
                      }
                    >
                      {formState === "loading"
                        ? "Sending…"
                        : "Submit Payment Notification"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

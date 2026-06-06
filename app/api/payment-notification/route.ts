import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  PaymentNotificationSchema,
  TUITION_STANDARD,
  BCSF_DISCOUNT,
} from "@/lib/payment";

export async function POST(request: Request) {
  // Instantiate inside handler so missing env var doesn't crash next build
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = PaymentNotificationSchema.safeParse(body);
  if (!result.success) {
    const firstIssue = result.error.issues[0];
    return NextResponse.json(
      { error: firstIssue?.message ?? "Validation error." },
      { status: 422 }
    );
  }

  const {
    studentName,
    email,
    phone,
    course,
    semester,
    bcsfMember,
    paymentMethod,
    checkOrMoNumber,
    mailedDate,
    notes,
  } = result.data;

  const tuitionAmount = bcsfMember
    ? TUITION_STANDARD - BCSF_DISCOUNT
    : TUITION_STANDARD;

  const methodLabel =
    paymentMethod === "check"
      ? "Check"
      : paymentMethod === "money_order"
        ? "Money Order"
        : "Cash";

  const lines = [
    `PAYMENT NOTIFICATION — Soko Gakuen Japanese Language School`,
    ``,
    `Student: ${studentName}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    ``,
    `Course / Class: ${course}`,
    `Semester: ${semester}`,
    ``,
    `Tuition Amount: $${tuitionAmount}`,
    bcsfMember ? `BCSF Discount Applied: -$${BCSF_DISCOUNT} (BCSF member)` : null,
    `Payment Method: ${methodLabel}`,
    checkOrMoNumber ? `Check / Money Order Number: ${checkOrMoNumber}` : null,
    mailedDate ? `Mailed On: ${mailedDate}` : null,
    notes ? `\nAdditional Notes:\n${notes}` : null,
    ``,
    `---`,
    `This notification was submitted via the Soko Gakuen website payment form.`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    await resend.emails.send({
      from: "Soko Gakuen Payment Form <onboarding@resend.dev>",
      to: ["sokogakuen@gmail.com"],
      replyTo: email,
      subject: `Payment Notification: ${studentName} — ${semester}`,
      text: lines,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send notification. Please try again later." },
      { status: 500 }
    );
  }
}

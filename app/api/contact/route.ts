import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Instantiate inside handler so missing env var doesn't crash next build
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  const { name, email, phone, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Required fields missing." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Soko Gakuen Contact Form <onboarding@resend.dev>",
      to: ["sokogakuen@gmail.com"],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

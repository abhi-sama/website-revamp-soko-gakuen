import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ id: "mock-email-id" }),
    },
  })),
}));

vi.mock("next/server", () => ({
  NextResponse: {
    json: (body: unknown, init?: ResponseInit) => ({
      body,
      status: init?.status ?? 200,
    }),
  },
}));

async function importRoute() {
  const mod = await import("../app/api/payment-notification/route");
  return mod;
}

const validPayload = {
  studentName: "Yuki Tanaka",
  email: "yuki@example.com",
  course: "Japanese 1A – Monday 6pm",
  semester: "Fall 2026",
  bcsfMember: false,
  paymentMethod: "check",
  checkOrMoNumber: "1042",
  mailedDate: "2026-08-15",
};

describe("POST /api/payment-notification", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.RESEND_API_KEY = "test_key";
  });

  it("returns 422 when required fields are missing", async () => {
    const { POST } = await importRoute();
    const request = new Request(
      "http://localhost/api/payment-notification",
      {
        method: "POST",
        body: JSON.stringify({ studentName: "Yuki" }), // missing email, course, semester, paymentMethod
      }
    );
    const response = await POST(request);
    expect((response as { status: number }).status).toBe(422);
  });

  it("returns 400 for malformed JSON", async () => {
    const { POST } = await importRoute();
    const request = new Request(
      "http://localhost/api/payment-notification",
      {
        method: "POST",
        body: "not-json",
      }
    );
    const response = await POST(request);
    expect((response as { status: number }).status).toBe(400);
  });

  it("returns 200 and sends notification email for valid payload", async () => {
    const { POST } = await importRoute();
    const request = new Request(
      "http://localhost/api/payment-notification",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validPayload),
      }
    );
    const response = await POST(request);
    expect(
      ((response as unknown) as { body: { success: boolean } }).body.success
    ).toBe(true);
  });

  it("applies BCSF discount in the email text", async () => {
    const { Resend } = await import("resend");
    const mockSend = vi.fn().mockResolvedValue({ id: "mock-id" });
    (Resend as ReturnType<typeof vi.fn>).mockImplementation(() => ({
      emails: { send: mockSend },
    }));

    const { POST } = await importRoute();
    const request = new Request(
      "http://localhost/api/payment-notification",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...validPayload, bcsfMember: true }),
      }
    );
    await POST(request);
    const callArgs = mockSend.mock.calls[0]?.[0] as { text: string };
    expect(callArgs.text).toContain("BCSF");
    expect(callArgs.text).toContain("$240");
  });

  it("sends email with correct subject line", async () => {
    const { Resend } = await import("resend");
    const mockSend = vi.fn().mockResolvedValue({ id: "mock-id" });
    (Resend as ReturnType<typeof vi.fn>).mockImplementation(() => ({
      emails: { send: mockSend },
    }));

    const { POST } = await importRoute();
    const request = new Request(
      "http://localhost/api/payment-notification",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validPayload),
      }
    );
    await POST(request);
    const callArgs = mockSend.mock.calls[0]?.[0] as { subject: string };
    expect(callArgs.subject).toContain("Yuki Tanaka");
    expect(callArgs.subject).toContain("Fall 2026");
  });
});

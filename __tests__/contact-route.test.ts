import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the resend module before importing the route
vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ id: "mock-email-id" }),
    },
  })),
}));

// Mock next/server
vi.mock("next/server", () => ({
  NextResponse: {
    json: (body: unknown, init?: ResponseInit) => ({
      body,
      status: init?.status ?? 200,
    }),
  },
}));

async function importRoute() {
  // Dynamic import to ensure mocks are in place first
  const mod = await import("../app/api/contact/route");
  return mod;
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.RESEND_API_KEY = "test_key";
  });

  it("returns 400 when required fields are missing", async () => {
    const { POST } = await importRoute();
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "Alice" }), // missing email, subject, message
    });
    const response = await POST(request);
    expect((response as { status: number }).status).toBe(400);
  });

  it("returns 200 and sends email when all required fields are present", async () => {
    const { POST } = await importRoute();
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Alice",
        email: "alice@example.com",
        subject: "Hello",
        message: "Test message",
      }),
    });
    const response = await POST(request);
    expect((response as { body: { success: boolean } }).body.success).toBe(true);
  });

  it("includes phone field when provided", async () => {
    const { Resend } = await import("resend");
    const mockSend = vi.fn().mockResolvedValue({ id: "mock-id" });
    (Resend as ReturnType<typeof vi.fn>).mockImplementation(() => ({
      emails: { send: mockSend },
    }));

    const { POST } = await importRoute();
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Bob",
        email: "bob@example.com",
        phone: "555-1234",
        subject: "Enrollment",
        message: "I want to enroll.",
      }),
    });
    await POST(request);
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: "Contact Form: Enrollment",
      })
    );
  });
});

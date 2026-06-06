import { z } from "zod";

export const TUITION_STANDARD = 260;
export const BCSF_DISCOUNT = 20;

export const SEMESTERS = [
  "Summer 2026",
  "Fall 2026",
  "Winter 2027",
  "Spring 2027",
] as const;

export const PaymentNotificationSchema = z.object({
  studentName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("A valid email address is required"),
  phone: z.string().optional(),
  course: z.string().min(1, "Please enter your course / class"),
  semester: z.enum(SEMESTERS),
  bcsfMember: z.boolean().default(false),
  paymentMethod: z.enum(["check", "money_order", "cash"]),
  checkOrMoNumber: z.string().optional(),
  mailedDate: z.string().optional(),
  notes: z.string().optional(),
});

export type PaymentNotificationPayload = z.infer<typeof PaymentNotificationSchema>;

import { z } from "zod";

// Service types
const serviceTypes = ["website", "pos", "inventory", "organization", "school", "custom"] as const;
const budgetTypes = ["below-50k", "50k-100k", "100k-300k", "above-300k", "monthly"] as const;

// Lead form validation schema
export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, "กรุณากรอกชื่ออย่างน้อย 2 ตัวอักษร")
    .max(100, "ชื่อยาวเกินไป"),
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง"),
  phone: z
    .string()
    .regex(/^0[0-9]{8,9}$/, "รูปแบบเบอร์โทรไม่ถูกต้อง (เช่น 0812345678)"),
  company: z.string().max(200).optional(),
  serviceType: z.enum(serviceTypes, {
    message: "กรุณาเลือกบริการที่สนใจ",
  }),
  budget: z.enum(budgetTypes).optional(),
  message: z
    .string()
    .min(10, "กรุณาอธิบายความต้องการอย่างน้อย 10 ตัวอักษร")
    .max(2000, "ข้อความยาวเกินไป"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

// Validate lead data
export function validateLeadForm(data: unknown) {
  return leadFormSchema.safeParse(data);
}

// Service type labels
export const serviceTypeLabels: Record<string, string> = {
  website: "ระบบเว็บไซต์",
  pos: "ระบบ POS",
  inventory: "ระบบคลังสินค้า",
  organization: "ระบบหน่วยงาน",
  school: "ระบบโรงเรียน",
  custom: "ระบบอื่นๆ",
};

// Budget labels
export const budgetLabels: Record<string, string> = {
  "below-50k": "ต่ำกว่า 50,000 บาท",
  "50k-100k": "50,000 - 100,000 บาท",
  "100k-300k": "100,000 - 300,000 บาท",
  "above-300k": "มากกว่า 300,000 บาท",
  monthly: "สนใจแบบรายเดือน",
};

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const leadSchema = z.object({
  name: z.string().min(2, "กรุณากรอกชื่อ"),
  email: z.string().email("อีเมลไม่ถูกต้อง"),
  phone: z.string().min(9, "เบอร์โทรไม่ถูกต้อง"),
  company: z.string().optional(),
  serviceType: z.enum([
    "website",
    "pos",
    "inventory",
    "organization",
    "school",
    "custom",
  ]),
  budget: z.string().optional(),
  message: z.string().min(10, "กรุณาอธิบายความต้องการ"),
  source: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = leadSchema.parse(body);

    // Map service type to enum
    const serviceTypeMap: Record<string, string> = {
      website: "WEBSITE",
      pos: "POS",
      inventory: "INVENTORY",
      organization: "ORGANIZATION",
      school: "SCHOOL",
      custom: "CUSTOM",
    };

    // Create lead in database
    const lead = await db.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        serviceType: serviceTypeMap[data.serviceType] as any,
        budget: data.budget,
        message: data.message,
        source: data.source || "website",
      },
    });

    // TODO: Send email notification
    // await sendEmail({
    //   to: "contact@easybiz.co.th",
    //   subject: `New Lead: ${data.name}`,
    //   body: `...`,
    // });

    // TODO: Add to CRM
    // await crm.createContact({ ... });

    return NextResponse.json(
      { success: true, leadId: lead.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Lead creation error:", error);
    return NextResponse.json(
      { success: false, error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const serviceType = searchParams.get("serviceType");

    const leads = await db.lead.findMany({
      where: {
        ...(status && { status: status as any }),
        ...(serviceType && { serviceType: serviceType as any }),
      },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error("Lead fetch error:", error);
    return NextResponse.json(
      { success: false, error: "เกิดข้อผิดพลาด" },
      { status: 500 }
    );
  }
}

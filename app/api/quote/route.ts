import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const quoteRequestSchema = z.object({
  leadId: z.string().optional(),
  name: z.string(),
  email: z.string().email(),
  serviceType: z.string(),
  items: z.array(
    z.object({
      description: z.string(),
      quantity: z.number().min(1),
      unitPrice: z.number().min(0),
    })
  ),
  notes: z.string().optional(),
  validDays: z.number().default(30),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = quoteRequestSchema.parse(body);

    // Calculate totals
    const items = data.items.map((item) => ({
      ...item,
      total: item.quantity * item.unitPrice,
    }));
    const subtotal = items.reduce((sum, item) => sum + item.total, 0);

    // Generate quote number
    const quoteNumber = `QT-${Date.now()}`;

    // TODO: Create quote in database
    // const quote = await db.quote.create({ ... });

    // TODO: Generate PDF
    // const pdf = await generateQuotePDF(quote);

    // TODO: Send email with PDF
    // await sendEmail({ ... });

    return NextResponse.json({
      success: true,
      quote: {
        quoteNumber,
        items,
        subtotal,
        discount: 0,
        total: subtotal,
        validUntil: new Date(Date.now() + data.validDays * 24 * 60 * 60 * 1000),
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Quote creation error:", error);
    return NextResponse.json(
      { success: false, error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" },
      { status: 500 }
    );
  }
}

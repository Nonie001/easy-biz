import { Check, X } from "lucide-react";
import Link from "next/link";
import { Button, Card, Badge } from "@/components/ui";

const pricingPlans = [
  {
    name: "ขายขาด",
    description: "เหมาะสำหรับธุรกิจที่ต้องการเป็นเจ้าของระบบ",
    priceLabel: "เริ่มต้น",
    price: "5,000",
    unit: "บาท",
    features: [
      { text: "เป็นเจ้าของ Source Code", included: true },
      { text: "ติดตั้งบน Server ของคุณ", included: true },
      { text: "ฝึกอบรมการใช้งาน", included: true },
      { text: "รับประกัน 3 เดือน", included: true },
      { text: "ปรับแต่งได้ตามต้องการ", included: true },
      { text: "Support ตลอดชีพ", included: false },
      { text: "อัปเดตฟีเจอร์ใหม่", included: false },
    ],
    popular: false,
    ctaText: "ขอใบเสนอราคา",
  },
  {
    name: "ดูแลรายเดือน",
    description: "เหมาะสำหรับธุรกิจที่ต้องการความสบาย ไม่ต้องดูแลเอง",
    priceLabel: "เริ่มต้น",
    price: "990",
    unit: "บาท/เดือน",
    features: [
      { text: "ไม่ต้องลงทุนก้อนใหญ่", included: true },
      { text: "Server + Hosting ฟรี", included: true },
      { text: "Backup ข้อมูลประจำวัน", included: true },
      { text: "Support ตลอดสัญญา", included: true },
      { text: "อัปเดตฟีเจอร์ใหม่ฟรี", included: true },
      { text: "ดูแลความปลอดภัย 24/7", included: true },
      { text: "ยกเลิกได้ทุกเมื่อ", included: true },
    ],
    popular: true,
    ctaText: "เริ่มต้นใช้งาน",
  },
  {
    name: "Enterprise",
    description: "สำหรับองค์กรขนาดใหญ่ที่ต้องการโซลูชันเฉพาะทาง",
    priceLabel: "ราคา",
    price: "ติดต่อเรา",
    unit: "",
    features: [
      { text: "ออกแบบระบบเฉพาะ", included: true },
      { text: "ทีมดูแลเฉพาะ", included: true },
      { text: "SLA รับประกัน", included: true },
      { text: "On-site Support", included: true },
      { text: "Training ทีมงาน", included: true },
      { text: "Integration API", included: true },
      { text: "ปรับขยายได้ไม่จำกัด", included: true },
    ],
    popular: false,
    ctaText: "ติดต่อทีมขาย",
  },
];

export function Pricing() {
  return (
    <section className="px-4 py-20 md:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            แพ็กเกจราคา
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ ทั้งแบบขายขาดและดูแลรายเดือน
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              highlight={plan.popular}
              className="relative flex flex-col"
            >
              {plan.popular && (
                <Badge
                  variant="warning"
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  แนะนำ
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-sm text-neutral-500">{plan.priceLabel}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-neutral-900">
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span className="text-neutral-600">{plan.unit}</span>
                  )}
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    ) : (
                      <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-300" />
                    )}
                    <span
                      className={
                        feature.included ? "text-neutral-700" : "text-neutral-400"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full"
                asChild
              >
                <Link href="/contact">{plan.ctaText}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

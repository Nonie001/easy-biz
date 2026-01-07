import { Check, X, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui";

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
    <section className="relative overflow-hidden bg-white px-4 py-20 md:px-6 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-1.5 text-sm font-medium text-yellow-700">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
            ราคาเหมาะสม
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            แพ็กเกจราคา
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ ทั้งแบบขายขาดและดูแลรายเดือน
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl border-2 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${
                plan.popular 
                  ? "border-yellow-400 shadow-lg shadow-yellow-500/10" 
                  : "border-neutral-200 hover:border-yellow-400/50"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -right-12 top-6 flex rotate-45 items-center gap-1 bg-yellow-400 px-12 py-1.5 text-xs font-semibold text-neutral-900">
                  <Star className="h-3 w-3" />
                  แนะนำ
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 rounded-xl bg-neutral-50 p-4">
                <span className="text-sm text-neutral-500">{plan.priceLabel}</span>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-yellow-600" : "text-neutral-900"}`}>
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span className="text-neutral-600">{plan.unit}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                    ) : (
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                        <X className="h-3 w-3 text-neutral-400" />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-neutral-700" : "text-neutral-400"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "primary" : "secondary"}
                className={`w-full ${plan.popular ? "shadow-lg shadow-yellow-500/20" : ""}`}
                asChild
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  {plan.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600">
            ไม่แน่ใจว่าแพ็กเกจไหนเหมาะ?{" "}
            <Link href="/contact" className="font-medium text-yellow-600 underline-offset-4 hover:underline">
              ปรึกษาเราฟรี
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

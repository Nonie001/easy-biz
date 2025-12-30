import { Metadata } from "next";
import { Pricing as PricingSection } from "@/components/sections";
import { Check, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "แพ็กเกจราคา | Easy Biz",
  description:
    "ราคาทำระบบ ทั้งแบบขายขาดและดูแลรายเดือน พร้อมสัญญาชัดเจน มั่นใจได้",
};

const faqs = [
  {
    q: "ขายขาดกับดูแลรายเดือน ต่างกันอย่างไร?",
    a: "ขายขาด: ชำระครั้งเดียว เป็นเจ้าของ Source Code ติดตั้งบน Server ของคุณ / ดูแลรายเดือน: ไม่ต้องลงทุนก้อนใหญ่ เราดูแล Server, Backup, อัปเดตให้ตลอด",
  },
  {
    q: "ระยะเวลาทำงานนานแค่ไหน?",
    a: "ขึ้นอยู่กับความซับซ้อนของโปรเจค โดยทั่วไป เว็บไซต์ 2-4 สัปดาห์, ระบบ POS/คลัง 4-8 สัปดาห์, ระบบองค์กร 2-4 เดือน",
  },
  {
    q: "ต้องชำระเงินอย่างไร?",
    a: "ขายขาด: 50% ก่อนเริ่มงาน และ 50% เมื่อส่งมอบ / ดูแลรายเดือน: ชำระล่วงหน้าทุกเดือน หรือจ่ายรายปีลด 10%",
  },
  {
    q: "มีรับประกันไหม?",
    a: "ขายขาด: รับประกัน Bug 3 เดือน / ดูแลรายเดือน: Support และแก้ไขตลอดสัญญา",
  },
  {
    q: "ต้องเตรียมอะไรบ้าง?",
    a: "เพียงอธิบายความต้องการ เรามีทีมช่วยวิเคราะห์และออกแบบให้ คุณไม่จำเป็นต้องมีความรู้ทางเทคนิค",
  },
];

export default function PricingPage() {
  return (
    <div>
      {/* Pricing Section */}
      <PricingSection />

      {/* Comparison Table */}
      <section className="bg-neutral-50 px-4 py-20 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-neutral-900">
            เปรียบเทียบแพ็กเกจ
          </h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="py-4 text-left font-semibold text-neutral-900">
                    รายการ
                  </th>
                  <th className="py-4 text-center font-semibold text-neutral-900">
                    ขายขาด
                  </th>
                  <th className="py-4 text-center font-semibold text-neutral-900">
                    ดูแลรายเดือน
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {[
                  ["เป็นเจ้าของ Source Code", true, false],
                  ["Server + Hosting", false, true],
                  ["Backup ข้อมูลประจำวัน", false, true],
                  ["Support ตลอดสัญญา", false, true],
                  ["อัปเดตฟีเจอร์ใหม่", false, true],
                  ["ฝึกอบรมการใช้งาน", true, true],
                  ["ปรับแต่งได้ตามต้องการ", true, "จำกัด"],
                  ["ย้าย Server ได้", true, false],
                ].map(([label, basic, pro]) => (
                  <tr key={label as string}>
                    <td className="py-4 text-neutral-700">{label}</td>
                    <td className="py-4 text-center">
                      {typeof basic === "boolean" ? (
                        basic ? (
                          <Check className="mx-auto h-5 w-5 text-green-500" />
                        ) : (
                          <span className="text-neutral-300">—</span>
                        )
                      ) : (
                        <span className="text-neutral-600">{basic}</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {typeof pro === "boolean" ? (
                        pro ? (
                          <Check className="mx-auto h-5 w-5 text-green-500" />
                        ) : (
                          <span className="text-neutral-300">—</span>
                        )
                      ) : (
                        <span className="text-neutral-600">{pro}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <HelpCircle className="mx-auto h-10 w-10 text-yellow-500" />
            <h2 className="mt-4 text-3xl font-bold text-neutral-900">
              คำถามที่พบบ่อย
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-neutral-200 p-6">
                <h3 className="font-semibold text-neutral-900">{faq.q}</h3>
                <p className="mt-2 text-neutral-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

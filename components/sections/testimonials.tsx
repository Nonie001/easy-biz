import { Quote } from "lucide-react";
import { Card } from "@/components/ui";

const testimonials = [
  {
    content:
      "ระบบ POS ที่ Easy Biz ทำให้ ใช้งานง่ายมาก พนักงานไม่ต้องอบรมนาน ขายของได้เลย ยอดขายเพิ่มขึ้นชัดเจน",
    author: "คุณสมชาย",
    role: "เจ้าของร้านค้าปลีก",
    avatar: "S",
  },
  {
    content:
      "ใช้ระบบคลังสินค้ามาปีกว่าแล้ว ไม่เคยมีปัญหา Support ดีมาก มีอะไรแก้ให้ทันที แนะนำเลยครับ",
    author: "คุณวิภา",
    role: "ผู้จัดการฝ่ายคลังสินค้า",
    avatar: "W",
  },
  {
    content:
      "ทำเว็บไซต์บริษัทใหม่ สวยมาก ทันสมัย ลูกค้าติดต่อเข้ามาเพิ่มขึ้น 3 เท่า ราคาคุ้มค่ามาก",
    author: "คุณธนา",
    role: "CEO บริษัทนำเข้า",
    avatar: "T",
  },
];

export function Testimonials() {
  return (
    <section className="bg-neutral-50 px-4 py-20 md:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            ลูกค้าพูดถึงเรา
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            ความเห็นจากลูกค้าที่ไว้วางใจใช้บริการ Easy Biz
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="relative">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-yellow-400/30" />
              <p className="text-neutral-700">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-semibold text-neutral-900">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

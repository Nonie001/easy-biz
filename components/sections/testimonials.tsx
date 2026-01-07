import { Quote, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    content:
      "ระบบ POS ที่ Easy Biz ทำให้ ใช้งานง่ายมาก พนักงานไม่ต้องอบรมนาน ขายของได้เลย ยอดขายเพิ่มขึ้นชัดเจน",
    author: "คุณสมชาย",
    role: "เจ้าของร้านค้าปลีก",
    avatar: "S",
    rating: 5,
  },
  {
    content:
      "ใช้ระบบคลังสินค้ามาปีกว่าแล้ว ไม่เคยมีปัญหา Support ดีมาก มีอะไรแก้ให้ทันที แนะนำเลยครับ",
    author: "คุณวิภา",
    role: "ผู้จัดการฝ่ายคลังสินค้า",
    avatar: "W",
    rating: 5,
  },
  {
    content:
      "ทำเว็บไซต์บริษัทใหม่ สวยมาก ทันสมัย ลูกค้าติดต่อเข้ามาเพิ่มขึ้น 3 เท่า ราคาคุ้มค่ามาก",
    author: "คุณธนา",
    role: "CEO บริษัทนำเข้า",
    avatar: "T",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 px-4 py-20 md:px-6 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[100px]" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-400">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
            รีวิวจากลูกค้า
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            ลูกค้าพูดถึงเรา
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            ความเห็นจากลูกค้าที่ไว้วางใจใช้บริการ Easy Biz
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author} 
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-neutral-800"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-yellow-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                {/* Quote Icon */}
                <Quote className="mb-4 h-10 w-10 text-yellow-500/30" />
                
                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="leading-relaxed text-neutral-300">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-yellow-400 to-amber-500 font-semibold text-neutral-900">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-800 bg-neutral-800/30 p-6 backdrop-blur-sm md:grid-cols-4 md:p-8">
          {[
            { value: "100+", label: "โปรเจกต์สำเร็จ" },
            { value: "50+", label: "ลูกค้าไว้วางใจ" },
            { value: "98%", label: "ความพึงพอใจ" },
            { value: "5.0", label: "คะแนนรีวิว" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-yellow-400 md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400 transition-colors hover:text-yellow-300"
          >
            ดูผลงานทั้งหมด
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

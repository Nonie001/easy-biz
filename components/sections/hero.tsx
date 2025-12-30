import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";

const highlights = [
  "รับทำทุกระบบ ครบวงจร",
  "ทั้งขายขาดและดูแลรายเดือน",
  "สัญญาชัดเจน มั่นใจได้",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-yellow-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500"></span>
            </span>
            พร้อมรับงานทันที
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            ระบบพร้อมใช้{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Easy Biz
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-neutral-600 md:text-xl">
            รับทำระบบและดูแลครบวงจร: เว็บไซต์, POS, คลังสินค้า, หน่วยงาน,
            โรงเรียน — ทั้งแบบขายขาดและดูแลรายเดือน
          </p>

          {/* Highlights */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-neutral-700"
              >
                <CheckCircle className="h-5 w-5 text-yellow-500" />
                {item}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                ขอใบเสนอราคาฟรี
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/portfolio">ดูตัวอย่างผลงาน</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

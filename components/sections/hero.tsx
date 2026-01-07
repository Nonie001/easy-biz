import Link from "next/link";
import { ArrowRight, CheckCircle, Monitor, ShoppingBag, BarChart3, Building, GraduationCap, Headphones } from "lucide-react";
import { Button } from "@/components/ui";

const features = [
  { icon: Monitor, label: "เว็บไซต์" },
  { icon: ShoppingBag, label: "POS" },
  { icon: BarChart3, label: "คลังสินค้า" },
  { icon: Building, label: "หน่วยงาน" },
  { icon: GraduationCap, label: "โรงเรียน" },
];

const stats = [
  { value: "100+", label: "โปรเจกต์สำเร็จ" },
  { value: "50+", label: "ลูกค้าไว้วางใจ" },
  { value: "24/7", label: "ซัพพอร์ต" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute -right-40 -top-40 h-125 w-125 rounded-full bg-yellow-400/20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-yellow-300/15 blur-[80px]" />
        <div className="absolute right-1/4 top-1/2 h-75 w-75 rounded-full bg-amber-400/10 blur-[60px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500"></span>
              </span>
              พร้อมรับงานทันที
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
              รับทำระบบซอฟต์แวร์
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-yellow-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  ครบวงจร
                </span>
                <span className="absolute -bottom-2 left-0 h-3 w-full bg-yellow-400/30 -skew-x-6" />
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 lg:mx-0">
              พัฒนาระบบเว็บไซต์ POS คลังสินค้า องค์กร และโรงเรียน 
              ทั้งแบบขายขาดและดูแลรายเดือน พร้อมซัพพอร์ตตลอด
            </p>

            {/* Highlights */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
              {[
                "รับทำทุกระบบ ครบวงจร",
                "ทั้งขายขาดและรายเดือน",
                "สัญญาชัดเจน มั่นใจได้",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-yellow-500" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" asChild className="w-full shadow-lg shadow-yellow-500/20 sm:w-auto">
                <Link href="/contact" className="flex items-center gap-2">
                  ขอใบเสนอราคาฟรี
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
                <Link href="/portfolio">ดูตัวอย่างผลงาน</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 border-t border-neutral-200 pt-8">
              <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8 lg:justify-start lg:divide-x lg:divide-neutral-200">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="px-0 text-center lg:px-6 lg:text-left"
                  >
                    <div className="bg-linear-to-r from-yellow-500 to-amber-500 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-neutral-600 sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-yellow-400/20 to-amber-500/20 blur-2xl" />
              
              {/* Main Container */}
              <div className="relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl shadow-neutral-200/50 md:p-8">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                      <span className="text-lg font-bold text-neutral-900">E</span>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Easy Biz</div>
                      <div className="text-xs text-neutral-500">ระบบพร้อมใช้งาน</div>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  </div>
                </div>

                {/* Feature Icons Grid */}
                <div className="mb-6 grid grid-cols-5 gap-3">
                  {features.map((feature, index) => (
                    <div 
                      key={feature.label}
                      className="group flex flex-col items-center gap-2 rounded-xl border border-neutral-100 bg-neutral-50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-yellow-50 hover:shadow-lg"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <feature.icon className="h-6 w-6 text-neutral-600 group-hover:text-yellow-600" />
                      <span className="text-[10px] font-medium text-neutral-500 group-hover:text-yellow-700">{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Section */}
                <div className="space-y-4 rounded-xl bg-neutral-50 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-neutral-700">ความพึงพอใจลูกค้า</span>
                    <span className="font-semibold text-yellow-600">98%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                    <div className="h-full w-[98%] rounded-full bg-linear-to-r from-yellow-400 to-amber-500" />
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="mt-6 flex items-center justify-between rounded-xl border border-yellow-200 bg-yellow-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400">
                      <Headphones className="h-5 w-5 text-neutral-900" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-900">ซัพพอร์ตตลอด 24/7</div>
                      <div className="text-xs text-neutral-600">ทีมงานพร้อมช่วยเหลือ</div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-yellow-600" />
                </div>
              </div>


              <div className="absolute -right-4 bottom-1/4 animate-float rounded-xl border border-neutral-200 bg-white p-3 shadow-lg md:-right-8" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-neutral-900">คะแนนรีวิว</div>
                    <div className="text-yellow-600 font-semibold">5.0/5.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

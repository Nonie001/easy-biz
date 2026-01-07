import {
  Zap,
  Shield,
  HeadphonesIcon,
  Sparkles,
  Clock,
  ThumbsUp,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "พัฒนาเร็ว",
    description: "ใช้ Framework ทันสมัย ส่งมอบงานได้รวดเร็ว",
  },
  {
    icon: Shield,
    title: "ปลอดภัยสูง",
    description: "รักษาความปลอดภัยข้อมูลตามมาตรฐานสากล",
  },
  {
    icon: HeadphonesIcon,
    title: "Support ทันใจ",
    description: "ทีมซัพพอร์ตพร้อมช่วยเหลือตลอดสัญญา",
  },
  {
    icon: Sparkles,
    title: "UI/UX สวยงาม",
    description: "ออกแบบให้ใช้งานง่าย ดูทันสมัย ไม่เชย",
  },
  {
    icon: Clock,
    title: "ส่งงานตรงเวลา",
    description: "วางแผนงานชัดเจน ส่งมอบตามกำหนดเสมอ",
  },
  {
    icon: ThumbsUp,
    title: "รับประกันผลงาน",
    description: "แก้ไข Bug ฟรี ตลอดระยะเวลารับประกัน",
  },
];

const highlights = [
  "ทีมงานมืออาชีพ ประสบการณ์มากกว่า 5 ปี",
  "เทคโนโลยีทันสมัย ระบบเสถียร ไม่กระตุก",
  "รองรับการขยายตัวของธุรกิจในอนาคต",
  "ราคาเป็นกันเอง เหมาะกับ SME ทุกขนาด",
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 px-4 py-20 md:px-6 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-1.5 text-sm font-medium text-yellow-700">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
              ทำไมต้องเลือกเรา
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
              ทำไมต้องเลือก{" "}
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                Easy Biz?
              </span>
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              เราพร้อมส่งมอบระบบคุณภาพ ตรงเวลา ดูแลต่อเนื่อง 
              ด้วยทีมงานที่มีประสบการณ์และความเชี่ยวชาญ
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400">
                    <CheckCircle className="h-4 w-4 text-neutral-900" />
                  </div>
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="mt-10 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-yellow-500">5+</div>
                <div className="text-sm text-neutral-500">ปีประสบการณ์</div>
              </div>
              <div className="h-12 w-px bg-neutral-200"></div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">98%</div>
                <div className="text-sm text-neutral-500">ความพึงพอใจ</div>
              </div>
              <div className="h-12 w-px bg-neutral-200"></div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">100+</div>
                <div className="text-sm text-neutral-500">โปรเจกต์</div>
              </div>
            </div>
          </div>

          {/* Right - Feature Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-yellow-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 transition-all duration-300 group-hover:bg-yellow-400">
                    <feature.icon className="h-6 w-6 text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900" />
                  </div>
                  <h3 className="font-semibold text-neutral-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

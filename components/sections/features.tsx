import {
  Zap,
  Shield,
  HeadphonesIcon,
  Sparkles,
  Clock,
  ThumbsUp,
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

export function Features() {
  return (
    <section className="px-4 py-20 md:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            ทำไมต้องเลือก Easy Biz?
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            เราพร้อมส่งมอบระบบคุณภาพ ตรงเวลา ดูแลต่อเนื่อง
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10">
                <feature.icon className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

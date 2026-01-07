import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import { Users, Target, Award, Heart, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui";

export const metadata = generateSEO({
  title: "เกี่ยวกับเรา",
  description: "ทีมพัฒนาระบบมืออาชีพ พร้อมดูแลธุรกิจของคุณให้เติบโตด้วยเทคโนโลยี",
  path: "/about",
  tags: ["เกี่ยวกับ", "ทีมงาน", "ประสบการณ์"],
});

const stats = [
  { label: "ปีประสบการณ์", value: "5+" },
  { label: "โปรเจคสำเร็จ", value: "100+" },
  { label: "ลูกค้าไว้วางใจ", value: "50+" },
  { label: "ทีมงานมืออาชีพ", value: "10+" },
];

const values = [
  {
    icon: Target,
    title: "มุ่งเน้นผลลัพธ์",
    description: "เราให้ความสำคัญกับผลลัพธ์ที่วัดได้ ไม่ใช่แค่ส่งมอบงาน",
  },
  {
    icon: Award,
    title: "คุณภาพเป็นหลัก",
    description: "ทุกระบบผ่านการทดสอบอย่างละเอียด พร้อมรับประกันคุณภาพ",
  },
  {
    icon: Heart,
    title: "ใส่ใจลูกค้า",
    description: "เราดูแลลูกค้าเหมือนคนในครอบครัว พร้อม Support ตลอด",
  },
  {
    icon: Users,
    title: "ทีมงานมืออาชีพ",
    description: "ทีมนักพัฒนาที่มีประสบการณ์ พร้อมเรียนรู้เทคโนโลยีใหม่",
  },
];

const team = [
  {
    name: "คุณเอ",
    role: "Founder & CEO",
    description: "ประสบการณ์ 10+ ปี ในการพัฒนาระบบ",
    avatar: "A",
  },
  {
    name: "คุณบี",
    role: "Lead Developer",
    description: "Full-stack Developer ผู้เชี่ยวชาญ",
    avatar: "B",
  },
  {
    name: "คุณซี",
    role: "UI/UX Designer",
    description: "ออกแบบ UX ที่ใช้งานง่าย สวยงาม",
    avatar: "C",
  },
  {
    name: "คุณดี",
    role: "Project Manager",
    description: "ดูแลโปรเจคให้เสร็จตรงเวลา",
    avatar: "D",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden px-4 py-16 md:px-6 lg:py-24">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>เกี่ยวกับเรา</span>
          </div>
          <h1 className="bg-linear-to-r from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            เกี่ยวกับ Easy Biz
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 md:text-xl">
            เราคือทีมพัฒนาระบบมืออาชีพ ที่พร้อมช่วยให้ธุรกิจของคุณเติบโต
            ด้วยเทคโนโลยีที่ทันสมัย ใช้งานง่าย และดูแลต่อเนื่อง
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-white to-neutral-50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-yellow-400/0 to-yellow-400/0 transition-all duration-300 group-hover:from-yellow-400/5 group-hover:to-yellow-400/10" />
              <p className="relative bg-linear-to-r from-yellow-500 to-yellow-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                {stat.value}
              </p>
              <p className="relative mt-2 text-sm font-medium text-neutral-600 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="mt-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-6">
              <h2 className="bg-linear-to-r from-neutral-900 to-neutral-700 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                เรื่องราวของเรา
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p className="text-lg">
                  Easy Biz เริ่มต้นจากความเชื่อที่ว่า ทุกธุรกิจควรมีโอกาสเข้าถึง
                  ระบบที่ดี ในราคาที่เป็นธรรม โดยไม่ต้องลงทุนมหาศาล
                </p>
                <p>
                  เราเห็นว่าธุรกิจขนาดเล็กและกลางหลายแห่ง ต้องการระบบที่ช่วยจัดการงาน
                  แต่ติดปัญหาเรื่องงบประมาณ หรือไม่รู้จะเริ่มต้นอย่างไร
                </p>
                <p>
                  ดังนั้น เราจึงสร้าง Easy Biz ขึ้นมา เพื่อเป็นพาร์ทเนอร์ที่พร้อม
                  ช่วยเหลือธุรกิจของคุณ ตั้งแต่การให้คำปรึกษา ออกแบบ พัฒนา
                  ไปจนถึงดูแลหลังส่งมอบ
                </p>
              </div>
            </div>
            <div className="group relative aspect-video overflow-hidden rounded-3xl bg-linear-to-br from-yellow-100 via-yellow-200 to-yellow-300 p-12 shadow-xl transition-all duration-500 hover:shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]" />
              <div className="absolute inset-0 bg-linear-to-br from-yellow-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full items-center justify-center">
                <span className="animate-float bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-6xl font-bold text-transparent opacity-50 transition-all duration-500 group-hover:scale-110 group-hover:opacity-70 md:text-7xl">
                  EASY BIZ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="bg-linear-to-r from-neutral-900 to-neutral-700 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              ค่านิยมของเรา
            </h2>
            <p className="mt-4 text-neutral-600">
              หลักการที่เรายึดถือในการทำงาน
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-white to-neutral-50 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-yellow-400/0 to-yellow-400/0 transition-all duration-300 group-hover:from-yellow-400/5 group-hover:to-yellow-400/10" />
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-yellow-100 to-yellow-200 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <value.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="relative text-lg font-semibold text-neutral-900">
                  {value.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="bg-linear-to-r from-neutral-900 to-neutral-700 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              ทีมงานของเรา
            </h2>
            <p className="mt-4 text-neutral-600">
              ทีมงานมืออาชีพที่พร้อมดูแลโปรเจคของคุณ
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-white to-neutral-50 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-yellow-400/0 to-yellow-400/0 transition-all duration-300 group-hover:from-yellow-400/5 group-hover:to-yellow-400/10" />
                <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-yellow-400 to-yellow-500 text-3xl font-bold text-neutral-900 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  {member.avatar}
                </div>
                <h3 className="relative text-lg font-semibold text-neutral-900">
                  {member.name}
                </h3>
                <p className="relative mt-1 text-sm font-medium text-yellow-600">
                  {member.role}
                </p>
                <p className="relative mt-3 text-sm leading-relaxed text-neutral-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 relative overflow-hidden rounded-3xl bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-8 text-center shadow-2xl md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,215,0,0.1),transparent)]" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="relative">
            <h2 className="bg-linear-to-r from-white to-neutral-300 bg-clip-text text-2xl font-bold text-transparent md:text-3xl lg:text-4xl">
              พร้อมเริ่มต้นโปรเจคกับเรา?
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              ติดต่อเราวันนี้ รับคำปรึกษาฟรี ไม่มีข้อผูกมัด
            </p>
            <Button
              size="lg"
              className="mt-8 bg-linear-to-r from-yellow-400 to-yellow-500 text-neutral-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-yellow-500 hover:to-yellow-600"
              asChild
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                ติดต่อเรา
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { generateSEO } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Users, Target, Award, Heart, ArrowRight } from "lucide-react";
import { Button, Card } from "@/components/ui";

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
    <div className="px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
            เกี่ยวกับ Easy Biz
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            เราคือทีมพัฒนาระบบมืออาชีพ ที่พร้อมช่วยให้ธุรกิจของคุณเติบโต
            ด้วยเทคโนโลยีที่ทันสมัย ใช้งานง่าย และดูแลต่อเนื่อง
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-yellow-500">{stat.value}</p>
              <p className="mt-2 text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="mt-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900">
                เรื่องราวของเรา
              </h2>
              <div className="mt-6 space-y-4 text-neutral-600">
                <p>
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
            <div className="rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 p-12 flex items-center justify-center aspect-video">
              <span className="text-6xl font-bold text-yellow-400/50">EASY BIZ</span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-neutral-900">
            ค่านิยมของเรา
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100">
                  <value.icon className="h-7 w-7 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-neutral-900">
            ทีมงานของเรา
          </h2>
          <p className="mt-4 text-center text-neutral-600">
            ทีมงานมืออาชีพที่พร้อมดูแลโปรเจคของคุณ
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-2xl font-bold text-neutral-900">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-yellow-600">{member.role}</p>
                <p className="mt-2 text-sm text-neutral-600">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-2xl bg-neutral-900 p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            พร้อมเริ่มต้นโปรเจคกับเรา?
          </h2>
          <p className="mt-4 text-neutral-400">
            ติดต่อเราวันนี้ รับคำปรึกษาฟรี ไม่มีข้อผูกมัด
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/contact">
              ติดต่อเรา
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

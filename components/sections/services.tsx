import {
  Globe,
  ShoppingCart,
  Package,
  Building2,
  GraduationCap,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui";

const services = [
  {
    icon: Globe,
    title: "ระบบเว็บไซต์",
    description:
      "Landing Page, เว็บบริษัท, E-commerce, Blog พร้อม CMS จัดการเนื้อหาง่าย",
    href: "/services#website",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: ShoppingCart,
    title: "ระบบ POS",
    description:
      "ระบบขายหน้าร้าน จัดการสินค้า สต็อก รายงานยอดขาย พิมพ์ใบเสร็จ",
    href: "/services#pos",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Package,
    title: "ระบบคลังสินค้า",
    description: "จัดการสต็อก เข้า-ออก โอนย้าย ตรวจนับ แจ้งเตือน รายงานครบถ้วน",
    href: "/services#inventory",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Building2,
    title: "ระบบหน่วยงาน",
    description:
      "ระบบงานเอกสาร e-Office การลา อนุมัติ ลายเซ็นดิจิทัล จัดการบุคลากร",
    href: "/services#organization",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: GraduationCap,
    title: "ระบบโรงเรียน",
    description:
      "ระบบทะเบียน ผลการเรียน ตารางสอน งานธุรการ ผู้ปกครองติดตามผล",
    href: "/services#school",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    icon: Wrench,
    title: "ระบบตามสั่ง",
    description:
      "รับออกแบบและพัฒนาระบบเฉพาะทาง ตามความต้องการของธุรกิจคุณ",
    href: "/services#custom",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
];

export function Services() {
  return (
    <section className="bg-neutral-50 px-4 py-20 md:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            บริการของเรา
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            รับทำทุกระบบ ครบวงจร ตั้งแต่เว็บไซต์ ไปจนถึงระบบองค์กรขนาดใหญ่
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <Card className="group h-full cursor-pointer hover:border-yellow-400">
                <div
                  className={`mb-4 inline-flex rounded-xl p-3 ${service.bg}`}
                >
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-yellow-600">
                  {service.title}
                </h3>
                <p className="mt-2 text-neutral-600">{service.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

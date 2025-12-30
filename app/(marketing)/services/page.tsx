import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Package,
  Building2,
  GraduationCap,
  Wrench,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "บริการของเรา | Easy Biz",
  description:
    "รับทำระบบครบวงจร เว็บไซต์ ระบบ POS คลังสินค้า หน่วยงาน โรงเรียน พร้อมดูแลต่อเนื่อง",
};

const services = [
  {
    id: "website",
    icon: Globe,
    title: "ระบบเว็บไซต์",
    description:
      "ออกแบบและพัฒนาเว็บไซต์ทุกรูปแบบ ตั้งแต่ Landing Page ไปจนถึง E-commerce ขนาดใหญ่",
    features: [
      "Landing Page / เว็บบริษัท",
      "E-commerce / ร้านค้าออนไลน์",
      "Blog / Content Management",
      "Booking / จองคิว",
      "Portfolio / แสดงผลงาน",
      "Custom Web Application",
    ],
    priceStart: "5,000",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    id: "pos",
    icon: ShoppingCart,
    title: "ระบบ POS",
    description:
      "ระบบขายหน้าร้านครบวงจร ใช้งานง่าย รองรับทั้งร้านค้าปลีก ร้านอาหาร คาเฟ่",
    features: [
      "ขายสินค้า / บริการ",
      "จัดการสต็อกสินค้า",
      "รายงานยอดขายแบบ Real-time",
      "ระบบสมาชิก / สะสมแต้ม",
      "พิมพ์ใบเสร็จ / ใบกำกับภาษี",
      "เชื่อมต่อ Payment Gateway",
    ],
    priceStart: "2,500",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    id: "inventory",
    icon: Package,
    title: "ระบบคลังสินค้า",
    description:
      "จัดการสต็อกอย่างมืออาชีพ รองรับหลายคลัง หลายสาขา พร้อมรายงานครบถ้วน",
    features: [
      "รับ-จ่าย สินค้า",
      "โอนย้ายระหว่างคลัง",
      "ตรวจนับสต็อก",
      "แจ้งเตือน Min/Max Stock",
      "Barcode / QR Code",
      "รายงาน Stock Movement",
    ],
    priceStart: "8,000",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    id: "organization",
    icon: Building2,
    title: "ระบบหน่วยงาน",
    description:
      "ระบบสารบรรณ งานบุคคล e-Office ครบวงจร รองรับทั้งภาครัฐและเอกชน",
    features: [
      "ระบบสารบรรณ / หนังสือเวียน",
      "ระบบลงเวลา / การลา",
      "ระบบอนุมัติ Workflow",
      "ลายเซ็นดิจิทัล",
      "จัดการเอกสาร / ไฟล์",
      "Dashboard ผู้บริหาร",
    ],
    priceStart: "15,000",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    id: "school",
    icon: GraduationCap,
    title: "ระบบโรงเรียน",
    description:
      "ระบบบริหารจัดการโรงเรียนครบวงจร ตั้งแต่งานทะเบียน งานวิชาการ ถึงงานการเงิน",
    features: [
      "ทะเบียนนักเรียน / ครู",
      "ระบบผลการเรียน / เกรด",
      "ตารางสอน / ตารางสอบ",
      "ระบบการเงิน / ค่าเทอม",
      "ผู้ปกครองติดตามผล",
      "ประกาศ / แจ้งข่าวสาร",
    ],
    priceStart: "25,000",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    id: "custom",
    icon: Wrench,
    title: "ระบบตามสั่ง",
    description:
      "รับออกแบบและพัฒนาระบบเฉพาะทาง ตามความต้องการเฉพาะของธุรกิจคุณ",
    features: [
      "วิเคราะห์ความต้องการ",
      "ออกแบบ UX/UI เฉพาะ",
      "พัฒนาตาม Spec",
      "ทดสอบระบบครบถ้วน",
      "ฝึกอบรมการใช้งาน",
      "ดูแลหลังส่งมอบ",
    ],
    priceStart: "ตามโปรเจค",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
];

export default function ServicesPage() {
  return (
    <div className="px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
            บริการของเรา
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            รับทำระบบครบวงจร ตั้งแต่เว็บไซต์เล็กๆ ไปจนถึงระบบองค์กรขนาดใหญ่
            พร้อมดูแลต่อเนื่อง
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 space-y-24">
          {services.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`mb-4 inline-flex rounded-xl p-3 ${service.bg}`}
                  >
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center gap-4">
                    <div>
                      <span className="text-sm text-neutral-500">เริ่มต้น</span>
                      <p className="text-2xl font-bold text-neutral-900">
                        {service.priceStart}{" "}
                        {service.priceStart !== "ตามโปรเจค" && "บาท"}
                      </p>
                    </div>
                    <Button asChild>
                      <Link href="/contact">
                        ขอใบเสนอราคา
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="aspect-video flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
                    <service.icon
                      className={`h-24 w-24 ${service.color} opacity-20`}
                    />
                  </Card>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-2xl bg-yellow-400 p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
            ไม่แน่ใจว่าต้องการระบบอะไร?
          </h2>
          <p className="mt-2 text-neutral-700">
            ติดต่อเราเพื่อปรึกษาฟรี ทีมงานพร้อมช่วยวิเคราะห์ความต้องการของคุณ
          </p>
          <Button variant="secondary" size="lg" className="mt-6" asChild>
            <Link href="/contact">ปรึกษาฟรี</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

import {
  Globe,
  ShoppingCart,
  Package,
  Building2,
  GraduationCap,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "ระบบเว็บไซต์",
    description:
      "Landing Page, เว็บบริษัท, E-commerce, Blog พร้อม CMS จัดการเนื้อหาง่าย",
    href: "/services#website",
  },
  {
    icon: ShoppingCart,
    title: "ระบบ POS",
    description:
      "ระบบขายหน้าร้าน จัดการสินค้า สต็อก รายงานยอดขาย พิมพ์ใบเสร็จ",
    href: "/services#pos",
  },
  {
    icon: Package,
    title: "ระบบคลังสินค้า",
    description: "จัดการสต็อก เข้า-ออก โอนย้าย ตรวจนับ แจ้งเตือน รายงานครบถ้วน",
    href: "/services#inventory",
  },
  {
    icon: Building2,
    title: "ระบบหน่วยงาน",
    description:
      "ระบบงานเอกสาร e-Office การลา อนุมัติ ลายเซ็นดิจิทัล จัดการบุคลากร",
    href: "/services#organization",
  },
  {
    icon: GraduationCap,
    title: "ระบบโรงเรียน",
    description:
      "ระบบทะเบียน ผลการเรียน ตารางสอน งานธุรการ ผู้ปกครองติดตามผล",
    href: "/services#school",
  },
  {
    icon: Wrench,
    title: "ระบบตามสั่ง",
    description:
      "รับออกแบบและพัฒนาระบบเฉพาะทาง ตามความต้องการของธุรกิจคุณ",
    href: "/services#custom",
  },
];

export function Services() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 md:px-6 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-1.5 text-sm font-medium text-yellow-700">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
            บริการครบวงจร
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            บริการของเรา
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            รับทำทุกระบบ ครบวงจร ตั้งแต่เว็บไซต์ ไปจนถึงระบบองค์กรขนาดใหญ่
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={service.title} href={service.href}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-yellow-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400">
                    <service.icon className="h-7 w-7 text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-yellow-700">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-yellow-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>ดูรายละเอียด</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Number badge */}
                <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold text-neutral-400 transition-all duration-300 group-hover:bg-yellow-100 group-hover:text-yellow-600">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-yellow-500 hover:text-neutral-900 hover:shadow-lg hover:shadow-yellow-500/20"
          >
            ดูบริการทั้งหมด
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

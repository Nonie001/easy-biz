import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "ผลงาน | Easy Biz",
  description: "ตัวอย่างผลงานที่ผ่านมา ระบบเว็บไซต์ POS คลังสินค้า หน่วยงาน โรงเรียน",
};

const portfolioItems = [
  {
    id: "1",
    title: "ร้านกาแฟ Coffee House",
    description:
      "ระบบ POS สำหรับร้านกาแฟ พร้อมจัดการสต็อกวัตถุดิบ ระบบสมาชิก และรายงานยอดขาย",
    category: "POS",
    image: null,
    tags: ["POS", "ร้านกาแฟ", "สต็อก"],
    link: "#",
  },
  {
    id: "2",
    title: "บริษัท ABC Import",
    description:
      "เว็บไซต์บริษัทนำเข้าสินค้า พร้อมระบบแคตตาล็อกสินค้า และฟอร์มติดต่อ",
    category: "Website",
    image: null,
    tags: ["เว็บไซต์", "Corporate", "แคตตาล็อก"],
    link: "#",
  },
  {
    id: "3",
    title: "โรงเรียนอนุบาลสุขใจ",
    description:
      "ระบบบริหารโรงเรียนครบวงจร ทะเบียน ผลการเรียน ตารางสอน ผู้ปกครองติดตามผล",
    category: "School",
    image: null,
    tags: ["โรงเรียน", "ทะเบียน", "ผลการเรียน"],
    link: "#",
  },
  {
    id: "4",
    title: "คลังสินค้า XYZ Logistics",
    description:
      "ระบบจัดการคลังสินค้า 3 สาขา รองรับ Barcode พร้อมรายงาน Movement",
    category: "Inventory",
    image: null,
    tags: ["คลังสินค้า", "Barcode", "Multi-branch"],
    link: "#",
  },
  {
    id: "5",
    title: "สำนักงานเทศบาล",
    description:
      "ระบบสารบรรณอิเล็กทรอนิกส์ e-Office งานบุคคล ลงเวลา การลา อนุมัติ",
    category: "Organization",
    image: null,
    tags: ["หน่วยงาน", "e-Office", "สารบรรณ"],
    link: "#",
  },
  {
    id: "6",
    title: "ร้านอาหาร Street Food",
    description:
      "ระบบ POS สำหรับร้านอาหาร รองรับหลายโต๊ะ แยก Bill พิมพ์ใบเสร็จ",
    category: "POS",
    image: null,
    tags: ["POS", "ร้านอาหาร", "Multi-table"],
    link: "#",
  },
];

const categories = ["All", "Website", "POS", "Inventory", "Organization", "School"];

export default function PortfolioPage() {
  return (
    <div className="px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
            ผลงานของเรา
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            ตัวอย่างโปรเจคที่เราได้ออกแบบและพัฒนาให้ลูกค้า
          </p>
        </div>

        {/* Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                cat === "All"
                  ? "bg-yellow-400 text-neutral-900"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat === "All" ? "ทั้งหมด" : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden">
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center -mx-6 -mt-6 mb-4">
                <span className="text-4xl font-bold text-neutral-300">
                  {item.category}
                </span>
              </div>

              <Badge variant="warning" className="mb-3">
                {item.category}
              </Badge>

              <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-yellow-600">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={item.link}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-yellow-600 hover:text-yellow-700"
              >
                ดูรายละเอียด
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-600">
            สนใจให้เราช่วยทำระบบให้คุณ?
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-neutral-900 transition-all hover:bg-yellow-500"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </div>
  );
}

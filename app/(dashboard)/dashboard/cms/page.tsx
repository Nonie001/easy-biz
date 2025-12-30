import { Card, Button } from "@/components/ui";
import { FileText, Image, Settings, Plus } from "lucide-react";
import Link from "next/link";

const contentSections = [
  {
    title: "หน้าเว็บ",
    description: "จัดการเนื้อหาหน้าเว็บต่างๆ",
    icon: FileText,
    items: [
      { name: "หน้าแรก", href: "/dashboard/cms/pages/home" },
      { name: "บริการ", href: "/dashboard/cms/pages/services" },
      { name: "ราคา", href: "/dashboard/cms/pages/pricing" },
      { name: "เกี่ยวกับเรา", href: "/dashboard/cms/pages/about" },
    ],
  },
  {
    title: "บทความ",
    description: "จัดการบทความและบล็อก",
    icon: FileText,
    items: [
      { name: "บทความทั้งหมด", href: "/dashboard/cms/blog" },
      { name: "เขียนบทความใหม่", href: "/dashboard/cms/blog/new" },
      { name: "หมวดหมู่", href: "/dashboard/cms/blog/categories" },
    ],
  },
  {
    title: "ผลงาน",
    description: "จัดการ Portfolio/Case Study",
    icon: Image,
    items: [
      { name: "ผลงานทั้งหมด", href: "/dashboard/cms/portfolio" },
      { name: "เพิ่มผลงาน", href: "/dashboard/cms/portfolio/new" },
    ],
  },
  {
    title: "ตั้งค่าเว็บ",
    description: "ตั้งค่าทั่วไปของเว็บไซต์",
    icon: Settings,
    items: [
      { name: "ข้อมูลติดต่อ", href: "/dashboard/cms/settings/contact" },
      { name: "SEO", href: "/dashboard/cms/settings/seo" },
      { name: "โซเชียลมีเดีย", href: "/dashboard/cms/settings/social" },
    ],
  },
];

export default function CMSPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">จัดการเนื้อหา</h1>
          <p className="mt-1 text-neutral-600">
            แก้ไขเนื้อหา บทความ และการตั้งค่าเว็บไซต์
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {contentSections.map((section) => (
          <Card key={section.title}>
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-yellow-100 p-2">
                <section.icon className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-neutral-900">{section.title}</h2>
                <p className="mt-1 text-sm text-neutral-600">
                  {section.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-neutral-700 hover:text-yellow-600"
                      >
                        → {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-neutral-900">การดำเนินการด่วน</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button>
            <Plus className="h-4 w-4" />
            เขียนบทความใหม่
          </Button>
          <Button variant="outline">
            <Plus className="h-4 w-4" />
            เพิ่มผลงาน
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4" />
            ตั้งค่า SEO
          </Button>
        </div>
      </div>
    </div>
  );
}

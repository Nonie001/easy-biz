import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

const footerLinks = {
  services: [
    { href: "/services#website", label: "ระบบเว็บไซต์" },
    { href: "/services#pos", label: "ระบบ POS" },
    { href: "/services#inventory", label: "ระบบคลังสินค้า" },
    { href: "/services#organization", label: "ระบบหน่วยงาน" },
    { href: "/services#school", label: "ระบบโรงเรียน" },
  ],
  company: [
    { href: "/about", label: "เกี่ยวกับเรา" },
    { href: "/portfolio", label: "ผลงาน" },
    { href: "/blog", label: "บทความ" },
    { href: "/contact", label: "ติดต่อ" },
  ],
  support: [
    { href: "/pricing", label: "ราคา" },
    { href: "/faq", label: "คำถามที่พบบ่อย" },
    { href: "/terms", label: "ข้อกำหนดการใช้งาน" },
    { href: "/privacy", label: "นโยบายความเป็นส่วนตัว" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-yellow-400/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-20">
        {/* Top Section - Newsletter */}
        <div className="mb-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8 lg:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 md:text-2xl">
                รับข่าวสารและโปรโมชั่นพิเศษ
              </h3>
              <p className="mt-2 text-neutral-600">
                สมัครรับข่าวสารเพื่อไม่พลาดโปรโมชั่นดีๆ และบทความที่เป็นประโยชน์
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="อีเมลของคุณ"
                className="flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
              />
              <Button className="shadow-md shadow-yellow-500/20">
                <span>สมัครรับข่าวสาร</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 shadow-md shadow-yellow-500/20">
                <span className="text-lg font-bold text-neutral-900">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-neutral-900">Easy Biz</span>
                <span className="text-xs text-neutral-500">ระบบพร้อมใช้</span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-neutral-600">
              รับทำระบบและดูแลครบวงจร ทั้งแบบขายขาดและดูแลรายเดือน
              พร้อมสัญญาชัดเจน มั่นใจได้
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:contact@easybiz.co.th"
                className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-yellow-600"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100">
                  <Mail className="h-4 w-4" />
                </div>
                contact@easybiz.co.th
              </a>
              <a
                href="tel:02-xxx-xxxx"
                className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-yellow-600"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100">
                  <Phone className="h-4 w-4" />
                </div>
                02-xxx-xxxx
              </a>
              <p className="flex items-center gap-2 text-neutral-600">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100">
                  <MapPin className="h-4 w-4" />
                </span>
                กรุงเทพมหานคร, ประเทศไทย
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-neutral-900">บริการ</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-yellow-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-neutral-900">บริษัท</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-yellow-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-neutral-900">ช่วยเหลือ</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-yellow-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 md:flex-row">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Easy Biz. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/easybiz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-400 transition-all hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-600"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://line.me/easybiz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-400 transition-all hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-600"
              aria-label="Line"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Facebook, MessageCircle } from "lucide-react";

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
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                <Zap className="h-6 w-6 text-neutral-900" />
              </div>
              <span className="text-xl font-bold text-neutral-900">Easy Biz</span>
            </Link>
            <p className="mt-4 max-w-xs text-neutral-600">
              รับทำระบบและดูแลครบวงจร ทั้งแบบขายขาดและดูแลรายเดือน
              พร้อมสัญญาชัดเจน มั่นใจได้
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:contact@easybiz.co.th"
                className="flex items-center gap-2 text-neutral-600 hover:text-yellow-600"
              >
                <Mail className="h-4 w-4" />
                contact@easybiz.co.th
              </a>
              <a
                href="tel:02-xxx-xxxx"
                className="flex items-center gap-2 text-neutral-600 hover:text-yellow-600"
              >
                <Phone className="h-4 w-4" />
                02-xxx-xxxx
              </a>
              <p className="flex items-center gap-2 text-neutral-600">
                <MapPin className="h-4 w-4" />
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
                    className="text-neutral-600 transition-colors hover:text-yellow-600"
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
                    className="text-neutral-600 transition-colors hover:text-yellow-600"
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
                    className="text-neutral-600 transition-colors hover:text-yellow-600"
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
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/easybiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors hover:text-yellow-600"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://line.me/easybiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors hover:text-yellow-600"
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

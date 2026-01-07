"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

const navLinks = [
  { href: "/services", label: "บริการ" },
  { href: "/pricing", label: "ราคา" },
  { href: "/portfolio", label: "ผลงาน" },
  { href: "/blog", label: "บทความ" },
  { href: "/about", label: "เกี่ยวกับเรา" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="hidden border-b border-neutral-100 bg-neutral-50 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm md:px-6">
          <div className="flex items-center gap-4 text-neutral-600">
            <span>🎉 พิเศษ! รับส่วนลด 10% สำหรับลูกค้าใหม่</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:02-xxx-xxxx" className="flex items-center gap-1 text-neutral-600 transition-colors hover:text-yellow-600">
              <Phone className="h-3.5 w-3.5" />
              02-xxx-xxxx
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="border-b border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 shadow-md shadow-yellow-500/20">
              <span className="text-lg font-bold text-neutral-900">E</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-neutral-900">Easy Biz</span>
              <span className="hidden text-[10px] text-neutral-500 lg:block">ระบบพร้อมใช้</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 transition-all hover:bg-neutral-100 hover:text-neutral-900"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Link 
              href="/contact" 
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-yellow-600"
            >
              ติดต่อเรา
            </Link>
            <Button asChild size="sm" className="shadow-md shadow-yellow-500/20">
              <Link href="/contact" className="flex items-center gap-1">
                ขอใบเสนอราคา
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-14 z-50 border-b border-neutral-200 bg-white shadow-lg md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="mt-4 border-t border-neutral-100 pt-4">
              <Button className="w-full shadow-md shadow-yellow-500/20" asChild>
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  ขอใบเสนอราคา
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-500">
              <Phone className="h-4 w-4" />
              <a href="tel:02-xxx-xxxx" className="hover:text-yellow-600">02-xxx-xxxx</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

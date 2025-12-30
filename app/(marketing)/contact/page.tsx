"use client";

import { useState } from "react";
import { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button, Input, Textarea, Card } from "@/components/ui";

const serviceOptions = [
  { value: "website", label: "ระบบเว็บไซต์" },
  { value: "pos", label: "ระบบ POS" },
  { value: "inventory", label: "ระบบคลังสินค้า" },
  { value: "organization", label: "ระบบหน่วยงาน" },
  { value: "school", label: "ระบบโรงเรียน" },
  { value: "custom", label: "ระบบอื่นๆ" },
];

const budgetOptions = [
  { value: "below-50k", label: "ต่ำกว่า 50,000 บาท" },
  { value: "50k-100k", label: "50,000 - 100,000 บาท" },
  { value: "100k-300k", label: "100,000 - 300,000 บาท" },
  { value: "above-300k", label: "มากกว่า 300,000 บาท" },
  { value: "monthly", label: "สนใจแบบรายเดือน" },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="px-4 py-20 md:px-6 lg:py-32">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-neutral-900">
            ขอบคุณที่ติดต่อเรา!
          </h1>
          <p className="mt-4 text-neutral-600">
            เราได้รับข้อมูลของคุณแล้ว ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
          </p>
          <Button
            variant="secondary"
            className="mt-8"
            onClick={() => setIsSubmitted(false)}
          >
            ส่งข้อมูลอีกครั้ง
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
            ติดต่อเรา
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            พร้อมรับฟังความต้องการของคุณ ปรึกษาฟรี ไม่มีค่าใช้จ่าย
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-neutral-900">
              ช่องทางติดต่อ
            </h2>
            <p className="mt-2 text-neutral-600">
              เลือกช่องทางที่สะดวกสำหรับคุณ
            </p>

            <div className="mt-8 space-y-6">
              <a
                href="mailto:contact@easybiz.co.th"
                className="flex items-start gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 group-hover:bg-yellow-400 group-hover:text-neutral-900 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">อีเมล</p>
                  <p className="text-neutral-600">contact@easybiz.co.th</p>
                </div>
              </a>

              <a href="tel:02-xxx-xxxx" className="flex items-start gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 group-hover:bg-yellow-400 group-hover:text-neutral-900 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">โทรศัพท์</p>
                  <p className="text-neutral-600">02-xxx-xxxx</p>
                  <p className="text-sm text-neutral-500">จ-ศ 9:00 - 18:00</p>
                </div>
              </a>

              <a
                href="https://line.me/easybiz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 group-hover:bg-yellow-400 group-hover:text-neutral-900 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Line</p>
                  <p className="text-neutral-600">@easybiz</p>
                  <p className="text-sm text-neutral-500">ตอบกลับเร็วที่สุด</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">ที่อยู่</p>
                  <p className="text-neutral-600">กรุงเทพมหานคร, ประเทศไทย</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="p-8">
              <h2 className="text-xl font-semibold text-neutral-900">
                ขอใบเสนอราคา
              </h2>
              <p className="mt-1 text-neutral-600">
                กรอกข้อมูลด้านล่าง เราจะติดต่อกลับโดยเร็ว
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    label="ชื่อ-นามสกุล"
                    id="name"
                    name="name"
                    placeholder="ชื่อของคุณ"
                    required
                  />
                  <Input
                    label="บริษัท/องค์กร (ถ้ามี)"
                    id="company"
                    name="company"
                    placeholder="ชื่อบริษัท"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    label="อีเมล"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                  />
                  <Input
                    label="เบอร์โทรศัพท์"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="08x-xxx-xxxx"
                    required
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                    บริการที่สนใจ
                  </label>
                  <select
                    name="serviceType"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                  >
                    <option value="">เลือกบริการ</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                    งบประมาณโดยประมาณ
                  </label>
                  <select
                    name="budget"
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                  >
                    <option value="">เลือกงบประมาณ</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <Textarea
                  label="รายละเอียดโปรเจค"
                  id="message"
                  name="message"
                  placeholder="อธิบายความต้องการของคุณ..."
                  rows={5}
                  required
                />

                <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    "กำลังส่ง..."
                  ) : (
                    <>
                      ส่งข้อมูล
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Sparkles,
  ArrowRight,
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

const benefits = [
  "ปรึกษาฟรี ไม่มีค่าใช้จ่าย",
  "ใบเสนอราคาภายใน 24 ชั่วโมง",
  "ทีมงานพร้อมดูแลตลอด",
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
      <section className="relative overflow-hidden bg-white px-4 py-20 md:px-6 lg:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-yellow-400/20 blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-yellow-300/15 blur-[80px]" />
        </div>
        
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 shadow-lg shadow-yellow-500/30">
            <CheckCircle className="h-10 w-10 text-neutral-900" />
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            ขอบคุณที่ติดต่อเรา!
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
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
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-yellow-400/20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-yellow-300/15 blur-[80px]" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-amber-400/10 blur-[60px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
            <Sparkles className="h-4 w-4" />
            พร้อมรับฟังคุณ
          </div>
          
          <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl">
            ติดต่อ
            <span className="relative inline-block ml-3">
              <span className="relative z-10 bg-linear-to-r from-yellow-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                เรา
              </span>
              <span className="absolute -bottom-2 left-0 h-3 w-full bg-yellow-400/30 -skew-x-6" />
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            พร้อมรับฟังความต้องการของคุณ ปรึกษาฟรี ไม่มีค่าใช้จ่าย
          </p>
          
          {/* Benefits */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-neutral-700">
                <CheckCircle className="h-5 w-5 text-yellow-500" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-1.5 text-sm font-medium text-yellow-700">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
              ช่องทางติดต่อ
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
              เลือกช่องทางที่
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"> สะดวก</span>
            </h2>
            <p className="mt-3 text-neutral-600">
              ทีมงานพร้อมให้บริการและตอบคำถามทุกช่องทาง
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:contact@easybiz.co.th"
                className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-neutral-900">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">อีเมล</p>
                  <p className="text-neutral-600">contact@easybiz.co.th</p>
                </div>
                <ArrowRight className="ml-auto h-5 w-5 text-neutral-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-500" />
              </a>

              <a 
                href="tel:02-xxx-xxxx" 
                className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-neutral-900">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">โทรศัพท์</p>
                  <p className="text-neutral-600">02-xxx-xxxx</p>
                  <p className="text-sm text-neutral-500">จ-ศ 9:00 - 18:00</p>
                </div>
                <ArrowRight className="ml-auto h-5 w-5 text-neutral-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-500" />
              </a>

              <a
                href="https://line.me/easybiz"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-neutral-900">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Line</p>
                  <p className="text-neutral-600">@easybiz</p>
                  <p className="text-sm text-neutral-500">ตอบกลับเร็วที่สุด</p>
                </div>
                <ArrowRight className="ml-auto h-5 w-5 text-neutral-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-500" />
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">ที่อยู่</p>
                  <p className="text-neutral-600">กรุงเทพมหานคร, ประเทศไทย</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-xl shadow-neutral-200/50">
              {/* Card decoration */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-400/10 blur-[60px]" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-amber-400/10 blur-[60px]" />
              
              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-1.5 text-sm font-medium text-yellow-700">
                  <Send className="h-4 w-4" />
                  ขอใบเสนอราคา
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">
                  กรอกข้อมูลด้านล่าง
                </h2>
                <p className="mt-2 text-neutral-600">
                  เราจะติดต่อกลับโดยเร็วที่สุด
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                      className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 transition-all duration-300 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
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
                      className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 transition-all duration-300 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
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

                  <Button type="submit" size="lg" className="w-full shadow-lg shadow-yellow-500/20" disabled={isLoading}>
                    {isLoading ? (
                      "กำลังส่ง..."
                    ) : (
                      <>
                        ส่งข้อมูล
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Phone, MessageCircle, Sparkles, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui";

const benefits = [
  "ปรึกษาฟรี ไม่มีค่าใช้จ่าย",
  "ใบเสนอราคาภายใน 24 ชั่วโมง",
  "ทีมงานพร้อมดูแลตลอด",
];

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 md:px-6 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-yellow-50 via-white to-amber-50" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
          {/* Inner decorations */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-500/20 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-amber-500/20 blur-[80px]" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-400">
                <Sparkles className="h-4 w-4" />
                พร้อมเริ่มต้น
              </div>

              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                พร้อมเริ่มต้น
                <br />
                <span className="bg-linear-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  โปรเจกต์ของคุณ?
                </span>
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-neutral-400">
                ติดต่อเราวันนี้ รับใบเสนอราคาฟรี ไม่มีค่าใช้จ่าย
                ทีมงานพร้อมให้คำปรึกษาและออกแบบระบบที่เหมาะกับธุรกิจของคุณ
              </p>

              {/* Benefits */}
              <div className="mt-6 space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400">
                      <CheckCircle className="h-3 w-3 text-neutral-900" />
                    </div>
                    <span className="text-neutral-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - CTA Card */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-800/50 p-6 backdrop-blur-sm md:p-8">
              <h3 className="mb-6 text-xl font-semibold text-white">ติดต่อเรา</h3>

              <div className="space-y-4">
                <Button size="lg" asChild className="w-full shadow-lg shadow-yellow-500/20">
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    ขอใบเสนอราคาฟรี
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full border-neutral-700 bg-neutral-800 text-white hover:border-yellow-500/30 hover:bg-neutral-700"
                  asChild
                >
                  <a href="tel:02-xxx-xxxx" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    โทรหาเรา
                  </a>
                </Button>
              </div>

              <div className="mt-6 flex flex-col items-center gap-4 border-t border-neutral-700 pt-6 sm:flex-row sm:justify-between">
                <a
                  href="https://line.me/easybiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-yellow-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  Line: @easybiz
                </a>
                <span className="text-sm text-neutral-500">ตอบกลับภายใน 24 ชม.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

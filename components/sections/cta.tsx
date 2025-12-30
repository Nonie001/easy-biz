import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui";

export function CTA() {
  return (
    <section className="bg-neutral-900 px-4 py-20 md:px-6 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          พร้อมเริ่มต้นโปรเจกต์ของคุณ?
        </h2>
        <p className="mt-4 text-lg text-neutral-400">
          ติดต่อเราวันนี้ รับใบเสนอราคาฟรี ไม่มีค่าใช้จ่าย
          <br />
          ทีมงานพร้อมให้คำปรึกษาและออกแบบระบบที่เหมาะกับธุรกิจของคุณ
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/contact">
              ขอใบเสนอราคาฟรี
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-neutral-700 text-white hover:bg-neutral-800 hover:text-white hover:border-yellow-400"
            asChild
          >
            <a href="tel:02-xxx-xxxx">
              <Phone className="h-5 w-5" />
              โทรหาเรา
            </a>
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-neutral-500">
          <a
            href="https://line.me/easybiz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400"
          >
            <MessageCircle className="h-4 w-4" />
            Line: @easybiz
          </a>
          <span>•</span>
          <span>ตอบกลับภายใน 24 ชม.</span>
        </div>
      </div>
    </section>
  );
}

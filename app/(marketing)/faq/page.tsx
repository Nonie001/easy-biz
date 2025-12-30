import { generateSEO, generateStructuredData } from "@/lib/seo";
import Link from "next/link";
import { Button, Card } from "@/components/ui";

export const metadata = generateSEO({
  title: "คำถามที่พบบ่อย",
  description: "คำตอบสำหรับคำถามที่ลูกค้าสอบถามบ่อยเกี่ยวกับการพัฒนาระบบและบริการของเรา",
  path: "/faq",
  tags: ["FAQ", "คำถาม", "บริการ"],
});

const faqs = [
  {
    category: "ทั่วไป",
    questions: [
      {
        q: "Easy Biz คืออะไร?",
        a: "Easy Biz คือบริษัทพัฒนาระบบซอฟต์แวร์ที่เชี่ยวชาญในการสร้างระบบเว็บไซต์ ระบบขายหน้าร้าน (POS) ระบบจัดการสต็อก และระบบองค์กรต่างๆ ด้วยราคาที่เป็นมิตรกับ SME",
      },
      {
        q: "ใช้เวลานานแค่ไหนในการพัฒนา?",
        a: "ระยะเวลาขึ้นอยู่กับความซับซ้อนของระบบ เว็บไซต์ทั่วไป 7-14 วัน, ระบบ POS 14-30 วัน, ระบบองค์กร 30-60 วัน เราจะแจ้งไทม์ไลน์ที่ชัดเจนก่อนเริ่มงาน",
      },
      {
        q: "มีการรับประกันหรือไม่?",
        a: "เรารับประกันระบบ 1 ปี หลังส่งมอบ รวมถึง Bug Fix, Technical Support และการอัพเดต Security Patch ฟรี",
      },
      {
        q: "สามารถขอแก้ไขได้กี่ครั้ง?",
        a: "ระหว่างพัฒนา แก้ไขได้ไม่จำกัด แต่ต้องอยู่ในขอบเขตที่ตกลงกัน หากเพิ่มฟีเจอร์ใหม่อาจมีค่าใช้จ่ายเพิ่ม",
      },
    ],
  },
  {
    category: "เว็บไซต์",
    questions: [
      {
        q: "เว็บไซต์ที่ทำให้มี SEO ดีไหม?",
        a: "ใช่ เราใส่ใจเรื่อง SEO ตั้งแต่โครงสร้าง HTML, Speed Optimization, Meta Tags, และ Technical SEO อื่นๆ เพื่อให้ติดอันดับค้นหาได้ดี",
      },
      {
        q: "สามารถใช้งานบนมือถือได้ไหม?",
        a: "ทุกเว็บไซต์ที่เราทำรองรับ Mobile Responsive 100% ใช้งานได้ลื่นทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์",
      },
      {
        q: "มีระบบจัดการเนื้อหา (CMS) ไหม?",
        a: "มี เราสร้าง Admin Panel ให้คุณแก้ไขเนื้อหา อัพโหลดรูป เพิ่มสินค้า โดยไม่ต้องมีความรู้ทางเทคนิค",
      },
      {
        q: "Domain และ Hosting จัดให้ไหม?",
        a: "เราช่วยจัดหา Domain และ Hosting คุณภาพดี พร้อมติดตั้งให้เรียบร้อย หรือคุณจะใช้ของตัวเองก็ได้",
      },
    ],
  },
  {
    category: "ระบบ POS",
    questions: [
      {
        q: "ระบบ POS ใช้งานได้ offline ไหม?",
        a: "ได้ ระบบสามารถทำงาน offline และ sync ข้อมูลเมื่อกลับมา online อีกครั้ง",
      },
      {
        q: "รองรับเครื่องพิมพ์ใบเสร็จไหม?",
        a: "รองรับ เครื่องพิมพ์ใบเสร็จ เครื่องเปิดลิ้นชัก บาร์โค้ดสแกนเนอร์ และอุปกรณ์ POS อื่นๆ",
      },
      {
        q: "มีระบบจัดการสต็อกด้วยไหม?",
        a: "มี รวมระบบจัดการสินค้า สต็อก การเติมสินค้า แจ้งเตือนสินค้าใกล้หมด และรายงานการขาย",
      },
      {
        q: "สามารถใช้หลายหน้าร้านได้ไหม?",
        a: "ได้ ระบบรองรับ Multi-Branch พร้อมรายงานแยกตามสาขา และรวมยอด",
      },
    ],
  },
  {
    category: "ระบบองค์กร",
    questions: [
      {
        q: "ระบบองค์กรรวมอะไรบ้าง?",
        a: "รวม ระบบ HR, การลา, ลงเวลา, Payroll, Document Management, Workflow, และ Dashboard รายงาน",
      },
      {
        q: "รองรับผู้ใช้กี่คน?",
        a: "รองรับได้ตั้งแต่ 10-1000+ คน ขึ้นอยู่กับแพ็คเกจที่เลือก และสามารถ Scale Up ได้ตามการเติบโตของบริษัท",
      },
      {
        q: "มีระบบอนุมัติไหม?",
        a: "มี ระบบ Workflow และ Approval ที่ปรับแต่งได้ตามโครงสร้างองค์กร พร้อมแจ้งเตือนอัตโนมัติ",
      },
      {
        q: "ข้อมูลปลอดภัยไหม?",
        a: "ปลอดภัย เรามี Security ระดับสูง เข้ารหัสข้อมูล Backup อัตโนมัติ และ Access Control แบบ Role-based",
      },
    ],
  },
  {
    category: "ราคาและการชำระเงิน",
    questions: [
      {
        q: "วิธีการชำระเงินมีอะไรบ้าง?",
        a: "รับชำระผ่าน โอนธนาคาร, QR Code, บัตรเครดิต และแบ่งชำระได้ตามงวดงาน",
      },
      {
        q: "มีค่าบำรุงรักษารายเดือนไหม?",
        a: "มี สำหรับ Support และ Maintenance เริ่มต้น 500-2,000 บาท/เดือน ขึ้นอยู่กับระบบที่ใช้",
      },
      {
        q: "สามารถยกเลิกได้ไหม?",
        a: "ได้ หากยกเลิกก่อนเริ่มงาน คืน 100% หากยกเลิกระหว่างงาน คิดตามเปอร์เซนต์งานที่ทำแล้ว",
      },
      {
        q: "มีส่วนลดไหม?",
        a: "มี ส่วนลดสำหรับลูกค้าเก่า 10%, แนะนำเพื่อน 5%, และโครงการพิเศษตามโอกาส",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border-b border-neutral-200">
      <summary className="flex w-full items-center justify-between py-4 text-left cursor-pointer hover:text-neutral-700">
        <span className="font-medium text-neutral-900">{question}</span>
        <span className="ml-6 flex-shrink-0 text-neutral-600">
          <svg className="h-5 w-5 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </summary>
      <div className="pb-4 text-neutral-600">
        <p>{answer}</p>
      </div>
    </details>
  );
}

export default function FAQPage() {
  // Generate FAQ structured data
  const faqStructuredData = generateStructuredData({
    type: "faq",
    name: "คำถามที่พบบ่อย - Easy Biz",
    description: "รวมคำตอบสำหรับคำถามที่ลูกค้าสอบถามบ่อย",
    url: "https://easybiz.vercel.app/faq",
    faq: faqs.flatMap((category) => 
      category.questions.map((q) => ({
        question: q.q,
        answer: q.a,
      }))
    ),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <div className="px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
            คำถามที่พบบ่อย
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            รวมคำตอบสำหรับคำถามที่ลูกค้าสอบถามบ่อย หากไม่พบคำตอบที่ต้องการ
            สามารถติดต่อเราได้เลย
          </p>
        </div>

        {/* FAQ Content */}
        <div className="mt-16 space-y-12">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="mb-6 text-2xl font-bold text-neutral-900">
                {category.category}
              </h2>
              <Card>
                <div className="divide-y divide-neutral-200">
                  {category.questions.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.q}
                      answer={faq.a}
                    />
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 rounded-2xl bg-yellow-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900">
            ยังหาคำตอบไม่พบ?
          </h2>
          <p className="mt-4 text-neutral-600">
            ติดต่อทีมงานของเรา พร้อมให้คำปรึกษาและตอบคำถามทุกข้อสงสัย
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/contact">ติดต่อเรา</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">ดูบริการทั้งหมด</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
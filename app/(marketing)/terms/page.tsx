import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Shield, Users, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้งาน | Easy Biz",
  description:
    "ข้อกำหนดและเงื่อนไขการใช้บริการของ Easy Biz ระบบพัฒนาซอฟต์แวร์",
};

export default function TermsPage() {
  return (
    <div className="px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            กลับหน้าหลัก
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
            ข้อกำหนดการใช้งาน
          </h1>
          <p className="mt-4 text-neutral-600">
            อัพเดตล่าสุด: 30 ธันวาคม 2567
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 prose prose-neutral max-w-none">
          {/* Section 1 */}
          <div className="mb-12">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-lg bg-yellow-100 p-2">
                <FileText className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                1. การยอมรับข้อกำหนด
              </h2>
            </div>
            <div className="text-neutral-600 space-y-4">
              <p>
                การใช้บริการของ Easy Biz หมายถึงคุณได้อ่าน เข้าใจ
                และยอมรับข้อกำหนดการใช้งานทั้งหมดนี้
              </p>
              <p>
                หากคุณไม่ยอมรับข้อกำหนดใดข้อกำหนดหนึ่ง
                กรุณาอย่าใช้บริการของเรา
              </p>
              <p>
                เราขอสงวนสิทธิ์ในการเปลี่ยนแปลงข้อกำหนดเหล่านี้ได้ตลอดเวลา
                โดยจะแจ้งให้ทราบล่วงหน้าผ่านเว็บไซต์หรืออีเมล
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-lg bg-blue-100 p-2">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                2. ขอบเขตการให้บริการ
              </h2>
            </div>
            <div className="text-neutral-600 space-y-4">
              <p>Easy Biz ให้บริการพัฒนาระบบซอฟต์แวร์ ได้แก่:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>การพัฒนาเว็บไซต์และเว็บแอปพลิเคชัน</li>
                <li>ระบบขายหน้าร้าน (Point of Sale)</li>
                <li>ระบบจัดการสต็อกและคลังสินค้า</li>
                <li>ระบบจัดการองค์กรและ HR</li>
                <li>การปรึกษาและซัพพอร์ตทางเทคนิค</li>
              </ul>
              <p>
                ขอบเขตงานและราคาจะระบุชัดเจนในใบเสนอราคาและสัญญาแต่ละโปรเจค
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-lg bg-green-100 p-2">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                3. ข้อผูกมัดของลูกค้า
              </h2>
            </div>
            <div className="text-neutral-600 space-y-4">
              <p><strong>3.1 การให้ข้อมูล</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ลูกค้าต้องให้ข้อมูลที่ถูกต้องและครบถ้วน</li>
                <li>แจ้งการเปลี่ยนแปลงข้อมูลที่สำคัญทันที</li>
                <li>ร่วมมือในการทดสอบระบบและให้ความเห็น</li>
              </ul>

              <p><strong>3.2 การชำระเงิน</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ชำระตามกำหนดในสัญญา</li>
                <li>ค่าปรับ 1.25% ต่อเดือน สำหรับการชำระล่าช้า</li>
                <li>หากค้างชำระเกิน 30 วัน เราสงวนสิทธิ์หยุดบริการ</li>
              </ul>

              <p><strong>3.3 การใช้งานระบบ</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ใช้งานตามวัตถุประสงค์ที่กำหนดเท่านั้น</li>
                <li>ไม่แจกจ่าย หรือคัดลอกระบบให้ผู้อื่น</li>
                <li>รักษาความปลอดภัยของ Username/Password</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-lg bg-purple-100 p-2">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                4. สิทธิ์และความเป็นเจ้าของ
              </h2>
            </div>
            <div className="text-neutral-600 space-y-4">
              <p><strong>4.1 สิทธิ์ของลูกค้า</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>เป็นเจ้าของข้อมูลที่นำเข้าระบบ</li>
                <li>ได้รับ Source Code หลังชำระครบ (ตามแพ็คเกจ)</li>
                <li>ใช้งานระบบตามลิขสิทธิ์ที่ได้รับ</li>
              </ul>

              <p><strong>4.2 สิทธิ์ของ Easy Biz</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>เป็นเจ้าของ Core Framework และเทคโนโลยี</li>
                <li>ใช้ผลงานเป็น Portfolio (โดยไม่เปิดเผยข้อมูลลับ)</li>
                <li>อ้างอิงประสบการณ์ในการขายงานใหม่</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-lg bg-orange-100 p-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                5. การรับประกันและข้อจำกัด
              </h2>
            </div>
            <div className="text-neutral-600 space-y-4">
              <p><strong>5.1 การรับประกัน</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>รับประกันการทำงานของระบบ 1 ปี</li>
                <li>แก้ไข Bug และปัญหาทางเทคนิคฟรี</li>
                <li>Support ทางโทรศัพท์และอีเมล</li>
              </ul>

              <p><strong>5.2 ข้อยกเว้น</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ปัญหาจากการใช้งานผิดวิธี</li>
                <li>ความเสียหายจากไวรัสหรือการแฮก</li>
                <li>การแก้ไขโดยบุคคลที่สาม</li>
                <li>ปัญหาจาก Hardware หรือ Network</li>
              </ul>

              <p><strong>5.3 ข้อจำกัดความรับผิดชอบ</strong></p>
              <p>
                ความรับผิดชอบสูงสุดของเราคือค่าบริการที่ได้รับ
                เราไม่รับผิดชอบต่อความเสียหายทางอ้อม การสูญเสียผลกำไร
                หรือข้อมูลใดๆ
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <div className="mb-4 flex items-center">
              <div className="mr-3 rounded-lg bg-red-100 p-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                6. การยกเลิกสัญญา
              </h2>
            </div>
            <div className="text-neutral-600 space-y-4">
              <p><strong>6.1 การยกเลิกโดยลูกค้า</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ก่อนเริ่มงาน: คืนเงิน 100%</li>
                <li>ระหว่างพัฒนา: คิดค่าบริการตามเปอร์เซนต์งานที่ทำแล้ว</li>
                <li>หลังส่งมอบ: ไม่สามารถยกเลิกได้</li>
              </ul>

              <p><strong>6.2 การยกเลิกโดย Easy Biz</strong></p>
              <p>
                เราสามารถยกเลิกสัญญาได้หากลูกค้าผิดสัญญา
                เช่น ค้างชำระเงินเกิน 30 วัน หรือไม่ให้ความร่วมมือในการพัฒนา
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              7. กฎหมายที่ใช้บังคับ
            </h2>
            <div className="text-neutral-600 space-y-4">
              <p>
                ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย
                หากมีข้อพิพาทจะใช้ศาลไทยเป็นที่พิจารณาคดี
              </p>
              <p>
                การตีความข้อกำหนดจะอ้างอิงตามหลักกฎหมายและหลักสมเหตุสมผล
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 rounded-2xl bg-neutral-50 p-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              ติดต่อสอบถาม
            </h3>
            <p className="text-neutral-600 mb-6">
              หากมีข้อสงสัยเกี่ยวกับข้อกำหนดการใช้งาน
              สามารถติดต่อเราได้ตลอดเวลา
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href="/contact">ติดต่อเรา</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/privacy">นโยบายความเป็นส่วนตัว</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
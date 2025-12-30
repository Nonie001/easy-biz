import { generateSEO, generateStructuredData } from "@/lib/seo";

export const metadata = generateSEO({
  title: "ระบบพัฒนาซอฟต์แวร์ครบวงจร",
  description: "พัฒนาระบบเว็บไซต์ POS สต็อก องค์กร เริ่มต้นเพียง 5,000 บาท รับประกัน 1 ปี Support ตลอด สำหรับธุรกิจ SME",
  path: "/",
  type: "website",
  tags: ["เว็บไซต์", "POS", "ระบบสต็อก", "ระบบองค์กร", "SME", "ราคาถูก"],
});

const organizationSchema = generateStructuredData({
  type: "organization",
  name: "Easy Biz - ระบบพร้อมใช้",
  description: "บริษัทพัฒนาระบบซอฟต์แวร์สำหรับธุรกิจ SME",
  url: "https://easybiz.vercel.app",
  image: "https://easybiz.vercel.app/logo.png",
  organization: {
    name: "Easy Biz",
    url: "https://easybiz.vercel.app",
    logo: "https://easybiz.vercel.app/logo.png",
    contactPoint: {
      telephone: "+66-2-xxx-xxxx",
      contactType: "Customer Service",
    },
  },
});

const websiteSchema = generateStructuredData({
  type: "website",
  name: "Easy Biz - ระบบพัฒนาซอฟต์แวร์",
  description: "พัฒนาระบบเว็บไซต์ POS สต็อก องค์กร เริ่มต้นเพียง 5,000 บาท",
  url: "https://easybiz.vercel.app",
  breadcrumbs: [
    { name: "หน้าหลัก", url: "https://easybiz.vercel.app" },
    { name: "บริการ", url: "https://easybiz.vercel.app/services" },
    { name: "ราคา", url: "https://easybiz.vercel.app/pricing" },
    { name: "ติดต่อ", url: "https://easybiz.vercel.app/contact" },
  ],
});

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
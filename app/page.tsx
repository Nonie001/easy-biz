import { generateSEO } from "@/lib/seo";
import StructuredData from "@/components/structured-data";
import {
  Header,
  Footer,
  Hero,
  Services,
  Features,
  Pricing,
  Testimonials,
  CTA,
} from "@/components/sections";

export const metadata = generateSEO({
  title: "ระบบพัฒนาซอฟต์แวร์ครบวงจร",
  description: "พัฒนาระบบเว็บไซต์ POS สต็อก องค์กร เริ่มต้นเพียง 5,000 บาท รับประกัน 1 ปี Support ตลอด สำหรับธุรกิจ SME",
  path: "/",
  type: "website",
  tags: ["เว็บไซต์", "POS", "ระบบสต็อก", "ระบบองค์กร", "SME", "ราคาถูก"],
});

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

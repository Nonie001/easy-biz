import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ระบบพร้อมใช้ Easy Biz",
  description: "รับทำระบบและดูแลครบวงจร: เว็บไซต์, POS, คลังสินค้า, หน่วยงาน, โรงเรียน — ทั้งแบบขายขาดและดูแลรายเดือน",
  keywords: ["ทำเว็บ", "ระบบ POS", "ระบบคลังสินค้า", "ระบบโรงเรียน", "รับทำระบบ"],
  authors: [{ name: "Easy Biz" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${prompt.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

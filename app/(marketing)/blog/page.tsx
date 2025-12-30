import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "บทความ | Easy Biz",
  description: "บทความความรู้เกี่ยวกับการทำระบบ เทคโนโลยี และการพัฒนาธุรกิจ",
};

const blogPosts = [
  {
    slug: "why-pos-system-important",
    title: "ทำไมร้านค้าปลีกถึงต้องมีระบบ POS?",
    excerpt:
      "ระบบ POS ไม่ใช่แค่เครื่องคิดเงิน แต่เป็นศูนย์กลางการจัดการร้านค้าทั้งหมด ตั้งแต่ขายสินค้า จัดการสต็อก ไปจนถึงวิเคราะห์ยอดขาย",
    category: "POS",
    readTime: 5,
    publishedAt: "2024-12-25",
  },
  {
    slug: "website-vs-social-media",
    title: "เว็บไซต์ vs โซเชียลมีเดีย: อะไรสำคัญกว่าสำหรับธุรกิจ",
    excerpt:
      "หลายคนสงสัยว่าในยุคโซเชียลมีเดียครองเมือง เว็บไซต์ยังจำเป็นอยู่ไหม? มาดูข้อดีข้อเสียของแต่ละช่องทาง",
    category: "Website",
    readTime: 7,
    publishedAt: "2024-12-20",
  },
  {
    slug: "inventory-management-tips",
    title: "5 เทคนิคจัดการคลังสินค้าให้มีประสิทธิภาพ",
    excerpt:
      "การจัดการคลังสินค้าที่ดีช่วยลดต้นทุน ลดของเสีย และเพิ่มความพึงพอใจของลูกค้า มาดูเทคนิคที่ใช้ได้จริง",
    category: "Inventory",
    readTime: 6,
    publishedAt: "2024-12-15",
  },
  {
    slug: "digital-transformation-for-schools",
    title: "Digital Transformation สำหรับโรงเรียน: เริ่มต้นอย่างไร",
    excerpt:
      "การนำเทคโนโลยีมาใช้ในโรงเรียนไม่ใช่เรื่องยาก แต่ต้องวางแผนให้ดี มาดูขั้นตอนการเริ่มต้นที่เหมาะสม",
    category: "School",
    readTime: 8,
    publishedAt: "2024-12-10",
  },
  {
    slug: "outsource-vs-inhouse-development",
    title: "จ้างทำระบบ vs พัฒนาเอง: อะไรคุ้มกว่า",
    excerpt:
      "เมื่อธุรกิจต้องการระบบไอที มักสงสัยว่าควรจ้างทำหรือสร้างทีม in-house มาวิเคราะห์ข้อดีข้อเสียกัน",
    category: "Business",
    readTime: 10,
    publishedAt: "2024-12-05",
  },
];

export default function BlogPage() {
  return (
    <div className="px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
            บทความ
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            ความรู้และเคล็ดลับเกี่ยวกับการทำระบบ เทคโนโลยี และการพัฒนาธุรกิจ
          </p>
        </div>

        {/* Featured Post */}
        <div className="mt-12">
          <Card className="overflow-hidden lg:flex">
            <div className="aspect-video bg-gradient-to-br from-yellow-100 to-yellow-200 lg:aspect-auto lg:w-2/5 flex items-center justify-center">
              <span className="text-6xl font-bold text-yellow-400/50">BLOG</span>
            </div>
            <div className="p-6 lg:w-3/5 lg:p-8">
              <Badge variant="warning">แนะนำ</Badge>
              <h2 className="mt-3 text-2xl font-bold text-neutral-900">
                {blogPosts[0].title}
              </h2>
              <p className="mt-3 text-neutral-600">{blogPosts[0].excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-neutral-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(blogPosts[0].publishedAt).toLocaleDateString("th-TH", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPosts[0].readTime} นาที
                </span>
              </div>
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow-600 hover:text-yellow-700"
              >
                อ่านต่อ
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Card>
        </div>

        {/* Posts Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.slug} className="group">
              <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 -mx-6 -mt-6 mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-neutral-300">
                  {post.category}
                </span>
              </div>

              <Badge>{post.category}</Badge>

              <h3 className="mt-3 text-lg font-semibold text-neutral-900 group-hover:text-yellow-600 line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="mt-4 flex items-center justify-between text-sm text-neutral-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString("th-TH", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime} นาที
                </span>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-yellow-600 hover:text-yellow-700"
              >
                อ่านต่อ
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

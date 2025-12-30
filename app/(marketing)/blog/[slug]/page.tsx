import { generateSEO, generateStructuredData } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, MessageCircle } from "lucide-react";
import { Button, Badge, Card } from "@/components/ui";

// Mock data - ในอนาคตจะดึงจาก Database
const blogPosts = [
  {
    slug: "web-development-trends-2024",
    title: "เทรนด์การพัฒนาเว็บไซต์ปี 2024",
    excerpt: "รวมเทรนด์ใหม่ๆ ในการพัฒนาเว็บไซต์ที่ธุรกิจควรรู้",
    content: `
      <p>การพัฒนาเว็บไซต์ในปี 2024 มีความเปลี่ยนแปลงอย่างมาก ด้วยเทคโนโลยีใหม่ๆ ที่เข้ามา และพฤติกรรมผู้ใช้ที่เปลี่ยนไป</p>
      
      <h2>1. AI และ Machine Learning</h2>
      <p>การใช้ AI ในเว็บไซต์ไม่ใช่เรื่องไกลตัวอีกต่อไป Chatbot ที่ฉลาดขึ้น, การแนะนำสินค้าแบบ Personalized, และการวิเคราะห์พฤติกรรมผู้ใช้ล้วนเป็นที่นิยม</p>
      
      <h2>2. Progressive Web Apps (PWA)</h2>
      <p>PWA ช่วยให้เว็บไซต์ทำงานเหมือน Mobile App โหลดเร็ว ใช้งานได้แม้ Offline และสามารถติดตั้งบน Home Screen ได้</p>
      
      <h2>3. Voice User Interface</h2>
      <p>การค้นหาด้วยเสียงกำลังได้รับความนิยม เว็บไซต์ควรเตรียมรองรับ Voice Search เพื่อเข้าถึงผู้ใช้กลุ่มใหม่</p>
      
      <h2>4. Sustainable Web Design</h2>
      <p>การออกแบบเว็บไซต์ที่คำนึงถึงสิ่งแวดล้อม โดยลดการใช้พลังงาน ใช้ CDN, ปรับปรุง Performance และเลือกใช้ Green Hosting</p>
      
      <h2>5. Micro-interactions</h2>
      <p>การตอบสนองขนาดเล็กที่เพิ่มประสบการณ์ผู้ใช้ เช่น Animation เมื่อ Hover, Loading States, หรือ Feedback เมื่อทำ Action</p>
    `,
    author: "ทีมงาน Easy Biz",
    publishDate: "2024-12-30",
    category: "เทคโนโลยี",
    tags: ["Web Development", "Trends", "2024"],
    image: "/blog/web-trends-2024.jpg",
    readingTime: "5 นาที",
  },
  {
    slug: "pos-system-guide",
    title: "คู่มือเลือกระบบ POS ให้เหมาะกับธุรกิจ",
    excerpt: "วิธีเลือกระบบ POS ที่ตอบโจทย์ธุรกิจและงบประมาณของคุณ",
    content: `
      <p>การเลือกระบบ POS (Point of Sale) ที่เหมาะสมเป็นสิ่งสำคัญสำหรับธุรกิจค้าปลีก ร้านอาหาร และธุรกิจบริการต่างๆ</p>
      
      <h2>ประเภทของระบบ POS</h2>
      <h3>1. Traditional POS</h3>
      <p>ระบบแบบดั้งเดิมที่ติดตั้งบนคอมพิวเตอร์ มักใช้ในร้านค้าขนาดใหญ่</p>
      
      <h3>2. Cloud-based POS</h3>
      <p>ระบบบนคลาวด์ที่เข้าถึงได้จากทุกที่ เหมาะกับธุรกิจที่มีหลายสาขา</p>
      
      <h3>3. Mobile POS</h3>
      <p>ระบบบนมือถือหรือแท็บเล็ต เหมาะสำหรับธุรกิจเล็ก หรือขายนอกสถานที่</p>
      
      <h2>ฟีเจอร์ที่ควรมี</h2>
      <ul>
        <li>การจัดการสินค้าและสต็อก</li>
        <li>ระบบรายงานและ Analytics</li>
        <li>การรองรับการชำระเงินหลายช่องทาง</li>
        <li>การจัดการลูกค้าและโปรโมชั่น</li>
        <li>การซิงค์ข้อมูลแบบ Real-time</li>
      </ul>
      
      <h2>การเลือกตามประเภทธุรกิจ</h2>
      <h3>ร้านค้าปลีก</h3>
      <p>ต้องการระบบจัดการสต็อก, Barcode Scanning, และ Loyalty Program</p>
      
      <h3>ร้านอาหาร</h3>
      <p>ต้องการ Table Management, Kitchen Display, และ Order Tracking</p>
      
      <h3>ธุรกิจบริการ</h3>
      <p>ต้องการ Appointment Booking, Service Tracking, และ Customer Management</p>
    `,
    author: "คุณเอ - CEO",
    publishDate: "2024-12-28",
    category: "ระบบ POS",
    tags: ["POS", "Business", "Guide"],
    image: "/blog/pos-guide.jpg",
    readingTime: "7 นาที",
  },
];

// Related posts
const relatedPosts = [
  {
    slug: "inventory-management-tips",
    title: "5 เทคนิคจัดการสต็อกให้มีประสิทธิภาพ",
    excerpt: "วิธีจัดการสต็อกสินค้าที่จะช่วยลดต้นทุนและเพิ่มกำไร",
    category: "การจัดการ",
    publishDate: "2024-12-25",
    readingTime: "4 นาที",
  },
  {
    slug: "digital-transformation-sme",
    title: "Digital Transformation สำหรับ SME",
    excerpt: "วิธีการเปลี่ยนแปลงธุรกิจสู่ยุคดิจิทัลอย่างมีประสิทธิภาพ",
    category: "เทคโนโลยี",
    publishDate: "2024-12-20",
    readingTime: "6 นาที",
  },
  {
    slug: "website-seo-basics",
    title: "พื้นฐาน SEO ที่เจ้าของธุรกิจควรรู้",
    excerpt: "เทคนิค SEO เบื้องต้นที่จะช่วยให้เว็บไซต์ติดหน้าแรก Google",
    category: "การตลาด",
    publishDate: "2024-12-15",
    readingTime: "8 นาที",
  },
];

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return generateSEO({ title: "ไม่พบบทความ" });
  }

  return generateSEO({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishDate,
    author: post.author,
    tags: post.tags,
    image: post.image,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  // Generate article structured data
  const articleStructuredData = generateStructuredData({
    type: "article",
    name: post.title,
    description: post.excerpt,
    url: `https://easybiz.vercel.app/blog/${post.slug}`,
    image: post.image,
    author: post.author,
    publishDate: post.publishDate,
    modifiedDate: post.publishDate,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <div className="px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            กลับไปบล็อก
          </Link>
        </div>

        {/* Article Header */}
        <article className="prose prose-neutral prose-lg max-w-none">
          <header className="mb-12">
            <div className="mb-4">
              <Badge variant="info">{post.category}</Badge>
            </div>
            
            <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
              {post.title}
            </h1>
            
            <p className="mt-6 text-xl text-neutral-600">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {new Date(post.publishDate).toLocaleDateString('th-TH', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center">
                <Tag className="mr-2 h-4 w-4" />
                อ่าน {post.readingTime}
              </div>
            </div>

            {/* Featured Image */}
            <div className="mt-8 rounded-2xl bg-neutral-100 overflow-hidden aspect-video">
              <div className="flex h-full items-center justify-center">
                <span className="text-4xl text-neutral-400">📖</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-neutral prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-sm font-medium text-neutral-600">แท็ก:</span>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Share2 className="mr-2 h-5 w-5 text-neutral-600" />
                <span className="text-sm font-medium text-neutral-600">แชร์บทความ:</span>
              </div>
              <div className="flex items-center space-x-3">
                <Button size="sm" variant="outline" className="p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            บทความที่เกี่ยวข้อง
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.slug} className="group">
                <Link href={`/blog/${relatedPost.slug}`}>
                  <div className="aspect-video rounded-lg bg-neutral-100 mb-4 flex items-center justify-center">
                    <span className="text-2xl text-neutral-400">📄</span>
                  </div>
                  <div className="mb-2">
                    <Badge variant="info">{relatedPost.category}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-yellow-600 mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-neutral-500">
                    <Calendar className="mr-1 h-3 w-3" />
                    {new Date(relatedPost.publishDate).toLocaleDateString('th-TH')}
                    <span className="mx-2">•</span>
                    {relatedPost.readingTime}
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 rounded-2xl bg-yellow-50 p-8 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            อยากได้บทความใหม่ๆ แบบนี้?
          </h3>
          <p className="text-neutral-600 mb-6">
            สมัครรับข่าวสารและเทคนิคใหม่ๆ จากทีม Easy Biz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="อีเมลของคุณ"
              className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <Button>สมัครรับข่าวสาร</Button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
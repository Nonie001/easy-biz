# ระบบพร้อมใช้ Easy Biz

เว็บไซต์รับทำระบบและดูแลครบวงจร: เว็บไซต์, POS, คลังสินค้า, หน่วยงาน, โรงเรียน — ทั้งแบบขายขาดและดูแลรายเดือน

## 🚀 เทคโนโลยีที่ใช้

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL + Prisma ORM
- **Authentication:** NextAuth.js
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Testing:** Playwright (E2E)

## 📁 โครงสร้างโปรเจค

```
easy-biz/
├── app/
│   ├── (marketing)/     # หน้าเว็บสาธารณะ
│   │   ├── services/    # บริการ
│   │   ├── pricing/     # ราคา
│   │   ├── portfolio/   # ผลงาน
│   │   ├── blog/        # บทความ
│   │   └── contact/     # ติดต่อ
│   ├── (dashboard)/     # แดชบอร์ดแอดมิน
│   │   ├── dashboard/
│   │   ├── leads/
│   │   ├── orders/
│   │   └── cms/
│   └── api/             # API Routes
├── components/
│   ├── ui/              # UI Components (Button, Input, Card)
│   └── sections/        # Page Sections (Hero, Features)
├── features/            # Business Logic
│   ├── lead/
│   └── pricing/
├── services/            # External Services
│   ├── email.ts
│   ├── crm.ts
│   └── payment.ts
├── lib/                 # Utilities
├── prisma/              # Database Schema
├── types/               # TypeScript Types
└── e2e/                 # E2E Tests
```

## 🛠️ การติดตั้ง

```bash
# Clone repository
git clone <repo-url>
cd easy-biz

# ติดตั้ง dependencies
npm install

# ตั้งค่า environment variables
cp .env.example .env.local
# แก้ไขค่าใน .env.local

# ตั้งค่า database
npx prisma generate
npx prisma db push

# รัน development server
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) เพื่อดูผลลัพธ์

## 📝 Environment Variables

ดูตัวอย่างใน `.env.example`

## 🧪 การทดสอบ

```bash
# E2E tests
npx playwright test

# E2E tests with UI
npx playwright test --ui
```

## 🚀 การ Deploy

```bash
# Build
npm run build

# Start production server
npm start
```

แนะนำ Deploy บน [Vercel](https://vercel.com) สำหรับ Next.js

## 📞 ติดต่อ

- Email: contact@easybiz.co.th
- Line: @easybiz

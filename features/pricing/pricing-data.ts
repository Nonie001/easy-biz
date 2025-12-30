// Pricing plans configuration

export interface PricingItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  priceType: "one-time" | "monthly" | "yearly";
  features: string[];
  popular?: boolean;
}

// Base pricing for services (starting prices)
export const servicePricing: Record<string, PricingItem[]> = {
  website: [
    {
      id: "web-landing",
      name: "Landing Page",
      description: "หน้าเดียว เหมาะสำหรับแคมเปญ/โปรโมชัน",
      basePrice: 5000,
      priceType: "one-time",
      features: ["Responsive Design", "SEO พื้นฐาน", "ฟอร์มติดต่อ", "SSL Certificate"],
    },
    {
      id: "web-corporate",
      name: "เว็บบริษัท",
      description: "เว็บไซต์บริษัท 5-10 หน้า",
      basePrice: 12000,
      priceType: "one-time",
      features: [
        "5-10 หน้า",
        "CMS จัดการเนื้อหา",
        "Blog/ข่าวสาร",
        "SEO ขั้นสูง",
        "Analytics",
      ],
      popular: true,
    },
    {
      id: "web-ecommerce",
      name: "E-commerce",
      description: "ร้านค้าออนไลน์ครบวงจร",
      basePrice: 25000,
      priceType: "one-time",
      features: [
        "ระบบตะกร้าสินค้า",
        "ชำระเงินออนไลน์",
        "จัดการสินค้า/สต็อก",
        "ระบบสมาชิก",
        "รายงานยอดขาย",
      ],
    },
  ],
  pos: [
    {
      id: "pos-basic",
      name: "POS Basic",
      description: "สำหรับร้านค้าขนาดเล็ก",
      basePrice: 2500,
      priceType: "one-time",
      features: [
        "1 จุดขาย",
        "จัดการสินค้า 500 รายการ",
        "พิมพ์ใบเสร็จ",
        "รายงานยอดขาย",
        "Backup ข้อมูล",
      ],
    },
    {
      id: "pos-pro",
      name: "POS Pro",
      description: "สำหรับร้านค้าขนาดกลาง",
      basePrice: 8000,
      priceType: "one-time",
      features: [
        "3 จุดขาย",
        "ไม่จำกัดสินค้า",
        "ระบบสมาชิก/สะสมแต้ม",
        "จัดการสต็อก",
        "รายงานขั้นสูง",
        "Multi-user",
      ],
      popular: true,
    },
  ],
  inventory: [
    {
      id: "inv-standard",
      name: "Inventory Standard",
      description: "ระบบคลังมาตรฐาน",
      basePrice: 8000,
      priceType: "one-time",
      features: [
        "1 คลัง",
        "รับ-จ่าย สินค้า",
        "Barcode Support",
        "รายงาน Stock",
        "แจ้งเตือน Min Stock",
      ],
    },
    {
      id: "inv-multi",
      name: "Inventory Multi-Branch",
      description: "หลายคลัง/หลายสาขา",
      basePrice: 25000,
      priceType: "one-time",
      features: [
        "ไม่จำกัดคลัง",
        "โอนย้ายระหว่างคลัง",
        "ตรวจนับสต็อก",
        "รายงาน Movement",
        "Dashboard สรุป",
        "API Integration",
      ],
      popular: true,
    },
  ],
};

// Monthly maintenance pricing
export const maintenancePricing = {
  basic: {
    name: "Basic",
    price: 990,
    features: ["Hosting", "SSL", "Backup รายวัน", "Support ในเวลาทำการ"],
  },
  standard: {
    name: "Standard",
    price: 1990,
    features: [
      "ทุกอย่างใน Basic",
      "อัปเดตฟีเจอร์",
      "Support 24/7",
      "รายงานประจำเดือน",
    ],
    popular: true,
  },
  premium: {
    name: "Premium",
    price: 3990,
    features: [
      "ทุกอย่างใน Standard",
      "ทีมดูแลเฉพาะ",
      "On-site Support",
      "SLA รับประกัน",
    ],
  },
};

// Calculate quote
export function calculateQuote(
  items: Array<{ id: string; quantity: number; customPrice?: number }>
) {
  let subtotal = 0;

  const quotedItems = items.map((item) => {
    // Find base price from all service categories
    let basePrice = item.customPrice || 0;

    if (!item.customPrice) {
      for (const services of Object.values(servicePricing)) {
        const found = services.find((s) => s.id === item.id);
        if (found) {
          basePrice = found.basePrice;
          break;
        }
      }
    }

    const total = basePrice * item.quantity;
    subtotal += total;

    return {
      id: item.id,
      quantity: item.quantity,
      unitPrice: basePrice,
      total,
    };
  });

  return {
    items: quotedItems,
    subtotal,
    discount: 0, // Can add discount logic
    total: subtotal,
  };
}

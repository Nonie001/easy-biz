import { Metadata } from "next";

export const siteConfig = {
  name: "Easy Biz",
  title: "ระบบพร้อมใช้ Easy Biz",
  description:
    "รับทำระบบและดูแลครบวงจร: เว็บไซต์, POS, คลังสินค้า, หน่วยงาน, โรงเรียน — ทั้งแบบขายขาดและดูแลรายเดือน",
  url: "https://easybiz.co.th",
  ogImage: "/og-image.png",
  links: {
    facebook: "https://facebook.com/easybiz",
    line: "https://line.me/easybiz",
  },
  contact: {
    email: "contact@easybiz.co.th",
    phone: "02-xxx-xxxx",
    line: "@easybiz",
  },
};

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const finalTitle = title
    ? `${title} | ${siteConfig.title}`
    : siteConfig.title;
  const finalDescription = description || siteConfig.description;

  return {
    title: finalTitle,
    description: finalDescription,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [siteConfig.ogImage],
    },
  };
}

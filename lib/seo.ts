import { Metadata } from "next";

export const siteConfig = {
  name: "Easy Biz - ระบบพร้อมใช้",
  title: "ระบบพร้อมใช้ Easy Biz",
  description:
    "พัฒนาระบบเว็บไซต์ POS สต็อก องค์กร เริ่มต้นเพียง 5,000 บาท สำหรับธุรกิจ SME ใช้งานง่าย ราคาเป็นธรรม",
  url: "https://easybiz.vercel.app",
  siteName: "Easy Biz",
  locale: "th_TH",
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

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export function generateSEO({
  title,
  description = siteConfig.description,
  path = "",
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  tags = [],
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const url = `${siteConfig.url}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "พัฒนาเว็บไซต์",
      "ระบบ POS",
      "ระบบสต็อก",
      "ระบบองค์กร",
      "SME",
      "ราคาถูก",
      "ใช้งานง่าย",
      "Easy Biz",
      ...tags,
    ],
    authors: author ? [{ name: author }] : [{ name: "ทีมงาน Easy Biz" }],
    creator: "Easy Biz",
    publisher: "Easy Biz",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: type,
      locale: siteConfig.locale,
      url: url,
      siteName: siteConfig.siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors: [author || "ทีมงาน Easy Biz"],
        tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: "@easybiz_th",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStructuredData({
  type,
  name,
  description,
  url,
  image,
  author,
  publishDate,
  modifiedDate,
  breadcrumbs,
  faq,
  organization,
}: {
  type: "website" | "article" | "service" | "faq" | "organization";
  name: string;
  description: string;
  url: string;
  image?: string;
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  breadcrumbs?: { name: string; url: string }[];
  faq?: { question: string; answer: string }[];
  organization?: {
    name: string;
    url: string;
    logo: string;
    contactPoint: {
      telephone: string;
      contactType: string;
    };
  };
}) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type === "website" ? "WebSite" : type === "article" ? "Article" : type === "service" ? "Service" : type === "faq" ? "FAQPage" : "Organization",
    name,
    description,
    url,
    ...(image && { image }),
  };

  if (type === "article") {
    return {
      ...baseData,
      "@type": "Article",
      author: {
        "@type": "Person",
        name: author || "ทีมงาน Easy Biz",
      },
      publisher: {
        "@type": "Organization",
        name: "Easy Biz",
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.png`,
        },
      },
      datePublished: publishDate,
      dateModified: modifiedDate || publishDate,
    };
  }

  if (type === "faq") {
    return {
      ...baseData,
      "@type": "FAQPage",
      mainEntity: faq?.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
  }

  if (type === "organization") {
    return {
      ...baseData,
      "@type": "Organization",
      ...organization,
    };
  }

  if (breadcrumbs) {
    return {
      ...baseData,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    };
  }

  return baseData;
}

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

// Types for the Easy Biz application

// Lead/Contact types
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: ServiceType;
  budget?: string;
  message: string;
  status: LeadStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type ServiceType =
  | "website"
  | "pos"
  | "inventory"
  | "organization"
  | "school"
  | "custom";

export type LeadStatus =
  | "new"
  | "contacted"
  | "quoted"
  | "negotiating"
  | "won"
  | "lost";

// Pricing types
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  priceType: "one-time" | "monthly" | "yearly";
  features: string[];
  popular?: boolean;
  serviceType: ServiceType;
}

// Quote types
export interface Quote {
  id: string;
  leadId: string;
  items: QuoteItem[];
  subtotal: number;
  discount: number;
  total: number;
  validUntil: Date;
  status: QuoteStatus;
  createdAt: Date;
}

export interface QuoteItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export type QuoteStatus = "draft" | "sent" | "accepted" | "rejected" | "expired";

// Order/Project types
export interface Order {
  id: string;
  leadId: string;
  quoteId?: string;
  projectName: string;
  serviceType: ServiceType;
  contractType: "one-time" | "maintenance";
  status: OrderStatus;
  startDate: Date;
  endDate?: Date;
  totalAmount: number;
  paidAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type OrderStatus =
  | "pending"
  | "in-progress"
  | "review"
  | "completed"
  | "cancelled";

// Portfolio types
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  serviceType: ServiceType;
  imageUrl: string;
  tags: string[];
  clientName?: string;
  completedAt: Date;
  featured?: boolean;
}

// Blog types
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  tags: string[];
  publishedAt: Date;
  updatedAt?: Date;
}

// Navigation types
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: ServiceType;
  budget?: string;
  message: string;
}

import { Card, Badge, Button } from "@/components/ui";
import { Search, Filter, Plus, Mail, Phone } from "lucide-react";

// Mock data - ในการใช้งานจริงจะดึงจาก database
const leads = [
  {
    id: "1",
    name: "คุณสมชาย ใจดี",
    email: "somchai@example.com",
    phone: "081-234-5678",
    company: "ร้านกาแฟ Coffee House",
    service: "POS",
    budget: "50k-100k",
    status: "new",
    createdAt: "2024-12-28",
  },
  {
    id: "2",
    name: "คุณวิภา สุขใจ",
    email: "wipa@abc.co.th",
    phone: "089-876-5432",
    company: "บริษัท ABC Import จำกัด",
    service: "Website",
    budget: "100k-300k",
    status: "contacted",
    createdAt: "2024-12-27",
  },
  {
    id: "3",
    name: "คุณธนา เจริญกิจ",
    email: "thana@school.ac.th",
    phone: "062-345-6789",
    company: "โรงเรียนอนุบาลสุขใจ",
    service: "School",
    budget: "above-300k",
    status: "quoted",
    createdAt: "2024-12-25",
  },
  {
    id: "4",
    name: "คุณมานะ พากเพียร",
    email: "mana@xyz.com",
    phone: "095-111-2222",
    company: "XYZ Logistics",
    service: "Inventory",
    budget: "100k-300k",
    status: "negotiating",
    createdAt: "2024-12-20",
  },
];

const statusConfig: Record<string, { label: string; variant: "default" | "success" | "warning" | "info" }> = {
  new: { label: "ใหม่", variant: "success" },
  contacted: { label: "ติดต่อแล้ว", variant: "info" },
  quoted: { label: "ส่งใบเสนอราคา", variant: "warning" },
  negotiating: { label: "เจรจา", variant: "default" },
  won: { label: "ปิดการขาย", variant: "success" },
  lost: { label: "ไม่สำเร็จ", variant: "default" },
};

export default function LeadsPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">ลูกค้า/ลีด</h1>
          <p className="mt-1 text-neutral-600">จัดการรายชื่อลูกค้าที่สนใจ</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          เพิ่มลีด
        </Button>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="ค้นหาชื่อ, อีเมล, บริษัท..."
            className="w-full rounded-lg border border-neutral-300 py-2 pl-10 pr-4 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4" />
          ตัวกรอง
        </Button>
      </div>

      {/* Status tabs */}
      <div className="mt-6 flex gap-2 overflow-x-auto">
        {["all", "new", "contacted", "quoted", "negotiating", "won", "lost"].map(
          (status) => (
            <button
              key={status}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                status === "all"
                  ? "bg-yellow-400 text-neutral-900"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {status === "all" ? "ทั้งหมด" : statusConfig[status]?.label || status}
            </button>
          )
        )}
      </div>

      {/* Leads Table */}
      <Card className="mt-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                  ชื่อ/บริษัท
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                  ติดต่อ
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                  บริการ
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                  งบประมาณ
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                  สถานะ
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                  วันที่
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-neutral-600">
                  การดำเนินการ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-neutral-50">
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-medium text-neutral-900">{lead.name}</p>
                      <p className="text-sm text-neutral-500">{lead.company}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <a
                        href={`mailto:${lead.email}`}
                        className="flex items-center gap-1 text-sm text-neutral-600 hover:text-yellow-600"
                      >
                        <Mail className="h-3 w-3" />
                        {lead.email}
                      </a>
                      <a
                        href={`tel:${lead.phone}`}
                        className="flex items-center gap-1 text-sm text-neutral-600 hover:text-yellow-600"
                      >
                        <Phone className="h-3 w-3" />
                        {lead.phone}
                      </a>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-neutral-700">{lead.service}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-neutral-700">{lead.budget}</span>
                  </td>
                  <td className="px-4 py-4">
                    <Badge variant={statusConfig[lead.status]?.variant}>
                      {statusConfig[lead.status]?.label}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-neutral-500">
                      {new Date(lead.createdAt).toLocaleDateString("th-TH")}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <Button variant="ghost" size="sm">
                      ดูรายละเอียด
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

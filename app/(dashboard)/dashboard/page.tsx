import { Card } from "@/components/ui";
import { Users, FileText, TrendingUp, DollarSign } from "lucide-react";

const stats = [
  {
    label: "ลีดใหม่เดือนนี้",
    value: "24",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "งานที่กำลังทำ",
    value: "8",
    change: "+2",
    icon: FileText,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    label: "รายได้เดือนนี้",
    value: "฿185,000",
    change: "+18%",
    icon: DollarSign,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    label: "Conversion Rate",
    value: "32%",
    change: "+5%",
    icon: TrendingUp,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const recentLeads = [
  { name: "คุณสมชาย", service: "POS", status: "new", time: "2 ชม. ที่แล้ว" },
  { name: "บริษัท ABC", service: "Website", status: "contacted", time: "5 ชม. ที่แล้ว" },
  { name: "โรงเรียนสุขใจ", service: "School", status: "quoted", time: "1 วัน ที่แล้ว" },
  { name: "คุณวิภา", service: "Inventory", status: "new", time: "1 วัน ที่แล้ว" },
];

const statusColors: Record<string, string> = {
  new: "bg-green-100 text-green-700",
  contacted: "bg-blue-100 text-blue-700",
  quoted: "bg-yellow-100 text-yellow-700",
  negotiating: "bg-purple-100 text-purple-700",
};

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
      <p className="mt-1 text-neutral-600">ภาพรวมธุรกิจของคุณ</p>

      {/* Stats Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-neutral-600">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold text-neutral-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-green-600">{stat.change}</p>
              </div>
              <div className={`rounded-lg p-2 ${stat.bg}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Leads */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-neutral-900">ลีดล่าสุด</h2>
        <Card className="mt-4">
          <div className="divide-y divide-neutral-100">
            {recentLeads.map((lead, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 font-medium text-neutral-600">
                    {lead.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{lead.name}</p>
                    <p className="text-sm text-neutral-500">{lead.service}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      statusColors[lead.status]
                    }`}
                  >
                    {lead.status}
                  </span>
                  <span className="text-sm text-neutral-500">{lead.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

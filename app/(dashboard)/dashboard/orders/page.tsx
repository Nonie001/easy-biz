import { Card, Badge, Button } from "@/components/ui";
import { Plus, Calendar, DollarSign } from "lucide-react";

const orders = [
  {
    id: "ORD-001",
    projectName: "ระบบ POS ร้าน Coffee House",
    client: "คุณสมชาย ใจดี",
    service: "POS",
    contractType: "one-time",
    status: "in-progress",
    totalAmount: 65000,
    paidAmount: 32500,
    startDate: "2024-12-01",
    endDate: "2025-01-15",
  },
  {
    id: "ORD-002",
    projectName: "เว็บไซต์บริษัท ABC Import",
    client: "บริษัท ABC Import",
    service: "Website",
    contractType: "one-time",
    status: "review",
    totalAmount: 45000,
    paidAmount: 22500,
    startDate: "2024-12-10",
    endDate: "2025-01-05",
  },
  {
    id: "ORD-003",
    projectName: "ดูแลระบบ XYZ Logistics",
    client: "XYZ Logistics",
    service: "Inventory",
    contractType: "maintenance",
    status: "in-progress",
    totalAmount: 5900,
    paidAmount: 5900,
    startDate: "2024-01-01",
    endDate: null,
  },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  pending: { label: "รอเริ่มงาน", color: "bg-neutral-100 text-neutral-700" },
  "in-progress": { label: "กำลังทำ", color: "bg-blue-100 text-blue-700" },
  review: { label: "รอตรวจ", color: "bg-yellow-100 text-yellow-700" },
  completed: { label: "เสร็จสิ้น", color: "bg-green-100 text-green-700" },
  cancelled: { label: "ยกเลิก", color: "bg-red-100 text-red-700" },
};

export default function OrdersPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">งาน/สัญญา</h1>
          <p className="mt-1 text-neutral-600">จัดการโปรเจคและสัญญาดูแล</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          สร้างงานใหม่
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <Card>
          <p className="text-sm text-neutral-600">งานทั้งหมด</p>
          <p className="mt-1 text-2xl font-bold">12</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-600">กำลังทำ</p>
          <p className="mt-1 text-2xl font-bold text-blue-600">5</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-600">รอตรวจ</p>
          <p className="mt-1 text-2xl font-bold text-yellow-600">2</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-600">สัญญาดูแล</p>
          <p className="mt-1 text-2xl font-bold text-green-600">8</p>
        </Card>
      </div>

      {/* Orders List */}
      <div className="mt-8 space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="hover:border-yellow-400">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-neutral-500">
                    {order.id}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      statusConfig[order.status].color
                    }`}
                  >
                    {statusConfig[order.status].label}
                  </span>
                  {order.contractType === "maintenance" && (
                    <Badge variant="info">ดูแลรายเดือน</Badge>
                  )}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                  {order.projectName}
                </h3>
                <p className="mt-1 text-neutral-600">{order.client}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Calendar className="h-4 w-4" />
                  {new Date(order.startDate).toLocaleDateString("th-TH", {
                    day: "numeric",
                    month: "short",
                  })}
                  {order.endDate && (
                    <>
                      {" - "}
                      {new Date(order.endDate).toLocaleDateString("th-TH", {
                        day: "numeric",
                        month: "short",
                      })}
                    </>
                  )}
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-neutral-500">
                    <DollarSign className="h-4 w-4" />
                    ชำระแล้ว
                  </div>
                  <p className="font-semibold text-neutral-900">
                    ฿{order.paidAmount.toLocaleString()} / ฿
                    {order.totalAmount.toLocaleString()}
                  </p>
                  <div className="mt-1 h-2 w-32 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full bg-green-500"
                      style={{
                        width: `${(order.paidAmount / order.totalAmount) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  จัดการ
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

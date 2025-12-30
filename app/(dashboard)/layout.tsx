import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
  Zap,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/leads", icon: Users, label: "ลูกค้า/ลีด" },
  { href: "/dashboard/orders", icon: FileText, label: "งาน/สัญญา" },
  { href: "/dashboard/cms", icon: Settings, label: "จัดการเนื้อหา" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-neutral-200 bg-white">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center gap-2 border-b border-neutral-200 px-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400">
              <Zap className="h-5 w-5 text-neutral-900" />
            </div>
            <span className="font-bold text-neutral-900">Easy Biz</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* User */}
          <div className="border-t border-neutral-200 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 font-semibold text-neutral-900">
                A
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-900">Admin</p>
                <p className="text-xs text-neutral-500">admin@easybiz.co.th</p>
              </div>
              <button className="text-neutral-400 hover:text-neutral-600">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}

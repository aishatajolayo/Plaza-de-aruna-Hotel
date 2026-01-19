import { LayoutDashboard, Bed, Users, Calendar, CreditCard, BarChart2, Bell } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Room Management", icon: Bed },
  { label: "Guest List", icon: Users },
  { label: "Booking Calendar", icon: Calendar },
  { label: "Payments & Invoices", icon: CreditCard },
  { label: "Analytics", icon: BarChart2 },
  { label: "Notifications", icon: Bell },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r px-4 py-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold">HotelAdmin</h1>
        <p className="text-sm text-gray-500">Management System</p>
      </div>

      <nav className="space-y-2 flex-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
              ${active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
          >
            <Icon size={18} />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </nav>

      <div className="bg-gray-100 rounded-xl p-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
          AD
        </div>
        <div>
          <p className="text-sm font-semibold">Admin User</p>
          <p className="text-xs text-gray-500">admin@hotel.com</p>
        </div>
      </div>
    </aside>
  );
}

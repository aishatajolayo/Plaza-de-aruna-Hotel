export function Topbar() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-sm text-gray-500">
          Thursday, January 15, 2026
        </p>
      </div>

      <div className="relative">
        <Bell />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
      </div>
    </div>
  );
}

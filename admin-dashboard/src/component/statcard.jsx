export function StatCard({ title, value, change, icon, color }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className="text-sm text-green-500 mt-1">{change}</p>
      </div>

      <div className={`p-3 rounded-xl ${color}`}>
        {icon}
      </div>
    </div>
  );
}

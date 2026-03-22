interface BadgeProps {
  label: string;
  variant?: "priority" | "status" | "severity" | "type" | "tier";
}

const PRIORITY_COLORS: Record<string, string> = {
  P0: "bg-red-100 text-red-800 border border-red-200",
  P1: "bg-orange-100 text-orange-800 border border-orange-200",
  P2: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  Critical: "bg-red-100 text-red-800 border border-red-200",
  High: "bg-orange-100 text-orange-800 border border-orange-200",
  Medium: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  Low: "bg-green-100 text-green-800 border border-green-200",
  Planning: "bg-slate-100 text-slate-700 border border-slate-200",
  Planned: "bg-blue-100 text-blue-800 border border-blue-200",
  Future: "bg-purple-100 text-purple-800 border border-purple-200",
  "In Progress": "bg-emerald-100 text-emerald-800 border border-emerald-200",
};

export function Badge({ label }: BadgeProps) {
  const colorClass = PRIORITY_COLORS[label] ?? "bg-slate-100 text-slate-700 border border-slate-200";
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${colorClass}`}>
      {label}
    </span>
  );
}

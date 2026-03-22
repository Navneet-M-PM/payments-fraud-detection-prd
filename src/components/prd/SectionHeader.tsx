interface SectionHeaderProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ id, number, title, subtitle }: SectionHeaderProps) {
  return (
    <div id={id} className="mb-8 pb-4 border-b border-slate-200">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-sm font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
          {number}
        </span>
      </div>
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="mt-1 text-slate-500 text-sm">{subtitle}</p>}
    </div>
  );
}

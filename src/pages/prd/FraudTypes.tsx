import { SectionHeader } from "../../components/prd/SectionHeader";
import { Badge } from "../../components/prd/Badge";
import { FRAUD_TYPES } from "../../data/prd-content";

export function FraudTypes() {
  return (
    <section>
      <SectionHeader
        id="scope"
        number="04"
        title="Fraud Types & Scope"
        subtitle="Six fraud categories in scope for v1.0, prioritised by volume and loss impact"
      />

      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200">
              <th className="text-left py-3 px-4 font-semibold text-slate-700 text-xs uppercase tracking-wide">ID</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700 text-xs uppercase tracking-wide">Fraud Type</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700 text-xs uppercase tracking-wide">Priority</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700 text-xs uppercase tracking-wide">Volume</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700 text-xs uppercase tracking-wide">Avg Loss</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700 text-xs uppercase tracking-wide">Detection</th>
            </tr>
          </thead>
          <tbody>
            {FRAUD_TYPES.map((ft, i) => (
              <tr key={ft.id} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <td className="py-3 px-4 font-mono text-xs text-slate-500">{ft.id}</td>
                <td className="py-3 px-4 font-medium text-slate-900">{ft.name}</td>
                <td className="py-3 px-4"><Badge label={ft.priority} /></td>
                <td className="py-3 px-4 text-slate-600">{ft.volume}</td>
                <td className="py-3 px-4 font-semibold text-red-700">{ft.avgLoss}</td>
                <td className="py-3 px-4 text-slate-600 text-xs">{ft.detection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 mt-6">
        {FRAUD_TYPES.map((ft) => (
          <div key={ft.id} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <span className="text-xs font-mono text-slate-400 mr-2">{ft.id}</span>
                <span className="font-semibold text-slate-900">{ft.name}</span>
              </div>
              <Badge label={ft.priority} />
            </div>
            <p className="text-sm text-slate-600 mb-2">{ft.description}</p>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
              <p className="text-xs text-slate-500"><span className="font-semibold text-slate-700">Key signals: </span>{ft.signal}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

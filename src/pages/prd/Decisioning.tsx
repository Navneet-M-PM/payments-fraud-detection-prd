import { SectionHeader } from "../../components/prd/SectionHeader";
import { DECISIONING } from "../../data/prd-content";

const BAND_COLORS: Record<string, string> = {
  "Low Risk": "bg-green-100 border-green-300 text-green-800",
  "Medium Risk": "bg-yellow-100 border-yellow-300 text-yellow-800",
  "High Risk": "bg-orange-100 border-orange-300 text-orange-800",
  "Very High Risk": "bg-red-100 border-red-300 text-red-800",
  "Critical Risk": "bg-red-900 border-red-700 text-red-100",
};

export function Decisioning() {
  return (
    <section>
      <SectionHeader
        id="decisioning"
        number="10"
        title="Decisioning & Rules Engine"
        subtitle="How ML scores translate to payment outcomes and mandatory rule overrides"
      />

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-slate-700 leading-relaxed">{DECISIONING.overview}</p>
      </div>

      <h3 className="text-base font-semibold text-slate-800 mb-4">Score Band Decisioning</h3>
      <div className="space-y-3 mb-8">
        {DECISIONING.scoreBands.map((band) => {
          const colorClass = BAND_COLORS[band.tier] ?? "bg-slate-100 border-slate-300 text-slate-800";
          return (
            <div key={band.band} className={`rounded-xl border p-4 ${colorClass}`}>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-lg">{band.band}</span>
                  <span className="font-semibold">{band.tier}</span>
                </div>
                <span className="text-sm font-bold bg-white/40 border border-current/20 px-3 py-1 rounded-full">{band.action}</span>
              </div>
              <p className="text-sm opacity-80 mb-2">{band.rationale}</p>
              <div className="flex flex-wrap gap-4 text-xs">
                <div><span className="font-semibold">Customer impact: </span>{band.customerImpact}</div>
                <div><span className="font-semibold">Analyst action: </span>{band.analystAction}</div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="text-base font-semibold text-slate-800 mb-4">Mandatory Rules (Override ML Score)</h3>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200">
              <th className="text-left py-3 px-4 font-semibold text-slate-700 text-xs uppercase tracking-wide">Rule ID</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700 text-xs uppercase tracking-wide">Rule</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700 text-xs uppercase tracking-wide">Type</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700 text-xs uppercase tracking-wide">Override By</th>
            </tr>
          </thead>
          <tbody>
            {DECISIONING.mandatoryRules.map((rule, i) => (
              <tr key={rule.id} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <td className="py-3 px-4 font-mono text-xs text-slate-500">{rule.id}</td>
                <td className="py-3 px-4 text-slate-700">{rule.rule}</td>
                <td className="py-3 px-4">
                  <span className="text-xs bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded">{rule.type}</span>
                </td>
                <td className="py-3 px-4 text-xs text-slate-500">{rule.override}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

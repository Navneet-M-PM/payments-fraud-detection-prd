import { SectionHeader } from "../../components/prd/SectionHeader";
import { KPIS } from "../../data/prd-content";

export function KPIs() {
  return (
    <section>
      <SectionHeader
        id="kpis"
        number="12"
        title="KPIs & Success Metrics"
        subtitle="How we measure success across detection quality, financial impact, customer experience, and analyst productivity"
      />

      <div className="space-y-6">
        {KPIS.map((group) => (
          <div key={group.category} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-800 px-5 py-3">
              <h3 className="font-semibold text-white text-sm">{group.category}</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {group.metrics.map((metric) => (
                <div key={metric.name} className="px-5 py-4">
                  <div className="flex items-start justify-between gap-4 mb-1.5">
                    <h4 className="font-semibold text-slate-900 text-sm">{metric.name}</h4>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-bold text-emerald-700">{metric.target}</div>
                      <div className="text-xs text-slate-400">vs. {metric.baseline}</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">{metric.measurement}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "$50M+", label: "Fraud prevented (Year 1)" },
          { value: "≥ 92%", label: "Target detection rate" },
          { value: "≤ 0.5%", label: "Max false positive rate" },
          { value: "< 8 min", label: "Analyst case review" },
        ].map((stat) => (
          <div key={stat.label} className="bg-slate-900 text-white rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-1">{stat.value}</div>
            <div className="text-xs text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { SectionHeader } from "../../components/prd/SectionHeader";
import { Badge } from "../../components/prd/Badge";
import { ROADMAP } from "../../data/prd-content";

const PHASE_COLORS: Record<string, string> = {
  Planning: "bg-slate-600",
  Planned: "bg-blue-600",
  Future: "bg-purple-600",
  "In Progress": "bg-emerald-600",
};

export function Roadmap() {
  return (
    <section>
      <SectionHeader
        id="roadmap"
        number="14"
        title="Roadmap & Milestones"
        subtitle="20-month phased delivery plan from data infrastructure to full intelligence platform"
      />

      <div className="space-y-6">
        {ROADMAP.map((phase, i) => {
          const headerClass = PHASE_COLORS[phase.status] ?? "bg-slate-600";
          return (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className={`${headerClass} p-5`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-wide">{phase.phase}</p>
                    <h3 className="text-white font-bold text-lg">{phase.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 text-sm font-medium">{phase.duration}</p>
                    <Badge label={phase.status} />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Key Milestones</p>
                <ul className="space-y-2">
                  {phase.milestones.map((milestone, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-700">{milestone}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 bg-slate-900 text-white rounded-xl p-5">
        <p className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-2">20-Month Target State</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Fraud Detection Rate", value: "≥ 95%" },
            { label: "False Positive Rate", value: "≤ 0.3%" },
            { label: "Annual Loss Prevention", value: "$50M+" },
            { label: "Payment Channels", value: "All (5 types)" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-emerald-400 font-bold text-lg">{item.value}</p>
              <p className="text-slate-400 text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

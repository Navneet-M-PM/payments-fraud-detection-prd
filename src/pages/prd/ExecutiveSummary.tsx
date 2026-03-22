import { SectionHeader } from "../../components/prd/SectionHeader";
import { EXECUTIVE_SUMMARY } from "../../data/prd-content";

export function ExecutiveSummary() {
  return (
    <section>
      <SectionHeader
        id="executive-summary"
        number="01"
        title="Executive Summary"
        subtitle="Platform overview, capabilities, and target outcomes"
      />
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
        <p className="text-slate-700 text-sm leading-relaxed">{EXECUTIVE_SUMMARY.overview}</p>
      </div>

      <h3 className="text-base font-semibold text-slate-800 mb-4">Key Platform Capabilities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {EXECUTIVE_SUMMARY.keyCapabilities.map((cap, i) => (
          <div key={i} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
            <div className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-emerald-700 text-xs font-bold">{i + 1}</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{cap}</p>
          </div>
        ))}
      </div>

      <h3 className="text-base font-semibold text-slate-800 mb-4">Target Outcomes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {EXECUTIVE_SUMMARY.targetOutcomes.map((item, i) => (
          <div key={i} className="bg-slate-900 text-white rounded-xl p-5">
            <p className="text-emerald-400 text-xl font-bold mb-1">{item.target}</p>
            <p className="text-slate-300 text-xs">{item.metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

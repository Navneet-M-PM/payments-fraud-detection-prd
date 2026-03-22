import { SectionHeader } from "../../components/prd/SectionHeader";
import { Badge } from "../../components/prd/Badge";
import { FUNCTIONAL_REQUIREMENTS } from "../../data/prd-content";

export function FunctionalRequirements() {
  return (
    <section>
      <SectionHeader
        id="functional-requirements"
        number="06"
        title="Functional Requirements"
        subtitle="What the platform must do — organised by capability domain"
      />

      <div className="space-y-6">
        {FUNCTIONAL_REQUIREMENTS.map((group) => (
          <div key={group.category} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-800 px-5 py-3">
              <h3 className="font-semibold text-white text-sm">{group.category}</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {group.items.map((item) => (
                <div key={item.id} className="flex items-start gap-4 px-5 py-3.5">
                  <span className="font-mono text-xs text-slate-400 mt-0.5 flex-shrink-0 w-16">{item.id}</span>
                  <p className="text-sm text-slate-700 flex-1">{item.req}</p>
                  <Badge label={item.priority} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-5">
        <p className="text-sm font-semibold text-emerald-800 mb-1">Priority Legend</p>
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2"><Badge label="P0" /><span className="text-xs text-slate-600">Must have — launch blocker</span></div>
          <div className="flex items-center gap-2"><Badge label="P1" /><span className="text-xs text-slate-600">Should have — MVP quality bar</span></div>
          <div className="flex items-center gap-2"><Badge label="P2" /><span className="text-xs text-slate-600">Nice to have — Phase 2+</span></div>
        </div>
      </div>
    </section>
  );
}

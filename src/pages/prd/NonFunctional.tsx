import { SectionHeader } from "../../components/prd/SectionHeader";
import { NON_FUNCTIONAL_REQUIREMENTS } from "../../data/prd-content";

export function NonFunctional() {
  return (
    <section>
      <SectionHeader
        id="non-functional"
        number="07"
        title="Non-Functional Requirements"
        subtitle="Quality attributes — performance, ML quality, security, and compliance"
      />

      <div className="space-y-6">
        {NON_FUNCTIONAL_REQUIREMENTS.map((group) => (
          <div key={group.category} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-emerald-700 px-5 py-3">
              <h3 className="font-semibold text-white text-sm">{group.category}</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {group.items.map((item) => (
                <div key={item.id} className="flex items-start gap-4 px-5 py-3.5">
                  <span className="font-mono text-xs text-slate-400 mt-0.5 flex-shrink-0 w-20">{item.id}</span>
                  <p className="text-sm text-slate-700 flex-1">{item.req}</p>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded whitespace-nowrap flex-shrink-0">{item.target}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

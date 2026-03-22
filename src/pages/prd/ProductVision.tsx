import { SectionHeader } from "../../components/prd/SectionHeader";
import { PRODUCT_VISION } from "../../data/prd-content";

export function ProductVision() {
  return (
    <section>
      <SectionHeader
        id="product-vision"
        number="03"
        title="Product Vision & Goals"
        subtitle="Strategic direction and what success looks like"
      />

      <div className="bg-slate-900 text-white rounded-xl p-6 mb-8">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">Product Vision</p>
        <p className="text-slate-100 text-lg leading-relaxed italic">{PRODUCT_VISION.vision}</p>
      </div>

      <h3 className="text-base font-semibold text-slate-800 mb-4">Strategic Goals</h3>
      <div className="space-y-4 mb-8">
        {PRODUCT_VISION.strategicGoals.map((goal, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-700 text-xs font-bold">G{i + 1}</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">{goal.goal}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{goal.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-amber-800 mb-3">Out of Scope (v1.0)</h3>
        <ul className="space-y-1.5">
          {PRODUCT_VISION.outOfScope.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-amber-700">
              <span className="text-amber-400">✕</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

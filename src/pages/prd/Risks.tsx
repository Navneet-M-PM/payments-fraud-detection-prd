import { SectionHeader } from "../../components/prd/SectionHeader";
import { Badge } from "../../components/prd/Badge";
import { RISKS } from "../../data/prd-content";

const RATING_COLORS: Record<string, string> = {
  High: "border-l-4 border-l-red-500",
  Medium: "border-l-4 border-l-orange-400",
  Low: "border-l-4 border-l-yellow-400",
};

export function Risks() {
  return (
    <section>
      <SectionHeader
        id="risks"
        number="13"
        title="Risks & Mitigations"
        subtitle="Key risks across adversarial threats, model quality, compliance, and operations"
      />

      <div className="space-y-4">
        {RISKS.map((risk) => {
          const borderClass = RATING_COLORS[risk.rating] ?? "";
          return (
            <div key={risk.id} className={`bg-white border border-slate-200 rounded-xl p-5 ${borderClass}`}>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-xs font-mono text-slate-400 mr-2">{risk.id}</span>
                  <span className="font-semibold text-slate-900">{risk.risk}</span>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <span className="text-xs text-slate-500">P: <Badge label={risk.probability} /></span>
                  <span className="text-xs text-slate-500">I: <Badge label={risk.impact} /></span>
                  <Badge label={risk.rating} />
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
                <p className="text-xs font-semibold text-emerald-700 mb-1">Mitigation Strategy</p>
                <p className="text-sm text-emerald-900">{risk.mitigation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

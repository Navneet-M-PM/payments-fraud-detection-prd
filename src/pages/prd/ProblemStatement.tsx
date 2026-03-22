import { SectionHeader } from "../../components/prd/SectionHeader";
import { Badge } from "../../components/prd/Badge";
import { PROBLEM_STATEMENT } from "../../data/prd-content";

export function ProblemStatement() {
  return (
    <section>
      <SectionHeader
        id="problem-statement"
        number="02"
        title="Problem Statement"
        subtitle="Current fraud landscape and the cost of inaction"
      />

      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
        <p className="text-slate-700 text-sm leading-relaxed">{PROBLEM_STATEMENT.context}</p>
      </div>

      <h3 className="text-base font-semibold text-slate-800 mb-4">Core Pain Points</h3>
      <div className="space-y-4 mb-8">
        {PROBLEM_STATEMENT.painPoints.map((point) => (
          <div key={point.title} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h4 className="font-semibold text-slate-900">{point.title}</h4>
              <Badge label={point.severity} />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">Opportunity Statement</p>
        <p className="text-slate-200 text-sm leading-relaxed italic">"{PROBLEM_STATEMENT.opportunityStatement}"</p>
      </div>
    </section>
  );
}

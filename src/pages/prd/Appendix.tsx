import { SectionHeader } from "../../components/prd/SectionHeader";
import { GLOSSARY, PRD_META } from "../../data/prd-content";

export function Appendix() {
  return (
    <section>
      <SectionHeader
        id="appendix"
        number="15"
        title="Appendix & Glossary"
        subtitle="Document metadata and definitions of key terms used throughout this PRD"
      />

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <h3 className="text-sm font-semibold text-slate-700 mb-4">Document Information</h3>
        <dl className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "Document Title", value: PRD_META.title },
            { label: "Version", value: PRD_META.version },
            { label: "Date", value: PRD_META.date },
            { label: "Status", value: PRD_META.status },
            { label: "Author", value: PRD_META.author },
            { label: "Classification", value: PRD_META.classification },
          ].map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{item.label}</dt>
              <dd className="text-sm text-slate-800 font-medium mt-0.5">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h3 className="text-base font-semibold text-slate-800 mb-4">Glossary of Terms</h3>
      <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100">
        {GLOSSARY.map((entry) => (
          <div key={entry.term} className="flex gap-4 px-5 py-3.5">
            <div className="w-24 flex-shrink-0">
              <span className="font-bold text-slate-900 text-sm">{entry.term}</span>
            </div>
            <p className="text-sm text-slate-600">{entry.definition}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

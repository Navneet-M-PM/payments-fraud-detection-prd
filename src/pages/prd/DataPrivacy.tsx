import { SectionHeader } from "../../components/prd/SectionHeader";
import { DATA_PRIVACY } from "../../data/prd-content";

const CLASS_COLORS: Record<string, string> = {
  "Highly Sensitive / PCI": "bg-red-100 text-red-800 border border-red-200",
  "Sensitive / PCI": "bg-orange-100 text-orange-800 border border-orange-200",
  "Personal Data (GDPR)": "bg-purple-100 text-purple-800 border border-purple-200",
  "Sensitive": "bg-yellow-100 text-yellow-800 border border-yellow-200",
  "Pseudonymised": "bg-blue-100 text-blue-800 border border-blue-200",
  "Sensitive / Audit": "bg-orange-100 text-orange-800 border border-orange-200",
  "Internal": "bg-slate-100 text-slate-700 border border-slate-200",
};

export function DataPrivacy() {
  return (
    <section>
      <SectionHeader
        id="data-privacy"
        number="11"
        title="Data, Privacy & Compliance"
        subtitle="Data classification, retention, and regulatory compliance framework"
      />

      <h3 className="text-base font-semibold text-slate-800 mb-4">Data Inventory & Classification</h3>
      <div className="space-y-3 mb-8">
        {DATA_PRIVACY.dataTypes.map((dt, i) => {
          const classColor = CLASS_COLORS[dt.classification] ?? "bg-slate-100 text-slate-700 border border-slate-200";
          return (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h4 className="font-semibold text-slate-900 text-sm">{dt.type}</h4>
                <span className={`text-xs px-2 py-0.5 rounded font-semibold whitespace-nowrap ${classColor}`}>{dt.classification}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600">
                <div><span className="font-semibold text-slate-700">Storage: </span>{dt.storage}</div>
                <div><span className="font-semibold text-slate-700">Retention: </span>{dt.retention}</div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="text-base font-semibold text-slate-800 mb-4">Regulatory Compliance Framework</h3>
      <div className="space-y-4">
        {DATA_PRIVACY.complianceFramework.map((fw, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{fw.framework}</h4>
                <p className="text-xs text-slate-500">{fw.scope}</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
              <p className="text-xs text-slate-600"><span className="font-semibold text-slate-700">Key Controls: </span>{fw.controls}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

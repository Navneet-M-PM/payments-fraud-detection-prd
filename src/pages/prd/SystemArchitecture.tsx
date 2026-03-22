import { SectionHeader } from "../../components/prd/SectionHeader";
import { SYSTEM_ARCHITECTURE } from "../../data/prd-content";

const LAYER_STYLES: Record<string, string> = {
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  indigo: "bg-indigo-600",
  orange: "bg-orange-600",
  green: "bg-emerald-600",
  cyan: "bg-cyan-600",
};

export function SystemArchitecture() {
  return (
    <section>
      <SectionHeader
        id="system-architecture"
        number="09"
        title="System Architecture"
        subtitle="Six-layer platform architecture and end-to-end transaction flow"
      />

      <h3 className="text-base font-semibold text-slate-800 mb-4">Platform Layers</h3>
      <div className="space-y-3 mb-8">
        {SYSTEM_ARCHITECTURE.layers.map((layer) => {
          const headerClass = LAYER_STYLES[layer.color] ?? "bg-slate-600";
          return (
            <div key={layer.name} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className={`${headerClass} px-5 py-3`}>
                <h4 className="font-semibold text-white">{layer.name}</h4>
              </div>
              <div className="p-5">
                <p className="text-sm text-slate-600 mb-3">{layer.description}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.components.map((comp) => (
                    <span key={comp} className="text-xs bg-slate-100 text-slate-700 border border-slate-200 px-2 py-1 rounded font-mono">{comp}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="text-base font-semibold text-slate-800 mb-4">Transaction Scoring Flow</h3>
      <div className="bg-slate-900 rounded-xl p-5">
        <div className="space-y-2">
          {SYSTEM_ARCHITECTURE.dataFlows.map((flow) => (
            <div key={flow.step} className="flex items-start gap-4">
              <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{flow.step}</span>
              </div>
              <div className="flex-1 flex items-start justify-between gap-4 py-0.5">
                <p className="text-slate-300 text-sm">{flow.description}</p>
                <span className="text-emerald-400 text-xs font-mono font-bold flex-shrink-0">{flow.latency}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-700">
          <p className="text-emerald-400 text-sm font-semibold">Total scoring latency target: &lt; 100ms (p99)</p>
        </div>
      </div>
    </section>
  );
}

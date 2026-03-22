import { SectionHeader } from "../../components/prd/SectionHeader";
import { ML_ARCHITECTURE } from "../../data/prd-content";

export function MLArchitecture() {
  return (
    <section>
      <SectionHeader
        id="ml-architecture"
        number="08"
        title="ML Model Architecture"
        subtitle="Multi-model ensemble design, model specifications, and training pipeline"
      />

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-slate-700 leading-relaxed">{ML_ARCHITECTURE.overview}</p>
      </div>

      <h3 className="text-base font-semibold text-slate-800 mb-4">Model Suite</h3>
      <div className="space-y-4 mb-8">
        {ML_ARCHITECTURE.models.map((model, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h4 className="font-bold text-slate-900">{model.name}</h4>
                <p className="text-xs text-slate-500 font-mono">{model.type}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-emerald-600">{model.fdr}</div>
                <div className="text-xs text-slate-400">FDR</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Input Features</p>
                <ul className="space-y-1">
                  {model.inputFeatures.map((f, j) => (
                    <li key={j} className="text-xs text-slate-600 flex items-start gap-1.5">
                      <span className="text-emerald-400 mt-0.5">▸</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
                  <p className="text-xs font-semibold text-emerald-700 mb-1">Strength</p>
                  <p className="text-xs text-emerald-800">{model.strength}</p>
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                  <p className="text-xs font-semibold text-amber-700 mb-1">Limitation</p>
                  <p className="text-xs text-amber-800">{model.weakness}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
              <span className="text-xs text-slate-500">Scoring latency:</span>
              <span className="text-xs font-bold text-slate-800">{model.latency}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-base font-semibold text-slate-800 mb-4">Training & Deployment Pipeline</h3>
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
        <div className="space-y-4">
          {ML_ARCHITECTURE.trainingPipeline.map((stage, i) => (
            <div key={i} className="flex gap-4 items-start pl-12 relative">
              <div className="absolute left-3 top-3 w-5 h-5 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">{i + 1}</span>
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-semibold text-slate-900 text-sm">{stage.stage}</h4>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">{stage.frequency}</span>
                </div>
                <p className="text-sm text-slate-600">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

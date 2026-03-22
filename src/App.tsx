import { useState } from "react";
import { PRD_META, SECTIONS } from "./data/prd-content";
import { ExecutiveSummary } from "./pages/prd/ExecutiveSummary";
import { ProblemStatement } from "./pages/prd/ProblemStatement";
import { ProductVision } from "./pages/prd/ProductVision";
import { FraudTypes } from "./pages/prd/FraudTypes";
import { UserPersonas } from "./pages/prd/UserPersonas";
import { FunctionalRequirements } from "./pages/prd/FunctionalRequirements";
import { NonFunctional } from "./pages/prd/NonFunctional";
import { MLArchitecture } from "./pages/prd/MLArchitecture";
import { SystemArchitecture } from "./pages/prd/SystemArchitecture";
import { Decisioning } from "./pages/prd/Decisioning";
import { DataPrivacy } from "./pages/prd/DataPrivacy";
import { KPIs } from "./pages/prd/KPIs";
import { Risks } from "./pages/prd/Risks";
import { Roadmap } from "./pages/prd/Roadmap";
import { Appendix } from "./pages/prd/Appendix";

const SECTION_COMPONENTS: Record<string, JSX.Element> = {
  "executive-summary": <ExecutiveSummary />,
  "problem-statement": <ProblemStatement />,
  "product-vision": <ProductVision />,
  "scope": <FraudTypes />,
  "user-personas": <UserPersonas />,
  "functional-requirements": <FunctionalRequirements />,
  "non-functional": <NonFunctional />,
  "ml-architecture": <MLArchitecture />,
  "system-architecture": <SystemArchitecture />,
  "decisioning": <Decisioning />,
  "data-privacy": <DataPrivacy />,
  "kpis": <KPIs />,
  "risks": <Risks />,
  "roadmap": <Roadmap />,
  "appendix": <Appendix />,
};

function App() {
  const [activeSection, setActiveSection] = useState("executive-summary");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handleDownloadPDF = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 300);
  };

  if (isPrinting) {
    return (
      <div className="max-w-4xl mx-auto p-8 space-y-16 bg-white">
        <div className="border-b-2 border-emerald-600 pb-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">FD</span>
            </div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Product Requirements Document</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">{PRD_META.title}</h1>
          <div className="flex gap-4 text-xs text-slate-500">
            <span>Version {PRD_META.version}</span>
            <span>·</span>
            <span>{PRD_META.date}</span>
            <span>·</span>
            <span>{PRD_META.status}</span>
          </div>
        </div>
        {Object.values(SECTION_COMPONENTS).map((component, i) => (
          <div key={i} className="page-break-inside-avoid">
            {component}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static inset-y-0 left-0 z-30 w-72 bg-slate-900 flex flex-col transform transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-5 border-b border-slate-700">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">FD</span>
            </div>
            <div>
              <p className="text-white text-xs font-bold leading-tight">AI Fraud Detection</p>
              <p className="text-slate-400 text-xs">Platform PRD</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-xs bg-emerald-900 text-emerald-400 border border-emerald-700 px-2 py-0.5 rounded">
              v{PRD_META.version}
            </span>
            <span className="text-xs bg-slate-800 text-slate-400 border border-slate-600 px-2 py-0.5 rounded">
              {PRD_META.status}
            </span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
          {SECTIONS.map((section, i) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                <span className={`text-xs font-mono w-5 flex-shrink-0 ${isActive ? "text-emerald-200" : "text-slate-600"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 leading-tight">{section.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button
            onClick={handleDownloadPDF}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>↓</span> Download PDF
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100"
            >
              ☰
            </button>
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-tight">{PRD_META.title}</h1>
              <p className="text-xs text-slate-500">{PRD_META.date} · {PRD_META.classification}</p>
            </div>
          </div>
          <button
            onClick={handleDownloadPDF}
            className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            ↓ Download PDF
          </button>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-10">
            {SECTION_COMPONENTS[activeSection]}
          </div>

          <div className="border-t border-slate-200 bg-white px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
            <button
              disabled={currentIndex === 0}
              onClick={() => setActiveSection(SECTIONS[currentIndex - 1].id)}
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ← {currentIndex > 0 ? SECTIONS[currentIndex - 1].label : ""}
            </button>
            <span className="text-xs text-slate-400">
              {currentIndex + 1} / {SECTIONS.length}
            </span>
            <button
              disabled={currentIndex === SECTIONS.length - 1}
              onClick={() => setActiveSection(SECTIONS[currentIndex + 1].id)}
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              {currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1].label : ""} →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

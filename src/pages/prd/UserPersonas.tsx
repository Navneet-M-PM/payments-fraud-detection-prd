import { SectionHeader } from "../../components/prd/SectionHeader";
import { USER_PERSONAS } from "../../data/prd-content";

const PERSONA_COLORS = ["emerald", "blue", "violet", "orange"];
const PERSONA_INITIALS = ["SA", "MM", "PC", "DC"];

export function UserPersonas() {
  return (
    <section>
      <SectionHeader
        id="user-personas"
        number="05"
        title="User Personas"
        subtitle="Four key stakeholders with distinct needs and success criteria"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {USER_PERSONAS.map((persona, i) => {
          const color = PERSONA_COLORS[i];
          const initials = PERSONA_INITIALS[i];
          return (
            <div key={persona.name} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className={`bg-${color}-600 p-5`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-${color}-500 border-2 border-white/30 flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{initials}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{persona.name.split(",")[0]}</h3>
                    <p className="text-white/80 text-sm">{persona.role}</p>
                    <p className="text-white/60 text-xs">Age {persona.age} · Tech comfort: {persona.techComfort}</p>
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Goal</p>
                  <p className="text-sm text-slate-700">{persona.goal}</p>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                  <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-1">Pain Point</p>
                  <p className="text-sm text-red-800">{persona.frustration}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Key Needs</p>
                  <ul className="space-y-1">
                    {persona.keyNeeds.map((need, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-emerald-500 font-bold mt-0.5">→</span>
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

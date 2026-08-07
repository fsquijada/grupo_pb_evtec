import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./HowItWorks";

const questions = [
  ["¿PREDIX realmente puede predecir un partido?", "Las predicciones son probabilísticas y no garantizan un resultado. PREDIX analiza información para estimar escenarios posibles."],
  ["¿Cuándo estará disponible?", "El lanzamiento se realizará próximamente. Regístrate para recibir información sobre la disponibilidad."],
  ["¿Necesito pagar?", "El acceso inicial y sus condiciones serán anunciados durante el lanzamiento."],
  ["¿Qué información utiliza la IA?", "El concepto considera estadísticas, rendimiento reciente, historial de enfrentamientos y otros factores deportivos."],
];

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <Section id="faq">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <SectionHeading eyebrow="FAQ" title={<>Preguntas <span className="text-neon">frecuentes.</span></>} text="Todo lo que necesitas saber antes del lanzamiento." />
        <div className="divide-y divide-white/10 border-y border-white/10">
          {questions.map(([question, answer], index) => (
            <div key={question}>
              <button onClick={() => setActive(active === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                <span className="font-semibold text-white">{question}</span>
                <ChevronDown size={18} className={`shrink-0 text-slate-500 transition ${active === index ? "rotate-180 text-neon" : ""}`} />
              </button>
              {active === index && <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-slate-500">{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

import { Activity, BrainCircuit, Eye, Timer } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./HowItWorks";

const features = [
  [Activity, "Análisis en tiempo real", "Actualiza sus probabilidades a medida que cambia el contexto."],
  [BrainCircuit, "Miles de variables", "Procesa múltiples factores relacionados con cada encuentro."],
  [Eye, "Explicaciones claras", "No muestra solamente un porcentaje: ayuda a entender los factores."],
  [Timer, "Antes del partido", "Consulta escenarios y probabilidades antes del inicio del encuentro."],
];

export function Features() {
  return (
    <Section id="features">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Tecnología" title={<>Más que una <span className="text-neon">predicción.</span></>} text="Una experiencia diseñada para convertir datos complejos en señales fáciles de interpretar." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([Icon, title, description]) => (
            <div key={title as string} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-neon/20">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-neon/10 text-neon"><Icon size={21} /></div>
              <h3 className="mt-8 font-bold text-white">{title as string}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{description as string}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

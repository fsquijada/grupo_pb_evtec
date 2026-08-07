import type { ReactNode } from "react";
import { Database, Layers3, BrainCircuit, Target } from "lucide-react";
import { Section } from "./Section";

const steps = [
  { n: "01", title: "DATOS", description: "Analiza estadísticas históricas y actuales.", icon: Database },
  { n: "02", title: "CONTEXTO", description: "Considera rendimiento, forma reciente y enfrentamientos.", icon: Layers3 },
  { n: "03", title: "MODELO", description: "Procesa la información mediante modelos predictivos.", icon: BrainCircuit },
  { n: "04", title: "PREDICCIÓN", description: "Genera probabilidades para cada escenario.", icon: Target },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Cómo funciona" title={<>La IA no adivina. <span className="text-neon">Analiza.</span></>} text="PREDIX combina diferentes señales para encontrar patrones que podrían pasar desapercibidos." />
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {steps.map(({ n, title, description, icon: Icon }) => (
            <div key={n} className="relative rounded-2xl border border-white/10 bg-[#0a1610] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-neon">{n}</span>
                <Icon size={22} className="text-slate-500" />
              </div>
              <h3 className="mt-10 font-black tracking-wide text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-neon">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-slate-400">{text}</p>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, RefreshCw } from "lucide-react";
import { Section } from "./Section";
import { SectionHeading } from "./HowItWorks";
import type { PredictionResult } from "../types";

const teams = ["Argentina", "Brasil", "Francia", "España"];

function predict(home: string, away: string): PredictionResult {
  const seed = (home.length * 17 + away.length * 13) % 18;
  const homeProbability = 54 + seed % 15;
  const drawProbability = 9 + (seed % 5);
  const awayProbability = 100 - homeProbability - drawProbability;
  return { home, away, homeProbability, drawProbability, awayProbability };
}

export function PredictionDemo() {
  const [home, setHome] = useState("España");
  const [away, setAway] = useState("Argentina");
  const [result, setResult] = useState<PredictionResult>(() => predict(home, away));

  const analyze = () => setResult(predict(home, away));

  return (
    <Section id="prediction" className="bg-[#07110c]/60">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Predicción interactiva" title={<>Mira lo que la IA <span className="text-neon">está viendo.</span></>} text="Una demostración conceptual de cómo podría presentarse el análisis de un partido." />

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0a1711] shadow-2xl">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-slate-500">
                <Sparkles size={15} className="text-neon" /> MATCH ANALYSIS
              </div>
              <div className="mt-8 grid gap-4">
                <TeamSelect label="LOCAL" value={home} onChange={setHome} options={teams} />
                <div className="text-center font-mono text-xs text-slate-600">VS</div>
                <TeamSelect label="VISITANTE" value={away} onChange={setAway} options={teams} />
              </div>
              <button onClick={analyze} className="btn-primary mt-7 w-full">
                Analizar partido <Sparkles size={17} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-neon/20 bg-neon/5 px-3 py-1 text-[10px] font-bold tracking-widest text-neon">SIMULACIÓN</span>
                <RefreshCw size={16} className="text-slate-600" />
              </div>
              <motion.div key={`${result.home}-${result.away}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-7">
                <div className="text-center">
                  <div className="text-sm text-slate-400">{result.home} <span className="mx-2 text-slate-700">vs</span> {result.away}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-600">Win probability</div>
                </div>
                <Probability label={result.home} value={result.homeProbability} highlight />
                <Probability label="Empate" value={result.drawProbability} />
                <Probability label={result.away} value={result.awayProbability} />
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ["Ataque", "8.7"],
                    ["Defensa", "8.1"],
                    ["Forma", "9.2"],
                    ["Experiencia", "8.8"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                      <div className="text-sm font-bold text-white">{value}<span className="text-slate-600">/10</span></div>
                      <div className="mt-1 text-[10px] text-slate-600">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function TeamSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold tracking-widest text-slate-600">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="input">
        {options.map((team) => <option key={team}>{team}</option>)}
      </select>
    </label>
  );
}

function Probability({ label, value, highlight = false }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className="mt-6">
      <div className="mb-2 flex justify-between text-xs">
        <span className={highlight ? "font-semibold text-white" : "text-slate-500"}>{label}</span>
        <span className={highlight ? "font-bold text-neon" : "text-slate-400"}>{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: .8 }} className={`h-full rounded-full ${highlight ? "bg-neon" : "bg-slate-700"}`} />
      </div>
    </div>
  );
}

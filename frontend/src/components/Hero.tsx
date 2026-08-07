import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, BrainCircuit, Activity, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:min-h-screen lg:px-12 lg:pt-44">
      <div className="absolute left-1/2 top-16 -z-10 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-neon/10 blur-[130px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neon">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
            Próximo lanzamiento
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
            El próximo resultado podría estar{" "}
            <span className="text-neon">en los datos.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Conoce PREDIX, el agente de Inteligencia Artificial que analiza estadísticas,
            contexto y patrones del fútbol para generar predicciones probabilísticas.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#register" className="btn-primary">
              Quiero acceso anticipado <ArrowUpRight size={18} />
            </a>
            <a href="#how-it-works" className="btn-secondary">
              Descubrir cómo funciona <ArrowDown size={18} />
            </a>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Proyecto conceptual · Las predicciones mostradas son simulaciones.
          </p>
        </div>

        <PredictionVisual />
      </div>
    </section>
  );
}

function PredictionVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[590px]">
      <div className="absolute inset-8 rounded-full border border-neon/10" />
      <div className="absolute inset-20 rounded-full border border-white/5" />
      <motion.div
        className="absolute inset-[22%] grid place-items-center rounded-full border border-neon/20 bg-neon/5 shadow-[0_0_100px_rgba(84,255,145,.12)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-32 w-32 rounded-full border border-dashed border-neon/30" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 z-10 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] shadow-2xl backdrop-blur-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-20 w-20 rounded-full border-2 border-white/20 bg-[#0b1912]">
          <span className="absolute left-1/2 top-1/2 text-4xl -translate-x-1/2 -translate-y-1/2">⚽</span>
        </div>
      </motion.div>

      <FloatingCard className="left-0 top-20" icon={<BrainCircuit size={15} />} title="MODELO PREDICTIVO" value="98.2%" />
      <FloatingCard className="right-0 top-40" icon={<Activity size={15} />} title="DATOS ANALIZADOS" value="+10M" />
      <FloatingCard className="bottom-20 left-8" icon={<Zap size={15} />} title="ANÁLISIS" value="EN TIEMPO REAL" />

      <div className="absolute bottom-6 right-4 rounded-xl border border-white/10 bg-[#0a1711]/90 px-4 py-3 text-xs shadow-2xl backdrop-blur-xl">
        <div className="mb-2 flex items-center gap-2 text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-neon" /> DEMO / SIMULACIÓN
        </div>
        <div className="flex gap-5">
          <span>ARG <b className="text-neon">68%</b></span>
          <span>EMP <b className="text-white">11%</b></span>
          <span>BRA <b className="text-white">21%</b></span>
        </div>
      </div>
    </div>
  );
}

function FloatingCard({
  className,
  icon,
  title,
  value,
}: {
  className: string;
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <motion.div
      className={`absolute z-20 rounded-2xl border border-white/10 bg-[#0b1711]/90 p-4 shadow-2xl backdrop-blur-xl ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.15em] text-slate-500">
        <span className="text-neon">{icon}</span>{title}
      </div>
      <div className="mt-2 text-xl font-black text-white">{value}</div>
    </motion.div>
  );
}

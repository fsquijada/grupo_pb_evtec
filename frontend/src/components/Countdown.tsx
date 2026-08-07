import { useEffect, useState } from "react";
import { env } from "../config/env";
import { Section } from "./Section";

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; }

function calculateTimeLeft(target: string): TimeLeft {
  const difference = Math.max(0, new Date(target).getTime() - Date.now());
  const totalSeconds = Math.floor(difference / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function Countdown() {
  const [time, setTime] = useState(() => calculateTimeLeft(env.launchDate));

  useEffect(() => {
    const timer = window.setInterval(() => setTime(calculateTimeLeft(env.launchDate)), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const items = [
    ["DÍAS", time.days],
    ["HRS", time.hours],
    ["MIN", time.minutes],
    ["SEG", time.seconds],
  ];

  return (
    <Section className="py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:flex-row sm:px-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon">El lanzamiento se acerca</p>
          <p className="mt-1 text-sm text-slate-400">Regístrate para recibir novedades y acceso anticipado.</p>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {items.map(([label, value]) => (
            <div key={label} className="min-w-[58px] rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-center">
              <div className="font-mono text-xl font-bold text-white">{String(value).padStart(2, "0")}</div>
              <div className="text-[9px] tracking-widest text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

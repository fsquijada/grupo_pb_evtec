import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  ["+10M", "datos analizados"],
  ["250+", "variables consideradas"],
  ["94.7%", "precisión histórica*"],
];

export function Stats() {
  return (
    <Section>
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
        {stats.map(([value, label], index) => (
          <motion.div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="text-4xl font-black tracking-tight text-white">{value}</div>
            <div className="mt-2 text-sm text-slate-500">{label}</div>
          </motion.div>
        ))}
      </div>
      <p className="mx-auto mt-4 max-w-7xl text-xs text-slate-600">
        * Datos simulados utilizados únicamente para demostrar la experiencia del producto.
      </p>
    </Section>
  );
}

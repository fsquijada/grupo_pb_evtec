import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["Cómo funciona", "#how-it-works"],
  ["Tecnología", "#features"],
  ["Predicciones", "#prediction"],
  ["FAQ", "#faq"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#06100c]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-2 font-black tracking-tight text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-neon text-sm text-[#06100c]">P</span>
          <span>PREDIX<span className="text-neon">.</span></span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}
          <a href="#register" className="btn-primary !px-4 !py-2.5 text-sm">
            Acceso anticipado <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-[#06100c] md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-5">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-4 text-slate-200"
                >
                  {label}
                </a>
              ))}
              <a href="#register" onClick={() => setOpen(false)} className="btn-primary mt-5">
                Quiero acceso anticipado <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

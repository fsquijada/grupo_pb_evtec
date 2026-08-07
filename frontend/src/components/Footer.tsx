export function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="font-black text-white">PREDIX<span className="text-neon">.</span></div>
          <p className="mt-2 text-xs text-slate-600">AI Football Intelligence</p>
        </div>
        <div className="text-left text-xs text-slate-600 sm:text-right">
          <div className="mb-2 flex gap-5 sm:justify-end">
            <a href="#how-it-works" className="hover:text-white">Cómo funciona</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#register" className="hover:text-white">Contacto</a>
          </div>
          <p>© 2026 PREDIX AI · Proyecto conceptual</p>
          <p className="mt-1">Este sitio es una demostración conceptual.</p>
        </div>
      </div>
    </footer>
  );
}

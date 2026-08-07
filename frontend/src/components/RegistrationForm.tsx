import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, ShieldCheck, User } from "lucide-react";
import { Section } from "./Section";
import type { RegistrationData } from "../types";
import type { RegistrationService } from "../services/registrationService";

interface Props { service: RegistrationService; }

export function RegistrationForm({ service }: Props) {
  const [form, setForm] = useState<RegistrationData>({ name: "", email: "", consent: false, website: "", });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (form.name.trim().length < 2) return setError("Ingresa tu nombre completo.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError("Ingresa un correo válido.");
    if (!form.consent) return setError("Necesitamos tu autorización para enviarte novedades.");
    setError("");
    setStatus("loading");
    try {
      await service.register(form);
      setStatus("success");
      setForm({ name: "", email: "", consent: false, website: "" });
    } catch {
      setStatus("error");
      setError("No pudimos completar el registro. Intenta nuevamente.");
    }
  };

  return (
    <Section id="register">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-neon/10 bg-gradient-to-br from-neon/[0.08] via-white/[0.025] to-transparent lg:grid-cols-[1fr_.8fr]">
        <div className="p-7 sm:p-10 lg:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-neon">Acceso anticipado</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Sé de los primeros en probar PREDIX.</h2>
          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            Estamos preparando el lanzamiento de nuestro agente de predicciones deportivas.
            Regístrate para recibir acceso anticipado, novedades y las primeras experiencias disponibles.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-neon" /> Sin spam</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-neon" /> Acceso prioritario</span>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#07110c]/80 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
          {status === "success" ? (
            <div className="flex h-full min-h-[360px] flex-col justify-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-neon/10 text-neon"><CheckCircle2 size={30} /></div>
              <h3 className="mt-6 text-2xl font-black text-white">¡Estás dentro! ⚡</h3>
              <p className="mt-3 leading-7 text-slate-400">Hemos registrado tu interés en PREDIX. Te avisaremos cuando el lanzamiento esté disponible.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <label className="mb-5 block">
                <span className="mb-2 block text-xs font-semibold text-slate-400">Nombre completo</span>
                <div className="relative"><User className="input-icon" size={17} /><input className="input pl-11" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" /></div>
              </label>
              <label className="mb-5 block">
                <span className="mb-2 block text-xs font-semibold text-slate-400">Correo electrónico</span>
                <div className="relative"><Mail className="input-icon" size={17} /><input className="input pl-11" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@correo.com" /></div>
              </label>
              <label className="flex cursor-pointer gap-3 text-xs leading-5 text-slate-500">
                <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-1 accent-lime-400" />
                Acepto recibir información relacionada con el lanzamiento de PREDIX.
              </label>
              {error && <p role="alert" className="mt-4 text-sm text-red-300">{error}</p>}
              <button disabled={status === "loading"} className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60">
                {status === "loading" ? <><Loader2 className="animate-spin" size={18} /> Registrando...</> : <>Quiero acceso anticipado <CheckCircle2 size={18} /></>}
              </button>
              <p className="mt-4 text-center text-[10px] text-slate-600">No compartiremos tus datos con terceros para publicidad.</p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950 font-sans">
      {/* 1. FONDO INMERSIVO (CAPA DE IMAGEN Y GRADIENTE) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950 z-10" />
        <div
          className="w-full h-full bg-cover bg-center grayscale opacity-40 scale-110 animate-pulse-slow"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&q=80')",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LADO IZQUIERDO: INFORMACIÓN CORPORATIVA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-40"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-green-500 font-black tracking-[0.5em] text-[10px] uppercase mb-4 block"
            >
              Exportación Directa • Lima, Perú
            </motion.span>

            <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.85] mb-8">
              Global <br /> <span className="text-green-600">Contact.</span>
            </h1>

            <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-md mb-12">
              Atendemos requerimientos técnicos para las industrias más
              exigentes del mundo desde nuestro hub estratégico en Lima.
            </p>

            {/* TARJETAS DE CONTACTO RÁPIDO */}
            <div className="space-y-4">
              {[
                {
                  icon: <MapPin size={18} />,
                  t: "Sede Central",
                  c: "Lima, Perú - Sector Industrial",
                },
                {
                  icon: <Mail size={18} />,
                  t: "Consultas Técnicas",
                  c: "ventas@tanninsandgums.com",
                },
                {
                  icon: <Phone size={18} />,
                  t: "Atención B2B",
                  c: "+51 1 748 2200",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-600/20 text-green-500 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                      {item.t}
                    </p>
                    <p className="text-white font-bold text-sm">{item.c}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CERTIFICACIÓN VISIBLE */}
            <div className="mt-12 flex items-center gap-4 p-5 rounded-3xl border border-white/10 bg-white/5 w-fit">
              <ShieldCheck className="text-green-500" size={32} />
              <p className="text-xs font-black text-white uppercase tracking-tighter italic">
                BPM & HACCP <br />{" "}
                <span className="text-slate-500">Certified Facility</span>
              </p>
            </div>
          </motion.div>

          {/* LADO DERECHO: FORMULARIO DE ALTA LEGIBILIDAD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-3xl p-8 md:p-12 rounded-[3.5rem] border border-white/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />

              <h3 className="text-2xl font-black text-white uppercase italic mb-8">
                Formulario de Cotización
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-green-500 uppercase tracking-widest ml-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Juan Pérez"
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-green-500 focus:bg-white/10 transition-all text-white placeholder:text-slate-400 font-bold text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-green-500 uppercase tracking-widest ml-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre corporativo"
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-green-500 focus:bg-white/10 transition-all text-white placeholder:text-slate-400 font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-green-500 uppercase tracking-widest ml-2">
                    Email de Negocios
                  </label>
                  <input
                    type="email"
                    placeholder="correo@empresa.com"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-green-500 focus:bg-white/10 transition-all text-white placeholder:text-slate-400 font-bold text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-green-500 uppercase tracking-widest ml-2">
                    Producto de Interés
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-green-500 focus:bg-slate-900 transition-all text-white font-bold text-sm appearance-none cursor-pointer">
                    <option className="bg-slate-900">
                      Seleccione un producto
                    </option>
                    <option className="bg-slate-900">Goma de Tara</option>
                    <option className="bg-slate-900">Polvo de Tara</option>
                    <option className="bg-slate-900">Germen de Tara</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-green-500 uppercase tracking-widest ml-2">
                    Especificaciones / Volumen
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describa cantidad (TM) y aplicación técnica..."
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-green-500 focus:bg-white/10 transition-all text-white placeholder:text-slate-400 font-bold text-sm resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#22c55e" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 transition-all shadow-xl shadow-green-900/40 mt-4"
                >
                  Enviar Mensaje <ArrowRight size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

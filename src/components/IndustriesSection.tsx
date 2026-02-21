"use client";

import { motion } from "framer-motion";

const industries = [
  "Alimentaria",
  "Farmacéutica",
  "Cosmética",
  "Curtiembre",
  "Nutrición Animal",
  "Textil",
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-slate-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* LADO IZQUIERDO: CONTENIDO */}
        <div className="md:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Versatilidad en cada <br />
              <span className="text-green-600">industria global</span>
            </h2>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-md">
              Desde la estabilización de alimentos hasta el curtido de cueros de
              alta gama, nuestros derivados son el estándar de calidad
              internacional.
            </p>
          </motion.div>

          {/* GRID DE ETIQUETAS: Animación suave y repetitiva */}
          <div className="grid grid-cols-2 gap-3">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-green-500/50 hover:shadow-md transition-all group"
              >
                <div className="w-1.5 h-6 bg-green-500 rounded-full group-hover:scale-y-125 transition-transform" />
                <span className="font-bold text-slate-700">{ind}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LADO DERECHO: COMPOSICIÓN VISUAL (Efecto de tarjetas apiladas) */}
        <div className="md:w-1/2 relative h-[450px] w-full">
          {/* Tarjeta Principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 z-10 bg-slate-300 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white"
          >
            {/* Representación de imagen de Tara/Planta */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-900/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                Calidad Exportación
              </p>
              <p className="text-xl font-bold">Hecho en Perú</p>
            </div>
          </motion.div>

          {/* Decoración: Círculo flotante */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-32 h-32 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          />

          {/* Decoración: Cuadrado geométrico */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-8 -right-8 w-48 h-48 bg-emerald-100 rounded-[2rem] -z-10"
          />
        </div>
      </div>
    </section>
  );
}

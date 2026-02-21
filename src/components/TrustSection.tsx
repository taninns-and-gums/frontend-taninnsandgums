"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-black text-slate-900 leading-tight">
            Suministro Confiable y <br />
            <span className="text-green-600">Escalable</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            En **Tannins and Gums**, entendemos que la continuidad de su
            producción depende de nosotros. Por ello, mantenemos un stock
            estratégico y una logística optimizada desde el puerto del Callao.
          </p>
          <div className="space-y-4">
            {[
              "Capacidad de producción de 5,000 TM/año",
              "Trazabilidad completa desde el origen",
              "Asistencia técnica personalizada",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 font-bold text-slate-800"
              >
                <CheckCircle2 className="text-green-500" /> {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="aspect-video bg-slate-900 rounded-[3rem] overflow-hidden relative"
        >
          {/* Aquí iría un video de la planta o una imagen de alta calidad */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/20 font-black text-4xl italic uppercase">
              Industrial Facility Lima
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

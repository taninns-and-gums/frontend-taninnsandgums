"use client";

import { motion } from "framer-motion";
import { Factory, Award, GlobeLock, Leaf } from "lucide-react";

const certifications = [
  {
    name: "BPM / GMP",
    description:
      "Buenas Prácticas de Manufactura para garantizar inocuidad alimentaria.",
    icon: <Factory size={42} />,
  },
  {
    name: "HACCP",
    description:
      "Análisis de Peligros y Puntos de Control Críticos en toda la línea.",
    icon: <GlobeLock size={42} />,
  },
  {
    name: "ISO 9001",
    description:
      "Estándar internacional de gestión de calidad en nuestros procesos.",
    icon: <Award size={42} />,
  },
  {
    name: "Certificación Orgánica",
    description:
      "Compromiso con productos naturales libres de químicos sintéticos.",
    icon: <Leaf size={42} />,
  },
];

export function QualityAndCertifications() {
  return (
    <section className="py-24 bg-slate-900 text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Cabecera de la sección animada */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Excelencia Certificada
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Nuestro compromiso con la industria global se respalda en
            certificaciones internacionales que avalan cada etapa de nuestra
            producción en Lima.
          </p>
        </motion.div>

        {/* Grid de Certificados con Re-animación en Scroll */}
        <div className="grid md:grid-cols-4 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="relative group bg-slate-800/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-slate-700 hover:border-green-500/50 hover:bg-slate-800 transition-all duration-300 overflow-hidden"
            >
              {/* Efecto de resplandor de fondo al pasar el mouse */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-[2.5rem] opacity-0 group-hover:opacity-10 blur transition duration-500" />

              <div className="relative z-10">
                <motion.div
                  whileInView={{
                    rotateY: [0, 360],
                    transition: { duration: 1.5, delay: i * 0.2 },
                  }}
                  viewport={{ once: false }}
                  className="text-green-500 mb-6 flex justify-center"
                >
                  {cert.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                  {cert.name}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2010",
    title: "Fundación",
    desc: "Iniciamos operaciones en Lima enfocados en la recolección sostenible de Tara.",
  },
  {
    year: "2015",
    title: "Planta de Procesamiento",
    desc: "Inauguramos nuestra infraestructura con tecnología de separación de última generación.",
  },
  {
    year: "2020",
    title: "Expansión Global",
    desc: "Alcanzamos los 30 países de exportación en los 5 continentes.",
  },
  {
    year: "2026",
    title: "Liderazgo en Bio",
    desc: "Consolidación como proveedores clave para la industria Clean Label internacional.",
  },
];

export function TimelineSection() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: false }}
          className="text-3xl font-black text-slate-950 uppercase italic mb-20 text-center tracking-tighter"
        >
          Nuestra <span className="text-green-600">Evolución</span>
        </motion.h3>

        <div className="relative border-l-4 border-slate-100 ml-4 md:ml-0 md:flex md:border-l-0 md:border-t-4 md:pt-12 gap-8">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.2 }}
              className="relative mb-12 md:mb-0 md:w-1/4 pl-8 md:pl-0"
            >
              {/* Círculo indicador */}
              <div className="absolute -left-[22px] md:-top-[58px] md:left-0 w-10 h-10 bg-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-[10px] font-black">
                {m.year}
              </div>
              <h4 className="text-xl font-black text-slate-950 mb-3 uppercase tracking-tight">
                {m.title}
              </h4>
              <p className="text-slate-700 text-sm font-medium leading-relaxed">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

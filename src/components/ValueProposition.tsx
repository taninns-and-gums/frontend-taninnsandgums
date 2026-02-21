"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Globe, Beaker } from "lucide-react";

const features = [
  {
    title: "Calidad Premium",
    desc: "Procesos bajo normas BPM con maquinaria de acero inoxidable.",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "Sostenibilidad",
    desc: "Trabajamos con comunidades locales promoviendo el comercio justo.",
    icon: <Leaf size={32} />,
  },
  {
    title: "Logística Global",
    desc: "Presencia en más de 50 países con tiempos de entrega optimizados.",
    icon: <Globe size={32} />,
  },
  {
    title: "I+D Aplicado",
    desc: "Laboratorio propio para control de calidad y desarrollo de soluciones.",
    icon: <Beaker size={32} />,
  },
];

export function ValueProposition() {
  return (
    <section className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }} // Se repite al hacer scroll
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="group text-center p-8 rounded-3xl hover:bg-slate-50 transition-colors"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mb-6 inline-block p-5 bg-green-50 text-green-600 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-all"
              >
                {f.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {f.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

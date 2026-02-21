"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Años de Experiencia", value: "15+" },
  { label: "Países de Destino", value: "50+" },
  { label: "Toneladas Anuales", value: "5000+" },
  { label: "Clientes Globales", value: "200+" },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <motion.div
              initial={{ scale: 1 }}
              whileInView={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
              className="text-5xl md:text-7xl font-black text-green-500 mb-4"
            >
              {stat.value}
            </motion.div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

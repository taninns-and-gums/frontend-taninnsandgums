"use client";
import { motion } from "framer-motion";
import { Factory, Truck, Search, CheckCircle2, Leaf } from "lucide-react";

const steps = [
  {
    title: "Recolección",
    desc: "Selección manual de vainas de Tara de los valles andinos del Perú.",
    icon: <Leaf />,
  },
  {
    title: "Molienda y Separación",
    desc: "Procesos mecánicos de alta precisión para separar germen, polvo y goma.",
    icon: <Factory />,
  },
  {
    title: "Control de Calidad",
    desc: "Análisis de viscosidad y pureza en nuestro laboratorio de Lima.",
    icon: <Search />,
  },
  {
    title: "Exportación Global",
    desc: "Embalaje técnico y despacho a más de 50 países.",
    icon: <Truck />,
  },
];

export function ProductionProcess() {
  return (
    <section className="py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            De los Andes al <span className="text-green-600">Mundo</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Nuestro proceso integra tecnología avanzada con prácticas
            sostenibles para garantizar derivados de pureza superior.
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea conectora (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-200">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

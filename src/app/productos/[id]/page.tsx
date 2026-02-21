"use client";

import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Download,
  Beaker,
  Leaf,
  Zap,
  ChevronRight,
  Globe,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

// --- BASE DE DATOS DINÁMICA ---
const productDetails: any = {
  "goma-de-tara": {
    id: "goma-de-tara",
    name: "Goma de Tara",
    tagline: "Hidrocoloide de Alta Performance",
    description:
      "Espesante natural de etiqueta limpia (Clean Label), procesado para cumplir con los estándares de viscosidad más exigentes de la industria alimentaria internacional.",
    specs: [
      { l: "Viscosidad", v: "2,500 - 5,200 cps" },
      { l: "Pureza", v: "99.8%" },
      { l: "Malla", v: "100 - 200 mesh" },
    ],
    applications: [
      { sector: "Alimentaria", uso: "Estabilizante en helados y salsas." },
      { sector: "Lácteos", uso: "Mejora la textura en yogures y quesos." },
      { sector: "Cosmética", uso: "Espesante natural para geles y cremas." },
      { sector: "Panificación", uso: "Retención de humedad en masas." },
    ],
    color: "green",
    accent: "bg-green-600",
    textAccent: "text-green-500",
    icon: <Beaker size={40} />,
  },
  "polvo-de-tara": {
    id: "polvo-de-tara",
    name: "Polvo de Tara",
    tagline: "Taninos Vegetales Sustentables",
    description:
      "Líder en el curtido de cueros de lujo. Ofrece una fijación excepcional y es 100% libre de metales pesados, ideal para la moda sostenible y automotriz.",
    specs: [
      { l: "Taninos", v: "> 62%" },
      { l: "Humedad", v: "< 10%" },
      { l: "Cenizas", v: "< 1.5%" },
    ],
    applications: [
      { sector: "Curtiembre", uso: "Curtido vegetal para cueros premium." },
      { sector: "Textil", uso: "Colorantes y fijadores naturales." },
      { sector: "Vinos", uso: "Clarificación y estabilización tánica." },
      { sector: "Química", uso: "Antioxidantes de origen vegetal." },
    ],
    color: "amber",
    accent: "bg-amber-600",
    textAccent: "text-amber-500",
    icon: <Leaf size={40} />,
  },
  "germen-de-tara": {
    id: "germen-de-tara",
    name: "Germen de Tara",
    tagline: "Proteína Vegetal Concentrada",
    description:
      "Ingrediente premium para nutrición animal. Con alto contenido proteico, es la elección ideal para alimentos balanceados y Pet Food de alta gama.",
    specs: [
      { l: "Proteína", v: "43% - 47%" },
      { l: "Grasa", v: "6% - 8%" },
      { l: "Fibra", v: "max 9%" },
    ],
    applications: [
      { sector: "Pet Food", uso: "Proteína de alta digestibilidad." },
      { sector: "Acuicultura", uso: "Suplemento para peces y camarones." },
      { sector: "Ganadería", uso: "Mejora del perfil aminoacídico." },
      { sector: "Avícola", uso: "Nutrición para aves de alta postura." },
    ],
    color: "emerald",
    accent: "bg-emerald-600",
    textAccent: "text-emerald-500",
    icon: <Zap size={40} />,
  },
};

export default function ProductPage() {
  const params = useParams();
  const product = productDetails[params.id as string];

  if (!product)
    return (
      <div className="h-screen flex items-center justify-center">
        Producto no encontrado
      </div>
    );

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 1. HERO SECTION: Impacto Visual y Legibilidad */}
      <section className="relative h-[75vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10`}
          />
          <div
            className={`absolute inset-0 opacity-20 ${product.accent} blur-[120px]`}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div
              className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 ${product.textAccent} font-bold text-xs tracking-[0.3em] uppercase`}
            >
              {product.icon} {product.tagline}
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none italic uppercase tracking-tighter">
              {product.name}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 font-light max-w-xl">
              {product.description}
            </p>
            <button
              className={`${product.accent} text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-black/20 uppercase text-sm tracking-widest`}
            >
              <Download size={20} /> Ficha Técnica PDF
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. ESPECIFICACIONES TÉCNICAS: Repetición en Scroll */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center border-b border-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-black text-slate-900 leading-tight">
            Excelencia Analítica en cada{" "}
            <span className={product.textAccent}>Partícula</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-slate-200 pl-6">
            Certificamos cada lote en nuestro laboratorio de control de calidad
            para asegurar que Tannins and Gums mantenga su liderazgo en el
            mercado global.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {product.specs.map((s: any, i: number) => (
              <motion.div
                key={i}
                whileInView={{ x: [0, 15, 0] }}
                viewport={{ once: false }}
                className="flex justify-between items-center p-7 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-lg transition-all"
              >
                <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">
                  {s.l}
                </span>
                <span className="text-2xl font-black text-slate-900">
                  {s.v}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false }}
          className="bg-slate-100 rounded-[4rem] aspect-square flex items-center justify-center relative overflow-hidden shadow-inner"
        >
          <div className={`absolute inset-0 opacity-10 ${product.accent}`} />
          <div className="text-slate-300 font-black text-2xl uppercase tracking-[0.5em] rotate-90">
            Industrial Grade
          </div>
        </motion.div>
      </section>

      {/* 3. APLICACIONES MULTISECTORIALES */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">
              Aplicaciones{" "}
              <span className={product.textAccent}>Específicas</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.applications.map((app: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all"
              >
                <div
                  className={`w-12 h-1.5 ${product.accent} mb-6 rounded-full`}
                />
                <h4 className="text-xl font-black mb-3 text-slate-900 uppercase tracking-tight">
                  {app.sector}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {app.uso}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRAZABILIDAD (ORIGEN PERÚ) */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-5xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
              Trazabilidad <br />
              Total desde <br />
              <span className="text-green-500 text-7xl">Lima, Perú</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light">
              Cada kilogramo de producto cuenta con un registro completo de
              origen, garantizando que la materia prima recolectada en los Andes
              cumpla con los estándares globales.
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-black italic">100%</span>
                <span className="text-[10px] text-green-500 font-bold tracking-[0.3em] uppercase">
                  Natural
                </span>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-black italic">BPM</span>
                <span className="text-[10px] text-green-500 font-bold tracking-[0.3em] uppercase">
                  Certified
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            className="md:w-1/2 w-full aspect-square bg-white/5 border border-white/10 rounded-[4rem] flex items-center justify-center relative overflow-hidden"
          >
            <Globe size={180} className="text-white/5" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`absolute inset-0 ${product.accent} blur-[100px]`}
            />
          </motion.div>
        </div>
      </section>

      {/* 5. QUICK SELECTOR (NAVEGACIÓN DE PRODUCTOS) - CORREGIDO */}
      <section className="py-24 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-center text-sm font-black tracking-[0.4em] text-slate-600 uppercase mb-16"
          >
            Explorar otros derivados
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(productDetails).map((p: any) => {
              const isCurrent = p.id === product.id;

              return (
                <Link
                  key={p.id}
                  href={`/productos/${p.id}`}
                  className={isCurrent ? "pointer-events-none" : ""}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    // CORRECCIÓN: Usamos boxShadow en lugar de shadow
                    whileHover={
                      !isCurrent
                        ? {
                            y: -15,
                            boxShadow:
                              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }
                        : {}
                    }
                    className={`p-10 rounded-[3rem] bg-white border-2 transition-all flex flex-col items-center text-center h-full ${
                      isCurrent
                        ? "border-slate-900 opacity-50"
                        : "border-transparent shadow-sm hover:border-slate-300"
                    }`}
                  >
                    <div
                      className={`mb-6 p-4 rounded-2xl bg-slate-100 ${p.textAccent}`}
                    >
                      {p.icon}
                    </div>

                    {/* Contraste Máximo: Texto casi negro sobre blanco */}
                    <h4 className="text-2xl font-black uppercase italic mb-3 tracking-tighter text-slate-950">
                      {p.name}
                    </h4>

                    {/* Texto secundario: slate-800 para legibilidad perfecta */}
                    <p className="text-slate-800 text-sm font-bold mb-8 leading-snug">
                      {p.tagline}
                    </p>

                    {!isCurrent && (
                      <div
                        className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-widest ${p.textAccent} mt-auto`}
                      >
                        Ver Detalles <ChevronRight size={16} />
                      </div>
                    )}

                    {isCurrent && (
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-auto">
                        Producto Actual
                      </span>
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

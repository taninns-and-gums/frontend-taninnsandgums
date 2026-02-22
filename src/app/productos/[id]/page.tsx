"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Download, Beaker, Leaf, Zap, ChevronRight, Globe } from "lucide-react";
import Link from "next/link";

// --- BASE DE DATOS DINÁMICA ---
const productDetails: any = {
  "goma-de-tara": {
    id: "goma-de-tara",
    name: "Goma de Tara",
    tagline: "Hidrocoloide de Alta Performance",
    description:
      "Espesante natural de etiqueta limpia (Clean Label), procesado para cumplir con los estándares de viscosidad más exigentes de la industria alimentaria internacional.",
    image: "/images/goma.png",
    pdf: "/docs/pdf-test.pdf", // Ruta al PDF
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
    image: "/images/polvo.png",
    pdf: "/docs/pdf-test.pdf",
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
    image: "/images/germen.png",
    pdf: "/docs/pdf-test.pdf",
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
      <div className="h-screen flex items-center justify-center font-bold">
        Producto no encontrado
      </div>
    );

  return (
    <main className="bg-white min-h-screen font-sans">
      {/* 1. HERO SECTION: CENTRADO MÓVIL */}
      <section className="relative min-h-[90vh] md:h-[75vh] flex items-center overflow-hidden bg-slate-950 pt-32 pb-12 md:pt-0 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-transparent z-10" />
          <div
            className={`absolute inset-0 opacity-20 ${product.accent} blur-[120px]`}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl flex flex-col items-center text-center md:items-start md:text-left mx-auto md:mx-0"
          >
            <div
              className={`inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-xl bg-white/5 border border-white/10 ${product.textAccent} font-black text-[10px] md:text-xs tracking-[0.3em] uppercase backdrop-blur-md`}
            >
              <span className="shrink-0 scale-75 md:scale-100">
                {product.icon}
              </span>
              <span className="leading-none">{product.tagline}</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 md:mb-8 leading-none italic uppercase tracking-tighter">
              {product.name}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 font-light max-w-xl">
              {product.description}
            </p>

            {/* BOTÓN DE DESCARGA PDF FUNCIONAL */}
            <a
              href={product.pdf}
              download
              className={`${product.accent} text-white w-full md:w-auto px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl uppercase text-xs md:text-sm tracking-widest`}
            >
              <Download size={20} /> Ficha Técnica PDF
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. ESPECIFICACIONES TÉCNICAS */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-slate-100">
        <div className="space-y-8 flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="text-4xl font-black text-slate-900 leading-tight">
            Excelencia Analítica en cada{" "}
            <span className={product.textAccent}>Partícula</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 w-full">
            {product.specs.map((s: any, i: number) => (
              <div
                key={i}
                className="flex justify-between items-center p-7 bg-slate-50 rounded-3xl border border-slate-100 transition-all"
              >
                <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">
                  {s.l}
                </span>
                <span className="text-xl md:text-2xl font-black text-slate-900">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-slate-100 rounded-[3rem] md:rounded-[4rem] aspect-square flex items-center justify-center relative overflow-hidden shadow-inner w-full"
        >
          <div className={`absolute inset-0 opacity-10 ${product.accent}`} />
          <motion.img
            src={product.image}
            alt={product.name}
            className="relative z-10 w-4/5 h-4/5 object-contain drop-shadow-2xl"
          />
        </motion.div>
      </section>

      {/* SECCIÓN DE TRAZABILIDAD (Mantenida por coherencia) */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20 text-center lg:text-left">
          <div className="lg:w-1/2">
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
              Trazabilidad desde <br />{" "}
              <span className="text-green-500 text-6xl md:text-7xl">
                Lima, Perú
              </span>
            </h3>
            <div className="flex gap-10 justify-center lg:justify-start">
              <div className="flex flex-col gap-1 items-center lg:items-start">
                <span className="text-4xl font-black italic">100%</span>
                <span className="text-[10px] text-green-500 font-bold uppercase">
                  Natural
                </span>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="flex flex-col gap-1 items-center lg:items-start">
                <span className="text-4xl font-black italic">BPM</span>
                <span className="text-[10px] text-green-500 font-bold uppercase">
                  Certified
                </span>
              </div>
            </div>
          </div>
          <motion.div className="w-full lg:w-1/2 aspect-square bg-white/5 border border-white/10 rounded-[3rem] flex items-center justify-center relative overflow-hidden group shadow-2xl">
            <motion.img
              src="/images/g1.jpeg"
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
            />
            <div className="relative z-10 p-8 bg-black/40 backdrop-blur-xl rounded-full border border-white/10">
              <Globe size={80} className="text-green-500 md:w-25 md:h-25" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-green-500 blur-[120px]"
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

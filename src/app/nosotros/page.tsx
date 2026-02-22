"use client";

import { TeamSection } from "@/components/TeamSection";
import { TimelineSection } from "@/components/TimelineSection";
import { motion } from "framer-motion";
import { Target, Award, CheckCircle2, Leaf } from "lucide-react";

const values = [
  {
    title: "Sostenibilidad",
    desc: "Preservamos la biodiversidad andina mediante cosechas responsables y comercio justo con comunidades locales.",
    icon: <Leaf className="text-green-500" size={32} />,
  },
  {
    title: "Innovación",
    desc: "Inversión constante en tecnología de molienda y separación para obtener derivados de pureza superior.",
    icon: <Target className="text-green-500" size={32} />,
  },
  {
    title: "Excelencia",
    desc: "Control riguroso de calidad en nuestro laboratorio de Lima para cumplir estándares internacionales.",
    icon: <Award className="text-green-500" size={32} />,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO: Nuestra Identidad */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950 z-10" />
          <div className="w-full h-full bg-[url('/images/p2.webp')] bg-cover bg-center opacity-30 grayscale" />
        </div>

        <div className="relative z-20 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-500 font-black tracking-[0.5em] uppercase text-xs mb-4"
          >
            Tannins and Gums
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter"
          >
            Nuestra <span className="text-green-500">Historia</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. MISIÓN Y VISIÓN: Centrado dinámico en móvil */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="flex flex-col items-center text-center md:items-start md:text-left space-y-6"
          >
            <h2 className="text-4xl font-black text-slate-950 italic uppercase tracking-tight leading-none">
              Líderes en Derivados <br /> de la{" "}
              <span className="text-green-600">Tara Peruana</span>
            </h2>
            <p className="text-slate-800 text-lg font-medium leading-relaxed max-w-lg">
              Ubicados estratégicamente en Lima, somos una empresa dedicada a la
              transformación de la Tara en soluciones industriales para los
              mercados de alimentos, farmacia y curtiembre más exigentes del
              mundo.
            </p>
            <div className="pt-4 space-y-4 w-full flex flex-col items-center md:items-start">
              {[
                "Más de 15 años de experiencia exportadora",
                "Planta con certificación BPM y HACCP",
                "Impacto social positivo en zonas rurales",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-950 font-bold text-sm"
                >
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />{" "}
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CONTENEDOR DE IMAGEN DE PLANTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="group relative bg-slate-100 rounded-[3rem] aspect-square overflow-hidden shadow-2xl w-full"
          >
            {/* Imagen Real de la Planta */}
            <motion.img
              src="/images/g3.webp"
              alt="Planta de Producción Tannins and Gums Lima"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            {/* Etiqueta Flotante - Centrada en móvil, abajo izquierda en web */}
            <div className="absolute bottom-6 left-0 right-0 md:left-10 md:bottom-10 text-center md:text-left text-white font-black uppercase text-[10px] md:text-xs tracking-widest px-4 z-20">
              <span className="border-l-4 border-green-600 pl-4 inline-block">
                Planta de Producción <br />
                <span className="text-green-500">Lima - Perú</span>
              </span>
            </div>

            {/* Brillo ambiental */}
            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>
      </section>

      {/* 3. VALORES CORPORATIVOS */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-20"
          >
            <h3 className="text-3xl font-black italic uppercase tracking-tighter">
              Principios que nos <span className="text-green-500">Definen</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h4 className="text-xl font-black mb-4 uppercase tracking-tight text-white">
                  {v.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TimelineSection />
    </main>
  );
}

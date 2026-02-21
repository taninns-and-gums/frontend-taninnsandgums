"use client";

import { TeamSection } from "@/components/TeamSection";
import { TimelineSection } from "@/components/TimelineSection";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Factory,
  Award,
  CheckCircle2,
  Leaf,
  Globe,
} from "lucide-react";

const values = [
  {
    title: "Sostenibilidad",
    desc: "Preservamos la biodiversidad andina mediante cosechas responsables y comercio justo con comunidades locales.",
    icon: <Leaf className="text-green-500" />,
  },
  {
    title: "Innovación",
    desc: "Inversión constante en tecnología de molienda y separación para obtener derivados de pureza superior.",
    icon: <Target className="text-green-500" />,
  },
  {
    title: "Excelencia",
    desc: "Control riguroso de calidad en nuestro laboratorio de Lima para cumplir estándares internacionales.",
    icon: <Award className="text-green-500" />,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO: Nuestra Identidad */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950 z-10" />
          <div className="w-full h-full bg-[url('/images/tara-field.jpg')] bg-cover bg-center opacity-30 grayscale" />
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

      {/* 2. MISIÓN Y VISIÓN: Contraste y Dinamismo */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-black text-slate-950 italic uppercase tracking-tight leading-none">
              Líderes en Derivados <br /> de la{" "}
              <span className="text-green-600">Tara Peruana</span>
            </h2>
            <p className="text-slate-800 text-lg font-medium leading-relaxed">
              Ubicados estratégicamente en Lima, somos una empresa dedicada a la
              transformación de la Tara en soluciones industriales para los
              mercados de alimentos, farmacia y curtiembre más exigentes del
              mundo.
            </p>
            <div className="pt-4 space-y-4">
              {[
                "Más de 15 años de experiencia exportadora",
                "Planta con certificación BPM y HACCP",
                "Impacto social positivo en zonas rurales",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-950 font-bold text-sm"
                >
                  <CheckCircle2 className="text-green-500" size={20} /> {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="bg-slate-100 rounded-[3rem] aspect-square relative overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-green-600/10" />
            <Factory size={120} className="text-slate-300 relative z-10" />
            <div className="absolute bottom-10 left-10 text-slate-950 font-black uppercase text-xs tracking-widest border-l-4 border-green-600 pl-4">
              Planta de Producción <br /> Lima - Perú
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. VALORES CORPORATIVOS: Repetición en Scroll */}
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

          <div className="grid md:grid-cols-3 gap-10">
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
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all"
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

      {/* 4. CIFRAS GLOBALES (Minimalista) */}
      {/* <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="text-center md:text-left"
          >
            <h4 className="text-7xl font-black text-slate-950 italic">50+</h4>
            <p className="text-green-600 font-black uppercase tracking-[0.3em] text-xs">
              Destinos Internacionales
            </p>
          </motion.div>
          <div className="w-px h-16 bg-slate-200 hidden md:block" />
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="text-7xl font-black text-slate-950 italic">5k</h4>
            <p className="text-green-600 font-black uppercase tracking-[0.3em] text-xs">
              TM Producidas Anualmente
            </p>
          </motion.div>
          <div className="w-px h-16 bg-slate-200 hidden md:block" />
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-7xl font-black text-slate-950 italic">100%</h4>
            <p className="text-green-600 font-black uppercase tracking-[0.3em] text-xs">
              Pureza de Origen
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* 5. EQUIPO HUMANO: Personalización y Cercanía */}
      {/* <TeamSection /> */}

      <TimelineSection />
    </main>
  );
}

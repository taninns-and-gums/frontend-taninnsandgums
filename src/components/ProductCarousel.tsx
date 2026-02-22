"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Beaker,
  Leaf,
  Zap,
} from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "goma-de-tara",
    title: "Goma de Tara",
    tagline: "Hidrocoloide Natural Premium",
    desc: "Espesante y estabilizante de alta viscosidad para la industria alimentaria global.",
    gradient: "from-green-900 via-green-800 to-emerald-950",
    accent: "rgba(34, 197, 94, 0.4)",
    icon: <Beaker size={28} />,
  },
  {
    id: "polvo-de-tara",
    title: "Polvo de Tara",
    tagline: "Taninos Vegetales Sustentables",
    desc: "Extracto premium para curtido de cueros de lujo y aplicaciones antioxidantes.",
    gradient: "from-amber-900 via-stone-800 to-orange-950",
    accent: "rgba(245, 158, 11, 0.4)",
    icon: <Leaf size={28} />,
  },
  {
    id: "germen-de-tara",
    title: "Germen de Tara",
    tagline: "Potencia Proteica Vegetal",
    desc: "Concentrado nutricional rico en aminoácidos para pet food y nutrición animal.",
    gradient: "from-emerald-900 via-teal-800 to-slate-950",
    accent: "rgba(16, 185, 129, 0.4)",
    icon: <Zap size={28} />,
  },
];

const TRANSITION_DURATION = 8000;

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const changeStep = (newDirection: number) => {
    setDirection(newDirection);
    setIndex(
      (prev) => (prev + newDirection + products.length) % products.length,
    );
  };

  useEffect(() => {
    if (!isMounted) return;
    const timer = setInterval(() => changeStep(1), TRANSITION_DURATION);
    return () => clearInterval(timer);
  }, [index, isMounted]);

  if (!isMounted) return <div className="h-screen w-full bg-black" />;

  return (
    <main className="relative h-screen w-full bg-black overflow-hidden font-sans">
      {/* 1. FONDO Y PARTÍCULAS (Diseño Industrial Premium) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={`absolute inset-0 bg-linear-to-br ${products[index].gradient}`}
          />
        </AnimatePresence>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ left: `${(i * 7) % 100}%`, top: `${(i * 13) % 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* 2. CONTENIDO ADAPTATIVO (Optimizado iPhone SE) */}
      <div className="absolute inset-0 z-10 flex flex-col overflow-y-auto md:overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.section
            key={index}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? "100%" : "-100%", opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="grow flex items-center justify-center px-6 pt-20 pb-44 md:py-0"
          >
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="flex flex-col items-center text-center md:items-start md:text-left text-white">
                <div className="flex items-center gap-3 mb-4 bg-white/10 p-2 pr-4 rounded-xl border border-white/10 backdrop-blur-md">
                  <div className="p-2 rounded-lg bg-white/10">
                    {products[index].icon}
                  </div>
                  <span className="text-[10px] md:text-xs font-black tracking-widest uppercase">
                    {products[index].tagline}
                  </span>
                </div>

                <h1 className="text-4xl md:text-8xl font-black mb-6 leading-none italic uppercase tracking-tighter">
                  {products[index].title.split(" ").map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h1>

                <p className="text-sm md:text-xl text-white/80 mb-8 max-w-sm md:max-w-md font-medium leading-relaxed italic md:border-l-2 md:border-white/20 md:pl-6">
                  {products[index].desc}
                </p>

                <Link
                  href={`/productos/${products[index].id}`}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-green-500 hover:text-white transition-all active:scale-95"
                >
                  Explorar Producto <ArrowRight size={16} />
                </Link>
              </div>

              <div className="hidden lg:flex justify-end">
                <div className="relative w-80 h-80 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-3xl flex items-center justify-center overflow-hidden">
                  <span className="text-white/10 font-black text-[12rem] italic select-none">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </div>

      {/* 3. NAVEGACIÓN CON PROGRESS SEGMENTADA INTEGRADA */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center px-6 z-50">
        <div className="flex items-center gap-6 p-2 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
          <button
            onClick={() => changeStep(-1)}
            className="p-3 text-white hover:text-green-400 active:scale-75 transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          {/* CONTENEDOR DE INDICADORES SEGMENTADOS */}
          <div className="flex gap-3">
            {products.map((_, i) => (
              <div
                key={i}
                className="relative w-12 md:w-16 h-1 bg-white/20 rounded-full overflow-hidden"
              >
                {/* Esta es la barra que se llena solo para el index activo */}
                {i === index && (
                  <motion.div
                    key={`bar-${index}`} // Reinicia la animación al cambiar de producto
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{
                      duration: TRANSITION_DURATION / 1000,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                  />
                )}
                {/* Si ya pasó, se queda llena; si no ha llegado, vacía */}
                {i < index && <div className="absolute inset-0 bg-white/40" />}
              </div>
            ))}
          </div>

          <button
            onClick={() => changeStep(1)}
            className="p-3 text-white hover:text-green-400 active:scale-75 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </main>
  );
}

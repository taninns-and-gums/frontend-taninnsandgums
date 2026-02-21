"use client";

import React, { useState, useEffect, useRef } from "react";
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

// --- DATOS ---
const products = [
  {
    id: "goma-de-tara",
    title: "Goma de Tara",
    tagline: "Hidrocoloide Natural Premium",
    desc: "Espesante y estabilizante de alta viscosidad para la industria alimentaria global.",
    gradient: "from-green-900 via-green-800 to-emerald-950",
    accent: "rgba(34, 197, 94, 0.4)", // Para las partículas
    icon: <Beaker size={32} />,
  },
  {
    id: "polvo-de-tara",
    title: "Polvo de Tara",
    tagline: "Taninos Vegetales Sustentables",
    desc: "Extracto premium para curtido de cueros de lujo y aplicaciones antioxidantes.",
    gradient: "from-amber-900 via-stone-800 to-orange-950",
    accent: "rgba(245, 158, 11, 0.4)",
    icon: <Leaf size={32} />,
  },
  {
    id: "germen-de-tara",
    title: "Germen de Tara",
    tagline: "Potencia Proteica Vegetal",
    desc: "Concentrado nutricional rico en aminoácidos para pet food y nutrición animal.",
    gradient: "from-emerald-900 via-teal-800 to-slate-950",
    accent: "rgba(16, 185, 129, 0.4)",
    icon: <Zap size={32} />,
  },
];

const TRANSITION_DURATION = 8000;

const ProgressBar = ({ duration, isAnimating, isMounted }: any) => {
  if (!isMounted) return null;
  return (
    <motion.div
      key="progress-bar"
      className="absolute bottom-0 left-0 h-1 bg-white/50 z-20"
      initial={{ width: "0%" }}
      animate={{ width: isAnimating ? "100%" : "0%" }}
      transition={{
        duration: isAnimating ? duration / 1000 : 0,
        ease: "linear",
      }}
    />
  );
};

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const startTimer = setTimeout(() => setIsAnimating(true), 100);
    return () => clearTimeout(startTimer);
  }, []);

  const changeStep = (newDirection: number) => {
    setIsAnimating(false);
    setDirection(newDirection);
    setIndex(
      (prev) => (prev + newDirection + products.length) % products.length,
    );
  };

  useEffect(() => {
    if (!isMounted) return;
    setIsAnimating(true);
    const timer = setTimeout(() => changeStep(1), TRANSITION_DURATION);
    return () => clearTimeout(timer);
  }, [index, isMounted]);

  if (!isMounted) return <div className="h-screen w-full bg-black" />;

  return (
    <main className="relative h-screen w-full bg-black overflow-hidden font-sans">
      {/* --- NUEVO FONDO DINÁMICO --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.2, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: -1 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${products[index].gradient}`}
          />
        </AnimatePresence>

        {/* Orbes de "Resina" Flotantes (Movimiento Orgánico) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 150 - 75, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full blur-[100px] pointer-events-none"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              background: products[index].accent,
              left: `${(i * 20) % 100}%`,
              top: `${(i * 15) % 100}%`,
            }}
          />
        ))}

        {/* Textura de Grano Industrial (Noise) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Vignette de profundidad */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.section
          key={index}
          custom={direction}
          initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction < 0 ? 1000 : -1000, opacity: 0 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0 flex items-center justify-center px-6 md:px-20"
        >
          <ProgressBar
            duration={TRANSITION_DURATION}
            isAnimating={isAnimating}
            isMounted={isMounted}
          />

          {/* Partículas de "Polvo de Tara" (Dinamismo Determinista) */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  x: [0, i % 2 === 0 ? 20 : -20, 0],
                  opacity: [0.1, 0.8, 0.1],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                style={{
                  left: `${(i * 11) % 100}%`,
                  top: `${(i * 17) % 100}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              <div className="flex items-center gap-3 mb-6 text-white/90">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                  {products[index].icon}
                </div>
                <span className="text-sm font-black tracking-[0.4em] uppercase">
                  {products[index].tagline}
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight italic uppercase tracking-tighter">
                {products[index].title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-md font-medium leading-relaxed italic border-l-2 border-white/20 pl-6">
                {products[index].desc}
              </p>

              <Link
                href={`/productos/${products[index].id}`}
                className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-green-500 hover:text-white transition-all group shadow-2xl"
              >
                Explorar Producto{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* ELEMENTO VISUAL DINÁMICO */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="hidden md:flex justify-center"
            >
              <div className="relative w-96 h-96 bg-white/5 border border-white/10 rounded-[5rem] backdrop-blur-3xl flex items-center justify-center group overflow-hidden shadow-2xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 opacity-10 border-[40px] border-dotted border-white rounded-full scale-150"
                />
                <span className="text-white/10 font-black text-[12rem] italic select-none">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* CONTROLES CENTRADOS (Z-INDEX ALTO) */}
      <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-6 z-50">
        <div className="flex items-center gap-8 p-2 bg-black/20 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
          <button
            onClick={() => changeStep(-1)}
            className="p-5 rounded-full text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-90"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="flex gap-4">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                  setIsAnimating(false);
                }}
                className={`h-2.5 transition-all duration-700 rounded-full ${i === index ? "w-16 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" : "w-4 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>

          <button
            onClick={() => changeStep(1)}
            className="p-5 rounded-full text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-90"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </main>
  );
}

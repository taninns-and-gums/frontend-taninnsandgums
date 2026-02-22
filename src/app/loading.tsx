"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-slate-950">
      {/* 1. FONDO CON DEGRADADO DINÁMICO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,#22c55e_0%,transparent_70%)] blur-[120px]"
        />
      </div>

      {/* 2. CONTENEDOR CENTRAL */}
      <div className="relative z-10 flex flex-col items-center">
        {/* LOGO ANIMADO */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl font-black text-white leading-none tracking-tighter italic">
              TANNINS
            </span>
            <span className="text-[12px] font-black tracking-[0.6em] text-green-500 mt-1">
              & GUMS
            </span>
          </motion.div>

          {/* Círculos de pulso decorativos */}
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-2 border-green-500/30 rounded-full -m-4"
          />
        </div>

        {/* 3. INDICADOR DE PROGRESO INDUSTRIAL */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-green-500 shadow-[0_0_15px_#22c55e]"
          />
        </div>

        {/* ETIQUETA DE ESTADO */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]"
        >
          Cargando Excelencia
        </motion.p>
      </div>

      {/* DETALLE TÉCNICO EN LA BASE (Opcional) */}
      <div className="absolute bottom-12 text-center opacity-20">
        <p className="text-[8px] font-medium text-white tracking-widest uppercase">
          Pureza de Origen • Lima, Perú
        </p>
      </div>
    </main>
  );
}

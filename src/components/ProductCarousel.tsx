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
import { useLang } from "@/context/LanguageContext";

const products = [
  {
    id: "goma-de-tara",
    title: {
      es: "Goma de Tara",
      en: "Tara Gum",
      de: "Tarakernmehl",
      zh: "塔拉胶",
    },
    tagline: {
      es: "Hidrocoloide Natural Premium",
      en: "Premium Natural Hydrocolloid",
      de: "Premium Natürliches Hydrokolloid",
      zh: "优质天然亲水胶体",
    },
    desc: {
      es: "Espesante y estabilizante de alta viscosidad para la industria alimentaria global.",
      en: "High-viscosity thickener and stabilizer for the global food industry.",
      de: "Hochviskoses Verdickungs- und Stabilisierungsmittel für die Lebensmittelindustrie.",
      zh: "适用于全球食品工业的高粘度增稠剂和稳定剂。",
    },
    gradient: "from-green-900 via-green-800 to-emerald-950",
    accent: "rgba(34, 197, 94, 0.4)",
    icon: <Beaker size={28} />,
  },
  {
    id: "polvo-de-tara",
    title: {
      es: "Polvo de Tara",
      en: "Tara Powder",
      de: "Tarapulver",
      zh: "塔拉粉",
    },
    tagline: {
      es: "Taninos Vegetales Sustentables",
      en: "Sustainable Vegetable Tannins",
      de: "Nachhaltige Pflanzliche Tannine",
      zh: "可持续植物单宁",
    },
    desc: {
      es: "Extracto premium para curtido de cueros de lujo y aplicaciones antioxidantes.",
      en: "Premium extract for luxury leather tanning and antioxidant applications.",
      de: "Premium-Extrakt für Luxusledergerbung und Antioxidationsanwendungen.",
      zh: "用于奢侈皮革制革和抗氧化应用的优质提取物。",
    },
    gradient: "from-amber-900 via-stone-800 to-orange-950",
    accent: "rgba(245, 158, 11, 0.4)",
    icon: <Leaf size={28} />,
  },
  {
    id: "germen-de-tara",
    title: {
      es: "Germen de Tara",
      en: "Tara Germ",
      de: "Taramahl",
      zh: "塔拉胚芽",
    },
    tagline: {
      es: "Potencia Proteica Vegetal",
      en: "Plant Protein Power",
      de: "Pflanzliche Proteinkraft",
      zh: "植物蛋白力量",
    },
    desc: {
      es: "Concentrado nutricional rico en aminoácidos para pet food y nutrición animal.",
      en: "Nutritional concentrate rich in amino acids for pet food and animal nutrition.",
      de: "Nährstoffkonzentrat reich an Aminosäuren für Tiernahrung.",
      zh: "富含氨基酸的营养浓缩物，适用于宠物食品和动物营养。",
    },
    gradient: "from-emerald-900 via-teal-800 to-slate-950",
    accent: "rgba(16, 185, 129, 0.4)",
    icon: <Zap size={28} />,
  },
];

const TRANSITION_DURATION = 8000;

export default function HomePage() {
  const { lang } = useLang(); // 'es', 'en', 'de', 'zh'
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

  const currentProduct = products[index];
  const tButton = {
    es: "Explorar Producto",
    en: "Explore Product",
    de: "Produkt Erkunden",
    zh: "探索产品",
  };

  return (
    <main className="relative h-screen w-full bg-black overflow-hidden font-sans">
      {/* 1. FONDO Y PARTÍCULAS */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={`absolute inset-0 bg-linear-to-br ${currentProduct.gradient}`}
          />
        </AnimatePresence>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -100, 0], opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ left: `${(i * 7) % 100}%`, top: `${(i * 13) % 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* 2. CONTENIDO ADAPTATIVO */}
      <div className="absolute inset-0 z-10 flex flex-col overflow-y-auto md:overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.section
            key={`${index}-${lang}`} // Reinicia si cambia producto o idioma
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? "100%" : "-100%", opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="grow flex items-center justify-center px-6 pt-24 pb-48 md:py-0"
          >
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
              <div className="flex flex-col items-center text-center md:items-start md:text-left text-white">
                <div className="flex items-center gap-3 mb-6 bg-white/10 p-2 pr-4 rounded-xl border border-white/10 backdrop-blur-md">
                  <div className="p-2 rounded-lg bg-white/10">
                    {currentProduct.icon}
                  </div>
                  <span className="text-[10px] md:text-xs font-black tracking-widest uppercase">
                    {
                      currentProduct.tagline[
                        lang as keyof typeof currentProduct.tagline
                      ]
                    }
                  </span>
                </div>

                <h1 className="text-4xl md:text-8xl font-black mb-6 leading-none italic uppercase tracking-tighter">
                  {currentProduct.title[
                    lang as keyof typeof currentProduct.title
                  ]
                    .split(" ")
                    .map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                </h1>

                <p className="text-sm md:text-xl text-white/80 mb-10 max-w-sm md:max-w-md font-medium leading-relaxed italic md:border-l-2 md:border-white/20 md:pl-6">
                  {
                    currentProduct.desc[
                      lang as keyof typeof currentProduct.desc
                    ]
                  }
                </p>

                <Link
                  href={`/productos/${currentProduct.id}`}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-green-600 hover:text-white transition-all active:scale-95 shadow-2xl"
                >
                  {tButton[lang as keyof typeof tButton]}{" "}
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="hidden lg:flex justify-end">
                <div className="relative w-80 h-80 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                  <span className="text-white/10 font-black text-[12rem] italic select-none">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </div>

      {/* 3. NAVEGACIÓN CON PROGRESS SEGMENTADA */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center px-6 z-50">
        <div className="flex items-center gap-6 p-2 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
          <button
            onClick={() => changeStep(-1)}
            className="p-3 text-white hover:text-green-400 active:scale-75 transition-all"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="flex gap-3">
            {products.map((_, i) => (
              <div
                key={i}
                className="relative w-12 md:w-20 h-1.5 bg-white/20 rounded-full overflow-hidden"
              >
                {i === index && (
                  <motion.div
                    key={`bar-${index}`}
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{
                      duration: TRANSITION_DURATION / 1000,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-green-500 shadow-[0_0_10px_#22c55e]"
                  />
                )}
                {i < index && <div className="absolute inset-0 bg-white/40" />}
              </div>
            ))}
          </div>

          <button
            onClick={() => changeStep(1)}
            className="p-3 text-white hover:text-green-400 active:scale-75 transition-all"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </main>
  );
}

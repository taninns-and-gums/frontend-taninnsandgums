"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Menu,
  X,
  ChevronDown,
  Beaker,
  Leaf,
  Zap,
  Home,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productLinks = [
    {
      name: {
        es: "Goma de Tara",
        en: "Tara Gum",
        de: "Tarakernmehl",
        zh: "塔拉胶",
      },
      href: "/productos/goma-de-tara",
      icon: <Beaker size={16} />,
      color: "text-green-500",
    },
    {
      name: {
        es: "Polvo de Tara",
        en: "Tara Powder",
        de: "Tarapulver",
        zh: "塔拉粉",
      },
      href: "/productos/polvo-de-tara",
      icon: <Leaf size={16} />,
      color: "text-amber-500",
    },
    {
      name: {
        es: "Germen de Tara",
        en: "Tara Germ",
        de: "Taramahl",
        zh: "塔拉胚芽",
      },
      href: "/productos/germen-de-tara",
      icon: <Zap size={16} />,
      color: "text-emerald-500",
    },
  ];

  const languages = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "zh", label: "中文" },
  ];

  // DICCIONARIO ACTUALIZADO: Se agregó 'productos' y 'nav' para evitar errores
  const t = {
    es: {
      inicio: "Inicio",
      nosotros: "Nosotros",
      contacto: "Contacto",
      cotizar: "Cotizar ahora",
      productos: "Productos",
      nav: "Navegación",
    },
    en: {
      inicio: "Home",
      nosotros: "About",
      contacto: "Contact",
      cotizar: "Quote now",
      productos: "Products",
      nav: "Navigation",
    },
    de: {
      inicio: "Start",
      nosotros: "Über uns",
      contacto: "Kontakt",
      cotizar: "Angebot anfordern",
      productos: "Produkte",
      nav: "Navigation",
    },
    zh: {
      inicio: "首页",
      nosotros: "关于我们",
      contacto: "联系我们",
      cotizar: "立即询价",
      productos: "产品",
      nav: "导航",
    },
  }[lang as "es" | "en" | "de" | "zh"];

  return (
    <nav
      className={`fixed top-0 w-full z-100 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="group flex flex-col">
          <motion.span className="text-2xl font-black text-white leading-none tracking-tight uppercase">
            Tannins
          </motion.span>
          <span
            className={`text-[10px] font-bold tracking-[0.4em] ${
              isScrolled ? "text-green-500" : "text-green-400"
            }`}
          >
            & GUMS
          </span>
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {t?.inicio}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {/* MODIFICADO: Ahora el botón usa t?.productos */}
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 uppercase tracking-wider">
                {t?.productos}{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full -left-4 w-64 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl mt-2"
                  >
                    <div className="grid gap-2">
                      {productLinks.map((prod) => (
                        <Link
                          key={prod.href}
                          href={prod.href}
                          className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 group transition-all"
                        >
                          <div
                            className={`p-2 rounded-xl bg-white/5 ${prod.color} group-hover:scale-110 transition-transform`}
                          >
                            {prod.icon}
                          </div>
                          <span className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                            {prod.name[lang as keyof typeof prod.name]}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/nosotros"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {t?.nosotros}
            </Link>
          </div>

          <div className="flex items-center gap-6 border-l border-white/10 pl-10">
            {/* SELECTOR DE IDIOMA */}
            <div
              className="relative"
              onMouseEnter={() => setIsLangDropdownOpen(true)}
              onMouseLeave={() =>
                setTimeout(() => setIsLangDropdownOpen(false), 150)
              }
            >
              <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-green-400 transition-colors uppercase tracking-widest py-4">
                <Globe size={14} /> {lang.toUpperCase()}{" "}
                <ChevronDown
                  size={10}
                  className={isLangDropdownOpen ? "rotate-180" : ""}
                />
              </button>
              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    onMouseEnter={() => setIsLangDropdownOpen(true)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 w-32 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-1"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-[10px] font-black transition-all ${
                          lang === l.code
                            ? "bg-green-600 text-white"
                            : "text-slate-400 hover:bg-white/5"
                        }`}
                      >
                        {l.label} {lang === l.code && <Check size={10} />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contacto"
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                isScrolled
                  ? "bg-green-600 text-white shadow-lg shadow-green-900/20"
                  : "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black"
              }`}
            >
              {t?.cotizar}
            </Link>
          </div>
        </div>

        {/* MENÚ MÓVIL (Trigger) */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* MENÚ MÓVIL (Estructura completa conservada) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen bg-slate-950 z-150 flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-none uppercase tracking-tighter italic">
                  Tannins
                </span>
                <span className="text-[8px] font-bold text-green-500 tracking-[0.3em]">
                  & GUMS
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-white/5 rounded-full text-white"
              >
                <X size={28} />
              </button>
            </div>

            <div className="grow overflow-y-auto p-10 flex flex-col gap-10">
              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                  {t?.nav}
                </p>
                <div className="flex flex-col gap-6">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 text-4xl font-black text-white italic uppercase tracking-tighter"
                  >
                    <Home size={24} className="text-green-500" /> {t?.inicio}
                  </Link>

                  <Link
                    href="/nosotros"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 text-4xl font-black text-white italic uppercase tracking-tighter"
                  >
                    <div className="w-6 h-6 rounded-full border-2 border-green-500" />
                    {t?.nosotros}
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                {/* MODIFICADO: Título de sección dinámica en móvil */}
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                  {t?.productos}
                </p>
                <div className="grid gap-6">
                  {productLinks.map((prod) => (
                    <Link
                      key={prod.href}
                      href={prod.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-4 text-3xl font-black text-white italic uppercase tracking-tighter"
                    >
                      <span className={prod.color}>{prod.icon}</span>{" "}
                      {prod.name[lang as keyof typeof prod.name]}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-3xl font-black text-green-500 italic uppercase tracking-tighter underline underline-offset-8"
              >
                {t?.cotizar}
              </Link>

              {/* SELECTOR DE IDIOMA MÓVIL */}
              <div className="mt-auto pt-10 flex flex-col gap-4 pb-10">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                  {lang === "es" ? "Idioma:" : "Language:"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        lang === l.code
                          ? "bg-green-600 text-white"
                          : "bg-white/5 text-slate-400"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

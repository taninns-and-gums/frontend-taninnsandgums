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
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productLinks = [
    {
      name: "Goma de Tara",
      href: "/productos/goma-de-tara",
      icon: <Beaker size={16} />,
      color: "text-green-500",
    },
    {
      name: "Polvo de Tara",
      href: "/productos/polvo-de-tara",
      icon: <Leaf size={16} />,
      color: "text-amber-500",
    },
    {
      name: "Germen de Tara",
      href: "/productos/germen-de-tara",
      icon: <Zap size={16} />,
      color: "text-emerald-500",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="group flex flex-col">
          <motion.span className="text-2xl font-black text-white leading-none tracking-tight">
            TANNINS
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
              Inicio
            </Link>

            {/* DROPDOWN DE PRODUCTOS */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2">
                Productos{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
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
                          key={prod.name}
                          href={prod.href}
                          className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all group"
                        >
                          <div
                            className={`p-2 rounded-xl bg-white/5 ${prod.color} group-hover:scale-110 transition-transform`}
                          >
                            {prod.icon}
                          </div>
                          <span className="text-sm font-bold text-slate-200 group-hover:text-white uppercase tracking-wider">
                            {prod.name}
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
              Nosotros
            </Link>
          </div>

          <div className="flex items-center gap-6 border-l border-white/10 pl-10">
            <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-green-400 transition-colors uppercase tracking-widest">
              <Globe size={14} /> EN
            </button>
            <Link
              href="/contacto"
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                isScrolled
                  ? "bg-green-600 text-white"
                  : "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black"
              }`}
            >
              COTIZAR
            </Link>
          </div>
        </div>

        {/* BOTÓN HAMBURGUESA MÓVIL */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 h-screen bg-slate-950 z-[90] flex flex-col p-10 md:hidden"
          >
            <div className="mt-20 space-y-8">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Navegación
              </p>

              {/* Link de Inicio en móvil */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 text-2xl font-black text-white"
              >
                <Home size={24} className="text-slate-400" /> Inicio
              </Link>

              {productLinks.map((prod) => (
                <Link
                  key={prod.name}
                  href={prod.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-2xl font-black text-white"
                >
                  <span className={prod.color}>{prod.icon}</span> {prod.name}
                </Link>
              ))}

              <hr className="border-white/10" />

              <Link
                href="/nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-black text-white"
              >
                Nosotros
              </Link>

              <Link
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-black text-green-500"
              >
                Cotizar ahora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

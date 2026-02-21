"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cambiamos items-center en móvil para centrar las columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left items-center md:items-start mb-20">
          {/* COLUMNA 1: IDENTIDAD */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <Link href="/" className="group flex flex-col">
              <span className="text-2xl font-black text-white leading-none tracking-tighter">
                TANNINS<span className="text-green-500">.</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 tracking-[0.4em] group-hover:text-green-400 transition-colors">
                & GUMS
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs italic font-medium">
              Expertos peruanos liderando la exportación de derivados de Tara.
              Innovación sostenible desde Lima para la industria global.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, color: "#22c55e" }}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-green-500/50 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs italic">
              Empresa
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              {[
                { name: "Inicio", href: "/" },
                { name: "Nuestra Historia", href: "/nosotros" },
                { name: "Proceso Lima", href: "/nosotros#proceso" },
                { name: "Contacto Global", href: "/contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-center md:justify-start gap-2 hover:text-green-500 transition-all"
                  >
                    <ChevronRight
                      size={12}
                      className="hidden md:block opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-green-500"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: PRODUCTOS */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs italic">
              Derivados
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              {[
                {
                  name: "Goma de Tara",
                  href: "/productos/goma-de-tara",
                  color: "hover:text-green-500",
                },
                {
                  name: "Polvo de Tara",
                  href: "/productos/polvo-de-tara",
                  color: "hover:text-amber-500",
                },
                {
                  name: "Germen de Tara",
                  href: "/productos/germen-de-tara",
                  color: "hover:text-emerald-500",
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${link.color} transition-colors flex items-center justify-center md:justify-start gap-2`}
                  >
                    <div className="w-1 h-1 rounded-full bg-slate-800 hidden md:block" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 w-full flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-black mb-6 uppercase tracking-[0.2em] text-xs italic">
              Sede Central
            </h4>
            <ul className="space-y-6 text-sm font-medium w-full">
              <li className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                <MapPin size={18} className="text-green-500 shrink-0" />
                <span className="leading-snug">
                  Lima, Perú. <br />
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    Hub Industrial Export
                  </span>
                </span>
              </li>
              <li className="flex flex-col md:flex-row gap-4 items-center md:items-start group cursor-pointer">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500 transition-colors">
                  <Phone
                    size={14}
                    className="text-green-500 group-hover:text-white"
                  />
                </div>
                <span className="font-bold text-white tracking-tight">
                  +51 1 234 5678
                </span>
              </li>
              <li className="flex flex-col md:flex-row gap-4 items-center md:items-start group cursor-pointer">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500 transition-colors">
                  <Mail
                    size={14}
                    className="text-green-500 group-hover:text-white"
                  />
                </div>
                <span className="font-bold text-white tracking-tight text-xs sm:text-sm">
                  sales@tanninsandgums.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* LOGOS DE CERTIFICACIONES */}
        <div className="border-y border-white/5 py-12 flex flex-col md:flex-row justify-center items-center gap-10">
          <span className="font-black text-[10px] uppercase tracking-[0.5em] text-slate-500">
            Global Compliance
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {["BPM / GMP", "HACCP", "ISO 9001", "ORGANIC"].map((cert) => (
              <div
                key={cert}
                className="px-4 py-2 border border-white/10 rounded-2xl text-[9px] font-black tracking-widest text-white/40 hover:text-green-500 hover:border-green-500/50 hover:bg-green-500/5 transition-all"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <p className="text-center md:text-left">
            © {currentYear} Tannins and Gums SAC. Lima, Perú.
          </p>
          <div className="flex gap-8 justify-center">
            <Link
              href="#"
              className="hover:text-white transition-colors underline decoration-green-500/30 underline-offset-4"
            >
              Legal
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors underline decoration-green-500/30 underline-offset-4"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

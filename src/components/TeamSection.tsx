"use client";
import { motion } from "framer-motion";
import { Linkedin, Users } from "lucide-react";

const team = [
  {
    name: "Carlos Rivera",
    role: "Director de Operaciones",
    desc: "Experto en logística internacional y cadena de suministro de Tara.",
  },
  {
    name: "Elena Torres",
    role: "Jefa de Calidad",
    desc: "Especialista en microbiología y procesos de certificación ISO/HACCP.",
  },
  {
    name: "Luis Mendoza",
    role: "I+D Aplicado",
    desc: "Encargado del desarrollo de nuevas aplicaciones para la Goma de Tara.",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-slate-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="mb-16 border-l-8 border-green-600 pl-8"
        >
          <h3 className="text-4xl font-black text-slate-950 uppercase italic tracking-tighter">
            El Talento tras <br />
            la <span className="text-green-600">Excelencia</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ boxShadow: "0 30px 60px -12px rgba(0,0,0,0.15)" }}
              className="bg-white p-10 rounded-[3rem] border border-slate-200 group transition-all"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-2xl mb-8 flex items-center justify-center text-slate-300 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
              <h4 className="text-2xl font-black text-slate-950 uppercase tracking-tighter mb-1">
                {member.name}
              </h4>
              <p className="text-green-600 font-black text-[10px] uppercase tracking-[0.3em] mb-6">
                {member.role}
              </p>
              <p className="text-slate-800 text-sm font-bold leading-relaxed mb-8 italic">
                "{member.desc}"
              </p>
              <motion.a
                whileHover={{ x: 5 }}
                href="#"
                className="inline-flex items-center gap-2 text-slate-950 font-black text-[10px] uppercase tracking-widest border-b-2 border-slate-950"
              >
                LinkedIn <Linkedin size={12} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "motion/react";

const steps = [
  {
    num: '01',
    title: 'Discovery & Brief',
    desc: 'We analyze your brand goals, target audience, and required functionality.'
  },
  {
    num: '02',
    title: 'Design & Prototype',
    desc: 'Crafting clean, responsive UI layouts with precision typography and micro-interactions.'
  },
  {
    num: '03',
    title: 'Build & Deploy',
    desc: 'Developing high-performance React code integrated with Firebase backend and launching live.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-brand-bg text-brand-text border-t border-brand-border relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted font-bold block mb-4">// WORKFLOW</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">The Collaborative Path.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="p-10 rounded-[2.5rem] bg-brand-surface border border-brand-border hover:bg-brand-text hover:text-brand-bg transition-all duration-500 group"
            >
              <span className="text-3xl font-bold block mb-6 opacity-20 group-hover:opacity-40 transition-opacity">
                {s.num}
              </span>
              <h3 className="text-2xl font-bold mb-4 tracking-tight transition-colors">
                {s.title}
              </h3>
              <p className="text-brand-muted group-hover:text-brand-bg/60 text-base leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

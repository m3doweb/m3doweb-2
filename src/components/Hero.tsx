import React from "react";
import { motion } from "motion/react";
import {
  Code2,
  Figma,
  Terminal,
  Sparkles,
  FileCode2,
  Palette,
  Cpu,
  Wind,
  Flame,
  Globe,
  Server
} from "lucide-react";

const tools = [
  { name: "HTML5", icon: FileCode2 },
  { name: "CSS3", icon: Palette },
  { name: "JavaScript", icon: Cpu },
  { name: "React", icon: Code2 },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Figma", icon: Figma },
  { name: "Firebase", icon: Flame },
  { name: "TypeScript", icon: Terminal },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Server },
  { name: "Vite", icon: Sparkles },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 text-center relative overflow-hidden bg-brand-bg text-brand-text">
      {/* Subtle Ambient Shadow */}
      <motion.div
        animate={{
          scale: [0.8, 0.9, 0.8],
          opacity: [0.01, 0.015, 0.01],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-text rounded-full blur-[100px] pointer-events-none"
      />

      {/* Center 3D Avatar Box */}
      <div className="relative mb-16 flex flex-col items-center [perspective:1000px]">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ rotateX: 5, rotateY: -5 }}
          className="w-32 h-32 sm:w-48 sm:h-48 rounded-[2.5rem] bg-brand-surface border border-brand-border p-2 shadow-2xl flex items-center justify-center group"
        >
          <div className="w-full h-full rounded-[2rem] bg-brand-border/10 flex items-center justify-center relative overflow-hidden">
            <img 
              src="/logo.png" 
              alt="M3DO Portrait"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Floating Badges */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:flex absolute -left-48 top-12 bg-brand-bg/80 backdrop-blur-md border border-brand-border text-brand-text px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm items-center gap-3"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-text/20 animate-pulse" />
          <span>Designer</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="hidden sm:flex absolute -right-48 top-12 bg-brand-text text-brand-bg px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-xl items-center gap-3"
        >
          <span>Developer</span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-bg/20 animate-pulse" />
        </motion.div>
      </div>

      {/* Hero Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl sm:text-7xl md:text-9xl font-bold text-brand-text leading-[0.9] tracking-tighter max-w-5xl mb-12"
      >
        Building digital <br /> perfection.
      </motion.h1>

      {/* Sub-info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-16 text-brand-muted mb-20"
      >
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="text-[10px] uppercase tracking-widest font-bold mb-2">Contact</span>
          <a href="mailto:m3doawadh@gmail.com" className="text-brand-text hover:opacity-60 transition-opacity font-medium">
            m3doawadh@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="text-[10px] uppercase tracking-widest font-bold mb-2">Location</span>
          <span className="text-brand-text font-medium">Malindi, Kenya</span>
        </div>
      </motion.div>

      {/* Bottom Tools Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full pt-12 border-t border-brand-border overflow-hidden relative"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex items-center gap-12 w-max py-4"
        >
          {[...tools, ...tools].map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 px-4 text-brand-muted hover:text-brand-text transition-colors shrink-0"
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{tool.name}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

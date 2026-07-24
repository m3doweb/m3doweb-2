import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const SKILLS = [
  "FIREBASE",
  "TYPESCRIPT",
  "NEXT.JS",
  "NODE.JS",
  "FRAMER MOTION",
  "TAILWIND CSS",
  "POSTGRESQL",
  "REACT"
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] bg-brand-bg flex flex-col items-center justify-center p-6"
    >
      <div className="relative flex flex-col items-center">
        {/* Central Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-32 h-32 md:w-48 md:h-48 relative"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-brand-accent/20 blur-3xl rounded-full"
          />
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-full h-full object-contain relative z-10"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Minimal Progress Indicator */}
        <div className="mt-12 flex flex-col items-center">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            className="h-[1px] bg-brand-border relative overflow-hidden"
          >
            <motion.div 
              className="absolute top-0 left-0 h-full bg-brand-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </motion.div>
          <motion.span 
            className="mt-4 text-[10px] font-mono tracking-[0.4em] text-brand-muted uppercase"
          >
            M3DO_IDENTITY_{progress}%
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

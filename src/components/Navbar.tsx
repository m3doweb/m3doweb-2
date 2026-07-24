import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-text z-50 origin-left"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 left-0 w-full z-40 px-4 sm:px-8 py-3 sm:py-5 flex justify-between items-center max-w-7xl mx-auto left-1/2 -translate-x-1/2 bg-brand-bg/70 backdrop-blur-xl border-b border-brand-border transition-colors duration-300">
        {/* Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm font-semibold tracking-tight text-brand-muted hover:text-brand-text transition-colors cursor-pointer flex items-center gap-3 py-1 min-h-[44px]"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 rounded-full border border-brand-border overflow-hidden bg-brand-surface shrink-0">
            <img 
              src="/logo.png" 
              alt="M3DO Logo" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-brand-text font-bold tracking-wider">m3do</span>
        </motion.div>

        {/* Center Pills & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-3 sm:px-3.5 py-1.5 rounded-xl border border-brand-border bg-brand-surface backdrop-blur-md text-[10px] sm:text-xs text-brand-muted font-bold flex items-center justify-center min-h-[32px] sm:min-h-[36px] cursor-pointer hover:text-brand-text transition-colors uppercase tracking-widest"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-3 sm:px-3.5 py-1.5 rounded-xl border border-brand-border bg-brand-surface backdrop-blur-md text-[10px] sm:text-xs text-brand-muted font-bold flex items-center justify-center min-h-[32px] sm:min-h-[36px] cursor-pointer hover:text-brand-text transition-colors uppercase tracking-widest"
              onClick={() => {
                const el = document.getElementById('portfolio');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Capabilities
            </motion.div>
          </div>

          {/* Light / Dark Mode Toggle Icon Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-xl border border-brand-border bg-brand-surface hover:border-brand-text/20 flex items-center justify-center text-brand-text transition-all cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </motion.button>
        </div>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo('contact')}
          className="px-6 py-2 rounded-full bg-brand-text text-brand-bg text-[10px] uppercase tracking-widest font-bold transition-all min-h-[40px] flex items-center justify-center cursor-pointer hover:opacity-90"
        >
          Contact
        </motion.button>
      </nav>
    </>
  );
}

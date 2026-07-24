import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / height) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2"
        >
          <div className="relative group">
            {/* Circular Progress Indicator */}
            <svg className="w-12 h-12 rotate-[-90deg]">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="text-brand-border"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray="125.6"
                strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
                className="text-brand-accent"
              />
            </svg>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-text shadow-xl hover:text-brand-accent transition-colors"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

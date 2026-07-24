import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function InteractiveCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 hidden md:flex items-center gap-2"
      animate={{ x: pos.x + 12, y: pos.y + 12 }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.1 }}
    >
      <div className="w-2.5 h-2.5 bg-brand-accent rounded-full animate-ping" />
      <div className="bg-brand-accent text-white px-2.5 py-1 rounded-md text-[11px] font-bold shadow-lg tracking-wider uppercase">
        Web Builder
      </div>
    </motion.div>
  );
}

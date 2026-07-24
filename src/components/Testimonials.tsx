import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const reviews = [
  {
    quote: "M3DO transformed our hotel's online presence in Watamu. Direct bookings surged over 140% in our first quarter.",
    author: "Salim Bakari",
    role: "Managing Director, Swahili Haven",
    location: "Malindi, Kenya"
  },
  {
    quote: "Working with M3DO was seamless. The dark aesthetic and speed of our export portal exceeded international standards.",
    author: "Elena Rostova",
    role: "Head of Operations, Kilifi Agro",
    location: "London / Kenya"
  },
  {
    quote: "Unmatched attention to detail. Fast, communicative, and understands modern product design inside and out.",
    author: "Captain Ali",
    role: "Owner, Deep Sea Charters",
    location: "Watamu, Kenya"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 border-t border-white/5 bg-brand-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-brand-muted font-bold block mb-2">// TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Trusted by leaders across East Africa & beyond</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-brand-surface border border-white/5 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-brand-accent/40 mb-6" />
                <p className="text-brand-muted leading-relaxed text-sm mb-8 italic">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="font-bold text-white text-sm">{r.author}</div>
                <div className="text-xs text-brand-muted">{r.role}</div>
                <div className="text-[10px] text-brand-accent font-mono mt-1">{r.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Layout, Fingerprint, Palette } from 'lucide-react';

const projects = [
  {
    id: 1,
    image: "/cap1.jpg",
    title: "Structural Monolith",
    description: "An exploration of architectural permanence through high-contrast geometry.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "UI Architecture", text: "Stark grid systems and monumental typography to mirror structural stability." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "UX Strategy", text: "Reducing cognitive load by utilizing extreme negative space as a navigational guide." },
      { icon: <Palette className="w-4 h-4" />, title: "Visual Language", text: "A binary color palette focusing purely on form and shadow dynamics." }
    ]
  },
  {
    id: 2,
    image: "/cap2.jpg",
    title: "Urban Rhythm",
    description: "Capturing the chaotic elegance of street life in a structured frame.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Layout Flow", text: "Asymmetrical balance that directs the eye through complex urban layers." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Interactivity", text: "Subtle micro-interactions that mimic the spontaneous nature of street discovery." },
      { icon: <Palette className="w-4 h-4" />, title: "Design Polish", text: "Grit and texture translated into refined digital depth." }
    ]
  },
  {
    id: 3,
    image: "/cap3.jpg",
    title: "Candid Stillness",
    description: "Intimate moments captured with a focus on emotional honesty.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Focus Systems", text: "Centric layouts that prioritize subject intimacy over environmental noise." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Human Centric", text: "Designing for emotional resonance rather than just functional utility." },
      { icon: <Palette className="w-4 h-4" />, title: "Subtle Tone", text: "Soft gradients and shadow transitions to emphasize organic textures." }
    ]
  },
  {
    id: 4,
    image: "/cap4.jpg",
    title: "Natural Geometry",
    description: "Translating organic patterns into systematic digital design elements.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Pattern Logic", text: "Repeating motifs derived from nature to create intuitive UI patterns." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Growth Design", text: "Scalable systems that evolve naturally with user interaction." },
      { icon: <Palette className="w-4 h-4" />, title: "Organic Depth", text: "Using light and shadow to create tactile, natural-feeling surfaces." }
    ]
  },
  {
    id: 5,
    image: "/cap5.jpg",
    title: "Minimal Ascent",
    description: "The intersection of functional paths and aesthetic minimalism.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Linear Flow", text: "Direct, uncompromising user paths modeled after architectural elevation." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Pure UX", text: "Stripping away the unnecessary to reveal the core functional experience." },
      { icon: <Palette className="w-4 h-4" />, title: "High Contrast", text: "Zero-noise visuals that ensure maximum clarity and accessibility." }
    ]
  },
  {
    id: 6,
    image: "/cap6.jpg",
    title: "Kinetic Still",
    description: "Dynamics of movement frozen in a state of high-fidelity precision.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Motion Theory", text: "Designing with potential energy in mind—anticipatory UI states." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Fast Flow", text: "Optimized for speed and rapid decision-making in high-velocity environments." },
      { icon: <Palette className="w-4 h-4" />, title: "Modern Sharpness", text: "Ultra-sharp edges and high-definition contrasts for technical clarity." }
    ]
  },
  {
    id: 7,
    image: "/cap7.jpg",
    title: "Temporal Order",
    description: "Measuring time and precision through mechanical elegance.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Precise Grids", text: "Mathematical precision applied to layout proportions and alignment." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Legacy Logic", text: "Modernizing classical design principles for the digital age." },
      { icon: <Palette className="w-4 h-4" />, title: "Timed Visuals", text: "Transitions and animations timed to mechanical perfection." }
    ]
  },
  {
    id: 8,
    image: "/cap8.jpg",
    title: "Pattern Abstract",
    description: "Nature's high-contrast patterns reimagined as digital texture.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Rhythmic Grid", text: "Breaking the standard grid with repetitive, high-impact visual rhythms." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Brand Identity", text: "Using bold patterns to create unforgettable visual signatures." },
      { icon: <Palette className="w-4 h-4" />, title: "Optical Flux", text: "Harnessing high-contrast vibrance to create depth and movement." }
    ]
  }
];

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const tags = [
    "Silent stories.",
    "Honest frames.",
    "Still truth.",
    "Quiet depth.",
  ];

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-brand-bg text-brand-text relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Column 1: Header and Bridge */}
          <div className="md:col-span-5 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <h2 className="text-6xl md:text-8xl font-bold text-brand-text leading-[1.1] mb-8 tracking-tighter">
                Beyond Color.<br />
                Pure Emotion.
              </h2>
              <p className="text-xl text-brand-muted mb-8 max-w-xs leading-relaxed">
                Timeless black and white frames that speak without words.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-text text-brand-bg px-8 py-3 rounded-full text-sm font-medium transition-colors hover:opacity-90"
              >
                See the Stories
              </motion.button>
            </motion.div>

            <motion.div
              layoutId="project-1"
              onClick={() => setSelectedId(1)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
            >
              <img 
                src="/cap1.jpg" 
                alt="Architecture" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          </div>

          {/* Column 2: Street and Small Dog */}
          <div className="md:col-span-3 space-y-6 md:pt-24">
            <motion.div
              layoutId="project-2"
              onClick={() => setSelectedId(2)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="aspect-square rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
            >
              <img 
                src="/cap2.jpg" 
                alt="Street Scene" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>
            <motion.div
              layoutId="project-3"
              onClick={() => setSelectedId(3)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
            >
              <img 
                src="/cap3.jpg" 
                alt="Street Dog" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          </div>

          {/* Column 3: Nature/Tree and Staircase */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              layoutId="project-4"
              onClick={() => setSelectedId(4)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
            >
              <img 
                src="/cap4.jpg" 
                alt="Nature Detail" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>
            <motion.div
              layoutId="project-5"
              onClick={() => setSelectedId(5)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="aspect-square rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
            >
              <img 
                src="/cap5.jpg" 
                alt="Minimalist Stairs" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          </div>

          {/* Column 4: Bicycle, Tags, Clock, and Zebras */}
          <div className="md:col-span-2 space-y-6 md:pt-12">
            <motion.div
              layoutId="project-6"
              onClick={() => setSelectedId(6)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="aspect-square rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
            >
              <img 
                src="/cap6.jpg" 
                alt="Bicycle Street" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="py-6 space-y-3"
            >
              {tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2 text-brand-muted font-medium text-sm">
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                  <span>{tag}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              layoutId="project-7"
              onClick={() => setSelectedId(7)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="aspect-square rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
            >
              <img 
                src="/cap7.jpg" 
                alt="Clock Tower" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>

            <motion.div
              layoutId="project-8"
              onClick={() => setSelectedId(8)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
            >
              <img 
                src="/cap8.jpg" 
                alt="Zebra Patterns" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence mode="wait">
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center md:p-12 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-brand-bg/98 backdrop-blur-2xl"
            />
            
            <motion.div
              layoutId={`project-${selectedId}`}
              className="relative w-full h-full md:h-auto md:max-w-6xl md:max-h-[85vh] bg-brand-bg md:border md:border-brand-border md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 md:top-8 md:right-8 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-bg/50 backdrop-blur-md border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-text hover:text-brand-bg transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-3/5 h-[45vh] md:h-auto overflow-hidden shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/5 p-8 md:p-16 flex flex-col overflow-y-auto no-scrollbar bg-brand-bg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted font-mono mb-4 block">
                    // DESIGN NARRATIVE
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
                    {selectedProject.title}
                  </h3>
                  <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-10">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-6 md:space-y-8">
                    {selectedProject.insights.map((insight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-text shrink-0">
                          {insight.icon}
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">{insight.title}</h4>
                          <p className="text-sm text-brand-muted leading-relaxed">{insight.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-10 mb-6 py-5 rounded-full bg-brand-text text-brand-bg font-bold text-xs uppercase tracking-[0.2em] transition-all"
                  >
                    View Project Case Study
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;


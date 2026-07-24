import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Layout, Fingerprint, Palette } from 'lucide-react';

const projects = [
  {
    id: 1,
    image: "/cap1.jpg",
    title: "Freelance Solutions",
    description: "Custom-built digital homes for independent creators focusing on lead generation and aesthetic authority.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "UI Architecture", text: "Minimalist interfaces that prioritize the creator's portfolio and service clarity." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Conversion UX", text: "Streamlined booking flows and contact funnels designed to turn visitors into clients." },
      { icon: <Palette className="w-4 h-4" />, title: "Personal Style", text: "Typography-driven design that establishes a unique professional identity." }
    ]
  },
  {
    id: 2,
    image: "/cap2.jpg",
    title: "Business Systems",
    description: "Scalable corporate platforms designed to handle complex data with a focus on institutional trust.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Corporate Flow", text: "Structured navigation hierarchies for multi-layered service offerings." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Enterprise Logic", text: "Robust backend integration and secure data handling for professional operations." },
      { icon: <Palette className="w-4 h-4" />, title: "Brand Authority", text: "Refined color systems and grid layouts that communicate stability and scale." }
    ]
  },
  {
    id: 3,
    image: "/cap3.jpg",
    title: "Personal Branding",
    description: "Intimate digital spaces for individuals looking to share their story and build a community.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Narrative Layout", text: "Focusing on storytelling through scroll-triggered animations and large-scale media." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Social Sync", text: "Seamless integration with social platforms and personal content feeds." },
      { icon: <Palette className="w-4 h-4" />, title: "Organic Texture", text: "Soft shadows and subtle gradients to create a warm, approachable atmosphere." }
    ]
  },
  {
    id: 4,
    image: "/cap4.jpg",
    title: "Educational Hubs",
    description: "Complex learning management systems (LMS) optimized for content delivery and student engagement.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Knowledge Grid", text: "Clear content categorization and progress tracking for enhanced learning experiences." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Interactive UX", text: "Quizzes, video modules, and resource libraries built for high engagement." },
      { icon: <Palette className="w-4 h-4" />, title: "Clarity Design", text: "High-contrast reading environments to reduce student eye fatigue." }
    ]
  },
  {
    id: 5,
    image: "/cap5.jpg",
    title: "Modern Portfolio",
    description: "High-fidelity galleries for photographers and artists who demand pixel-perfect presentation.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Media Grid", text: "Dynamic, masonry-style layouts that adapt to various image orientations." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Smooth View", text: "Ultra-responsive gallery viewers with zero-latency image loading." },
      { icon: <Palette className="w-4 h-4" />, title: "Zero Noise", text: "Hidden interfaces that reveal content only when needed." }
    ]
  },
  {
    id: 6,
    image: "/cap6.jpg",
    title: "Digital Commerce",
    description: "Fast, secure, and intuitive shopping experiences built for high-conversion retail.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Product Flow", text: "Streamlined pathways from discovery to checkout with minimal friction." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Cart Logic", text: "Real-time inventory sync and secure payment gateway integrations." },
      { icon: <Palette className="w-4 h-4" />, title: "Retail Gloss", text: "High-end product presentation using cinematic imagery and clean spacing." }
    ]
  },
  {
    id: 7,
    image: "/cap7.jpg",
    title: "Technical SaaS",
    description: "Dashboard-driven applications for software-as-a-service providers and tech startups.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Data Visualization", text: "Clean charts and metrics that turn complex data into actionable insights." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Tooling UX", text: "Keyboard shortcuts and power-user features for professional workflows." },
      { icon: <Palette className="w-4 h-4" />, title: "Tech Sharpness", text: "Precise lines and mathematical proportions for a cutting-edge feel." }
    ]
  },
  {
    id: 8,
    image: "/cap8.jpg",
    title: "Creative Studio",
    description: "Bold, experimental websites for agencies and studios pushing the boundaries of the web.",
    insights: [
      { icon: <Layout className="w-4 h-4" />, title: "Chaos Grid", text: "Breaking the standard rules to create memorable, high-impact first impressions." },
      { icon: <Fingerprint className="w-4 h-4" />, title: "Motion Sign", text: "Heavy use of canvas animations and physical interactions." },
      { icon: <Palette className="w-4 h-4" />, title: "Optical Depth", text: "Layered layouts that create a sense of three-dimensional digital space." }
    ]
  }
];

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const tags = [
    "Freelance.",
    "Business.",
    "Personal.",
    "Educational.",
  ];

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="portfolio" className="py-24 px-4 md:px-12 bg-brand-bg text-brand-text relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 items-start">
          
          {/* Column 1: Intro and Architecture */}
          <div className="col-span-2 md:col-span-5 space-y-8 md:space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-brand-text leading-[0.9] sm:leading-[1.1] mb-6 md:mb-8 tracking-tighter">
                Diverse Scope.<br />
                Proven Impact.
              </h2>
              <p className="text-base md:text-xl text-brand-muted mb-8 max-w-xs leading-relaxed">
                From high-conversion freelance portfolios to complex educational systems, I build digital experiences that scale.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-text text-brand-bg px-8 py-3 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest transition-colors hover:opacity-90"
              >
                Explore Solutions
              </motion.button>
            </motion.div>

            <motion.div
              layoutId="project-1"
              onClick={() => setSelectedId(1)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
            >
              <img 
                src="/cap1.jpg" 
                alt="Architecture" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          </div>

          {/* Column 2: Street and Small Dog */}
          <div className="col-span-1 md:col-span-3 space-y-4 md:space-y-6 md:pt-24">
            <motion.div
              layoutId="project-2"
              onClick={() => setSelectedId(2)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
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
              className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
            >
              <img 
                src="/cap3.jpg" 
                alt="Street Dog" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          </div>

          {/* Column 3: Nature/Tree and Staircase */}
          <div className="col-span-1 md:col-span-2 space-y-4 md:space-y-6">
            <motion.div
              layoutId="project-4"
              onClick={() => setSelectedId(4)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
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
              className="aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
            >
              <img 
                src="/cap5.jpg" 
                alt="Minimalist Stairs" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          </div>

          {/* Column 4: Bicycle, Tags, Clock, and Zebras */}
          <div className="col-span-2 md:col-span-2 space-y-4 md:space-y-6 md:pt-12">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
              <motion.div
                layoutId="project-6"
                onClick={() => setSelectedId(6)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
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
                className="bg-brand-surface border border-brand-border rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-8 flex flex-col justify-center gap-2 md:gap-4"
              >
                {tags.map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 group/tag cursor-default">
                    <ArrowUpRight className="w-3 h-3 text-brand-muted group-hover/tag:text-brand-text transition-colors" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-muted group-hover/tag:text-brand-text transition-colors whitespace-nowrap">
                      {tag}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              layoutId="project-7"
              onClick={() => setSelectedId(7)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
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
              className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-brand-surface border border-brand-border cursor-zoom-in group"
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


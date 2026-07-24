import React, { useState } from "react";
import { motion } from "motion/react";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";
import { submitInquiry } from "../lib/firebase";

export default function Estimator() {
  const [projectType, setProjectType] = useState<'landing' | 'ecommerce' | 'saas' | 'custom'>('landing');
  const [pagesCount, setPagesCount] = useState<number>(3);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['Mobile Responsive', 'SEO Optimization']);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const availableFeatures = [
    'Mobile Responsive',
    'SEO Optimization',
    'M-Pesa / Card Payment',
    'CMS Content Admin',
    'Custom Animations',
    'Multi-language Support',
    'Dark / Light Mode',
    'Firebase / Database'
  ];

  const calculateEstimate = () => {
    let base = 35000; // KES
    if (projectType === 'ecommerce') base = 75000;
    if (projectType === 'saas') base = 120000;
    if (projectType === 'custom') base = 150000;

    const pageCost = (pagesCount - 1) * 8000;
    const featureCost = selectedFeatures.length * 6000;

    const totalKES = base + pageCost + featureCost;
    const totalUSD = Math.round(totalKES / 130);

    return { totalKES, totalUSD };
  };

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const handleSendEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;

    setIsSubmitting(true);
    const { totalKES, totalUSD } = calculateEstimate();

    await submitInquiry({
      name: formData.name,
      email: formData.email,
      budget: `KES ${totalKES.toLocaleString()} (~$${totalUSD} USD)`,
      service: `${projectType.toUpperCase()} Website (${pagesCount} pages)`,
      message: `Features: ${selectedFeatures.join(', ')}. Message: ${formData.message}`
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const { totalKES, totalUSD } = calculateEstimate();

  return (
    <section id="estimator" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold mb-4">
          <Calculator className="w-3.5 h-3.5" />
          INSTANT PROJECT ESTIMATOR
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Estimate Your Project Cost
        </h2>
        <p className="text-brand-muted">
          Configure your requirements below for an instant budget and timeline projection.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls */}
        <div className="lg:col-span-7 bg-brand-surface border border-white/5 rounded-3xl p-6 md:p-10 space-y-8">
          <div>
            <label className="text-xs uppercase tracking-widest text-brand-muted font-bold block mb-4">
              1. Project Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'landing', label: 'Landing Page' },
                { id: 'ecommerce', label: 'E-Commerce Store' },
                { id: 'saas', label: 'SaaS / Web App' },
                { id: 'custom', label: 'Bespoke Platform' }
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setProjectType(type.id as any)}
                  className={`p-4 rounded-2xl border text-sm font-medium text-left transition-all ${
                    projectType === type.id
                      ? 'border-brand-accent bg-brand-accent/10 text-white'
                      : 'border-white/5 bg-white/3 text-brand-muted hover:border-white/20'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-xs uppercase tracking-widest text-brand-muted font-bold">
                2. Number of Pages / Screens
              </label>
              <span className="text-sm font-bold text-brand-accent">{pagesCount} Pages</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={pagesCount}
              onChange={(e) => setPagesCount(parseInt(e.target.value))}
              className="w-full accent-brand-accent cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-brand-muted font-bold block mb-4">
              3. Required Capabilities
            </label>
            <div className="grid grid-cols-2 gap-2">
              {availableFeatures.map((feat) => {
                const active = selectedFeatures.includes(feat);
                return (
                  <button
                    key={feat}
                    type="button"
                    onClick={() => toggleFeature(feat)}
                    className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${
                      active
                        ? 'border-brand-accent/50 bg-brand-accent/5 text-white'
                        : 'border-white/5 bg-white/2 text-brand-muted hover:border-white/10'
                    }`}
                  >
                    <span>{feat}</span>
                    {active && <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Estimate Card & Form */}
        <div className="lg:col-span-5 bg-gradient-to-b from-brand-surface to-black border border-white/10 rounded-3xl p-6 md:p-8 sticky top-28">
          <div className="border-b border-white/10 pb-6 mb-6">
            <span className="text-[10px] uppercase tracking-widest text-brand-muted font-bold block mb-2">
              ESTIMATED INVESTMENT
            </span>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              KES {totalKES.toLocaleString()}
            </div>
            <div className="text-sm text-brand-accent font-medium">
              ~ ${totalUSD} USD · Approx 7-14 Days Turnaround
            </div>
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-brand-accent mx-auto" />
              <h3 className="text-xl font-bold">Estimate Request Sent!</h3>
              <p className="text-xs text-brand-muted">
                Thank you! M3DO will review your estimate details and get back to you within 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-brand-accent underline pt-2"
              >
                Calculate another project
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSendEstimate} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-brand-muted block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Omar Assis"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none text-white"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-brand-muted block mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="omar@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none text-white"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-brand-muted block mb-1">Notes / Goals</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Brief overview of your brand or launch timeline..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-brand-accent text-white font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Lock In Estimate & Request Proposal"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

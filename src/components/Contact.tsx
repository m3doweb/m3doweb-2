import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, Github } from "lucide-react";
import { submitInquiry } from "../lib/firebase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    await submitInquiry({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      service: 'General Inquiry',
      budget: 'N/A'
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-brand-bg text-brand-text border-t border-brand-border relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-12"
        >
          <div>
            <h2 className="text-6xl md:text-8xl font-bold text-brand-text mb-8 tracking-tighter leading-none">
              Let's <br />Talk.
            </h2>
            <p className="text-brand-muted text-xl leading-relaxed max-w-sm">
              Have a project in mind or just want to say hi? I'm always open to new stories and collaborations.
            </p>
          </div>

          <div className="space-y-8 pt-8 border-t border-brand-border">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold mb-2">Email</p>
              <a href="mailto:hello@m3do.dev" className="text-brand-text hover:opacity-70 transition-opacity text-2xl font-light">
                hello@m3do.dev
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold mb-2">Location</p>
              <p className="text-brand-text text-lg font-light">Malindi, Kenya — Available Worldwide</p>
            </div>

            <div className="flex gap-4 pt-4">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center p-2.5 transition-all shadow-sm hover:border-brand-text/20 group"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                  alt="Instagram" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center p-2.5 transition-all shadow-sm hover:border-brand-text/20 group"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center p-2.5 transition-all shadow-sm hover:border-brand-text/20 group"
              >
                <Github className="w-6 h-6 text-brand-text" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Minimal Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-brand-surface p-8 md:p-16 rounded-[2.5rem] border border-brand-border"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 text-center space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <CheckCircle2 className="w-16 h-16 text-brand-text mx-auto" />
              </motion.div>
              <h3 className="text-3xl font-bold text-brand-text">Received.</h3>
              <p className="text-brand-muted">I'll get back to you shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-brand-text underline pt-4 hover:opacity-70 transition-opacity"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="space-y-2 group">
                <label className="text-[10px] uppercase tracking-widest text-brand-muted font-bold block transition-colors group-focus-within:text-brand-text">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full name"
                  className="w-full bg-transparent border-b border-brand-border py-4 text-brand-text focus:border-brand-text outline-none text-lg transition-colors placeholder:text-brand-muted/30"
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] uppercase tracking-widest text-brand-muted font-bold block transition-colors group-focus-within:text-brand-text">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full bg-transparent border-b border-brand-border py-4 text-brand-text focus:border-brand-text outline-none text-lg transition-colors placeholder:text-brand-muted/30"
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] uppercase tracking-widest text-brand-muted font-bold block transition-colors group-focus-within:text-brand-text">Project Details</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can I help?"
                  className="w-full bg-transparent border-b border-brand-border py-4 text-brand-text focus:border-brand-text outline-none text-lg transition-colors resize-none placeholder:text-brand-muted/30"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-full bg-brand-text text-brand-bg font-bold uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-all flex items-center justify-center gap-3"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

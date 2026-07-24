import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, MapPin, Calendar, Tag } from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-brand-surface border border-white/10 rounded-3xl overflow-y-auto z-10 shadow-2xl p-6 md:p-10"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest mb-3">
            <Tag className="w-3.5 h-3.5" />
            {project.category}
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-6 text-sm text-brand-muted mb-8 pb-8 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-accent" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-accent" />
              <span>{project.year}</span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-video mb-8 border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/3 border border-white/5">
                  <div className="text-2xl font-bold text-brand-accent mb-1">{m.value}</div>
                  <div className="text-xs text-brand-muted">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-6 text-brand-muted leading-relaxed mb-8">
            <h3 className="text-xl font-bold text-white">Project Overview</h3>
            <p>{project.fullStory}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-brand-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-accent text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

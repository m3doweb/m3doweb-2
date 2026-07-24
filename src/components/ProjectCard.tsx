import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      onClick={() => onSelect(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group cursor-pointer rounded-3xl bg-brand-surface border border-white/5 hover:border-brand-accent/40 overflow-hidden transition-all flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-accent group-hover:border-brand-accent transition-colors">
          <ArrowUpRight className="w-5 h-5" />
        </div>
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] text-brand-muted font-mono">
          <MapPin className="w-3 h-3 text-brand-accent" />
          {project.location}
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold block mb-2">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold group-hover:text-white transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-brand-muted text-sm line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-brand-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

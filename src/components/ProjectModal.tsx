import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, Eye } from 'lucide-react';

export interface ProjectData {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tools: string[];
  col1Img1: string;
  col1Img2?: string;
  col2Img: string;
  contain?: { bg: string; slots: Array<'col1Img1' | 'col1Img2' | 'col2Img'> };
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent background scrolling when project preview is open
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-3xl border border-[#D7E2EA]/20 bg-[#121214] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl z-10 my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-20"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <span className="text-4xl sm:text-5xl font-black text-white shrink-0">
              {project.number}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                  {project.category}
                </span>
                <span className="text-xs text-[#D7E2EA]/40">•</span>
                <span className="text-xs uppercase tracking-wider text-[#BBCCD7]">
                  Architecture & Demo
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                {project.name}
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#D7E2EA]/80 max-w-2xl mb-6">
            {project.description}
          </p>

          {/* Tools & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Stack:
              </span>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/90"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#B600A8]/20 border border-[#B600A8] text-xs font-medium uppercase tracking-wider text-white hover:bg-[#B600A8]/40 transition-colors"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/20 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] hover:bg-white/15 transition-colors"
                >
                  <span>Source Code</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Gallery Showcase */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-semibold flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#B600A8]" /> Project Previews & System Flow
            </h4>
            <div className={`grid grid-cols-1 ${project.col1Img2 ? 'md:grid-cols-2' : ''} gap-4`}>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <img
                  src={project.col1Img1}
                  style={project.contain ? { backgroundColor: project.contain.bg } : undefined}
                  alt={`${project.name} preview 1`}
                  className={`w-full h-64 ${project.contain?.slots.includes('col1Img1') ? 'object-contain' : 'object-cover'} hover:scale-105 transition-transform duration-500`}
                />
              </div>
              {project.col1Img2 && (
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                  <img
                    src={project.col1Img2}
                    style={project.contain ? { backgroundColor: project.contain.bg } : undefined}
                    alt={`${project.name} preview 2`}
                    className={`w-full h-64 ${project.contain?.slots.includes('col1Img2') ? 'object-contain' : 'object-cover'} hover:scale-105 transition-transform duration-500`}
                  />
                </div>
              )}
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <img
                src={project.col2Img}
                style={project.contain ? { backgroundColor: project.contain.bg } : undefined}
                alt={`${project.name} hero render`}
                className={`w-full h-80 sm:h-96 ${project.contain?.slots.includes('col2Img') ? 'object-contain' : 'object-cover'} hover:scale-102 transition-transform duration-500`}
              />
            </div>
          </div>

          {/* Footer actions */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border border-[#D7E2EA] text-sm uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;

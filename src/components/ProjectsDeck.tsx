import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { Sparkles, Layers, CheckCircle2, ExternalLink, Play, Film } from 'lucide-react';

interface ProjectsDeckProps {
  onOpenProjectModal: (project: Project) => void;
}

export const ProjectsDeck: React.FC<ProjectsDeckProps> = ({ onOpenProjectModal }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  const activeProject = PROJECTS_DATA[activeProjectIndex];

  return (
    <section id="projects" className="py-20 sm:py-32 bg-[#08080a] relative overflow-hidden">
      {/* Ambient background lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-pink-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Layers className="w-4 h-4" />
              <span>SELECTED COMMERCIAL WORK</span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight">
              FEATURED PROJECTS
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-400">
              CLICK CARDS TO SWITCH • {PROJECTS_DATA.length} CASE STUDIES
            </span>
          </div>
        </div>

        {/* STACKED CARDS CONTAINER (MATCHING SCREENSHOT 8) */}
        <div className="relative w-full space-y-4">
          
          {/* Card Tabs Deck */}
          <div className="flex flex-col space-y-3 sm:space-y-4">
            {PROJECTS_DATA.map((project, index) => {
              const isActive = activeProjectIndex === index;

              return (
                <motion.div
                  key={project.id}
                  id={`project-card-${project.number}`}
                  onClick={() => setActiveProjectIndex(index)}
                  className={`rounded-3xl border transition-all duration-500 overflow-hidden cursor-pointer ${
                    isActive
                      ? 'bg-zinc-950/95 border-zinc-700 shadow-2xl shadow-purple-950/30'
                      : 'bg-zinc-900/50 hover:bg-zinc-900/80 border-zinc-800/80 hover:border-zinc-700'
                  }`}
                  whileHover={!isActive ? { y: -3 } : {}}
                >
                  {/* Card Header Bar matching Screenshot 8 */}
                  <div className="px-6 sm:px-8 py-5 flex items-center justify-between gap-4 border-b border-zinc-800/60">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-syne font-black text-2xl sm:text-3xl text-white">
                        {project.number}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                          CLIENT
                        </span>
                        <span className="font-syne font-bold text-base sm:text-lg text-white">
                          {project.client}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {isActive && (
                        <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-mono font-medium">
                          {project.category}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expanded Active Project View with 2-Column Split Media (Screenshot 8) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="p-6 sm:p-8 lg:p-10"
                      >
                        {/* 2-Column Media Showcase (Screenshot 8) */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                          
                          {/* Left Column: Primary Big 3D Showcase Image */}
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenProjectModal(project);
                            }}
                            className="md:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 border border-zinc-800 relative group/img cursor-pointer"
                          >
                            <img
                              src={project.mainImage}
                              alt={project.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700"
                            />
                            {project.hasAdFilm && (
                              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-mono text-pink-300 border border-pink-500/40 flex items-center gap-1.5 shadow-lg">
                                <Film className="w-3.5 h-3.5 text-pink-400" />
                                <span>TV COMMERCIAL VIDEO</span>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                              <div className="w-full flex items-center justify-between">
                                <span className="text-xs font-mono text-white flex items-center gap-2">
                                  <Sparkles className="w-4 h-4 text-pink-400" />
                                  {project.hasAdFilm ? 'Click to play Commercial Video' : 'Click to view strategic framework & insights'}
                                </span>
                                {project.hasAdFilm && (
                                  <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg group-hover/img:scale-110 transition-transform">
                                    <Play className="w-4 h-4 ml-0.5" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Right Column: Secondary 3D Render & Key Information */}
                          <div className="md:col-span-5 flex flex-col justify-between space-y-5">
                            
                            {/* Secondary 3D Image preview */}
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenProjectModal(project);
                              }}
                              className="rounded-2xl overflow-hidden aspect-[16/9] bg-zinc-900 border border-zinc-800 relative group/sub cursor-pointer"
                            >
                              <img
                                src={project.secondaryImage}
                                alt={project.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover transform group-hover/sub:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-zinc-300 border border-white/10 flex items-center gap-1.5">
                                {project.id === 'proj-lotus' ? (
                                  <>
                                    <span className="w-2 h-2 rounded-full bg-amber-600 inline-block" />
                                    <span>LOTUS CHOCOLATE CONFECTIONERY & PACKAGING</span>
                                  </>
                                ) : (
                                  <span>PRODUCTION ASSET</span>
                                )}
                              </div>
                            </div>

                            {/* Project Narrative */}
                            <div className="space-y-3">
                              <h3 className="font-syne font-black text-xl sm:text-2xl text-white leading-snug">
                                {project.title}
                              </h3>
                              <p className="font-outfit text-sm text-zinc-300 leading-relaxed">
                                {project.description}
                              </p>
                            </div>

                            {/* Tools Used */}
                            <div className="flex flex-wrap gap-2 pt-2">
                              {project.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>

                            {/* Action CTA */}
                            <div className="pt-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenProjectModal(project);
                                }}
                                className="w-full py-3 rounded-full glow-pill text-white text-xs font-bold tracking-wider uppercase text-center shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                              >
                                <span>VIEW STRATEGY DECK & METRICS</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </button>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

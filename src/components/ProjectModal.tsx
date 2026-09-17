import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2, Layers, BarChart2, Search, Gauge, Globe } from 'lucide-react';
import { AdFilmPlayer } from './AdFilmPlayer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isAdFilmProject = project.hasAdFilm || project.id === 'proj-lotus' || project.client.toLowerCase().includes('lotus');

  return (
    <AnimatePresence>
      <div
        id="project-modal-backdrop"
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-auto text-white"
        >
          {/* Header Bar */}
          <div className="px-6 sm:px-8 py-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/80">
            <div className="flex items-center gap-3">
              <span className="font-syne font-black text-2xl text-pink-500">
                {project.number}
              </span>
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                  {project.client} • {project.year}
                </span>
                <h3 className="font-syne font-black text-lg sm:text-xl text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto space-y-8">
            <div className="space-y-8">
              {/* Hero Showcase Graphic: Video Player for Lotus / Image for others */}
              {isAdFilmProject ? (
                <AdFilmPlayer />
              ) : (
                <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-zinc-900 border border-zinc-800 relative">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-zinc-200 border border-white/10">
                    {project.category}
                  </div>
                </div>
              )}

              {/* Metrics Highlights */}
              {project.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col items-center text-center"
                    >
                      <span className="font-syne font-black text-3xl text-pink-400">
                        {metric.value}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 uppercase mt-1">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* PageSpeed Insights (Desktop) Score Dashboard */}
              {project.pageSpeedScores && (
                <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <Gauge className="w-5 h-5 text-emerald-400" />
                      <h4 className="font-syne font-bold text-base text-white">
                        PageSpeed Insights (Desktop Core Web Vitals)
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full self-start sm:self-auto">
                      100/100 Perfect SEO
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex flex-col items-center text-center group hover:border-emerald-500/40 transition-colors">
                      <div className="w-16 h-16 rounded-full border-4 border-emerald-500/80 flex items-center justify-center font-syne font-black text-2xl text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        {project.pageSpeedScores.performance}
                      </div>
                      <span className="font-syne font-bold text-xs text-zinc-200 mt-2.5">Performance</span>
                      <span className="text-[10px] font-mono text-emerald-400 mt-0.5">Optimized SPA</span>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex flex-col items-center text-center group hover:border-emerald-500/40 transition-colors">
                      <div className="w-16 h-16 rounded-full border-4 border-emerald-500/80 flex items-center justify-center font-syne font-black text-2xl text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        {project.pageSpeedScores.accessibility}
                      </div>
                      <span className="font-syne font-bold text-xs text-zinc-200 mt-2.5">Accessibility</span>
                      <span className="text-[10px] font-mono text-emerald-400 mt-0.5">WCAG Compliant</span>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex flex-col items-center text-center group hover:border-emerald-500/40 transition-colors">
                      <div className="w-16 h-16 rounded-full border-4 border-emerald-500/80 flex items-center justify-center font-syne font-black text-2xl text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        {project.pageSpeedScores.bestPractices}
                      </div>
                      <span className="font-syne font-bold text-xs text-zinc-200 mt-2.5">Best Practices</span>
                      <span className="text-[10px] font-mono text-emerald-400 mt-0.5">Modern Web Standards</span>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex flex-col items-center text-center group hover:border-emerald-500/40 transition-colors">
                      <div className="w-16 h-16 rounded-full border-4 border-emerald-500/80 flex items-center justify-center font-syne font-black text-2xl text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        {project.pageSpeedScores.seo}
                      </div>
                      <span className="font-syne font-bold text-xs text-zinc-200 mt-2.5">SEO Score</span>
                      <span className="text-[10px] font-mono text-emerald-400 mt-0.5">Semantic Schema</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Strategic Framework / Case Study */}
              {project.strategicFramework && (
                <div className="space-y-6 pt-2">
                  <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                    <h4 className="font-syne font-bold text-base text-pink-400">
                      {project.strategicFramework.marketProblem.headline}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-outfit text-zinc-300">
                      <div className="space-y-1">
                        <span className="font-mono text-zinc-400 text-[10px] uppercase block">
                          Market Landscape
                        </span>
                        <p>{project.strategicFramework.marketProblem.landscape}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-pink-400 text-[10px] uppercase block">
                          Identified Friction
                        </span>
                        <p>{project.strategicFramework.marketProblem.friction}</p>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Pillars */}
                  <div className="space-y-3">
                    <h4 className="font-syne font-bold text-sm text-zinc-300 uppercase tracking-wider">
                      Strategic Execution Pillars
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.strategicFramework.strategicPillars.map((pillar, i) => (
                        <div
                          key={i}
                          className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-2"
                        >
                          <span className="text-xs font-mono text-pink-400 font-bold">
                            0{i + 1}. {pillar.pillar}
                          </span>
                          <h5 className="font-syne font-bold text-sm text-white">
                            {pillar.title}
                          </h5>
                          <p className="text-xs text-zinc-400 leading-relaxed font-outfit">
                            {pillar.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Execution Breakdown */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 space-y-4">
                    <h4 className="font-syne font-bold text-base text-white">
                      Tactical Execution Architecture
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="space-y-1.5">
                        <span className="font-mono text-pink-400 font-bold uppercase block text-[11px]">
                          1. Brand Identity
                        </span>
                        <p className="text-zinc-400 leading-relaxed">
                          {project.strategicFramework.executionBreakdown.brandIdentity}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <span className="font-mono text-purple-400 font-bold uppercase block text-[11px]">
                          2. Digital Ecosystem
                        </span>
                        <p className="text-zinc-400 leading-relaxed">
                          {project.strategicFramework.executionBreakdown.digitalEcosystem}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <span className="font-mono text-blue-400 font-bold uppercase block text-[11px]">
                          3. Market Rollout
                        </span>
                        <p className="text-zinc-400 leading-relaxed">
                          {project.strategicFramework.executionBreakdown.marketRollout}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Design Sheets / UI Wireframes Grid */}
              {project.designSheets && project.designSheets.length > 0 && (
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-syne font-bold text-sm text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-pink-400" />
                      <span>Production Design Sheets & Architectural Wireframes</span>
                    </h4>
                    <span className="text-[11px] font-mono text-pink-400">
                      {project.designSheets.length} Design Artifacts
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.designSheets.map((sheet, sIdx) => (
                      <div
                        key={sIdx}
                        className="rounded-2xl overflow-hidden bg-zinc-900/70 border border-zinc-800 flex flex-col group hover:border-pink-500/40 transition-colors"
                      >
                        {sheet.image && (
                          <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                            <img
                              src={sheet.image}
                              alt={sheet.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono text-zinc-300 uppercase">
                              {sheet.type}
                            </div>
                          </div>
                        )}
                        <div className="p-5 space-y-3 bg-zinc-900/90 flex-1 flex flex-col justify-between">
                          <div>
                            {sheet.subtitle && (
                              <span className="text-[10px] font-mono text-pink-400 uppercase tracking-wider block mb-1">
                                {sheet.subtitle}
                              </span>
                            )}
                            <h5 className="font-syne font-bold text-sm text-white">
                              {sheet.title}
                            </h5>
                            <p className="text-xs text-zinc-400 font-outfit mt-1 leading-relaxed">
                              {sheet.description}
                            </p>
                          </div>

                          {sheet.tags && sheet.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                              {sheet.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Core Deliverables & Tech */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-800">
                <div className="space-y-3">
                  <h4 className="font-syne font-bold text-sm text-white uppercase tracking-wider">
                    Core Project Impact & Results
                  </h4>
                  <ul className="space-y-2">
                    {project.resultsBullets ? (
                      project.resultsBullets.map((res, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))
                    ) : (
                      project.deliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))
                    )}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-4">
                  <div>
                    <h5 className="font-syne font-bold text-xs uppercase tracking-wider text-zinc-400 mb-2">
                      KEY DELIVERABLES
                    </h5>
                    <ul className="space-y-1.5">
                      {project.deliverables.map((del, i) => (
                        <li key={i} className="text-xs text-zinc-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-zinc-800">
                    <h5 className="font-syne font-bold text-xs uppercase tracking-wider text-zinc-400 mb-2">
                      TECH & SHADERS
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-zinc-800 text-[11px] font-mono text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* External Live Tools & Production Telemetry (GA4, Search Console, PageSpeed) */}
              {project.externalLinks && project.externalLinks.length > 0 && (
                <div className="pt-4 border-t border-zinc-800/80 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-syne font-bold text-sm text-white flex items-center gap-2">
                      <BarChart2 className="w-4 h-4 text-emerald-400" />
                      <span>LIVE PERFORMANCE, SEARCH CONSOLE & ANALYTICS TELEMETRY</span>
                    </h4>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      Verified Production Setup
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {project.externalLinks.map((ext, idx) => (
                      <a
                        key={idx}
                        href={ext.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-850 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-emerald-300 group-hover:bg-emerald-500/20 transition-colors">
                              {ext.type === 'analytics' && <BarChart2 className="w-4 h-4 text-amber-400" />}
                              {ext.type === 'search-console' && <Search className="w-4 h-4 text-blue-400" />}
                              {ext.type === 'pagespeed' && <Gauge className="w-4 h-4 text-emerald-400" />}
                              {ext.type === 'live' && <Globe className="w-4 h-4 text-pink-400" />}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                          </div>
                          <h5 className="font-syne font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                            {ext.label}
                          </h5>
                          {ext.description && (
                            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                              {ext.description}
                            </p>
                          )}
                        </div>
                        <span className="mt-3 text-[10px] font-mono text-zinc-500 group-hover:text-emerald-400 flex items-center gap-1">
                          Launch Dashboard →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STRATEGIC_STUDIES } from '../data/portfolioData';
import { StrategicStudy } from '../types';
import { Bookmark, X, Sparkles, Eye, CheckCircle2, BarChart2, Layers, ExternalLink, Globe, Search, Gauge } from 'lucide-react';

export const ArtworkShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStudy, setActiveStudy] = useState<StrategicStudy | null>(null);
  const [savedStudies, setSavedStudies] = useState<{ [key: string]: boolean }>({});

  const categories = ['All', 'Brand Strategy', 'Analytics', 'Campaigns & AI'];

  const filteredStudies = selectedCategory === 'All'
    ? STRATEGIC_STUDIES
    : STRATEGIC_STUDIES.filter((item) => item.category === selectedCategory);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedStudies({ ...savedStudies, [id]: !savedStudies[id] });
  };

  const handleOpenStudy = (study: StrategicStudy) => {
    setActiveStudy(study);
  };

  return (
    <section id="recent-projects" className="py-16 sm:py-24 bg-[#08080a] relative overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-pink-400 text-xs font-mono tracking-widest uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>RECENT WORK &amp; INTERNSHIP DELIVERABLES</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              RECENT PROJECTS & STUDIES
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStudies.map((item, idx) => {
            const isSaved = !!savedStudies[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => handleOpenStudy(item)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Visual Image Container */}
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-zinc-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

                  {/* Top quick badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-pink-300">
                      {item.category}
                    </span>
                    {item.liveUrl && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/80 backdrop-blur-md text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Live App
                      </span>
                    )}
                  </div>

                  {/* Save/Bookmark button on top right */}
                  <button
                    onClick={(e) => toggleSave(item.id, e)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:text-pink-400 transition-all hover:scale-110"
                    aria-label="Bookmark study"
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-pink-500 text-pink-500' : ''}`} />
                  </button>

                  {/* Hover Inspect Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-2xl">
                      <Eye className="w-3.5 h-3.5" />
                      <span>READ STRATEGY BRIEF</span>
                    </div>
                  </div>
                </div>

                {/* Card Meta Body & Impact Tag */}
                <div className="p-5 flex flex-col justify-between flex-1 bg-zinc-900/90 backdrop-blur-sm border-t border-zinc-800/80">
                  <div className="space-y-2">
                    <h3 className="font-syne font-bold text-base sm:text-lg text-white group-hover:text-pink-400 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {item.medium}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400 text-[11px] truncate max-w-[150px]">{item.colorScheme}</span>
                    <span className="text-pink-400 font-semibold bg-pink-500/10 px-2.5 py-0.5 rounded-full border border-pink-500/20 text-[11px]">
                      {item.impactMetric}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Interactive Study Modal */}
      <AnimatePresence>
        {activeStudy && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setActiveStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-auto text-white"
            >
              {/* Header Bar */}
              <div className="px-6 sm:px-8 py-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/90">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-pink-400 uppercase tracking-wider block">
                      {activeStudy.category} • {activeStudy.client || 'Strategy Lab'}
                    </span>
                    <h3 className="font-syne font-black text-lg sm:text-xl text-white">
                      {activeStudy.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {activeStudy.liveUrl && (
                    <a
                      href={activeStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>VISIT LIVE SITE</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <button
                    onClick={() => setActiveStudy(null)}
                    className="p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close study modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
                
                {/* PDF Brief Overview Section (When available) */}
                {(activeStudy.executiveSummary || activeStudy.scopeOfWork) ? (
                  <div className="space-y-6">
                    {/* Top Brief Header & Role */}
                    <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                            {activeStudy.medium || activeStudy.category}
                          </span>
                          <h4 className="font-syne font-black text-2xl text-white">
                            {activeStudy.client || activeStudy.title}
                          </h4>
                        </div>
                        {activeStudy.role && (
                          <div className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 font-mono text-xs self-start sm:self-auto">
                            Role: <span className="font-bold text-white">{activeStudy.role}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm font-outfit text-zinc-300 leading-relaxed pt-2 border-t border-zinc-800/80">
                        <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block font-bold">
                          Project Overview
                        </span>
                        <p>{activeStudy.executiveSummary}</p>
                      </div>
                    </div>

                    {/* PageSpeed Insights (Desktop) 4 Metric Rings */}
                    {activeStudy.pageSpeedScores && (
                      <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-emerald-400" />
                            <h4 className="font-syne font-bold text-base text-white">
                              PageSpeed Insights (Desktop)
                            </h4>
                          </div>
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 rounded-full">
                            Lighthouse Audited & Verified
                          </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                          <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center font-syne font-black text-2xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                              {activeStudy.pageSpeedScores.performance}
                            </div>
                            <span className="font-syne font-bold text-xs text-zinc-200 mt-2.5">Performance</span>
                            <span className="text-[10px] font-mono text-emerald-400">Desktop FCP</span>
                          </div>

                          <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center font-syne font-black text-2xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                              {activeStudy.pageSpeedScores.accessibility}
                            </div>
                            <span className="font-syne font-bold text-xs text-zinc-200 mt-2.5">Accessibility</span>
                            <span className="text-[10px] font-mono text-emerald-400">WCAG Compliant</span>
                          </div>

                          <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center font-syne font-black text-2xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                              {activeStudy.pageSpeedScores.bestPractices}
                            </div>
                            <span className="font-syne font-bold text-xs text-zinc-200 mt-2.5">Best Practices</span>
                            <span className="text-[10px] font-mono text-emerald-400">Modern Web</span>
                          </div>

                          <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full border-4 border-emerald-400 flex items-center justify-center font-syne font-black text-2xl text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.35)]">
                              {activeStudy.pageSpeedScores.seo}
                            </div>
                            <span className="font-syne font-bold text-xs text-emerald-300 mt-2.5">SEO</span>
                            <span className="text-[10px] font-mono text-emerald-400 font-bold">100/100 Perfect</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Scope of Work */}
                    {activeStudy.scopeOfWork && activeStudy.scopeOfWork.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="font-syne font-bold text-base text-white flex items-center gap-2">
                          <Layers className="w-4 h-4 text-pink-400" />
                          <span>SCOPE OF WORK</span>
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {activeStudy.scopeOfWork.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-pink-500/40 transition-all flex flex-col justify-start"
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                                <h5 className="font-syne font-bold text-sm text-white">{item.title}</h5>
                              </div>
                              <p className="text-xs text-zinc-300 leading-relaxed font-outfit">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tables: Digital Marketing & Key Highlights */}
                    {(activeStudy.analyticsToolsTable || activeStudy.keyHighlightsTable) && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                        {/* Digital Marketing & Analytics Table */}
                        {activeStudy.analyticsToolsTable && (
                          <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
                            <h4 className="font-syne font-bold text-sm text-white flex items-center gap-2">
                              <BarChart2 className="w-4 h-4 text-amber-400" />
                              <span>DIGITAL MARKETING & ANALYTICS</span>
                            </h4>
                            <div className="overflow-x-auto">
                              <table className="w-full text-left text-xs">
                                <thead>
                                  <tr className="border-b border-zinc-800 text-zinc-400 font-mono text-[10px] uppercase">
                                    <th className="pb-2 font-medium">Tool</th>
                                    <th className="pb-2 font-medium">Purpose</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800/60 font-outfit">
                                  {activeStudy.analyticsToolsTable.map((row, rIdx) => (
                                    <tr key={rIdx} className="hover:bg-zinc-800/30">
                                      <td className="py-2.5 pr-3 font-semibold text-white font-syne whitespace-nowrap">
                                        {row.tool}
                                      </td>
                                      <td className="py-2.5 text-zinc-300 leading-relaxed">
                                        {row.purpose}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {/* Key Highlights Table */}
                        {activeStudy.keyHighlightsTable && (
                          <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
                            <h4 className="font-syne font-bold text-sm text-white flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-pink-400" />
                              <span>KEY HIGHLIGHTS</span>
                            </h4>
                            <div className="overflow-x-auto">
                              <table className="w-full text-left text-xs">
                                <thead>
                                  <tr className="border-b border-zinc-800 text-zinc-400 font-mono text-[10px] uppercase">
                                    <th className="pb-2 font-medium">Area</th>
                                    <th className="pb-2 font-medium">Detail</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800/60 font-outfit">
                                  {activeStudy.keyHighlightsTable.map((row, rIdx) => (
                                    <tr key={rIdx} className="hover:bg-zinc-800/30">
                                      <td className="py-2.5 pr-3 font-semibold text-pink-300 font-syne whitespace-nowrap">
                                        {row.area}
                                      </td>
                                      <td className="py-2.5 text-zinc-300 leading-relaxed">
                                        {row.detail}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Results & Impact */}
                    {activeStudy.resultsBullets && activeStudy.resultsBullets.length > 0 && (
                      <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-3">
                        <h4 className="font-syne font-bold text-sm text-emerald-300 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>RESULTS & IMPACT</span>
                        </h4>
                        {activeStudy.strategicOutcome && (
                          <p className="text-xs text-zinc-300 font-outfit leading-relaxed">
                            {activeStudy.strategicOutcome}
                          </p>
                        )}
                        <ul className="space-y-2 text-xs text-zinc-200 font-outfit pt-1">
                          {activeStudy.resultsBullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <span className="text-emerald-400 font-bold font-mono text-sm leading-none mt-0.5">›</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Storyboard & Strategic Design Sheets (When Available) */}
                    {activeStudy.designSheets && activeStudy.designSheets.length > 0 && (
                      <div className="space-y-6 pt-2">
                        {activeStudy.designSheets.map((sheet, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-4"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                              <div>
                                <span className="text-[10px] font-mono text-pink-400 uppercase tracking-widest block mb-0.5">
                                  {sheet.subtitle}
                                </span>
                                <h4 className="font-syne font-bold text-lg text-white">
                                  {sheet.title}
                                </h4>
                              </div>
                              <div className="flex flex-wrap items-center gap-1.5">
                                {sheet.tags.map((tag, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/60"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <p className="text-xs text-zinc-300 font-outfit leading-relaxed">
                              {sheet.description}
                            </p>

                            {sheet.items && sheet.items.length > 0 && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                                {sheet.items.map((item, itmIdx) => (
                                  <div
                                    key={itmIdx}
                                    className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-1.5 flex flex-col justify-between"
                                  >
                                    <div>
                                      <div className="flex items-center justify-between gap-2 mb-1">
                                        <span className="font-syne font-bold text-xs text-white">
                                          {item.label}
                                        </span>
                                        {item.badge && (
                                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30 whitespace-nowrap">
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[11px] text-zinc-300 font-outfit leading-relaxed">
                                        {item.description}
                                      </p>
                                    </div>
                                    {item.subtext && (
                                      <span className="text-[10px] font-mono text-zinc-400 block pt-1 border-t border-zinc-800/50">
                                        {item.subtext}
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* External Live Tools & Production Telemetry (GA4, Search Console, PageSpeed) */}
                    {activeStudy.externalLinks && activeStudy.externalLinks.length > 0 && (
                      <div className="pt-4 border-t border-zinc-800/80 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-syne font-bold text-sm text-white flex items-center gap-2">
                            <BarChart2 className="w-4 h-4 text-emerald-400" />
                            <span>LIVE PRODUCTION & ANALYTICS TELEMETRY</span>
                          </h4>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                            Verified Production Setup
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                          {activeStudy.externalLinks.map((ext, idx) => (
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
                ) : (
                  /* Default Study Overview */
                  <div className="space-y-6">
                    <div className="aspect-[16/9] w-full bg-black overflow-hidden rounded-2xl border border-zinc-800 relative">
                      <img
                        src={activeStudy.image}
                        alt={activeStudy.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-xs font-mono text-pink-400 uppercase tracking-wider bg-pink-500/20 border border-pink-500/30 px-3 py-1 rounded-full">
                          {activeStudy.category}
                        </span>
                        <h3 className="font-syne font-black text-2xl sm:text-3xl text-white mt-3">
                          {activeStudy.title}
                        </h3>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Research Medium & Scope</h4>
                      <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                        {activeStudy.medium}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                      <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                        <span className="text-xs font-mono text-zinc-400 uppercase block mb-1">Visual / Brand Tone</span>
                        <span className="font-syne font-bold text-sm text-white">{activeStudy.colorScheme}</span>
                      </div>
                      <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40">
                        <span className="text-xs font-mono text-pink-300 uppercase block mb-1">Impact & Strategic Metric</span>
                        <span className="font-syne font-bold text-sm text-pink-300">{activeStudy.impactMetric}</span>
                      </div>
                    </div>

                    {/* External Live Tools */}
                    {activeStudy.externalLinks && activeStudy.externalLinks.length > 0 && (
                      <div className="pt-4 border-t border-zinc-800/80 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-syne font-bold text-sm text-white flex items-center gap-2">
                            <BarChart2 className="w-4 h-4 text-emerald-400" />
                            <span>LIVE PRODUCTION & ANALYTICS TELEMETRY</span>
                          </h4>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                            Verified Production Setup
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                          {activeStudy.externalLinks.map((ext, idx) => (
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
                )}

                {/* Footer Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-800">
                  <span className="text-xs font-mono text-zinc-500">
                    {activeStudy.client || 'Strategy Lab'} • Full Deliverables & Live Assets
                  </span>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {activeStudy.liveUrl && (
                      <a
                        href={activeStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors cursor-pointer"
                      >
                        <Globe className="w-4 h-4" />
                        <span>
                          {activeStudy.liveUrl.includes('netlify')
                            ? 'VISIT NETLIFY LIVE APP'
                            : activeStudy.liveUrl.includes('brewtopia')
                            ? 'VISIT BREWTOPIA LIVE APP'
                            : 'VISIT LIVE APPLICATION'}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => setActiveStudy(null)}
                      className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-white text-black font-syne font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors cursor-pointer"
                    >
                      Close Deck
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};


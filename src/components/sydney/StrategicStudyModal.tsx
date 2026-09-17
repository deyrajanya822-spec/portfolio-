import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StrategicStudy } from '../../types';
import { X, ExternalLink, Globe, Gauge, Layers, BarChart2, Sparkles, CheckCircle2, ArrowUpRight, Play } from 'lucide-react';

interface StrategicStudyModalProps {
  study: StrategicStudy | null;
  onClose: () => void;
  onOpenVideo?: () => void;
}

export const StrategicStudyModal: React.FC<StrategicStudyModalProps> = ({ study, onClose, onOpenVideo }) => {
  if (!study) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full bg-[#1A1815] border border-[#3E3830] rounded-3xl overflow-hidden shadow-2xl my-auto text-[#EDE8E1]"
        >
          {/* Header Bar */}
          <div className="px-6 sm:px-8 py-5 border-b border-[#332E27] flex items-center justify-between bg-[#24211D]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#7A141D]/20 border border-[#7A141D]/40 text-[#E06D75]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#DCA28A] uppercase tracking-wider block">
                  {study.category} • {study.client || 'Strategy Lab'}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  {study.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {study.id === 'study-placement-copilot' && onOpenVideo && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenVideo();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A141D] hover:bg-[#961924] text-white text-xs font-mono font-bold transition-all shadow-sm cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video (02:24)</span>
                </button>
              )}

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-[#332E27] hover:bg-[#453F36] text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close study modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
            {/* Top Brief Header & Role */}
            <div className="p-6 rounded-2xl bg-[#24211D] border border-[#332E27] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                    {study.medium || study.category}
                  </span>
                  <h4 className="font-serif font-bold text-2xl text-white">
                    {study.client || study.title}
                  </h4>
                </div>
                {study.role && (
                  <div className="px-3.5 py-1.5 rounded-full bg-[#7A141D]/20 border border-[#7A141D]/40 text-[#E06D75] font-mono text-xs self-start sm:self-auto">
                    Role: <span className="font-bold text-white">{study.role}</span>
                  </div>
                )}
              </div>

              {study.executiveSummary && (
                <div className="space-y-2 text-xs sm:text-sm font-sans text-zinc-300 leading-relaxed pt-2 border-t border-[#332E27]">
                  <span className="font-mono text-xs text-[#DCA28A] uppercase tracking-wider block font-bold">
                    Executive Overview
                  </span>
                  <p>{study.executiveSummary}</p>
                </div>
              )}
            </div>

            {/* Live External Links Hub */}
            {study.externalLinks && study.externalLinks.length > 0 && (
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#DCA28A] font-semibold block">
                  Interactive Deployments &amp; Live Audits
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {study.externalLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-[#24211D] border border-[#332E27] hover:border-[#7A141D] hover:bg-[#2A2621] transition-all flex items-start justify-between group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Globe className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="font-serif font-medium text-sm text-white group-hover:text-amber-300 transition-colors">
                            {link.label}
                          </span>
                        </div>
                        {link.description && (
                          <p className="text-xs text-zinc-400 font-sans">
                            {link.description}
                          </p>
                        )}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-300 transition-colors shrink-0 ml-2" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* PageSpeed Insights 4 Metric Rings (When available) */}
            {study.pageSpeedScores && (
              <div className="p-6 rounded-2xl bg-[#24211D] border border-[#332E27] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-emerald-400" />
                    <h4 className="font-serif font-bold text-base text-white">
                      PageSpeed Insights (Desktop)
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 rounded-full">
                    Lighthouse Audited &amp; Verified
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#1A1815] border border-[#332E27] flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center font-mono font-bold text-2xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                      {study.pageSpeedScores.performance}
                    </div>
                    <span className="font-medium text-xs text-zinc-200 mt-2.5">Performance</span>
                    <span className="text-[10px] font-mono text-emerald-400">Desktop FCP</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#1A1815] border border-[#332E27] flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center font-mono font-bold text-2xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                      {study.pageSpeedScores.accessibility}
                    </div>
                    <span className="font-medium text-xs text-zinc-200 mt-2.5">Accessibility</span>
                    <span className="text-[10px] font-mono text-emerald-400">WCAG Compliant</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#1A1815] border border-[#332E27] flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center font-mono font-bold text-2xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                      {study.pageSpeedScores.bestPractices}
                    </div>
                    <span className="font-medium text-xs text-zinc-200 mt-2.5">Best Practices</span>
                    <span className="text-[10px] font-mono text-emerald-400">Modern Web</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#1A1815] border border-[#332E27] flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full border-4 border-emerald-400 flex items-center justify-center font-mono font-bold text-2xl text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.35)]">
                      {study.pageSpeedScores.seo}
                    </div>
                    <span className="font-medium text-xs text-emerald-300 mt-2.5">SEO</span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">100/100 Perfect</span>
                  </div>
                </div>
              </div>
            )}

            {/* Scope of Work */}
            {study.scopeOfWork && study.scopeOfWork.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-base text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#DCA28A]" />
                  <span>SCOPE OF ARCHITECTURE</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {study.scopeOfWork.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#24211D] border border-[#332E27] hover:border-[#7A141D]/60 transition-all flex flex-col justify-start"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#E06D75]"></span>
                        <h5 className="font-serif font-bold text-sm text-white">{item.title}</h5>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tables: Analytics Tools & Key Highlights */}
            {(study.analyticsToolsTable || study.keyHighlightsTable) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                {study.analyticsToolsTable && (
                  <div className="p-5 rounded-2xl bg-[#24211D] border border-[#332E27] space-y-3">
                    <h4 className="font-serif font-bold text-sm text-white flex items-center gap-2">
                      <BarChart2 className="w-4 h-4 text-amber-400" />
                      <span>DECISION VIEWS &amp; ANALYTICS TAXONOMY</span>
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-[#332E27] text-zinc-400 font-mono text-[10px] uppercase">
                            <th className="pb-2 font-medium">View / Tool</th>
                            <th className="pb-2 font-medium">Strategic Objective</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#332E27]/70 font-sans">
                          {study.analyticsToolsTable.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-[#2A2621]">
                              <td className="py-2.5 pr-3 font-semibold text-white font-serif whitespace-nowrap">
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

                {study.keyHighlightsTable && (
                  <div className="p-5 rounded-2xl bg-[#24211D] border border-[#332E27] space-y-3">
                    <h4 className="font-serif font-bold text-sm text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#DCA28A]" />
                      <span>STRATEGIC HIGHLIGHTS &amp; STACK</span>
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-[#332E27] text-zinc-400 font-mono text-[10px] uppercase">
                            <th className="pb-2 font-medium">Dimension</th>
                            <th className="pb-2 font-medium">Implementation Detail</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#332E27]/70 font-sans">
                          {study.keyHighlightsTable.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-[#2A2621]">
                              <td className="py-2.5 pr-3 font-semibold text-[#DCA28A] font-serif whitespace-nowrap">
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
            {study.resultsBullets && study.resultsBullets.length > 0 && (
              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3">
                <h4 className="font-serif font-bold text-sm text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>RESULTS &amp; COMMERCIAL IMPACT</span>
                </h4>
                {study.strategicOutcome && (
                  <p className="text-xs text-zinc-200 font-sans leading-relaxed">
                    {study.strategicOutcome}
                  </p>
                )}
                <ul className="space-y-2 text-xs text-zinc-200 font-sans pt-1">
                  {study.resultsBullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 font-bold font-mono text-sm leading-none mt-0.5">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

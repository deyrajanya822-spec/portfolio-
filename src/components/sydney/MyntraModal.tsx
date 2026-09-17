import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Layers,
  LayoutGrid,
  Sparkles,
  ArrowRight,
  Filter,
  DollarSign,
  PieChart,
  Target,
  Award
} from 'lucide-react';

interface MyntraModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MyntraModal: React.FC<MyntraModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'problem' | 'approach' | 'impact'>('problem');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#E0D5C7] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E8DFD5] bg-[#F4EDE2]/80 backdrop-blur-sm shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#7A141D] text-white flex items-center justify-center shadow-sm">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A141D] font-bold">
                    Case Study 03 • Academic Project
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-[#7A141D] border border-rose-500/20">
                    PGDM • GLIM Gurgaon
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1F1D1A]">
                  Myntra — Marketing Decision-Support System
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 text-[#5C554D] hover:text-[#1F1D1A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 3-Tab Selector */}
          <div className="px-6 sm:px-8 pt-4 border-b border-[#E8DFD5] bg-[#FAF7F2] shrink-0">
            <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
              {[
                { id: 'problem', label: '1. The Problem', icon: Target },
                { id: 'approach', label: '2. My Approach', icon: LayoutGrid },
                { id: 'impact', label: '3. Output & Impact', icon: Award }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#7A141D] text-white shadow-sm'
                        : 'bg-white text-[#6B635A] border border-[#E0D5C7] hover:border-[#7A141D]/40 hover:text-[#1F1D1A]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Container */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#2D2823] font-sans text-sm sm:text-base leading-relaxed">
            {activeTab === 'problem' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#7A141D] uppercase tracking-wider mb-2 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    Course Context &amp; Academic Brief
                  </div>
                  <h4 className="text-xl font-serif font-bold text-[#1F1D1A] mb-3">
                    Designing a Business Decision-Support System for Myntra
                  </h4>
                  <p className="text-[#554D45] leading-relaxed">
                    Undertaken as part of the core <strong>Marketing curriculum (PGDM, Great Lakes Institute of Management, Gurgaon)</strong>. The project challenged students to construct an executive decision-support architecture for an enterprise-scale fashion and lifestyle e-commerce leader operating multiple business units.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#F0EAE1]/70 border border-[#E0D5C7] space-y-2">
                    <h5 className="font-serif font-bold text-[#1F1D1A] text-base flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7A141D]" />
                      Siloed Performance Visibility
                    </h5>
                    <p className="text-xs sm:text-sm text-[#5C554D]">
                      Myntra operates across <strong>5 Strategic Business Units (SBUs)</strong> — Men’s Wear, Women’s Wear, Kids, Beauty, and Footwear — across <strong>7 distinct marketing channels</strong> (Meta Ads, Google Search, Influencers, Affiliate, Push Notifications, In-App Display, and Email). Each team monitored disparate dashboards with zero unified visibility.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F0EAE1]/70 border border-[#E0D5C7] space-y-2">
                    <h5 className="font-serif font-bold text-[#1F1D1A] text-base flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7A141D]" />
                      Sub-Optimal Budget Allocation
                    </h5>
                    <p className="text-xs sm:text-sm text-[#5C554D]">
                      Budget allocation decisions between high-performing channels and lagging SBUs were frequently made on historical precedent rather than empirical return metrics. Teams lacked a standardized system to evaluate Return on Ad Spend (ROAS) and Cost Per Acquisition (CPA) simultaneously.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-[#7A141D] text-xs font-mono flex items-center gap-3">
                  <span className="font-bold shrink-0 uppercase tracking-wider">Core Problem:</span>
                  <span>Marketing teams across 5 SBUs and 7 channels had no unified view of marketing performance, leading to capital misallocation without clear ROI visibility.</span>
                </div>
              </motion.div>
            )}

            {activeTab === 'approach' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* 4 Steps in Approach */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Step 1 */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A141D] font-bold">
                        Step 1
                      </span>
                      <Layers className="w-4 h-4 text-[#7A141D]" />
                    </div>
                    <h5 className="font-serif font-bold text-[#1F1D1A] text-base">
                      Requirements Gathering
                    </h5>
                    <p className="text-xs text-[#554D45] leading-relaxed">
                      Conducted structured stakeholder mapping across Myntra’s organizational matrix, cataloging reporting needs for SBU Leads, Channel Managers, and Marketing Finance.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A141D] font-bold">
                        Step 2
                      </span>
                      <Target className="w-4 h-4 text-[#7A141D]" />
                    </div>
                    <h5 className="font-serif font-bold text-[#1F1D1A] text-base">
                      KPI Framework Design
                    </h5>
                    <p className="text-xs text-[#554D45] leading-relaxed">
                      Constructed a rigorous metrics hierarchy:
                      <br />• <strong>Primary:</strong> ROAS (efficiency) &amp; CPA (acquisition cost)
                      <br />• <strong>Secondary:</strong> Budget burn rate &amp; channel efficiency index
                      <br />• <strong>Coverage:</strong> 5 SBUs × 7 channels = <strong>35 performance cells</strong>
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A141D] font-bold">
                        Step 3
                      </span>
                      <LayoutGrid className="w-4 h-4 text-[#7A141D]" />
                    </div>
                    <h5 className="font-serif font-bold text-[#1F1D1A] text-base">
                      Dashboard Architecture
                    </h5>
                    <p className="text-xs text-[#554D45] leading-relaxed">
                      Structured a 3-tier executive drill-down layout:
                      <br />1. <strong>Company Level:</strong> Blended portfolio ROAS &amp; burn
                      <br />2. <strong>SBU Level:</strong> Category health vs. growth targets
                      <br />3. <strong>Channel Level:</strong> Granular ad-spend efficiency &amp; tripwires
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A141D] font-bold">
                        Step 4
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#7A141D]" />
                    </div>
                    <h5 className="font-serif font-bold text-[#1F1D1A] text-base">
                      Stakeholder Alignment
                    </h5>
                    <p className="text-xs text-[#554D45] leading-relaxed">
                      Presented the prototype decision framework to business faculties and peers, iterating threshold alerts and anomaly indicators based on realistic corporate trade-offs.
                    </p>
                  </div>
                </div>

                {/* 35 Performance Cells Matrix Preview */}
                <div className="p-5 rounded-2xl bg-[#F0EAE1]/80 border border-[#E0D5C7] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7A141D]">
                    <span className="font-bold uppercase tracking-wider">35 Performance Cells Matrix</span>
                    <span>5 SBUs × 7 Channels</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2 text-center text-[11px] font-mono text-[#4A423B]">
                    <div className="p-2 rounded-lg bg-white border border-[#DDD1C3]">Men’s Apparel</div>
                    <div className="p-2 rounded-lg bg-white border border-[#DDD1C3]">Women’s Ethnic/West</div>
                    <div className="p-2 rounded-lg bg-white border border-[#DDD1C3]">Kids &amp; Teens</div>
                    <div className="p-2 rounded-lg bg-white border border-[#DDD1C3]">Beauty &amp; Personal Care</div>
                    <div className="p-2 rounded-lg bg-white border border-[#DDD1C3]">Footwear &amp; Access.</div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'impact' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* 3 Value Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-[#7A141D] mb-1">
                      ROAS × CPA
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#6B635A]">
                      Dual-Metric Evaluation
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1D1A] mb-1">
                      35 Cells
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#6B635A]">
                      Matrix Coverage
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-700 mb-1">
                      Reallocation
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#6B635A]">
                      Data-Backed Capital
                    </div>
                  </div>
                </div>

                {/* Impact Bullets */}
                <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] space-y-3 shadow-xs">
                  <h4 className="font-serif font-bold text-base text-[#1F1D1A]">
                    Delivered Capabilities for Marketing Leadership:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#554D45]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Simultaneous ROAS &amp; CPA Comparison:</strong> Enabled executives to immediately recognize when high ROAS was masking unsustainable CPA spikes in saturated channels.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Isolated Underperforming SBU-Channel Cells:</strong> Exposed specific combinations (e.g. Footwear on Display vs. Beauty on Influencer) delivering sub-threshold efficiency.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Dynamic Budget Reallocation:</strong> Established structured rules to shift capital toward under-budgeted, high-velocity channels during sales events.</span>
                    </li>
                  </ul>
                </div>

                {/* Key Takeaway Quote */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#7A141D] to-[#4A0A10] text-white space-y-2 shadow-md">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-200">
                    Analytical Takeaway
                  </span>
                  <p className="font-serif italic text-base sm:text-lg leading-relaxed text-rose-50">
                    "Good analytics is not about generating pretty dashboards — it is about framing the exact right business questions and engineering metrics that empower executives to act with conviction."
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-6 sm:px-8 py-4 border-t border-[#E8DFD5] bg-[#F4EDE2]/80 flex items-center justify-between text-xs font-mono text-[#7D756C] shrink-0">
            <span>Academic Project • GLIM Gurgaon</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#7A141D] text-white hover:bg-[#610E16] transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

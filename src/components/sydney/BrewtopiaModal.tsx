import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Coffee,
  CheckCircle2,
  TrendingUp,
  Search,
  Code,
  Sparkles,
  ArrowRight,
  BarChart3,
  Globe,
  Sliders,
  Award
} from 'lucide-react';

interface BrewtopiaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrewtopiaModal: React.FC<BrewtopiaModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'challenge' | 'built' | 'results'>('challenge');

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
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A141D] font-bold">
                    Case Study 04 • Academic Project
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/20">
                    PGDM • GLIM Gurgaon
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1F1D1A]">
                  Brewtopia — Digital Transformation &amp; Analytics
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
                { id: 'challenge', label: '1. The Challenge', icon: Sparkles },
                { id: 'built', label: '2. What I Built', icon: Sliders },
                { id: 'results', label: '3. Results & Impact', icon: Award }
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
            {activeTab === 'challenge' && (
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
                    Leading Brewtopia’s End-to-End Digital Transformation
                  </h4>
                  <p className="text-[#554D45] leading-relaxed">
                    Undertaken as part of the <strong>Digital Marketing &amp; SEO specialization</strong> during the <strong>PGDM at Great Lakes Institute of Management (GLIM), Gurgaon</strong>. Brewtopia operates in the artisanal specialty beverage category, where physical sensory craftsmanship frequently struggles to translate onto digital interfaces without losing premium pricing power.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#F0EAE1]/70 border border-[#E0D5C7] space-y-2">
                    <h5 className="font-serif font-bold text-[#1F1D1A] text-base flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7A141D]" />
                      The Consumer Challenge
                    </h5>
                    <p className="text-xs sm:text-sm text-[#5C554D]">
                      Standard e-commerce storefronts treat coffee as a static SKU list. Consumers had no intuitive way to explore roast profiles, tasting notes, milk ratios, and artisanal temperature variables, causing high drop-off and weak brand engagement.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F0EAE1]/70 border border-[#E0D5C7] space-y-2">
                    <h5 className="font-serif font-bold text-[#1F1D1A] text-base flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#7A141D]" />
                      The Measurement Blindspot
                    </h5>
                    <p className="text-xs sm:text-sm text-[#5C554D]">
                      Digital decisions were being made in the dark. The brand lacked unified behavioral event tracking, custom conversion funnels, trigger management, and search crawl diagnostics, making it impossible to validate which touchpoints drove conversions.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#613600] text-xs font-mono flex items-center gap-3">
                  <span className="font-bold shrink-0 uppercase tracking-wider">Mandate:</span>
                  <span>Build an interactive consumer-facing platform ("Living Cup Builder") AND engineer the full underlying measurement stack to track every consumer micro-action.</span>
                </div>
              </motion.div>
            )}

            {activeTab === 'built' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Platform Build */}
                <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#7A141D] uppercase tracking-wider mb-2 font-semibold">
                    <Code className="w-3.5 h-3.5" />
                    Pillar 1: Consumer Platform
                  </div>
                  <h4 className="text-lg font-serif font-bold text-[#1F1D1A] mb-2">
                    Designed &amp; Built the "Living Cup Builder"
                  </h4>
                  <p className="text-xs sm:text-sm text-[#554D45] leading-relaxed mb-3">
                    Created an interactive, tactile consumer-facing application that lets visitors customize their bespoke beverage profile in real-time — blending bean origin, roast intensity, brew temperature, extraction profile, and oat/dairy pairings.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-[#6B635A]">
                    <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E8DFD5]">
                      • Dynamic Bean Roast Selector
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E8DFD5]">
                      • Real-time Flavor Notes Visualizer
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E8DFD5]">
                      • One-Click Recipe Checkout Cart
                    </div>
                  </div>
                </div>

                {/* Full Analytics Stack */}
                <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#7A141D] uppercase tracking-wider mb-2 font-semibold">
                    <BarChart3 className="w-3.5 h-3.5" />
                    Pillar 2: Full Analytics Stack Configuration
                  </div>
                  <h4 className="text-lg font-serif font-bold text-[#1F1D1A] mb-3">
                    End-to-End Measurement Infrastructure Deployed
                  </h4>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-700 flex items-center justify-center shrink-0 mt-0.5">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-serif font-bold text-[#1F1D1A] text-sm block">
                          Google Analytics 4 (GA4) Architecture
                        </span>
                        <p className="text-xs text-[#6B635A] mt-0.5">
                          Engineered custom event schemas (e.g. <code className="text-[#7A141D] font-mono">cup_builder_interact</code>, <code className="text-[#7A141D] font-mono">roast_selected</code>, <code className="text-[#7A141D] font-mono">cart_step_complete</code>), conversion funnels, and high-intent audience segmentations.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-serif font-bold text-[#1F1D1A] text-sm block">
                          Google Tag Manager (GTM) Container Setup
                        </span>
                        <p className="text-xs text-[#6B635A] mt-0.5">
                          Constructed container triggers, custom javascript DOM event variables, scroll-depth observers, and streamlined tag firing without requiring backend release cycles.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-serif font-bold text-[#1F1D1A] text-sm block">
                          Google Search Console &amp; Technical SEO
                        </span>
                        <p className="text-xs text-[#6B635A] mt-0.5">
                          Configured XML sitemap telemetry, Google bot indexing triggers, crawl budget management, and schema.org structured recipe/product markup.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'results' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Result KPI Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs">
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-emerald-700 mb-1">
                      100 / 100
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#6B635A]">
                      Technical SEO Audit Score
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs">
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-[#7A141D] mb-1">
                      Full Stack
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#6B635A]">
                      GA4 + GTM + Search Console
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-xs">
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1D1A] mb-1">
                      Live
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#6B635A]">
                      Interactive Cup Builder
                    </div>
                  </div>
                </div>

                {/* Key Achievements Checklist */}
                <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] space-y-3 shadow-xs">
                  <h4 className="font-serif font-bold text-base text-[#1F1D1A]">
                    Key Deliverables &amp; Verified Milestones:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#554D45]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>100/100 SEO Audit Score:</strong> Verified via Lighthouse and technical audit tools covering metadata, open graph tags, semantic headings, and mobile viewport performance.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Full Operational Telemetry:</strong> Seamless bi-directional data flow from consumer click events in GTM to GA4 conversion funnels with zero tag collisions.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Deployed Consumer Platform:</strong> Successfully launched tactile cup builder experience, transforming a static storefront into an engaging brand destination.</span>
                    </li>
                  </ul>
                </div>

                {/* Key Learning Quote */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#7A141D] to-[#4A0A10] text-white space-y-2 shadow-md">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-200">
                    Strategic Takeaway
                  </span>
                  <p className="font-serif italic text-base sm:text-lg leading-relaxed text-rose-50">
                    "Digital transformation is not just about building something that looks good — it is about building WITH measurement from day one, so every product and marketing decision is backed by clean data."
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

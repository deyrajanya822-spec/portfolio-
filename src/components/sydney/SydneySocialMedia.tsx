import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SOCIAL_CASE_STUDIES, SocialMediaCaseStudy } from '../../data/sydneyData';
import { STRATEGIC_STUDIES } from '../../data/portfolioData';
import { StrategicStudy } from '../../types';
import { StrategicStudyModal } from './StrategicStudyModal';
import { VideoDemonstrationModal } from './VideoDemonstrationModal';
import { getVideoBlob } from '../../utils/videoStorage';
import { 
  ArrowRight, BarChart3, TrendingUp, Layers, Sparkles, CheckCircle2, Play, ShieldCheck,
  Briefcase, Target, Scale, Compass, Check
} from 'lucide-react';

export const SydneySocialMedia: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<StrategicStudy | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [persistedVideoUrl, setPersistedVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    async function checkPersistedVideo() {
      try {
        const res = await fetch('/api/video-status?id=placement-copilot');
        if (res.ok) {
          const data = await res.json();
          if (data.exists && data.url) {
            setPersistedVideoUrl(data.url);
            return;
          }
        }
      } catch (e) {
        // Fallback to IndexedDB
      }

      try {
        const record = await getVideoBlob('placement-copilot');
        if (record && record.blob) {
          setPersistedVideoUrl(URL.createObjectURL(record.blob));
        }
      } catch (e) {
        // No saved video yet
      }
    }

    checkPersistedVideo();
  }, []);

  const handleVideoLoaded = React.useCallback((url: string) => {
    setPersistedVideoUrl((prev) => (prev === url ? prev : url));
  }, []);

  const handleOpenStudy = (studyId?: string) => {
    if (!studyId) return;
    const found = STRATEGIC_STUDIES.find((s) => s.id === studyId);
    if (found) setSelectedStudy(found);
  };

  return (
    <section id="projects" className="py-24 bg-[#FAF7F2] border-b border-[#E8DFD5]/60">
      <div id="case-studies"></div>
      <div id="social-media" className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Title with Consulting Lens */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Management Consulting &amp; Strategic Advisory Portfolio</span>
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1F1D1A] font-normal tracking-tight">
            Featured Case <span className="italic text-[#7A141D]">Engagements</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5C554D] font-sans mt-3 leading-relaxed max-w-2xl mx-auto">
            Hypothesis-driven engagements evaluated through the lens of management consulting: Enterprise Margin Optimization, Customer Experience (CX) Strategy, Operations Re-Engineering, and Behavioral Decision Science.
          </p>

          {/* Scannable 4-Project Index */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6">
            {SOCIAL_CASE_STUDIES.map((study, idx) => (
              <a
                key={study.id}
                href={`#${study.id}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#7A141D] text-[#5C554D] hover:text-white border border-[#E0D5C7] hover:border-[#7A141D] text-xs font-mono transition-all shadow-xs group"
              >
                <span className="font-bold text-[#7A141D] group-hover:text-white">0{idx + 1}</span>
                <span className="font-sans font-medium text-[11px] sm:text-xs">
                  {idx === 0
                    ? '01 Enterprise Margin Strategy (Myntra)'
                    : idx === 1
                    ? '02 CX Strategy & Flagship (Brewtopia)'
                    : idx === 2
                    ? '03 Operations & Applied AI (Co-Pilot)'
                    : '04 Behavioral Economics & Risk (GLIM)'}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Consulting Practice Matrix: 4 Strategic Pillars */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-3 mb-4 px-1">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#7A141D]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#1F1D1A] font-bold">
                Executive Capabilities &amp; Practice Area Alignment
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#7D756C] hidden sm:inline-block">
              Structured MECE Advisory Framework
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              {
                number: '01',
                pillar: 'Corporate Strategy & Profitability',
                client: 'Myntra (Flipkart / Walmart)',
                diagnostic: 'Blended ROAS masking organic demand cannibalization & SBU margin leakage.',
                methodology: 'Star Schema data decomposition & synthetic holdout incrementality.',
                metric: '₹2,300L+ Capital Allocation • 3.8x ROAS',
                anchor: '#case-myntra',
                icon: <BarChart3 className="w-4 h-4 text-[#7A141D]" />
              },
              {
                number: '02',
                pillar: 'Customer Experience (CX) & Brand',
                client: 'Brewtopia Handcrafted Atelier',
                diagnostic: 'Artisanal craft pedigree diluted in generic digital storefronts, eroding pricing power.',
                methodology: 'Tactile digital ceremony ("Living Cup Builder") + GA4 journey telemetry.',
                metric: '100/100 Core Web Vitals & SEO',
                anchor: '#case-brewtopia',
                icon: <Compass className="w-4 h-4 text-emerald-700" />
              },
              {
                number: '03',
                pillar: 'Operations & Applied AI',
                client: 'Autonomous Placement Co-Pilot',
                diagnostic: 'Severe operational latency & manual transcription in high-volume talent matching.',
                methodology: 'Autonomous multi-agent DAG (n8n) + isolated vector RAG chunking.',
                metric: '100% Intake Automation • <10s Tailoring',
                anchor: '#case-placement-copilot',
                icon: <Sparkles className="w-4 h-4 text-indigo-700" />
              },
              {
                number: '04',
                pillar: 'Behavioral Economics & Decision Science',
                client: 'GLIM Empirical Trust Model',
                diagnostic: 'Manufactured 5-star review inflation inducing consumer risk paralysis & cart abandonment.',
                methodology: 'Mixed-methods Grounded Theory (N=10) & SPSS moderated regression (R²=.410).',
                metric: 'r = .804 (p < .001) Issue Tolerability',
                anchor: '#case-trust-reconstruction',
                icon: <Scale className="w-4 h-4 text-amber-700" />
              }
            ].map((card) => (
              <a
                key={card.number}
                href={card.anchor}
                className="group p-4 rounded-2xl bg-white border border-[#E0D5C7] hover:border-[#7A141D]/50 hover:shadow-md transition-all flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#7A141D] bg-[#7A141D]/10 px-2 py-0.5 rounded">
                      PILLAR {card.number}
                    </span>
                    <div className="p-1.5 rounded-lg bg-[#FAF7F2] group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#1F1D1A] leading-snug group-hover:text-[#7A141D] transition-colors">
                    {card.pillar}
                  </h4>
                  <span className="text-[10px] font-mono text-[#7D756C] block mt-0.5 font-medium">
                    {card.client}
                  </span>
                  <div className="mt-3 pt-3 border-t border-[#F0EAE1] space-y-1.5">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-[#8C8379] block">
                        Diagnostic Focus
                      </span>
                      <p className="text-[11px] font-sans text-[#4A433B] leading-tight line-clamp-2">
                        {card.diagnostic}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#F0EAE1] flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#7A141D] truncate">
                    {card.metric}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8C8379] group-hover:text-[#7A141D] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-24">
          {SOCIAL_CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              id={study.id}
              className="scroll-mt-24 rounded-[2.8rem] bg-white border border-[#E0D5C7] p-8 sm:p-12 lg:p-14 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Case Study Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F0EAE1]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#7A141D] font-semibold">
                    ENGAGEMENT 0{idx + 1} • {study.role}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-serif text-[#1F1D1A] font-medium mt-1">
                    {study.organization}
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A141D] text-white text-xs font-mono font-medium self-start md:self-auto shadow-sm">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{study.metricHighlight}</span>
                </div>
              </div>

              {/* Strategic Advisory Brief: Problem, Analytical Approach & Impact */}
              {(study.strategicProblem || study.analyticalApproach || study.executiveImpact) && (
                <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBE3D7] text-left">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C8379] mb-1.5">
                      <Target className="w-3.5 h-3.5 text-amber-600" />
                      <span>01 Diagnostic Problem</span>
                    </div>
                    <p className="text-xs text-[#423C35] font-sans leading-relaxed">
                      {study.strategicProblem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBE3D7] text-left">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#8C8379] mb-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#7A141D]" />
                      <span>02 Analytical Approach</span>
                    </div>
                    <p className="text-xs text-[#423C35] font-sans leading-relaxed">
                      {study.analyticalApproach}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#7A141D]/5 border border-[#7A141D]/20 text-left">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#7A141D] mb-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#7A141D]" />
                      <span>03 Executive Impact</span>
                    </div>
                    <p className="text-xs text-[#1F1D1A] font-sans font-medium leading-relaxed">
                      {study.executiveImpact}
                    </p>
                  </div>
                </div>
              )}

              {/* Before & After Showcase with Transition Arrow */}
              <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Before Mockup */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div className="relative w-full max-w-[340px]">
                    {study.mockupStyle === 'browser' ? (
                      <div className="rounded-2xl border-4 border-[#2D2A26] bg-[#1F1D1A] overflow-hidden shadow-xl aspect-[16/11] relative flex flex-col">
                        {/* Browser Window Bar */}
                        <div className="bg-[#2D2A26] px-3 py-1.5 flex items-center gap-1.5 border-b border-[#3D3A36]">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                          <div className="ml-2 px-2 py-0.5 rounded bg-black/40 text-[9px] font-mono text-zinc-400 truncate max-w-[170px]">
                            {study.id === 'case-placement-copilot'
                              ? 'gmail_placement_inbox'
                              : study.id === 'case-trust-reconstruction'
                              ? 'review_distrust_audit.xlsx'
                              : study.id === 'case-myntra'
                              ? 'siloed_spreadsheets.xlsx'
                              : 'challenge_audit.pdf'}
                          </div>
                        </div>
                        <img
                          src={study.beforeFeed.image}
                          alt={`${study.organization} challenge`}
                          referrerPolicy="no-referrer"
                          className="w-full flex-1 object-cover filter contrast-90 brightness-95"
                        />
                        <div className="absolute bottom-3 inset-x-3 bg-black/80 backdrop-blur-md rounded-xl p-2 text-center text-white text-xs z-10 font-mono border border-white/10">
                          {study.beforeFeed.badgeLabel || 'Before Revamp'}
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-[2.5rem] border-[6px] border-[#2D2A26] bg-[#1F1D1A] overflow-hidden shadow-xl aspect-[9/18] relative mx-auto max-w-[280px]">
                        {/* Phone Speaker Notch */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-[#2D2A26] rounded-full z-20" />
                        <img
                          src={study.beforeFeed.image}
                          alt={`${study.organization} before feed`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover filter contrast-90"
                        />
                        <div className="absolute bottom-3 inset-x-3 bg-black/75 backdrop-blur-md rounded-xl p-2.5 text-center text-white text-xs z-10 font-mono border border-white/10">
                          {study.beforeFeed.badgeLabel || 'Before Revamp'}
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-[#7D756C] text-center mt-3 max-w-xs font-sans">
                    {study.beforeFeed.description}
                  </p>
                </div>

                {/* Transition Indicator Arrow */}
                <div className="md:col-span-2 flex flex-col items-center justify-center py-4">
                  <div className="w-12 h-12 rounded-full bg-[#7A141D]/10 text-[#7A141D] flex items-center justify-center font-bold shadow-inner">
                    <ArrowRight className="w-6 h-6 hidden md:block" />
                    <span className="md:hidden text-xs font-mono font-bold">TRANSFORM</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#7A141D] uppercase tracking-wider mt-2 font-semibold text-center">
                    Strategic Shift
                  </span>
                </div>

                {/* After Mockup */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div className="relative w-full max-w-[340px]">
                    {study.mockupStyle === 'browser' ? (
                      <div className="rounded-2xl border-4 border-[#7A141D] bg-[#1F1D1A] overflow-hidden shadow-2xl aspect-[16/11] relative flex flex-col ring-4 ring-[#7A141D]/20">
                        {/* Browser Window Bar */}
                        <div className="bg-[#7A141D] px-3 py-1.5 flex items-center gap-1.5 border-b border-[#8C1B25]">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                          <div className="ml-2 px-2 py-0.5 rounded bg-black/30 text-[9px] font-mono text-white/90 truncate max-w-[180px]">
                            {study.id === 'case-placement-copilot'
                              ? 'rajanya.app.n8n.cloud/workflow'
                              : study.id === 'case-trust-reconstruction'
                              ? 'spss_moderated_regression.sav'
                              : study.id === 'case-myntra'
                              ? 'decision-engine.myntra.live'
                              : 'live_solution.app'}
                          </div>
                        </div>
                        <img
                          src={study.afterFeed.image}
                          alt={`${study.organization} solution`}
                          referrerPolicy="no-referrer"
                          className="w-full flex-1 object-cover"
                        />
                        <div className="absolute bottom-3 inset-x-3 bg-[#7A141D]/95 backdrop-blur-md rounded-xl p-2 text-center text-white text-xs z-10 font-mono font-semibold border border-white/20">
                          {study.afterFeed.badgeLabel || 'After: Live System'}
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-[2.5rem] border-[6px] border-[#7A141D] bg-[#1F1D1A] overflow-hidden shadow-2xl aspect-[9/18] relative mx-auto max-w-[280px] ring-4 ring-[#7A141D]/20">
                        {/* Phone Speaker Notch */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-[#7A141D] rounded-full z-20" />
                        <img
                          src={study.afterFeed.image}
                          alt={`${study.organization} flagship app`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 inset-x-3 bg-[#7A141D]/90 backdrop-blur-md rounded-xl p-2.5 text-center text-white text-xs z-10 font-mono font-semibold border border-white/20">
                          {study.afterFeed.badgeLabel || 'After: Sensory Flagship'}
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-[#2D2823] text-center mt-3 max-w-xs font-sans font-medium">
                    {study.afterFeed.description}
                  </p>
                </div>
              </div>

              {/* Dedicated n8n Workflow Node Pipeline Visualizer for Project 03 */}
              {study.id === 'case-placement-copilot' && (
                <div className="mb-6 p-5 rounded-2xl bg-[#FAF7F2] border border-[#E0D5C7] space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#7A141D] font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Autonomous n8n Multi-Agent Workflow Pipeline</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#7D756C] bg-white px-2.5 py-0.5 rounded-full border border-[#D6CCC2] self-start sm:self-auto">
                      LangChain RAG Architecture
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1 text-center font-mono">
                    <div className="p-3 rounded-xl bg-white border border-[#E0D5C7] flex flex-col items-center shadow-xs">
                      <span className="text-[10px] text-[#7A141D] font-bold">NODE 01</span>
                      <span className="font-sans font-semibold text-[#1F1D1A] text-xs mt-1">Gmail Trigger</span>
                      <span className="text-[10px] text-[#7D756C] font-mono mt-0.5">Placement Filter</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#E0D5C7] flex flex-col items-center shadow-xs">
                      <span className="text-[10px] text-[#7A141D] font-bold">NODE 02</span>
                      <span className="font-sans font-semibold text-[#1F1D1A] text-xs mt-1">Sheets &amp; Calendar</span>
                      <span className="text-[10px] text-[#7D756C] font-mono mt-0.5">Deadlines Synced</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#E0D5C7] flex flex-col items-center shadow-xs">
                      <span className="text-[10px] text-[#7A141D] font-bold">NODE 03</span>
                      <span className="font-sans font-semibold text-[#1F1D1A] text-xs mt-1">Dual Vector Store</span>
                      <span className="text-[10px] text-[#7D756C] font-mono mt-0.5">Master CV + JD</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#E0D5C7] flex flex-col items-center shadow-xs">
                      <span className="text-[10px] text-[#7A141D] font-bold">NODE 04</span>
                      <span className="font-sans font-semibold text-[#1F1D1A] text-xs mt-1">LangChain Agent</span>
                      <span className="text-[10px] text-[#7D756C] font-mono mt-0.5">OpenAI GPT-4o</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#7A141D] text-white flex flex-col items-center shadow-sm">
                      <span className="text-[10px] text-red-200 font-bold">OUTPUT</span>
                      <span className="font-sans font-semibold text-xs mt-1">ATS Resume</span>
                      <span className="text-[10px] text-red-100 font-mono mt-0.5">&lt; 10s Execution</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Dedicated Video Demonstration Player Banner for Project 03 */}
              {study.id === 'case-placement-copilot' && (
                <div className="mb-6 rounded-2xl overflow-hidden bg-[#1F1D1A] border border-[#3E3830] p-4 sm:p-5 text-white shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#7A141D] flex items-center justify-center text-white">
                        <Play className="w-4 h-4 fill-current translate-x-0.5" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-white">
                          Live Video Demonstration &amp; Execution Walkthrough
                        </h4>
                        <span className="text-[11px] font-mono text-[#DCA28A]">
                          02:24 • Full Voiceover Walkthrough &amp; Screen Capture
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#7A141D] hover:bg-[#911823] text-white text-xs font-mono font-bold transition-all self-start sm:self-auto cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Video</span>
                    </button>
                  </div>

                  {/* Video preview viewport banner with click-to-play */}
                  <div
                    onClick={() => setIsVideoModalOpen(true)}
                    className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-xl overflow-hidden bg-black border border-white/10 cursor-pointer group"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
                      alt="n8n Placement Co-Pilot Video Demonstration"
                      className="w-full h-full object-cover filter brightness-[0.4] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-14 h-14 rounded-full bg-[#7A141D]/90 group-hover:bg-[#7A141D] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 border border-white/30">
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </div>
                      <span className="text-xs font-mono text-white font-semibold mt-3 drop-shadow">
                        Watch Live Demonstration (02:24)
                      </span>
                      <span className="text-[10px] font-mono text-zinc-300 mt-1">
                        Click to watch full video with chapter scrubber and narration transcript
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Dedicated Mixed-Methods Empirical Dashboard for Project 04 */}
              {study.id === 'case-trust-reconstruction' && (
                <div className="mb-6 rounded-2xl overflow-hidden bg-[#1F1D1A] border border-[#3E3830] p-5 sm:p-6 text-[#EDE8E1] shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#332E27]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#7A141D]/30 border border-[#7A141D]/50 text-[#E06D75]">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm sm:text-base text-white">
                          Empirical Findings: SPSS Econometric Model &amp; Grounded Theory
                        </h4>
                        <span className="text-[11px] font-mono text-[#DCA28A]">
                          GLIM Consumer Behaviour • N=15 SPSS Statistical Dataset &amp; 10 Qualitative Participant Audits
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
                      All P-Values Statistically Audited
                    </span>
                  </div>

                  {/* 4 Core Statistical KPI Highlights */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 font-mono">
                    <div className="p-3.5 rounded-xl bg-[#24211D] border border-[#332E27]">
                      <span className="text-[10px] text-[#DCA28A] uppercase tracking-wider block">Strongest Correlation</span>
                      <div className="text-xl sm:text-2xl font-bold text-white mt-1">r = .804***</div>
                      <span className="text-[10px] text-emerald-400 block mt-0.5">p &lt; .001 (Highly Significant)</span>
                      <p className="text-[11px] font-sans text-zinc-300 mt-1">
                        Issue Tolerability ↔ Information Sufficiency
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#24211D] border border-[#332E27]">
                      <span className="text-[10px] text-[#DCA28A] uppercase tracking-wider block">Scale Reliability</span>
                      <div className="text-xl sm:text-2xl font-bold text-emerald-400 mt-1">α = .872</div>
                      <span className="text-[10px] text-zinc-400 block mt-0.5">Cronbach Alpha (REV1–REV3)</span>
                      <p className="text-[11px] font-sans text-zinc-300 mt-1">
                        Reversibility &amp; Return Policy Buffering
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#24211D] border border-[#332E27]">
                      <span className="text-[10px] text-[#DCA28A] uppercase tracking-wider block">Moderated Model</span>
                      <div className="text-xl sm:text-2xl font-bold text-white mt-1">R² = .410</div>
                      <span className="text-[10px] text-amber-400 block mt-0.5">R = .640 • F = 2.548</span>
                      <p className="text-[11px] font-sans text-zinc-300 mt-1">
                        Predicting Info Sufficiency via CSC × SI
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#24211D] border border-[#332E27]">
                      <span className="text-[10px] text-[#DCA28A] uppercase tracking-wider block">Checkout Predictor</span>
                      <div className="text-xl sm:text-2xl font-bold text-white mt-1">r = .752**</div>
                      <span className="text-[10px] text-emerald-400 block mt-0.5">p = .001 (Significant)</span>
                      <p className="text-[11px] font-sans text-zinc-300 mt-1">
                        Reversibility ↔ Purchase Confidence
                      </p>
                    </div>
                  </div>

                  {/* Grounded Theory Qualitative Voice-of-Customer Extract */}
                  <div className="p-4 rounded-xl bg-[#171512] border border-[#2D2A26] space-y-2.5">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Grounded Theory Discovery (10 Audited Participant Transcripts P01–P10)</span>
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-lg bg-[#201D19] border border-white/5 text-zinc-300 font-sans italic">
                        &ldquo;I actually search for criticism. When new sources stop giving me new information, I know I have enough.&rdquo;
                        <span className="block not-italic text-[10px] font-mono text-[#DCA28A] mt-1.5 font-bold">
                          — P02 (Mechanical Keyboard, IIT Delhi)
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#201D19] border border-white/5 text-zinc-300 font-sans italic">
                        &ldquo;When someone says positives AND negatives, I can make my own judgement. Consistency across Reddit &amp; YouTube makes me trust.&rdquo;
                        <span className="block not-italic text-[10px] font-mono text-[#DCA28A] mt-1.5 font-bold">
                          — P01 &amp; P05 (Footwear &amp; Lifestyle, UBS Chandigarh)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Goal & Results Footer */}
              <div className="pt-6 border-t border-[#F0EAE1] grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl">
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#7D756C] font-semibold">
                    Strategic Mandate &amp; Problem Statement
                  </h4>
                  <p className="text-sm sm:text-base font-serif text-[#1F1D1A] font-medium leading-relaxed">
                    {study.goal}
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#7A141D] font-semibold">
                    Quantified Commercial Value &amp; Governance
                  </h4>
                  <p className="text-sm sm:text-base font-serif text-[#7A141D] font-bold leading-relaxed">
                    {study.results}
                  </p>
                </div>
              </div>

              {/* Interactive Direct Actions: Live App & Deep Dive Modal */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F0EAE1]">
                <div className="flex flex-wrap items-center gap-3">
                  {study.id === 'case-placement-copilot' && (
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A141D] text-white hover:bg-[#5E0F16] text-xs font-mono font-bold tracking-wide transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Video Demonstration (02:24)</span>
                      {persistedVideoUrl && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" title="Saved video loaded" />
                      )}
                    </button>
                  )}

                  {study.studyId && (
                    <button
                      onClick={() => handleOpenStudy(study.studyId)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#7A141D]/30 text-[#7A141D] hover:bg-[#7A141D]/5 text-xs font-mono font-semibold tracking-wide transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>View Full Project Deck &amp; Specs</span>
                    </button>
                  )}
                </div>

                <div className="text-[11px] font-mono text-[#7D756C]">
                  {study.categoryTag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Strategic Study Deep Dive Modal */}
      <StrategicStudyModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      {/* Video Demonstration Theatre Modal */}
      <VideoDemonstrationModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={persistedVideoUrl || undefined}
        onVideoLoaded={handleVideoLoaded}
        projectTitle="Autonomous Placement Co-Pilot & ATS RAG Engine"
      />
    </section>
  );
};

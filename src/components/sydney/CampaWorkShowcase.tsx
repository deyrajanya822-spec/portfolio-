import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  ChevronRight,
  ChevronLeft,
  Users,
  Compass,
  Sparkles,
  ShoppingBag,
  Award,
  Layers,
  ArrowRight,
  Quote,
  CheckCircle2,
  Calendar,
  Building2,
  ExternalLink,
  Target,
  BarChart3
} from 'lucide-react';
import {
  CAMPA_DECK_SLIDES,
  QUALITATIVE_RESEARCH_SLIDES,
  RETAIL_POS_PROJECTS
} from '../../data/campaData';
import { CampaCardVisual } from './CampaCardVisual';

export const CampaWorkShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'report' | 'cards-deck' | 'qualitative' | 'retail-pos'>('report');
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [activeQualIndex, setActiveQualIndex] = useState<number>(0);
  const [selectedPosId, setSelectedPosId] = useState<string>(RETAIL_POS_PROJECTS[0].id);

  const currentDeckSlide = CAMPA_DECK_SLIDES[activeSlideIndex];
  const currentQualSlide = QUALITATIVE_RESEARCH_SLIDES[activeQualIndex];
  const currentPos = RETAIL_POS_PROJECTS.find(p => p.id === selectedPosId) || RETAIL_POS_PROJECTS[0];

  return (
    <div className="space-y-8">
      {/* Top Executive Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/40 border border-white/10 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('report')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'report'
              ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-900/40 border border-red-400'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>1. Summer Internship Report & Brief</span>
        </button>

        <button
          onClick={() => setActiveTab('cards-deck')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'cards-deck'
              ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-900/40 border border-red-400'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>2. "Campa Cards" Strategy Deck (10 Slides)</span>
        </button>

        <button
          onClick={() => setActiveTab('qualitative')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'qualitative'
              ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-900/40 border border-red-400'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>3. Gen Z Qualitative Field Research (9 Pan-India)</span>
        </button>

        <button
          onClick={() => setActiveTab('retail-pos')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'retail-pos'
              ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-900/40 border border-red-400'
              : 'text-zinc-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>4. Retail POS & Merchandising Displays (4 Units)</span>
        </button>
      </div>

      {/* TAB 1: EXECUTIVE INTERNSHIP REPORT & BRIEF */}
      {activeTab === 'report' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {/* Institutional Header Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-stone-900 via-[#1A1110] to-[#2B0E11] border border-red-500/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-[11px] font-mono font-bold border border-red-500/30 uppercase">
                    Client Case Study • Summer 2025
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    Storyboats, Gurgaon × Great Lakes Institute of Management
                  </span>
                </div>
                <div className="text-xs font-mono text-stone-400">
                  Author: <strong className="text-white">Rajanya</strong> (PGDM 2027)
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-4xl font-serif text-white font-normal tracking-tight">
                  New Beverage Brand: Consumer Research, White Space & Festival Identity
                </h2>
                <p className="text-sm sm:text-base text-stone-300 max-w-3xl leading-relaxed">
                  Grounding a new FMCG beverage brand from absolute inception: 19 documented work sessions across 6 weeks, answering the core brief to find an ownable cultural territory across pan-Indian Gen Z and translate it into a pitch-ready brand architecture for Campa CSD.
                </p>
              </div>

              {/* High-Level Impact Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <div className="text-[11px] font-mono text-stone-400 uppercase">Qualitative Reach</div>
                  <div className="text-xl font-bold text-white font-mono mt-0.5">9 In-Depth</div>
                  <div className="text-[10px] text-stone-400">7 Cities (Agra, Delhi, Gujarat, Kerala, etc.)</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <div className="text-[11px] font-mono text-stone-400 uppercase">Deck Iterations</div>
                  <div className="text-xl font-bold text-red-400 font-mono mt-0.5">8 Versions</div>
                  <div className="text-[10px] text-stone-400">v1 to v8 22-slide client presentation</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <div className="text-[11px] font-mono text-stone-400 uppercase">Strategic Shift</div>
                  <div className="text-xl font-bold text-amber-300 font-mono mt-0.5">Passenger → Driver</div>
                  <div className="text-[10px] text-stone-400">Independent behavioral age-lock discovery</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <div className="text-[11px] font-mono text-stone-400 uppercase">Market Validation</div>
                  <div className="text-xl font-bold text-emerald-400 font-mono mt-0.5">15% Share</div>
                  <div className="text-[10px] text-stone-400">Campa & Lahori cultural identity proof</div>
                </div>
              </div>
            </div>
          </div>

          {/* Structured 5-Part Executive Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 01 Brief / Problem Statement */}
            <div className="p-6 rounded-3xl bg-[#1C1716] border border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase font-bold">
                <Target className="w-4 h-4 text-red-400" />
                <span>01 Brief & Problem Statement</span>
              </div>
              <h3 className="text-xl font-serif text-white">
                Building From Ground Zero
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                A new beverage brand approached Storyboats at inception stage—no name, no product, no positioning. The brief mandated:
              </p>
              <ul className="space-y-2 text-xs text-stone-300 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Cultural Universality:</strong> Find an authentic common thread across Indian Gen Z regardless of geography (metro vs. Tier 2/3) and regional culture.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Ownable White Space:</strong> Identify a beverage space not already dominated by cola, energy drinks, or millennial nostalgia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>Defensible Primary Research:</strong> Ground every strategic claim in primary qualitative interviews—no desk research or AI-generated assumptions.</span>
                </li>
              </ul>
            </div>

            {/* 02 Approach & Methodology */}
            <div className="p-6 rounded-3xl bg-[#1C1716] border border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase font-bold">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>02 Approach & 5-Phase Methodology</span>
              </div>
              <h3 className="text-xl font-serif text-white">
                Rigorous Qualitative Frameworks
              </h3>
              <div className="space-y-3 text-xs text-stone-300 font-sans">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <strong className="text-amber-300">Phase 1 (Seven-Thread Cultural Mapping):</strong> Mapped 7 universal threads; only <em>communal food / the shared table</em> passed both the pan-Indian cultural and Gen Z geography filters.
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <strong className="text-amber-300">Phase 2 (Instrument Design & Fieldwork):</strong> Structured 7-dimension interview guide (29 questions) with deliberate closing silence technique; conducted 9 deep interviews.
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <strong className="text-amber-300">Phase 3 & 4 (MEC Laddering & Age-Lock):</strong> Applied Means-End Chain laddering; reframed the 18–22 demographic into a behavioral breakthrough: "Passenger to Driver".
                </div>
              </div>
            </div>

            {/* 03 Personal Contribution */}
            <div className="p-6 rounded-3xl bg-[#1C1716] border border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase font-bold">
                <Award className="w-4 h-4 text-purple-400" />
                <span>03 Personal Contributions & Ownership</span>
              </div>
              <h3 className="text-xl font-serif text-white">
                Decisions That Shaped the Strategy
              </h3>
              <ul className="space-y-2.5 text-xs text-stone-300 font-sans">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                  <span><strong>The Quantitative-to-Qualitative Pivot:</strong> Rebuilt the entire research instrument when a Google Form proved analytical data was too shallow.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                  <span><strong>Discovered "Passenger to Driver":</strong> Independently established that at 18–22, youth for the first time keep the festival alive (making the first call home for puja rituals).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                  <span><strong>Identified "Moment-Stretching":</strong> Named the behavioral urgency of staying out until 2 AM on parked scooters without visible anxiety.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                  <span><strong>Crafted the Golden Line:</strong> <em>"The brand that shows up here doesn’t sell nostalgia. It witnesses the act of choosing."</em></span>
                </li>
              </ul>
            </div>

            {/* 04 Outcomes & Final Impact */}
            <div className="p-6 rounded-3xl bg-[#1C1716] border border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                <span>04 Outcomes & Business Impact</span>
              </div>
              <h3 className="text-xl font-serif text-white">
                Presentation-Ready Strategy
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                The findings directly anchored Campa CSD's campaign pitch, reframing the opportunity from speculative intuition to culturally validated truth:
              </p>
              <div className="space-y-2 text-xs text-stone-300 font-sans">
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
                  <strong>Strategic White Space:</strong> Established festivals as identity-safe, self-authored spaces where Campa is a cultural witness, not a noisy sponsor.
                </div>
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-200">
                  <strong>Creative Campaign Line:</strong> <em>"Festivals unlock the version that makes you feel like more you."</em> With production-ready billboard art direction.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* TAB 2: 10-SLIDE "CAMPA CARDS" STRATEGY DECK */}
      {activeTab === 'cards-deck' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Deck Canvas */}
          <div className="rounded-3xl bg-[#18181B] border-2 border-red-600/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold font-serif text-lg">
                  ♠
                </div>
                <div>
                  <div className="text-[11px] font-mono text-red-400 uppercase font-bold tracking-wider">
                    {currentDeckSlide.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif text-white font-normal">
                    {currentDeckSlide.title}
                  </h3>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-stone-400">
                  Slide <strong className="text-white">{activeSlideIndex + 1}</strong> of {CAMPA_DECK_SLIDES.length}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    disabled={activeSlideIndex === 0}
                    onClick={() => setActiveSlideIndex(prev => Math.max(0, prev - 1))}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={activeSlideIndex === CAMPA_DECK_SLIDES.length - 1}
                    onClick={() => setActiveSlideIndex(prev => Math.min(CAMPA_DECK_SLIDES.length - 1, prev + 1))}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Slide Layout Content */}
            <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Headline, Bullets, and Strategy Logic */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-mono uppercase tracking-widest border border-red-500/30 font-bold">
                    Slide #{currentDeckSlide.pageNumber}
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white uppercase leading-[1.05]">
                    {currentDeckSlide.headline}
                  </h2>
                  {currentDeckSlide.subheadline && (
                    <p className="text-base sm:text-lg text-red-200/90 font-serif italic">
                      {currentDeckSlide.subheadline}
                    </p>
                  )}
                </div>

                {currentDeckSlide.insightCallout && (
                  <div className="p-5 rounded-2xl bg-black/50 border border-red-500/30 text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
                    <Quote className="w-5 h-5 text-red-400 mb-2" />
                    {currentDeckSlide.insightCallout}
                  </div>
                )}

                {currentDeckSlide.bullets && (
                  <div className="space-y-3 pt-2">
                    {currentDeckSlide.bullets.map((bullet, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-red-400">{bullet.num}</span>
                          <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                            {bullet.title}
                          </span>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed font-sans pl-6">
                          {bullet.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {currentDeckSlide.quotes && (
                  <div className="space-y-2 pt-2">
                    {currentDeckSlide.quotes.map((q, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-red-950/30 border border-red-500/20 space-y-1">
                        <div className="text-[10px] font-mono text-red-300 uppercase tracking-wider font-bold">
                          {q.speaker}
                        </div>
                        <p className="text-xs sm:text-sm text-stone-200 italic font-serif">
                          "{q.text}"
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: High-Fidelity Visual Card or Artifact Rendering */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                {currentDeckSlide.cardRank ? (
                  <CampaCardVisual
                    rank={currentDeckSlide.cardRank}
                    suit={currentDeckSlide.cardSuit || '♥'}
                    theme="dark"
                    className="w-full max-w-[280px] sm:max-w-[320px] aspect-[2.5/3.5] mx-auto shadow-2xl shadow-red-950/60"
                  />
                ) : currentDeckSlide.pageNumber === 1 ? (
                  <div className="w-full max-w-[320px] aspect-[2.5/3.5] rounded-2xl bg-gradient-to-br from-red-600 via-red-800 to-black p-6 border-2 border-red-400/60 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                    <div className="text-xs font-mono uppercase tracking-widest text-red-200">
                      Strategy Deck 2024
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-4xl sm:text-5xl font-black font-sans text-white tracking-tighter">
                        CAMPA<br />CARDS
                      </div>
                      <div className="text-xs font-serif italic text-red-200">
                        Heritage Beverage Brand Strategy
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-red-300">
                      <span>Storyboats</span>
                      <span>Great Lakes</span>
                    </div>
                  </div>
                ) : currentDeckSlide.pageNumber === 9 ? (
                  <div className="w-full max-w-[320px] space-y-4">
                    <div className="p-5 rounded-2xl bg-white text-stone-900 border-2 border-stone-300 text-center shadow-lg">
                      <div className="text-[10px] font-mono text-stone-500 uppercase">Option 01: Clean Heritage</div>
                      <div className="py-6 text-3xl font-black text-red-600 font-sans tracking-tight">
                        CAMPA
                      </div>
                      <div className="text-[10px] font-mono text-stone-400">STORYBOATS</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900 to-red-900 text-white border-2 border-red-500/40 text-center shadow-lg">
                      <div className="text-[10px] font-mono text-red-200 uppercase">Option 02: Midnight Royale</div>
                      <div className="py-6 text-3xl font-black text-white font-sans tracking-tight">
                        CAMPA
                      </div>
                      <div className="text-[10px] font-mono text-red-300">STORYBOATS</div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full max-w-[320px] aspect-[2.5/3.5] rounded-2xl bg-gradient-to-b from-stone-900 to-black p-6 border-2 border-stone-700 flex flex-col justify-between text-center">
                    <div className="text-xs font-mono text-stone-400 uppercase tracking-widest">
                      Tuck-Box Outer Packaging
                    </div>
                    <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-600 text-xs font-mono text-stone-300">
                      Silver Victorian Filigree × Modern Campa PET Bottles Lineup
                    </div>
                    <div className="text-[10px] font-mono text-stone-500">
                      Campa Cola • Campa Orange • Lemon • Energy
                    </div>
                  </div>
                )}

                {currentDeckSlide.footerTag && (
                  <div className="mt-4 text-center text-xs font-mono text-red-400/80">
                    {currentDeckSlide.footerTag}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Quick-Jump Strip */}
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {CAMPA_DECK_SLIDES.map((slide, idx) => (
                <button
                  key={slide.pageNumber}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                    activeSlideIndex === idx
                      ? 'bg-red-600 text-white font-bold border border-red-400 shadow-md'
                      : 'bg-black/30 text-stone-400 hover:text-white hover:bg-white/5 border border-white/5'
                  }`}
                >
                  #{slide.pageNumber} {slide.title.split(':')[0]}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* TAB 3: GEN Z QUALITATIVE FIELD RESEARCH (9 PAN-INDIA INTERVIEWS) */}
      {activeTab === 'qualitative' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="rounded-3xl bg-[#151211] border-2 border-stone-800 p-6 sm:p-10 shadow-2xl space-y-6">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 text-[10px] font-mono font-bold uppercase border border-red-500/30">
                    {currentQualSlide.section}
                  </span>
                  {currentQualSlide.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300 text-[10px] font-mono font-bold uppercase">
                      {currentQualSlide.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-normal mt-1">
                  {currentQualSlide.title}
                </h3>
              </div>

              {/* Step Navigation */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-stone-400">
                  Chapter <strong className="text-white">{activeQualIndex + 1}</strong> of {QUALITATIVE_RESEARCH_SLIDES.length}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    disabled={activeQualIndex === 0}
                    onClick={() => setActiveQualIndex(prev => Math.max(0, prev - 1))}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={activeQualIndex === QUALITATIVE_RESEARCH_SLIDES.length - 1}
                    onClick={() => setActiveQualIndex(prev => Math.min(QUALITATIVE_RESEARCH_SLIDES.length - 1, prev + 1))}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Main Lead Quote / Thesis */}
            {currentQualSlide.leadQuote && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-stone-900 to-black border border-red-500/30">
                <div className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold mb-1">
                  Primary Qualitative Signal • Voice of {currentQualSlide.leadQuote.speaker}
                </div>
                <div className="text-base sm:text-xl font-serif text-white italic leading-relaxed">
                  "{currentQualSlide.leadQuote.text}"
                </div>
              </div>
            )}

            {/* Respondent Quotes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentQualSlide.quotes.map((q, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-stone-800 space-y-2 flex flex-col justify-between">
                  <div className="space-y-1">
                    {q.highlight && (
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-red-600/30 text-red-300 font-bold border border-red-500/40">
                        {q.highlight}
                      </span>
                    )}
                    <p className="text-xs sm:text-sm text-stone-200 italic font-serif leading-relaxed">
                      "{q.text}"
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-stone-400 pt-2 border-t border-white/5 font-bold">
                    — {q.speaker}
                  </div>
                </div>
              ))}
            </div>

            {/* Structural Analysis & Takeaway */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
              <div className="md:col-span-7 p-5 rounded-2xl bg-[#1E1917] border border-stone-700 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  Field Observations & Behavioral Mechanisms
                </div>
                <ul className="space-y-2 text-xs text-stone-300 font-sans">
                  {currentQualSlide.analysis.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5 p-5 rounded-2xl bg-red-950/40 border border-red-500/40 space-y-2 flex flex-col justify-center">
                <div className="text-xs font-mono uppercase tracking-wider text-red-300 font-bold">
                  Strategic Synthesis & Takeaway
                </div>
                <div className="text-sm sm:text-base font-serif text-white font-normal leading-relaxed">
                  {currentQualSlide.takeaway}
                </div>
              </div>
            </div>

            {/* Interactive Chapter Stepper */}
            <div className="pt-4 border-t border-stone-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {QUALITATIVE_RESEARCH_SLIDES.map((slide, idx) => (
                <button
                  key={slide.pageNumber}
                  onClick={() => setActiveQualIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                    activeQualIndex === idx
                      ? 'bg-red-600 text-white font-bold border border-red-400 shadow-md'
                      : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800'
                  }`}
                >
                  #{slide.pageNumber} {slide.section.split('•')[1]?.trim() || slide.section}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* TAB 4: RETAIL POS & MERCHANDISING DISPLAYS (4 UNITS) */}
      {activeTab === 'retail-pos' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Pos Unit Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {RETAIL_POS_PROJECTS.map(pos => (
              <button
                key={pos.id}
                onClick={() => setSelectedPosId(pos.id)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer border ${
                  selectedPosId === pos.id
                    ? 'bg-gradient-to-br from-[#2D1214] to-[#1C0B0C] border-red-500 shadow-xl shadow-red-950/40'
                    : 'bg-[#181413] border-stone-800 hover:border-stone-700 hover:bg-[#201B19]'
                }`}
              >
                <div className="text-[10px] font-mono text-red-400 uppercase font-bold">
                  {pos.clientBrand.split('(')[0]}
                </div>
                <div className="text-sm font-serif text-white font-bold mt-1 line-clamp-2">
                  {pos.title}
                </div>
                <div className="text-[11px] font-sans text-stone-400 mt-2 line-clamp-1">
                  {pos.category}
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Selected POS Display Breakdown */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#1A1413] border-2 border-stone-800 space-y-8">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-stone-800 pb-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-300 text-xs font-mono uppercase font-bold border border-red-500/30">
                  <ShoppingBag className="w-3.5 h-3.5 text-red-400" />
                  <span>{currentPos.category}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                  {currentPos.title}
                </h2>
                <div className="text-xs font-mono text-stone-400">
                  Client / Portfolio: <strong className="text-amber-300">{currentPos.clientBrand}</strong>
                </div>
              </div>

              {/* Product Badges */}
              <div className="flex flex-wrap gap-1.5 max-w-sm">
                {currentPos.productsCarried.map((prod, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-black/60 text-stone-300 text-[11px] font-mono border border-stone-700">
                    {prod}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Summary & Illustration Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Preview Graphic */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-black/50 border border-stone-800 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-600 to-red-700 flex items-center justify-center shadow-lg border border-amber-400/30">
                  <ShoppingBag className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-base font-serif text-white font-bold">
                    Physical Merchandiser Architecture
                  </div>
                  <p className="text-xs text-stone-400 font-sans max-w-xs">
                    Rendered in high-fidelity 3D with authentic Indian neighborhood architectural motifs and Balcony storytelling.
                  </p>
                </div>
                <div className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-left space-y-1">
                  <div className="text-[10px] font-mono uppercase text-red-400 font-bold">Visual Key Art Description:</div>
                  <p className="text-xs text-stone-300 font-sans italic leading-relaxed">
                    "{currentPos.visualSummary}"
                  </p>
                </div>
              </div>

              {/* Strategic Engineering Specs */}
              <div className="lg:col-span-7 space-y-6">
                {/* Structural Features */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                    Structural & Merchandising Specs
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentPos.structuralFeatures.map((feat, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-stone-800 space-y-1">
                        <div className="text-xs font-mono text-stone-400 font-bold">0{idx + 1}</div>
                        <p className="text-xs text-stone-200 font-sans leading-relaxed">
                          {feat}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Commercial Purpose */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950/40 to-stone-900 border border-red-500/30 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-red-300 font-bold">
                    Retail Conversion & Behavioral Strategy
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-200 font-sans leading-relaxed">
                    {currentPos.strategicPurpose}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

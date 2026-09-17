import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Users,
  Award,
  Flame,
  CheckCircle2,
  Share2,
  Compass,
  MapPin,
  TrendingUp,
  Sliders,
  Play,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Grid,
  FileText
} from 'lucide-react';
import {
  ROCKWELL_INFLUENCERS,
  ROCKWELL_SLIDES,
  ROCKWELL_METRICS_SUMMARY,
  InfluencerCreator
} from '../../data/rockwellData';

interface RockwellModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSlide?: number;
}

export const RockwellModal: React.FC<RockwellModalProps> = ({
  isOpen,
  onClose,
  initialSlide = 1
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initialSlide - 1);
  const [activeTab, setActiveTab] = useState<'slides' | 'creators' | 'strategy' | 'thumbnails'>('slides');
  const [selectedCreatorId, setSelectedCreatorId] = useState<string>('faisal-khan');
  const [tierFilter, setTierFilter] = useState<'all' | 'macro' | 'micro'>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (activeTab === 'slides') {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          setCurrentSlideIndex((prev) => Math.min(ROCKWELL_SLIDES.length - 1, prev + 1));
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeTab, onClose]);

  if (!isOpen) return null;

  const currentSlide = ROCKWELL_SLIDES[currentSlideIndex];
  const currentCreator = currentSlide.creatorId
    ? ROCKWELL_INFLUENCERS.find((c) => c.id === currentSlide.creatorId)
    : null;

  const filteredCreators = ROCKWELL_INFLUENCERS.filter((c) => {
    if (tierFilter === 'all') return true;
    return c.tier === tierFilter;
  });

  const selectedCreator =
    ROCKWELL_INFLUENCERS.find((c) => c.id === selectedCreatorId) || ROCKWELL_INFLUENCERS[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-6xl bg-[#0f1115] border border-white/15 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[94vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#14171d]/90 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 font-serif font-bold text-sm">
                R
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-white font-serif text-lg sm:text-xl font-normal tracking-wide">
                    ROCKWELL
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-teal-400/20 text-teal-300 font-mono text-[10px] uppercase border border-teal-400/30">
                    Car Cooler Strategy
                  </span>
                </div>
                <p className="text-[11px] font-mono text-zinc-400 hidden sm:block">
                  Influencer Marketing & Go-To-Market Pitch • 7 Creators (14.2M+ Reach)
                </p>
              </div>
            </div>

            {/* Center Tabs */}
            <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveTab('slides')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'slides'
                    ? 'bg-teal-500 text-teal-950 font-bold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">17-Slide Deck</span>
                <span className="sm:hidden">Deck</span>
              </button>

              <button
                onClick={() => setActiveTab('creators')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'creators'
                    ? 'bg-teal-500 text-teal-950 font-bold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Creator Matrix</span>
                <span className="sm:hidden">Roster</span>
              </button>

              <button
                onClick={() => setActiveTab('strategy')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'strategy'
                    ? 'bg-teal-500 text-teal-950 font-bold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">GTM Strategy</span>
                <span className="sm:hidden">GTM</span>
              </button>

              <button
                onClick={() => setActiveTab('thumbnails')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'thumbnails'
                    ? 'bg-teal-500 text-teal-950 font-bold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">All Slides</span>
                <span className="sm:hidden">Grid</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-gradient-to-b from-[#0f1115] to-[#0a0c0e]">
            {/* TAB 1: SLIDES VIEWER */}
            {activeTab === 'slides' && (
              <div className="space-y-6 max-w-5xl mx-auto">
                {/* Slide Container (16:9 Aspect Ratio) */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex flex-col bg-[#FAF7F2] select-none">
                  {/* SLIDE TYPE: COVER */}
                  {currentSlide.type === 'cover' && (
                    <div className="w-full h-full relative flex items-center justify-center p-6 sm:p-12 overflow-hidden bg-[#618F9C]">
                      {/* Decorative Floral / Leaf Pattern Overlay */}
                      <div
                        className="absolute inset-0 opacity-40 pointer-events-none"
                        style={{
                          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                          backgroundSize: '40px 40px'
                        }}
                      />
                      {/* Leaf vectors simulation */}
                      <svg
                        viewBox="0 0 1000 600"
                        className="absolute inset-0 w-full h-full opacity-35 pointer-events-none fill-white"
                      >
                        <path d="M50,80 Q90,30 130,80 Q90,130 50,80 Z" />
                        <path d="M200,60 Q240,10 280,60 Q240,110 200,60 Z" />
                        <path d="M400,90 Q440,40 480,90 Q440,140 400,90 Z" />
                        <path d="M600,60 Q640,10 680,60 Q640,110 600,60 Z" />
                        <path d="M800,80 Q840,30 880,80 Q840,130 800,80 Z" />
                        <path d="M100,500 Q140,450 180,500 Q140,550 100,500 Z" />
                        <path d="M300,520 Q340,470 380,520 Q340,570 300,520 Z" />
                        <path d="M700,510 Q740,460 780,510 Q740,560 700,510 Z" />
                        <path d="M900,490 Q940,440 980,490 Q940,540 900,490 Z" />
                      </svg>

                      {/* White Card with Cream Tab */}
                      <div className="relative w-full max-w-2xl bg-white border-2 border-stone-200 shadow-xl rounded-none p-8 sm:p-16 flex flex-col items-center justify-center text-center">
                        {/* Top Beige Tab */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-32 sm:w-44 h-8 bg-[#D8D0C5] border-2 border-b-0 border-stone-300 rounded-t-md" />

                        <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
                          Brand Pitch Deck
                        </span>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans tracking-wide text-[#1F1D1A] font-light">
                          ROCKWELL
                        </h1>
                        <p className="text-xs sm:text-sm text-stone-500 font-sans tracking-wider mt-3 uppercase">
                          Influencer Strategy • Automotive Car Coolers
                        </p>
                      </div>
                    </div>
                  )}

                  {/* SLIDE TYPE: SECTION DIVIDER */}
                  {currentSlide.type === 'divider' && (
                    <div className="w-full h-full bg-[#E8E2D9] flex flex-col justify-center px-8 sm:px-20 text-[#1F1D1A]">
                      <div className="max-w-2xl">
                        <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                          Influencer Cohort Segmentation
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#1F1D1A] tracking-tight mt-3">
                          {currentSlide.title}
                        </h2>
                        <p className="text-sm sm:text-base text-stone-600 font-sans mt-4">
                          {currentSlide.subtitle}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* SLIDE TYPE: CREATOR METRICS TABLE */}
                  {currentSlide.type === 'creator-metrics' && currentCreator && (
                    <div className="w-full h-full bg-[#FAF7F2] p-6 sm:p-10 flex flex-col text-[#1F1D1A]">
                      {/* Slide Heading */}
                      <h3 className="text-2xl sm:text-3xl font-sans font-normal text-[#1F1D1A] mb-6">
                        {currentSlide.title}
                      </h3>

                      {/* Split View: Table on Left, Social Mockup on Right */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-stretch">
                        {/* Metrics Table */}
                        <div className="md:col-span-7 border border-[#6BA3B8] rounded-none overflow-hidden flex flex-col justify-between bg-[#E3EFF3]">
                          <div className="grid grid-cols-12 border-b border-[#6BA3B8] bg-[#CDE3EA] py-2 px-4 font-sans font-semibold text-sm text-[#1F1D1A]">
                            <div className="col-span-4">Metric</div>
                            <div className="col-span-8">Details</div>
                          </div>

                          <div className="divide-y divide-[#6BA3B8]/60 text-xs sm:text-sm font-sans flex-1 flex flex-col justify-around">
                            <div className="grid grid-cols-12 px-4 py-2">
                              <div className="col-span-4 font-bold text-[#1F1D1A]">Category</div>
                              <div className="col-span-8 text-stone-800">{currentCreator.category}</div>
                            </div>

                            <div className="grid grid-cols-12 px-4 py-2">
                              <div className="col-span-4 font-bold text-[#1F1D1A]">YouTube</div>
                              <div className="col-span-8 text-stone-800 font-mono font-medium">
                                {currentCreator.youtubeSubs}
                              </div>
                            </div>

                            <div className="grid grid-cols-12 px-4 py-2">
                              <div className="col-span-4 font-bold text-[#1F1D1A]">Instagram</div>
                              <div className="col-span-8 text-stone-800 font-mono font-medium">
                                {currentCreator.instagramFollowers}
                              </div>
                            </div>

                            <div className="grid grid-cols-12 px-4 py-2">
                              <div className="col-span-4 font-bold text-[#1F1D1A]">Language</div>
                              <div className="col-span-8 text-stone-800">{currentCreator.language}</div>
                            </div>

                            <div className="grid grid-cols-12 px-4 py-2">
                              <div className="col-span-4 font-bold text-[#1F1D1A]">Content Style</div>
                              <div className="col-span-8 text-stone-800 leading-snug">
                                {currentCreator.contentStyle}
                              </div>
                            </div>

                            <div className="grid grid-cols-12 px-4 py-2">
                              <div className="col-span-4 font-bold text-[#1F1D1A]">Audience Geo</div>
                              <div className="col-span-8 text-stone-800 leading-snug">
                                {currentCreator.audienceGeo}
                              </div>
                            </div>

                            {currentCreator.totalViews && (
                              <div className="grid grid-cols-12 px-4 py-2">
                                <div className="col-span-4 font-bold text-[#1F1D1A]">Total Views</div>
                                <div className="col-span-8 text-stone-800 font-mono font-bold">
                                  {currentCreator.totalViews}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Social Profile Mockup (Right Column) */}
                        <div className="md:col-span-5 bg-black rounded-xl p-4 sm:p-5 flex flex-col justify-between text-white border border-stone-700 shadow-inner">
                          <div>
                            <div className="flex items-center justify-between pb-3 border-b border-white/10">
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm font-semibold tracking-wide">
                                  {currentCreator.handle}
                                </span>
                                {currentCreator.verified && (
                                  <div className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px]">
                                    ✓
                                  </div>
                                )}
                              </div>
                              <span className="text-xs text-stone-400">•••</span>
                            </div>

                            <div className="flex items-center gap-4 my-4">
                              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-400 p-0.5 shrink-0">
                                <img
                                  src={currentCreator.avatar}
                                  alt={currentCreator.name}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              </div>
                              <div className="text-xs space-y-0.5">
                                <div className="font-bold text-white text-sm">{currentCreator.name}</div>
                                <div className="text-teal-300 font-mono text-[11px]">
                                  {currentCreator.category.split('—')[1] || currentCreator.category}
                                </div>
                                <div className="text-stone-300 text-[11px]">
                                  {currentCreator.youtubeSubs} • {currentCreator.instagramFollowers}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Social Actions Buttons */}
                          <div className="space-y-2 pt-2 border-t border-white/10">
                            <div className="grid grid-cols-2 gap-2">
                              <button className="w-full py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold">
                                Follow
                              </button>
                              <button className="w-full py-1.5 bg-stone-800 hover:bg-stone-700 text-white rounded-lg text-xs font-semibold">
                                Message
                              </button>
                            </div>
                            <div className="text-[10px] text-stone-400 font-mono text-center">
                              Strategic fit: {currentCreator.strategicAngle}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SLIDE TYPE: CREATOR STRATEGY & WHY PICK */}
                  {currentSlide.type === 'creator-strategy' && currentCreator && (
                    <div className="w-full h-full bg-[#FAF7F2] p-6 sm:p-10 flex flex-col justify-between text-[#1F1D1A]">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
                        {/* Why Pick Left Column */}
                        <div className="md:col-span-7 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-sans font-normal text-[#2A6070] mb-4">
                              Why Pick {currentCreator.name}?
                            </h3>
                            <ul className="space-y-3 text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
                              {currentCreator.whyPick.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-[#2A6070] font-bold text-base leading-none mt-0.5">
                                    ◦
                                  </span>
                                  <div>
                                    <strong className="font-bold text-[#C85A17]">
                                      {item.title}:
                                    </strong>{' '}
                                    <span className="text-stone-800">{item.description}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-4 p-3 rounded-xl bg-teal-50 border border-teal-200">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-teal-800 font-bold block mb-1">
                              Target Content Angle
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {currentCreator.contentPillars.map((p, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 rounded bg-white text-teal-900 border border-teal-200 text-[11px] font-sans"
                                >
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Current Performance Right Column */}
                        <div className="md:col-span-5 flex flex-col justify-between border-l border-stone-200 pl-0 md:pl-6">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-sans font-normal text-[#2A6070] mb-4">
                              Current Performance
                            </h3>
                            <ul className="space-y-3 text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
                              {currentCreator.currentPerformance.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-[#2A6070] font-bold text-base leading-none mt-0.5">
                                    ◦
                                  </span>
                                  <span className="text-stone-800">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-4 p-4 rounded-xl bg-[#EFEBE4] border border-stone-300">
                            <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                              Audience Geography
                            </div>
                            <div className="text-xs text-stone-600">{currentCreator.audienceGeo}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Slide Controls & Thumbnails Bar */}
                <div className="flex items-center justify-between flex-wrap gap-4 bg-black/40 p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <button
                      disabled={currentSlideIndex === 0}
                      onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="font-mono text-xs text-zinc-300">
                      Slide <span className="text-teal-400 font-bold">{currentSlideIndex + 1}</span> of{' '}
                      <span className="text-zinc-400">{ROCKWELL_SLIDES.length}</span>
                    </div>

                    <button
                      disabled={currentSlideIndex === ROCKWELL_SLIDES.length - 1}
                      onClick={() =>
                        setCurrentSlideIndex((prev) => Math.min(ROCKWELL_SLIDES.length - 1, prev + 1))
                      }
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Title of active slide */}
                  <div className="text-xs font-sans text-zinc-400 max-w-sm truncate hidden sm:block">
                    {currentSlide.title}
                  </div>

                  {/* Quick Jump Dropdown */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400 hidden sm:inline">Jump to:</span>
                    <select
                      value={currentSlideIndex}
                      onChange={(e) => setCurrentSlideIndex(Number(e.target.value))}
                      className="bg-zinc-900 text-zinc-200 border border-white/20 rounded-xl px-3 py-1.5 text-xs font-mono focus:outline-none focus:border-teal-400 cursor-pointer"
                    >
                      {ROCKWELL_SLIDES.map((s, idx) => (
                        <option key={idx} value={idx}>
                          #{s.pageNumber}: {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CREATOR COMPARISON MATRIX */}
            {activeTab === 'creators' && (
              <div className="space-y-6 max-w-5xl mx-auto">
                {/* Filters and Metric Header */}
                <div className="flex items-center justify-between flex-wrap gap-4 bg-black/40 p-4 rounded-2xl border border-white/10">
                  <div>
                    <h3 className="text-lg font-serif text-white">7-Creator Strategic Roster</h3>
                    <p className="text-xs font-mono text-zinc-400">
                      Selected for heat-belt reach, overland authority, and verified consumer trust
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-xl border border-white/10">
                    <button
                      onClick={() => setTierFilter('all')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        tierFilter === 'all'
                          ? 'bg-teal-500 text-teal-950 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      All (7)
                    </button>
                    <button
                      onClick={() => setTierFilter('macro')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        tierFilter === 'macro'
                          ? 'bg-teal-500 text-teal-950 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Macro 100K+ (4)
                    </button>
                    <button
                      onClick={() => setTierFilter('micro')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        tierFilter === 'micro'
                          ? 'bg-teal-500 text-teal-950 font-bold'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Micro/Niche (3)
                    </button>
                  </div>
                </div>

                {/* Creator Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredCreators.map((creator) => (
                    <div
                      key={creator.id}
                      onClick={() => {
                        const slide = ROCKWELL_SLIDES.find(
                          (s) => s.creatorId === creator.id && s.type === 'creator-metrics'
                        );
                        if (slide) {
                          setCurrentSlideIndex(slide.pageNumber - 1);
                          setActiveTab('slides');
                        }
                      }}
                      className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-teal-400/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                    >
                      <div>
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-400/60 shrink-0">
                              <img
                                src={creator.avatar}
                                alt={creator.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="text-white font-sans font-bold text-sm group-hover:text-teal-300 transition-colors">
                                  {creator.name}
                                </h4>
                                {creator.verified && (
                                  <span className="w-3 h-3 rounded-full bg-blue-500 text-white text-[8px] flex items-center justify-center">
                                    ✓
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] font-mono text-zinc-400">@{creator.handle}</span>
                            </div>
                          </div>

                          <span
                            className={`px-2 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold border ${
                              creator.tier === 'macro'
                                ? 'bg-amber-400/20 text-amber-300 border-amber-400/30'
                                : 'bg-teal-400/20 text-teal-300 border-teal-400/30'
                            }`}
                          >
                            {creator.tier}
                          </span>
                        </div>

                        {/* Metrics Bar */}
                        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-black/40 border border-white/5 mb-3 text-center">
                          <div>
                            <span className="text-[10px] font-mono text-zinc-400 block">YouTube</span>
                            <span className="text-xs font-mono font-bold text-white">
                              {creator.youtubeSubs}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-zinc-400 block">Instagram</span>
                            <span className="text-xs font-mono font-bold text-white">
                              {creator.instagramFollowers}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-1.5 text-xs text-zinc-300">
                          <div>
                            <span className="text-zinc-500 font-mono text-[11px]">Category:</span>{' '}
                            <span>{creator.category.split('—')[1] || creator.category}</span>
                          </div>
                          <div>
                            <span className="text-zinc-500 font-mono text-[11px]">Geography:</span>{' '}
                            <span>{creator.audienceGeo}</span>
                          </div>
                          <div>
                            <span className="text-zinc-500 font-mono text-[11px]">Style:</span>{' '}
                            <span>{creator.contentStyle}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-teal-300 font-medium">
                          {creator.strategicAngle}
                        </span>
                        <span className="text-xs text-zinc-400 group-hover:text-white flex items-center gap-1 font-mono">
                          <span>View Slide</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: GTM STRATEGY & FUNNEL */}
            {activeTab === 'strategy' && (
              <div className="space-y-6 max-w-5xl mx-auto text-white">
                {/* Overview Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10">
                    <span className="text-xs font-mono text-teal-400 block mb-1 uppercase tracking-wider">
                      Total Audience Reach
                    </span>
                    <div className="text-3xl font-serif text-white">14.2M+</div>
                    <p className="text-xs text-zinc-400 font-mono mt-1">
                      YouTube Subscribers + 10.5M+ Instagram Followers
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10">
                    <span className="text-xs font-mono text-amber-400 block mb-1 uppercase tracking-wider">
                      Extreme-Heat Geographic Focus
                    </span>
                    <div className="text-3xl font-serif text-white">38% Heat-Belt</div>
                    <p className="text-xs text-zinc-400 font-mono mt-1">
                      Rajasthan, MP, UP, Punjab, Haryana & Gujarat
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10">
                    <span className="text-xs font-mono text-emerald-400 block mb-1 uppercase tracking-wider">
                      Engagement Archetype
                    </span>
                    <div className="text-3xl font-serif text-white">Multi-Tier Mix</div>
                    <p className="text-xs text-zinc-400 font-mono mt-1">
                      4 Macro Authority Leads + 3 High-Conversion Niche Drivers
                    </p>
                  </div>
                </div>

                {/* Strategy Breakdown Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Strategic Angles */}
                  <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4">
                    <h4 className="text-lg font-serif text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-teal-400" />
                      <span>Why Rockwell Wins With This Cohort</span>
                    </h4>
                    <div className="space-y-3 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <strong className="text-teal-300 block mb-0.5">
                          1. Overcoming the "Toy Gadget" Stigma
                        </strong>
                        PowerDrift and Faisal Khan frame the car cooler not as a cheap plastic accessory,
                        but as an overland-grade expedition necessity.
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <strong className="text-amber-300 block mb-0.5">
                          2. Verifiable Thermodynamics in Tier-2/3 India
                        </strong>
                        Gagan Choudhary tests cooling velocity in 45°C Thar Desert heat, offering the
                        spec-obsessed heartland audience raw temperature drop graphs.
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <strong className="text-emerald-300 block mb-0.5">
                          3. Capturing the New Car Equipping Phase
                        </strong>
                        Desi Driving School (DDS Ravi) intercepts first-time car owners actively shopping
                        for their initial accessory loadout.
                      </div>
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <strong className="text-rose-300 block mb-0.5">
                          4. Female Family Decision-Maker Inclusivity
                        </strong>
                        Priyanka Kochhar and Garima Avtar highlight road-trip hygiene, medicine
                        preservation, baby snacks, and family luxury comfort.
                      </div>
                    </div>
                  </div>

                  {/* Campaign Funnel Matrix */}
                  <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4">
                    <h4 className="text-lg font-serif text-white flex items-center gap-2">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <span>Campaign Content & Conversion Funnel</span>
                    </h4>

                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-black/40 border-l-4 border-teal-400 text-xs">
                        <div className="font-mono text-teal-300 font-bold uppercase">
                          Stage 1: Cinematic Awareness
                        </div>
                        <div className="text-zinc-300 mt-1">
                          PowerDrift trans-Himalayan overland doc + Faisal Khan POV road test. High production
                          value showcasing ice-cold drinks in searing desert ambient temperatures.
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border-l-4 border-amber-400 text-xs">
                        <div className="font-mono text-amber-300 font-bold uppercase">
                          Stage 2: Technical Trust & Spec Review
                        </div>
                        <div className="text-zinc-300 mt-1">
                          Gagan Choudhary & DDS Ravi technical audits: compressor vs thermoelectric, battery
                          drain protection, 12V vs 24V compatibility, and decibel noise testing.
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border-l-4 border-emerald-400 text-xs">
                        <div className="font-mono text-emerald-300 font-bold uppercase">
                          Stage 3: Garage Install & Viral Modding
                        </div>
                        <div className="text-zinc-300 mt-1">
                          Arun Smoki "Smoki Garage" custom boot installation, dual-battery wiring guide, and
                          weekend road trip vlogs generating massive peer-to-peer UGC.
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border-l-4 border-rose-400 text-xs">
                        <div className="font-mono text-rose-300 font-bold uppercase">
                          Stage 4: Lifestyle & Impulse Purchase
                        </div>
                        <div className="text-zinc-300 mt-1">
                          Priyanka Kochhar viral Instagram Reels: ice cream staying frozen during 3-hour
                          Mumbai traffic jams + direct swipe-up discount code redemption.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: THUMBNAILS GRID (ALL 17 SLIDES) */}
            {activeTab === 'thumbnails' && (
              <div className="space-y-6 max-w-5xl mx-auto">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <h3 className="text-lg font-serif text-white">Full 17-Slide Presentation Deck</h3>
                  <span className="text-xs font-mono text-zinc-400">Click any slide to open in viewer</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {ROCKWELL_SLIDES.map((slide, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setCurrentSlideIndex(idx);
                        setActiveTab('slides');
                      }}
                      className={`aspect-[16/9] rounded-xl p-2.5 flex flex-col justify-between cursor-pointer border transition-all ${
                        currentSlideIndex === idx
                          ? 'border-teal-400 ring-2 ring-teal-400/40 bg-teal-950/40'
                          : 'border-white/10 bg-zinc-900/80 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-teal-300 font-bold">
                          #{slide.pageNumber}
                        </span>
                        <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 rounded bg-white/10 text-zinc-300">
                          {slide.type.replace('creator-', '')}
                        </span>
                      </div>
                      <div className="text-[11px] font-sans text-zinc-200 line-clamp-2 leading-tight">
                        {slide.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

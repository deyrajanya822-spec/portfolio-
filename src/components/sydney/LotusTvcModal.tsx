import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Film,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Award,
  Layers,
  Volume2,
  VolumeX,
  Tv,
  CheckCircle2,
  Clock,
  ArrowRight,
  Compass,
  FileText,
  Video
} from 'lucide-react';
import { AdFilmPlayer } from '../AdFilmPlayer';

interface LotusTvcModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TVC_SHOTS = [
  {
    shot: 1,
    time: '0–5s',
    title: 'The Argument',
    category: 'T2V • Handheld Tension',
    description: 'Wide handheld camera capturing hilltop wind only. Tense unresolved mood as two friends clash after an arduous trek atop a sun-cracked hill.',
    audio: 'Total diegetic stillness: only whipping hilltop wind. No score.',
    visual: 'Two male characters in rugged hiking attire, sun glaring behind them, body language strained.'
  },
  {
    shot: 2,
    time: '5–10s',
    title: 'The Tackle & Shove',
    category: 'T2V • High Action Complexity',
    description: 'Fast chaos shifting abruptly to sudden stillness. Physical action flares then cuts to separated heavy breathing.',
    audio: 'Hilltop gusts + muffled footsteps and panting. Zero background music.',
    visual: 'Dust kickup, grapple, separated stances. Character A stares down the valley, Character B turns away.'
  },
  {
    shot: 3,
    time: '10–16s',
    title: 'Silence & Pocket Reach',
    category: 'T2V • Emotional Shift Signal',
    description: 'Slow hold, locked camera. Heavy silence broken as Character B pauses, sighs, and reaches deep into his fleece pocket.',
    audio: 'A single warm acoustic guitar chord enters precisely at the pocket reach—signaling resolution.',
    visual: 'Close-up on hand entering jacket pocket. Tension visibly eases before anything is said.'
  },
  {
    shot: 4,
    time: '16–20s',
    title: 'The Chocolate Bar Toss & Catch',
    category: 'I2V • Packaging Accurate Lock',
    description: 'Slow motion chocolate toss across golden hour sky. Character A catches the Lotus High 5 bar cleanly without breaking eye contact.',
    audio: 'Warm acoustic fingerpicking builds; crisp catch sound effect.',
    visual: 'Golden sunlight flares through the foil packaging of the Lotus High 5 countline bar.'
  },
  {
    shot: 5,
    time: '20–24s',
    title: 'The Recognition Beat',
    category: 'T2V • Non-Verbal Payoff',
    description: 'Still observational two-shot with MCU intercut. "High Five?" / "Yeh le tera High Five" deadpan smirk and mutual understanding.',
    audio: 'Gentle chuckle, wind subsides, musical melody warms up.',
    visual: 'Mutual half-smirks; the recognition that small unspoken bonds endure.'
  },
  {
    shot: 6,
    time: '24–27s',
    title: 'Product ECU Caramel Pull',
    category: 'I2V • Food Physics & Melt',
    description: 'Extreme close-up slow motion caramel pull against the setting sun. Rich nougat and golden caramel stretch with luxurious warm melt.',
    audio: 'Subtle snap of chocolate coating and slow, rich caramel stretching audio texture.',
    visual: 'Glistening amber caramel strands connecting two broken chocolate bar halves.'
  },
  {
    shot: 7,
    time: '27–38s',
    title: 'High Five & Sunset Walkoff',
    category: 'T2V • Sunset Climax & Packshot',
    description: 'Three-stage sequence: hand offer → crisp High Five contact → wide silhouette walking together down the ridge into the golden sunset.',
    audio: 'Full warm acoustic song resolution + Voiceover: "Some fights end better. Take your victory higher. Lotus High 5."',
    visual: 'Cinematic silhouette against blazing orange horizon; logo packshot with gold foil glint.'
  }
];

const WHITESPACE_DATA = [
  {
    quadrant: 'Quiet × Sustaining',
    badge: 'Lotus High 5 Whitespace',
    isTarget: true,
    brands: 'Lotus High 5',
    strategy: 'Intimate, non-verbal male friendship bonds, unspoken understanding, and the small shared win ("bc karliya"). Unoccupied territory.'
  },
  {
    quadrant: 'Loud × Performance',
    badge: 'High Pressure / Bravado',
    isTarget: false,
    brands: 'Nike, Gatorade, Bournvita, Snickers',
    strategy: 'High-octane hustle culture, sweat, intense external validation, and competitive bravado.'
  },
  {
    quadrant: 'Quiet × Comedic Escape',
    badge: 'Radical Apathy / Rest',
    isTarget: false,
    brands: '5 Star, Kit Kat',
    strategy: 'Anti-hustle ("Eat 5 Star, Do Nothing") and temporary escape from reality ("Have a Break").'
  },
  {
    quadrant: 'Loud × Indulgence & Romance',
    badge: 'Big Occasion / Love',
    isTarget: false,
    brands: 'Cadbury Dairy Milk, Silk, Dark Fantasy',
    strategy: 'Celebratory festivals ("Kuch Meetha Ho Jaaye") or romantic melodrama ("Say It With Silk").'
  }
];

export const LotusTvcModal: React.FC<LotusTvcModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'film' | 'shots' | 'whitespace' | 'brief'>('film');
  const [activeShot, setActiveShot] = useState<number>(1);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-[#181615] text-white rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-[#1F1D1A]">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#7A141D] flex items-center justify-center text-white shadow-md border border-white/20">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#F0A8AF]">
                    Campaign & Commercial Direction
                  </span>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/40" />
                  <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400">
                    Reliance Consumer Products / Storyboats
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif text-white font-normal tracking-tight">
                  Lotus Chocolate — 38-Second AI TVC & Brand Strategy
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-[#141211] border-b border-white/5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('film')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'film'
                  ? 'bg-[#7A141D] text-white font-bold shadow-md shadow-[#7A141D]/30 border border-white/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>38s Commercial Film</span>
            </button>

            <button
              onClick={() => setActiveTab('shots')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'shots'
                  ? 'bg-[#7A141D] text-white font-bold shadow-md shadow-[#7A141D]/30 border border-white/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>7-Shot Storyboard & Prompts</span>
            </button>

            <button
              onClick={() => setActiveTab('whitespace')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'whitespace'
                  ? 'bg-[#7A141D] text-white font-bold shadow-md shadow-[#7A141D]/30 border border-white/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Category Whitespace Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab('brief')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'brief'
                  ? 'bg-[#7A141D] text-white font-bold shadow-md shadow-[#7A141D]/30 border border-white/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Strategy Brief & Deliverables</span>
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#181615]">
            {/* Tab 1: Film Player & Synopsis */}
            {activeTab === 'film' && (
              <div className="space-y-6">
                {/* Embedded Commercial Player */}
                <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
                  <AdFilmPlayer />
                </div>

                {/* Campaign Overview Banner */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-[#23201D] border border-white/10 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0A8AF]">
                      Campaign Tagline
                    </span>
                    <h4 className="text-base font-serif text-white font-medium">
                      "Some fights end better."
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Take your victory higher • Lotus High 5
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#23201D] border border-white/10 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0A8AF]">
                      AI Production Pipeline
                    </span>
                    <h4 className="text-base font-serif text-white font-medium">
                      Seedance 2.0 (I2V + T2V)
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Kodak 5219 35mm grain, teal-orange grade, locked character seeds.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#23201D] border border-white/10 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0A8AF]">
                      Market Context
                    </span>
                    <h4 className="text-base font-serif text-white font-medium">
                      ₹17,761 Cr Sector
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Disrupting the Mondelez/Nestlé 81% confectionery duopoly in India.
                    </p>
                  </div>
                </div>

                {/* Narrative Concept */}
                <div className="p-6 rounded-2xl bg-[#221F1C] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-[#F0A8AF]">
                    <Sparkles className="w-4 h-4" />
                    <h3 className="font-serif text-lg text-white">Commercial Narrative & Creative Direction</h3>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    Set atop a sun-cracked hilltop in northern India at golden hour. Two longtime male friends clash in physical frustration after an exhausting trek. Through complete diegetic silence, the tension is resolved not through dialogue, but through an intuitive gesture: one reaches into his pocket, tosses a Lotus High 5 chocolate bar, and the shared nougat caramel melt seals their quiet reconciliation with a silhouette High Five against the sunset.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Strategic Diegetic Silence', '"THE HAND" Visual Throughline', 'I2V Foil & Caramel Physics', 'Quiet × Sustaining Archetype'].map((chip) => (
                      <span
                        key={chip}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: 7-Shot Storyboard & Prompts */}
            {activeTab === 'shots' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-white">
                      7-Shot Seedance 2.0 AI Video Engineering
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Each shot has locked camera parameters, character prompt seeds, and timing cues.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#7A141D] text-white text-xs font-mono">
                    Total: 38 Seconds
                  </span>
                </div>

                {/* Shot Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {TVC_SHOTS.map((item) => (
                    <div
                      key={item.shot}
                      onClick={() => setActiveShot(item.shot)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                        activeShot === item.shot
                          ? 'bg-[#292220] border-[#7A141D] ring-2 ring-[#7A141D]/50 shadow-lg'
                          : 'bg-[#211E1C] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#7A141D] text-white text-xs font-mono font-bold flex items-center justify-center">
                            {item.shot}
                          </span>
                          <span className="text-xs font-mono text-[#F0A8AF] font-bold">
                            {item.time}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                          {item.category}
                        </span>
                      </div>

                      <h4 className="text-base font-serif text-white font-medium">
                        {item.title}
                      </h4>

                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 border-t border-white/5 space-y-1.5">
                        <div className="flex items-start gap-2 text-[11px] text-zinc-400">
                          <Volume2 className="w-3.5 h-3.5 text-[#F0A8AF] shrink-0 mt-0.5" />
                          <span className="italic">{item.audio}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Whitespace Matrix */}
            {activeTab === 'whitespace' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif text-white">
                    Category Whitespace Audit Matrix
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Audited 10 FMCG benchmark campaigns across the ₹17,761 Cr Indian confectionery sector to isolate the unowned quadrant.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {WHITESPACE_DATA.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-2xl border space-y-3 transition-all ${
                        item.isTarget
                          ? 'bg-[#2A1719] border-[#7A141D] ring-2 ring-[#7A141D]/60 shadow-xl'
                          : 'bg-[#211E1C] border-white/10 opacity-80'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            item.isTarget
                              ? 'bg-[#7A141D] text-white font-bold'
                              : 'bg-white/10 text-zinc-300'
                          }`}
                        >
                          {item.badge}
                        </span>
                        {item.isTarget && (
                          <span className="flex items-center gap-1 text-xs font-mono text-[#F0A8AF]">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Selected Space
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg font-serif text-white font-medium">
                        {item.quadrant}
                      </h4>

                      <div className="text-xs font-mono text-zinc-400">
                        <span className="text-zinc-500">Benchmark Brands: </span>
                        {item.brands}
                      </div>

                      <p className="text-xs text-zinc-300 leading-relaxed font-sans pt-1">
                        {item.strategy}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-[#221F1C] border border-white/10 space-y-2">
                  <h4 className="font-serif text-sm text-white">Strategic Synthesis: The Physical Product Truth</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                    Unlike crunch bars (Perk, Kit Kat) designed for quick solitary snacking or candy bars formulated for hyperactivity, Lotus High 5 features warm, slow-melting caramel and soft nougat. The physical consumption truth directly informs the positioning: "High 5 is for the person you know well enough to make smile for no reason."
                  </p>
                </div>
              </div>
            )}

            {/* Tab 4: Brief & Deliverables */}
            {activeTab === 'brief' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif text-white">
                    Campaign Scope of Work & Production Deliverables
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Delivered over an 8-week brand strategy and creative direction engagement for Lotus Chocolate via Storyboats.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#211E1C] border border-white/10 space-y-3">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-[#F0A8AF]">
                      "THE HAND" Visual Motif
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Architected the film's structural visual grammar: the hand that shoves → hand that reaches into pocket → hand that catches → hand that tears wrapper → golden caramel pull → final High Five payoff against the mountain ridge.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#211E1C] border border-white/10 space-y-3">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-[#F0A8AF]">
                      Production Pack v1.0
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Engineered a 17-page prompt-ready Seedance 2.0 AI video production package with JSON generation prompts, I2V reference frames for confectionery physics, and character seed lock protocols.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#211E1C] border border-white/10 space-y-3">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-[#F0A8AF]">
                      Soundtrack & Strategic Silence
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Total silence during Shots 1–2 conflict beats. A single acoustic chord triggers the emotional pivot at Shot 3 before visual resolution occurs, avoiding cliché commercial voiceover intrusion.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#211E1C] border border-white/10 space-y-3">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-[#F0A8AF]">
                      Portfolio Brand Discipline
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Segregated the power-fantasy daydream concept as a separate asset for Chuckles (bold/mischievous), preserving High 5 for the grounded, sincere friendship territory.
                    </p>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="p-6 rounded-2xl bg-[#221F1C] border border-white/10 space-y-3">
                  <h4 className="font-serif text-base text-white">Full Deliverables Package</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F0A8AF]" />
                      <span>17-Page Seedance 2.0 AI Video Pack v1.0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F0A8AF]" />
                      <span>7-Shot JSON Video Generation Pipeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F0A8AF]" />
                      <span>High 5 Brand Positioning Framework</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F0A8AF]" />
                      <span>10-Brand FMCG Competitive Benchmark Matrix</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F0A8AF]" />
                      <span>Visual Bible (Kodak 5219, Teal-Orange Grade)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F0A8AF]" />
                      <span>Strategic Audio Arc & Silence Storytelling Logic</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar with Action */}
          <div className="px-6 sm:px-8 py-4 bg-[#141211] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-400">
              <span className="text-white font-bold">Lotus High 5</span> • Strategic Brand Management & Creative Direction
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

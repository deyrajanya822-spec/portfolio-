import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  Smile,
  Brain,
  Layers,
  Heart,
  Activity,
  CheckCircle2,
  BookOpen,
  Coffee,
  ChevronRight,
  Zap,
  Flame,
  FileText
} from 'lucide-react';
import { ToffeemanDesignGallery } from './ToffeemanDesignGallery';
import { ToffeemanPosesVisual } from './ToffeemanPosesVisual';
import { ToffeemanActionsVisual } from './ToffeemanActionsVisual';
import { ToffeemanStoryboardVisual } from './ToffeemanStoryboardVisual';
import { ToffeemanDeckVisual } from './ToffeemanDeckVisual';

interface ToffeemanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const METABOLIC_COMPONENTS = [
  {
    component: 'Sucrose (Sugar) & Corn Syrup',
    sensory: 'Rapid dissolution in oral cavity triggering T1R2/T1R3 sweet receptors.',
    digestion: 'Hydrolyzed by intestinal sucrase into glucose and fructose. Glucose is rapidly transported via SGLT1.',
    hormones: 'Triggers rapid blood glucose elevation and immediate pancreatic insulin secretion.'
  },
  {
    component: 'Butterfat (Dairy Lipids)',
    sensory: 'Melts at body temperature (~37°C), emulsifying sucrose and lubricating oral mucosa.',
    digestion: 'Emulsified by bile salts in duodenum, cleaved by pancreatic lipase into free fatty acids and 2-MAG.',
    hormones: 'Stimulates Cholecystokinin (CCK) and GLP-1 release, slowing gastric emptying and prolonging satiety.'
  },
  {
    component: 'Sodium Chloride (Sea Salt)',
    sensory: 'Activates ENaC sodium channels, suppressing bitterness and amplifying caramel aroma perception.',
    digestion: 'Readily absorbed across gastrointestinal epithelia.',
    hormones: 'Enhances glucose absorption kinetics through synergistic sodium-glucose cotransporter (SGLT1) activation.'
  },
  {
    component: 'Maillard Reaction Compounds',
    sensory: 'Pyrazines, furans, and maltol create rich butterscotch and roasted caramel aromatics.',
    digestion: 'Complex antioxidant caramelization polymers pass through digestive tract.',
    hormones: 'Activates olfactory neuro-receptors in piriform cortex, evoking deep nostalgic comfort.'
  }
];

export const ToffeemanModal: React.FC<ToffeemanModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'mascot' | 'poses' | 'actions' | 'storyboard' | 'deck' | 'science'>('mascot');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-6xl bg-[#171412] text-white rounded-[2.5rem] shadow-2xl border border-amber-500/25 overflow-hidden z-10 my-auto max-h-[94vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-amber-900/30 bg-[#211B17]">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-700 to-[#7A141D] flex items-center justify-center text-white shadow-lg border border-amber-400/40">
                <Sparkles className="w-5 h-5 text-amber-200" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                    Toffeeman Character Architecture
                  </span>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-amber-500/40" />
                  <span className="hidden sm:inline-block text-[11px] font-mono text-amber-200/70">
                    Visual Designs • 3D Universe • Consumer Psychology
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif text-white font-normal tracking-tight">
                  Toffeeman — Complete Visual Design System & Brand Universe
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

          {/* Navigation Bar: 6 Detailed Tabs */}
          <div className="flex items-center gap-1.5 px-6 sm:px-8 py-3 bg-[#13100E] border-b border-white/5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('mascot')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'mascot'
                  ? 'bg-amber-500 text-amber-950 font-bold shadow-md shadow-amber-900/40 border border-amber-300'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Smile className="w-3.5 h-3.5" />
              <span>1. Mascot Universe</span>
            </button>

            <button
              onClick={() => setActiveTab('poses')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'poses'
                  ? 'bg-amber-500 text-amber-950 font-bold shadow-md shadow-amber-900/40 border border-amber-300'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>2. Action Sheet</span>
            </button>

            <button
              onClick={() => setActiveTab('actions')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'actions'
                  ? 'bg-amber-500 text-amber-950 font-bold shadow-md shadow-amber-900/40 border border-amber-300'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>3. Alternative Action Sheet</span>
            </button>

            <button
              onClick={() => setActiveTab('storyboard')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'storyboard'
                  ? 'bg-amber-500 text-amber-950 font-bold shadow-md shadow-amber-900/40 border border-amber-300'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>4. "Desk Intruder" Comic</span>
            </button>

            <button
              onClick={() => setActiveTab('deck')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'deck'
                  ? 'bg-amber-500 text-amber-950 font-bold shadow-md shadow-amber-900/40 border border-amber-300'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>5. Consumer Pitch Deck</span>
            </button>

            <button
              onClick={() => setActiveTab('science')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'science'
                  ? 'bg-amber-500 text-amber-950 font-bold shadow-md shadow-amber-900/40 border border-amber-300'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>6. Neuroscience & Physiology</span>
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#171412]">
            {/* Tab 1: Mascot Universe (6 Editions) */}
            {activeTab === 'mascot' && <ToffeemanDesignGallery />}

            {/* Tab 2: 9-Pose Mascot Model Sheet */}
            {activeTab === 'poses' && <ToffeemanPosesVisual />}

            {/* Tab 3: Actions & Emotions (12 Frames) */}
            {activeTab === 'actions' && <ToffeemanActionsVisual />}

            {/* Tab 4: 6-Panel Workplace Comic Storyboard */}
            {activeTab === 'storyboard' && <ToffeemanStoryboardVisual />}

            {/* Tab 5: Executive Pitch Deck ("When do people actually have a toffee?") */}
            {activeTab === 'deck' && <ToffeemanDeckVisual />}

            {/* Tab 6: Neuroscience & Physiology Research Papers */}
            {activeTab === 'science' && (
              <div className="space-y-8">
                {/* Neuroscience Section */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-mono border border-amber-400/30">
                    <Brain className="w-3.5 h-3.5" />
                    <span>Neurobiology of Craving</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                    The Reward Cascade: "Wanting" vs. "Liking"
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans max-w-3xl">
                    Peer-reviewed neurochemical research examining how sensory triggers, workplace cortisol elevation, and conditioned cues drive the impulse for butter toffee.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Dopamine Box */}
                  <div className="p-6 rounded-3xl bg-[#231A15] border border-amber-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                        Mesolimbic Dopamine
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 text-[10px] font-mono border border-amber-500/40">
                        "WANTING" (Incentive Salience)
                      </span>
                    </div>
                    <h4 className="text-lg font-serif text-white">
                      Cue-Triggered Anticipation
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      Seeing or smelling toffee (or noticing the golden wrapper on a desk) fires dopamine neurons in the <strong>Ventral Tegmental Area (VTA) → Nucleus Accumbens (NAc)</strong> pathway. Dopamine generates craving and seeking motivation even before the toffee touches the tongue.
                    </p>
                    <div className="text-[11px] font-mono text-amber-200/70 pt-2 border-t border-white/5">
                      Triggers: Sight of wrapper, packaging crackle, desk habit loops.
                    </div>
                  </div>

                  {/* Opioid Box */}
                  <div className="p-6 rounded-3xl bg-[#231A15] border border-amber-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-widest text-rose-300 font-bold">
                        Opioid / Endocannabinoid
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-950 text-rose-300 text-[10px] font-mono border border-rose-500/40">
                        "LIKING" (Hedonic Hotspots)
                      </span>
                    </div>
                    <h4 className="text-lg font-serif text-white">
                      Sensory Pleasure & Comfort
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      Distinct micro-circuits in the <strong>Nucleus Accumbens shell and Ventral Pallidum</strong> release endogenous opioids upon tasting toffee. The combined butterfat liquefaction (~37°C) and sucrose sweetness stimulate intense palatability, comforting the consumer subconsciously.
                    </p>
                    <div className="text-[11px] font-mono text-rose-200/70 pt-2 border-t border-white/5">
                      Effects: Deep sensory satisfaction, mood elevation, anxiety reduction.
                    </div>
                  </div>
                </div>

                {/* Flow of Craving Architecture */}
                <div className="p-6 rounded-3xl bg-[#1E1714] border border-amber-500/20 space-y-4">
                  <h4 className="text-base font-serif text-white">
                    Flow of Craving & Consumption Architecture
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-amber-400 uppercase">Step 1: Triggers</span>
                      <p className="text-xs font-semibold text-white">Sensory & Stress</p>
                      <p className="text-[11px] text-zinc-400">High Cortisol, low glucose, desk Pavlovian cues</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-amber-400 uppercase">Step 2: Circuit</span>
                      <p className="text-xs font-semibold text-white">VTA → NAc</p>
                      <p className="text-[11px] text-zinc-400">Mesolimbic dopamine spikes anticipation</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-amber-400 uppercase">Step 3: Action</span>
                      <p className="text-xs font-semibold text-white">Ingestion & Bite</p>
                      <p className="text-[11px] text-zinc-400">Hard-crack chewiness and butterfat melt</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-1">
                      <span className="text-[10px] font-mono text-amber-400 uppercase">Step 4: Hedonics</span>
                      <p className="text-xs font-semibold text-white">Opioid Liking</p>
                      <p className="text-[11px] text-zinc-400">Hedonic hotspots soothe emotional tension</p>
                    </div>
                  </div>
                </div>

                {/* Physiology Section */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-mono border border-rose-500/30">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Physiological Ingestion Kinetics</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
                    Physiological Effects & Digestive Mechanics
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-[#221A15] border border-white/10 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                      Cooking Stage
                    </span>
                    <h4 className="text-base font-serif text-white font-medium">
                      Hard Crack (149–154°C)
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Creates signature brittle snap or dense chewy texture with rich Maillard caramelization flavors.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#221A15] border border-white/10 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                      Melting Kinetics
                    </span>
                    <h4 className="text-base font-serif text-white font-medium">
                      Body Temp (~37°C)
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Butterfat (~70% saturated) liquefies upon tongue contact, delivering immediate creamy mouthfeel.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#221A15] border border-white/10 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                      Cephalic-Phase Response
                    </span>
                    <h4 className="text-base font-serif text-white font-medium">
                      Pre-Absorptive Priming
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Taste receptors instantly signal neural release of saliva, gastric acid, and early insulin spikes.
                    </p>
                  </div>
                </div>

                {/* Macronutrient Digestion Table */}
                <div className="space-y-3">
                  <h4 className="font-serif text-base text-white">
                    Macronutrient Digestion & Absorption Comparison
                  </h4>
                  <div className="space-y-3">
                    {METABOLIC_COMPONENTS.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#201915] border border-white/10 space-y-2.5"
                      >
                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                          <h5 className="font-serif text-base text-amber-300 font-medium">
                            {item.component}
                          </h5>
                          <span className="text-[10px] font-mono text-zinc-400">
                            Digestive Tract Kinematics
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
                          <div>
                            <span className="font-mono text-[10px] text-amber-400/80 block uppercase">
                              Oral & Sensory
                            </span>
                            <span className="text-zinc-300">{item.sensory}</span>
                          </div>
                          <div>
                            <span className="font-mono text-[10px] text-amber-400/80 block uppercase">
                              Intestinal Breakdown
                            </span>
                            <span className="text-zinc-300">{item.digestion}</span>
                          </div>
                          <div>
                            <span className="font-mono text-[10px] text-amber-400/80 block uppercase">
                              Metabolism & Hormones
                            </span>
                            <span className="text-zinc-300">{item.hormones}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-6 sm:px-8 py-4 bg-[#120F0D] border-t border-amber-900/30 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-400">
              <span className="text-amber-400 font-bold">Toffeeman Design Study</span> • 6 Character Editions • 9 Poses • 12 Actions • 6-Panel Comic • Slide Deck
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors cursor-pointer"
            >
              Close Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Maximize2,
  Layers,
  X,
  Eye,
  Quote
} from 'lucide-react';

interface StoryPanel {
  panel: number;
  title: string;
  subtitle: string;
  image: string;
  caption: string;
  psychologyNote: string;
  dialogue: string;
}

export const STORY_PANELS: StoryPanel[] = [
  {
    panel: 1,
    title: 'Deep in Thoughts',
    subtitle: 'Workplace Cognitive Fatigue',
    image: '/toffeeman/comic_panel_1.png',
    caption: 'A corporate professional sits alone in an office at 11:42 PM, chin resting heavily on his hand, staring blankly at complex financial charts on his laptop screen.',
    psychologyNote: 'Prefrontal cortex depletion caused by continuous analytical decision-making. Cortisol spikes as glucose availability drops.',
    dialogue: '“Quarterly forecast due in six hours. Brain is running on fumes.”'
  },
  {
    panel: 2,
    title: 'A Sticky Discovery',
    subtitle: 'The Sensory Interruption',
    image: '/toffeeman/comic_panel_2.png',
    caption: 'His hand instinctively reaches toward the golden-foil wrapped Toffeeman on the desk. He unwraps it with a quiet rustle and takes a slow bite.',
    psychologyNote: 'The auditory snap of hard-crack caramel and the tactile release of rich butterfat stimulate trigeminal nerve receptors.',
    dialogue: '“The snap breaks the office silence. Salted butter melts on the tongue.”'
  },
  {
    panel: 3,
    title: 'A Desk Intruder',
    subtitle: 'Playful Mascot Emergence',
    image: '/toffeeman/comic_panel_3.png',
    caption: 'Beside his illuminated screen, something shifts. Peeking out playfully from behind the wire pencil holder is a tiny golden caramel gentleman with an eager smile.',
    psychologyNote: 'Sensory delight triggers an involuntary attentional reorientation—breaking the repetitive tunnel-vision of screen fixation.',
    dialogue: '“Wait... was that wire mesh pencil holder always smiling?”'
  },
  {
    panel: 4,
    title: 'Snapped Out',
    subtitle: 'Dopamine Circuit Reset',
    image: '/toffeeman/comic_panel_4.png',
    caption: 'His jaw drops in comical shock as the tiny character steps onto the desk right next to his laptop and gives an enthusiastic, cheerful wave!',
    psychologyNote: 'Humor and novelty induce an immediate dopaminergic surge in the nucleus accumbens, releasing muscular facial tension.',
    dialogue: '“A miniature caramel figure is standing right beside my screen, waving hello!”'
  },
  {
    panel: 5,
    title: 'The Disappearance',
    subtitle: 'The Transient Daydream',
    image: '/toffeeman/comic_panel_5.png',
    caption: 'He blinks, rubs his eyes, and leans forward over the mouse. The desk is completely normal again. Only the warm hum of the laptop remains.',
    psychologyNote: 'The micro-break allows default mode network (DMN) activation, briefly decoupling executive stress circuits.',
    dialogue: '“Blink. Gone. A momentary sensory reverie in an otherwise sterile night.”'
  },
  {
    panel: 6,
    title: 'A Toffee Smile',
    subtitle: 'Restored Mental Equilibrium',
    image: '/toffeeman/comic_panel_6.png',
    caption: 'A gentle, genuine smile spreads across his face. He glances down at the Toffeeman wrapper in his palm, breathing out deeply as the tension melts away.',
    psychologyNote: 'Parasympathetic tone restored. The consumer returns to work with calibrated optimism and reduced cognitive friction.',
    dialogue: '“Shoulders drop. The spreadsheets don’t feel impossible anymore.”'
  }
];

export const ToffeemanStoryboardVisual: React.FC<{ customImage?: string }> = ({ customImage }) => {
  const [activePanel, setActivePanel] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [showFullStrip, setShowFullStrip] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState<StoryPanel | null>(null);

  const fullComicStripSrc = customImage || '/toffeeman/toffeeman_design.png';
  const current = STORY_PANELS.find((p) => p.panel === activePanel) || STORY_PANELS[0];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-amber-950/40 border border-amber-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-mono border border-amber-400/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Narrative Comic Storyboard</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-2">
            “A Desk Intruder”: 6-Panel Workplace Comic
          </h3>
          <p className="text-xs sm:text-sm text-rose-100/80 font-sans">
            A serialized visual narrative designed for packaging print inserts, digital social carousels, and unboxing storytelling, dramatizing the micro-break when a busy professional is saved by the magic of toffee.
          </p>
        </div>

        {/* View Switcher & Full Sheet Button */}
        <div className="flex items-center gap-3 shrink-0 flex-wrap">
          <button
            onClick={() => setShowFullStrip(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/30 text-xs font-mono transition-all cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>View Full Strip</span>
          </button>

          <div className="flex bg-black/40 p-1.5 rounded-2xl border border-white/10 shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                viewMode === 'grid' ? 'bg-amber-400 text-amber-950 font-bold' : 'text-white/70 hover:text-white'
              }`}
            >
              6-Panel Grid
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                viewMode === 'carousel' ? 'bg-amber-400 text-amber-950 font-bold' : 'text-white/70 hover:text-white'
              }`}
            >
              Story Reader
            </button>
          </div>
        </div>
      </div>

      {/* Master Full Comic Strip Banner Preview */}
      <div className="p-4 rounded-3xl bg-black/40 border border-white/10 overflow-hidden">
        <div className="flex items-center justify-between px-2 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-amber-300">
              Master 6-Panel Workplace Comic Strip
            </span>
          </div>
          <button
            onClick={() => setShowFullStrip(true)}
            className="text-xs font-mono text-amber-400/80 hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Enlarge Full Comic</span>
          </button>
        </div>
        <div
          onClick={() => setShowFullStrip(true)}
          className="relative w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 cursor-pointer group"
        >
          <img
            src={fullComicStripSrc}
            alt="Toffeeman 6-Panel Comic: A Desk Intruder"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-80 object-contain group-hover:scale-[1.01] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono">
            <Maximize2 className="w-4 h-4 text-amber-400" />
            <span>Click to Inspect High-Resolution Strip (2770 × 1504)</span>
          </div>
        </div>
      </div>

      {viewMode === 'grid' ? (
        /* 6-Panel Comic Grid (2 rows x 3 columns) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORY_PANELS.map((panel) => (
            <div
              key={panel.panel}
              className="p-5 rounded-3xl bg-black/40 border border-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Comic Panel Box with Sliced Artwork */}
                <div
                  onClick={() => setSelectedPanel(panel)}
                  className="relative w-full aspect-[4/3] rounded-2xl bg-black/60 border border-white/15 overflow-hidden flex flex-col items-center justify-center mb-4 group-hover:scale-[1.01] transition-transform cursor-pointer"
                >
                  <img
                    src={panel.image}
                    alt={panel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Comic Strip Header Tag */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/80 text-amber-300 font-mono text-[10px] font-bold border border-amber-400/30 shadow-md">
                    PANEL #{panel.panel}
                  </div>

                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 p-1.5 rounded-lg text-amber-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <p className="text-[11px] text-amber-100 font-serif italic bg-black/75 px-3 py-1 rounded-lg backdrop-blur-md border border-white/10 line-clamp-1">
                      {panel.dialogue}
                    </p>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300/80">
                    {panel.subtitle}
                  </span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-serif text-white font-medium group-hover:text-amber-300 transition-colors">
                      {panel.title}
                    </h4>
                    <button
                      onClick={() => {
                        setActivePanel(panel.panel);
                        setViewMode('carousel');
                      }}
                      className="text-[11px] font-mono text-amber-400/80 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-xs text-rose-100/80 font-sans leading-relaxed pt-1">
                    {panel.caption}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-rose-200/70">
                <strong className="text-amber-300 font-medium">Neuroscience:</strong> {panel.psychologyNote}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Single Panel Carousel / Reader */
        <div className="p-6 sm:p-8 rounded-3xl bg-black/50 border border-amber-400/30 backdrop-blur-md space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-amber-400 text-amber-950 font-mono text-xs font-bold shadow-md">
                PANEL {current.panel} of 6
              </span>
              <span className="text-xs font-mono text-amber-200/90">• {current.subtitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={activePanel === 1}
                onClick={() => setActivePanel((prev) => Math.max(1, prev - 1))}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-zinc-400 px-2">{activePanel} / 6</span>
              <button
                disabled={activePanel === 6}
                onClick={() => setActivePanel((prev) => Math.min(6, prev + 1))}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Panel Artwork */}
            <div
              onClick={() => setSelectedPanel(current)}
              className="relative w-full aspect-[4/3] rounded-2xl bg-black/60 border border-amber-400/30 overflow-hidden cursor-pointer group shadow-xl"
            >
              <img
                src={current.image}
                alt={current.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-black/75 p-2 rounded-xl text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div className="absolute bottom-3 inset-x-3 text-center">
                <div className="inline-flex items-center gap-2 text-xs font-serif italic text-amber-200 bg-black/85 px-4 py-2 rounded-xl border border-amber-400/20 shadow-lg">
                  <Quote className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{current.dialogue}</span>
                </div>
              </div>
            </div>

            {/* Narrative Description & Neuroscience */}
            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-300">
                  {current.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-1">
                  {current.title}
                </h3>
              </div>

              <p className="text-sm text-rose-100/90 leading-relaxed font-sans font-light">
                {current.caption}
              </p>

              <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-400/20 space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold">
                    Biochemical & Cognitive Rationale
                  </span>
                </div>
                <p className="text-xs text-rose-100/80 font-sans leading-relaxed">
                  {current.psychologyNote}
                </p>
              </div>

              {/* Quick Jump Bar */}
              <div className="pt-2 flex items-center gap-2">
                <span className="text-[11px] font-mono text-zinc-400 mr-1">Jump to:</span>
                {STORY_PANELS.map((p) => (
                  <button
                    key={p.panel}
                    onClick={() => setActivePanel(p.panel)}
                    className={`w-7 h-7 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activePanel === p.panel
                        ? 'bg-amber-400 text-amber-950 font-bold'
                        : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    {p.panel}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Master Full Comic Strip */}
      <AnimatePresence>
        {showFullStrip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFullStrip(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className="relative max-w-6xl max-h-[92vh] bg-black/85 rounded-3xl p-5 border border-amber-400/30 overflow-hidden flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex justify-between items-center pb-3 border-b border-white/10 mb-3 px-2">
                <div>
                  <h4 className="text-white font-serif text-lg">“A Desk Intruder”: 6-Panel Comic Master Sheet</h4>
                  <p className="text-xs font-mono text-amber-300/70">Full Resolution Strip (2770 × 1504)</p>
                </div>
                <button
                  onClick={() => setShowFullStrip(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="w-full flex items-center justify-center overflow-auto max-h-[78vh]">
                <img
                  src={fullComicStripSrc}
                  alt="Toffeeman Master 6-Panel Comic"
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[75vh] object-contain rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Individual Panel Inspection */}
      <AnimatePresence>
        {selectedPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPanel(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className="relative max-w-3xl w-full bg-zinc-950 rounded-3xl p-6 border border-amber-400/30 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full bg-amber-400 text-amber-950 font-mono text-xs font-bold">
                    PANEL #{selectedPanel.panel}
                  </span>
                  <h4 className="text-white font-serif text-xl">{selectedPanel.title}</h4>
                </div>
                <button
                  onClick={() => setSelectedPanel(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-4 flex items-center justify-center">
                <img
                  src={selectedPanel.image}
                  alt={selectedPanel.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-3">
                <p className="text-sm font-serif italic text-amber-200 bg-black/50 p-3 rounded-xl border border-amber-400/20">
                  {selectedPanel.dialogue}
                </p>
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-amber-300">Narrative Action</h5>
                  <p className="text-sm text-rose-100/90 font-sans mt-1">{selectedPanel.caption}</p>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-amber-300/80">Neuroscience & Psychology</h5>
                  <p className="text-xs text-rose-200/80 font-sans mt-1">{selectedPanel.psychologyNote}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

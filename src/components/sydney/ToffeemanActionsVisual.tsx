import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Heart,
  ChefHat,
  Dumbbell,
  BookOpen,
  Scale,
  Package,
  Smile,
  AlertCircle,
  HelpCircle,
  Award,
  Frown,
  Maximize2,
  Layers,
  X
} from 'lucide-react';

interface ActionFrame {
  id: string;
  name: string;
  category: 'action' | 'reaction';
  image: string;
  icon: any;
  actionDetails: string;
  context: string;
}

export const ACTIONS_FRAMES: ActionFrame[] = [
  // 6 Action Frames (Row 1)
  {
    id: 'standing_waving',
    name: 'Standing Waving',
    category: 'action',
    image: '/toffeeman/action_standing_waving.png',
    icon: Smile,
    actionDetails: 'Casual front stance wearing a red-and-white striped tee, denim jeans, and brown shoes, offering an eager open-palm wave.',
    context: 'Warm welcome prompts, onboarding screens, newsletter headers, and customer greeting popups.'
  },
  {
    id: 'cooking_baking',
    name: 'Cooking / Baking',
    category: 'action',
    image: '/toffeeman/action_cooking_baking.png',
    icon: ChefHat,
    actionDetails: 'Perched on a rustic wooden stool, diligently stirring butter and sugar batter in a deep ceramic mixing bowl with a wooden spoon.',
    context: 'Artisanal heritage sections, recipe blogs, holiday baking campaigns, and ingredient transparency spotlights.'
  },
  {
    id: 'lifting_weights',
    name: 'Lifting Weights',
    category: 'action',
    image: '/toffeeman/action_lifting_weights.png',
    icon: Dumbbell,
    actionDetails: 'Straining with determination to lift two brown dumbbell weights, teeth clenched in humorous athletic effort.',
    context: 'Fitness humor, high-protein toffee extensions, energy snack packaging, and weekend motivation posts.'
  },
  {
    id: 'reading_recipe',
    name: 'Reading a Recipe',
    category: 'action',
    image: '/toffeeman/action_reading_recipe.png',
    icon: BookOpen,
    actionDetails: 'Unfurling a curling vintage parchment scroll containing handwritten cursive toffee confectionery instructions.',
    context: 'Brand storybook, culinary masterclasses, packaging back-panels with secret family recipe folklore.'
  },
  {
    id: 'measuring_weighing',
    name: 'Measuring & Weighing',
    category: 'action',
    image: '/toffeeman/action_measuring_weighing.png',
    icon: Scale,
    actionDetails: 'Carefully dropping golden toffee nuts one-by-one onto an analog kitchen dial scale to achieve exact recipe proportions.',
    context: 'Quality assurance metrics, batch precision storytelling, nutritional transparency infographics.'
  },
  {
    id: 'assembling_wrapping',
    name: 'Assembling & Wrapping',
    category: 'action',
    image: '/toffeeman/action_assembling_wrapping.png',
    icon: Package,
    actionDetails: 'Tongue sticking out in intense concentration while folding greaseproof wax parchment paper snugly over a freshly cut caramel cube.',
    context: 'Handmade gift packaging promos, unboxing video intros, custom confectionery corporate order forms.'
  },

  // 6 Reaction Frames (Row 2)
  {
    id: 'joy_delight',
    name: 'Joy / Delight',
    category: 'reaction',
    image: '/toffeeman/reaction_joy_delight.png',
    icon: Heart,
    actionDetails: 'Both hands pressed to cheeks with pure radiant delight, mouth open in a joyful laugh, eyes sparkling.',
    context: 'Successful order confirmation, 5-star review highlights, referral bonus unlock celebration.'
  },
  {
    id: 'surprise_shock',
    name: 'Surprise / Shock',
    category: 'reaction',
    image: '/toffeeman/reaction_surprise_shock.png',
    icon: AlertCircle,
    actionDetails: 'Arms spread wide in sudden disbelief, jaw dropped in an oval gasp, pupils dilated in comical shock.',
    context: 'Flash sales, limited release drops, secret flavor reveals, prize draw winner announcements.'
  },
  {
    id: 'thinking_curious',
    name: 'Thinking / Curious',
    category: 'reaction',
    image: '/toffeeman/reaction_thinking_curious.png',
    icon: HelpCircle,
    actionDetails: 'Index finger tapped thoughtfully against chin, gaze drifting upward toward a floating question mark.',
    context: 'Quiz flows, flavor recommendation engines, FAQ tabs, flavor discovery surveys.'
  },
  {
    id: 'proud_triumphant',
    name: 'Proud / Triumphant',
    category: 'reaction',
    image: '/toffeeman/reaction_proud_triumphant.png',
    icon: Award,
    actionDetails: 'Arms confidently folded across chest, smug charming grin with golden sparkle twinkling at corner of cheek.',
    context: 'Award announcements, milestone achievements (100k toffees sold), sustainability certifications.'
  },
  {
    id: 'confused_mistake',
    name: 'Confused / Mistake',
    category: 'reaction',
    image: '/toffeeman/reaction_confused_mistake.png',
    icon: HelpCircle,
    actionDetails: 'Scratching swirled caramel hair with a sweat drop, looking down perplexed at a bowl with puffs of burnt smoke.',
    context: '404 error pages, failed checkout notifications, out-of-stock notices, friendly customer support.'
  },
  {
    id: 'tasting_disgust',
    name: 'Tasting / Disgust',
    category: 'reaction',
    image: '/toffeeman/reaction_tasting_disgust.png',
    icon: Frown,
    actionDetails: 'Eyes squeezed shut in a grimace, tongue stuck out tasting an experimental batch that went wrong.',
    context: 'Blooper reels, flavor testing behind-the-scenes, humorous social engagement videos.'
  }
];

export const ToffeemanActionsVisual: React.FC<{ customImage?: string }> = ({ customImage }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'action' | 'reaction'>('all');
  const [showMasterSheet, setShowMasterSheet] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState<ActionFrame | null>(null);

  const masterSheetSrc = customImage || '/toffeeman/toffee_man_design_2.png';
  const filtered = activeTab === 'all' ? ACTIONS_FRAMES : ACTIONS_FRAMES.filter((f) => f.category === activeTab);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-amber-950/40 border border-amber-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-mono border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Alternative Character Behavior Sheet</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-2">
            Alternative Action Sheet
          </h3>
          <p className="text-xs sm:text-sm text-rose-100/80 font-sans">
            Caramel Cutie: 12-frame modular behavioral matrix illustrating 6 culinary physical tasks and 6 expressive human emotional reactions.
          </p>
        </div>

        {/* Controls & Filter */}
        <div className="flex items-center gap-3 shrink-0 flex-wrap">
          <button
            onClick={() => setShowMasterSheet(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/30 text-xs font-mono transition-all cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>View Full Model Sheet</span>
          </button>

          <div className="flex bg-black/40 p-1.5 rounded-2xl border border-white/10 shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'all' ? 'bg-amber-400 text-amber-950 font-bold' : 'text-white/70 hover:text-white'
              }`}
            >
              All (12)
            </button>
            <button
              onClick={() => setActiveTab('action')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'action' ? 'bg-amber-400 text-amber-950 font-bold' : 'text-white/70 hover:text-white'
              }`}
            >
              Actions (6)
            </button>
            <button
              onClick={() => setActiveTab('reaction')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'reaction' ? 'bg-amber-400 text-amber-950 font-bold' : 'text-white/70 hover:text-white'
              }`}
            >
              Reactions (6)
            </button>
          </div>
        </div>
      </div>

      {/* Master Sheet Banner Preview */}
      <div className="p-4 rounded-3xl bg-black/40 border border-white/10 overflow-hidden">
        <div className="flex items-center justify-between px-2 pb-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-300">
            Master 12-Frame Composite Model Sheet
          </span>
          <button
            onClick={() => setShowMasterSheet(true)}
            className="text-xs font-mono text-amber-400/80 hover:text-amber-300 flex items-center gap-1 transition-colors"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Click to Enlarge</span>
          </button>
        </div>
        <div
          onClick={() => setShowMasterSheet(true)}
          className="relative w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 cursor-pointer group"
        >
          <img
            src={masterSheetSrc}
            alt="Caramel Cutie Actions & Emotions Sheet"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-72 object-contain group-hover:scale-[1.01] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono">
            <Maximize2 className="w-4 h-4 text-amber-400" />
            <span>Inspect Full-Resolution Sheet</span>
          </div>
        </div>
      </div>

      {/* Grid of 12 Frames with Sliced High-Res Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {filtered.map((frame) => {
          const Icon = frame.icon;
          const isAction = frame.category === 'action';
          return (
            <div
              key={frame.id}
              onClick={() => setSelectedFrame(frame)}
              className="p-5 rounded-3xl bg-black/35 border border-white/10 hover:border-amber-400/60 hover:bg-black/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Visual Thumbnail using Cropped High-Res Image */}
                <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-b from-amber-900/20 to-black/60 border border-white/10 overflow-hidden flex items-center justify-center mb-3">
                  <img
                    src={frame.image}
                    alt={frame.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-lg bg-black/75 backdrop-blur-md flex items-center justify-center text-amber-300 border border-amber-400/20 shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div
                    className={`absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-mono shadow-md ${
                      isAction
                        ? 'bg-amber-400 text-amber-950 font-bold'
                        : 'bg-rose-500 text-white font-medium'
                    }`}
                  >
                    {isAction ? 'Action' : 'Reaction'}
                  </div>

                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 p-1 rounded-md text-amber-300">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>

                <h4 className="text-base font-serif text-white font-medium group-hover:text-amber-300 transition-colors">
                  {frame.name}
                </h4>
                <p className="text-xs text-rose-100/80 font-sans leading-relaxed mt-1">
                  {frame.actionDetails}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono text-amber-300/80 block uppercase tracking-wider">
                  UI Context:
                </span>
                <span className="text-xs text-rose-200/70 font-sans mt-0.5 block">{frame.context}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Modal for Master Sheet */}
      <AnimatePresence>
        {showMasterSheet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMasterSheet(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className="relative max-w-6xl max-h-[92vh] bg-black/75 rounded-3xl p-5 border border-amber-400/30 overflow-hidden flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex justify-between items-center pb-3 border-b border-white/10 mb-3 px-2">
                <div>
                  <h4 className="text-white font-serif text-lg">Caramel Cutie: Actions & Emotions Sheet</h4>
                  <p className="text-xs font-mono text-amber-300/70">12-Panel Master Composite Sheet (2766 × 1504)</p>
                </div>
                <button
                  onClick={() => setShowMasterSheet(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="w-full flex items-center justify-center overflow-auto max-h-[78vh]">
                <img
                  src={masterSheetSrc}
                  alt="Caramel Cutie Actions & Emotions Sheet High-Res"
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[75vh] object-contain rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox / Modal for Individual Frame Inspection */}
      <AnimatePresence>
        {selectedFrame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFrame(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className="relative max-w-2xl w-full bg-zinc-950 rounded-3xl p-6 border border-amber-400/30 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-mono uppercase font-bold ${
                      selectedFrame.category === 'action'
                        ? 'bg-amber-400 text-amber-950'
                        : 'bg-rose-500 text-white'
                    }`}
                  >
                    {selectedFrame.category}
                  </span>
                  <h4 className="text-white font-serif text-xl">{selectedFrame.name}</h4>
                </div>
                <button
                  onClick={() => setSelectedFrame(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/50 border border-white/10 mb-4 flex items-center justify-center">
                <img
                  src={selectedFrame.image}
                  alt={selectedFrame.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-amber-300">Action & Emotional Spec</h5>
                  <p className="text-sm text-rose-100/90 font-sans mt-1">{selectedFrame.actionDetails}</p>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-amber-300/80">UI & Campaign Context</h5>
                  <p className="text-xs text-rose-200/80 font-sans mt-1">{selectedFrame.context}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

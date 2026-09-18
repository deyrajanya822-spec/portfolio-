import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { MascotSvg } from './ToffeemanVisualCards';

export interface DesignVariant {
  id: string;
  key: string;
  name: string;
  edition: string;
  role: string;
  badge: string;
  svgVariant: string;
  filenameHint: string;
  imageSrc?: string;
  palette: string[];
  keyFeatures: string[];
  description: string;
}

export const CHARACTER_VARIANTS: DesignVariant[] = [
  {
    id: 'char-1',
    key: 'gentleman',
    name: 'Toffeeman: The Gentleman',
    edition: 'Core Brand Anchor (3D Character Render)',
    role: 'Primary Confectionery Mascot',
    badge: '3D Flagship',
    svgVariant: 'gentleman',
    filenameHint: 'pose_standard',
    imageSrc: '/toffeeman/pose_standard.png',
    palette: ['#991B1B', '#F59E0B', '#B45309', '#FFFFFF'],
    keyFeatures: [
      'Crimson velvet top hat with golden embroidered ribbon ("TOFFEEMAN")',
      'Natural white ostrich feather plume tucked into hat brim',
      'Ornate gold-topped scepter embedded with emerald, sapphire, and ruby gems',
      'Holding gold foil-wrapped toffee candy bar with crimson label',
      'Translucent amber-gold body with gentle smile and dark bead eyes'
    ],
    description:
      'The flagship protagonist. Represents the heritage, artisanal warmth, and comforting luxury of traditional butter toffee. Designed as a collectible 3D figurine.'
  },
  {
    id: 'char-4',
    key: 'chef_artisan',
    name: 'The Master Confectioner',
    edition: 'Artisan Kitchen & Craftsmanship Series',
    role: 'Culinary Heritage & Ingredient Integrity',
    badge: 'Master Chef',
    svgVariant: 'chef_artisan',
    filenameHint: 'action_cooking_baking',
    imageSrc: '/toffeeman/action_cooking_baking.png',
    palette: ['#92400E', '#F59E0B', '#F9FAFB', '#78350F'],
    keyFeatures: [
      'Sculpted caramel pompadour hair and full groomed beard/mustache',
      'Tortoiseshell round reading spectacles',
      'Crisp white chef apron with embroidered gold monogram "T"',
      'Long brass ladle pouring a steaming ribbon of molten 150°C hard-crack caramel over peanut brittle slab'
    ],
    description:
      'Grounds the brand in authentic culinary technique. Communicates the precise temperature control, butter emulsification, and confectionery mastery.'
  },
  {
    id: 'char-5',
    key: 'almond_mascot',
    name: 'Almond Toffee Mascot',
    edition: 'Nut & Crunch Flavor Line',
    role: 'Snack Pack & Portable Format',
    badge: 'Almond Crunch',
    svgVariant: 'almond_mascot',
    filenameHint: 'pose_posing',
    imageSrc: '/toffeeman/pose_posing.png',
    palette: ['#D97706', '#78350F', '#FEF3C7', '#FFFFFF'],
    keyFeatures: [
      'Smooth almond-shaped silhouette with high-gloss mirror glaze',
      'Expressive open cartoon eyes with white specular highlights',
      'Warm animated wave gesture and friendly brown boots',
      'Clean minimalist backdrop for high-visibility snack packaging'
    ],
    description:
      'Designed specifically for the roasted almond toffee SKU, communicating crisp texture, roasted nutty aroma, and snappy bite.'
  },
  {
    id: 'char-6',
    key: 'waffle_companion',
    name: 'The Wafer Companion',
    edition: 'Crisp Wafer & Travel Series',
    role: 'Lifestyle & Everyday Snacking',
    badge: 'Wafer Crisps',
    svgVariant: 'waffle_companion',
    filenameHint: 'action_standing_waving',
    imageSrc: '/toffeeman/action_standing_waving.png',
    palette: ['#0284C7', '#15803D', '#FDE68A', '#D4D4D8'],
    keyFeatures: [
      'Embossed wafer grid texture with golden toasted coloration',
      'Tropical blue Hawaiian shirt with lush green palm silhouettes',
      'Khaki safari shorts with stitched pockets and rugged trail boots',
      'Gloves making the cheerful "OK" gesture'
    ],
    description:
      'Represents the casual, playful side of toffee wafers. Evokes vacations, breaks between meetings, and carefree snacking.'
  }
];

export const ToffeemanDesignGallery: React.FC = () => {
  const [activeVariant, setActiveVariant] = useState<string>('char-1');
  const [uploadedAssets, setUploadedAssets] = useState<Record<string, string>>({});
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  // Check existing assets on server and localStorage
  const fetchServerAssets = async () => {
    // 1. First restore from local backup if available
    try {
      const cached = localStorage.getItem('toffeeman_synced_assets_v2');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && typeof parsed === 'object') {
          setUploadedAssets((prev) => ({ ...prev, ...parsed }));
        }
      }
    } catch (e) {
      console.log('No local asset cache');
    }

    // 2. Fetch all persisted files from server disk (/public/toffeeman/)
    try {
      const res = await fetch('/api/toffeeman-assets');
      if (res.ok) {
        const data = await res.json();
        if (data.files && Array.isArray(data.files)) {
          const map: Record<string, string> = {};
          data.files.forEach((f: string) => {
            const url = `/toffeeman/${f}`;
            map[f.toLowerCase()] = url;
            map[f.toLowerCase().replace(/_/g, ' ')] = url;
            map[f.toLowerCase().replace(/ /g, '_')] = url;
            map[f] = url;
          });
          setUploadedAssets((prev) => {
            const merged = { ...prev, ...map };
            try {
              localStorage.setItem('toffeeman_synced_assets_v2', JSON.stringify(merged));
            } catch (err) {}
            return merged;
          });
        }
      }
    } catch (err) {
      console.log('No server asset route or server offline');
    }
  };

  useEffect(() => {
    fetchServerAssets();
  }, []);

  const currentVariant = CHARACTER_VARIANTS.find((v) => v.id === activeVariant) || CHARACTER_VARIANTS[0];

  // Look for uploaded image matching this variant
  const getCustomImage = (variant: DesignVariant): string | null => {
    const hint = variant.filenameHint.toLowerCase();
    for (const [key, url] of Object.entries(uploadedAssets)) {
      if (key.includes(hint) || hint.includes(key) || key.includes(variant.key)) {
        return url as string;
      }
    }
    if (variant.imageSrc) return variant.imageSrc;
    return null;
  };

  const customImg = getCustomImage(currentVariant);

  return (
    <div className="space-y-8">
      {/* Main Character Variants Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Variants Selector List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-200/80">
              Mascot Universe ({CHARACTER_VARIANTS.length} Editions)
            </span>
          </div>

          <div className="space-y-2">
            {CHARACTER_VARIANTS.map((v) => {
              const hasFile = !!getCustomImage(v);
              const isSelected = activeVariant === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveVariant(v.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-400 text-amber-950 border-amber-300 shadow-lg font-medium scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center p-1 ${
                        isSelected ? 'bg-amber-950/15 border border-amber-900/30' : 'bg-black/30 border border-white/10'
                      }`}
                    >
                      {hasFile ? (
                        <img
                          src={getCustomImage(v)!}
                          alt={v.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <MascotSvg variant={v.svgVariant} className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-semibold leading-tight">{v.name}</div>
                      <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-amber-900' : 'text-amber-200/60'}`}>
                        {v.badge}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-amber-950' : 'text-white/40'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Character Detailed Visual Showcase */}
        <div className="lg:col-span-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-amber-500/20 backdrop-blur-md relative overflow-hidden">
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 relative z-10">
              {/* Visual Graphic Display */}
              <div className="md:w-1/2 flex flex-col items-center">
                <div className="relative w-full aspect-square max-w-[320px] rounded-3xl overflow-hidden bg-gradient-to-b from-amber-900/30 to-black/60 border border-amber-400/30 shadow-2xl p-4 flex items-center justify-center group">
                  {customImg ? (
                    <img
                      src={customImg}
                      alt={currentVariant.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-2">
                      <MascotSvg variant={currentVariant.svgVariant} className="w-full h-full max-h-[260px]" />
                    </div>
                  )}

                  {/* Zoom Lightbox Trigger */}
                  <button
                    onClick={() =>
                      setLightboxImage({
                        src: customImg || '',
                        title: currentVariant.name
                      })
                    }
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-amber-400 hover:text-amber-950 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-md"
                    title="Zoom in"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-4 inset-x-4 flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-amber-400/30">
                      {currentVariant.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white/70">
                      Original 3D Model
                    </span>
                  </div>
                </div>

                {/* Color Palette Indicators */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-amber-200/70 uppercase">Palette:</span>
                  <div className="flex gap-1.5">
                    {currentVariant.palette.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border border-white/30 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Design Anatomy & Breakdown */}
              <div className="md:w-1/2 space-y-4">
                <div>
                  <span className="text-xs font-mono text-amber-300 tracking-wider uppercase">
                    {currentVariant.edition}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mt-1">
                    {currentVariant.name}
                  </h3>
                  <p className="text-xs font-mono text-amber-100/70 mt-0.5">{currentVariant.role}</p>
                </div>

                <p className="text-sm text-rose-100/85 leading-relaxed font-sans font-light">
                  {currentVariant.description}
                </p>

                {/* Key Design Features */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-amber-200/80">
                    Design Specs & Accessories
                  </h5>
                  <ul className="space-y-2 text-xs text-rose-100/90 font-sans">
                    {currentVariant.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className="relative max-w-4xl max-h-[90vh] bg-black/60 rounded-3xl p-4 border border-amber-400/30 overflow-hidden flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex justify-between items-center pb-3 border-b border-white/10 mb-3 px-2">
                <h4 className="text-white font-serif text-lg">{lightboxImage.title}</h4>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="w-full flex items-center justify-center overflow-auto max-h-[75vh]">
                {lightboxImage.src ? (
                  <img
                    src={lightboxImage.src}
                    alt={lightboxImage.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[70vh] object-contain rounded-xl"
                  />
                ) : (
                  <div className="w-80 h-96 flex items-center justify-center">
                    <MascotSvg variant={currentVariant.svgVariant} className="w-full h-full" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

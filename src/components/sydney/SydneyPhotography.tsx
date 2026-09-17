import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PHOTOGRAPHY_GALLERY, PhotoItem } from '../../data/sydneyData';
import { Camera, Eye, X, ZoomIn, Sparkles } from 'lucide-react';

export const SydneyPhotography: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  return (
    <section id="photography" className="py-24 bg-[#FAF7F2] border-b border-[#E8DFD5]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Behind the Lens</span>
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#1F1D1A] font-normal tracking-tight">
              Photography
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base sm:text-lg font-serif text-[#2B2723] leading-relaxed">
              I've done photography for{' '}
              <strong className="text-[#7A141D] font-bold underline decoration-[#7A141D]/30 underline-offset-4">
                over 5 years
              </strong>
              . My artistic approach with most photographs is to capture the moments where people are most present.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHOTOGRAPHY_GALLERY.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setActivePhoto(photo)}
              className={`group cursor-pointer rounded-[2rem] overflow-hidden bg-white border border-[#E0D5C7] shadow-sm hover:shadow-xl transition-all duration-500 relative ${
                photo.span || ''
              }`}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-200">
                    {photo.category}
                  </span>
                  <h4 className="font-serif font-bold text-lg sm:text-xl text-white">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-zinc-200 mt-1 line-clamp-2 font-sans">
                    {photo.caption}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-[#1F1D1A] text-white shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#7A141D] flex items-center justify-center transition-colors"
                aria-label="Close photo modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 bg-[#181614] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-300">
                    {activePhoto.category}
                  </span>
                  <h3 className="text-2xl font-serif text-white font-medium mt-0.5">
                    {activePhoto.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1 font-sans">
                    {activePhoto.caption}
                  </p>
                </div>
                <div className="shrink-0 text-xs font-mono text-zinc-400 border border-zinc-700 rounded-xl px-4 py-2">
                  5+ Years Photography Experience
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

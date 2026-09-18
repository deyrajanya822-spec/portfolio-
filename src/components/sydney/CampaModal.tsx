import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Award, FileText, Download } from 'lucide-react';
import { CampaWorkShowcase } from './CampaWorkShowcase';

interface CampaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampaModal: React.FC<CampaModalProps> = ({ isOpen, onClose }) => {
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
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-6xl bg-[#14100F] text-white rounded-[2.5rem] shadow-2xl border-2 border-red-500/30 overflow-hidden z-10 my-auto max-h-[94vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-stone-800 bg-[#1C1413]">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-[#450A0A] flex items-center justify-center text-white shadow-lg border border-red-400/40">
                <Sparkles className="w-5 h-5 text-red-200" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-red-400 font-bold">
                    Strategic Brand Engagement • Summer 2025
                  </span>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-red-500/40" />
                  <span className="hidden sm:inline-block text-[11px] font-mono text-stone-400">
                    Storyboats × Campa CSD
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif text-white font-normal tracking-tight">
                  Campa Cards & Consumer Research: The Gen Z Brand Strategy
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

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#14100F]">
            <CampaWorkShowcase />
          </div>

          {/* Footer Bar */}
          <div className="px-6 sm:px-8 py-4 bg-[#100D0C] border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-stone-400">
              <span className="text-red-400 font-bold">Storyboats Internship Capstone</span> • 19 Sessions • 9 Pan-India In-Depth Interviews • 10-Slide Deck • 4 Retail POS Units
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

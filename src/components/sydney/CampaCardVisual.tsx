import React from 'react';

interface CampaCardVisualProps {
  rank: string; // 'A', 'K', 'Q', 'J', '9'
  suit?: string;
  theme?: 'royal' | 'gold' | 'crimson' | 'dark';
  className?: string;
}

export const CampaCardVisual: React.FC<CampaCardVisualProps> = ({
  rank,
  suit = '♥',
  theme = 'crimson',
  className = 'w-full aspect-[2.5/3.5]'
}) => {
  return (
    <div
      className={`relative rounded-2xl border-2 shadow-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none ${
        theme === 'dark'
          ? 'bg-[#18181B] border-red-500/40 text-white'
          : 'bg-[#FAF7F2] border-stone-300 text-stone-900 shadow-amber-950/20'
      } ${className}`}
    >
      {/* Background Watermark Filigree */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none flex items-center justify-center">
        <span className="text-[12rem] font-serif font-black">{suit}</span>
      </div>

      {/* Top Left Rank & Suit */}
      <div className="flex flex-col items-center w-8 leading-none">
        <span className="text-2xl sm:text-3xl font-serif font-black text-[#C92A2A]">{rank}</span>
        <span className="text-xl sm:text-2xl text-[#C92A2A]">{suit}</span>
      </div>

      {/* Center Illustrated Motif */}
      <div className="my-auto py-2 flex flex-col items-center justify-center text-center relative z-10">
        {rank === 'A' && (
          <div className="space-y-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-red-100 border-2 border-red-400/60 flex items-center justify-center text-red-600 text-3xl font-serif font-bold shadow-inner">
              ♥
            </div>
            <div className="font-serif italic text-xs sm:text-sm text-stone-700 max-w-[200px] leading-snug">
              "Not by trying. Not by performing. Simply by being completely yourself."
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600/10 text-red-700 text-[10px] font-mono uppercase tracking-wider font-bold">
              The Brand Belief
            </div>
          </div>
        )}

        {rank === 'K' && (
          <div className="space-y-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-amber-100 border-2 border-amber-500/60 p-2 flex items-center justify-center shadow-md">
              <svg viewBox="0 0 100 100" className="w-full h-full text-amber-800 fill-current">
                {/* Crown + King Silhouette */}
                <path d="M20,40 L35,60 L50,30 L65,60 L80,40 L80,75 L20,75 Z" fill="#D97706" />
                <circle cx="50" cy="25" r="5" fill="#DC2626" />
                <circle cx="20" cy="35" r="4" fill="#DC2626" />
                <circle cx="80" cy="35" r="4" fill="#DC2626" />
                <rect x="25" y="70" width="50" height="8" rx="2" fill="#B45309" />
              </svg>
            </div>
            <div className="font-serif font-bold text-sm sm:text-base text-stone-900">
              The Delhi Metro King
            </div>
            <div className="font-serif italic text-[11px] sm:text-xs text-stone-600 max-w-[220px] leading-tight">
              "India is not one thing and yet, together. Grounded amidst the crowd."
            </div>
          </div>
        )}

        {rank === 'Q' && (
          <div className="space-y-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-rose-100 border-2 border-rose-500/60 p-2 flex items-center justify-center shadow-md">
              <svg viewBox="0 0 100 100" className="w-full h-full text-rose-800 fill-current">
                {/* Queen Tiara + Orange Bottle */}
                <path d="M25,50 Q50,20 75,50 L70,75 L30,75 Z" fill="#F43F5E" />
                <polygon points="50,15 58,35 75,35 60,45 68,65 50,52 32,65 40,45 25,35 42,35" fill="#F59E0B" />
                <rect x="45" y="55" width="10" height="25" rx="3" fill="#EA580C" />
              </svg>
            </div>
            <div className="font-serif font-bold text-sm sm:text-base text-stone-900">
              Queen of Hearts
            </div>
            <div className="font-serif italic text-[11px] sm:text-xs text-stone-600 max-w-[220px] leading-tight">
              "Assured Me. Richer We. Quiet rootedness at Diwali."
            </div>
          </div>
        )}

        {rank === 'J' && (
          <div className="space-y-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-blue-100 border-2 border-blue-500/60 p-2 flex items-center justify-center shadow-md">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-800 fill-current">
                {/* Jack Feathered Hat + Lime Bottle */}
                <path d="M20,65 C20,45 80,45 80,65 L75,85 L25,85 Z" fill="#2563EB" />
                <path d="M25,50 Q45,25 75,45 Q50,40 25,50 Z" fill="#10B981" />
                <path d="M60,25 Q75,10 85,25" stroke="#F59E0B" strokeWidth="4" fill="none" />
                <rect x="46" y="60" width="8" height="24" rx="2" fill="#16A34A" />
              </svg>
            </div>
            <div className="font-serif font-bold text-sm sm:text-base text-stone-900">
              Jack of Hearts
            </div>
            <div className="font-serif italic text-[11px] sm:text-xs text-stone-600 max-w-[220px] leading-tight">
              "Rooted Belonging. No swagger. Just real connection."
            </div>
          </div>
        )}

        {rank === '9' && (
          <div className="space-y-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-500/60 flex items-center justify-center text-emerald-800 text-2xl font-serif font-bold shadow-inner">
              9♥
            </div>
            <div className="font-serif font-bold text-sm sm:text-base text-stone-900">
              The Grounded Youth
            </div>
            <div className="font-serif italic text-[11px] sm:text-xs text-stone-600 max-w-[220px] leading-tight">
              "Warm without performing warmth. Simply herself in the hall."
            </div>
          </div>
        )}
      </div>

      {/* Bottom Right Inverted Rank & Suit */}
      <div className="flex flex-col items-center w-8 leading-none self-end rotate-180">
        <span className="text-2xl sm:text-3xl font-serif font-black text-[#C92A2A]">{rank}</span>
        <span className="text-xl sm:text-2xl text-[#C92A2A]">{suit}</span>
      </div>

      {/* Fine Ornamental Border Lines */}
      <div className="absolute inset-2 border border-red-500/20 rounded-xl pointer-events-none" />
    </div>
  );
};

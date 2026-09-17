import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VIDEOGRAPHY_PROJECTS, VideoProject } from '../../data/sydneyData';
import { Film, Play, Pause, Volume2, VolumeX, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { LotusTvcModal } from './LotusTvcModal';

export const SydneyVideography: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoProject>(VIDEOGRAPHY_PROJECTS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLotusModalOpen, setIsLotusModalOpen] = useState(false);

  return (
    <section id="videography" className="py-24 bg-[#FAF7F2] border-b border-[#E8DFD5]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>Motion & Video Storytelling</span>
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1F1D1A] font-normal tracking-tight">
            Videography
          </h2>
          <p className="text-sm sm:text-base text-[#5C554D] font-sans mt-3">
            Short-form social reels, event recaps, and documentary storytelling from production to final export.
          </p>
        </div>

        {/* Featured Video Player & Playlist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Player Display */}
          <div className="lg:col-span-8 rounded-[2.8rem] overflow-hidden bg-[#1F1D1A] text-white border border-zinc-800 shadow-xl p-6 sm:p-8">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black shadow-inner">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isPlaying ? 'scale-105 filter brightness-95' : 'filter brightness-90'
                }`}
              />

              {/* Video Overlay Info */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-white flex items-center gap-2 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>{activeVideo.tag}</span>
              </div>

              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-white flex items-center gap-1.5 border border-white/10">
                <Clock className="w-3 h-3 text-rose-300" />
                <span>{activeVideo.duration}</span>
              </div>

              {/* Play / Pause Central Action */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 rounded-full bg-[#7A141D] hover:bg-[#911823] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 group border-2 border-white/30"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-current" />
                  ) : (
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  )}
                </button>
              </div>

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-300">
                    {isPlaying ? '0:24' : '0:00'} / {activeVideo.duration}
                  </span>
                  <div className="w-36 sm:w-64 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-[#7A141D] rounded-full transition-all duration-300 ${
                        isPlaying ? 'w-2/5' : 'w-0'
                      }`}
                    />
                  </div>
                </div>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Toggle sound"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Video Details */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-rose-300">
                  {activeVideo.client}
                </span>
                <h3 className="text-2xl font-serif text-white font-medium mt-0.5">
                  {activeVideo.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-xl font-sans">
                  {activeVideo.description}
                </p>

                {activeVideo.id === 'vid-lotus' && (
                  <div className="pt-3">
                    <button
                      onClick={() => setIsLotusModalOpen(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A141D] hover:bg-[#961924] text-white text-xs font-mono transition-all shadow-md cursor-pointer hover:scale-105"
                    >
                      <Film className="w-3.5 h-3.5" />
                      <span>Open 38s TVC Storyboard & Production Brief</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="shrink-0 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                1080p60 • Color Graded
              </div>
            </div>
          </div>

          {/* Playlist / Video Selector */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#7D756C] font-semibold px-2">
              Featured Video Projects
            </h4>

            <div className="space-y-3">
              {VIDEOGRAPHY_PROJECTS.map((video) => {
                const isSelected = activeVideo.id === video.id;
                return (
                  <button
                    key={video.id}
                    onClick={() => {
                      setActiveVideo(video);
                      setIsPlaying(true);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                      isSelected
                        ? 'bg-white border-[#7A141D] shadow-md ring-2 ring-[#7A141D]/10'
                        : 'bg-white/80 border-[#E0D5C7] hover:bg-white hover:border-[#7A141D]/40'
                    }`}
                  >
                    <div className="relative w-20 h-14 rounded-xl overflow-hidden bg-zinc-900 shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-current" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase text-[#7A141D] font-semibold truncate">
                          {video.tag}
                        </span>
                        <span className="text-[10px] font-mono text-[#7D756C]">
                          {video.duration}
                        </span>
                      </div>
                      <h5 className="font-serif font-bold text-sm text-[#1F1D1A] truncate mt-0.5">
                        {video.title}
                      </h5>
                      <p className="text-xs text-[#6B635A] truncate font-sans">
                        {video.client}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Lotus Chocolate AI TVC Modal */}
      <LotusTvcModal
        isOpen={isLotusModalOpen}
        onClose={() => setIsLotusModalOpen(false)}
      />
    </section>
  );
};

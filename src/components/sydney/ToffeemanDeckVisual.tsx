import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Car, Smartphone, Send, Clock, Users, ArrowRight, Quote } from 'lucide-react';

export const CONSUMER_MOMENTS = [
  {
    num: '01',
    icon: Car,
    title: 'Sitting in the car before walking into a meeting',
    desc: 'The engine is off. The phone is face down. Three minutes of deliberate hesitation where the brain gathers courage.',
    mood: 'Anticipation & Calibrating Courage'
  },
  {
    num: '02',
    icon: Smartphone,
    title: 'Mid-scroll, not looking for anything in particular',
    desc: 'The endless feed has turned into white noise. The hand moves unconsciously while the mind seeks an offline sensory tether.',
    mood: 'Digital Fatigue & Sensory Grounding'
  },
  {
    num: '03',
    icon: Send,
    title: 'Before sending a message you were not sure about sending',
    desc: 'The cursor blinks on the draft. A micro-pause between impulse and consequence, chewing through uncertainty.',
    mood: 'Emotional Pause & Calculated Restraint'
  },
  {
    num: '04',
    icon: Clock,
    title: 'Waiting for something to start or something to end',
    desc: 'Airport gates, elevator lobbies, doctors’ waiting rooms. In-between spaces where time slows down.',
    mood: 'Liminal Restlessness & Quiet Solitude'
  },
  {
    num: '05',
    icon: Users,
    title: 'Alone in a room that has other people in it',
    desc: 'Surrounded by corporate chatter or family bustle, retreating inward into a private, buttery sensory sanctuary.',
    mood: 'Introverted Sanctuary & Boundary Setting'
  }
];

export const ToffeemanDeckVisual: React.FC<{ customImage?: string }> = ({ customImage }) => {
  const [activeMoment, setActiveMoment] = useState<number>(0);

  return (
    <div className="space-y-8">
      {/* Slide Deck Canvas */}
      <div className="rounded-3xl bg-gradient-to-br from-[#3D0C11] via-[#2A080C] to-black border border-amber-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Deck Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono tracking-widest text-amber-300 uppercase">
              02 — THE CONSUMER
            </span>
            <span className="text-[11px] font-mono text-amber-200/60 uppercase">
              Strategic Brand Pitch Slide
            </span>
          </div>

          {/* Headline & Editorial Thesis */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-serif text-white font-normal tracking-tight">
              When do people actually have a toffee?
            </h2>
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-amber-400/20 backdrop-blur-md">
              <Quote className="w-5 h-5 text-amber-400/60 mb-1" />
              <p className="text-sm sm:text-base text-amber-100/90 font-serif italic leading-relaxed">
                “Not at a party. Not to celebrate. The toffee moment is quieter than that. It is between things—between one conversation and the next, between a thought and its consequences.”
              </p>
            </div>
          </div>

          {/* 5 Real-Life Scenarios Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
            {CONSUMER_MOMENTS.map((moment, idx) => {
              const Icon = moment.icon;
              const isSelected = activeMoment === idx;
              return (
                <div
                  key={moment.num}
                  onClick={() => setActiveMoment(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-400 text-amber-950 border-amber-300 shadow-xl scale-[1.03] font-medium'
                      : 'bg-black/30 border-white/10 hover:border-amber-400/40 text-white'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono ${isSelected ? 'text-amber-900 font-bold' : 'text-amber-400'}`}>
                        {moment.num}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-950' : 'text-amber-300/80'}`} />
                    </div>
                    <h5 className="text-xs font-serif leading-snug">{moment.title}</h5>
                  </div>
                  <div className={`text-[10px] font-mono mt-3 pt-2 border-t ${isSelected ? 'border-amber-950/20 text-amber-900' : 'border-white/10 text-rose-200/60'}`}>
                    {moment.mood}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Moment Focus Card */}
          <div className="p-6 rounded-2xl bg-black/60 border border-amber-400/30 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300">
                Moment Breakdown: {CONSUMER_MOMENTS[activeMoment].num}
              </span>
              <h4 className="text-lg font-serif text-white font-medium">
                {CONSUMER_MOMENTS[activeMoment].title}
              </h4>
              <p className="text-xs sm:text-sm text-rose-100/90 font-sans max-w-2xl">
                {CONSUMER_MOMENTS[activeMoment].desc}
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-200 text-xs font-mono shrink-0">
              Psychological State: {CONSUMER_MOMENTS[activeMoment].mood}
            </div>
          </div>

          {/* Slide Deck Bottom Insight */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-amber-200/80">
            <div>
              <strong className="text-white">The What-If Moment:</strong> Everyone has one. Nobody talks about it.
            </div>
            <div className="flex gap-4 text-[11px] text-amber-300/70">
              <span>Age Cohorts: 14 • 26 • 34 • 40 • 58</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

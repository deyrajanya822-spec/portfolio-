import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, Check, Mail, Phone, MapPin, Calendar, DollarSign, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Service } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: Service | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Brand Positioning & Architecture');
  const [budget, setBudget] = useState('Commercial Project Scope');
  const [timeline, setTimeline] = useState('2-4 Weeks');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setServiceType(initialService.title);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#ec4899', '#f97316', '#3b82f6', '#10b981']
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      <div
        id="contact-modal-backdrop"
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-auto text-white"
        >
          {/* Modal Header */}
          <div className="px-6 sm:px-8 py-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/80">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-syne font-black text-xl sm:text-2xl text-white">
                  START A STRATEGY PROJECT
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  Direct briefing with Rajanya Dey
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              aria-label="Close contact modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-syne font-black text-2xl sm:text-3xl text-white">
                  BRIEF RECEIVED!
                </h4>
                <p className="text-sm text-zinc-400 max-w-md font-outfit">
                  Thank you for reaching out. Rajanya will review your brief and reply to <span className="text-pink-400 font-semibold">{email || 'your email'}</span> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2-Column Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe / Brand Co."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-white placeholder-zinc-500 text-sm outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-white placeholder-zinc-500 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Service Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    What strategic engagement do you need?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Brand Positioning & Architecture',
                      'Market Research & Consumer Insights',
                      'Integrated Campaign & TVC Prototyping',
                      'Category Landscape & Whitespace Analysis',
                      'Brand Identity & Narrative Decks',
                      'Strategic Advisory / Case Consultation'
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setServiceType(type)}
                        className={`px-3.5 py-2.5 rounded-xl text-left text-xs font-medium border transition-all ${
                          serviceType === type
                            ? 'bg-pink-600/20 border-pink-500 text-pink-300'
                            : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline & Engagement Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-pink-400" />
                      <span>Engagement Type</span>
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-pink-500 text-white text-sm outline-none"
                    >
                      <option>Quick Strategic Audit / Sprint</option>
                      <option>Full Research Study & Synthesis</option>
                      <option>End-to-End Brand Relaunch System</option>
                      <option>Academic / Advisory Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>Target Timeline</span>
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-pink-500 text-white text-sm outline-none"
                    >
                      <option>Sprint (1-2 Weeks)</option>
                      <option>Standard Study (2-4 Weeks)</option>
                      <option>Quarterly Project (1-3 Months)</option>
                      <option>Long-Term Engagement</option>
                    </select>
                  </div>
                </div>

                {/* Message / Project Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Challenge Overview & Context
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your product/brand challenge, target demographic, competitor dynamics, or research goals..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-white placeholder-zinc-500 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <div className="text-xs font-mono text-zinc-500 hidden sm:block">
                    Direct strategic collaboration • NDA protected
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 rounded-full glow-pill text-white font-syne font-black text-sm tracking-widest uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>SUBMIT BRIEF</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

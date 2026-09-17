import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Check, Copy, Sparkles, Mail, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onOpenFullModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenFullModal }) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    setIsSent(true);
    confetti({
      particleCount: 35,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#a855f7', '#ec4899', '#f97316', '#3b82f6']
    });

    setTimeout(() => {
      setIsSent(false);
      setEmailInput('');
    }, 4000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('rajanya.dey@greatlakes.edu.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-[#08080a]">
      {/* Light Card for GET IN TOUCH matching Screenshot 9 */}
      <div className="max-w-7xl mx-auto rounded-3xl sm:rounded-[2.5rem] bg-[#f4f4f7] text-[#111115] p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden border border-white/60">
        
        {/* Floating 3D Purple Balloon Knot Sticker (Screenshot 9) */}
        <motion.div
          id="contact-3d-purple-knot"
          className="absolute -top-4 -left-4 sm:top-6 sm:left-6 w-20 h-20 sm:w-28 sm:h-28 pointer-events-auto cursor-pointer z-10"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.15, rotate: 20 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            confetti({
              particleCount: 20,
              origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
              colors: ['#a855f7', '#d8b4fe']
            });
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_15px_25px_rgba(168,85,247,0.45)]">
            <defs>
              <linearGradient id="purpleBalloonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d8b4fe" />
                <stop offset="35%" stopColor="#a855f7" />
                <stop offset="70%" stopColor="#7e22ce" />
                <stop offset="100%" stopColor="#4c1d95" />
              </linearGradient>
            </defs>
            {/* 3D Torus knot balloon shape */}
            <path
              d="M 30 25 C 15 40, 15 65, 30 78 C 45 92, 70 92, 85 78 C 95 65, 95 40, 80 25 C 65 10, 45 10, 30 25 Z"
              fill="url(#purpleBalloonGrad)"
            />
            <ellipse cx="45" cy="35" rx="14" ry="7" fill="#ffffff" opacity="0.65" transform="rotate(-35 45 35)" />
            <path
              d="M 40 45 C 50 35, 65 35, 75 50 C 85 65, 75 80, 60 80 C 45 80, 35 65, 45 45 Z"
              fill="#581c87"
              opacity="0.35"
            />
          </svg>
        </motion.div>

        <div className="relative z-10 pl-0 sm:pl-28 lg:pl-32 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left Title & Email Copy Area */}
          <div className="space-y-3">
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl text-black uppercase tracking-tight">
              GET IN TOUCH
            </h2>
            
            <div className="flex items-center gap-3">
              <button
                onClick={copyEmailToClipboard}
                className="group flex items-center gap-2.5 text-lg sm:text-2xl font-syne font-bold text-zinc-900 hover:text-purple-600 transition-colors underline underline-offset-4 decoration-zinc-300 hover:decoration-purple-500 cursor-pointer"
              >
                <Mail className="w-5 h-5 text-purple-600" />
                <span>rajanya.dey@greatlakes.edu.in</span>
                {copiedEmail ? (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-600 text-white font-normal no-underline">
                    Copied!
                  </span>
                ) : (
                  <Copy className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm font-outfit text-zinc-600">
              Open to brand strategy sprints, consumer research collaborations, and management consulting inquiries.
            </p>
          </div>

          {/* Right Inline Quick Connect Form (Screenshot 9) */}
          <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[420px]">
            <form onSubmit={handleQuickSend} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email for quick chat..."
                  required
                  className="w-full px-5 py-4 rounded-full bg-white border border-zinc-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 text-zinc-900 placeholder-zinc-400 text-sm font-medium outline-none transition-all shadow-inner"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-black hover:bg-purple-600 text-white font-syne font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shrink-0 cursor-pointer"
              >
                {isSent ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>SENT!</span>
                  </>
                ) : (
                  <>
                    <span>SEND</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500">
                🔒 NDA / IP Protected Workflow
              </span>
              <button
                type="button"
                onClick={onOpenFullModal}
                className="text-[11px] font-mono font-bold text-purple-700 hover:text-purple-900 underline flex items-center gap-1 cursor-pointer"
              >
                <MessageSquare className="w-3 h-3" />
                <span>Open detailed project estimator</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

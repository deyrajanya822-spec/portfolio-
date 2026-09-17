import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SYDNEY_PROFILE } from '../../data/sydneyData';
import { X, Phone, Mail, Linkedin, Copy, Check, Send } from 'lucide-react';

interface SydneyConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SydneyConnectModal: React.FC<SydneyConnectModalProps> = ({ isOpen, onClose }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SYDNEY_PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SYDNEY_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-w-lg w-full rounded-[2.5rem] bg-[#FAF7F2] border border-[#E0D5C7] shadow-2xl p-6 sm:p-8 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F0EAE1] hover:bg-[#E0D5C7] text-[#1F1D1A] flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-left space-y-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A141D] font-semibold">
              Get in Touch
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1F1D1A] font-medium">
              Let's connect &amp; collaborate
            </h3>
            <p className="text-xs sm:text-sm text-[#5C554D] font-sans">
              Reach out directly by phone, email, or send a message below.
            </p>
          </div>

          {/* Quick Contact Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3.5 rounded-2xl bg-white border border-[#E8DFD5] flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-[#7D756C]">PHONE</span>
              <a
                href={`tel:${SYDNEY_PROFILE.phone.replace(/[^0-9]/g, '')}`}
                className="font-serif font-bold text-sm text-[#1F1D1A] hover:text-[#7A141D] truncate"
              >
                {SYDNEY_PROFILE.phone}
              </a>
              <button
                onClick={handleCopyPhone}
                className="text-[10px] font-mono text-[#7A141D] hover:underline flex items-center gap-1 mt-1"
              >
                {copiedPhone ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-[#E8DFD5] flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase text-[#7D756C]">EMAIL</span>
              <a
                href={`mailto:${SYDNEY_PROFILE.email}`}
                className="font-serif font-bold text-sm text-[#1F1D1A] hover:text-[#7A141D] truncate"
              >
                {SYDNEY_PROFILE.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="text-[10px] font-mono text-[#7A141D] hover:underline flex items-center gap-1 mt-1"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-6 space-y-2 bg-white rounded-2xl border border-[#E8DFD5] p-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h5 className="font-serif font-bold text-base text-[#1F1D1A]">Message Sent!</h5>
              <p className="text-xs text-[#5C554D]">Rajanya will respond as soon as possible.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-3.5 py-2 rounded-xl border border-[#DDD1C3] bg-white text-[#1F1D1A] text-xs focus:outline-none focus:border-[#7A141D]"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-3.5 py-2 rounded-xl border border-[#DDD1C3] bg-white text-[#1F1D1A] text-xs focus:outline-none focus:border-[#7A141D]"
              />
              <textarea
                required
                rows={3}
                placeholder="How can Rajanya support your strategy or organizational goals?"
                className="w-full px-3.5 py-2 rounded-xl border border-[#DDD1C3] bg-white text-[#1F1D1A] text-xs focus:outline-none focus:border-[#7A141D]"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-full bg-[#7A141D] hover:bg-[#600F17] text-white text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

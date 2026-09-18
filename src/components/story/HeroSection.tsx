import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Download, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { SYDNEY_PROFILE } from '../../data/sydneyData';

interface HeroSectionProps {
  onDownloadCV: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDownloadCV }) => {
  const fullText = "What happens when you send a curious person into the field?";
  const [displayedText, setDisplayedText] = useState("");
  const metricsRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // GSAP Counter-up for floating pills
  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [
        { id: '#pill-num-1', target: 14.2, decimals: 1, suffix: 'M+ Reach' },
        { id: '#pill-num-2', target: 9, decimals: 0, suffix: ' Cities' },
        { id: '#pill-num-3', target: 100, decimals: 0, suffix: '/100 SEO' },
        { id: '#pill-num-4', target: 5, decimals: 0, suffix: ' SBU Dashboard' },
        { id: '#pill-num-5', target: 7.8, decimals: 1, prefix: '₹', suffix: 'M Campaign' }
      ];

      targets.forEach((item) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: item.target,
          duration: 2.2,
          ease: 'power2.out',
          delay: 0.6,
          onUpdate: () => {
            const el = document.querySelector(item.id);
            if (el) {
              const formatted = item.decimals === 1 ? obj.val.toFixed(1) : Math.round(obj.val);
              el.textContent = `${item.prefix || ''}${formatted}${item.suffix}`;
            }
          }
        });
      });
    }, metricsRef);

    return () => ctx.revert();
  }, []);

  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="story-container">
        {/* Handwritten Question */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-typewriter-wrapper"
        >
          <span className="hero-typewriter-text">
            {displayedText}
            <span className="cursor-blink">|</span>
          </span>
        </motion.div>

        {/* Main Statement */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-main-title"
        >
          I solve business problems <br />
          by <span className="serif-italic-maroon">actually talking to people.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="hero-subtitle"
        >
          From kirana stores in 9 Indian cities to ₹7.8M campaigns — I start with questions, not assumptions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-actions"
        >
          <button onClick={scrollToStory} className="btn-primary">
            <span>Scroll to explore</span>
            <span className="bounce-arrow">
              <ArrowDown size={16} />
            </span>
          </button>

          <button onClick={onDownloadCV} className="btn-secondary">
            <Download size={16} />
            <span>Download CV</span>
          </button>
        </motion.div>

        {/* Floating Metric Pills */}
        <motion.div
          ref={metricsRef}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, staggerChildren: 0.1 }}
          className="hero-pills-cluster"
        >
          <div className="hero-metric-pill">
            <span id="pill-num-1" className="pill-number">14.2M+ Reach</span>
          </div>

          <div className="hero-metric-pill">
            <span id="pill-num-2" className="pill-number">9 Cities</span>
          </div>

          <div className="hero-metric-pill">
            <span id="pill-num-3" className="pill-number">100/100 SEO</span>
          </div>

          <div className="hero-metric-pill">
            <span id="pill-num-4" className="pill-number">5 SBU Dashboard</span>
          </div>

          <div className="hero-metric-pill">
            <span id="pill-num-5" className="pill-number">₹7.8M Campaign</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

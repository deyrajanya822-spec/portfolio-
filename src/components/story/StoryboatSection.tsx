import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Film } from 'lucide-react';
import gsap from 'gsap';

interface StoryboatSectionProps {
  onOpenLotus: () => void;
  onOpenToffeeman: () => void;
  onOpenRockwell: () => void;
  onOpenCampa: () => void;
}

export const StoryboatSection: React.FC<StoryboatSectionProps> = ({
  onOpenLotus,
  onOpenToffeeman,
  onOpenRockwell,
  onOpenCampa
}) => {
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate metrics counter with GSAP
            const targets = [
              { id: '#metric-val-1', target: 7.8, prefix: '₹', suffix: 'M', decimals: 1 },
              { id: '#metric-val-2', target: 9, suffix: ' Cities', decimals: 0 },
              { id: '#metric-val-3', target: 38, suffix: 's', decimals: 0 },
              { id: '#metric-val-4', target: 14.2, suffix: 'M+', decimals: 1 }
            ];

            targets.forEach((t) => {
              const obj = { val: 0 };
              gsap.to(obj, {
                val: t.target,
                duration: 2,
                ease: 'power2.out',
                onUpdate: () => {
                  const el = document.querySelector(t.id);
                  if (el) {
                    const formatted = t.decimals === 1 ? obj.val.toFixed(1) : Math.round(obj.val);
                    el.textContent = `${t.prefix || ''}${formatted}${t.suffix}`;
                  }
                }
              });
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 'lotus',
      category: 'Brand Strategy & AI Commercial',
      title: 'Lotus Chocolate',
      description:
        'Positioned the High 5 countline against 10 FMCG competitors and directed a 38-second AI commercial — "Some Fights End Better."',
      peek: '38-second AI commercial & Whitespace Audit',
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
      isVideo: true,
      videoDuration: '00:38',
      action: onOpenLotus
    },
    {
      id: 'toffeeman',
      category: 'Mascot Design & Consumer Psychology',
      title: 'Toffeeman',
      description:
        'Built an entire mascot universe — 9 emotional poses, a 6-panel comic narrative, and a study on why people reach for toffee.',
      peek: '9 emotional poses & comic narrative universe',
      image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80',
      action: onOpenToffeeman
    },
    {
      id: 'rockwell',
      category: 'Influencer Strategy & GTM',
      title: 'Rockwell',
      description:
        "Designed a ₹7.8M, 7-creator influencer campaign for car coolers across India's heat belt. 14.2M+ total reach.",
      peek: '14.2M+ total reach · ₹7.8M campaign budget',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      action: onOpenRockwell
    },
    {
      id: 'campa',
      category: 'Field Research & Retail Strategy',
      title: 'Campa CSD',
      description:
        'Spent 6 weeks in 9 Indian cities talking to real consumers. Discovered the "Passenger to Driver" insight. Designed 4 physical retail displays.',
      peek: '9-city field research & 4 retail displays',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      action: onOpenCampa
    }
  ];

  return (
    <>
      <div className="section-transition-to-dark" />
      <section id="internship-work" className="section-spacing bg-dark">
        <div className="story-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="dark-section-header"
          >
            <span className="chapter-label" style={{ color: '#9E978F' }}>
              CHAPTER 02
            </span>
            <div>
              <span className="handwritten-annotation">where things got real &rarr;</span>
            </div>

            <h2 className="dark-section-title">Into the Field</h2>
            <p className="dark-section-subtext">
              4 brands. 9 cities. One internship at Storyboat that changed how I think about strategy.
            </p>
          </motion.div>

          {/* Horizontal Carousel */}
          <div className="brand-carousel-container">
            {cards.map((card, index) => (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="brand-card"
              >
                <div
                  className="brand-card-img-wrapper"
                  onClick={card.action}
                  style={{ cursor: 'pointer', position: 'relative' }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="brand-card-img"
                    loading="lazy"
                  />
                  <span className="brand-card-badge">{card.category}</span>
                  {card.isVideo && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(26, 22, 20, 0.4)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'background 0.3s'
                      }}
                    >
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '50%',
                          background: 'var(--accent-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                          color: '#FFF'
                        }}
                      >
                        <Play size={20} fill="#FFF" style={{ marginLeft: '2px' }} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.72rem',
                          color: '#FFFFFF',
                          background: 'rgba(0,0,0,0.6)',
                          padding: '2px 8px',
                          borderRadius: '100px',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {card.videoDuration} &bull; Watch Commercial
                      </span>
                    </div>
                  )}
                </div>

                <div className="brand-card-content">
                  <div>
                    <h3 className="brand-card-title">{card.title}</h3>
                    <p className="brand-card-desc">{card.description}</p>
                    <div className="brand-card-peek">{card.peek}</div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {card.isVideo && (
                      <button
                        onClick={card.action}
                        className="btn-primary"
                        style={{
                          padding: '0.5rem 1rem',
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem',
                          width: '100%'
                        }}
                        aria-label={`Watch 38s Commercial for ${card.title}`}
                      >
                        <Play size={14} fill="currentColor" />
                        <span>Watch 38s AI Commercial</span>
                      </button>
                    )}

                    <button
                      onClick={card.action}
                      className="brand-card-link"
                      aria-label={`View full details for ${card.title}`}
                    >
                      <span>View Full Case Study</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Metrics Strip */}
          <div ref={metricsRef} className="metrics-strip">
            <div className="metric-strip-item">
              <div id="metric-val-1" className="metric-strip-val">₹7.8M</div>
              <div className="metric-strip-label">Rockwell GTM Budget</div>
            </div>

            <div className="metric-strip-item">
              <div id="metric-val-2" className="metric-strip-val">9 Cities</div>
              <div className="metric-strip-label">Field Research Scope</div>
            </div>

            <div className="metric-strip-item">
              <div id="metric-val-3" className="metric-strip-val">38s</div>
              <div className="metric-strip-label">AI Commercial Length</div>
            </div>

            <div className="metric-strip-item">
              <div id="metric-val-4" className="metric-strip-val">14.2M+</div>
              <div className="metric-strip-label">Total Campaign Reach</div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-transition-from-dark" />
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface StoryNavbarProps {
  onOpenContactModal?: () => void;
}

export const StoryNavbar: React.FC<StoryNavbarProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'The Story', href: '#story' },
    { label: 'Work', href: '#internship-work' },
    { label: 'Projects', href: '#projects' },
    { label: 'Recognition', href: '#recognition' },
    { label: 'What I Bring', href: '#skills' },
    { label: "Let's Talk", href: '#contact' }
  ];

  return (
    <header className={`story-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#hero" className="nav-brand">
          <span className="nav-name">Rajanya Dey</span>
          <span className="nav-divider">|</span>
          <span className="nav-sub">Strategy &amp; Business</span>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenContactModal) {
                e.preventDefault();
                onOpenContactModal();
              }
            }}
            className="nav-cta-btn"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(250, 247, 242, 0.98)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(122, 20, 29, 0.12)',
            padding: '1.5rem',
            boxShadow: '0 16px 32px rgba(42, 36, 32, 0.1)'
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link"
                  style={{ fontSize: '1.1rem', display: 'block' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

import React from 'react';

interface WavyLinesProps {
  className?: string;
  variant?: 'hero' | 'about' | 'footer' | 'accent';
}

export const WavyLines: React.FC<WavyLinesProps> = ({ className = '', variant = 'hero' }) => {
  if (variant === 'hero') {
    return (
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute ${className}`}
        aria-hidden="true"
      >
        <path
          d="M-40 240 C 120 180, 180 420, 360 300 C 520 190, 620 460, 840 320"
          stroke="#7A141D"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        <path
          d="M-20 280 C 140 220, 200 450, 380 340 C 540 230, 640 490, 860 360"
          stroke="#7A141D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        />
        <path
          d="M100 490 C 260 410, 310 160, 480 230 C 650 300, 710 80, 880 150"
          stroke="#7A141D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.4"
        />
      </svg>
    );
  }

  if (variant === 'about') {
    return (
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute ${className}`}
        aria-hidden="true"
      >
        <path
          d="M-30 180 C 120 90, 200 320, 360 210 C 490 120, 560 320, 640 220"
          stroke="#7A141D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        <path
          d="M20 380 C 160 290, 280 390, 420 280 C 520 200, 580 320, 630 260"
          stroke="#7A141D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
        />
      </svg>
    );
  }

  if (variant === 'footer') {
    return (
      <svg
        viewBox="0 0 700 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute ${className}`}
        aria-hidden="true"
      >
        <path
          d="M-20 220 C 160 140, 240 330, 420 200 C 560 100, 640 290, 740 180"
          stroke="#7A141D"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
        <path
          d="M60 320 C 220 240, 340 370, 510 240 C 620 160, 680 280, 730 210"
          stroke="#7A141D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
    >
      <path
        d="M10 120 C 90 40, 150 180, 240 100 C 310 40, 360 160, 410 90"
        stroke="#7A141D"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
};

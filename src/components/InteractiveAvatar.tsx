import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import confetti from 'canvas-confetti';

interface InteractiveAvatarProps {
  onInteract?: () => void;
}

export const InteractiveAvatar: React.FC<InteractiveAvatarProps> = ({ onInteract }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWinking, setIsWinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [reactionText, setReactionText] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);

  // Mouse coordinate tracking relative to avatar center (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for head rotation and pupil look-at
  const springConfig = { damping: 20, stiffness: 140 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D head rotation transforms
  const rotateY = useTransform(smoothX, [-1, 1], [-18, 18]);
  const rotateX = useTransform(smoothY, [-1, 1], [16, -16]);
  const headTranslateX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const headTranslateY = useTransform(smoothY, [-1, 1], [-10, 10]);

  // Eye pupil offset
  const pupilX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const pupilY = useTransform(smoothY, [-1, 1], [-8, 8]);

  // Eyebrow lift
  const eyebrowY = useTransform(smoothY, [-1, 1], [-4, 4]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / (window.innerWidth / 2);
      const y = (e.clientY - centerY) / (window.innerHeight / 2);
      
      mouseX.set(Math.max(-1, Math.min(1, x)));
      mouseY.set(Math.max(-1, Math.min(1, y)));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Periodic automatic blink
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.4) {
        setIsWinking(true);
        setTimeout(() => setIsWinking(false), 220);
      }
    }, 4500);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    const phrases = [
      "Hi! I'm Rajanya — let's build bold brand narratives! 💡",
      "Cut iteration cycles & uncover white spaces 📈",
      "PGDM @ Great Lakes Gurgaon | McKinsey Forward Fellow 🎓",
      "Story-driven TVC scripts + AI campaign prototyping ✨",
      "Need a brand strategist? Click 'Contact Me' below! ✉️"
    ];
    setReactionText(phrases[nextCount % phrases.length]);
    setTimeout(() => setReactionText(null), 3200);

    confetti({
      particleCount: 25,
      spread: 60,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      },
      colors: ['#a855f7', '#ec4899', '#f97316', '#3b82f6', '#10b981']
    });

    if (onInteract) onInteract();
  };

  return (
    <div 
      ref={containerRef}
      id="hero-avatar-container"
      className="relative flex items-center justify-center cursor-pointer select-none py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ perspective: 1000 }}
    >
      {/* Interactive speech / thought bubble */}
      {reactionText && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute -top-12 sm:-top-14 z-30 px-4 py-2 bg-gradient-to-r from-purple-900/90 to-pink-900/90 border border-purple-400/50 rounded-full shadow-2xl backdrop-blur-md text-xs sm:text-sm font-semibold text-white tracking-wide flex items-center gap-2 whitespace-nowrap"
        >
          <span>{reactionText}</span>
          <span className="text-pink-300 animate-pulse">●</span>
        </motion.div>
      )}

      {/* Floating 3D ambient aura ring */}
      <motion.div 
        className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-purple-600/20 via-pink-500/15 to-orange-400/10 blur-3xl pointer-events-none"
        animate={{
          scale: isHovered ? [1, 1.15, 1] : [1, 1.05, 1],
          opacity: isHovered ? 0.8 : 0.45
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main 3D Avatar Face Frame with Parallax Rotation */}
      <motion.div
        id="alex-3d-character-head"
        className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72"
        style={{
          rotateX,
          rotateY,
          x: headTranslateX,
          y: headTranslateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter"
        >
          <defs>
            {/* Skin Shader Radial Gradient with SSS (Subsurface Scattering) */}
            <radialGradient id="skinBase" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ffdbcc" />
              <stop offset="45%" stopColor="#f5beaa" />
              <stop offset="85%" stopColor="#de9880" />
              <stop offset="100%" stopColor="#b86b53" />
            </radialGradient>

            {/* Hair Shader Volume Gradient */}
            <linearGradient id="hairGrad" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#4a3728" />
              <stop offset="35%" stopColor="#2c1d11" />
              <stop offset="75%" stopColor="#190e07" />
              <stop offset="100%" stopColor="#0d0703" />
            </linearGradient>

            {/* Hair Highlight Glint */}
            <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8d6b4f" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4a3728" stopOpacity="0" />
            </linearGradient>

            {/* Eyeball Gradient (3D gloss sphere) */}
            <radialGradient id="eyeballGrad" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#f0f2f5" />
              <stop offset="90%" stopColor="#d5dbe3" />
              <stop offset="100%" stopColor="#9aa4b2" />
            </radialGradient>

            {/* Pupil Depth */}
            <radialGradient id="pupilGrad" cx="35%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#26170f" />
              <stop offset="70%" stopColor="#120a06" />
              <stop offset="100%" stopColor="#050302" />
            </radialGradient>

            {/* Silver Earring Metal Shader */}
            <linearGradient id="silverEarring" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#c0c8d4" />
              <stop offset="75%" stopColor="#626e82" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            {/* 3D Cheek Blush */}
            <radialGradient id="blushGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* EARS (Left & Right with Earring) */}
          {/* Left Ear */}
          <g id="left-ear">
            <ellipse cx="108" cy="235" rx="26" ry="34" fill="url(#skinBase)" transform="rotate(-15 108 235)" />
            <ellipse cx="110" cy="235" rx="14" ry="20" fill="#c97963" transform="rotate(-15 110 235)" />
            {/* Double Silver Hoop Earring */}
            <circle cx="95" cy="256" r="10" fill="none" stroke="url(#silverEarring)" strokeWidth="4" />
            <circle cx="90" cy="242" r="7" fill="none" stroke="url(#silverEarring)" strokeWidth="3" />
          </g>

          {/* Right Ear */}
          <g id="right-ear">
            <ellipse cx="292" cy="235" rx="26" ry="34" fill="url(#skinBase)" transform="rotate(15 292 235)" />
            <ellipse cx="290" cy="235" rx="14" ry="20" fill="#c97963" transform="rotate(15 290 235)" />
            {/* Right Earring */}
            <circle cx="305" cy="256" r="10" fill="none" stroke="url(#silverEarring)" strokeWidth="4" />
          </g>

          {/* MAIN HEAD / JAW MESH */}
          <path
            d="M 125 180 
               C 120 120, 280 120, 275 180 
               C 285 240, 270 310, 200 325 
               C 130 310, 115 240, 125 180 Z"
            fill="url(#skinBase)"
            filter="drop-shadow(0 15px 25px rgba(0,0,0,0.5))"
          />

          {/* CHEEK BLUSH */}
          <ellipse cx="148" cy="256" rx="22" ry="14" fill="url(#blushGlow)" />
          <ellipse cx="252" cy="256" rx="22" ry="14" fill="url(#blushGlow)" />

          {/* EYEBROWS (Thick textured 3D brows) */}
          {/* Left Eyebrow */}
          <motion.g style={{ y: eyebrowY }}>
            <path
              d="M 130 182 C 145 166, 175 168, 185 178 C 178 184, 145 186, 130 182 Z"
              fill="#1e1108"
            />
            {/* Highlight hair strands */}
            <path d="M 135 180 Q 155 172 178 178" stroke="#4a3728" strokeWidth="2" strokeLinecap="round" />
          </motion.g>

          {/* Right Eyebrow */}
          <motion.g style={{ y: eyebrowY }}>
            <path
              d="M 215 178 C 225 168, 255 166, 270 182 C 255 186, 222 184, 215 178 Z"
              fill="#1e1108"
            />
            <path d="M 222 178 Q 245 172 265 180" stroke="#4a3728" strokeWidth="2" strokeLinecap="round" />
          </motion.g>

          {/* LEFT EYE */}
          <g id="left-eye-socket">
            {/* Eye Sclera Background */}
            <ellipse cx="160" cy="212" rx="24" ry="26" fill="url(#eyeballGrad)" stroke="#c29b88" strokeWidth="1.5" />
            
            {/* Iris & Pupil with interactive Look-At tracking */}
            <motion.g style={{ x: pupilX, y: pupilY }}>
              {/* Outer Iris Ring */}
              <circle cx="160" cy="212" r="14" fill="url(#pupilGrad)" />
              <circle cx="160" cy="212" r="13" fill="none" stroke="#52321c" strokeWidth="1.5" />
              {/* Pupil Core */}
              <circle cx="160" cy="212" r="8" fill="#000000" />
              {/* Eye Specular Light Reflection Dots */}
              <circle cx="156" cy="207" r="4.5" fill="#ffffff" />
              <circle cx="164" cy="215" r="1.8" fill="#ffffff" opacity="0.85" />
            </motion.g>

            {/* Upper Eyelid / Blink Mask */}
            <motion.path
              d="M 136 210 Q 160 184 184 210 Q 160 216 136 210 Z"
              fill="#c27760"
              animate={{
                d: isWinking
                  ? "M 136 210 Q 160 238 184 210 Q 160 212 136 210 Z"
                  : "M 136 210 Q 160 184 184 210 Q 160 188 136 210 Z"
              }}
              transition={{ duration: 0.15 }}
            />
          </g>

          {/* RIGHT EYE */}
          <g id="right-eye-socket">
            {/* Eye Sclera Background */}
            <ellipse cx="240" cy="212" rx="24" ry="26" fill="url(#eyeballGrad)" stroke="#c29b88" strokeWidth="1.5" />

            {/* Iris & Pupil with interactive Look-At tracking */}
            <motion.g style={{ x: pupilX, y: pupilY }}>
              {/* Outer Iris Ring */}
              <circle cx="240" cy="212" r="14" fill="url(#pupilGrad)" />
              <circle cx="240" cy="212" r="13" fill="none" stroke="#52321c" strokeWidth="1.5" />
              {/* Pupil Core */}
              <circle cx="240" cy="212" r="8" fill="#000000" />
              {/* Eye Specular Light Reflection Dots */}
              <circle cx="236" cy="207" r="4.5" fill="#ffffff" />
              <circle cx="244" cy="215" r="1.8" fill="#ffffff" opacity="0.85" />
            </motion.g>

            {/* Upper Eyelid */}
            <motion.path
              d="M 216 210 Q 240 184 264 210 Q 240 216 216 210 Z"
              fill="#c27760"
              animate={{
                d: (isWinking && clickCount % 2 === 1)
                  ? "M 216 210 Q 240 238 264 210 Q 240 212 216 210 Z"
                  : "M 216 210 Q 240 184 264 210 Q 240 188 216 210 Z"
              }}
              transition={{ duration: 0.15 }}
            />
          </g>

          {/* NOSE (Cute rounded 3D button nose with ambient shadow) */}
          <g id="nose">
            <ellipse cx="200" cy="245" rx="8" ry="6" fill="#bd6d56" />
            <circle cx="200" cy="243" r="5" fill="#ffcca8" opacity="0.75" />
            <path d="M 194 246 Q 200 250 206 246" stroke="#944834" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </g>

          {/* MOUTH (Expressive smirk / smile) */}
          <motion.g
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {/* Lip Shadow */}
            <path
              d="M 174 278 Q 200 294 226 278"
              fill="none"
              stroke="#873f2e"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Smile subtle curve & teeth highlight */}
            {isHovered && (
              <path
                d="M 180 279 Q 200 292 220 279"
                fill="#ffffff"
                opacity="0.9"
              />
            )}
            <ellipse cx="200" cy="292" rx="10" ry="3" fill="#b05d46" opacity="0.4" />
          </motion.g>

          {/* 3D TEXTURED VOLUMETRIC HAIR (Messy textured quiff matching Alex in screenshots) */}
          <g id="hair-volume" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.6))">
            {/* Back Hair Strands */}
            <path
              d="M 110 170 
                 C 90 90, 160 50, 200 55 
                 C 250 50, 310 90, 290 170 
                 C 275 140, 240 115, 200 115 
                 C 160 115, 125 140, 110 170 Z"
              fill="url(#hairGrad)"
            />

            {/* Volumetric Front Messy Tufts */}
            {/* Left Tuft */}
            <path
              d="M 110 160 C 95 110, 140 80, 160 100 C 145 115, 130 135, 120 165 Z"
              fill="url(#hairGrad)"
            />
            {/* Center Swept Spikes */}
            <path
              d="M 140 115 C 150 60, 210 50, 230 85 C 215 95, 190 90, 175 120 Z"
              fill="url(#hairGrad)"
            />
            <path
              d="M 185 85 C 220 40, 280 65, 275 115 C 255 105, 230 105, 210 120 Z"
              fill="url(#hairGrad)"
            />
            {/* Right Spiky Hair Tuft */}
            <path
              d="M 250 105 C 285 80, 305 125, 290 165 C 280 145, 265 125, 250 105 Z"
              fill="url(#hairGrad)"
            />
            {/* Forehead Overlapping Locks */}
            <path
              d="M 145 120 C 170 140, 190 125, 205 140 C 185 155, 160 145, 145 120 Z"
              fill="#26170d"
            />
            <path
              d="M 210 130 C 235 150, 260 130, 268 150 C 250 160, 230 150, 210 130 Z"
              fill="#22140a"
            />

            {/* Hair Specular Gleam / Rim Light */}
            <path
              d="M 160 75 Q 210 65 250 90"
              fill="none"
              stroke="url(#hairHighlight)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M 130 105 Q 150 95 170 105"
              fill="none"
              stroke="url(#hairHighlight)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </svg>

        {/* Small badge / prompt indicator */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-[10px] text-zinc-400 font-mono tracking-wider backdrop-blur-sm pointer-events-none whitespace-nowrap shadow-lg">
          CLICK AVATAR • INTERACTIVE 3D
        </div>
      </motion.div>
    </div>
  );
};

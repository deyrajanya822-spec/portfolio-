import React from 'react';

// Visual SVG Illustrations representing each of the 6 Character Variants
export const MascotSvg: React.FC<{ variant: string; className?: string }> = ({ variant, className = "w-full h-full" }) => {
  switch (variant) {
    case 'gentleman': // Red velvet top hat, feather, scepter, gold candy
      return (
        <svg viewBox="0 0 240 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ambient Warm Studio Glow */}
          <radialGradient id="gentleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0" />
          </radialGradient>
          <circle cx="120" cy="140" r="110" fill="url(#gentleGlow)" />

          {/* Scepter */}
          <path d="M48 240 L70 120" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
          <path d="M70 120 L76 96" stroke="#D97706" strokeWidth="8" strokeLinecap="round" />
          <circle cx="78" cy="90" r="12" fill="#F59E0B" stroke="#B45309" strokeWidth="3" />
          {/* Jewels on Scepter */}
          <circle cx="75" cy="88" r="3" fill="#10B981" />
          <circle cx="81" cy="92" r="3" fill="#3B82F6" />
          <circle cx="78" cy="84" r="3" fill="#EF4444" />

          {/* Mascot Body: Golden Translucent Caramel */}
          <defs>
            <linearGradient id="caramelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="hatVelvet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#991B1B" />
              <stop offset="60%" stopColor="#7F1D1D" />
              <stop offset="100%" stopColor="#450A0A" />
            </linearGradient>
            <linearGradient id="goldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>

          {/* Legs */}
          <rect x="94" y="210" width="22" height="30" rx="10" fill="url(#caramelGrad)" />
          <rect x="124" y="210" width="22" height="30" rx="10" fill="url(#caramelGrad)" />

          {/* Main Torso */}
          <path
            d="M80 130 C80 105, 160 105, 160 130 L165 210 C165 220, 150 225, 120 225 C90 225, 75 220, 75 210 Z"
            fill="url(#caramelGrad)"
            stroke="#B45309"
            strokeWidth="3"
          />

          {/* Gloss highlight on body */}
          <path d="M86 135 C88 120, 105 120, 110 125" stroke="#FEF3C7" strokeWidth="4" strokeLinecap="round" opacity="0.6" />

          {/* Arms */}
          {/* Left Arm holding scepter */}
          <path d="M78 145 C65 155, 60 165, 72 170" stroke="url(#caramelGrad)" strokeWidth="14" strokeLinecap="round" />
          {/* Right Arm holding toffee candy */}
          <path d="M162 145 C175 155, 175 170, 155 175" stroke="url(#caramelGrad)" strokeWidth="14" strokeLinecap="round" />

          {/* Face: Eyes & Smile */}
          <circle cx="106" cy="148" r="4" fill="#451A03" />
          <circle cx="134" cy="148" r="4" fill="#451A03" />
          <circle cx="107" cy="146" r="1.5" fill="#FFFFFF" />
          <circle cx="135" cy="146" r="1.5" fill="#FFFFFF" />
          <path d="M112 162 Q120 169 128 162" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Gold Foil Candy Bar in Hand */}
          <g transform="translate(138, 155) rotate(-15)">
            <path d="M-6 8 L-14 0 L-14 16 Z" fill="url(#goldFoil)" />
            <rect x="-6" y="0" width="36" height="16" rx="3" fill="url(#goldFoil)" stroke="#78350F" strokeWidth="1" />
            <rect x="-2" y="3" width="28" height="10" rx="1.5" fill="#991B1B" />
            <text x="12" y="10.5" fill="#FEF3C7" fontSize="5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">TOFFEEMAN</text>
            <path d="M30 8 L38 0 L38 16 Z" fill="url(#goldFoil)" />
          </g>

          {/* Red Velvet Top Hat */}
          {/* Brim */}
          <ellipse cx="120" cy="112" rx="46" ry="12" fill="url(#hatVelvet)" stroke="#B91C1C" strokeWidth="2" />
          {/* Crown */}
          <path d="M88 110 L92 56 C92 50, 148 50, 148 56 L152 110 Z" fill="url(#hatVelvet)" />
          {/* Hat Top */}
          <ellipse cx="120" cy="56" rx="28" ry="8" fill="#B91C1C" />
          {/* Golden Ribbon Band */}
          <path d="M90 102 C100 108, 140 108, 150 102 L151 108 C140 114, 100 114, 89 108 Z" fill="#F59E0B" />
          <rect x="100" y="100" width="40" height="7" rx="1.5" fill="#991B1B" />
          <text x="120" y="105.5" fill="#FEF3C7" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">TOFFEEMAN</text>

          {/* White Ostrich Feather Plume */}
          <path
            d="M142 98 Q165 70 190 65 Q180 85 146 102"
            fill="#FFFFFF"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />
          <path d="M142 98 Q168 76 186 67" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      );

    case 'royal_purple': // Purple velvet hat, gummy bears, peppermint, golden ticket
      return (
        <svg viewBox="0 0 240 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="purpleVelvet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7E22CE" />
              <stop offset="50%" stopColor="#581C87" />
              <stop offset="100%" stopColor="#3B0764" />
            </linearGradient>
            <linearGradient id="candyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>

          {/* Background Glow */}
          <circle cx="120" cy="140" r="110" fill="#7E22CE" fillOpacity="0.15" />

          {/* Scepter: Candy Cane & Lollipop */}
          <path d="M50 240 L70 120" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
          <circle cx="76" cy="96" r="14" fill="#F43F5E" />
          <path d="M76 86 C82 86, 86 92, 86 96 C86 102, 70 102, 70 96" stroke="#FFFFFF" strokeWidth="3" fill="none" />
          <circle cx="64" cy="106" r="6" fill="#10B981" />

          {/* Legs & Torso */}
          <rect x="94" y="210" width="22" height="30" rx="10" fill="url(#candyGrad)" />
          <rect x="124" y="210" width="22" height="30" rx="10" fill="url(#candyGrad)" />
          <path
            d="M80 130 C80 105, 160 105, 160 130 L165 210 C165 220, 150 225, 120 225 C90 225, 75 220, 75 210 Z"
            fill="url(#candyGrad)"
            stroke="#B45309"
            strokeWidth="3"
          />

          {/* Face */}
          <circle cx="106" cy="148" r="4" fill="#451A03" />
          <circle cx="134" cy="148" r="4" fill="#451A03" />
          <path d="M112 163 Q120 171 128 163" stroke="#451A03" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Purple Velvet Hat */}
          <ellipse cx="120" cy="112" rx="46" ry="12" fill="url(#purpleVelvet)" stroke="#A855F7" strokeWidth="2" />
          <path d="M88 110 L92 56 C92 50, 148 50, 148 56 L152 110 Z" fill="url(#purpleVelvet)" />
          <ellipse cx="120" cy="56" rx="28" ry="8" fill="#A855F7" />

          {/* Hat Decorations: Green Gummy Bear, Red Gummy Bear, Golden Ticket */}
          <rect x="96" y="80" width="8" height="12" rx="3" fill="#22C55E" />
          <rect x="108" y="78" width="8" height="12" rx="3" fill="#EF4444" />
          <g transform="translate(136, 68) rotate(15)">
            <rect x="0" y="0" width="14" height="24" rx="2" fill="#FBBF24" stroke="#78350F" strokeWidth="1" />
            <text x="7" y="14" fill="#78350F" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">TICKET</text>
          </g>

          {/* Golden Badge Band */}
          <rect x="94" y="98" width="52" height="9" rx="2" fill="#F59E0B" />
          <text x="120" y="104" fill="#451A03" fontSize="5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">TOFFEEMAN</text>
        </svg>
      );

    case 'cutie_scarf': // Caramel cutie with whipped hair, white knit scarf & slab
      return (
        <svg viewBox="0 0 240 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="swirlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="40%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
          </defs>

          {/* Table Background & Caramel Slab */}
          <rect x="20" y="240" width="200" height="25" rx="3" fill="#78350F" opacity="0.4" />
          <rect x="140" y="232" width="70" height="14" rx="3" fill="#D97706" stroke="#92400E" strokeWidth="2" />
          <path d="M145 236 Q175 234 205 236" stroke="#FBBF24" strokeWidth="1.5" />

          {/* Legs & Cute Torso */}
          <rect x="100" y="200" width="16" height="32" rx="8" fill="url(#swirlGrad)" />
          <rect x="124" y="200" width="16" height="32" rx="8" fill="url(#swirlGrad)" />
          <path d="M92 135 C92 120, 148 120, 148 135 L145 205 C145 212, 95 212, 95 205 Z" fill="url(#swirlGrad)" />

          {/* Knitted White Scarf */}
          <path d="M88 128 C88 120, 152 120, 152 128 C152 138, 88 138, 88 128 Z" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2" />
          <path d="M125 132 L132 165 L144 163 L137 132 Z" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2" />
          <path d="M130 162 L142 160" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="2 2" />

          {/* Large Head with Whipped Swirl Hair */}
          <circle cx="120" cy="98" r="30" fill="url(#swirlGrad)" stroke="#B45309" strokeWidth="2" />
          {/* Swirls on top */}
          <path
            d="M96 85 C96 60, 120 40, 120 40 C120 40, 144 60, 144 85 C140 70, 130 65, 120 65 C110 65, 100 70, 96 85 Z"
            fill="url(#swirlGrad)"
            stroke="#B45309"
            strokeWidth="2"
          />
          <path d="M110 65 Q120 48 120 40" stroke="#FEF3C7" strokeWidth="3" strokeLinecap="round" />

          {/* Big Adorable Eyes & Smile */}
          <ellipse cx="110" cy="98" rx="6" ry="8" fill="#451A03" />
          <ellipse cx="130" cy="98" rx="6" ry="8" fill="#451A03" />
          <circle cx="108" cy="95" r="2.5" fill="#FFFFFF" />
          <circle cx="128" cy="95" r="2.5" fill="#FFFFFF" />
          <circle cx="112" cy="102" r="1.5" fill="#FFFFFF" />
          <circle cx="132" cy="102" r="1.5" fill="#FFFFFF" />
          <path d="M114 110 Q120 116 126 110" stroke="#451A03" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Cute Waving Arm */}
          <path d="M146 140 C160 135, 172 120, 168 110" stroke="url(#swirlGrad)" strokeWidth="10" strokeLinecap="round" />
          <circle cx="168" cy="108" r="6" fill="url(#swirlGrad)" />
        </svg>
      );

    case 'chef_artisan': // Caramel chef with beard, glasses, apron, ladle pouring caramel
      return (
        <svg viewBox="0 0 240 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="chefSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="moltenCaramel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>

          {/* Peanut Brittle Slab in Foreground */}
          <rect x="130" y="235" width="85" height="15" rx="3" fill="#D97706" stroke="#92400E" strokeWidth="2" />
          <ellipse cx="145" cy="242" rx="4" ry="2.5" fill="#FDE68A" />
          <ellipse cx="165" cy="240" rx="3.5" ry="2" fill="#FDE68A" />
          <ellipse cx="185" cy="243" rx="4" ry="2.5" fill="#FDE68A" />
          <ellipse cx="202" cy="241" rx="3" ry="2" fill="#FDE68A" />

          {/* Legs & Torso */}
          <rect x="94" y="210" width="20" height="30" rx="8" fill="url(#chefSkin)" />
          <rect x="126" y="210" width="20" height="30" rx="8" fill="url(#chefSkin)" />

          {/* Body with White Chef Apron */}
          <path d="M84 130 C84 110, 156 110, 156 130 L156 215 C156 220, 84 220, 84 215 Z" fill="url(#chefSkin)" />
          {/* White Apron */}
          <path d="M96 140 L144 140 L150 215 L90 215 Z" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" />
          <rect x="110" y="180" width="20" height="18" rx="2" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
          {/* Monogram 'T' on Apron */}
          <text x="120" y="165" fill="#B45309" fontSize="14" fontWeight="bold" fontFamily="serif" textAnchor="middle">T</text>

          {/* Head with Stylized Coif Hair & Full Beard */}
          <circle cx="120" cy="85" r="28" fill="url(#chefSkin)" />
          {/* Pompadour Caramel Hair */}
          <path d="M92 78 C90 45, 140 40, 148 65 C140 60, 110 60, 92 78 Z" fill="#92400E" stroke="#78350F" strokeWidth="2" />
          {/* Full Caramel Mustache & Beard */}
          <path d="M102 98 Q120 108 138 98 Q138 122 120 125 Q102 122 102 98 Z" fill="#92400E" stroke="#78350F" strokeWidth="2" />
          <path d="M100 95 Q120 102 140 95 Q130 90 120 92 Q110 90 100 95 Z" fill="#B45309" />

          {/* Tortoiseshell Spectacles */}
          <circle cx="108" cy="85" r="8" stroke="#78350F" strokeWidth="3" fill="none" />
          <circle cx="132" cy="85" r="8" stroke="#78350F" strokeWidth="3" fill="none" />
          <line x1="116" y1="85" x2="124" y2="85" stroke="#78350F" strokeWidth="3" />
          {/* Eyes behind glasses */}
          <circle cx="108" cy="85" r="3" fill="#451A03" />
          <circle cx="132" cy="85" r="3" fill="#451A03" />

          {/* Ladle & Pouring Caramel Stream */}
          <path d="M84 150 L65 165" stroke="url(#chefSkin)" strokeWidth="10" strokeLinecap="round" />
          {/* Brass Ladle */}
          <path d="M60 170 L95 190" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="98" cy="192" rx="10" ry="6" fill="#D97706" stroke="#F59E0B" strokeWidth="2" />
          {/* Stream of molten caramel */}
          <path d="M98 196 Q100 230 105 245" stroke="url(#moltenCaramel)" strokeWidth="5" strokeLinecap="round" />
          <ellipse cx="105" cy="245" rx="14" ry="4" fill="#92400E" />
        </svg>
      );

    case 'almond_mascot': // Almond shaped caramel mascot
      return (
        <svg viewBox="0 0 240 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="almondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="30%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>

          {/* Glow */}
          <ellipse cx="120" cy="245" rx="50" ry="10" fill="#E5E7EB" />

          {/* Legs & Shoes */}
          <rect x="102" y="210" width="12" height="24" rx="6" fill="#B45309" />
          <rect x="126" y="210" width="12" height="24" rx="6" fill="#B45309" />
          <ellipse cx="104" cy="234" rx="10" ry="6" fill="#78350F" />
          <ellipse cx="132" cy="234" rx="10" ry="6" fill="#78350F" />

          {/* Almond Shaped Body */}
          <path
            d="M120 40 C165 90, 175 180, 120 215 C65 180, 75 90, 120 40 Z"
            fill="url(#almondGrad)"
            stroke="#92400E"
            strokeWidth="3"
          />

          {/* Gloss Sheen Reflection */}
          <path d="M100 80 C90 110, 92 160, 105 185" stroke="#FEF3C7" strokeWidth="6" strokeLinecap="round" opacity="0.6" />

          {/* Big Expressive Cartoon Eyes */}
          <ellipse cx="106" cy="120" rx="9" ry="12" fill="#FFFFFF" stroke="#78350F" strokeWidth="2" />
          <ellipse cx="134" cy="120" rx="9" ry="12" fill="#FFFFFF" stroke="#78350F" strokeWidth="2" />
          <circle cx="108" cy="120" r="5" fill="#451A03" />
          <circle cx="132" cy="120" r="5" fill="#451A03" />
          <circle cx="106" cy="117" r="2" fill="#FFFFFF" />
          <circle cx="130" cy="117" r="2" fill="#FFFFFF" />

          {/* Happy Open Smile */}
          <path d="M108 145 Q120 162 132 145 Z" fill="#991B1B" stroke="#78350F" strokeWidth="2" />
          <path d="M112 152 Q120 156 128 152" stroke="#FDA4AF" strokeWidth="3" strokeLinecap="round" />

          {/* Waving Hand */}
          <path d="M78 145 C60 140, 50 120, 55 105" stroke="#B45309" strokeWidth="8" strokeLinecap="round" />
          <circle cx="56" cy="102" r="7" fill="#B45309" />
          <line x1="56" y1="96" x2="56" y2="92" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
          <line x1="52" y1="98" x2="48" y2="95" stroke="#B45309" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'waffle_companion': // Waffle character in Hawaiian shirt & cargo shorts
      return (
        <svg viewBox="0 0 240 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waffleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Legs & Trail Boots */}
          <rect x="98" y="210" width="16" height="25" rx="6" fill="#78350F" />
          <rect x="126" y="210" width="16" height="25" rx="6" fill="#78350F" />
          <rect x="94" y="230" width="24" height="15" rx="4" fill="#581C87" />
          <rect x="122" y="230" width="24" height="15" rx="4" fill="#581C87" />

          {/* Khaki Safari Shorts */}
          <path d="M88 180 L152 180 L156 215 L124 215 L120 200 L116 215 L84 215 Z" fill="#D4D4D8" stroke="#A1A1AA" strokeWidth="2" />
          <line x1="120" y1="180" x2="120" y2="200" stroke="#71717A" strokeWidth="2" />

          {/* Blue Hawaiian Shirt with Palm Trees */}
          <path d="M76 115 L164 115 L156 182 L84 182 Z" fill="url(#shirtGrad)" stroke="#0369A1" strokeWidth="2" />
          {/* Palm silhouettes on shirt */}
          <path d="M96 140 Q105 130 112 140 M105 130 L105 155" stroke="#15803D" strokeWidth="2" />
          <path d="M136 150 Q145 140 152 150 M145 140 L145 165" stroke="#15803D" strokeWidth="2" />

          {/* Waffle Head with Grid Texture */}
          <rect x="75" y="35" width="90" height="85" rx="14" fill="url(#waffleGrad)" stroke="#B45309" strokeWidth="3" />
          {/* Embossed grid indentations */}
          <line x1="75" y1="52" x2="165" y2="52" stroke="#B45309" strokeWidth="2" />
          <line x1="75" y1="68" x2="165" y2="68" stroke="#B45309" strokeWidth="2" />
          <line x1="75" y1="84" x2="165" y2="84" stroke="#B45309" strokeWidth="2" />
          <line x1="75" y1="100" x2="165" y2="100" stroke="#B45309" strokeWidth="2" />

          {/* Expressive Face */}
          <circle cx="102" cy="74" r="8" fill="#451A03" />
          <circle cx="138" cy="74" r="8" fill="#451A03" />
          <circle cx="100" cy="72" r="3" fill="#FFFFFF" />
          <circle cx="136" cy="72" r="3" fill="#FFFFFF" />
          <path d="M108 92 Q120 106 132 92 Z" fill="#991B1B" stroke="#451A03" strokeWidth="2" />

          {/* Arms with OK Gesture */}
          <path d="M76 130 C55 135, 45 115, 52 100" stroke="#78350F" strokeWidth="9" strokeLinecap="round" />
          <circle cx="52" cy="98" r="8" fill="#78350F" />
          <path d="M164 130 C185 135, 195 115, 188 100" stroke="#78350F" strokeWidth="9" strokeLinecap="round" />
          <circle cx="188" cy="98" r="8" fill="#78350F" />
        </svg>
      );

    default:
      return null;
  }
};

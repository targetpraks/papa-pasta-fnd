import React from "react";

interface CrestProps {
  bg?: string;
  outline?: string;
  inner?: string;
  size?: number;
  idSeed?: string;
  label?: string;
  sub?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Crest({
  bg = "var(--crest-bg)",
  outline = "var(--crest-outline)",
  inner = "var(--crest-inner)",
  size,
  idSeed,
  label = "PAPA PASTA",
  sub = "EST. 2025",
  className,
  style,
}: CrestProps) {
  const svgStyle = size ? { ...style, width: size, height: "auto" } : style;
  const uid = React.useMemo(() => idSeed || ("c" + Math.random().toString(36).slice(2, 8)), [idSeed]);
  return (
    <svg viewBox="0 0 320 400" className={className} style={svgStyle} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`${uid}-clip`}>
          <path d="M20 40 Q20 30 30 26 L70 14 Q160 0 250 14 L290 26 Q300 30 300 40 L300 240 Q300 290 240 330 L170 380 Q160 384 150 380 L80 330 Q20 290 20 240 Z"/>
        </clipPath>
      </defs>

      <g clipPath={`url(#${uid}-clip)`}>
        <path d="M0 0 H320 V400 H0 Z" fill={bg}/>
        <path d="M0 0 H320 V50 H0 Z" fill={outline} opacity="0.08"/>
        <path d="M0 340 H320 V400 H0 Z" fill={outline} opacity="0.08"/>
      </g>

      <path d="M20 40 Q20 30 30 26 L70 14 Q160 0 250 14 L290 26 Q300 30 300 40 L300 240 Q300 290 240 330 L170 380 Q160 384 150 380 L80 330 Q20 290 20 240 Z" fill="none" stroke={outline} strokeWidth="4"/>
      <path d="M34 52 Q34 44 42 41 L76 31 Q160 19 244 31 L278 41 Q286 44 286 52 L286 236 Q286 282 234 316 L168 362 Q160 366 152 362 L86 316 Q34 282 34 236 Z" fill="none" stroke={outline} strokeWidth="1.25" opacity="0.6"/>

      <g>
        <path d="M38 76 L38 128 Q38 134 44 134 L276 134 Q282 134 282 128 L282 76 Q282 68 274 68 L46 68 Q38 68 38 76 Z" fill={inner} stroke={outline} strokeWidth="2.5"/>
        <path d="M48 92 Q52 86 58 88 M52 100 Q56 96 60 100 M48 112 Q52 116 58 114" stroke={outline} strokeWidth="1.2" fill="none"/>
        <path d="M272 92 Q268 86 262 88 M268 100 Q264 96 260 100 M272 112 Q268 116 262 114" stroke={outline} strokeWidth="1.2" fill="none"/>
        <text x="160" y="112" textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontWeight="800" fontSize="30" fill={outline} letterSpacing="2">{label}</text>
      </g>

      <text x="160" y="158" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={outline} letterSpacing="3">{sub}</text>

      <g transform="translate(160 240)">
        <g transform="rotate(-24)">
          <path d="M-5 -74 L-5 -50 M0 -74 L0 -50 M5 -74 L5 -50" stroke={outline} strokeWidth="3" strokeLinecap="round"/>
          <path d="M-9 -50 Q-9 -44 -6 -42 L6 -42 Q9 -44 9 -50 Z" fill={outline}/>
          <rect x="-3.5" y="-42" width="7" height="68" fill={outline} rx="1"/>
          <ellipse cx="0" cy="28" rx="6" ry="4" fill={outline}/>
        </g>
        <g transform="rotate(24)">
          <path d="M-5 -74 L-5 -50 M0 -74 L0 -50 M5 -74 L5 -50" stroke={outline} strokeWidth="3" strokeLinecap="round"/>
          <path d="M-9 -50 Q-9 -44 -6 -42 L6 -42 Q9 -44 9 -50 Z" fill={outline}/>
          <rect x="-3.5" y="-42" width="7" height="68" fill={outline} rx="1"/>
          <ellipse cx="0" cy="28" rx="6" ry="4" fill={outline}/>
        </g>
        <g>
          <circle cx="0" cy="-8" r="18" fill={inner} stroke={outline} strokeWidth="2"/>
          <path d="M-14 -14 Q-6 -22 2 -14 Q10 -6 -2 2 Q-12 8 -12 -2" stroke={outline} strokeWidth="1.6" fill="none"/>
          <path d="M-10 -2 Q-2 6 8 -2 Q14 -8 4 -14" stroke={outline} strokeWidth="1.6" fill="none"/>
          <path d="M-6 -18 Q2 -12 10 -6" stroke={outline} strokeWidth="1.2" fill="none"/>
        </g>
      </g>

      <g>
        <path d="M60 298 Q60 294 64 294 L256 294 Q260 294 260 298 L260 322 Q260 326 256 326 L64 326 Q60 326 60 322 Z" fill={outline}/>
        <text x="160" y="315" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={bg} letterSpacing="4" fontWeight="600">FRESH · SEASONAL · QUALITY</text>
      </g>

      <g fill={outline}>
        <path d="M160 282 L164 288 L160 294 L156 288 Z"/>
        <path d="M50 200 L54 206 L50 212 L46 206 Z" opacity="0.5"/>
        <path d="M270 200 L274 206 L270 212 L266 206 Z" opacity="0.5"/>
      </g>
    </svg>
  );
}

export function CrestMini({ bg = "var(--crest-bg)", outline = "var(--crest-outline)", inner = "var(--crest-inner)", ...rest }: { bg?: string; outline?: string; inner?: string; [k: string]: any }) {
  return (
    <svg viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M2 4 Q2 2 4 2 L28 2 Q30 2 30 4 L30 24 Q30 30 24 34 L17 38 Q16 39 15 38 L8 34 Q2 30 2 24 Z" fill={bg} stroke={outline} strokeWidth="1.2"/>
      <rect x="6" y="8" width="20" height="6" fill={inner} stroke={outline} strokeWidth="0.7"/>
      <g transform="translate(16 24)">
        <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke={outline} strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="0" cy="0" r="2.5" fill={inner} stroke={outline} strokeWidth="0.7"/>
      </g>
    </svg>
  );
}

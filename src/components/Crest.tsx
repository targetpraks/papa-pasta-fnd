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
  bg = "var(--crest-bg, #0A1628)",
  outline = "var(--crest-outline, #D4A017)",
  inner = "var(--crest-inner, #F5E6C8)",
  size,
  idSeed,
  label = "PAPA PASTA",
  sub = "EST. 2025",
  className,
  style,
}: CrestProps) {
  const svgStyle = size ? { ...style, width: size, height: "auto" } : style;
  const uid = React.useMemo(() => idSeed || ("c" + Math.floor(Math.random() * 1e8).toString(36)), [idSeed]);

  return (
    <svg
      viewBox="0 0 400 480"
      className={className}
      style={svgStyle}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Papa Pasta crest logo"
    >
      <defs>
        <clipPath id={`${uid}-shield-clip`}>
          <path d="M200 10 C240 10 270 25 290 40 C310 55 330 70 350 85 C370 100 380 120 385 140 C390 160 390 180 385 200 C380 230 370 260 355 290 C340 320 320 350 295 375 C270 400 240 425 210 445 C205 448 200 450 200 450 C200 450 195 448 190 445 C160 425 130 400 105 375 C80 350 60 320 45 290 C30 260 20 230 15 200 C10 180 10 160 15 140 C20 120 30 100 50 85 C70 70 90 55 110 40 C130 25 160 10 200 10 Z" />
        </clipPath>
        <filter id={`${uid}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Shield background */}
      <g clipPath={`url(#${uid}-shield-clip)`}>
        <rect x="0" y="0" width="400" height="480" fill={bg} />
        {/* Subtle inner texture */}
        <path d="M200 10 C240 10 270 25 290 40 C310 55 330 70 350 85 C370 100 380 120 385 140 C390 160 390 180 385 200 C380 230 370 260 355 290 C340 320 320 350 295 375 C270 400 240 425 210 445 C205 448 200 450 200 450 C200 450 195 448 190 445 C160 425 130 400 105 375 C80 350 60 320 45 290 C30 260 20 230 15 200 C10 180 10 160 15 140 C20 120 30 100 50 85 C70 70 90 55 110 40 C130 25 160 10 200 10 Z" fill="none" stroke={outline} strokeWidth="1.5" opacity="0.08" />
      </g>

      {/* Outer shield border with ornate details */}
      <path
        d="M200 10 C240 10 270 25 290 40 C310 55 330 70 350 85 C370 100 380 120 385 140 C390 160 390 180 385 200 C380 230 370 260 355 290 C340 320 320 350 295 375 C270 400 240 425 210 445 C205 448 200 450 200 450 C200 450 195 448 190 445 C160 425 130 400 105 375 C80 350 60 320 45 290 C30 260 20 230 15 200 C10 180 10 160 15 140 C20 120 30 100 50 85 C70 70 90 55 110 40 C130 25 160 10 200 10 Z"
        fill="none"
        stroke={outline}
        strokeWidth="4"
      />
      {/* Inner border line */}
      <path
        d="M200 18 C235 18 263 32 282 46 C300 60 319 74 337 88 C354 102 364 120 369 138 C374 156 374 174 369 192 C364 220 355 248 341 276 C327 304 308 332 285 356 C262 380 234 403 206 422 C202 425 200 426 200 426 C200 426 198 425 194 422 C166 403 138 380 115 356 C92 332 73 304 59 276 C45 248 36 220 31 192 C26 174 26 156 31 138 C36 120 46 102 63 88 C81 74 100 60 118 46 C137 32 165 18 200 18 Z"
        fill="none"
        stroke={outline}
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* Decorative corner flourishes */}
      <g stroke={outline} strokeWidth="2" fill="none" opacity="0.6">
        {/* Top left flourish */}
        <path d="M45 70 Q60 55 80 60 Q95 65 90 80 Q85 90 70 85" />
        <circle cx="55" cy="75" r="3" fill={outline} />
        {/* Top right flourish */}
        <path d="M355 70 Q340 55 320 60 Q305 65 310 80 Q315 90 330 85" />
        <circle cx="345" cy="75" r="3" fill={outline} />
        {/* Bottom left flourish */}
        <path d="M75 340 Q65 355 75 370 Q85 380 95 370" />
        <circle cx="80" cy="360" r="3" fill={outline} />
        {/* Bottom right flourish */}
        <path d="M325 340 Q335 355 325 370 Q315 380 305 370" />
        <circle cx="320" cy="360" r="3" fill={outline} />
      </g>

      {/* Banner / Ribbon at top */}
      <g>
        <path
          d="M40 75 Q40 65 55 62 L100 55 Q200 45 300 55 L345 62 Q360 65 360 75 L360 115 Q360 125 345 128 L300 135 Q200 145 100 135 L55 128 Q40 125 40 115 Z"
          fill={inner}
          stroke={outline}
          strokeWidth="2.5"
        />
        {/* Banner inner detail lines */}
        <path d="M50 70 Q200 58 350 70" fill="none" stroke={outline} strokeWidth="1" opacity="0.3" />
        <path d="M50 120 Q200 132 350 120" fill="none" stroke={outline} strokeWidth="1" opacity="0.3" />
      </g>

      {/* PAPA PASTA text on banner */}
      <text
        x="200"
        y="102"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="800"
        fontSize="34"
        fill={outline}
        letterSpacing="4"
      >
        {label}
      </text>

      {/* EST. 2025 subtitle */}
      <text
        x="200"
        y="155"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="11"
        fontWeight="500"
        fill={outline}
        letterSpacing="6"
        opacity="0.8"
      >
        {sub}
      </text>

      {/* Crossed Forks with Pasta - Centerpiece */}
      <g transform="translate(200 270)">
        {/* Left fork handle */}
        <path
          d="M-18 80 L-45 140 Q-48 148 -42 152 Q-36 156 -30 150 L-8 95 Z"
          fill={outline}
        />
        {/* Right fork handle */}
        <path
          d="M18 80 L45 140 Q48 148 42 152 Q36 156 30 150 L8 95 Z"
          fill={outline}
        />

        {/* Left fork head */}
        <g transform="translate(-32 -55) rotate(-28)">
          <rect x="-4" y="20" width="8" height="55" rx="2" fill={outline} />
          <path d="M-14 -35 L-14 15 Q-14 22 -8 22 L-4 22 L-4 -35" fill={outline} />
          <path d="M-4 -35 L-4 22 L0 22 L0 -35" fill={outline} />
          <path d="M4 -35 L4 22 L8 22 Q14 22 14 15 L14 -35" fill={outline} />
          <path d="M-14 -35 Q-14 -42 -8 -42 L8 -42 Q14 -42 14 -35" fill={outline} />
        </g>

        {/* Right fork head */}
        <g transform="translate(32 -55) rotate(28)">
          <rect x="-4" y="20" width="8" height="55" rx="2" fill={outline} />
          <path d="M-14 -35 L-14 15 Q-14 22 -8 22 L-4 22 L-4 -35" fill={outline} />
          <path d="M-4 -35 L-4 22 L0 22 L0 -35" fill={outline} />
          <path d="M4 -35 L4 22 L8 22 Q14 22 14 15 L14 -35" fill={outline} />
          <path d="M-14 -35 Q-14 -42 -8 -42 L8 -42 Q14 -42 14 -35" fill={outline} />
        </g>

        {/* Pasta knot in center */}
        <g>
          <circle cx="0" cy="-10" r="22" fill={inner} stroke={outline} strokeWidth="2.5" />
          {/* Pasta strands */}
          <path
            d="M-16 -18 Q-8 -28 0 -20 Q8 -12 16 -22"
            stroke={outline}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-14 -8 Q-6 -18 0 -10 Q6 -2 14 -12"
            stroke={outline}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-12 2 Q-4 -8 0 0 Q4 8 12 -2"
            stroke={outline}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Swirl detail */}
          <path
            d="M-8 -14 Q0 -22 8 -14 Q12 -8 4 -4"
            stroke={outline}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* Bottom ribbon with FRESH·SEASONAL·QUALITY */}
      <g transform="translate(0 10)">
        <path
          d="M65 395 Q65 385 78 383 L200 368 Q322 383 335 385 Q348 385 348 395 L348 425 Q348 435 335 437 L200 452 Q65 437 78 437 Q65 435 65 425 Z"
          fill={outline}
        />
        <text
          x="200"
          y="415"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="9"
          fontWeight="600"
          fill={bg}
          letterSpacing="5"
        >
          FRESH · SEASONAL · QUALITY
        </text>
      </g>

      {/* Small decorative diamonds */}
      <g fill={outline} opacity="0.5">
        <path d="M200 175 L204 180 L200 185 L196 180 Z" />
        <path d="M85 240 L89 245 L85 250 L81 245 Z" />
        <path d="M315 240 L319 245 L315 250 L311 245 Z" />
      </g>

      {/* Top crown/peak decoration */}
      <g transform="translate(200 10)">
        <path
          d="M0 0 L-8 12 L-4 8 L0 14 L4 8 L8 12 Z"
          fill={outline}
        />
        <circle cx="0" cy="6" r="2.5" fill={inner} />
      </g>
    </svg>
  );
}

export function CrestMini({
  bg = "var(--crest-bg, #0A1628)",
  outline = "var(--crest-outline, #D4A017)",
  inner = "var(--crest-inner, #F5E6C8)",
  ...rest
}: {
  bg?: string;
  outline?: string;
  inner?: string;
  [k: string]: any;
}) {
  return (
    <svg viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg" {...rest}>
      {/* Shield */}
      <path
        d="M20 2 C24 2 27 3.5 29 5 C31 6.5 33 8 35 9.5 C37 11 38 13 38.5 15 C39 17 39 19 38.5 21 C38 23.5 37 26 35.5 29 C34 32 32 35 29.5 37.5 C27 40 24 42.5 21 44.5 C20.5 44.8 20 45 20 45 C20 45 19.5 44.8 19 44.5 C16 42.5 13 40 10.5 37.5 C8 35 6 32 4.5 29 C3 26 2 23.5 1.5 21 C1 19 1 17 1.5 15 C2 13 3 11 5 9.5 C7 8 9 6.5 11 5 C13 3.5 16 2 20 2 Z"
        fill={bg}
        stroke={outline}
        strokeWidth="1.5"
      />
      {/* Banner */}
      <path
        d="M4 9 Q4 7.5 5.5 7 L10 6.5 Q20 5.5 30 6.5 L34.5 7 Q36 7.5 36 9 L36 13 Q36 14.5 34.5 15 L30 15.5 Q20 16.5 10 15.5 L5.5 15 Q4 14.5 4 13 Z"
        fill={inner}
      />
      {/* Text placeholder line */}
      <rect x="8" y="9" width="24" height="3" rx="1" fill={outline} />
      {/* Forks */}
      <g transform="translate(20 28)">
        <path d="M-6 8 L-12 16" stroke={outline} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 8 L12 16" stroke={outline} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="0" cy="0" r="3" fill={inner} stroke={outline} strokeWidth="1" />
        <path d="M-2 -2 L2 2 M2 -2 L-2 2" stroke={outline} strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
}

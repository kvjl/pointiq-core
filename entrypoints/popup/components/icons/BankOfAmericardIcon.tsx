import React from "react";

const BankOfAmericardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="32"
      viewBox="0 0 343 216"
      role="img"
      aria-label="Bank-style red card"
    >
      <defs>
        <linearGradient id="boaRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#9E0B0F" />
          <stop offset="0.55" stop-color="#C51218" />
          <stop offset="1" stop-color="#E01E26" />
        </linearGradient>
        <linearGradient id="boaBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#003A8C" />
          <stop offset="1" stop-color="#0070D9" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.18" />
        </filter>
        <clipPath id="cardClip">
          <rect x="8" y="8" width="327" height="200" rx="20" />
        </clipPath>
      </defs>
      <g filter="url(#shadow)">
        <rect
          x="8"
          y="8"
          width="327"
          height="200"
          rx="20"
          fill="url(#boaRed)"
        />
        <g clip-path="url(#cardClip)">
          <polygon
            points="140,0 343,0 343,90 235,120"
            fill="url(#boaBlue)"
            opacity="0.35"
          />
          <polygon
            points="0,160 220,110 343,150 343,216 0,216"
            fill="#ffffff"
            opacity="0.06"
          />
          <polygon
            points="8,8 110,8 60,58 8,52"
            fill="#ffffff"
            opacity="0.08"
          />
        </g>
        <g transform="translate(28,92)" opacity="0.75">
          <rect width="50" height="36" rx="6" fill="rgba(255,255,255,0.18)" />
          <g stroke="rgba(255,255,255,0.35)" stroke-width="1.2">
            <path d="M6 10 H44" />
            <path d="M6 18 H44" />
            <path d="M6 26 H44" />
            <path d="M16 5 V31" />
            <path d="M25 5 V31" />
            <path d="M34 5 V31" />
          </g>
          <rect
            x="21"
            y="13"
            width="8"
            height="10"
            rx="2"
            fill="rgba(255,255,255,0.35)"
          />
        </g>
        <g
          transform="translate(290,38)"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          opacity="0.5"
          stroke-linecap="round"
        >
          <path d="M0 0c14 8 14 20 0 28" />
          <path d="M8 -4c14 10 14 26 0 36" />
        </g>
        <text
          x="28"
          y="168"
          font-family="ui-sans-serif, -apple-system, system-ui, Segoe UI, Roboto"
          font-size="15"
          fill="#ffffff"
          opacity="0.9"
          letter-spacing="0.25"
        >
          Cardholder Name
        </text>
      </g>
    </svg>
  );
};

export default BankOfAmericardIcon;

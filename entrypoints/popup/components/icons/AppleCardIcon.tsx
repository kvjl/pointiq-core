import React from "react";

const AppleCardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="32"
      viewBox="0 0 343 216"
      role="img"
      aria-label="Apple Card style"
    >
      <defs>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f8fafc" />
          <stop offset="1" stop-color="#e9edf2" />
        </linearGradient>

        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.15" />
        </filter>

        <linearGradient id="chipGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#e7d196" />
          <stop offset="1" stop-color="#c7a858" />
        </linearGradient>
      </defs>

      <g filter="url(#shadow)">
        <rect
          x="8"
          y="8"
          width="327"
          height="200"
          rx="20"
          fill="url(#cardGrad)"
        />

        <rect
          x="24"
          y="24"
          width="40"
          height="40"
          rx="10"
          fill="#111"
          opacity="0.8"
        />

        <g
          transform="translate(282,36)"
          fill="none"
          stroke="#000"
          stroke-width="2"
          opacity="0.35"
          stroke-linecap="round"
        >
          <path d="M0 0c14 8 14 20 0 28" />
          <path d="M8 -4c14 10 14 26 0 36" />
        </g>

        <g transform="translate(24,90)">
          <rect width="48" height="34" rx="6" fill="url(#chipGrad)" />
          <g stroke="#9c7f3e" stroke-width="1.2" opacity="0.7">
            <path d="M6 9 H42" />
            <path d="M6 17 H42" />
            <path d="M6 25 H42" />
            <path d="M16 4 V30" />
            <path d="M24 4 V30" />
            <path d="M32 4 V30" />
          </g>
          <rect
            x="20"
            y="12"
            width="8"
            height="10"
            rx="2"
            fill="#d9c27c"
            opacity="0.85"
          />
        </g>

        <text
          x="24"
          y="166"
          font-family="ui-sans-serif, -apple-system, system-ui, Segoe UI, Roboto"
          font-size="14"
          fill="#111"
          opacity="0.7"
        >
          Cardholder Name
        </text>
      </g>
    </svg>
  );
};

export default AppleCardIcon;

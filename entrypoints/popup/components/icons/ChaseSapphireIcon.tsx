const ChaseSapphireIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="32"
      viewBox="0 0 343 216"
      role="img"
      aria-label="Sapphire-style card"
    >
      <defs>
        <linearGradient id="sapphireGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0B1E4B" />
          <stop offset="0.55" stop-color="#0E3E8C" />
          <stop offset="1" stop-color="#1081D6" />
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
          fill="url(#sapphireGrad)"
        />
        <g clip-path="url(#cardClip)" opacity="0.18" fill="#fff">
          <polygon points="220,8 335,8 335,105 292,86" />
          <polygon opacity="0.12" points="0,120 190,40 343,120 343,170 0,170" />
          <polygon opacity="0.14" points="250,150 343,120 343,208 280,208" />
          <polygon opacity="0.10" points="8,8 120,8 70,60 8,52" />
        </g>
        <g transform="translate(28,92)" opacity="0.7">
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
          opacity="0.45"
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
          opacity="0.85"
          letter-spacing="0.25"
        >
          Cardholder Name
        </text>
      </g>
    </svg>
  );
};

export default ChaseSapphireIcon;

import styles from '../styles/Home.module.css';

function HomeIllustration() {
  return (
    <div className={styles.illustrationWrapper}>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 820 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.illustration}
      >
        <defs>
          <linearGradient id="pulseBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="pulseAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
          <linearGradient id="cardGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </linearGradient>
        </defs>

        <rect x="50" y="110" width="300" height="210" rx="34" fill="url(#cardGradient)" />
        <rect x="430" y="140" width="320" height="240" rx="34" fill="url(#cardGradient)" />
        <rect x="170" y="360" width="340" height="220" rx="40" fill="url(#cardGradient)" />

        <path d="M620 68c-48 12-102 56-128 106-26 50-24 112 14 149 38 37 96 44 144 24 48-20 79-64 79-116 0-52-31-99-78-123Z" fill="url(#pulseAccent)" opacity="0.22" />
        <circle cx="504" cy="442" r="120" fill="url(#pulseBg)" opacity="0.12" />

        <g opacity="0.95">
          <rect x="68" y="128" width="230" height="164" rx="28" fill="#FFFFFF" />
          <path d="M88 188h34" stroke="#2563EB" strokeWidth="10" strokeLinecap="round" />
          <path d="M88 222h84" stroke="#2563EB" strokeWidth="10" strokeLinecap="round" opacity="0.7" />
          <path d="M88 256h64" stroke="#2563EB" strokeWidth="10" strokeLinecap="round" opacity="0.4" />
        </g>

        <g opacity="0.95">
          <rect x="450" y="170" width="260" height="180" rx="32" fill="#FFFFFF" />
          <path d="M482 226h92" stroke="#10B981" strokeWidth="10" strokeLinecap="round" />
          <path d="M482 266h132" stroke="#2563EB" strokeWidth="10" strokeLinecap="round" opacity="0.9" />
          <path d="M482 306h72" stroke="#2563EB" strokeWidth="10" strokeLinecap="round" opacity="0.55" />
        </g>

        <g>
          <path d="M206 390h260" stroke="#2563EB" strokeWidth="20" strokeLinecap="round" opacity="0.2" />
          <path d="M206 440h260" stroke="#2563EB" strokeWidth="20" strokeLinecap="round" opacity="0.2" />
        </g>

        <path
          d="M120 500c58-42 90-68 150-68 36 0 70 14 106 24 24 6 48 12 74 10 24-2 60-12 86-32"
          stroke="#60A5FA"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />

        <circle cx="224" cy="510" r="22" fill="#22C55E" />
        <circle cx="304" cy="530" r="14" fill="#FFFFFF" opacity="0.9" />
        <circle cx="584" cy="430" r="30" fill="#2563EB" opacity="0.85" />

        <path
          d="M248 204l80-48 38 22 46-36 52 36"
          stroke="#2563EB"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M330 266l58-38 34 22 42-30 56 44"
          stroke="#22C55E"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M132 488l48-34 34 10 56-46 68 22"
          stroke="#2563EB"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

export default HomeIllustration;

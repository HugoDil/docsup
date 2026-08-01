export default function MoleculeArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 700"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Liens moléculaires */}
      <g stroke="url(#bond)" strokeWidth={1}>
        <line x1="230" y1="160" x2="560" y2="330" />
        <line x1="560" y1="330" x2="920" y2="210" />
        <line x1="560" y1="330" x2="640" y2="560" />
        <line x1="920" y1="210" x2="1050" y2="420" />
      </g>

      {/* Atome 1 */}
      <g transform="translate(230 160)" className="text-violet-400" opacity="0.5">
        <ellipse rx="95" ry="38" transform="rotate(-24)" stroke="currentColor" strokeWidth="1" />
        <ellipse rx="95" ry="38" transform="rotate(36)" stroke="currentColor" strokeWidth="1" />
        <ellipse rx="95" ry="38" transform="rotate(96)" stroke="currentColor" strokeWidth="1" />
        <circle r="5" fill="currentColor" />
        <circle cx="88" cy="-14" r="3" fill="currentColor" />
        <circle cx="-60" cy="66" r="3" fill="currentColor" />
      </g>

      {/* Atome 2 (chromosome / double hélice) */}
      <g transform="translate(920 210)" className="text-fuchsia-400" opacity="0.45">
        <path d="M-50 -90 Q10 -45 -50 0 Q-110 45 -50 90" stroke="currentColor" strokeWidth="1.5" />
        <path d="M50 -90 Q-10 -45 50 0 Q110 45 50 90" stroke="currentColor" strokeWidth="1.5" />
        <line x1="-50" y1="-90" x2="50" y2="-90" stroke="currentColor" strokeWidth="1" />
        <line x1="-38" y1="-45" x2="38" y2="-45" stroke="currentColor" strokeWidth="1" />
        <line x1="-50" y1="0" x2="50" y2="0" stroke="currentColor" strokeWidth="1" />
        <line x1="-38" y1="45" x2="38" y2="45" stroke="currentColor" strokeWidth="1" />
        <line x1="-50" y1="90" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
      </g>

      {/* Atome 3 */}
      <g transform="translate(600 490)" className="text-teal-400" opacity="0.4">
        <ellipse rx="70" ry="28" transform="rotate(15)" stroke="currentColor" strokeWidth="1" />
        <ellipse rx="70" ry="28" transform="rotate(75)" stroke="currentColor" strokeWidth="1" />
        <circle r="4" fill="currentColor" />
        <circle cx="65" cy="10" r="2.5" fill="currentColor" />
      </g>

      {/* Atome 4, discret */}
      <g transform="translate(1060 440)" className="text-violet-300" opacity="0.35">
        <ellipse rx="55" ry="22" transform="rotate(-30)" stroke="currentColor" strokeWidth="1" />
        <ellipse rx="55" ry="22" transform="rotate(50)" stroke="currentColor" strokeWidth="1" />
        <circle r="3.5" fill="currentColor" />
      </g>

      <defs>
        <linearGradient id="bond" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#e879f9" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

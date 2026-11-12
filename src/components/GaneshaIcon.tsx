import React from 'react';

interface GaneshaIconProps {
  className?: string;
  size?: number;
}

export const GaneshaIcon: React.FC<GaneshaIconProps> = ({ className = "w-10 h-10 text-[#d4af37]", size = 44 }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3c4" />
            <stop offset="40%" stopColor="#dfb74a" />
            <stop offset="80%" stopColor="#b8861e" />
            <stop offset="100%" stopColor="#8d6008" />
          </linearGradient>
        </defs>

        {/* Traditional Pillayar (Ganesha) Motifs */}
        {/* Crown (Kireedam) */}
        <path
          d="M50 12 L53 22 L47 22 Z"
          fill="url(#goldGradient)"
        />
        <path
          d="M45 22 C45 20, 55 20, 55 22 L57 28 C57 30, 43 30, 43 28 Z"
          fill="url(#goldGradient)"
        />

        {/* Forehead & Tilak (Namam / Chandanam / Kungumam) */}
        <circle cx="50" cy="33" r="2.5" fill="#fef08a" />
        <path
          d="M48 37 C49 35, 51 35, 52 37 L51 43 C50.5 44, 49.5 44, 49 43 Z"
          fill="url(#goldGradient)"
        />

        {/* Elephant Head / Ears Profile */}
        {/* Left Ear */}
        <path
          d="M43 32 C34 30, 26 36, 28 46 C29 53, 36 55, 42 50 C41 44, 42 38, 43 32 Z"
          fill="url(#goldGradient)"
          opacity="0.95"
        />
        {/* Right Ear */}
        <path
          d="M57 32 C66 30, 74 36, 72 46 C71 53, 64 55, 58 50 C59 44, 58 38, 57 32 Z"
          fill="url(#goldGradient)"
          opacity="0.95"
        />

        {/* Trunk (Thumbikkai curved gracefully right/left like traditional Valampuri / Idampuri) */}
        <path
          d="M46 42 C45 50, 45 58, 48 65 C51 72, 57 76, 64 74 C69 72, 70 66, 67 63 C64 60, 59 62, 59 65 C59 66, 61 67, 62 67 C63 67, 65 66, 64 64 C62 61, 56 61, 53 58 C50 54, 50 48, 50 42 Z"
          fill="url(#goldGradient)"
        />

        {/* Modak (Laddoo / Sweet in trunk) */}
        <circle cx="65" cy="65" r="3.5" fill="#fef08a" />

        {/* Auspicious Base / Lotus Petal Curves */}
        <path
          d="M38 78 C44 75, 56 75, 62 78 C58 83, 42 83, 38 78 Z"
          fill="url(#goldGradient)"
          opacity="0.85"
        />
        <circle cx="50" cy="80" r="1.5" fill="#fef08a" />
      </svg>
    </div>
  );
};


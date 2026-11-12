import React from 'react';

export const OrnamentalCorners: React.FC = () => {
  return (
    <>
      {/* Top Left Corner */}
      <div className="absolute top-2 left-2 w-8 h-8 pointer-events-none opacity-80">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-[#d4af37]">
          <path d="M2 38 V10 C2 5.578 5.578 2 10 2 H38" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 38 V14 C8 10.686 10.686 8 14 8 H38" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="14" cy="14" r="2.5" fill="currentColor" />
          <circle cx="4" cy="4" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Top Right Corner */}
      <div className="absolute top-2 right-2 w-8 h-8 pointer-events-none opacity-80">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-[#d4af37]">
          <path d="M38 38 V10 C38 5.578 34.422 2 30 2 H2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M32 38 V14 C32 10.686 29.314 8 26 8 H2" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="26" cy="14" r="2.5" fill="currentColor" />
          <circle cx="36" cy="4" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-2 left-2 w-8 h-8 pointer-events-none opacity-80">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-[#d4af37]">
          <path d="M2 2 V30 C2 34.422 5.578 38 10 38 H38" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 2 V26 C8 29.314 10.686 32 14 32 H38" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="14" cy="26" r="2.5" fill="currentColor" />
          <circle cx="4" cy="36" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-2 right-2 w-8 h-8 pointer-events-none opacity-80">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-[#d4af37]">
          <path d="M38 2 V30 C38 34.422 34.422 38 30 38 H2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M32 2 V26 C32 29.314 29.314 32 26 32 H2" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="26" cy="26" r="2.5" fill="currentColor" />
          <circle cx="36" cy="36" r="1.5" fill="currentColor" />
        </svg>
      </div>
    </>
  );
};


import React from 'react';
import type { WeddingData } from '../types/wedding';
import { GaneshaIcon } from './GaneshaIcon';
import { OrnamentalCorners } from './OrnamentalCorners';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  data: WeddingData;
  onOpenInvitation: () => void;
  isOpened: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  data,
  onOpenInvitation,
  isOpened,
}) => {
  const handleButtonClick = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#ffd700', '#d4af37', '#f4e5a9', '#ff5722', '#ffeb3b'],
      });
    } catch {
      // ignore
    }

    onOpenInvitation();
  };

  const isBrideFirst = data.displayOrder === 'brideFirst';
  const firstNameTamil = isBrideFirst ? data.brideTamil : data.groomTamil;
  const secondNameTamil = isBrideFirst ? data.groomTamil : data.brideTamil;
  const firstNameEnglish = isBrideFirst ? data.brideEnglish : data.groomEnglish;
  const secondNameEnglish = isBrideFirst ? data.groomEnglish : data.brideEnglish;

  return (
    <section className="relative w-full h-screen max-h-screen flex flex-col justify-between p-2 sm:p-4 md:p-6 lg:p-7 bg-[#140306] select-none overflow-hidden box-border">
      {/* Outer Golden Border Frame */}
      <div className="relative flex-1 flex flex-col justify-between border border-[#d4af37]/45 rounded-sm p-2 sm:p-3 md:p-5 royal-bg shadow-[0_0_50px_rgba(0,0,0,0.85)] overflow-hidden">
        
        {/* Inner Golden Border with Ornamental Corners */}
        <div className="relative flex-1 flex flex-col justify-between border border-[#d4af37]/30 rounded-sm p-3 sm:p-5 md:p-7 card-pattern overflow-hidden">
          <OrnamentalCorners />

          {/* Top Header Bar */}
          <header className="w-full flex items-center justify-between z-10 pt-0 pb-1 shrink-0">
            {/* Couple Monogram / Initials */}
            <div className="font-serif text-base sm:text-xl md:text-2xl font-bold tracking-[0.25em] text-[#eddcaa] flex items-center gap-1.5 cursor-default">
              <span>{data.initials}</span>
            </div>
          </header>

          {/* Main Hero Center Content (Perfect 1:1 match to Image 2) */}
          <main className="flex-1 flex flex-col items-center justify-center text-center my-auto z-10 max-w-4xl mx-auto w-full py-1">
            
            {/* Top Deity Emblem (Lord Vinayagar / Ganesha) */}
            <div className="mb-2 sm:mb-3 transform hover:scale-105 transition-transform duration-300 shrink-0">
              <GaneshaIcon size={42} />
            </div>

            {/* Subtitle English */}
            <p className="font-serif text-[10px] sm:text-[11px] md:text-xs tracking-[0.32em] text-[#cfa953] font-medium uppercase mb-1.5 sm:mb-2 shrink-0">
              {data.blessingEnglish}
            </p>

            {/* Tamil Blessing Line */}
            <p className="font-tamil text-xs sm:text-sm md:text-base text-[#eedfa0] font-normal tracking-wide mb-3 sm:mb-5 opacity-95 shrink-0">
              {data.blessingTamil}
            </p>

            {/* Main Bride & Groom Names in Tamil Typography (On a single elegant line) */}
            <h1 className="font-tamil text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#f7e8a9] tracking-normal mb-1 sm:mb-2 leading-tight flex items-center justify-center gap-2 sm:gap-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] whitespace-nowrap shrink-0">
              <span>{firstNameTamil}</span>
              <span className="text-[#d4af37] text-lg sm:text-2xl md:text-3xl inline-block mx-0.5 sm:mx-1 animate-pulse">
                ♥
              </span>
              <span>{secondNameTamil}</span>
            </h1>

            {/* English Names */}
            <p className="font-serif text-[10px] sm:text-xs md:text-sm tracking-[0.35em] text-[#d4af37] uppercase font-semibold mb-3 sm:mb-4 shrink-0">
              {firstNameEnglish} &amp; {secondNameEnglish}
            </p>

            {/* Center Diamond / Star Flourish */}
            <div className="flex items-center justify-center gap-2 text-[#d4af37]/80 my-1 sm:my-2 shrink-0">
              <span className="w-8 sm:w-16 h-[0.5px] bg-gradient-to-r from-transparent to-[#d4af37]/60"></span>
              <span className="text-xs">✦</span>
              <span className="w-8 sm:w-16 h-[0.5px] bg-gradient-to-l from-transparent to-[#d4af37]/60"></span>
            </div>

            {/* Tamil Invitation Message */}
            <div className="font-tamil text-[11px] sm:text-xs md:text-sm text-[#eddcaa] leading-relaxed max-w-lg mx-auto my-1.5 sm:my-3 space-y-0.5 shrink-0">
              <p>{data.invitationNoteLine1}</p>
              <p>{data.invitationNoteLine2}</p>
            </div>

            {/* Auspicious Wedding Date */}
            <div className="my-2 sm:my-4 shrink-0">
              <p className="font-serif text-xl sm:text-3xl md:text-4xl text-[#eddcaa] tracking-[0.25em] font-light">
                {data.weddingDateDisplay}
              </p>
            </div>

            {/* Interactive Invitation Action Button */}
            <div className="flex flex-col items-center mt-1 sm:mt-2 group shrink-0">
              <button
                onClick={handleButtonClick}
                className="bg-[#d5ad54] hover:bg-[#e4be63] active:bg-[#c49a40] text-[#28070e] font-tamil font-bold px-7 sm:px-9 py-2 sm:py-2.5 rounded shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm md:text-base tracking-wide flex items-center gap-2 cursor-pointer"
              >
                <span>{isOpened ? "அழைப்பிதழ் திறக்கப்பட்டது ✓" : data.buttonText}</span>
              </button>

              <button
                onClick={handleButtonClick}
                className="font-serif text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.32em] text-[#cfa953] hover:text-[#ffd700] uppercase mt-1.5 transition-colors cursor-pointer"
              >
                {data.buttonSubtext}
              </button>
            </div>
          </main>

          {/* Bottom subtle indicator */}
          <footer className="w-full text-center z-10 pt-1 shrink-0">
            <button
              onClick={onOpenInvitation}
              className="text-[#d4af37]/60 hover:text-[#d4af37] transition-colors text-xs flex flex-col items-center mx-auto gap-0.5 cursor-pointer animate-bounce"
            >
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-serif">கீழே பார்க்கவும்</span>
              <span>↓</span>
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
};

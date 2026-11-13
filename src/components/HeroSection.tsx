import React from 'react';
import type { WeddingData } from '../types/wedding';
import { GaneshaIcon } from './GaneshaIcon';
import { OrnamentalCorners } from './OrnamentalCorners';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  data: WeddingData;
  onOpenInvitation: () => void;
  isOpened: boolean;
  isPlaying?: boolean;
  onToggleAudio?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  data,
  onOpenInvitation,
  isOpened,
  isPlaying = false,
  onToggleAudio,
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
    <section className="relative w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] flex flex-col justify-between p-2 sm:p-4 md:p-6 lg:p-7 bg-[#140306] select-none overflow-hidden box-border">
      {/* Outer Golden Border Frame */}
      <div className="relative flex-1 flex flex-col justify-between border border-[#d4af37]/45 rounded-sm p-2 sm:p-3 md:p-5 royal-bg shadow-[0_0_50px_rgba(0,0,0,0.85)] overflow-hidden">
        
        {/* Inner Golden Border with Ornamental Corners */}
        <div className="relative flex-1 flex flex-col justify-between border border-[#d4af37]/30 rounded-sm p-2.5 sm:p-5 md:p-7 card-pattern overflow-hidden">
          <OrnamentalCorners />

          {/* Top Header Bar */}
          <header className="w-full flex items-center justify-between z-10 pt-0 pb-1 shrink-0">
            {/* Couple Monogram / Initials */}
            <div className="font-serif text-base sm:text-xl md:text-2xl font-bold tracking-[0.25em] text-[#eddcaa] flex items-center gap-1.5 cursor-default">
              <span>{data.initials}</span>
            </div>

            {/* Music Play / Pause Button (Reference Image 3 styling) */}
            {onToggleAudio && (
              <button
                type="button"
                onClick={onToggleAudio}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#d4af37]/45 bg-[#25050b]/80 hover:bg-[#3d0912] text-[#ffd700] hover:text-[#fff] text-[11px] sm:text-xs font-tamil transition-all cursor-pointer shadow-md group active:scale-95"
                aria-label={isPlaying ? "இசையை நிறுத்தவும்" : "இசையை இயக்கவும்"}
                title={isPlaying ? "இசையை நிறுத்தவும் (Pause Music)" : "இசையை இயக்கவும் (Play Music)"}
              >
                <span className="text-xs group-hover:scale-110 transition-transform">
                  {isPlaying ? "🎵" : "🔇"}
                </span>
                <span>{isPlaying ? "இசையை நிறுத்தவும்" : "இசையை இயக்கவும்"}</span>
                {isPlaying && (
                  <span className="flex items-end gap-0.5 h-2.5 ml-0.5">
                    <span className="w-0.5 h-full bg-[#ffd700] animate-pulse"></span>
                    <span className="w-0.5 h-1.5 bg-[#ffd700] animate-bounce"></span>
                    <span className="w-0.5 h-2 bg-[#ffd700] animate-pulse"></span>
                  </span>
                )}
              </button>
            )}
          </header>

          {/* Main Hero Center Content (Balanced golden proportions for both mobile & desktop) */}
          <main className="flex-1 flex flex-col items-center justify-evenly text-center z-10 max-w-4xl mx-auto w-full py-1 sm:py-2">
            
            {/* Top Deity Emblem (Lord Vinayagar / Ganesha) */}
            <div className="transform hover:scale-105 transition-transform duration-300 shrink-0">
              <GaneshaIcon size={40} />
            </div>

            {/* Subtitle & Tamil Blessing */}
            <div className="shrink-0 space-y-1">
              <p className="font-serif text-[10px] sm:text-[11px] md:text-xs tracking-[0.32em] text-[#cfa953] font-medium uppercase">
                {data.blessingEnglish}
              </p>
              <p className="font-tamil text-xs sm:text-sm md:text-base text-[#eedfa0] font-normal tracking-wide max-w-[280px] sm:max-w-none mx-auto opacity-95 leading-relaxed">
                {data.blessingTamil}
              </p>
            </div>

            {/* Main Bride & Groom Names in Tamil Typography (Mobile: stacked 2 lines, Desktop: single line) */}
            <div className="shrink-0 my-0.5 sm:my-1">
              <h1 className="font-tamil text-2xl sm:text-4xl md:text-5xl font-bold text-[#f7e8a9] tracking-normal leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-3">
                  <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                    <span>{firstNameTamil}</span>
                    <span className="text-[#d4af37] text-base sm:text-2xl md:text-3xl animate-pulse">
                      ♥
                    </span>
                  </span>
                  <span>{secondNameTamil}</span>
                </div>
              </h1>

              {/* English Names */}
              <p className="font-serif text-[10px] sm:text-xs md:text-sm tracking-[0.32em] text-[#d4af37] uppercase font-semibold mt-1 sm:mt-2">
                {firstNameEnglish} &amp; {secondNameEnglish}
              </p>
            </div>

            {/* Center Diamond / Star Flourish */}
            <div className="flex items-center justify-center gap-2 text-[#d4af37]/80 my-0.5 sm:my-1 shrink-0">
              <span className="w-8 sm:w-16 h-[0.5px] bg-gradient-to-r from-transparent to-[#d4af37]/60"></span>
              <span className="text-xs">✦</span>
              <span className="w-8 sm:w-16 h-[0.5px] bg-gradient-to-l from-transparent to-[#d4af37]/60"></span>
            </div>

            {/* Tamil Invitation Message */}
            <div className="font-tamil text-[11px] sm:text-xs md:text-sm text-[#eddcaa] leading-relaxed max-w-sm sm:max-w-lg mx-auto px-2 space-y-0.5 shrink-0">
              <p>{data.invitationNoteLine1}</p>
              <p>{data.invitationNoteLine2}</p>
            </div>

            {/* Auspicious Wedding Date */}
            <div className="my-1 sm:my-2 shrink-0">
              <p className="font-serif text-xl sm:text-3xl md:text-4xl text-[#eddcaa] tracking-[0.25em] font-light">
                {data.weddingDateDisplay}
              </p>
            </div>

            {/* Interactive Invitation Action Button */}
            <div className="flex flex-col items-center mt-1 group shrink-0 w-full max-w-xs">
              <button
                onClick={handleButtonClick}
                className="w-full sm:w-auto bg-[#d5ad54] hover:bg-[#e4be63] active:bg-[#c49a40] text-[#28070e] font-tamil font-bold px-7 sm:px-9 py-2.5 rounded shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm md:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isOpened ? "அழைப்பிதழ் திறக்கப்பட்டது ✓" : "அழைப்பிதழைத் திறக்கவும்"}</span>
                {!isOpened && <span className="text-xs sm:text-sm font-sans font-bold">↘</span>}
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

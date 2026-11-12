import React, { useState, useRef } from 'react';
import type { WeddingData } from './types/wedding';
import { defaultWeddingData } from './data/defaultData';
import { HeroSection } from './components/HeroSection';
import { CountdownTimer } from './components/CountdownTimer';
import { VenueSection } from './components/VenueSection';
import { CoupleSection } from './components/CoupleSection';
import { BrideMemoriesGallery } from './components/BrideMemoriesGallery';
import { CalendarExport } from './components/CalendarExport';
import { CustomizerDrawer } from './components/CustomizerDrawer';

export const App: React.FC = () => {
  const [data, setData] = useState<WeddingData>(defaultWeddingData);
  const [isOpened, setIsOpened] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    // Smooth scroll to the details section
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#140306] text-[#eedfa0] flex flex-col justify-between selection:bg-[#d4af37]/30 selection:text-white relative">
      
      {/* 1. HERO HOME SCREEN (Exact 1:1 replica of target UI design) */}
      <HeroSection
        data={data}
        onOpenInvitation={handleOpenInvitation}
        isOpened={isOpened}
      />

      {/* 2. EXPANDED WEDDING DETAILS SECTION */}
      <div ref={detailsRef} className="w-full relative bg-gradient-to-b from-[#180307] via-[#22050c] to-[#120205] border-t border-[#d4af37]/30">
        
        {/* Subtle decorative divider line */}
        <div className="flex items-center justify-center gap-3 pt-8 pb-2">
          <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/60"></span>
          <span className="text-[#d4af37] text-sm">✦ ⚜ ✦</span>
          <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/60"></span>
        </div>

        {/* Auspicious Deity & Thirukkural Banner */}
        <div className="max-w-3xl mx-auto px-4 pt-4 pb-2 text-center">
          {data.deityTamil && (
            <div className="mb-3">
              <p className="font-tamil text-xs sm:text-sm text-[#ffd700] font-semibold tracking-wide">
                🕉 {data.deityTamil}
              </p>
              {data.deityEnglish && (
                <p className="font-serif text-[10px] sm:text-xs text-[#eddcaa]/70 tracking-wider">
                  {data.deityEnglish}
                </p>
              )}
            </div>
          )}

          {data.thirukkural && (
            <div className="my-2 px-5 py-2 rounded-full bg-[#27060d]/80 border border-[#d4af37]/35 inline-block shadow-md">
              <p className="font-tamil text-xs sm:text-sm text-[#fce8a2] italic">
                &ldquo;{data.thirukkural}&rdquo; <span className="text-[11px] text-[#d4af37] font-semibold">(குறள் 45)</span>
              </p>
            </div>
          )}

          {/* Muhurtham & Venue Highlight Banner */}
          <div className="mt-3 p-3.5 rounded-xl bg-gradient-to-r from-amber-950/40 via-[#2d0912]/80 to-amber-950/40 border border-[#d4af37]/30 max-w-xl mx-auto text-xs sm:text-sm text-[#eedfa0]">
            <p className="font-tamil font-bold text-[#ffd700] text-sm sm:text-base">
              திருமண முகூர்த்தம்: 14 டிசம்பர் 2026, திங்கட்கிழமை
            </p>
            <p className="font-tamil text-xs text-[#eddcaa]/90 mt-0.5">
              {data.muhurthamTimeTamil} • {data.marriageVenue.name}, {data.marriageVenue.address}
            </p>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <CountdownTimer targetDate={data.weddingDateIso} astrologyTamil={data.astrologyTamil} />

        {/* Calendar Add & Share Options */}
        <CalendarExport data={data} />

        {/* Bride's Cherished Romantic Memories Gallery */}
        <BrideMemoriesGallery />

        {/* Both Venues: Marriage Hall (A.M.R.K.) & Reception Hall (Prn) */}
        <VenueSection data={data} />

        {/* Bride & Groom Couple and Family Section */}
        <CoupleSection data={data} />

        {/* Footer */}
        <footer className="w-full text-center py-10 border-t border-[#d4af37]/20 bg-[#120205]/90">
          <p className="font-serif text-lg tracking-[0.2em] text-[#d4af37] font-bold mb-1">
            {data.initials}
          </p>
          <p className="font-tamil text-sm text-[#eddcaa]/80">
            தங்களின் வருகையை அன்போடு எதிர்பார்க்கும் குடும்பத்தினர்
          </p>
          <p className="text-[11px] text-[#eedfa0]/50 font-serif mt-3 tracking-widest uppercase">
            Designed by @M.Kalaiyarasan - 2026
          </p>
        </footer>
      </div>

      {/* 3. SUBTLE CUSTOMIZER DRAWER */}
      <CustomizerDrawer currentData={data} onUpdateData={setData} />
    </div>
  );
};

export default App;

import React, { useState, useRef, useEffect } from 'react';
import type { WeddingData } from './types/wedding';
import { defaultWeddingData } from './data/defaultData';
import { HeroSection } from './components/HeroSection';
import { CountdownTimer } from './components/CountdownTimer';
import { VenueSection } from './components/VenueSection';
import { CalendarExport } from './components/CalendarExport';
import { CustomizerDrawer } from './components/CustomizerDrawer';

const WEDDING_SONG_URL = '/marrigesong.mpeg';

export const App: React.FC = () => {
  const [data, setData] = useState<WeddingData>(defaultWeddingData);
  const [isOpened, setIsOpened] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    // Initialize audio instance with the specified wedding song
    const audio = new Audio(WEDDING_SONG_URL);
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    // Try default autoplay on page load
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy until user interaction
          setIsPlaying(false);
        });
    }

    // Fallback: Start playing on first user interaction anywhere on the document
    const startAudioOnFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
      removeInteractionListeners();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener('click', startAudioOnFirstInteraction);
      window.removeEventListener('touchstart', startAudioOnFirstInteraction);
      window.removeEventListener('scroll', startAudioOnFirstInteraction);
      window.removeEventListener('keydown', startAudioOnFirstInteraction);
    };

    window.addEventListener('click', startAudioOnFirstInteraction, { once: true });
    window.addEventListener('touchstart', startAudioOnFirstInteraction, { once: true });
    window.addEventListener('scroll', startAudioOnFirstInteraction, { once: true });
    window.addEventListener('keydown', startAudioOnFirstInteraction, { once: true });

    return () => {
      removeInteractionListeners();
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleOpenInvitation = () => {
    setIsOpened(true);
    // Ensure the wedding song is playing when invitation is opened
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
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
        isPlaying={isPlaying}
        onToggleAudio={toggleAudio}
      />

      {/* 2. EXPANDED WEDDING DETAILS SECTION */}
      <div ref={detailsRef} className="w-full relative bg-gradient-to-b from-[#180307] via-[#22050c] to-[#120205] border-t border-[#d4af37]/30">
        
        {/* Subtle decorative divider line */}
        <div className="flex items-center justify-center gap-3 pt-8 pb-2">
          <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/60"></span>
          <span className="text-[#d4af37] text-sm">✦ ⚜ ✦</span>
          <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/60"></span>
        </div>

        {/* Thirukkural Banner */}
        <div className="max-w-3xl mx-auto px-4 pt-4 pb-2 text-center">
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

        {/* Both Venues: Marriage Hall (A.M.R.K.) & Reception Hall (Prn) */}
        <VenueSection data={data} />

        {/* Footer */}
        <footer className="w-full text-center py-10 border-t border-[#d4af37]/20 bg-[#120205]/90">
          <p className="font-serif text-lg tracking-[0.2em] text-[#d4af37] font-bold mb-1">
            {data.initials}
          </p>
          <p className="font-tamil text-sm text-[#eddcaa]/80">
            தங்களின் வருகையை அன்போடு எதிர்பார்க்கும் குடும்பத்தினர்
          </p>
          <p className="text-[11px] text-[#eedfa0]/50 font-serif mt-3 tracking-widest uppercase">
            
          </p>
        </footer>
      </div>

      {/* 3. FLOATING MUSIC TOGGLE BUTTON */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={toggleAudio}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#d4af37]/50 bg-[#1e0307]/90 backdrop-blur-md text-[#ffd700] hover:text-white text-xs font-tamil shadow-[0_4px_20px_rgba(0,0,0,0.85)] transition-all cursor-pointer active:scale-95 group hover:border-[#ffd700]"
          aria-label={isPlaying ? "இசையை நிறுத்தவும்" : "இசையை இயக்கவும்"}
          title={isPlaying ? "இசையை நிறுத்தவும் (Pause Music)" : "இசையை இயக்கவும் (Play Music)"}
        >
          <span className="text-sm group-hover:scale-110 transition-transform">
            {isPlaying ? "🎵" : "🔇"}
          </span>
          <span className="hidden sm:inline font-semibold">
            {isPlaying ? "இசையை நிறுத்தவும்" : "இசையை இயக்கவும்"}
          </span>
          {isPlaying && (
            <span className="flex items-end gap-0.5 h-3 ml-0.5">
              <span className="w-0.5 h-full bg-[#ffd700] animate-pulse"></span>
              <span className="w-0.5 h-1.5 bg-[#ffd700] animate-bounce"></span>
              <span className="w-0.5 h-2 bg-[#ffd700] animate-pulse"></span>
            </span>
          )}
        </button>
      </div>

      {/* 4. SUBTLE CUSTOMIZER DRAWER */}
      <CustomizerDrawer currentData={data} onUpdateData={setData} />
    </div>
  );
};

export default App;

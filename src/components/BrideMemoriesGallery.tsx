import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles, Maximize2, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

import nivi1 from '../assets/nivi1.jpeg';
import nivi2 from '../assets/nivi2.jpeg';
import nivi3 from '../assets/nivi3.jpeg';
import nivi4 from '../assets/nivi4.jpeg';
import nivi5 from '../assets/nivi5.jpeg';
import nivi6 from '../assets/nivi6.jpeg';
import nivi7 from '../assets/nivi7.jpeg';
import nivi8 from '../assets/nivi8.jpeg';
import nivi9 from '../assets/nivi9.jpeg';
import nivi10 from '../assets/nivi10.jpeg';

export interface CoupleMemory {
  id: number;
  src: string;
  titleTamil: string;
  titleEnglish: string;
  subtitleTamil: string;
}

const memories: CoupleMemory[] = [
  {
    id: 1,
    src: nivi1,
    titleTamil: "கடற்கரை மலர் வளைவில் காதல் நடனம்",
    titleEnglish: "DANCING UNDER THE FLORAL ARCH",
    subtitleTamil: "கடற்கரை மணலில் மலர் வளைவின் கீழ் கைகோர்த்து சுழலும் இனிய காதல் தருணம்."
  },
  {
    id: 2,
    src: nivi2,
    titleTamil: "கடலலையின் மடியில் அன்பின் அணைப்பு",
    titleEnglish: "ROMANTIC EMBRACE BY THE SHORE",
    subtitleTamil: "ஆழ்கடலின் அலைகள் தழுவ ஒருவரையொருவர் நோக்கி மலரும் மென்மையான காதல் பார்வை."
  },
  {
    id: 3,
    src: nivi3,
    titleTamil: "பாரம்பரிய எழிலில் மங்கல ஜோடி",
    titleEnglish: "TRADITIONAL ELEGANCE TOGETHER",
    subtitleTamil: "பட்டுச் சேலையும் வேட்டியும் அணிந்து கோயில் திருச்சுற்றில் மலரும் மங்கலப் புன்னகை."
  },
  {
    id: 4,
    src: nivi4,
    titleTamil: "செங்கல் வளைவில் நெற்றி முட்டும் நேசம்",
    titleEnglish: "TENDER FOREHEAD EMBRACE UNDER THE ARCH",
    subtitleTamil: "கண்ணிமை மூடி கன்னம் தொட்டு இதயத் துடிப்பை உணரும் மென்மையான காதல் தருணம்."
  },
  {
    id: 5,
    src: nivi5,
    titleTamil: "மரபு மாளிகையின் பால்கனியில் புன்னகை",
    titleEnglish: "SMILING AT THE HERITAGE BALCONY",
    subtitleTamil: "பாரம்பரிய மரத்தூண் மாளிகையின் உப்பரிகையில் தோளோடு கை சேர்த்து புன்னகைக்கும் தம்பதியர்."
  },
  {
    id: 6,
    src: nivi6,
    titleTamil: "பசுமை நிழலில் தலைசாய்க்கும் பாசம்",
    titleEnglish: "LEANING CLOSE IN NATURE'S SHADE",
    subtitleTamil: "மரங்களின் நிழலில் அன்போடு தலை சாய்த்து மலரும் புதிய வாழ்வின் உறுதிமொழி."
  },
  {
    id: 7,
    src: nivi7,
    titleTamil: "தெப்பக்குளக்கரையில் தம்பதியர்",
    titleEnglish: "TOGETHER BY THE SACRED TEMPLE POND",
    subtitleTamil: "கோயில் குளத்தின் கரையில் தென்றல் தழுவ அமைதியும் பூரிப்பும் நிறைந்த அழகு தோற்றம்."
  },
  {
    id: 8,
    src: nivi8,
    titleTamil: "அன்போடு நோக்கும் பார்வையும் வெட்கப் புன்னகையும்",
    titleEnglish: "LOVING GAZE & SHY SMILES",
    subtitleTamil: "மணமகனின் கனிவான பார்வையில் மணமகள் முகத்தில் மலரும் இனிய வெட்கம்."
  },
  {
    id: 9,
    src: nivi9,
    titleTamil: "பாதத்தில் கொலுசு அணிவிக்கும் பாச தருணம்",
    titleEnglish: "ADORNING THE SILVER ANKLET WITH LOVE",
    subtitleTamil: "மண்டியிட்டு மணமகள் பாதத்தில் கொலுசு அணிவித்து பாசம் பொழியும் பொன்னான நன்னொடி."
  },
  {
    id: 10,
    src: nivi10,
    titleTamil: "கோயில் படித்துறையில் இனிய உரையாடல்",
    titleEnglish: "SHARED LAUGHTER ON TEMPLE STEPS",
    subtitleTamil: "படித்துறைக் கல்லில் அமர்ந்து மனந்திறந்து பேசி மகிழும் அழகிய காதல் நொடிகள்."
  }
];

export const BrideMemoriesGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [likes, setLikes] = useState<Record<number, number>>({
    1: 42, 2: 38, 3: 55, 4: 49, 5: 61, 6: 34, 7: 58, 8: 47, 9: 53, 10: 72
  });

  const timerRef = useRef<number | null>(null);

  // Smooth Auto-advance
  useEffect(() => {
    if (isPaused || lightboxIndex !== null) return;
    timerRef.current = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % memories.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, lightboxIndex]);

  const handlePrev = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + memories.length) % memories.length);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % memories.length);
  }, []);

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        },
        colors: ['#ff4081', '#ffd700', '#ff6b81', '#ff1744'],
      });
    } catch {
      // ignore
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev! + 1) % memories.length);
      if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev! - 1 + memories.length) % memories.length);
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Helper to compute 3D card layout position relative to activeIndex
  const getCardStyle = (index: number) => {
    const total = memories.length;
    // Calculate normalized offset from activeIndex (-total/2 to +total/2)
    let offset = (index - activeIndex) % total;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (offset === 0) {
      // Center Active Card: Large, glowing, centered
      return {
        transform: 'translateX(0%) scale(1.08) translateZ(100px)',
        zIndex: 30,
        opacity: 1,
        filter: 'blur(0px)',
        boxShadow: '0 25px 60px rgba(212, 175, 55, 0.45), 0 0 35px rgba(255, 215, 0, 0.3)',
        borderColor: '#ffd700',
      };
    } else if (offset === -1) {
      // Left Near Card
      return {
        transform: 'translateX(-65%) scale(0.88) rotateY(22deg) translateZ(0px)',
        zIndex: 20,
        opacity: 0.85,
        filter: 'blur(0.5px)',
        borderColor: 'rgba(212, 175, 55, 0.5)',
      };
    } else if (offset === 1) {
      // Right Near Card
      return {
        transform: 'translateX(65%) scale(0.88) rotateY(-22deg) translateZ(0px)',
        zIndex: 20,
        opacity: 0.85,
        filter: 'blur(0.5px)',
        borderColor: 'rgba(212, 175, 55, 0.5)',
      };
    } else if (offset === -2) {
      // Left Far Card
      return {
        transform: 'translateX(-120%) scale(0.74) rotateY(38deg) translateZ(-80px)',
        zIndex: 10,
        opacity: 0.45,
        filter: 'blur(2px)',
        borderColor: 'rgba(212, 175, 55, 0.25)',
      };
    } else if (offset === 2) {
      // Right Far Card
      return {
        transform: 'translateX(120%) scale(0.74) rotateY(-38deg) translateZ(-80px)',
        zIndex: 10,
        opacity: 0.45,
        filter: 'blur(2px)',
        borderColor: 'rgba(212, 175, 55, 0.25)',
      };
    } else {
      // Hidden behind
      return {
        transform: `translateX(${offset > 0 ? 160 : -160}%) scale(0.5) translateZ(-150px)`,
        zIndex: 0,
        opacity: 0,
        pointerEvents: 'none' as const,
      };
    }
  };

  const activeMemory = memories[activeIndex];

  return (
    <section className="py-16 px-3 sm:px-6 max-w-6xl mx-auto select-none overflow-hidden">
      
      {/* Romantic Luxury Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950/60 via-amber-900/40 to-amber-950/60 border border-amber-400/50 text-amber-300 text-xs font-serif tracking-[0.25em] uppercase mb-3 shadow-[0_0_20px_rgba(212,175,55,0.25)] animate-pulse-slow">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>A CHERISHED JOURNEY OF ROMANCE &amp; MEMORIES</span>
        </div>

        <h2 className="font-tamil text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fce8a2] tracking-wide mb-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
          மணமக்களின் இனிய நினைவுகள்
        </h2>
        
        <p className="font-serif text-xs sm:text-sm text-[#d4af37] tracking-[0.3em] uppercase font-semibold">
          NIVETHA &amp; KAVIYARASAN&apos;S PRE-WEDDING MEMORIES
        </p>

        <div className="flex items-center justify-center gap-3 text-[#d4af37]/80 my-3.5">
          <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/70"></span>
          <span className="text-sm">✦ ❦ ✦</span>
          <span className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/70"></span>
        </div>

        <p className="font-tamil text-xs sm:text-sm text-[#eddcaa]/90 italic max-w-lg mx-auto">
          &ldquo;அன்பின் மென் நொடிகள்... ஆயுள் வரை தொடரும் இனிய காதல் நினைவுகள்.&rdquo;
        </p>
      </div>

      {/* 1. ULTRA-STYLED 3D ROMANTIC COVERFLOW DECK */}
      <div
        className="relative my-8 sm:my-12 perspective-1200"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 3D Cards Stage */}
        <div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] flex items-center justify-center preserve-3d">
          {memories.map((memory, index) => {
            const style = getCardStyle(index);
            const isCenter = index === activeIndex;

            return (
              <div
                key={memory.id}
                onClick={() => {
                  if (isCenter) {
                    setLightboxIndex(index);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                style={style}
                className="absolute w-[240px] sm:w-[310px] md:w-[340px] h-[350px] sm:h-[430px] md:h-[470px] rounded-2xl border-2 transition-all duration-700 ease-out cursor-pointer overflow-hidden bg-gradient-to-b from-[#24060d] to-[#120205]"
              >
                {/* Photo with Ken Burns animation on active card */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={memory.src}
                    alt={memory.titleTamil}
                    className={`w-full h-full object-cover object-center ${
                      isCenter ? 'animate-kenburns scale-105' : ''
                    }`}
                  />
                  
                  {/* Luxury Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                  {/* Corner Gold Pin Accent */}
                  <div className="absolute top-2.5 left-2.5 w-3 h-3 rounded-full border border-amber-300 bg-amber-400/80 shadow-[0_0_8px_rgba(255,215,0,0.8)]"></div>
                  
                  {/* Interactive Heart Button on Active Card */}
                  <button
                    onClick={(e) => handleLike(memory.id, e)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 border border-red-500/50 text-red-400 hover:scale-125 transition-transform cursor-pointer shadow-lg z-10"
                    title="Like this romantic moment"
                  >
                    <Heart className="w-4 h-4 fill-red-400" />
                  </button>

                  {/* Like Counter Badge */}
                  <div className="absolute top-3 right-12 bg-black/60 border border-amber-400/30 px-2 py-0.5 rounded-full text-[10px] font-serif text-amber-200">
                    ❤️ {likes[memory.id] || 0}
                  </div>

                  {/* Center Card Title & Romantic Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-left bg-gradient-to-t from-black/95 via-black/60 to-transparent">
                    <span className="text-[10px] tracking-widest uppercase font-serif text-amber-300/90 font-semibold block mb-0.5">
                      Moment #{memory.id} • Nivetha &amp; Kaviyarasan
                    </span>
                    <h3 className="font-tamil text-lg sm:text-xl font-bold text-[#fce8a2] leading-tight">
                      {memory.titleTamil}
                    </h3>
                    <p className="font-serif text-[11px] text-[#d4af37] tracking-wider mt-0.5">
                      {memory.titleEnglish}
                    </p>
                  </div>

                  {/* Zoom Hint Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30 pointer-events-none">
                    <div className="p-3 rounded-full bg-black/60 border border-[#ffd700] text-[#ffd700]">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Navigation Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-black/70 border-2 border-amber-400/60 text-amber-300 hover:bg-amber-950 hover:border-amber-300 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer z-40"
          title="Previous Photo"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-3.5 rounded-full bg-black/70 border-2 border-amber-400/60 text-amber-300 hover:bg-amber-950 hover:border-amber-300 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer z-40"
          title="Next Photo"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Romantic Caption & Poetry Box */}
      <div className="max-w-2xl mx-auto my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#24060d]/90 via-[#2d0811]/95 to-[#24060d]/90 border border-[#d4af37]/40 text-center shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm">
        <p className="font-tamil text-base sm:text-lg font-bold text-[#ffd700] mb-1">
          {activeMemory.titleTamil}
        </p>
        <p className="font-tamil text-xs sm:text-sm text-[#eedfa0]/90 italic leading-relaxed">
          &ldquo;{activeMemory.subtitleTamil}&rdquo;
        </p>
        <p className="font-serif text-[11px] text-[#d4af37]/75 tracking-widest uppercase mt-2">
          — {activeMemory.titleEnglish} —
        </p>

        {/* Progress Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4">
          {memories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeIndex === idx
                  ? 'w-7 sm:w-9 bg-[#ffd700] shadow-[0_0_8px_rgba(255,215,0,0.8)]'
                  : 'w-2 bg-[#d4af37]/35 hover:bg-[#d4af37]/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. INFINITE ROMANTIC FILM REEL (Continuous Smooth Glide) */}
      <div className="mt-12 pt-6 border-t border-[#d4af37]/25">
        <div className="flex items-center justify-between mb-4 px-2">
          <span className="font-serif text-xs text-[#d4af37] tracking-[0.25em] uppercase font-semibold">
            MEMORIES REEL • GLIDE &amp; EXPLORE
          </span>
          <span className="text-[11px] font-tamil text-[#eddcaa]/60">
            படத்தைத் தொட்டுப் பெரிதாக்கவும்
          </span>
        </div>

        {/* Smooth Continuous Marquee Filmstrip */}
        <div className="overflow-hidden relative py-2">
          {/* Gradient Edge Masks for Cinematic Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#140306] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#140306] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee gap-3 sm:gap-4 flex items-center">
            {/* Render items twice for a truly seamless, infinite romantic loop */}
            {[...memories, ...memories].map((memory, idx) => (
              <div
                key={`${memory.id}-${idx}`}
                onClick={() => {
                  setActiveIndex(memory.id - 1);
                  setLightboxIndex(memory.id - 1);
                }}
                className="group relative w-36 sm:w-44 h-48 sm:h-56 shrink-0 rounded-xl overflow-hidden border-2 border-[#d4af37]/40 shadow-lg hover:border-[#ffd700] hover:scale-105 transition-all duration-300 cursor-pointer bg-black/40"
              >
                <img
                  src={memory.src}
                  alt={memory.titleTamil}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-2 inset-x-2 text-left">
                  <p className="font-tamil text-[11px] sm:text-xs font-bold text-[#fce8a2] line-clamp-1 drop-shadow">
                    {memory.titleTamil}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. FULLSCREEN ROMANTIC LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + memories.length) % memories.length);
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-amber-400/50 text-amber-300 hover:bg-amber-900 transition-colors shadow-2xl cursor-pointer z-50"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % memories.length);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-amber-400/50 text-amber-300 hover:bg-amber-900 transition-colors shadow-2xl cursor-pointer z-50"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Lightbox Content Card */}
          <div
            className="relative max-w-4xl max-h-[92vh] bg-gradient-to-b from-[#22050b] to-[#120205] border-2 border-[#d4af37]/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image with Ken Burns Zoom */}
            <div className="relative max-h-[72vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={memories[lightboxIndex].src}
                alt={memories[lightboxIndex].titleTamil}
                className="max-h-[72vh] w-auto object-contain animate-kenburns"
              />
            </div>

            {/* Bottom Info Bar */}
            <div className="w-full p-4 sm:p-5 bg-[#180307] border-t border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <span className="text-[10px] font-serif text-amber-400/80 tracking-widest uppercase">
                  Photo {lightboxIndex + 1} of {memories.length} • Nivetha &amp; Kaviyarasan
                </span>
                <h3 className="font-tamil text-lg sm:text-2xl font-bold text-[#fce8a2]">
                  {memories[lightboxIndex].titleTamil}
                </h3>
                <p className="font-tamil text-xs sm:text-sm text-[#eddcaa]/85 mt-0.5">
                  &ldquo;{memories[lightboxIndex].subtitleTamil}&rdquo;
                </p>
              </div>

              {/* Like in Lightbox */}
              <button
                onClick={(e) => handleLike(memories[lightboxIndex].id, e)}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/80 border border-red-500/60 text-red-200 hover:bg-red-900 transition-all cursor-pointer font-serif text-xs sm:text-sm shadow-md"
              >
                <Heart className="w-4 h-4 fill-red-400 text-red-400" />
                <span>{likes[memories[lightboxIndex].id] || 0} Likes</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

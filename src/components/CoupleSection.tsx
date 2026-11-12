import React from 'react';
import type { WeddingData } from '../types/wedding';
import { Heart, Briefcase, Users, MapPin } from 'lucide-react';

interface CoupleSectionProps {
  data: WeddingData;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ data }) => {
  const isBrideFirst = data.displayOrder === 'brideFirst';

  const brideCard = (
    <div key="bride" className="bg-gradient-to-b from-[#2b0811]/90 to-[#190308]/95 border border-[#d4af37]/35 rounded-2xl p-6 sm:p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.6)] relative group hover:border-[#d4af37]/70 transition-all flex flex-col justify-between">
      <div>
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-950/80 border border-amber-400/50 flex items-center justify-center text-amber-300 text-2xl font-serif">
          👰
        </div>
        
        <span className="font-serif text-xs text-[#d4af37] tracking-widest uppercase block mb-1">
          மணமகள் (THE BRIDE)
        </span>

        <h3 className="font-tamil text-2xl sm:text-3xl font-bold text-[#fce8a2] mb-1">
          {data.brideTamil} {data.brideDegree && <span className="text-lg font-serif text-amber-300/80">{data.brideDegree}</span>}
        </h3>

        <p className="font-serif text-xs text-[#d4af37]/80 tracking-wider mb-3 font-medium">
          {data.brideEnglish} {data.brideDegree}
        </p>

        {/* Profession */}
        {data.brideProfession && (
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#eddcaa]/90 bg-[#1e0409] border border-[#d4af37]/25 rounded-lg py-2 px-3 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span className="font-tamil">{data.brideProfession}</span>
          </div>
        )}
      </div>

      <div className="border-t border-[#d4af37]/20 pt-4 mt-2 text-left space-y-2 text-xs">
        <div>
          <p className="font-tamil text-[#eddcaa]/70 mb-0.5 font-medium flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>பெற்றோர்கள்:</span>
          </p>
          <p className="font-tamil text-sm text-[#eedfa0] font-semibold pl-5">
            {data.brideParents}
          </p>
        </div>

        {data.brideBrother && (
          <div className="pt-1">
            <p className="font-tamil text-[#eddcaa]/70 mb-0.5 font-medium flex items-center gap-1.5">
              <span>👤</span>
              <span>சகோதரர்:</span>
            </p>
            <p className="font-tamil text-xs text-[#fce8a2] pl-5">
              {data.brideBrother}
            </p>
          </div>
        )}

        {data.brideAncestry && (
          <div className="pt-1">
            <p className="font-tamil text-[#eddcaa]/70 mb-0.5 font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>இருப்பிடம் / பூர்வீகம்:</span>
            </p>
            <p className="font-tamil text-xs text-[#eedfa0]/85 pl-5">
              {data.brideAncestry}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const groomCard = (
    <div key="groom" className="bg-gradient-to-b from-[#2b0811]/90 to-[#190308]/95 border border-[#d4af37]/35 rounded-2xl p-6 sm:p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.6)] relative group hover:border-[#d4af37]/70 transition-all flex flex-col justify-between">
      <div>
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-950/80 border border-amber-400/50 flex items-center justify-center text-amber-300 text-2xl font-serif">
          🤵
        </div>

        <span className="font-serif text-xs text-[#d4af37] tracking-widest uppercase block mb-1">
          மணமகன் (THE GROOM)
        </span>

        <h3 className="font-tamil text-2xl sm:text-3xl font-bold text-[#fce8a2] mb-1">
          {data.groomTamil} {data.groomDegree && <span className="text-lg font-serif text-amber-300/80">{data.groomDegree}</span>}
        </h3>

        <p className="font-serif text-xs text-[#d4af37]/80 tracking-wider mb-3 font-medium">
          {data.groomEnglish} {data.groomDegree}
        </p>

        {/* Profession */}
        {data.groomProfession && (
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#eddcaa]/90 bg-[#1e0409] border border-[#d4af37]/25 rounded-lg py-2 px-3 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span className="font-tamil">{data.groomProfession}</span>
          </div>
        )}
      </div>

      <div className="border-t border-[#d4af37]/20 pt-4 mt-2 text-left space-y-2 text-xs">
        <div>
          <p className="font-tamil text-[#eddcaa]/70 mb-0.5 font-medium flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>பெற்றோர்கள்:</span>
          </p>
          <p className="font-tamil text-sm text-[#eedfa0] font-semibold pl-5">
            {data.groomParents}
          </p>
        </div>

        {data.groomAncestry && (
          <div className="pt-1">
            <p className="font-tamil text-[#eddcaa]/70 mb-0.5 font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>இருப்பிடம் / பூர்வீகம்:</span>
            </p>
            <p className="font-tamil text-xs text-[#eedfa0]/85 pl-5">
              {data.groomAncestry}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="font-serif text-xs tracking-[0.3em] text-[#d4af37] uppercase block mb-1">
          WITH LOVE &amp; BLESSINGS
        </span>
        <h2 className="font-tamil text-2xl sm:text-3xl font-bold text-[#f7e8a9] tracking-wide">
          மணமக்கள் &amp; குடும்பத்தினர்
        </h2>
        <div className="flex items-center justify-center gap-2 text-[#d4af37]/70 my-2">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/60"></span>
          <span className="text-xs">✦</span>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/60"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {isBrideFirst ? [brideCard, groomCard] : [groomCard, brideCard]}

        {/* Center Heart Badge on large screens */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1b0307] border-2 border-[#d4af37] items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] pointer-events-none">
          <Heart className="w-6 h-6 text-[#d4af37] fill-[#d4af37]/30 animate-pulse" />
        </div>
      </div>

      {/* Traditional Blessing Note from Card */}
      <div className="mt-8 text-center bg-[#23060c]/60 border border-[#d4af37]/25 rounded-xl p-4 max-w-2xl mx-auto">
        <p className="font-tamil text-xs sm:text-sm text-[#eedfa0] italic">
          &quot;இவர்களது திருமணம் பெரியோர்களால் நிச்சயிக்கப்பட்டு நடைபெறவிருப்பதால், தாங்கள் தங்கள் சுற்றமும் நட்பும் சூழ வருகை தந்து மணமக்களை வாழ்த்திடுமாறு அன்புடன் அழைக்கின்றோம்.&quot;
        </p>
        <p className="font-serif text-xs text-[#d4af37] mt-2 font-medium">
          — With Love &amp; Best Wishes: Friends &amp; Relatives (சுற்றமும் நட்பும்)
        </p>
      </div>
    </section>
  );
};

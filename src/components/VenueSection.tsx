import React from 'react';
import type { WeddingData } from '../types/wedding';
import { MapPin, Navigation, Phone, ExternalLink, Calendar, Clock, Train } from 'lucide-react';

interface VenueSectionProps {
  data: WeddingData;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ data }) => {
  const { marriageVenue, receptionVenue } = data;

  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="font-serif text-xs tracking-[0.3em] text-[#d4af37] uppercase block mb-1">
          WEDDING &amp; RECEPTION VENUES
        </span>
        <h2 className="font-tamil text-2xl sm:text-3xl font-bold text-[#f7e8a9] tracking-wide">
          திருமண மண்டபங்கள் &amp; முகவரிகள்
        </h2>
        <div className="flex items-center justify-center gap-2 text-[#d4af37]/70 my-2">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/60"></span>
          <span className="text-xs">✦</span>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/60"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* 1. Marriage Hall Card (A.M.R.K. Wedding Hall, Orathanadu) */}
        <div className="flex flex-col justify-between bg-gradient-to-b from-[#2a0810]/95 via-[#20050b]/95 to-[#160206]/95 border-2 border-[#d4af37]/45 rounded-2xl p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.7)] relative overflow-hidden group hover:border-[#d4af37]/80 transition-all">
          <div>
            {/* Top Event Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-400/60 text-[#ffd700] text-xs font-tamil font-bold shadow-md">
                💍 திருமண முகூர்த்தம் (Muhurtham)
              </span>
              <span className="font-serif text-[11px] text-[#eddcaa]/70">
                Orathanadu
              </span>
            </div>

            {/* Hall Name */}
            <h3 className="font-tamil text-2xl sm:text-3xl font-bold text-[#fce8a2] mb-1">
              {marriageVenue.name}
            </h3>
            <p className="font-serif text-xs text-[#d4af37] tracking-wider uppercase font-semibold mb-4">
              {marriageVenue.nameEnglish}
            </p>

            {/* Date & Time */}
            <div className="bg-[#1b0308]/70 border border-[#d4af37]/25 rounded-xl p-3.5 space-y-2 mb-4 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-tamil font-bold text-[#fce8a2]">{marriageVenue.dateTamil}</p>
                  <p className="text-[11px] text-[#eddcaa]/70 font-serif">{marriageVenue.dateEnglish}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 border-t border-[#d4af37]/15 pt-2">
                <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-tamil font-medium text-[#ffd700]">{marriageVenue.timeTamil}</p>
                  <p className="text-[11px] text-[#eddcaa]/70 font-serif">{marriageVenue.timeEnglish}</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#eedfa0]/90 mb-4">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <div>
                <p className="font-tamil font-medium">{marriageVenue.address}</p>
                {marriageVenue.city && <p className="text-xs text-[#eddcaa]/70 font-serif">{marriageVenue.city}</p>}
                {marriageVenue.landmark && (
                  <p className="text-[11px] text-[#d4af37] font-tamil mt-1">
                    அடையாளம்: {marriageVenue.landmark}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 border-t border-[#d4af37]/20">
            <a
              href={marriageVenue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#d5ad54] hover:bg-[#e4be63] text-[#24060c] font-tamil font-bold text-xs sm:text-sm shadow-[0_4px_15px_rgba(212,175,55,0.35)] transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>மண்டபத்தின் வழிகாட்டல் (Google Maps)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2. Reception Hall Card (Prn Thirumana Mandapam, Urapakkam) */}
        <div className="flex flex-col justify-between bg-gradient-to-b from-[#2a0810]/95 via-[#20050b]/95 to-[#160206]/95 border-2 border-amber-400/60 rounded-2xl p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.7)] relative overflow-hidden group hover:border-[#ffd700] transition-all">
          <div>
            {/* Top Event Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-400/60 text-[#ffd700] text-xs font-tamil font-bold shadow-md">
                💐 வரவேற்பு நிகழ்ச்சி (Reception)
              </span>
              <span className="font-serif text-[11px] text-[#eddcaa]/70">
                Urapakkam, Chennai
              </span>
            </div>

            {/* Hall Name */}
            <h3 className="font-tamil text-2xl sm:text-3xl font-bold text-[#fce8a2] mb-1">
              {receptionVenue.name}
            </h3>
            <p className="font-serif text-xs text-[#d4af37] tracking-wider uppercase font-semibold mb-4">
              {receptionVenue.nameEnglish}
            </p>

            {/* Date & Time */}
            <div className="bg-[#1b0308]/70 border border-[#d4af37]/25 rounded-xl p-3.5 space-y-2 mb-4 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-tamil font-bold text-[#fce8a2]">{receptionVenue.dateTamil}</p>
                  <p className="text-[11px] text-[#eddcaa]/70 font-serif">{receptionVenue.dateEnglish}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 border-t border-[#d4af37]/15 pt-2">
                <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-tamil font-medium text-[#ffd700]">{receptionVenue.timeTamil}</p>
                  <p className="text-[11px] text-[#eddcaa]/70 font-serif">{receptionVenue.timeEnglish}</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#eedfa0]/90 mb-4">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <div>
                <p className="font-tamil font-medium leading-relaxed">{receptionVenue.address}</p>
                {receptionVenue.city && <p className="text-xs text-[#eddcaa]/70 font-serif">{receptionVenue.city}</p>}
                {receptionVenue.landmark && (
                  <p className="text-[11px] text-[#ffd700] font-tamil mt-1.5 flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                    <span>{receptionVenue.landmark}</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 border-t border-[#d4af37]/20">
            <a
              href={receptionVenue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#d5ad54] hover:bg-[#e4be63] text-[#24060c] font-tamil font-bold text-xs sm:text-sm shadow-[0_4px_15px_rgba(212,175,55,0.35)] transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>வரவேற்பு மண்டபம் வழிகாட்டல் (Google Maps)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Family Contacts */}
      <div className="border-t border-[#d4af37]/25 pt-8 mt-10 max-w-2xl mx-auto text-center">
        <p className="font-tamil text-xs text-[#d4af37] uppercase tracking-widest mb-4 font-semibold">
          தொடர்புக்கு &amp; நல்வரவு (Contact &amp; Welcome)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {data.contacts.map((contact, i) => (
            <div
              key={i}
              className="bg-[#1b0408]/80 border border-[#d4af37]/25 rounded-xl p-3 text-left flex items-center justify-between"
            >
              <div>
                <p className="font-tamil text-xs font-semibold text-[#fce8a2]">
                  {contact.name}
                </p>
                <p className="text-[10px] text-[#eddcaa]/70">{contact.role}</p>
              </div>
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                className="p-1.5 rounded-full bg-amber-950/60 hover:bg-amber-900 border border-amber-500/40 text-amber-300 transition-colors"
                title="அழைக்கவும்"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

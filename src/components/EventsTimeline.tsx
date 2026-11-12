import React from 'react';
import type { WeddingData } from '../types/wedding';
import { Calendar, Clock, Sparkles, Utensils, HeartHandshake } from 'lucide-react';

interface EventsTimelineProps {
  events: WeddingData['events'];
}

export const EventsTimeline: React.FC<EventsTimelineProps> = ({ events = [] }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'party':
        return <HeartHandshake className="w-5 h-5 text-amber-300" />;
      case 'ring':
        return <Sparkles className="w-5 h-5 text-amber-300" />;
      case 'utensils':
        return <Utensils className="w-5 h-5 text-amber-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="font-serif text-xs tracking-[0.3em] text-[#d4af37] uppercase block mb-1">
          CELEBRATION SCHEDULE
        </span>
        <h2 className="font-tamil text-2xl sm:text-3xl font-bold text-[#f7e8a9] tracking-wide">
          சுப நிகழ்ச்சிகள்
        </h2>
        <div className="flex items-center justify-center gap-2 text-[#d4af37]/70 my-2">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/60"></span>
          <span className="text-xs">✦</span>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/60"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, idx) => (
          <div
            key={event.id || idx}
            className="relative flex flex-col justify-between bg-gradient-to-b from-[#2d0912]/90 to-[#1e0409]/95 border border-[#d4af37]/35 rounded-xl p-6 shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:border-[#d4af37]/70 transition-all duration-300 group hover:-translate-y-1.5"
          >
            {/* Top Badge Icon */}
            <div className="w-11 h-11 rounded-full bg-amber-950/80 border border-amber-400/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:scale-110 transition-transform">
              {getIcon(event.icon)}
            </div>

            {/* Event Titles */}
            <div className="mb-4">
              <h3 className="font-tamil text-xl font-bold text-[#fce8a2] mb-1">
                {event.titleTamil}
              </h3>
              <p className="font-serif text-xs text-[#d4af37] tracking-wider uppercase font-semibold">
                {event.titleEnglish}
              </p>
            </div>

            {/* Date & Time */}
            <div className="space-y-2.5 text-xs sm:text-sm text-[#eddcaa]/90 mb-4 border-t border-b border-[#d4af37]/20 py-3">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-amber-300/80 shrink-0 mt-0.5" />
                <div>
                  <p className="font-tamil">{event.dateTamil}</p>
                  <p className="text-[11px] text-[#eedfa0]/70 font-serif">{event.dateEnglish}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-300/80 shrink-0 mt-0.5" />
                <div>
                  <p className="font-tamil font-medium text-[#ffd700]">{event.timeTamil}</p>
                  <p className="text-[11px] text-[#eedfa0]/70 font-serif">{event.timeEnglish}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="font-tamil text-xs text-[#eddcaa]/80 leading-relaxed italic">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

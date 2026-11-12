import React from 'react';
import type { WeddingData } from '../types/wedding';
import { CalendarPlus, Download, Share2 } from 'lucide-react';

interface CalendarExportProps {
  data: WeddingData;
}

export const CalendarExport: React.FC<CalendarExportProps> = ({ data }) => {
  const isBrideFirst = data.displayOrder === 'brideFirst';
  const firstEnglish = isBrideFirst ? data.brideEnglish : data.groomEnglish;
  const secondEnglish = isBrideFirst ? data.groomEnglish : data.brideEnglish;
  const firstTamil = isBrideFirst ? data.brideTamil : data.groomTamil;
  const secondTamil = isBrideFirst ? data.groomTamil : data.brideTamil;

  // Generate Google Calendar Link
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Wedding: ${firstEnglish} & ${secondEnglish}`);
    const details = encodeURIComponent(
      `Auspicious Wedding of ${firstTamil} and ${secondTamil} (${firstEnglish} & ${secondEnglish}).\nMarriage Venue: ${data.marriageVenue.name}, ${data.marriageVenue.address}.\nReception Venue: ${data.receptionVenue.name}, ${data.receptionVenue.address}.`
    );
    const location = encodeURIComponent(`${data.marriageVenue.name}, ${data.marriageVenue.address}`);
    // 2026-12-14 09:00:00 to 12:00:00 IST (UTC+5:30 -> 20261214T033000Z to 20261214T063000Z)
    const dates = '20261214T033000Z/20261214T063000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const downloadIcsFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invitation//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Wedding: ${firstEnglish} & ${secondEnglish}
DESCRIPTION:Wedding of ${firstTamil} and ${secondTamil} at ${data.marriageVenue.name}
LOCATION:${data.marriageVenue.name}, ${data.marriageVenue.address}
DTSTART:20261214T033000Z
DTEND:20261214T063000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Wedding-${firstEnglish}-${secondEnglish}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `திருமண அழைப்பிதழ் | ${data.groomTamil} & ${data.brideTamil}`,
          text: `எங்கள் வாழ்வின் இனிய தொடக்கத்தில் தங்களின் வருகையையும் வாழ்த்துகளையும் அன்புடன் வேண்டுகிறோம். ${data.weddingDateDisplay}`,
          url: window.location.href,
        });
      } catch {
        // cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('அழைப்பிதழ் இணைப்பு நகலெடுக்கப்பட்டது! (Link copied to clipboard)');
    }
  };

  return (
    <div className="py-8 px-4 text-center max-w-xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={createGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#26060e] hover:bg-[#390915] border border-[#d4af37]/50 text-[#fce8a2] text-xs sm:text-sm font-tamil transition-all shadow-md hover:border-[#d4af37]"
        >
          <CalendarPlus className="w-4 h-4 text-amber-300" />
          <span>Google காலெண்டரில் சேர்க்க</span>
        </a>

        <button
          onClick={downloadIcsFile}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#26060e] hover:bg-[#390915] border border-[#d4af37]/50 text-[#fce8a2] text-xs sm:text-sm font-tamil transition-all shadow-md hover:border-[#d4af37] cursor-pointer"
        >
          <Download className="w-4 h-4 text-amber-300" />
          <span>நினைவூட்டல் பதிவிறக்கம் (.ics)</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-950/70 hover:bg-amber-900 border border-amber-500/50 text-[#ffd700] text-xs sm:text-sm font-tamil transition-all shadow-md cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          <span>பகிரவும் (Share)</span>
        </button>
      </div>
    </div>
  );
};

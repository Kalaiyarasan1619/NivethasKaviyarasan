import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // ISO string
  astrologyTamil?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, astrologyTamil }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { labelTamil: "நாட்கள்", labelEnglish: "DAYS", value: timeLeft.days },
    { labelTamil: "மணிகள்", labelEnglish: "HOURS", value: timeLeft.hours },
    { labelTamil: "நிமிடங்கள்", labelEnglish: "MINUTES", value: timeLeft.minutes },
    { labelTamil: "வினாடிகள்", labelEnglish: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-8 text-center px-4">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="w-12 h-[1px] bg-[#d4af37]/40"></span>
        <h3 className="font-tamil text-base sm:text-lg text-[#eddcaa] font-semibold tracking-wider">
          திருமண நன்னாளுக்கு இன்னும்
        </h3>
        <span className="w-12 h-[1px] bg-[#d4af37]/40"></span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {units.map((unit, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#28070e]/80 border border-[#d4af37]/35 rounded-lg py-3 sm:py-4 px-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)] backdrop-blur-sm transform hover:-translate-y-1 transition-transform"
          >
            <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#fce8a2] tracking-normal">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="font-tamil text-[11px] sm:text-xs text-[#eedfa0] mt-1 font-medium">
              {unit.labelTamil}
            </span>
            <span className="font-serif text-[9px] sm:text-[10px] text-[#d4af37]/70 tracking-widest uppercase">
              {unit.labelEnglish}
            </span>
          </div>
        ))}
      </div>

      {astrologyTamil && (
        <div className="mt-4 p-2.5 rounded-lg bg-[#24060d]/60 border border-[#d4af37]/25 text-xs text-[#eedfa0] font-tamil max-w-lg mx-auto">
          <p className="font-medium text-[#ffd700]">✨ {astrologyTamil}</p>
        </div>
      )}
    </div>
  );
};


import React from 'react';
import { Music } from 'lucide-react';

interface MusicButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicButton: React.FC<MusicButtonProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`group relative flex items-center gap-2.5 px-4 py-1.5 rounded-full border transition-all duration-300 text-xs sm:text-sm font-medium tracking-wide ${
        isPlaying
          ? 'bg-amber-950/60 border-amber-400/80 text-[#ffd700] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
          : 'bg-[#23060c]/80 border-[#d4af37]/40 text-[#eddcaa]/90 hover:border-[#d4af37] hover:text-[#fff2c6] hover:bg-[#320a13]'
      }`}
      title={isPlaying ? "இசையை நிறுத்தவும்" : "இசையை இயக்கவும்"}
    >
      {isPlaying ? (
        <div className="flex items-center gap-1.5">
          {/* Animated Equalizer Bars */}
          <div className="flex items-end gap-0.5 h-3.5 w-3.5">
            <span className="w-0.5 bg-amber-300 animate-[bounce_0.8s_infinite] h-2"></span>
            <span className="w-0.5 bg-amber-300 animate-[bounce_1.2s_infinite] h-3.5"></span>
            <span className="w-0.5 bg-amber-300 animate-[bounce_0.6s_infinite] h-1.5"></span>
            <span className="w-0.5 bg-amber-300 animate-[bounce_1.0s_infinite] h-3"></span>
          </div>
          <span className="font-tamil">இசையை நிறுத்தவும்</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
          <Music className="w-3.5 h-3.5 text-amber-300/80 group-hover:scale-110 transition-transform" />
          <span className="font-tamil">இசையை இயக்கவும்</span>
        </div>
      )}
    </button>
  );
};

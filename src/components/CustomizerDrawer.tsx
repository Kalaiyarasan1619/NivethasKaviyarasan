import React, { useState } from 'react';
import type { WeddingData } from '../types/wedding';
import { defaultWeddingData, nivethaKaviyarasanWithInitials, kaviyarasanNivethaPreset } from '../data/defaultData';
import { SlidersHorizontal, X, RotateCcw, Check, ArrowLeftRight } from 'lucide-react';

interface CustomizerDrawerProps {
  currentData: WeddingData;
  onUpdateData: (newData: WeddingData) => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  currentData,
  onUpdateData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<WeddingData>(currentData);

  const applyPreset = (preset: WeddingData) => {
    setFormData(preset);
    onUpdateData(preset);
  };

  const handleSwapOrder = () => {
    const newOrder: 'brideFirst' | 'groomFirst' = formData.displayOrder === 'groomFirst' ? 'brideFirst' : 'groomFirst';
    const newInitials = newOrder === 'groomFirst' ? 'K ♥ N' : 'N ♥ K';
    const updated: WeddingData = {
      ...formData,
      displayOrder: newOrder,
      initials: newInitials,
    };
    setFormData(updated);
    onUpdateData(updated);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateData(formData);
    setIsOpen(false);
  };

  return (
    <>
      {/* Subtle Floating Toggle Button */}
      <button
        onClick={() => {
          setFormData(currentData);
          setIsOpen(true);
        }}
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#20050b]/90 hover:bg-[#340813] border border-[#d4af37]/60 text-[#ffd700] shadow-[0_4px_15px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 transform hover:scale-110 cursor-pointer opacity-75 hover:opacity-100"
        title="அழைப்பிதழ் திருத்துதல் (Customize)"
      >
        <SlidersHorizontal className="w-4 h-4 text-amber-300" />
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-md bg-[#1d0408] border-l border-[#d4af37]/40 h-full overflow-y-auto p-6 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#d4af37]/25 pb-4 mb-5">
                <div>
                  <h3 className="font-tamil font-bold text-lg text-[#fce8a2]">
                    அழைப்பிதழ் திருத்துதல்
                  </h3>
                  <p className="font-serif text-[11px] text-[#d4af37] tracking-wider uppercase">
                    NIVETHA &amp; KAVIYARASAN INVITATION
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-[#eddcaa] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Order Quick Swap */}
              <div className="mb-5 p-3 rounded-xl bg-[#28070e] border border-[#d4af37]/30 flex items-center justify-between">
                <div>
                  <p className="font-tamil text-xs text-[#eedfa0] font-semibold">பெயர்கள் வரிசை:</p>
                  <p className="font-tamil text-sm text-[#ffd700] font-bold">
                    {formData.displayOrder === 'groomFirst' ? 'கவியரசன் ♥ நிவேதா' : 'நிவேதா ♥ கவியரசன்'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleSwapOrder}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#3a0a14] hover:bg-[#4d0d1b] border border-[#d4af37]/50 rounded-lg text-xs font-tamil text-[#fce8a2] cursor-pointer transition-colors"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5 text-amber-300" />
                  <span>மாற்று</span>
                </button>
              </div>

              {/* Presets */}
              <div className="mb-6">
                <label className="block font-tamil text-xs text-[#eedfa0] mb-2 font-semibold">
                  முன் அமைக்கப்பட்ட மாதிரிகள் (Presets):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => applyPreset(defaultWeddingData)}
                    className="p-2.5 rounded-lg border border-[#d4af37]/40 bg-[#28070e] hover:bg-[#390915] text-left transition-colors cursor-pointer"
                  >
                    <p className="font-tamil font-bold text-xs text-[#ffd700]">நிவேதா ♥ கவியரசன்</p>
                    <p className="text-[10px] text-[#eddcaa]/70">மணமகள் முதலில்</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => applyPreset(kaviyarasanNivethaPreset)}
                    className="p-2.5 rounded-lg border border-[#d4af37]/40 bg-[#28070e] hover:bg-[#390915] text-left transition-colors cursor-pointer"
                  >
                    <p className="font-tamil font-bold text-xs text-[#ffd700]">கவியரசன் ♥ நிவேதா</p>
                    <p className="text-[10px] text-[#eddcaa]/70">மணமகன் முதலில்</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => applyPreset(nivethaKaviyarasanWithInitials)}
                    className="p-2.5 rounded-lg border border-[#d4af37]/40 bg-[#28070e] hover:bg-[#390915] text-left transition-colors cursor-pointer"
                  >
                    <p className="font-tamil font-bold text-xs text-[#ffd700]">இனிஷியலுடன்</p>
                    <p className="text-[10px] text-[#eddcaa]/70">நி. நிவேதா &amp; க. கவியரசன்</p>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-tamil text-[#eedfa0] mb-1">
                      மணமகள் பெயர் (தமிழ்)
                    </label>
                    <input
                      type="text"
                      value={formData.brideTamil}
                      onChange={(e) => setFormData({ ...formData, brideTamil: e.target.value })}
                      className="w-full bg-[#130205] border border-[#d4af37]/30 rounded px-2.5 py-1.5 text-xs text-[#fce8a2] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-tamil text-[#eedfa0] mb-1">
                      மணமகன் பெயர் (தமிழ்)
                    </label>
                    <input
                      type="text"
                      value={formData.groomTamil}
                      onChange={(e) => setFormData({ ...formData, groomTamil: e.target.value })}
                      className="w-full bg-[#130205] border border-[#d4af37]/30 rounded px-2.5 py-1.5 text-xs text-[#fce8a2] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-serif text-[#eedfa0] mb-1">
                      Bride (English)
                    </label>
                    <input
                      type="text"
                      value={formData.brideEnglish}
                      onChange={(e) => setFormData({ ...formData, brideEnglish: e.target.value })}
                      className="w-full bg-[#130205] border border-[#d4af37]/30 rounded px-2.5 py-1.5 text-xs text-[#fce8a2] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-serif text-[#eedfa0] mb-1">
                      Groom (English)
                    </label>
                    <input
                      type="text"
                      value={formData.groomEnglish}
                      onChange={(e) => setFormData({ ...formData, groomEnglish: e.target.value })}
                      className="w-full bg-[#130205] border border-[#d4af37]/30 rounded px-2.5 py-1.5 text-xs text-[#fce8a2] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-serif text-[#eedfa0] mb-1">
                      Initials (Header)
                    </label>
                    <input
                      type="text"
                      value={formData.initials}
                      onChange={(e) => setFormData({ ...formData, initials: e.target.value })}
                      className="w-full bg-[#130205] border border-[#d4af37]/30 rounded px-2.5 py-1.5 text-xs text-[#fce8a2] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-serif text-[#eedfa0] mb-1">
                      Wedding Date
                    </label>
                    <input
                      type="text"
                      value={formData.weddingDateDisplay}
                      onChange={(e) => setFormData({ ...formData, weddingDateDisplay: e.target.value })}
                      className="w-full bg-[#130205] border border-[#d4af37]/30 rounded px-2.5 py-1.5 text-xs text-[#fce8a2] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-tamil text-[#eedfa0] mb-1">
                    திருமண மண்டபம் (Marriage Hall)
                  </label>
                  <input
                    type="text"
                    value={formData.marriageVenue.name}
                    onChange={(e) => setFormData({
                      ...formData,
                      marriageVenue: { ...formData.marriageVenue, name: e.target.value }
                    })}
                    className="w-full bg-[#130205] border border-[#d4af37]/30 rounded px-2.5 py-1.5 text-xs text-[#fce8a2] focus:border-[#d4af37] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-tamil text-[#eedfa0] mb-1">
                    வரவேற்பு மண்டபம் (Reception Hall)
                  </label>
                  <input
                    type="text"
                    value={formData.receptionVenue.name}
                    onChange={(e) => setFormData({
                      ...formData,
                      receptionVenue: { ...formData.receptionVenue, name: e.target.value }
                    })}
                    className="w-full bg-[#130205] border border-[#d4af37]/30 rounded px-2.5 py-1.5 text-xs text-[#fce8a2] focus:border-[#d4af37] outline-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#d5ad54] hover:bg-[#e4be63] text-[#24060c] font-tamil font-bold py-2 rounded text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    <span>மாற்றங்களை சேமிக்கவும்</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(defaultWeddingData);
                      onUpdateData(defaultWeddingData);
                    }}
                    className="p-2 rounded bg-white/5 hover:bg-white/10 text-[#eddcaa] transition-colors cursor-pointer"
                    title="மீட்டமை (Reset)"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            <div className="border-t border-[#d4af37]/20 pt-4 text-center">
              <p className="text-[10px] text-[#eddcaa]/60 font-serif">
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState, useEffect } from 'react';
import type { WishMessage } from '../types/wedding';
import { Send, MessageSquareHeart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const WishesSection: React.FC = () => {
  const [wishes, setWishes] = useState<WishMessage[]>(() => {
    const saved = localStorage.getItem('wedding_wishes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    return [
      {
        id: '1',
        name: 'கார்த்திக் & சுமித்ரா',
        message: 'இருவருக்கும் எங்களது மனமார்ந்த திருமண நல்வாழ்த்துகள்! பல்லாண்டு காலம் நலமுடன் வாழ்க!',
        createdAt: 'சற்று முன்',
        relation: 'நண்பர்கள்'
      },
      {
        id: '2',
        name: 'Suresh Kumar & Family',
        message: 'Wishing you both a lifetime of love, joy, and togetherness! Happy Wedding!',
        createdAt: '12 நவம்பர்',
        relation: 'உறவினர்'
      },
      {
        id: '3',
        name: 'ஆனந்த்',
        message: 'இனிய திருமண நல்வாழ்த்துகள்! உங்கள் இல்லறப் பயணம் இனிதாக அமையட்டும்.',
        createdAt: 'இன்று',
        relation: 'நண்பர்'
      }
    ];
  });

  const [name, setName] = useState('');
  const [relation, setRelation] = useState('நண்பர்');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('wedding_wishes', JSON.stringify(wishes));
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: WishMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      relation,
      createdAt: 'இப்போது',
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#ff6b81', '#f4e5a9', '#ff4757', '#e056fd'],
      });
    } catch {
      // ignore
    }

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="font-serif text-xs tracking-[0.3em] text-[#d4af37] uppercase block mb-1">
          WISHES &amp; BLESSINGS
        </span>
        <h2 className="font-tamil text-2xl sm:text-3xl font-bold text-[#f7e8a9] tracking-wide">
          மணமக்களுக்கு வாழ்த்துகள்
        </h2>
        <div className="flex items-center justify-center gap-2 text-[#d4af37]/70 my-2">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/60"></span>
          <span className="text-xs">✦</span>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/60"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Form Column */}
        <div className="md:col-span-5 bg-gradient-to-b from-[#2d0912]/95 to-[#1c0409]/95 border border-[#d4af37]/35 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2.5 mb-4 text-[#ffd700]">
            <MessageSquareHeart className="w-5 h-5" />
            <h3 className="font-tamil font-bold text-lg text-[#fce8a2]">உங்கள் வாழ்த்தை பதியுங்கள்</h3>
          </div>

          {submitted && (
            <div className="mb-4 p-3 rounded-lg bg-amber-950/70 border border-amber-400/60 text-[#ffd700] text-xs font-tamil text-center animate-fade-in">
              ✨ தங்களின் வாழ்த்துகள் பதிவு செய்யப்பட்டது! மிக்க நன்றி!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-tamil text-xs text-[#eedfa0] mb-1">
                தங்களின் பெயர் (Your Name):
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="எ.கா: விஜய் / Priya"
                className="w-full bg-[#160206] border border-[#d4af37]/30 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#f7e8a9] placeholder-[#eddcaa]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
              />
            </div>

            <div>
              <label className="block font-tamil text-xs text-[#eedfa0] mb-1">
                உறவு முறை (Relationship):
              </label>
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full bg-[#160206] border border-[#d4af37]/30 rounded-lg px-3 py-2 text-xs sm:text-sm text-[#f7e8a9] focus:outline-none focus:border-[#d4af37]"
              >
                <option value="நண்பர்" className="bg-[#1b0307]">நண்பர் (Friend)</option>
                <option value="உறவினர்" className="bg-[#1b0307]">உறவினர் (Relative)</option>
                <option value="சக ஊழியர்" className="bg-[#1b0307]">சக ஊழியர் (Colleague)</option>
                <option value="நலம் விரும்பி" className="bg-[#1b0307]">நலம் விரும்பி (Well-wisher)</option>
              </select>
            </div>

            <div>
              <label className="block font-tamil text-xs text-[#eedfa0] mb-1">
                வாழ்த்து செய்தி (Your Wishes):
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="மணமக்களுக்கு தங்களின் ஆசிகளையும் வாழ்த்துகளையும் பகிருங்கள்..."
                className="w-full bg-[#160206] border border-[#d4af37]/30 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#f7e8a9] placeholder-[#eddcaa]/30 focus:outline-none focus:border-[#d4af37] resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#d5ad54] hover:bg-[#e4be63] text-[#24060c] font-tamil font-bold py-2.5 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>வாழ்த்துகளை அனுப்பவும்</span>
            </button>
          </form>
        </div>

        {/* Wishes List Column */}
        <div className="md:col-span-7 space-y-3.5 max-h-[440px] overflow-y-auto pr-1">
          {wishes.map((w) => (
            <div
              key={w.id}
              className="bg-[#24060d]/80 border border-[#d4af37]/25 rounded-xl p-4 shadow-md backdrop-blur-sm hover:border-[#d4af37]/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-tamil font-bold text-sm text-[#fce8a2]">
                    {w.name}
                  </span>
                  {w.relation && (
                    <span className="text-[10px] bg-amber-950/70 border border-amber-500/30 text-amber-300 px-2 py-0.5 rounded-full font-tamil">
                      {w.relation}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-[#eddcaa]/60 font-serif">
                  {w.createdAt}
                </span>
              </div>
              <p className="font-tamil text-xs sm:text-sm text-[#eedfa0]/90 leading-relaxed">
                &ldquo;{w.message}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

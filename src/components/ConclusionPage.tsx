import React, { useState } from 'react';
import { BOOKLET_CONTENT } from '../data/content';
import confetti from 'canvas-confetti';
import {
  Clock,
  Flag,
  HeartHandshake,
  PartyPopper,
  Zap,
} from 'lucide-react';

export const ConclusionPage: React.FC = () => {
  const {
    closingStatement,
    stepOfChange,
    sacredPledge,
    callToAction,
  } = BOOKLET_CONTENT;

  const [hasPledged, setHasPledged] = useState(false);

  const triggerCelebration = () => {
    setHasPledged(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#006233', '#ffffff', '#d21034', '#d97706'],
    });
  };

  return (
    <section className="booklet-page py-6 px-4 sm:px-8 max-w-6xl mx-auto space-y-8 text-right">
      {/* 1. البيان الختامي الرسمي للحملة (الصفحات 31-33) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200 mb-3">
          <Flag className="w-3.5 h-3.5 text-red-600" />
          <span>{closingStatement.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight mb-4 flex items-center gap-2">
          <span>{closingStatement.title}</span>
          <span className="text-3xl">🗳️</span>
        </h2>

        <div className="text-base sm:text-lg font-bold text-emerald-800 bg-emerald-50 p-4 rounded-2xl border border-emerald-100 mb-6">
          {closingStatement.greeting}
        </div>

        <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed text-justify">
          {closingStatement.body.map((para, idx) => (
            <p key={idx} className="leading-loose">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* 2. التغيير خطوة.. وتبدأ بقرارك أنت! (الصفحات 33-34) */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-50 to-white rounded-3xl p-6 sm:p-8 border-2 border-amber-400/50 shadow-sm">
        <div className="flex items-center gap-2 text-amber-700 font-black text-xl sm:text-2xl mb-3">
          <Zap className="w-6 h-6 text-amber-600 shrink-0" />
          <h3>{stepOfChange.title}</h3>
        </div>

        <p className="text-base sm:text-lg text-slate-800 font-semibold mb-4 leading-relaxed">
          {stepOfChange.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stepOfChange.bulletPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl border border-amber-200 shadow-xs flex items-start gap-3"
            >
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. عهد مقطوع.. والوعد غداً موصول (الصفحات 34-35) */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-800/40">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-3">
          <HeartHandshake className="w-4 h-4 text-emerald-400" />
          <span>{sacredPledge.badge}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 flex items-center gap-2">
          <span>{sacredPledge.title}</span>
          <span className="text-2xl">🤝</span>
        </h3>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-4">
          <p className="text-base sm:text-lg text-emerald-100 leading-relaxed text-justify">
            «{sacredPledge.text}»
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-300 border-t border-emerald-800/40 pt-4">
          <span className="font-semibold text-amber-300">
            • {sacredPledge.consultativeCouncilNotice}
          </span>
          <span className="font-mono text-emerald-400">عهدة 2026 - 2031</span>
        </div>
      </div>

      {/* 4. الموعد قد حان & اختاروا الأكفأ (الصفحات 35-36) */}
      <div className="bg-gradient-to-b from-emerald-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-700 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-black backdrop-blur-sm">
          <Clock className="w-4 h-4" />
          <span>{callToAction.timeHasCome}</span>
        </div>

        <p className="text-lg sm:text-2xl font-bold max-w-3xl mx-auto leading-relaxed text-emerald-50">
          {callToAction.encouragement}
        </p>

        <div className="py-4">
          <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-amber-300 tracking-tight mb-2 drop-shadow-md">
            {callToAction.chooseTheBest}
          </div>
          <div className="text-lg sm:text-xl font-bold text-white">
            {callToAction.partyCall}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={triggerCelebration}
            className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-3 transform hover:scale-105 active:scale-95"
          >
            <PartyPopper className="w-6 h-6 text-slate-900" />
            <span>
              {hasPledged ? 'تم تسجيل عهد الوفاء والتأييد!' : 'أنا أشارك في صناعة المستقبل!'}
            </span>
          </button>
        </div>

        <div className="border-t border-emerald-700/60 pt-6 space-y-3">
          <div className="text-xl sm:text-2xl font-extrabold text-white">
            {callToAction.finalMotto}
          </div>
          <div className="text-sm sm:text-base font-bold text-emerald-200">
            {callToAction.martyrsMemorial}
          </div>
        </div>
      </div>
    </section>
  );
};

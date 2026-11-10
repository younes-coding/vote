import React from 'react';
import { BOOKLET_CONTENT } from '../data/content';
import {
  FileCheck,
  Flame,
  Users,
  Target,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export const GrandPlanPage: React.FC = () => {
  const { grandPlan } = BOOKLET_CONTENT;

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck className="w-8 h-8 text-emerald-600" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-red-600" />;
      case 'Users':
        return <Users className="w-8 h-8 text-blue-600" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <section className="booklet-page py-6 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
      {/* رأس الصفحة */}
      <div className="bg-gradient-to-l from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-800/40 text-right">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-3">
          <Target className="w-4 h-4 text-emerald-400" />
          <span>{grandPlan.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-3 flex items-center gap-3">
          <span>{grandPlan.title}</span>
          <span className="text-3xl">🎯</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
          {grandPlan.subtitle}
        </p>
      </div>

      {/* الركائز الثلاث الكبرى */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {grandPlan.pillars.map((pillar, index) => (
          <div
            key={pillar.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200/90 hover:border-emerald-500/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-right relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-mono font-black text-sm flex items-center justify-center shadow-xs">
                    {index + 1}
                  </span>
                </div>
                <span className="bg-slate-100 text-slate-700 text-xs font-black px-3 py-1.5 rounded-full border border-slate-200">
                  {pillar.badgeText}
                </span>
              </div>

              <div className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-1">
                الركيزة {pillar.numberText}
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 leading-snug">
                {pillar.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify mb-4">
                {pillar.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>أولوية تنفيذية فورية</span>
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
            </div>
          </div>
        ))}
      </div>

      {/* بانر الديمقراطية التشاركية - المجلس الاستشاري الجواري */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-white rounded-3xl p-6 sm:p-8 border border-emerald-200 text-right">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>فضاء دوري ملزم كل 6 أشهر</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900">
              المجلس الاستشاري الجواري لبلديات بني سنوس
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl">
              آلية حقيقية للمساءلة والمتابعة تجمع نواب المجلس مع الجمعيات، الفلاحين، الحرفيين وشباب المنطقة
              لرفع انشغالات الدائرة إلى المجلس الولائي بصوت واحد لا يهدأ.
            </p>
          </div>

          <div className="shrink-0 bg-white p-4 rounded-2xl shadow-sm border border-emerald-100 text-center min-w-[180px]">
            <div className="text-3xl font-black text-emerald-700 font-mono">2</div>
            <div className="text-xs font-bold text-slate-700 mt-1">تقرير علني سنوياً</div>
            <div className="text-[11px] text-slate-500">طيلة العهدة الانتخابية</div>
          </div>
        </div>
      </div>
    </section>
  );
};


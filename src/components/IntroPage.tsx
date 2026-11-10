import React from 'react';
import { BOOKLET_CONTENT } from '../data/content';
import {
  Headphones,
  MapPin,
  Scale,
  Cog,
  SearchCheck,
  CalendarCheck,
  Users,
  Quote,
  CheckCircle,
} from 'lucide-react';

interface IntroPageProps {
  onOpenImageModal: (src: string, title: string) => void;
}

export const IntroPage: React.FC<IntroPageProps> = ({ onOpenImageModal }) => {
  const { introduction, citizenCharter } = BOOKLET_CONTENT;

  // Icon mapper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-emerald-600" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-emerald-600" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-emerald-600" />;
      case 'Cog':
        return <Cog className="w-5 h-5 text-emerald-600" />;
      case 'SearchCheck':
        return <SearchCheck className="w-5 h-5 text-emerald-600" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-emerald-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="booklet-page py-6 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
      {/* 1. نص الترشح والمقدمة الرسمية (الصفحة 1 من المصدر) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 text-right">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-3">
          <span>{introduction.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4 flex items-center gap-2">
          <span>{introduction.title}</span>
          <span className="text-2xl">🤝</span>
        </h2>

        <div className="text-lg font-bold text-emerald-800 mb-4 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
          {introduction.greeting}
        </div>

        <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
          {introduction.body.map((paragraph, idx) => (
            <p key={idx} className="text-justify leading-loose">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
          <span className="font-semibold text-slate-700">
            حزب جبهة المستقبل - قائمة المجلس الشعبي الولائي (03)
          </span>
          <span className="bg-slate-100 px-3 py-1 rounded-lg font-mono text-xs text-slate-600">
            تلمسان • بني سنوس • العزايل • بني بحدل
          </span>
        </div>
      </div>

      {/* 2. رسالتنا والتزاماتنا تجاه المواطن (ميثاق الشرف والمبادئ الميدانية) */}
      <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-800/40 text-right">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-emerald-800/40 pb-5">
          <div>
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              ميثاق الشرف والمسؤولية
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {citizenCharter.title}
            </h3>
            <p className="text-slate-300 text-sm mt-1">{citizenCharter.subtitle}</p>
          </div>

          <button
            onClick={() =>
              onOpenImageModal(
                '/assets/commitments-charter.jpg',
                'وثيقة رسالتنا والتزاماتنا تجاه المواطن - القائمة رقم 03'
              )
            }
            className="self-start md:self-auto px-4 py-2 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-200 border border-emerald-500/40 text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2"
          >
            <span>عرض وثيقة الالتزامات الأصلية</span>
          </button>
        </div>

        {/* المقولة المركزية */}
        <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 mb-6 flex items-start gap-3">
          <Quote className="w-8 h-8 text-amber-400 shrink-0 opacity-80" />
          <p className="text-base sm:text-xl font-bold text-emerald-100 leading-relaxed">
            «{citizenCharter.quote}»
          </p>
        </div>

        {/* شبكة الالتزامات السبعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {citizenCharter.commitments.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 hover:bg-white/10 transition-all border border-white/10 rounded-2xl p-4 text-right flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  {getIcon(item.icon)}
                </div>
                <h4 className="font-extrabold text-base text-white">{item.title}</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* الإيمان القاطع في الختام */}
        <div className="bg-red-950/40 border border-red-500/30 rounded-2xl p-4 text-center sm:text-right flex items-center justify-between flex-wrap gap-3">
          <div className="text-sm sm:text-base font-bold text-red-200">
            «{citizenCharter.closingFaith}»
          </div>
          <span className="text-xs font-extrabold text-white bg-red-600 px-3 py-1 rounded-full shadow">
            القائمة 03
          </span>
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { BOOKLET_CONTENT } from '../data/content';
import {
  AlertTriangle,
  Check,
  Info,
  Maximize2,
  Vote,
  XCircle,
} from 'lucide-react';

interface CandidatesAndVotingPageProps {
  onOpenImageModal: (src: string, title: string) => void;
}

export const CandidatesAndVotingPage: React.FC<CandidatesAndVotingPageProps> = ({
  onOpenImageModal,
}) => {
  const { votingGuide, campaignInfo } = BOOKLET_CONTENT;

  return (
    <section className="booklet-page py-6 px-4 sm:px-8 max-w-6xl mx-auto space-y-8 text-right">
      {/* 1. رأس القسم */}
      <div className="border-b border-slate-200 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
          <Vote className="w-4 h-4 text-emerald-600" />
          <span>القائمة الانتخابية رقم {campaignInfo.listNumber}</span>
          <span>•</span>
          <span>{campaignInfo.governorate}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
          قائمة المترشحين ودليل التصويت الصحيح
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          تعرف على كفاءات القائمة رقم 03 وكيفية تثبيت صوتك لضمان عدم إلغائه
        </p>
      </div>

      {/* 2. بطاقة قائمة المترشحين الـ 54 لولاية تلمسان مع تركيز على مرشح الدائرة */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              كفاءات وطنية متنوعة من مختلف بلديات الولاية
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              قائمة المترشحين لانتخاب المجلس الشعبي الولائي
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              تضم القائمة نخبة من الأساتذة، الإطارات، المحامين، الأطباء، المهندسين والشباب الجامعيين،
              يمثلون التنوع التنموي لولاية تلمسان.
            </p>
          </div>

          <button
            onClick={() =>
              onOpenImageModal(
                '/assets/candidates-full-list.jpg',
                'القائمة الكاملة لمترشحي حزب جبهة المستقبل (03) للمجلس الشعبي الولائي لتلمسان'
              )
            }
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow transition-all cursor-pointer flex items-center gap-2 shrink-0"
          >
            <Maximize2 className="w-4 h-4" />
            <span>عرض القائمة الكاملة مكبرة</span>
          </button>
        </div>

        {/* عرض تفاعلي لمصلق القائمة ومربع المرشح */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div
            onClick={() =>
              onOpenImageModal(
                '/assets/candidates-full-list.jpg',
                'قائمة المترشحين الـ 54 - جبهة المستقبل تلمسان'
              )
            }
            className="md:col-span-5 relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-50"
          >
            <img
              src="/assets/candidates-full-list.jpg"
              alt="قائمة المترشحين الرسمية لولاية تلمسان - القائمة رقم 03"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <span className="text-white text-xs font-bold bg-black/70 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>انقر للتكبير وقراءة الأسماء</span>
              </span>
            </div>
          </div>

          {/* تسليط الضوء على مرشح الدائرة */}
          <div className="md:col-span-7 space-y-4">
            <div className="bg-gradient-to-l from-emerald-50 via-slate-50 to-white p-5 rounded-2xl border-2 border-emerald-500/40">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-red-600 text-white font-black text-xs px-2.5 py-1 rounded-md">
                  المرشح رقم 42
                </span>
                <span className="text-xs font-bold text-emerald-800">
                  ممثل دائرة بني سنوس
                </span>
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-1">
                {campaignInfo.featuredCandidate.name}
              </h4>
              <p className="text-sm text-slate-700 mb-3">
                الصفة المهنية: <strong className="text-slate-900">{campaignInfo.featuredCandidate.profession}</strong> • حامل مشروع تنمية جبلية شامل
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-2">
                سيمثلكم بأمانة وشجاعة في المجلس الشعبي الولائي، من خلال المرافعة عن مشاريع التنمية المحلية، شبكات الري، فك العزلة واستحداث الأوعية السكنية ببلديات بني سنوس، العزايل، وبني بحدل.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 text-xs text-slate-600 flex items-center gap-3">
              <Info className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                تذكر عند دخول المعزل: التصويت على القائمة رقم 03 واختيار المترشح رقم 42 لعوق محمد.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. دليل التصويت الرسمي خطوة بخطوة (طريقة التصويت الصحيحة) */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              إرشادات قانونية ملزمة
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-white mt-1">
              {votingGuide.title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">{votingGuide.subtitle}</p>
          </div>

          <button
            onClick={() =>
              onOpenImageModal(
                '/assets/voting-guide.jpg',
                'الملصق الإرشادي الرسمي: طريقة التصويت في الانتخابات المحلية 2026'
              )
            }
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>عرض الملصق التوجيهي</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {votingGuide.steps.map((step) => (
            <div
              key={step.stepNumber}
              className={`rounded-2xl p-5 border text-right transition-all flex flex-col justify-between ${
                step.warning
                  ? 'bg-red-950/40 border-red-500/50 hover:bg-red-950/60'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${
                      step.warning
                        ? 'bg-red-600 text-white'
                        : 'bg-emerald-600 text-white'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  {step.warning && (
                    <span className="flex items-center gap-1 text-red-400 text-xs font-extrabold bg-red-900/50 px-2.5 py-0.5 rounded-full border border-red-500/40">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>صوت ملغى</span>
                    </span>
                  )}
                </div>

                <h4 className="text-base sm:text-lg font-black text-white mb-2 leading-snug">
                  {step.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-400">
                {step.warning ? (
                  <span className="text-red-300 font-bold flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5 text-red-400 inline" />
                    احذر وضع علامة على كامل الورقة
                  </span>
                ) : (
                  <span className="text-emerald-300 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400 inline" />
                    خطوة صحيحة ومعتمدة
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

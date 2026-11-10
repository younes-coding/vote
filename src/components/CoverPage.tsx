import React from 'react';
import { BOOKLET_CONTENT } from '../data/content';
import { ArrowLeft, CheckCircle2, ChevronDown, Maximize2, Sparkles } from 'lucide-react';

interface CoverPageProps {
  onStartReading: () => void;
  onOpenImageModal: (src: string, title: string) => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({
  onStartReading,
  onOpenImageModal,
}) => {
  const { campaignInfo } = BOOKLET_CONTENT;

  return (
    <section className="booklet-page min-h-[calc(100vh-5rem)] flex flex-col justify-between py-6 px-4 sm:px-8 max-w-6xl mx-auto pb-32">
      {/* 1. شريط الرأس العلوي لحزب جبهة المستقبل */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-100 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-black text-xl shadow-md border-2 border-emerald-600">
            {campaignInfo.listNumber}
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-800 tracking-wider">
              {campaignInfo.partySubtitle}
            </div>
            <h1 className="text-lg sm:text-xl font-black text-slate-900 m-0">
              {campaignInfo.partyName}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            انتخابات {campaignInfo.year}
          </span>
          <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-extrabold font-mono">
            القائمة رقم {campaignInfo.listNumber}
          </span>
        </div>
      </div>

      {/* 2. صورة الغلاف الرئيسية (COVER) المطلوبة قبل العنوان */}
      <div className="my-6">
        <div
          onClick={() =>
            onOpenImageModal(
              '/assets/candidate-speech-hero.jpg',
              'التجمع الشعبي وعرض البرنامج الانتخابي والتزامات المرشح لعوق محمد'
            )
          }
          className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 transition-all duration-300 hover:shadow-emerald-900/20"
        >
          {/* الصورة البانورامية */}
          <img
            src="/assets/candidate-speech-hero.jpg"
            alt="عرض البرنامج الانتخابي والتزامات المرشح لعوق محمد أمام الحضور"
            className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[480px] object-cover object-top group-hover:scale-102 transition-transform duration-700"
            loading="eager"
          />

          {/* تدرج لوني وظلال لتعزيز قراءة الشارات */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/20 to-transparent flex flex-col justify-between p-4 sm:p-6 text-white">
            <div className="flex items-center justify-between gap-2">
              <span className="bg-emerald-700/90 backdrop-blur-md text-white font-extrabold text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow border border-emerald-500/30 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>برنامجي الانتخابي والتزاماتي</span>
              </span>

              <span className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>انقر للتكبير</span>
              </span>
            </div>

            <div className="space-y-1.5 text-right">
              <div className="inline-block bg-red-600 text-white text-xs sm:text-sm font-black px-3 py-1 rounded-lg shadow">
                المرشح رقم 42 • لعوق محمد
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100 drop-shadow-md">
                «مرافعة من أجل تنمية جبلية شاملة وعدالة في توزيع المشاريع لولاية تلمسان»
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. العناوين والشعارات الرسمية بعد صورة الغلاف مباشرة */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
        {/* العمود الأيمن: العناوين والمحتوى */}
        <div className="lg:col-span-7 flex flex-col items-start text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-100/80 text-emerald-900 text-xs sm:text-sm font-bold mb-3 border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>المجلس الشعبي الولائي لولاية تلمسان</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-3">
            {campaignInfo.slogans.primary}
          </h2>

          <div className="text-lg sm:text-2xl font-bold text-emerald-700 mb-4 pb-2 border-b-2 border-emerald-500/30 inline-block">
            {campaignInfo.slogans.secondary}
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-slate-50 to-white border border-emerald-100/80 text-slate-700 text-sm sm:text-base mb-6 leading-relaxed shadow-xs">
            <p className="font-semibold text-slate-900 mb-1">
              الكتيب الإلكتروني للبرنامج الانتخابي الواقعي
            </p>
            <p>
              موجّه لساكنة <span className="font-bold text-emerald-800">{campaignInfo.constituency}</span> ببلدياتها الثلاث:{' '}
              <span className="font-semibold">{campaignInfo.municipalities.join(' • ')}</span> وكافة المداشر والقرى العريقة.
            </p>
          </div>

          {/* بطاقة مرشح الدائرة لعوق محمد رقم 42 */}
          <div className="w-full bg-white rounded-2xl p-4 sm:p-5 border-2 border-emerald-600/30 shadow-md hover:shadow-lg transition-all flex flex-col sm:flex-row items-center gap-4 mb-6">
            <button
              onClick={() =>
                onOpenImageModal(
                  '/assets/candidate-mohamed-laouk.jpg',
                  'ملصق المرشح لعوق محمد - القائمة رقم 03'
                )
              }
              className="relative group shrink-0 cursor-pointer overflow-hidden rounded-xl border border-slate-200"
              title="انقر لتكبير صورة المرشح"
            >
              <img
                src="/assets/candidate-mohamed-laouk.jpg"
                alt="المرشح لعوق محمد رقم 42"
                className="w-24 h-32 sm:w-28 sm:h-36 object-cover object-top rounded-xl group-hover:scale-105 transition-transform"
                loading="eager"
              />
              <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors" />
              <span className="absolute bottom-1 right-1 bg-red-600 text-white font-extrabold text-xs px-2 py-0.5 rounded shadow">
                رقم {campaignInfo.featuredCandidate.number}
              </span>
            </button>

            <div className="text-right flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {campaignInfo.featuredCandidate.role}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                {campaignInfo.featuredCandidate.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-2">
                المهنة: <span className="font-semibold text-slate-800">{campaignInfo.featuredCandidate.profession}</span> • القائمة رقم 03
              </p>
              <p className="text-xs text-emerald-800 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                «معاً.. من أجل تغيير إيجابي وتلمسان تستحق الأفضل»
              </p>
            </div>
          </div>

          {/* زر بدء التصفح المباشر */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onStartReading}
              className="px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group"
            >
              <span>تصفح البرنامج الانتخابي</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() =>
                onOpenImageModal(
                  '/assets/party-banner-03.jpg',
                  'شعار وملصق حزب جبهة المستقبل - القائمة 03'
                )
              }
              className="px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all cursor-pointer border border-slate-200"
            >
              عرض لافتة الحملة
            </button>
          </div>
        </div>

        {/* العمود الأيسر: عرض بصري للافتة والشعار الرسمي المرفق */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div
            onClick={() =>
              onOpenImageModal(
                '/assets/party-banner-03.jpg',
                'شعار حزب جبهة المستقبل - القائمة الانتخابية رقم 03'
              )
            }
            className="w-full max-w-md relative group cursor-pointer rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white"
          >
            <img
              src="/assets/party-banner-03.jpg"
              alt="حزب جبهة المستقبل - القائمة رقم 03 - معاً من أجل مستقبل أفضل"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white text-xs font-bold bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                انقر لتكبير الصورة
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-bold text-slate-500">
            <span>دائرة بني سنوس</span>
            <span>•</span>
            <span>بلدية العزايل</span>
            <span>•</span>
            <span>بلدية بني بحدل</span>
          </div>
        </div>
      </div>

      {/* 4. تذييل الغلاف مع مؤشر النزول */}
      <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
        <div>انتخابات تجديد المجالس الشعبية الولائية - الجزائر 2026</div>
        <button
          onClick={onStartReading}
          className="flex items-center gap-1 text-emerald-700 hover:text-emerald-900 font-bold cursor-pointer"
        >
          <span>المقدمة الرسمية</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

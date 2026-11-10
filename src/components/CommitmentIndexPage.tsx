import React from 'react';
import { MultiLineChart } from './ChartComponents';
import { conclusionCommitmentIndex } from '../data/charts';
import { BOOKLET_CONTENT } from '../data/content';
import {
  Activity,
  CheckCircle2,
  Maximize2,
  QrCode,
  ShieldCheck,
} from 'lucide-react';

interface CommitmentIndexPageProps {
  onOpenImageModal: (src: string, title: string) => void;
}

export const CommitmentIndexPage: React.FC<CommitmentIndexPageProps> = ({
  onOpenImageModal,
}) => {
  const { campaignInfo } = BOOKLET_CONTENT;

  return (
    <section className="booklet-page py-6 px-4 sm:px-8 max-w-6xl mx-auto space-y-8 text-right">
      {/* 1. رأس الصفحة */}
      <div className="border-b border-slate-200 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
          <Activity className="w-4 h-4 text-emerald-600" />
          <span>الشفافية والمساءلة الدورية</span>
          <span>•</span>
          <span>عهدة 2026 - 2031</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
          مؤشر الالتزام والمتابعة الدورية (2026 - 2031) 📊
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          نعرض أمامكم هذا المنحنى التفاعلي التزاماً منا بالشفافية؛ حيث يوضح المخطط الزمني المعتمد لتقديم تقارير الأداء العلنية والمحاسبة الدورية للمواطنين كل 6 أشهر طيلة العهدة الانتخابية.
        </p>
      </div>

      {/* 2. الرسم البياني لمؤشر الالتزام مع بطاقة المقارنة */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* الرسم البياني التفاعلي (يسار في RTL) */}
        <div className="lg:col-span-8 order-2 lg:order-1">
          <MultiLineChart
            title={conclusionCommitmentIndex.title}
            subtitle={conclusionCommitmentIndex.subtitle}
            yAxisLabel={conclusionCommitmentIndex.yAxisLabel}
            line1Key="futureFront"
            line1Label={conclusionCommitmentIndex.line1Label}
            line1Color="#059669"
            line2Key="traditional"
            line2Label={conclusionCommitmentIndex.line2Label}
            line2Color="#ef4444"
            data={conclusionCommitmentIndex.data}
            height={340}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-right">
              <div className="flex items-center gap-2 font-black text-emerald-800 text-base mb-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>نمط جبهة المستقبل</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                تقرير علني نصف سنوي + جلسات مساءلة مفتوحة داخل «المجلس الاستشاري الجواري لبلديات بني سنوس».
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-right">
              <div className="flex items-center gap-2 font-black text-red-800 text-base mb-1">
                <ShieldCheck className="w-5 h-5 text-red-600" />
                <span>النمط التقليدي السابق</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                غياب اللقاءات الميدانية واكتفاء المسؤولين بالأبواب المغلقة دون إشراك المواطن أو المجتمع المدني.
              </p>
            </div>
          </div>
        </div>

        {/* بطاقة رمز الاستجابة السريع والتواصل الرقمي (يمين في RTL) */}
        <div className="lg:col-span-4 order-1 lg:order-2 space-y-4">
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-500/30 shadow-md text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
              <QrCode className="w-3.5 h-3.5 text-emerald-700" />
              <span>رمز الحملة الرقمي</span>
            </div>

            <div
              onClick={() =>
                onOpenImageModal(
                  '/assets/campaign-qr-code.jpg',
                  'رمز الاستجابة السريع (QR Code) للبرنامج الانتخابي و الالتزام'
                )
              }
              className="cursor-pointer group relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow p-2 bg-white max-w-[200px]"
            >
              <img
                src="/assets/campaign-qr-code.jpg"
                alt="رمز الاستجابة السريع للبرنامج الانتخابي و الالتزام"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white" />
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-3 font-semibold">
              امسح الرمز بكاميرا هاتفك للوصول المباشر إلى البرنامج الانتخابي والالتزام
            </p>

            <div className="w-full pt-4 mt-4 border-t border-slate-100 text-right space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span>القائمة الانتخابية:</span>
                <span className="font-extrabold text-emerald-700 font-mono">03</span>
              </div>
              <div className="flex items-center justify-between">
                <span>الحزب:</span>
                <span className="font-bold text-slate-900">{campaignInfo.partyName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>الولاية:</span>
                <span className="font-bold text-slate-900">{campaignInfo.governorate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>مرشح الدائرة:</span>
                <span className="font-bold text-emerald-800">{campaignInfo.featuredCandidate.name} (#42)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تذييل الكتيب الرسمي */}
      <div className="pt-6 border-t border-slate-200 text-center text-xs text-slate-500 space-y-2">
        <p className="font-bold text-slate-700">
          «معاً نبني الغد، وبكم يكتمل التغيير!» • حزب جبهة المستقبل - ولاية تلمسان
        </p>
        <p>
          الكتيب الإلكتروني التفاعلي للبرنامج الانتخابي 2026-2031 • صُمم وفق المعايير القياسية للواجهات العربية RTL
        </p>
      </div>
    </section>
  );
};

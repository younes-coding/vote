import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface FlipbookControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onSelectPage: (index: number) => void;
}

export const FlipbookControls: React.FC<FlipbookControlsProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  onSelectPage,
}) => {
  return (
    <div className="fixed bottom-4 inset-x-0 z-30 pointer-events-none flex justify-center px-4 no-print">
      <div className="pointer-events-auto bg-slate-900/90 text-white rounded-2xl p-2 sm:p-2.5 shadow-2xl border border-slate-700/80 backdrop-blur-md flex flex-col items-center gap-2 max-w-md w-full">
        <div className="flex items-center justify-between w-full gap-2">
          {/* زر السابق (في RTL: الصفحة السابقة تعني العودة إلى اليمين) */}
          <button
            onClick={onPrevPage}
            disabled={currentPage === 0}
            className="px-3 sm:px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 disabled:opacity-30 disabled:pointer-events-none font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
            title="الصفحة السابقة (سهم يمين)"
          >
            <ChevronRight className="w-4 h-4 text-emerald-400" />
            <span>السابق</span>
          </button>

          {/* مؤشر الصفحة الحالية مع خيارات النقاط */}
          <div className="flex flex-col items-center">
            <span className="font-bold text-xs sm:text-sm text-slate-200 font-mono">
              صفحة {currentPage + 1} من {totalPages}
            </span>

            {/* نقاط الصفحات */}
            <div className="hidden sm:flex items-center gap-1 mt-1">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectPage(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentPage === idx
                      ? 'w-5 bg-emerald-400'
                      : 'w-1.5 bg-slate-600 hover:bg-slate-400'
                  }`}
                  title={`انتقل إلى صفحة ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* زر التالي (في RTL: الصفحة التالية تعني التقدم إلى اليسار) */}
          <button
            onClick={onNextPage}
            disabled={currentPage === totalPages - 1}
            className="px-3 sm:px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white disabled:opacity-30 disabled:pointer-events-none font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
            title="الصفحة التالية (سهم يسار)"
          >
            <span>التالي</span>
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* تلميح لوحة المفاتيح واللمس */}
        <div className="text-[10px] text-slate-400 flex items-center gap-3">
          <span className="hidden sm:inline">
            التنقل بالأسهم: <span className="font-mono text-emerald-400">←</span> التالي |{' '}
            <span className="font-mono text-emerald-400">→</span> السابق
          </span>
          <span className="sm:hidden">اسحب لليمين أو اليسار للتقليب</span>
        </div>
      </div>
    </div>
  );
};

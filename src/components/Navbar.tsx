import React from 'react';
import {
  BookOpen,
  List,
  Printer,
  ChevronRight,
  ChevronLeft,
  FileText,
} from 'lucide-react';

interface NavbarProps {
  currentPage: number;
  totalPages: number;
  readingMode: 'flipbook' | 'continuous';
  onToggleReadingMode: () => void;
  onOpenToc: () => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  totalPages,
  readingMode,
  onToggleReadingMode,
  onOpenToc,
  onPrevPage,
  onNextPage,
  onPrint,
}) => {
  // Calculate progress percentage
  const progressPercent = Math.round(((currentPage + 1) / totalPages) * 100);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs no-print">
      {/* شريط التقدم العلوي */}
      <div className="w-full h-1 bg-slate-100 overflow-hidden">
        <div
          className="h-full bg-gradient-to-l from-emerald-500 to-emerald-700 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* الجانب الأيمن: زر الفهرس والشعار */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={onOpenToc}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
            title="فتح فهرس المحتويات"
          >
            <List className="w-4 h-4 text-emerald-700" />
            <span className="hidden sm:inline">الفهرس</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-700 text-white font-black text-sm sm:text-base flex items-center justify-center shadow-xs">
              03
            </div>
            <div className="text-right">
              <div className="text-[10px] sm:text-xs font-black text-slate-900 leading-tight">
                جبهة المستقبل
              </div>
              <div className="text-[9px] sm:text-[10px] text-emerald-700 font-bold">
                ولاية تلمسان (بني سنوس)
              </div>
            </div>
          </div>
        </div>

        {/* المنتصف: أزرار التنقل السريع بين الصفحات (في وضع التقليب) */}
        {readingMode === 'flipbook' && (
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-100/90 px-2 sm:px-3 py-1 rounded-xl border border-slate-200 text-xs">
            {/* في RTL: التالي هو الصفحة التالية ويأتي مع سهم اليسار */}
            <button
              onClick={onPrevPage}
              disabled={currentPage === 0}
              className="p-1 rounded-lg hover:bg-white text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="الصفحة السابقة"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <span className="font-bold text-slate-800 font-mono text-[11px] sm:text-xs px-1">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={onNextPage}
              disabled={currentPage === totalPages - 1}
              className="p-1 rounded-lg hover:bg-white text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="الصفحة التالية"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* الجانب الأيسر: تبديل نمط القراءة وزر الطباعة / PDF */}
        <div className="flex items-center gap-2">
          {/* تبديل وضع القراءة */}
          <button
            onClick={onToggleReadingMode}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
            title={
              readingMode === 'flipbook'
                ? 'التبديل إلى وضع العرض المستمر (تمرير كامل)'
                : 'التبديل إلى وضع الكتيب (تقليب الصفحات)'
            }
          >
            {readingMode === 'flipbook' ? (
              <>
                <FileText className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">عرض مستمر</span>
              </>
            ) : (
              <>
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">وضع الكتيب</span>
              </>
            )}
          </button>

          {/* زر تحميل PDF / طباعة */}
          <button
            onClick={onPrint}
            className="px-2.5 sm:px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
            title="تحميل كملف PDF أو طباعة"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">تحميل PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import {
  BookOpen,
  Building,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard,
  Sparkles,
  Target,
  Trees,
  Vote,
  Wrench,
  X,
  Activity,
} from 'lucide-react';

export interface TocItem {
  id: number;
  title: string;
  category: string;
  icon: string;
}

export const TOC_ITEMS: TocItem[] = [
  { id: 0, title: 'الغلاف الرسمي', category: 'البداية', icon: 'LayoutDashboard' },
  { id: 1, title: 'المقدمة ورسالتنا تجاه المواطن', category: 'الرؤية والعهد', icon: 'HeartHandshake' },
  { id: 2, title: 'المحور 1: تنمية محلية متوازنة', category: 'المحاور التنموية', icon: 'Building' },
  { id: 3, title: 'المحور 2: البنية التحتية والخدمات', category: 'المحاور التنموية', icon: 'Wrench' },
  { id: 4, title: 'المحور 3: دعم وتأهيل الشباب', category: 'المحاور التنموية', icon: 'Sparkles' },
  { id: 5, title: 'المحور 4: السياحة والبيئة', category: 'المحاور التنموية', icon: 'Trees' },
  { id: 6, title: 'المحور 5: التعليم والتماسك الاجتماعي', category: 'المحاور التنموية', icon: 'GraduationCap' },
  { id: 7, title: 'البيت القصيد: خطتنا الإجرائية الكبرى', category: 'خارطة الطريق', icon: 'Target' },
  { id: 8, title: 'قائمة المترشحين ودليل التصويت', category: 'المسار الانتخابي', icon: 'Vote' },
  { id: 9, title: 'البيان الختامي، عهد مقطوع، واختاروا الأكفأ', category: 'الخاتمة والنداء', icon: 'BookOpen' },
  { id: 10, title: 'مؤشر الالتزام والمتابعة الدورية', category: 'المساءلة والشفافية', icon: 'Activity' },
];

interface SidebarTocProps {
  isOpen: boolean;
  currentPage: number;
  onSelectPage: (index: number) => void;
  onClose: () => void;
}

export const SidebarToc: React.FC<SidebarTocProps> = ({
  isOpen,
  currentPage,
  onSelectPage,
  onClose,
}) => {
  const getIcon = (iconName: string, active: boolean) => {
    const className = `w-4 h-4 shrink-0 ${active ? 'text-emerald-700' : 'text-slate-500'}`;
    switch (iconName) {
      case 'LayoutDashboard':
        return <LayoutDashboard className={className} />;
      case 'HeartHandshake':
        return <HeartHandshake className={className} />;
      case 'Building':
        return <Building className={className} />;
      case 'Wrench':
        return <Wrench className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Trees':
        return <Trees className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'Target':
        return <Target className={className} />;
      case 'Vote':
        return <Vote className={className} />;
      case 'BookOpen':
        return <BookOpen className={className} />;
      case 'Activity':
        return <Activity className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-start no-print"
      onClick={onClose}
    >
      <div
        className="w-80 max-w-[85vw] h-full bg-white shadow-2xl flex flex-col text-right animate-in slide-in-from-right duration-200 border-l border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* رأس الفهرس */}
        <div className="p-4 bg-emerald-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-300" />
            <h3 className="font-extrabold text-base">فهرس محتويات الكتيب</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-emerald-700 text-emerald-200 hover:text-white transition-colors cursor-pointer"
            title="إغلاق الفهرس"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* معلومات القائمة */}
        <div className="p-3 bg-emerald-50 border-b border-emerald-100 text-xs text-emerald-900 font-bold flex items-center justify-between">
          <span>حزب جبهة المستقبل</span>
          <span className="bg-emerald-700 text-white px-2 py-0.5 rounded font-mono">
            القائمة 03
          </span>
        </div>

        {/* قائمة الصفحات */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {TOC_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectPage(item.id);
                  onClose();
                }}
                className={`w-full p-2.5 rounded-xl text-right transition-all flex items-center gap-3 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-100/90 text-emerald-900 font-black border border-emerald-300/80 shadow-xs'
                    : 'hover:bg-slate-100 text-slate-700 font-medium'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                    isActive
                      ? 'bg-emerald-700 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {item.id + 1}
                </span>

                <div className="flex-1 overflow-hidden">
                  <div className="text-xs text-slate-400 font-medium leading-none mb-1">
                    {item.category}
                  </div>
                  <div className="text-xs sm:text-sm truncate">
                    {item.title}
                  </div>
                </div>

                {getIcon(item.icon, isActive)}
              </button>
            );
          })}
        </div>

        {/* تذييل الفهرس */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 text-[11px] text-slate-500 text-center">
          دائرة بني سنوس: بني سنوس • العزايل • بني بحدل
        </div>
      </div>
    </div>
  );
};


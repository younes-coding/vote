import React, { useEffect } from 'react';
import { X, ZoomIn, Download } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  src: string;
  title: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  src,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 transition-all"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[92vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* رأس المعاينة */}
        <div className="flex items-center justify-between p-4 bg-slate-900/90 border-b border-slate-800 text-white">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-emerald-400" />
            <h3 className="font-bold text-sm sm:text-base text-slate-200">{title}</h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={src}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="تنزيل الصورة"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-900 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* جسم الصورة */}
        <div className="overflow-auto max-h-[calc(90vh-60px)] p-2 sm:p-4 flex items-center justify-center bg-black/40">
          <img
            src={src}
            alt={title}
            className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};


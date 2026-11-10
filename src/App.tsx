import React, { useState, useEffect, useRef } from 'react';
import { BOOKLET_CONTENT } from './data/content';
import { Navbar } from './components/Navbar';
import { SidebarToc } from './components/SidebarToc';
import { FlipbookControls } from './components/FlipbookControls';
import { ImageModal } from './components/ImageModal';
import { CoverPage } from './components/CoverPage';
import { IntroPage } from './components/IntroPage';
import { AxisPage } from './components/AxisPage';
import { GrandPlanPage } from './components/GrandPlanPage';
import { CandidatesAndVotingPage } from './components/CandidatesAndVotingPage';
import { ConclusionPage } from './components/ConclusionPage';
import { CommitmentIndexPage } from './components/CommitmentIndexPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [readingMode, setReadingMode] = useState<'flipbook' | 'continuous'>('flipbook');
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<{
    isOpen: boolean;
    src: string;
    title: string;
  }>({
    isOpen: false,
    src: '',
    title: '',
  });

  const totalPages = 11;
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Navigate to next page
  const handleNextPage = () => {
    setCurrentPage((prev) => {
      const next = Math.min(prev + 1, totalPages - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return next;
    });
  };

  // Navigate to previous page
  const handlePrevPage = () => {
    setCurrentPage((prev) => {
      const next = Math.max(prev - 1, 0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return next;
    });
  };

  // Jump to specific page
  const handleSelectPage = (index: number) => {
    setCurrentPage(index);
    if (readingMode === 'continuous') {
      const element = document.getElementById(`section-page-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in modal or input
      if (modalImage.isOpen || isTocOpen) return;

      if (readingMode === 'flipbook') {
        // In RTL: ArrowLeft = Next (forward), ArrowRight = Previous (backward)
        if (e.key === 'ArrowLeft' || e.key === 'PageDown') {
          e.preventDefault();
          handleNextPage();
        } else if (e.key === 'ArrowRight' || e.key === 'PageUp') {
          e.preventDefault();
          handlePrevPage();
        } else if (e.key === 'Home') {
          e.preventDefault();
          handleSelectPage(0);
        } else if (e.key === 'End') {
          e.preventDefault();
          handleSelectPage(totalPages - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [readingMode, modalImage.isOpen, isTocOpen]);

  // Touch gesture handlers for mobile flipbook
  const handleTouchStart = (e: React.TouchEvent) => {
    if (readingMode !== 'flipbook') return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (readingMode !== 'flipbook' || touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Ensure it's mostly horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        // Swiped towards left -> Next page in RTL
        handleNextPage();
      } else {
        // Swiped towards right -> Previous page in RTL
        handlePrevPage();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Open Image Preview modal
  const handleOpenImageModal = (src: string, title: string) => {
    setModalImage({ isOpen: true, src, title });
  };

  const handleCloseImageModal = () => {
    setModalImage({ isOpen: false, src: '', title: '' });
  };

  // Trigger Print dialog
  const handlePrint = () => {
    window.print();
  };

  // Render individual page by index
  const renderPage = (index: number) => {
    switch (index) {
      case 0:
        return (
          <CoverPage
            onStartReading={() => handleSelectPage(1)}
            onOpenImageModal={handleOpenImageModal}
          />
        );
      case 1:
        return <IntroPage onOpenImageModal={handleOpenImageModal} />;
      case 2:
        return <AxisPage axis={BOOKLET_CONTENT.axes[0]} />;
      case 3:
        return <AxisPage axis={BOOKLET_CONTENT.axes[1]} />;
      case 4:
        return <AxisPage axis={BOOKLET_CONTENT.axes[2]} />;
      case 5:
        return <AxisPage axis={BOOKLET_CONTENT.axes[3]} />;
      case 6:
        return <AxisPage axis={BOOKLET_CONTENT.axes[4]} />;
      case 7:
        return <GrandPlanPage />;
      case 8:
        return <CandidatesAndVotingPage onOpenImageModal={handleOpenImageModal} />;
      case 9:
        return <ConclusionPage />;
      case 10:
        return <CommitmentIndexPage onOpenImageModal={handleOpenImageModal} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans"
      dir="rtl"
      lang="ar"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* الشريط العلوي الثابت */}
      <Navbar
        currentPage={currentPage}
        totalPages={totalPages}
        readingMode={readingMode}
        onToggleReadingMode={() =>
          setReadingMode((prev) => (prev === 'flipbook' ? 'continuous' : 'flipbook'))
        }
        onOpenToc={() => setIsTocOpen(true)}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onPrint={handlePrint}
      />

      {/* الفهرس الجانبي القابل للفتح */}
      <SidebarToc
        isOpen={isTocOpen}
        currentPage={currentPage}
        onSelectPage={handleSelectPage}
        onClose={() => setIsTocOpen(false)}
      />

      {/* المحتوى الرئيسي */}
      <main className="flex-1 pb-24 sm:pb-28">
        {readingMode === 'flipbook' ? (
          <div className="relative animate-in fade-in duration-300">
            {renderPage(currentPage)}
          </div>
        ) : (
          /* وضع القراءة المستمرة: عرض جميع الصفحات متتالية */
          <div className="space-y-16 py-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <div
                key={idx}
                id={`section-page-${idx}`}
                className="relative pb-12 border-b border-slate-200/80 last:border-b-0 print-page-break"
              >
                {/* شارة رقم الصفحة في العرض المستمر */}
                <div className="max-w-6xl mx-auto px-4 mb-2 flex items-center justify-between text-xs text-slate-600 no-print">
                  <span className="font-bold">قسم {idx + 1}</span>
                  <span className="font-mono">صفحة {idx + 1} من {totalPages}</span>
                </div>

                {renderPage(idx)}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* عناصر التحكم في وضع الكتيب (تقليب الصفحات) */}
      {readingMode === 'flipbook' && (
        <FlipbookControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          onSelectPage={handleSelectPage}
        />
      )}

      {/* نافذة معاينة الصور المكبرة (Lightbox Modal) */}
      <ImageModal
        isOpen={modalImage.isOpen}
        src={modalImage.src}
        title={modalImage.title}
        onClose={handleCloseImageModal}
      />
    </div>
  );
}

export default App;

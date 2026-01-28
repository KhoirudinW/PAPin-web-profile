'use client'
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`
        fixed bottom-10 right-10 z-40
        size-12 md:size-14
        flex items-center justify-center
        rounded-2xl
        bg-white/60 backdrop-blur-2xl
        border border-primary/20
        text-primary
        shadow-2xl shadow-primary/10
        transition-all duration-500 ease-in-out
        hover:bg-primary hover:text-white hover:-translate-y-2 hover:shadow-primary/30
        active:scale-95
        ${visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12 pointer-events-none'}
      `}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-white rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform opacity-0 group-hover:opacity-20 pointer-events-none" />
        <ArrowUp className="size-6 md:size-7 relative z-10 transition-transform" />
      </div>
    </button>
  );
}

export default BackToTop;

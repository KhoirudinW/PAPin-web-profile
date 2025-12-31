'use client'
import { useEffect, useState } from 'react';

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
        fixed bottom-6 right-6 z-40
        flex items-center gap-2
        px-4 py-3
        rounded-full
        bg-light-blue/80 backdrop-blur-sm
        text-white text-sm
        shadow-lg shadow-primary/30
        transition-all duration-500 ease-out
        hover:bg-[#72a1cc] hover:shadow-xl
        ${visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <span className="text-xs hidden md:block">kembali ke awal</span>
      <span className="text-base leading-none">↑</span>
    </button>
  );
}

export default BackToTop;

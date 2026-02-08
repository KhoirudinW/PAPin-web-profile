'use client'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LogoIcon from 'pub/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NavItems = [
  {
    title:'Home',
    link:"/"
  }, 
  {
    title:'About',
    link:'/about'
  },
  {
    title:'Feature',
    link: '/feature'
  },
  {
    title:'Pricelist',
    link: '/pricing'
  },
  {
    title:'Contact',
    link:'/contact'
  },
  {
    title:'Mulai hari ini',
    link:'https://app.papin.biz.id'
  }
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Toggle floating style based on scroll position
      setIsScrolled(currentScrollY > 20);

      // Hide/Show navbar on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
        setIsOpen(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (link: string) => pathname === link;

  return (
    <>
      <nav
        className={`
          fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'top-4 mx-4 md:mx-12' 
            : 'top-0 mx-0'}
          ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        <div className={`
          relative w-full max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 border 
          ${isScrolled 
            ? 'bg-white/60 backdrop-blur-2xl  border-primary/60 py-3 px-6 md:px-10 rounded-[32px] shadow-2xl shadow-primary/5' 
            : 'bg-transparent py-6 px-6 md:px-12 border-transparent'}
        `}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg scale-0 group-hover:scale-150 transition-transform duration-500 overflow-visible" />
              <Image src={LogoIcon} alt="logo" className="size-12 md:size-14 relative z-10 transition-transform group-hover:scale-110" />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-2">
            {NavItems.map((item, index, arr) => {
              const isLast = index === arr.length - 1;
              const active = isActive(item.link);

              if (isLast) return (
                <Link 
                  key={index}
                  href={item.link}
                  className="ml-4 px-6 py-2.5 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:bg-primary-hovered hover:scale-105 active:scale-95 transition-all text-sm"
                >
                  {item.title}
                </Link>
              );

              return (
                <Link 
                  key={index}
                  href={item.link}
                  className={`
                    relative px-4 py-2 group text-sm font-bold tracking-tight transition-colors
                    ${active ? 'text-primary' : 'text-gray-600 hover:text-primary'}
                  `}
                >
                  <span className="relative z-10">{item.title}</span>
                  <div className={`
                    absolute bottom-1 left-4 right-4 h-0.5 bg-primary/30 rounded-full transition-all duration-300
                    ${active ? 'opacity-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'}
                  `}></div>
                </Link>
              );
            })}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              md:hidden p-2 rounded-2xl transition-all
              ${isScrolled ? 'bg-primary/5 text-primary' : 'bg-white/40 backdrop-blur-md text-gray-800 border border-white/60'}
            `}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-white/40 backdrop-blur-3xl transition-all duration-500 md:hidden
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className="absolute top-24 left-4 right-4 bg-white/90 border border-white/60 rounded-[40px] shadow-2xl p-8 flex flex-col items-center gap-8 animate-fade-scale"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="w-full flex flex-col items-center gap-6">
            {NavItems.map((item, index, arr) => {
              const isLast = index === arr.length - 1;
              const active = isActive(item.link);

              if (isLast) return (
                <li key={index} className="w-full pt-4">
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="flex justify-center w-full py-4 bg-primary text-white rounded-[24px] font-bold shadow-xl shadow-primary/20"
                  >
                    {item.title}
                  </Link>
                </li>
              );

              return (
                <li key={index} className="w-full text-center">
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`
                      text-2xl font-black tracking-tight transition-all
                      ${active ? 'text-primary' : 'text-gray-800 hover:text-primary'}
                    `}
                  >
                    {item.title}
                    {active && <span className="text-primary italic ml-1">.</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

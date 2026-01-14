'use client'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LogoIcon from 'pub/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

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
    title:'News',
    link:'/news'
  },
  {
    title:'Contact',
    link:'/contact'
  },
  {
    title:'Mulai hari ini',
    link:'https://papin-dashboard-nqgv.vercel.app/dashboard'
  }
]

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
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

  const isActive = (link: string) => {
    return pathname === link;
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          flex justify-between items-center
          px-6 md:px-12 py-4
          bg-cream shadow-lg shadow-shadow-primary
          transition-transform duration-300 ease-in-out
          ${show ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <Image src={LogoIcon} alt="logo" className="size-14" />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-4 h-12 items-center">
          <div className="flex gap-8 items-center">
            {NavItems.map((item, index, arr) => {
              const isLast = index === arr.length - 1;
              const active = isActive(item.link);

              return (
                <Link 
                  key={index}
                  href={item.link}
                  className={`
                    ${isLast
                      ? 'btn btn-primary-solid'
                      : 'text-md'}
                    hover:text-primary group
                  `}
                >
                    {item.title}
                    <div className={`
                      ${isLast ? 'hidden' : ''}
                      ${active ? 'w-full visible' : 'invisible w-0 group-hover:w-full group-hover:visible'}
                      border border-primary transition-all duration-100
                    `}></div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <img
            src="/assets/bars.png"
            alt="menu"
            className="size-10"
          />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-18 left-0 w-full z-40
          bg-cream border-t border-primary/10
          transition-all duration-300 ease-out
          md:hidden
          ${isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <ul className="flex flex-col items-center gap-6 py-6">
          {NavItems.map((item, index, arr) => {
            const isLast = index === arr.length - 1;
            const active = isActive(item.link);

            return (
              <li key={index}>
                <Link
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`
                    ${isLast
                      ? 'btn btn-primary-solid'
                      : 'text-lg font-medium'}
                    ${active && !isLast ? 'text-primary' : ''}
                  `}
                >
                  {item.title}
                  {!isLast && (
                    <div className={`
                      ${active ? 'w-full visible' : 'w-0 invisible'}
                      border border-primary transition-all duration-100
                    `}></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
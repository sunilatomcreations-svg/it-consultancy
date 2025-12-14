"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import InsightsGrid from './InsightsGrid';
import OutsightGrid from './OutsightGrid';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const pathname = usePathname();

  const linkBase = 'hover:text-gray-800 font-medium';
  const activeClass = 'text-[#F97316] font-semibold';

  const linkClass = (match: boolean | undefined) => `${linkBase} ${match ? activeClass : 'text-gray-800'}`;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const open = (name: string) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenDropdown(name);
  };

  const close = () => {
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 180);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <header className="fixed top-2 md:top-4 left-0 right-0 z-40 flex justify-center px-2 md:px-0">
        <nav className="max-w-4xl w-auto px-3 md:px-4 py-1.5 rounded-full shadow-xl border border-white/20" 
             style={{
               backgroundColor: 'rgba(255, 255, 255, 0.25)',
               backdropFilter: 'blur(10px)',
               WebkitBackdropFilter: 'blur(10px)'
             }}>
          <div className="flex items-center gap-45 md:gap-4 lg:gap-6 px-2 md:px-4">
            {/* Logo */}
            <Link href="/ai" className="flex items-center">
              <div className="relative w-6 h-6">
                <svg 
                  className="absolute inset-0 w-full h-full" 
                  viewBox="0 0 32 32" 
                  fill="#6B2259"
                >
                  <path d="M4,0 L28,0 L32,4 L32,28 L28,32 L4,32 L0,28 L0,4 Z" />
                </svg>
                <div className="relative z-10 w-full h-full flex items-center justify-center text-white font-bold text-sm">
                  AI
                </div>
              </div>
            </Link>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Home Link (no dropdown) */}
              <div className="relative">
                <Link href="/" className={`flex items-center ${linkClass(pathname === '/' || pathname?.startsWith('/home')) }`}>Home</Link>
              </div>

              {/* About Link (no dropdown) */}
              <div className="relative">
                <Link href="/about" className={`flex items-center ${linkClass(pathname?.startsWith('/about'))}`}>About</Link>
              </div>

              {/* Services Link */}
              <div className="relative" onMouseEnter={() => open('services')} onMouseLeave={close}>
                <Link href="/services" className={`flex items-center ${linkClass(pathname?.startsWith('/services'))}`}>
                  Services
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div
                  className={`${openDropdown === 'services' ? 'block' : 'hidden'} md:group-hover:block absolute top-full mt-0 z-50 origin-top-left`}
                  style={{ left: '50%', transform: 'translateX(calc(-50% + 200px)) translateY(24px)' }}
                  onMouseEnter={() => open('services')}
                  onMouseLeave={close}
                >
                  <div className="bg-white rounded-xl shadow-lg ring-1 ring-black/5 overflow-hidden w-[1050px] max-w-[90vw]" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <OutsightGrid variant="services" />
                  </div>
                </div>
              </div>

              {/* Industries Link (no dropdown) */}
              <div className="relative">
                <Link href="/industries" className={`flex items-center ${linkClass(pathname?.startsWith('/industries'))}`}>Industries</Link>
              </div>
              {/* Resources Dropdown */}
              {/* Portfolio Dropdown */}
              <div className="relative" onMouseEnter={() => open('portfolio')} onMouseLeave={close}>
                <Link href="/portfolio" className={`flex items-center ${linkClass(pathname?.startsWith('/portfolio'))}`}>
                  <span>Portfolio</span>
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div
                  className={`${openDropdown === 'portfolio' ? 'block' : 'hidden'} md:group-hover:block absolute top-full left-0 mt-0 z-50 origin-top-left`}
                  style={{ transform: 'translateX(-60%) translateY(24px)' }}
                  onMouseEnter={() => open('portfolio')}
                  onMouseLeave={close}
                >
                  <div className="bg-white rounded-xl shadow-lg ring-1 ring-black/5 overflow-hidden w-[1050px] max-w-[90vw]" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <InsightsGrid variant="portfolio" />
                  </div>
                </div>
              </div>
              <div className="relative" onMouseEnter={() => open('resources')} onMouseLeave={close}>
                <Link href="/resources" className={`flex items-center ${linkClass(pathname?.startsWith('/resources'))}`}>
                  <span>Resources</span>
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div
                  className={`${openDropdown === 'resources' ? 'block' : 'hidden'} md:group-hover:block absolute top-full left-0 mt-0 z-50 origin-top-left`}
                  style={{ transform: 'translateX(-60%) translateY(24px)' }}
                  onMouseEnter={() => open('resources')}
                  onMouseLeave={close}
                >
                  <div className="bg-white rounded-xl shadow-lg ring-1 ring-black/5 overflow-hidden w-[1050px] max-w-[90vw]" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <InsightsGrid variant="resources" />
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="relative">
                <svg 
                  className="absolute inset-0 w-full h-full" 
                  viewBox="0 0 100 32" 
                  preserveAspectRatio="none"
                  fill="#F97316"
                >
                  <path d="M4,0 L96,0 L100,4 L100,28 L96,32 L4,32 L0,28 L0,4 Z" />
                </svg>
                <Link href="/contact" className={`relative z-10 px-6 py-1 text-white font-semibold hover:opacity-90 transition-opacity block ${pathname === '/contact' ? 'ring-2 ring-offset-1 ring-[#F97316]' : ''}`}>
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-auto">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
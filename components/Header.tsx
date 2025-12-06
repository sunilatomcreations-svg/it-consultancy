import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="max-w-4xl px-4 py-1.5 rounded-full shadow-xl border border-white/20" 
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
            
            {/* Home Link */}
            <Link href="/" className="text-black hover:text-gray-800 font-medium">
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <Link href="/about" className="flex items-center text-black hover:text-gray-800 font-medium">
                About
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            {/* Services Link */}
            <Link href="/services" className="text-black hover:text-gray-800 font-medium">
              Services
            </Link>

            {/* Industries Link */}
            <Link href="/industries" className="text-black hover:text-gray-800 font-medium">
              Industries
            </Link>

            {/* Portfolio Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-black hover:text-gray-800 font-medium">
                Portfolio
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-black hover:text-gray-800 font-medium">
                Resources
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
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
              <Link href="/contact" className="relative z-10 px-6 py-1 text-white font-semibold hover:opacity-90 transition-opacity block">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Hidden by default) */}
        <div className="md:hidden mt-4 hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium">Services</Link>
            <Link href="/industries" className="text-gray-700 hover:text-gray-900 font-medium">Industries</Link>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Resources</a>
            <Link 
              href="/contact"
              className="px-6 py-2 text-white font-semibold rounded w-fit"
              style={{ backgroundColor: '#F97316' }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
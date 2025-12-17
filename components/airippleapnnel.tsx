"use client"
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const DEFAULT_IMAGES = [
  "/photo-1518770660439-4636190af475.avif",
  "/pexels-michelangelo-buonarroti-8728560.jpg",
  "/pexels-pavel-danilyuk-8294604.jpg",
];

export default function Airippleapnnel({ images = DEFAULT_IMAGES }) {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
  const [mobileActiveImage, setMobileActiveImage] = useState(2);
  // default active panel on desktop is the 3rd panel (index 2)
  const active = hoveredPanel === null ? 2 : hoveredPanel;
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50; // px

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    // run once on mount
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Panel sizing and clip-path are handled globally via the `clip-card` class.

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchCurrentX.current === null) return;
    const delta = touchCurrentX.current - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) {
        // swiped left -> next
        setMobileActiveImage((prev) => Math.min(prev + 1, images.length - 1));
      } else {
        // swiped right -> prev
        setMobileActiveImage((prev) => Math.max(prev - 1, 0));
      }
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
  };

  return (
    <div className="bg-F6F1EB w-full md:mt-20 p-4 mt-17 lg:p-6 lg:p-8 mt-14 lg:mt-12 lg:mb-10 relative">
      {/* Image Panels Container */}
      <div
        className="flex items-stretch gap-2 lg:gap-2 h-[500px] lg:h-[680px] relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      > 
      {/* Left big panel */}
      <div
        data-clip="big"
        className={`clip-card rounded-2xl overflow-hidden shadow-lg relative transition-all duration-700 ease-in-out h-[500px] lg:h-[680px] ${
            // On mobile keep the left panel full width     (carousel). On lg+ collapse when not active.
            active === 0
              ? 'flex-1'
              : 'flex-1 lg:flex-[0_0_130px] lg:flex-[0_0_180px]'
        }`}
        onMouseEnter={() => setHoveredPanel(0)}
        onMouseLeave={() => setHoveredPanel(null)}
      >
        {/* Mobile: show the current mobile image; Desktop: always show the first image to avoid flicker */}
        <Image
          src={images[mobileActiveImage]}
          alt="Banner Image mobile"
          fill
          className="object-cover opacity-90 lg:hidden"
          priority
        />
        <Image
          src={images[0]}
          alt="Banner Image desktop"
          fill
          className="object-cover opacity-90 hidden lg:block"
          priority
        />
        
        {/* Mobile Navigation Arrows - Only visible on mobile */}
        {mobileActiveImage < images.length - 1 && (
          <button
            onClick={() => setMobileActiveImage(mobileActiveImage + 1)}
            className="lg:hidden absolute right-4 bottom-14 z-20 bg-white bg-opacity-60 hover:bg-opacity-80 rounded-lg p-2 transition-all duration-300"
            aria-label="Next image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-800">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        
        {mobileActiveImage > 0 && (
          <button
            onClick={() => setMobileActiveImage(mobileActiveImage - 1)}
            className="lg:hidden absolute left-4 bottom-14 z-20 bg-white bg-opacity-60 hover:bg-opacity-80 rounded-lg p-2 transition-all duration-300"
            aria-label="Previous image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-800">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        
        {/* Overlapping Text Section - First Image */}
        <div className={`absolute bottom-16 lg:bottom-12 lg:bottom-16 left-8 lg:left-12 lg:left-16 z-10 max-w-xl lg:max-w-2xl lg:max-w-3xl transition-opacity duration-700 ${
          active === 0 && (!isMobile || mobileActiveImage === 0) ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
            <span className="text-white">Responsible AI</span>
            <br />
            <span className="text-white">Ethical, secure, and auditable models.</span>
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 px-4 lg:py-3 lg:px-8 rounded-md transition-colors duration-300 text-sm lg:text-base">
            Learn About Our AI Practices
          </button>
        </div>
        
        {/* Overlapping Text Section - Second Image (Mobile) */}
        <div className={`lg:hidden absolute inset-0 flex flex-col items-center justify-center px-6 lg:px-8 z-10 transition-opacity duration-700 ${
          mobileActiveImage === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 text-center">
            <span className="text-white">Transform with AI</span>
            <br />
            <span className="text-white">From pilot to production — faster and safer.</span>
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 px-4 lg:py-3 lg:px-8 rounded-md transition-colors duration-300 text-sm lg:text-base">
            Discover AI Use Cases
          </button>
        </div>
        
        {/* Overlapping Text Section - Third Image (Mobile) */}
        <div className={`lg:hidden absolute bottom-16 right-8 z-10 max-w-xl transition-opacity duration-700 ${
          mobileActiveImage === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <h1 className="text-2xl font-bold leading-tight mb-4 text-right">
            <span className="text-white">AI Consulting & Engineering</span>
            <br />
            <span className="text-white">Production-grade AI solutions that scale.</span>
          </h1>
          <div className="flex justify-end">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 px-4 lg:py-2 lg:px-6 rounded-md transition-colors duration-300 text-sm lg:text-base">
              Request AI Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Middle tall narrow */}
      <div
        data-clip="big"
        className={`clip-card hidden lg:flex rounded-2xl overflow-hidden shadow-lg relative transition-all duration-700 ease-in-out ml-auto h-[450px] lg:h-[680px] ${
            active === 1
              ? 'flex-1'
                : 'flex-[0_0_80px] lg:flex-[0_0_200px] lg:flex-[0_0_260px]'
        }`}
        onMouseEnter={() => setHoveredPanel(1)}
        onMouseLeave={() => setHoveredPanel(null)}
      >
        <Image
          src={images[1]}
          alt="Banner Image 2"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Centered Overlapping Text Section */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center px-6 lg:px-8 z-10 transition-opacity duration-700 ${
          active === 1 || (isMobile && mobileActiveImage === 1) ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <h1 className="text-2xl lg:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 lg:mb-6 text-center">
            <span className="text-white">Transform with AI</span>
            <br />
            <span className="text-white">From pilot to production — faster and safer.</span>
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 lg:py-3 lg:px-8 rounded-md transition-colors duration-300">
            Discover AI Use Cases
          </button>
        </div>
      </div>

      {/* Right narrow */}
      <div
        data-clip="big"
        className={`clip-card hidden lg:flex rounded-2xl overflow-hidden shadow-lg relative transition-all duration-700 ease-in-out ml:auto h-[450px] lg:h-[680px] ${
            active === 2
              ? 'flex-1'
              : 'flex-[0_0_60px] lg:flex-[0_0_100px] lg:flex-[0_0_120px]'
        }`}
        onMouseEnter={() => setHoveredPanel(2)}
        onMouseLeave={() => setHoveredPanel(null)}
      >
        <Image
          src={images[2]}
          alt="Banner Image 3"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Right Corner Overlapping Text Section */}
        <div className={`absolute bottom-8 lg:bottom-12 lg:bottom-16 right-8 lg:right-12 lg:right-16 z-10 max-w-xl lg:max-w-2xl lg:max-w-3xl transition-opacity duration-700 ${
           active === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 text-right">
            <span className="text-white">Responsible AI</span>
            <br />
            <span className="text-white">Ethical, secure, and auditable models.</span>
          </h1>
          <div className="flex justify-end">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 lg:py-3 lg:px-8 rounded-md transition-colors duration-300">
              Learn About Our AI Practices
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Carousel Indicators - Only visible on mobile */}
      <div className="lg:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setMobileActiveImage(index)}
            className="transition-all duration-300"
            style={{
              width: mobileActiveImage === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: mobileActiveImage === index ? '#F97316' : '#FFFFFF',
              opacity: mobileActiveImage === index ? 1 : 0.5
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

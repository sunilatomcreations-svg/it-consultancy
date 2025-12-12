"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";

const DEFAULT_IMAGES = [
  "/home_page_assets/andreea-avramescu-wR56AUlEsE4-unsplash.jpg",
  "/home_page_assets/headway-F2KRf_QfCqw-unsplash.jpg",
  "/home_page_assets/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg",
];

export default function RipplePanels({ images = DEFAULT_IMAGES }) {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
  const [mobileActiveImage, setMobileActiveImage] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 50; // px

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
    <div className="bg-F6F1EB w-full p-4 md:p-6 lg:p-8 mt-14 md:mt-12 mb-5 md:mb-10 relative">
      {/* Image Panels Container */}
      <div
        className="flex items-stretch gap-2 md:gap-4 h-[500px] md:h-[680px] relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
      {/* Left big panel */}
      <div 
        className={`rounded-2xl overflow-hidden shadow-lg relative transition-all duration-700 ease-in-out h-[500px] md:h-[680px] ${
          hoveredPanel === null 
            ? 'flex-1' 
            : hoveredPanel === 0 
            ? 'flex-1' 
            : 'flex-[0_0_80px] md:flex-[0_0_130px] lg:flex-[0_0_180px]'
        }`}
        onMouseEnter={() => setHoveredPanel(0)}
        onMouseLeave={() => setHoveredPanel(null)}
      >
        <Image
          src={images[mobileActiveImage]}
          alt="Banner Image 1"
          fill
          className="object-cover opacity-90"
          priority
        />
        
        {/* Mobile Navigation Arrows - Only visible on mobile */}
        {mobileActiveImage < images.length - 1 && (
          <button
            onClick={() => setMobileActiveImage(mobileActiveImage + 1)}
            className="md:hidden absolute right-4 bottom-14 z-20 bg-white bg-opacity-60 hover:bg-opacity-80 rounded-lg p-2 transition-all duration-300"
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
            className="md:hidden absolute left-4 bottom-14 z-20 bg-white bg-opacity-60 hover:bg-opacity-80 rounded-lg p-2 transition-all duration-300"
            aria-label="Previous image"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gray-800">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        
        {/* Overlapping Text Section - First Image */}
        <div className={`absolute bottom-16 md:bottom-12 lg:bottom-16 left-8 md:left-12 lg:left-16 z-10 max-w-xl md:max-w-2xl lg:max-w-3xl transition-opacity duration-700 ${
          ((hoveredPanel === 0 || hoveredPanel === null) && mobileActiveImage === 0) || (hoveredPanel === 0 && window.innerWidth >= 768) ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
            <span className="text-white">IT Consultancy Services</span>
            <br />
            <span className="text-white">that fuel your AI-powered future.</span>
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 px-4 md:py-3 md:px-8 rounded-md transition-colors duration-300 text-sm md:text-base">
            Get IT Consultation
          </button>
        </div>
        
        {/* Overlapping Text Section - Second Image (Mobile) */}
        <div className={`md:hidden absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8 z-10 transition-opacity duration-700 ${
          mobileActiveImage === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 text-center">
            <span className="text-white">Digital Transformation</span>
            <br />
            <span className="text-white">for modern businesses.</span>
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 px-4 md:py-3 md:px-8 rounded-md transition-colors duration-300 text-sm md:text-base">
            Explore Solutions
          </button>
        </div>
        
        {/* Overlapping Text Section - Third Image (Mobile) */}
        <div className={`md:hidden absolute bottom-16 right-8 z-10 max-w-xl transition-opacity duration-700 ${
          mobileActiveImage === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <h1 className="text-2xl font-bold leading-tight mb-4 text-right">
            <span className="text-white">Technology Excellence</span>
            <br />
            <span className="text-white">delivering results.</span>
          </h1>
          <div className="flex justify-end">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 px-4 md:py-2 md:px-6 rounded-md transition-colors duration-300 text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Middle tall narrow */}
      <div 
        className={`hidden md:flex rounded-2xl overflow-hidden shadow-lg relative transition-all duration-700 ease-in-out ml-auto h-[450px] md:h-[680px] ${
          hoveredPanel === 1 
            ? 'flex-1' 
            : hoveredPanel === null
            ? 'flex-[0_0_80px] md:flex-[0_0_130px] lg:flex-[0_0_180px]'
            : 'flex-[0_0_80px] md:flex-[0_0_130px] lg:flex-[0_0_180px]'
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
        <div className={`absolute inset-0 flex flex-col items-center justify-center px-6 md:px-8 z-10 transition-opacity duration-700 ${
          hoveredPanel === 1 || (mobileActiveImage === 1 && window.innerWidth < 768) ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 text-center">
            <span className="text-white">Digital Transformation</span>
            <br />
            <span className="text-white">for modern businesses.</span>
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-md transition-colors duration-300">
            Explore Solutions
          </button>
        </div>
      </div>

      {/* Right narrow */}
      <div 
        className={`hidden md:flex rounded-2xl overflow-hidden shadow-lg relative transition-all duration-700 ease-in-out ml-auto h-[450px] md:h-[680px] ${
          hoveredPanel === 2 
            ? 'flex-1' 
            : hoveredPanel === null
            ? 'flex-[0_0_60px] md:flex-[0_0_100px] lg:flex-[0_0_120px]'
            : 'flex-[0_0_60px] md:flex-[0_0_100px] lg:flex-[0_0_120px]'
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
        <div className={`absolute bottom-8 md:bottom-12 lg:bottom-16 right-8 md:right-12 lg:right-16 z-10 max-w-xl md:max-w-2xl lg:max-w-3xl transition-opacity duration-700 ${
          hoveredPanel === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6 text-right">
            <span className="text-white">Technology Excellence</span>
            <br />
            <span className="text-white">delivering results.</span>
          </h1>
          <div className="flex justify-end">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-md transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Carousel Indicators - Only visible on mobile */}
      <div className="md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
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

"use client"
import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
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

  

  // clip-path refs and state for the three panels (do not change classes/widths/heights)
  const leftRef = useRef<HTMLDivElement | null>(null);
  const middleRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const [leftClip, setLeftClip] = useState<string | undefined>(undefined);
  const [middleClip, setMiddleClip] = useState<string | undefined>(undefined);
  const [rightClip, setRightClip] = useState<string | undefined>(undefined);

  const buildPath = (W: number, H: number) =>
    `path('M 80 0 L ${W - 24} 0 Q ${W} 0 ${W} 24 L ${W} ${H - 80} Q ${W} ${H - 60} ${W - 14.1} ${H - 45.9} L ${W - 45.9} ${H - 14.1} Q ${W - 60} ${H} ${W - 80} ${H} L 24 ${H} Q 0 ${H} 0 ${H - 24} L 0 80 Q 0 60 14.1 45.9 L 45.9 14.1 Q 60 0 80 0 Z')`;

  const measure = useCallback(() => {
    const l = leftRef.current;
    const m = middleRef.current;
    const r = rightRef.current;
    if (l) {
      const rect = l.getBoundingClientRect();
      setLeftClip(buildPath(rect.width, rect.height));
    }
    if (m) {
      const rect = m.getBoundingClientRect();
      setMiddleClip(buildPath(rect.width, rect.height));
    }
    if (r) {
      const rect = r.getBoundingClientRect();
      setRightClip(buildPath(rect.width, rect.height));
    }
  }, []);

  useLayoutEffect(() => {
    // initial measure
    requestAnimationFrame(measure);

    // ResizeObserver to react to layout changes
    let ro: ResizeObserver | null = null;
    if (typeof window !== 'undefined' && (window as any).ResizeObserver) {
      const observer = new (window as any).ResizeObserver(() => {
        requestAnimationFrame(measure);
      });
      ro = observer;
      if (leftRef.current) observer.observe(leftRef.current);
      if (middleRef.current) observer.observe(middleRef.current);
      if (rightRef.current) observer.observe(rightRef.current);
    } else {
      const onResize = () => requestAnimationFrame(measure);
      window.addEventListener('resize', onResize);
      // cleanup for fallback
      return () => window.removeEventListener('resize', onResize);
    }

    // image load listeners: attach to any <img> inside the panel refs
    const imageListeners: Array<() => void> = [];
    const addImgLoadListeners = (el: HTMLElement | null) => {
      if (!el) return;
      const imgs = el.querySelectorAll('img');
      imgs.forEach((img) => {
        const handler = () => requestAnimationFrame(measure);
        img.addEventListener('load', handler);
        imageListeners.push(() => img.removeEventListener('load', handler));
      });
    };

    addImgLoadListeners(leftRef.current);
    addImgLoadListeners(middleRef.current);
    addImgLoadListeners(rightRef.current);

    // re-measure on CSS transition end (panels expand/contract)
    const addTransitionHandlers = (el: HTMLElement | null) => {
      if (!el) return;
      const onTrans = () => requestAnimationFrame(measure);
      el.addEventListener('transitionend', onTrans);
      el.addEventListener('webkitTransitionEnd', onTrans as any);
      // also measure on hover enter/leave after a short delay to catch class-based changes
      const onEnter = () => window.setTimeout(() => requestAnimationFrame(measure), 60);
      const onLeave = () => window.setTimeout(() => requestAnimationFrame(measure), 60);
      el.addEventListener('mouseenter', onEnter as any);
      el.addEventListener('mouseleave', onLeave as any);
      imageListeners.push(() => el.removeEventListener('transitionend', onTrans));
      imageListeners.push(() => el.removeEventListener('webkitTransitionEnd', onTrans as any));
      imageListeners.push(() => el.removeEventListener('mouseenter', onEnter as any));
      imageListeners.push(() => el.removeEventListener('mouseleave', onLeave as any));
    };

    addTransitionHandlers(leftRef.current);
    addTransitionHandlers(middleRef.current);
    addTransitionHandlers(rightRef.current);

    // also re-measure once after window load to catch any late resources
    const onWindowLoad = () => requestAnimationFrame(measure);
    window.addEventListener('load', onWindowLoad);
    imageListeners.push(() => window.removeEventListener('load', onWindowLoad));

    // slight delayed re-measure to allow images/styles to settle
    const timeoutId = window.setTimeout(() => requestAnimationFrame(measure), 120);

    return () => {
      // cleanup ResizeObserver
      if (ro) {
        try {
          if (leftRef.current) ro.unobserve(leftRef.current);
          if (middleRef.current) ro.unobserve(middleRef.current);
          if (rightRef.current) ro.unobserve(rightRef.current);
        } catch (e) {}
        try { ro.disconnect(); } catch (e) {}
      }
      // cleanup image listeners
      imageListeners.forEach((cleanup) => {
        try { cleanup(); } catch (e) {}
      });
      window.clearTimeout(timeoutId);
    };
  }, [measure]);

  const handleTouchStart = (e: React.TouchEvent) =>   {
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
        className="flex items-stretch gap-2 md:gap-2 h-[500px] md:h-[680px] relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
      {/* Left big panel */}
      <div 
        ref={leftRef}
        data-panel="0"
        style={{ clipPath: leftClip, WebkitClipPath: leftClip }}
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
        ref={middleRef}
        data-panel="1"
        style={{ clipPath: middleClip, WebkitClipPath: middleClip }}
        className={`hidden md:flex rounded-2xl overflow-hidden shadow-lg relative transition-all duration-700 ease-in-out ml-auto h-[450px] md:h-[680px] ${
          hoveredPanel === 1 
            ? 'flex-1' 
            : hoveredPanel === null
            ? 'flex-[0_0_80px] md:flex-[0_0_200px] lg:flex-[0_0_260px]'
             : 'flex-[0_0_80px] md:flex-[0_0_200px] lg:flex-[0_0_260px]'
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
        ref={rightRef}
        data-panel="2"
        style={{ clipPath: rightClip, WebkitClipPath: rightClip }}
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

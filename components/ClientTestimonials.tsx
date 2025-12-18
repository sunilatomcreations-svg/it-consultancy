'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const [isLaptop, setIsLaptop] = useState<boolean>(false);
  
  const testimonials = [
    {
      id: 1,
      quote: "Engaging with TechNova IT Consultancy has been a game-changer for us. Their team took the time to deeply understand our legacy infrastructure and future growth plans, then delivered a scalable roadmap that aligned perfectly with our business goals. The execution was seamless: migration to the cloud was completed on schedule, cost overruns were minimal, and user disruption was practically zero. Their technical expertise paired with clear communication instilled confidence throughout the project lifecycle. I highly recommend them to any enterprise seeking a trusted partner for digital transformation.",
      author: "Anjali Mehra",
      position: "CTO, TechNova Solutions",
      image: "/testimonials/anjali.jpg"
    },
    {
      id: 2,
      quote: "Working with this consultancy transformed our entire approach to technology. Their innovative solutions and dedicated support helped us achieve remarkable growth and efficiency improvements across all our operations.",
      author: "Sarah Johnson",
      position: "CEO, Innovation Labs",
      image: "/testimonials/sarah.jpg"
    },
    {
      id: 3,
      quote: "The level of expertise and professionalism displayed by their team exceeded our expectations. They delivered complex solutions on time and within budget while maintaining excellent communication throughout the process.",
      author: "Michael Chen",
      position: "Director of IT, Global Corp",
      image: "/testimonials/michael.jpg"
    },
    {
      id: 4,
      quote: "Their strategic guidance and technical implementation have been instrumental in our digital transformation journey. The results speak for themselves - improved efficiency, reduced costs, and enhanced customer satisfaction.",
      author: "Emily Rodriguez",
      position: "VP of Operations, Future Tech",
      image: "/testimonials/emily.jpg"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); // Move every 3 seconds
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, testimonials.length]);

  useEffect(() => {
    const check = () => setIsLaptop(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const nextSlide = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    // Resume auto-scroll after 5 seconds
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    // Resume auto-scroll after 5 seconds
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const getTestimonialAtPosition = (offset: number) => {
    const index = (currentIndex + offset + testimonials.length) % testimonials.length;
    return testimonials[index];
  };

  return (
    <section className="py-2 px-4" style={{ backgroundColor: '#F6F1EB' }}>
      <div className="max-w-full mx-auto">
        <div className="relative">
          {/* Purple background panel */}
          <div 
            className="rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12"
            style={{ backgroundColor: '#6B2259' }}
          >
            {/* Title */}
            <h2 
              className="text-center text-white mb-6 md:mb-12 text-xl md:text-4xl lg:text-5xl"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '500',
                lineHeight: '1.2'
              }}
            >
              What Our Clients Say About Us
            </h2>

            {/* Testimonials Container */}
            <div className="relative overflow-hidden">
              <style jsx>{`
                /* Broadened mobile band and increased width for better visibility */
                @media (min-width: 377px) and (max-width: 480px) {
                  .ct-first {
                    width: 355px !important;
                  }
                }
                   @media (min-width: 350px) and (max-width: 376px) {
                  .ct-first {
                    width: 300px !important;
                  }
                }
                   @media (min-width: 300px) and (max-width: 345px) {
                  .ct-first {
                    width: 250px !important;
                  }
                }
              `}</style>
              <div 
                className="flex gap-30 md:gap-3 transition-transform duration-700 ease-in-out" 
                style={{ 
                  width: '100%',
                  transform: isLaptop ? `translateX(-${currentIndex * 10}px)` : 'translateX(0px)'
                }}
              >
                {/* Half-visible first testimonial */}
                <div
                  className="clip-card hidden md:flex flex-shrink-0 p-2 md:p-6 rounded-2xl md:rounded-3xl opacity-30 transition-all duration-700 ease-in-out flex-col w-[80px] md:w-[200px] h-[300px] md:h-[460px]"
                  style={{ 
                    backgroundColor: '#F6F1EB'
                  }}
                >
                  <p 
                    className="text-gray-800 mb-3 md:mb-6 leading-relaxed flex-1 overflow-hidden text-xs md:text-sm line-clamp-3 md:line-clamp-4"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      lineHeight: '1.6'
                    }}
                  >
                    "{getTestimonialAtPosition(-1).quote}"
                  </p>
                  <div className="flex items-center gap-2 md:gap-4 mt-auto">
                    <Image 
                      src={getTestimonialAtPosition(-1).image} 
                      alt={getTestimonialAtPosition(-1).author}
                      width={48} 
                      height={48} 
                      className="w-8 h-8 md:w-12 md:h-12 rounded-lg flex-shrink-0 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm md:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {getTestimonialAtPosition(-1).author}
                      </div>
                      <div className="text-gray-600 text-xs md:text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {getTestimonialAtPosition(-1).position}
                      </div>
                    </div>
                  </div>
                </div>

                                {/* First fully visible testimonial */}
                <div
                  className="ct-first clip-card flex-shrink-0 p-3 md:p-6 rounded-2xl md:rounded-3xl opacity-100 transition-all duration-700 ease-in-out flex flex-col w-[310px] md:w-[450px] h-[300px] md:h-[460px]"
                  style={{ 
                    backgroundColor: '#F6F1EB'
                  }}
                >
                  <p 
                    className="text-gray-800 mb-3 md:mb-6 leading-relaxed flex-1 overflow-hidden text-xs md:text-sm line-clamp-3 md:line-clamp-4"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      lineHeight: '1.6'
                    }}
                  >
                    "{getTestimonialAtPosition(0).quote}"
                  </p>
                  <div className="flex items-center gap-2 md:gap-4 mt-auto">
                    <Image 
                      src={getTestimonialAtPosition(0).image} 
                      alt={getTestimonialAtPosition(0).author}
                      width={48} 
                      height={48} 
                      className="w-8 h-8 md:w-12 md:h-12 rounded-lg flex-shrink-0 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm md:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {getTestimonialAtPosition(0).author}
                      </div>
                      <div className="text-gray-600 text-xs md:text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {getTestimonialAtPosition(0).position}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second fully visible testimonial */}
                <div
                  className="clip-card flex-shrink-0 p-3 md:p-6 rounded-2xl md:rounded-3xl opacity-100 transition-all duration-700 ease-in-out flex flex-col w-[210px] md:w-[500px] h-[300px] md:h-[460px] "
                  style={{ 
                    backgroundColor: '#F6F1EB'
                  }}
                >
                  <p 
                    className="text-gray-800 mb-3 md:mb-6 leading-relaxed flex-1 overflow-hidden text-xs md:text-sm line-clamp-3 md:line-clamp-4"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      lineHeight: '1.6'
                    }}
                  >
                    "{getTestimonialAtPosition(1).quote}"
                  </p>
                  <div className="flex items-center gap-2 md:gap-4 mt-auto">
                    <Image 
                      src={getTestimonialAtPosition(1).image} 
                      alt={getTestimonialAtPosition(1).author}
                      width={48} 
                      height={48} 
                      className="w-8 h-8 md:w-12 md:h-12 rounded-lg flex-shrink-0 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm md:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {getTestimonialAtPosition(1).author}
                      </div>
                      <div className="text-gray-600 text-xs md:text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {getTestimonialAtPosition(1).position}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Half-visible last testimonial */}
                <div 
                  className="clip-card flex-shrink-0 w-[80px] md:w-[200px] h-[300px] md:h-[460px] p-2 md:p-6 rounded-2xl md:rounded-3xl opacity-30 transition-all duration-700 ease-in-out flex flex-col"
                  style={{ 
                    backgroundColor: '#F6F1EB'
                  }}
                >
                  <p 
                    className="text-gray-800 mb-3 md:mb-6 leading-relaxed flex-1 overflow-hidden text-xs md:text-sm line-clamp-3 md:line-clamp-4"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      lineHeight: '1.6'
                    }}
                  >
                    "{getTestimonialAtPosition(2).quote}"
                  </p>
                  <div className="flex items-center gap-2 md:gap-4 mt-auto">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg flex-shrink-0" style={{ backgroundColor: '#F97316' }}></div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm md:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {getTestimonialAtPosition(2).author}
                      </div>
                      <div className="text-gray-600 text-xs md:text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {getTestimonialAtPosition(2).position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-white font-bold text-base md:text-lg hover:opacity-90 transition-opacity hover:cursor-pointer"
                style={{ backgroundColor: '#F97316' }}
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-white font-bold text-base md:text-lg hover:opacity-90 transition-opacity hover:cursor-pointer"
                style={{ backgroundColor: '#F97316' }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
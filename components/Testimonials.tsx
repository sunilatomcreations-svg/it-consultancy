"use client";
import React, { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Game-changer for our legacy systems. Scalable roadmap, seamless migration, minimal disruption. Highly recommended for digital transformation.",
      author: "Anjali Mehra",
      position: "CTO, TechNova Solutions"
    },
    {
      quote: "Exceeded expectations. Robust, secure platform improved efficiency by 40%. Delivered on time, within budget, and great support.",
      author: "Michael Rodriguez", 
      position: "Director of Technology, InnovateCore"
    },
    {
      quote: "Strategic guidance and technical excellence. Helped us achieve compliance and reduce costs. Invaluable partner in our growth.",
      author: "Sarah Thompson",
      position: "VP of Operations, GlobalTech Enterprises"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      className="py-16 px-4 rounded-3xl mx-6 my-8 relative overflow-hidden"
      style={{ backgroundColor: '#6B2259' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 
          className="text-center mb-12 text-white"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '48px',
            fontWeight: '500',
            lineHeight: '1.2'
          }}
        >
          What
        </h2>

        {/* Testimonials Container */}
        <div className="relative">
          <div className="flex gap-8 transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full">
                <div className="flex gap-8 justify-center">
                  {/* Show 2 cards at a time on larger screens */}
                  {[0, 1].map((offset) => {
                    const cardIndex = (index + offset) % testimonials.length;
                    return (
                      <div 
                        key={cardIndex}
                        className="bg-white rounded-2xl p-4 md:p-8 max-w-xs md:max-w-xl flex-1 min-h-[220px] md:min-h-[350px]"
                      >
                        <div className="mb-8">
                          <p 
                            className="text-gray-700 leading-relaxed text-xs md:text-base"
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '13px',
                              lineHeight: '1.5'
                            }}
                          >
                            "{testimonials[cardIndex].quote}"
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div 
                            className="w-20 h-20 rounded flex items-center justify-center text-white font-bold text-lg"
                            style={{ backgroundColor: '#F97316' }}
                          >
                            {testimonials[cardIndex].author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4 
                              className="font-semibold text-gray-900 mb-1"
                              style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '18px'
                              }}
                            >
                              {testimonials[cardIndex].author}
                            </h4>
                            <p 
                              className="text-gray-600"
                              style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '16px'
                              }}
                            >
                              {testimonials[cardIndex].position}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-12">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            style={{ backgroundColor: '#F97316' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            style={{ backgroundColor: '#F97316' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
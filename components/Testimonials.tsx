"use client";
import React, { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Engaging with TechNova IT Consultancy has been a game-changer for us. Their team took the time to deeply understand our legacy infrastructure and future growth plans, then delivered a scalable roadmap that aligned perfectly with our business goals. The execution was seamless; migration to the cloud was completed on schedule, cost overruns were minimal, and user disruption was practically zero. Their technical expertise paired with clear communication instilled confidence throughout the project lifecycle. I highly recommend them to any enterprise seeking a trusted partner for digital transformation.",
      author: "Anjali Mehra",
      position: "CTO, TechNova Solutions"
    },
    {
      quote: "Our digital transformation journey with TechNova IT Consultancy exceeded all expectations. From the initial assessment to full implementation, their team demonstrated exceptional expertise in cloud architecture and enterprise solutions. They delivered a robust, secure platform that has improved our operational efficiency by 40%. The project was delivered on time and within budget, with ongoing support that gives us complete confidence in our technology infrastructure.",
      author: "Michael Rodriguez", 
      position: "Director of Technology, InnovateCore"
    },
    {
      quote: "TechNova IT Consultancy provided the strategic guidance and technical excellence we needed to modernize our entire IT ecosystem. Their comprehensive approach to cybersecurity and cloud migration helped us achieve compliance requirements while significantly reducing operational costs. The team's professionalism and deep industry knowledge made them an invaluable partner in our growth journey.",
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
          What Our Clients Say About Us
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
                        className="bg-white rounded-2xl p-10 max-w-2xl flex-1 min-h-[400px]"
                      >
                        <div className="mb-8">
                          <p 
                            className="text-gray-700 leading-relaxed"
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '16px',
                              lineHeight: '1.7'
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
"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ServiceTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Engaging with TechNova IT Consultancy has been a game-changer for us. Their team took the time to deeply understand our legacy infrastructure and future growth plans, then delivered a scalable roadmap that aligned perfectly with our business goals. The execution was seamless: migration to the cloud was completed on schedule, cost overruns were minimal, and user disruption was practically zero. Their technical expertise paired with clear communication instilled confidence throughout the project lifecycle. I highly recommend them to any enterprise seeking a trusted partner for digital transformation.",
      author: "Anjali Mehra",
      position: "CTO, TechNova Solutions",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      quote: "Working with this consultancy transformed our entire approach to technology. Their innovative solutions and dedicated support helped us achieve remarkable growth and efficiency improvements across all our operations.",
      author: "Sarah Johnson",
      position: "CEO, Innovation Labs",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 3,
      quote: "The level of expertise and professionalism displayed by their team exceeded our expectations. They delivered complex solutions on time and within budget while maintaining excellent communication throughout the process.",
      author: "Michael Chen",
      position: "Director of IT, Global Corp",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 4,
      quote: "Their strategic guidance and technical implementation have been instrumental in our digital transformation journey. The results speak for themselves - improved efficiency, reduced costs, and enhanced customer satisfaction.",
      author: "Emily Rodriguez",
      position: "VP of Operations, Future Tech",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getTestimonialAtPosition = (offset: number) => {
    const index = (currentIndex + offset + testimonials.length) % testimonials.length;
    return testimonials[index];
  };

  return (
    <section className="py-10 px-4" style={{ backgroundColor: '#F6F1EB' }}>
      <div className="max-w-full mx-auto">
        <div className="relative">
          {/* Purple background panel */}
          <div 
            className="rounded-3xl p-12"
            style={{ backgroundColor: '#6B2259' }}
          >
            {/* Title */}
            <h2 
              className="text-center text-white mb-12"
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
            <div className="relative overflow-hidden" style={{ height: '550px' }}>
              <div className="flex justify-center items-center relative" style={{ width: '100%', height: '100%' }}>
                {/* Render all testimonials with different positions and scales */}
                {testimonials.map((testimonial, index) => {
                  const position = (index - currentIndex + testimonials.length) % testimonials.length;
                  let translateX = 0;
                  let scale = 0.8;
                  let opacity = 0.6;
                  let zIndex = 1;
                  let width = '380px';
                  let height = '350px';
                  
                  // Center position
                  if (position === 0) {
                    translateX = 0;
                    scale = 1;
                    opacity = 1;
                    zIndex = 3;
                    width = '700px';
                    height = '500px';
                  }
                  // Left position  
                  else if (position === testimonials.length - 1) {
                    translateX = -540;
                    scale = 0.8;
                    opacity = 0.6;
                    zIndex = 2;
                  }
                  // Right position
                  else if (position === 1) {
                    translateX = 540;
                    scale = 0.8;
                    opacity = 0.6;
                    zIndex = 2;
                  }
                  // Hidden positions
                  else {
                    translateX = position < testimonials.length / 2 ? -1050 : 1050;
                    scale = 0.6;
                    opacity = 0;
                    zIndex = 0;
                  }

                  return (
                    <div
                      key={testimonial.id}
                      className="absolute rounded-3xl flex flex-col"
                      style={{ 
                        backgroundColor: '#F6F1EB',
                        width: width,
                        height: height,
                        padding: position === 0 ? '32px' : '24px',
                        zIndex: zIndex,
                        transform: `translateX(${translateX}px) scale(${scale})`,
                        opacity: opacity,
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        top: '50%',
                        left: '50%',
                        marginLeft: position === 0 ? '-350px' : '-190px',
                        marginTop: position === 0 ? '-250px' : '-175px',
                        transformOrigin: 'center center',
                        willChange: 'transform, opacity',
                        backfaceVisibility: 'hidden',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      <p 
                        className="text-gray-800 mb-4 leading-relaxed flex-1 overflow-hidden"
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '16px',
                          lineHeight: '1.5',
                          display: '-webkit-box',
                          WebkitLineClamp: position === 0 ? '8' : '4',
                          WebkitBoxOrient: 'vertical',
                          marginBottom: '24px',
                          transform: 'translateZ(0)',
                          WebkitFontSmoothing: 'antialiased'
                        }}
                      >
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
                        <Image 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="rounded-lg flex-shrink-0 object-cover"
                        />
                        <div>
                          <div 
                            className="font-semibold text-gray-900" 
                            style={{ 
                              fontFamily: 'DM Sans, sans-serif', 
                              fontSize: '18px'
                            }}
                          >
                            {testimonial.author}
                          </div>
                          <div 
                            className="text-gray-600" 
                            style={{ 
                              fontFamily: 'DM Sans, sans-serif', 
                              fontSize: '16px'
                            }}
                          >
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded flex items-center justify-center text-white hover:opacity-80 cursor-pointer transition-opacity"
                style={{ backgroundColor: '#F97316' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded flex items-center justify-center text-white hover:opacity-80 cursor-pointer transition-opacity"
                style={{ backgroundColor: '#F97316' }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonial;
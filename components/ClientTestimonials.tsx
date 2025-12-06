'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ClientTestimonials = () => {
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
            <div className="relative overflow-hidden">
              <div className="flex justify-center" style={{ width: '100%', gap: '32px' }}>
                {/* Half-visible first testimonial */}
                <div
                  className="flex-shrink-0 p-6 rounded-3xl opacity-30 transition-opacity duration-500 flex flex-col"
                  style={{ 
                    backgroundColor: '#F6F1EB',
                    width: '200px',
                    height: '460px'
                  }}
                >
                  <p 
                    className="text-gray-800 mb-6 leading-relaxed flex-1 overflow-hidden"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      display: '-webkit-box',
                      WebkitLineClamp: '4',
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    "{getTestimonialAtPosition(-1).quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Image 
                      src={getTestimonialAtPosition(-1).image} 
                      alt={getTestimonialAtPosition(-1).author}
                      width={48} 
                      height={48} 
                      className="rounded-lg flex-shrink-0 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px' }}>
                        {getTestimonialAtPosition(-1).author}
                      </div>
                      <div className="text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>
                        {getTestimonialAtPosition(-1).position}
                      </div>
                    </div>
                  </div>
                </div>

                {/* First fully visible testimonial */}
                <div
                  className="flex-shrink-0 p-6 rounded-3xl opacity-100 transition-opacity duration-500 flex flex-col"
                  style={{ 
                    backgroundColor: '#F6F1EB',
                    width: '500px',
                    height: '460px'
                  }}
                >
                  <p 
                    className="text-gray-800 mb-6 leading-relaxed flex-1 overflow-hidden"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      display: '-webkit-box',
                      WebkitLineClamp: '4',
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    "{getTestimonialAtPosition(0).quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Image 
                      src={getTestimonialAtPosition(0).image} 
                      alt={getTestimonialAtPosition(0).author}
                      width={48} 
                      height={48} 
                      className="rounded-lg flex-shrink-0 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px' }}>
                        {getTestimonialAtPosition(0).author}
                      </div>
                      <div className="text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>
                        {getTestimonialAtPosition(0).position}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second fully visible testimonial */}
                <div
                  className="flex-shrink-0 p-6 rounded-3xl opacity-100 transition-opacity duration-500 flex flex-col"
                  style={{ 
                    backgroundColor: '#F6F1EB',
                    width: '500px',
                    height: '460px'
                  }}
                >
                  <p 
                    className="text-gray-800 mb-6 leading-relaxed flex-1 overflow-hidden"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      display: '-webkit-box',
                      WebkitLineClamp: '4',
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    "{getTestimonialAtPosition(1).quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Image 
                      src={getTestimonialAtPosition(1).image} 
                      alt={getTestimonialAtPosition(1).author}
                      width={48} 
                      height={48} 
                      className="rounded-lg flex-shrink-0 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px' }}>
                        {getTestimonialAtPosition(1).author}
                      </div>
                      <div className="text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>
                        {getTestimonialAtPosition(1).position}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Half-visible last testimonial */}
                <div
                  className="flex-shrink-0 p-6 rounded-3xl opacity-30 transition-opacity duration-500 flex flex-col"
                  style={{ 
                    backgroundColor: '#F6F1EB',
                 
                    width: '200px',
                    height: '460px'
                  }}
                >
                  <p 
                    className="text-gray-800 mb-6 leading-relaxed flex-1 overflow-hidden"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      display: '-webkit-box',
                      WebkitLineClamp: '4',
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    "{getTestimonialAtPosition(2).quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-lg flex-shrink-0" style={{ backgroundColor: '#F97316' }}></div>
                    <div>
                      <div className="font-semibold text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px' }}>
                        {getTestimonialAtPosition(2).author}
                      </div>
                      <div className="text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>
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
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg hover:opacity-90 transition-opacity hover:cursor-pointer"
                style={{ backgroundColor: '#F97316' }}
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg hover:opacity-90 transition-opacity hover:cursor-pointer"
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
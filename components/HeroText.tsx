import React from 'react';
import Link from 'next/link';

const HeroText = () => {
  return (
    <section className="py-8 md:py-12 lg:py-5 px-4 md:px-6 lg:px-8" style={{ backgroundColor: '#F6F1EB' }}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <h1 
          className="text-gray-900 mb-6 md:mb-8 leading-tight select-none text-lg md:text-3xl lg:text-5xl"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: '400',
            lineHeight: '1.2'
          }}
        >
          <span className="block">We're architects of the digital future,</span>
          <span className="block">crafting websites and apps that transcend</span>
          <span className="block">screens and enter the realm of experience.</span>
        </h1>

        {/* Subtext */}
        <p 
          className="text-gray-800 max-w-5xl mx-auto select-none text-sm md:text-lg lg:text-2xl"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: '400',
            lineHeight: '1.4'
          }}
        >
          Our team of certified IT consultants and technology experts deliver comprehensive solutions including cloud migration, digital transformation, cybersecurity, and enterprise software development. We understand your business challenges and architect solutions that drive sustainable growth.
        </p>
        
        {/* Talk to Our Experts Button */}
        <div className="mt-6 md:mt-8 lg:mt-10">
          <Link 
            href="/contact"
            className="px-4 md:px-6 py-2 md:py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity hover:cursor-pointer inline-block text-sm md:text-base"
            style={{ backgroundColor: '#F97316', fontFamily: 'DM Sans, sans-serif' }}
          >
         Talk to Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroText;
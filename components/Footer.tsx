"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { referData } from '../referData';

const Footer = () => {
  // Load footer sections from referData
  const settings = {
    borderRadius: 8,
    padding: 40,
    sections: referData,
    showGetInTouch: true
  };

  return (
    <div className="relative mx-0 md:mx-4 lg:mx-6 my-0 md:my-2 min-h-[500px] bg-[#F6F1EB]">
      {/* Purple background for mobile */}
      <div className="md:hidden absolute inset-0 bg-[#6B2259]"></div>
      
      {/* Background with smooth chamfer clip-path - Desktop only */}
      <svg 
        className="hidden md:block absolute top-0 left-0 right-0 w-full"
        style={{
          maxWidth: '100%',
          height: '620px',
        }}
        viewBox="0 0 399 159"
        preserveAspectRatio="none"
      >
        <path 
          d="M 40 0 L 375 0 Q 399 0 399 24 L 399 119 Q 399 127 393.34 132.66 L 372.66 153.34 Q 367 159 359 159 L 24 159 Q 0 159 0 135 L 0 40 Q 0 32 5.66 26.34 L 26.34 5.66 Q 32 0 40 0 Z"
          fill="#6B2259"
        />
      </svg>
      
      <div className="relative z-10 p-2 md:p-3 lg:p-6">
        <div className="max-w-7xl mt-5 md:mt-20 mb-5 md:mb-22 mx-0 md:mx-auto">
        <div 
          style={{ 
            backgroundColor: '#F6F1EB',
            borderRadius: `${settings.borderRadius}px`
          }} 
          className="mx-2 md:mx-0 p-2 md:p-6 lg:py-5 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 lg:gap-6">
            
            {settings.sections.map((section) => (
              <div key={section.id}>
                <div 
                  style={{ 
                    backgroundColor: '#F97316'
                  }} 
                  className="w-full md:w-auto min-h-[44px] md:h-[50px] inline-flex items-center justify-center px-2 md:px-4 py-2 rounded text-white font-semibold mb-3 md:mb-4 text-xs md:text-base"
                >
                  {section.title}
                </div>
                <ul className="space-y-1 md:space-y-2">
                  {section.items && section.items.map((item: any, index: number) => (
                    <li key={index} className="flex items-center min-h-[44px] md:min-h-0">
                      <svg 
                        className="w-2 h-2 md:w-3 md:h-3 mr-2 md:mr-3 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="#F97316"
                        style={{ transform: 'rotate(45deg)' }}
                      >
                        <path d="M12 2L19 6.5V17.5L12 22L5 17.5V6.5L12 2Z" />
                      </svg>
                      {item && typeof item === 'object' ? (
                        item.href ? (
                          <Link href={item.href} className="text-gray-700 text-sm md:text-base hover:text-[#F97316] transition-colors">{item.label}</Link>
                        ) : (
                          <span className="text-gray-700 text-sm md:text-base hover:text-[#F97316] transition-colors">{item.label}</span>
                        )
                      ) : (
                        <span className="text-gray-700 text-sm md:text-base">{String(item)}</span>
                      )}
                    </li>
                  ))}
                </ul>
                {section.viewMore && (
                  <div className="mt-3 md:mt-4 flex items-center">
                    <Link href={section.viewMore.href} className="text-gray-700 underline flex items-center text-sm md:text-base min-h-[44px] md:min-h-0 hover:text-[#F97316] transition-colors">
                      {section.viewMore.label}
                      <svg 
                        className="w-2 h-2 md:w-3 md:h-3 ml-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="#F97316"
                        style={{ transform: 'rotate(45deg)' }}
                      >
                        <path d="M12 2L19 6.5V17.5L12 22L5 17.5V6.5L12 2Z" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {settings.showGetInTouch && (
            <div className="mt-6 md:mt-8">
              <Link 
                href="/contact"
                style={{ backgroundColor: '#6B2259' }} 
                className="w-full md:w-auto px-6 py-3 text-white font-semibold rounded hover:opacity-90 transition-opacity block md:inline-block cursor-pointer text-center text-sm md:text-base"
              >
                Get In Touch
              </Link>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
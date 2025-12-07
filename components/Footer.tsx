"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  // Default settings - using static data instead of context to avoid import issues
  const settings = {
    borderRadius: 8,
    padding: 40,
    sections: [
      {
        id: 'company',
        title: 'Our Company',
        items: [
          'About',
          'Core Team', 
          'Careers',
          'CSR',
          'How We Work'
        ],
        hasViewMore: false
      },
      {
        id: 'services',
        title: 'Services',
        items: [
          'Digital Transformation',
          'Consulting',
          'Mobile App Development',
          'Software Development',
          'Cloud Services',
          'Managed IT Services'
        ],
        hasViewMore: true
      },
      {
        id: 'technologies',
        title: 'Technologies',
        items: [
          'Artificial Intelligence',
          'RPA',
          'IoT (Internet of Things)',
          'AR/VR',
          'Blockchain',
          'Cybersecurity'
        ],
        hasViewMore: true
      },
      {
        id: 'industries',
        title: 'Industries',
        items: [
          'Healthcare',
          'Finance',
          'Automotive',
          'Education',
          'On-Demand',
          'eCommerce'
        ],
        hasViewMore: true
      },
      {
        id: 'resources',
        title: 'Resources',
        items: [
          'Blogs',
          'Press Releases',
          'Guides',
          'Client Testimonials'
        ],
        hasViewMore: false
      }
    ],
    showGetInTouch: true
  };

  return (
    <div className="relative mx-0 md:mx-4 lg:mx-6 my-0 md:my-2">
      {/* Mobile: Simple rectangle */}
      <svg 
        className="absolute inset-0 w-full h-full md:hidden" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        fill="#6B2259"
      >
        <rect x="0" y="0" width="100" height="100" />
      </svg>
      
      {/* Tablet/Desktop: Angled polygon */}
      <svg 
        className="hidden md:block absolute inset-0 w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        fill="#6B2259"
      >
        <path d="M5,0 
       L100,0 
       L100,10 
       L100,90 
       L95,100 
       L15,100 
       L0,100 
       L0,100 
       L0,10 
       Z" 
 />
      </svg>
      
      <div className="relative z-10 p-1 md:p-3 lg:p-6">
        <div className="max-w-8xl mt-5 md:mt-22 mb-5 md:mb-22 mx-auto">
        <div 
          style={{ 
            backgroundColor: '#F6F1EB',
            borderRadius: `${settings.borderRadius}px`
          }} 
          className="mx-0 md:mx-2 lg:mx-4 p-2 md:p-6 lg:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 lg:gap-8">
            
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
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-center min-h-[44px] md:min-h-0">
                      <svg 
                        className="w-2 h-2 md:w-3 md:h-3 mr-2 md:mr-3 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="#F97316"
                        style={{ transform: 'rotate(45deg)' }}
                      >
                        <path d="M12 2L19 6.5V17.5L12 22L5 17.5V6.5L12 2Z" rx="2" />
                      </svg>
                      <span className="text-gray-700 text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                {section.hasViewMore && (
                  <div className="mt-3 md:mt-4 flex items-center">
                    <a href="#" className="text-gray-700 underline flex items-center text-sm md:text-base min-h-[44px] md:min-h-0">
                      View More
                      <svg 
                        className="w-2 h-2 md:w-3 md:h-3 ml-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="#F97316"
                        style={{ transform: 'rotate(45deg)' }}
                      >
                        <path d="M12 2L19 6.5V17.5L12 22L5 17.5V6.5L12 2Z" rx="2" />
                      </svg>
                    </a>
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
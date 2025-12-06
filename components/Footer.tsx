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
    <div className="relative mx-6 my-2">
      <svg 
        className="absolute inset-0 w-full h-full" 
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
      
      <div className="relative z-10 p-6">
        <div className="max-w-8xl mt-22 mb-22 mx-auto">
        <div 
          style={{ 
            backgroundColor: '#F6F1EB',
            borderRadius: `${settings.borderRadius}px`,
            padding: `${settings.padding}px`
          }} 
          className="mx-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            
            {settings.sections.map((section) => (
              <div key={section.id}>
                <div 
                  style={{ 
                    backgroundColor: '#F97316',
                    width: '217.74px',
                    height: '50px'
                  }} 
                  className="inline-flex items-center justify-center px-4 py-2 rounded text-white font-semibold mb-4"
                >
                  {section.title}
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        className="mr-3"
                        fill="#F97316"
                        style={{ transform: 'rotate(45deg)' }}
                      >
                        <path d="M12 2L19 6.5V17.5L12 22L5 17.5V6.5L12 2Z" rx="2" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                {section.hasViewMore && (
                  <div className="mt-4 flex items-center">
                    <a href="#" className="text-gray-700 underline flex items-center">
                      View More
                      <svg 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        className="ml-2"
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
            <div className="mt-8">
              <Link 
                href="/contact"
                style={{ backgroundColor: '#6B2259' }} 
                className="px-6 py-3 text-white font-semibold rounded hover:opacity-90 transition-opacity inline-block cursor-pointer"
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
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useService, serviceDetails } from '@/contexts/ServiceContext';

interface Service {
  image?: string;
  icon?: React.ReactNode;
  title: string;
}

const serviceCardStyles = `
  .service-card {
    min-height: 130px;
    aspect-ratio: 1 / 1;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    .service-card {
      min-height: 180px;
      aspect-ratio: 1.4 / 1;
    }
  }
  .service-icon-container {
    height: auto;
    margin-top: auto;
    margin-bottom: 10;
    transition: margin-top 0.3s ease, margin-bottom 0.3s ease;
  }
  .service-card h3 {
    transition: transform 0.3s ease;
  }
  @media (min-width: 768px) {
    .service-icon-container {
      margin-top: 45px;
    }
  }
  @media (min-width: 1024px) {
    .service-card:hover .service-icon-container {
      margin-top: 25px;
      margin-bottom: 20px;
    }
    .service-card:hover h3 {
      transform: translateY(40px);
    }
  }
`;

const OurServices = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const { setSelectedService } = useService();
  
  const handleServiceClick = (serviceTitle: string) => {
    const serviceDetail = serviceDetails[serviceTitle];
    if (serviceDetail) {
      setSelectedService(serviceDetail);
    }
  };
  
  const services: Service[] = [
    {
      image: "/home_page_assets/ourservices/1.png",
      title: "AI Development Services"
    },
    {
      image: "/home_page_assets/ourservices/2.png",
      title: "App Development"
    },
    {
      image: "/home_page_assets/ourservices/3.png",
      title: "Software Development"
    },
    {
      image: "/home_page_assets/ourservices/4.png",
      title: "Digital Transformation"
    },
    {
      image: "/home_page_assets/ourservices/5.png",
      title: "Ideation and Design Strategy"
    },
    {
      image: "/home_page_assets/ourservices/6.png",
      title: "IT Consultancy"
    },
    {
      image: "/home_page_assets/ourservices/7.png",
      title: "DevOps"
    },
    {
      image: "/home_page_assets/ourservices/8.png",
      title: "Cloud Managed Services"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,14H9V12H11V10L14,12L11,14M15,9H13V7H15V9Z"/>
        </svg>
      ),
      title: "Web Development"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.9 16,12.4 16,13V16C16,17 15,18 14,18H10C9,18 8,17 8,16V13C8,12.4 8.4,11.9 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9 10.2,10V11.5H13.8V10C13.8,9 12.8,8.2 12,8.2Z"/>
        </svg>
      ),
      title: "Cybersecurity Solutions"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"/>
        </svg>
      ),
      title: "Data Analytics"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,17L8,12L9.41,10.58L13,14.17L20.59,6.58L22,8L13,17Z"/>
        </svg>
      ),
      title: "Digital Marketing"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M9,2V8H7V10H9V16C9,18.67 10.33,20 12,20C12.8,20 13.53,19.78 14.05,19.37L13.5,18.75C13.16,18.94 12.6,19 12,19C11.07,19 10,18.07 10,16V10H13V8H10V2H9M15,10H17V8H15V10M19,10H21V8H19V10M17,12H15V14H17V12M21,12H19V14H21V12M17,16H15V18H17V16M21,16H19V18H21V16Z"/>
        </svg>
      ),
      title: "UI/UX Design"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4Z"/>
        </svg>
      ),
      title: "Blockchain Development"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M9 2L3 6v12l6 4 6-4 6 4V6l-6-4-6 4-6-4zm0 4l3 2 3-2 3 2v10l-3-2-3 2-3-2-3 2V8l3 2 3-2-3-2z" />
          <path d="M9 11l2 1.2L9 13.4V11zm6 0v2.4l-2-1.2 2-1.2zM12 14.6l2 1.2-2 1.2-2-1.2 2-1.2z" />
        </svg>
      ),
      title: "Quality Assurance & Testing"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,6L14.39,10.42L19.5,10.75L16,14.58L17.18,19.17L12,16.31L6.82,19.17L8,14.58L4.5,10.75L9.61,10.42L12,6Z"/>
        </svg>
      ),
      title: "Digital Marketing"
    },
  ];

  useEffect(() => {
    const updateItemsPerPage = () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      setItemsPerPage(isMobile ? 4 : 8);
      setCurrentPage(0); // reset to first page on breakpoint change
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const currentServices = services.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-4 px-4" style={{ backgroundColor: '#F6F1EB' }}>
      <style>{serviceCardStyles}</style>
      <div className="relative mx-2 my-3">
        <div 
          className="relative z-10 py-8 px-4"
          style={{ 
            backgroundColor: '#6B2259',
            borderRadius: '24px'
          }}
        >
          <div className="max-w-8xl mx-auto">
            {/* Title */}
            <h2 
              className="text-center text-white mb-3 text-3xl md:text-4xl lg:text-5xl"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '500'
              }}
            >
              Our Services
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
              {currentServices.map((service, index) => (
                <div 
                  key={index}
                  className="p-4 md:p-6 lg:p-8 text-center cursor-pointer transition-transform duration-200 ease-in-out hover:transform hover:-translate-y-1 relative overflow-hidden service-card"
                  style={{ 
                    backgroundColor: '#F6F1EB', 
                    borderRadius: '24px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.02)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                  }}
                  onClick={() => handleServiceClick(service.title)}
                >
                  {/* Image or Icon */}
                  <div 
                    className="mb-3 md:mb-6 flex items-center justify-center service-icon-container"
                  >
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={36}
                        height={36}
                        className="w-9 h-9 md:w-12 md:h-12 object-contain"
                      />
                    ) : (
                      <div className="text-black">
                        {service.icon}
                      </div>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-black text-base md:text-lg lg:text-lg"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: '500',
                      lineHeight: '1.3'
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-3">
              <div className="relative">
                <svg 
                  className="absolute inset-0 w-full h-full" 
                  viewBox="0 0 40 40" 
                  preserveAspectRatio="none"
                  fill="#F97316"
                >
                  <path d="M4,0 L36,0 L40,4 L40,36 L36,40 L4,40 L0,36 L0,4 Z" />
                </svg>
                <button
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className="relative z-10 w-10 h-10 text-white font-black text-xl hover:opacity-90 transition-opacity disabled:opacity-30 hover:cursor-pointer"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                >
                  ←
                </button>
              </div>
              <div className="relative">
                <svg 
                  className="absolute inset-0 w-full h-full" 
                  viewBox="0 0 40 40" 
                  preserveAspectRatio="none"
                  fill="#F97316"
                >
                  <path d="M4,0 L36,0 L40,4 L40,36 L36,40 L4,40 L0,36 L0,4 Z" />
                </svg>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                  disabled={currentPage === totalPages - 1}
                  className="relative z-10 w-10 h-10 text-white font-black text-xl hover:opacity-90 transition-opacity disabled:opacity-30 hover:cursor-pointer"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
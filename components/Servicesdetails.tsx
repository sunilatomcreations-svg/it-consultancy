"use client";
import React, { useRef, useEffect, useState } from 'react';
import './servicesdetails-mobile.css';
import Link from 'next/link';
import { useService, serviceDetails } from '@/contexts/ServiceContext';

interface ServicesdetailsProps {
  serviceName?: string;
}

const Servicesdetails = ({ serviceName }: ServicesdetailsProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);
    const { selectedService } = useService();

    // Use the prop serviceName if provided, otherwise fall back to selectedService
    const service = serviceName ? serviceDetails[serviceName] : selectedService;

    useEffect(() => {
      if (!service) return;
      const observer = new window.IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setAnimate(false); // Reset first to allow replay
            setTimeout(() => setAnimate(true), 50); // Replay animation
          }
        },
        { threshold: 0.3 }
      );
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      return () => observer.disconnect();
    }, [service?.id]);
  
  if (!service) {
    return null;
  }

  return (
    <div ref={sectionRef} id={service.id} className="bg-[#F6F1EB] py-8 px-4 md:py-16 md:px-8 scroll-mt-20 servicesdetails-mobile">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center servicesdetails-mobile-grid">
          
          {/* Left Side - Content */}
          <div className="space-y-8 servicesdetails-mobile-left">
            {/* Description Text */}
            <div className="space-y-4">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <span
                  className={animate ? "slide-in-left-desc" : ""}
                  style={{ display: 'inline-block' }}
                >
                  {service.description}
                </span>
              </p>
            </div>
            
            {/* Service Cards */}
            <div className="space-y-4">
              {/* First Row - Two Cards */}
              <div className="flex gap-2 md:gap-4">
                <div className={"bg-orange-500 text-white px-2 py-2 md:py-4 rounded-lg font-medium text-sm md:text-base hover:bg-orange-600 transition-colors cursor-pointer md:!animation-none " + (animate ? "slide-in-left-btn" : "") }>
                  {service.features[0]}
                </div>
                <div className={"bg-orange-500 text-white px-2 py-2 md:py-4 rounded-lg font-medium text-sm md:text-base hover:bg-orange-600 transition-colors cursor-pointer md:!animation-none " + (animate ? "slide-in-left-btn" : "") }>
                  {service.features[1]}
                </div>
              </div>
              
              {/* Second Row - One Card */}
              <div className="flex">
                <div className={"bg-orange-500 text-white px-4 py-2 md:px-6 md:py-4 rounded-lg font-medium text-sm md:text-base hover:bg-orange-600 transition-colors cursor-pointer md:!animation-none " + (animate ? "slide-in-left-btn" : "") }>
                  {service.features[2]}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Title and CTA */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-right servicesdetails-mobile-right">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 slide-in-right-all">
                <span className={animate ? "slide-in-right-all" : ""}>{service.title}</span>
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 slide-in-right-all">
                <span className={animate ? "slide-in-right-all" : ""}>{service.subtitle}</span>
              </h2>
            </div>
            <p className="text-gray-700 text-base md:text-2xl lg:text-3xl">
              <span className={animate ? "slide-in-right-all" : ""}>{service.tagline}</span>
            </p>
            <div className="flex justify-center lg:justify-end">
              <div className="servicesdetails-mobile-btn w-full">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-8 md:py-3 rounded-lg font-medium text-sm md:text-base transition-colors inline-block slide-in-right-all">
                  <span className={animate ? "slide-in-right-all" : ""}>Get Details</span>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Servicesdetails;

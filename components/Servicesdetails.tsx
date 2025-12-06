"use client";
import React from 'react';
import Link from 'next/link';
import { useService } from '@/contexts/ServiceContext';

const Servicesdetails = () => {
  const { selectedService } = useService();

  if (!selectedService) {
    return null;
  }

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Description Text */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedService.description}
              </p>
            </div>
            
            {/* Service Cards */}
            <div className="space-y-4">
              {/* First Row - Two Cards */}
              <div className="flex gap-4">
                <div className="bg-orange-500 text-white px-2 py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors cursor-pointer">
                  {selectedService.features[0]}
                </div>
                <div className="bg-orange-500 text-white px-3 py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors cursor-pointer">
                  {selectedService.features[1]}
                </div>
              </div>
              
              {/* Second Row - One Card */}
              <div className="flex">
                <div className="bg-orange-500 text-white px-6 py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors cursor-pointer">
                  {selectedService.features[2]}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Title and CTA */}
          <div className="space-y-8 text-center lg:text-right">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
                {selectedService.title}
              </h2>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
                {selectedService.subtitle}
              </h2>
            </div>
            
            <p className="text-gray-700" style={{ fontSize: '30px' }}>
              {selectedService.tagline}
            </p>
            
            <div className="flex justify-center lg:justify-end">
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block">
                Get Details
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Servicesdetails;

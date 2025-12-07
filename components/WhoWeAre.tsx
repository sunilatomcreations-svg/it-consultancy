'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <section className="py-2 md:py-30 lg:py-2 px-4 md:px-6 lg:px-8" style={{ backgroundColor: '#F6F1EB' }}>
      <div className="max-w-9xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Left Side - Purple Section */}
          <div 
            className="p-6 md:p-8 lg:p-10 rounded-3xl text-white flex flex-col h-full"
            style={{ backgroundColor: '#6B2259' }}
          >
            <h2 
              className="mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '500',
                lineHeight: '1.2'
              }}
            >
              Who We Are
            </h2>
            
            <p 
              className="mb-6 md:mb-8 text-white/90 text-sm md:text-base"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                lineHeight: '1.6'
              }}
            >
              We are a leading IT consultancy firm specializing in digital transformation, cloud solutions, and enterprise software development. Our expert team delivers innovative technology solutions that drive business growth and operational excellence.
            </p>

            {/* Bottom row: stats left, CTA right */}
            <div className="mt-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-4">
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <div>
                  <div 
                    className="text-white mb-2 text-lg md:text-2xl lg:text-4xl"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: '600'
                    }}
                  >
                    22,000+
                  </div>
                  <div 
                    className="text-white/80 text-xs md:text-sm"
                    style={{
                      fontFamily: 'DM Sans, sans-serif'
                    }}
                  >
                    Projects Delivered
                  </div>
                </div>

                <div>
                  <div 
                    className="text-white mb-2 text-lg md:text-2xl lg:text-4xl"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: '600'
                    }}
                  >
                    8,000+
                  </div>
                  <div 
                    className="text-white/80 text-xs md:text-sm"
                    style={{
                      fontFamily: 'DM Sans, sans-serif'
                    }}
                  >
                    Clients Served
                  </div>
                </div>

                <div>
                  <div 
                    className="text-white mb-2 text-lg md:text-2xl lg:text-4xl"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: '600'
                    }}
                  >
                    23+
                  </div>
                  <div 
                    className="text-white/80 text-xs md:text-sm"
                    style={{
                      fontFamily: 'DM Sans, sans-serif'
                    }}
                  >
                    Countries Served
                  </div>
                </div>

                <div>
                  <div 
                    className="text-white mb-2 text-lg md:text-2xl lg:text-4xl"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: '600'
                    }}
                  >
                    9+
                  </div>
                  <div 
                    className="text-white/80 text-xs md:text-sm"
                    style={{
                      fontFamily: 'DM Sans, sans-serif'
                    }}
                  >
                    Average NPS
                  </div>
                </div>
              </div>

              <Link 
                href="/contact"
                className="md:shrink-0 px-5 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity hover:cursor-pointer text-sm md:text-base"
                style={{ backgroundColor: '#F97316' }}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="h-[400px] md:min-h-[400px] lg:min-h-[520px] rounded-3xl overflow-hidden">
            <Image
              src="/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png"
              alt="Who We Are Image"
              width={600}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;


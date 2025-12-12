'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WhoWeAre = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    countries: 0,
    nps: 0
  });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Reset counters to 0
          setCounters({
            projects: 0,
            clients: 0,
            countries: 0,
            nps: 0
          });

          // Animate Projects (22,000)
          const projectsTarget = 22000;
          const projectsDuration = 2000;
          const projectsIncrement = projectsTarget / (projectsDuration / 16);
          let projectsCurrent = 0;
          
          const projectsInterval = setInterval(() => {
            projectsCurrent += projectsIncrement;
            if (projectsCurrent >= projectsTarget) {
              projectsCurrent = projectsTarget;
              clearInterval(projectsInterval);
            }
            setCounters(prev => ({ ...prev, projects: Math.floor(projectsCurrent) }));
          }, 16);

          // Animate Clients (8,000)
          const clientsTarget = 8000;
          const clientsDuration = 2000;
          const clientsIncrement = clientsTarget / (clientsDuration / 16);
          let clientsCurrent = 0;
          
          const clientsInterval = setInterval(() => {
            clientsCurrent += clientsIncrement;
            if (clientsCurrent >= clientsTarget) {
              clientsCurrent = clientsTarget;
              clearInterval(clientsInterval);
            }
            setCounters(prev => ({ ...prev, clients: Math.floor(clientsCurrent) }));
          }, 16);

          // Animate Countries (23)
          const countriesTarget = 23;
          const countriesDuration = 1500;
          const countriesIncrement = countriesTarget / (countriesDuration / 16);
          let countriesCurrent = 0;
          
          const countriesInterval = setInterval(() => {
            countriesCurrent += countriesIncrement;
            if (countriesCurrent >= countriesTarget) {
              countriesCurrent = countriesTarget;
              clearInterval(countriesInterval);
            }
            setCounters(prev => ({ ...prev, countries: Math.floor(countriesCurrent) }));
          }, 16);

          // Animate NPS (9)
          const npsTarget = 9;
          const npsDuration = 1500;
          const npsIncrement = npsTarget / (npsDuration / 16);
          let npsCurrent = 0;
          
          const npsInterval = setInterval(() => {
            npsCurrent += npsIncrement;
            if (npsCurrent >= npsTarget) {
              npsCurrent = npsTarget;
              clearInterval(npsInterval);
            }
            setCounters(prev => ({ ...prev, nps: Math.floor(npsCurrent) }));
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
              <div ref={statsRef} className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <div>
                  <div 
                    className="text-white mb-2 text-lg md:text-2xl lg:text-4xl"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: '600'
                    }}
                  >
                    {counters.projects.toLocaleString()}+
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
                    {counters.clients.toLocaleString()}+
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
                    {counters.countries}+
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
                    {counters.nps}+
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

          {/* Right Side - Image and Team Section */}
          <div className="flex flex-col gap-0">
            {/* Top Half - Image */}
            <div className="h-[250px] md:h-[300px] rounded-t-3xl overflow-hidden relative flex items-center justify-center">
              <Image
                src="/70730ab86b76f312c94261995a5a5f645367a125 (1).png"
                alt="Who We Are Image"
                width={375}
                height={375}
                className="object-cover max-h-[450px]"
              />
              {/* Logo Overlay */}
             
            </div>

            {/* Bottom Half - Team Avatars */}
            <div className="bg-gray-100 rounded-b-3xl p-8 md:p-10 lg:p-12 relative min-h-[300px] overflow-hidden">
              {/* Title */}
              <h3 
                className="text-center text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-700 relative z-10"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.2'
                }}
              >
                Small Team<br />Big Results
              </h3>

              {/* Foggy Effect Overlays */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {/* Left Fog */}
                <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-gray-100 via-gray-100/90 via-gray-100/60 via-gray-100/30 to-transparent"></div>
                {/* Right Fog */}
                <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-gray-100 via-gray-100/90 via-gray-100/60 via-gray-100/30 to-transparent"></div>
              </div>

              {/* Sliding Avatars Animation */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes slideLeft {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                @keyframes slideRight {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }
              `}} />
              
              {/* First Row - Sliding Left */}
              <div className="absolute top-28 lg:top-36 left-0 right-0 flex items-center">
                <div 
                  className="flex gap-6"
                  style={{
                    animation: 'slideLeft 20s linear infinite',
                    width: 'max-content'
                  }}
                >
                  {/* First set of avatars */}
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=1" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=2" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=3" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=4" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=5" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=6" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=7" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=8" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=9" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=10" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=1" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=2" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=3" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=4" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=5" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=6" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=7" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=8" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=9" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=10" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Second Row - Sliding Right */}
              <div className="absolute bottom-12 lg:bottom-5 left-0 right-0 flex items-center">
                <div 
                  className="flex gap-6"
                  style={{
                    animation: 'slideRight 20s linear infinite',
                    width: 'max-content'
                  }}
                >
                  {/* First set of avatars */}
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=11" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=12" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=13" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=14" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=15" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=16" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=17" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=18" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=19" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=20" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=11" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=12" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=13" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=14" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=15" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=16" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=17" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=18" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=19" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://i.pravatar.cc/64?img=20" alt="Team member" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;


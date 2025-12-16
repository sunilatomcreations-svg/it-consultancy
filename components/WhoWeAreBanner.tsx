'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function WhoWeAreBanner() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    nps: 0,
    countries: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate Projects (22,000)
          const projectsDuration = 2000;
          const projectsTarget = 22000;
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
          const clientsDuration = 2000;
          const clientsTarget = 8000;
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

          // Animate NPS (9)
          const npsDuration = 1500;
          const npsTarget = 9;
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

          // Animate Countries (23)
          const countriesDuration = 1500;
          const countriesTarget = 23;
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
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.error('Video play failed:', err));
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero Banner Section */}
      <div 
        data-clip="big"
        className="clip-card relative h-[400px] md:h-[550px] rounded-lg mx-4 md:mx-8 mb-8 md:mb-16 overflow-hidden"
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          onError={(e) => console.error('Video failed to load:', e)}
          onLoadedData={() => console.log('Video loaded successfully')}
        >
          <source src="https://res.cloudinary.com/dae90vgu0/video/upload/v1765310271/3255390-uhd_3840_2160_25fps_bs2e9e.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}

        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Who We Are
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-white max-w-3xl leading-relaxed mb-6 md:mb-8">
            We are a leading IT consultancy firm specializing in digital transformation, cloud solutions, and enterprise software development. Our expert team delivers innovative technology solutions that drive business growth.
          </p>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-md transition-colors duration-300 hover:cursor-pointer inline-block text-sm md:text-base">
            Learn More
          </Link>
        </div>
      </div>

      {/* Statistics Cards */}
      <div ref={statsRef} className="max-w-6xl mx-auto px-8 mt-4 md:-mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {/* Projects Delivered */}
          <div className="clip-card bg-orange-500 rounded-lg p-4 md:p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{counters.projects.toLocaleString()}+</div>
            <div className="text-xs md:text-lg opacity-90">Projects Delivered</div>
          </div>

          {/* Clients Served */}
          <div className="clip-card bg-orange-500 rounded-lg p-4 md:p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{counters.clients.toLocaleString()}+</div>
            <div className="text-xs md:text-lg opacity-90">Clients Served</div>
          </div>

          {/* Average NPS */}
          <div className="clip-card bg-orange-500 rounded-lg p-4 md:p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{counters.nps}+</div>
            <div className="text-xs md:text-lg opacity-90">Average NPS</div>
          </div>

          {/* Countries Served */}
          <div className="clip-card bg-orange-500 rounded-lg p-4 md:p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{counters.countries}+</div>
            <div className="text-xs md:text-lg opacity-90">Countries Served</div>
          </div>
        </div>
      </div>
    </div>
  );
}
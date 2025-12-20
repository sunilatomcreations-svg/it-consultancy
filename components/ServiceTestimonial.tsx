"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ServiceTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Engaging with TechNova IT Consultancy has been a game-changer for us. Their team took the time to deeply understand our legacy infrastructure and future growth plans, then delivered a scalable roadmap that aligned perfectly with our business goals. ",
      author: "Anjali Mehra",
      position: "CTO, TechNova Solutions",
      image: "/testimonials/anjali.jpg"
    },
    {
      id: 2,
      quote: "Working with this consultancy transformed our entire approach to technology. Their innovative solutions and dedicated support helped us achieve remarkable growth and efficiency improvements across all our operations.",
      author: "Sarah Johnson",
      position: "CEO, Innovation Labs",
      image: "/testimonials/sarah.jpg"
    },
    {
      id: 3,
      quote: "The level of expertise and professionalism displayed by their team exceeded our expectations. They delivered complex solutions on time and within budget while maintaining excellent communication throughout the process.",
      author: "Michael Chen",
      position: "Director of IT, Global Corp",
      image: "/testimonials/michael.jpg"
    },
    {
      id: 4,
      quote: "Their strategic guidance and technical implementation have been instrumental in our digital transformation journey. The results speak for themselves - improved efficiency, reduced costs, and enhanced customer satisfaction.",
      author: "Emily Rodriguez",
      position: "VP of Operations, Future Tech",
      image: "/testimonials/emily.jpg"
    },
    {
      id: 5,
      quote: "Their strategic guidance and technical implementation have been instrumental in our digital transformation journey. The results speak for themselves - improved efficiency, reduced costs, and enhanced customer satisfaction.",
      author: "Emily Rodriguez",
      position: "VP of Operations, Future Tech",
      image: "/testimonials/emily.jpg"
    },
    {
      id: 6,
      quote: "Their strategic guidance and technical implementation have been instrumental in our digital transformation journey. The results speak for themselves - improved efficiency, reduced costs, and enhanced customer satisfaction.",
      author: "Emily Rodriguez",
      position: "VP of Operations, Future Tech",
      image: "/testimonials/emily.jpg"
    }
  ];

  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // For mobile
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileAnimating, setMobileAnimating] = useState(false);
  const [mobileDirection, setMobileDirection] = useState<'next' | 'prev' | null>(null);

  const totalCards = testimonials.length;
  const anglePerCard = 360 / totalCards;
  

  const handleMove = (direction: 'next' | 'prev') => {
    if (isAnimating) return;

    setIsAnimating(true);

    // For mobile
    setMobileDirection(direction);
    setMobileAnimating(true);

    const newRotation = direction === 'next'
      ? rotation - anglePerCard
      : rotation + anglePerCard;

    setRotation(newRotation);

    setTimeout(() => {
      setIsAnimating(false);
      setMobileAnimating(false);
      setMobileDirection(null);
      setMobileIndex(prev => direction === 'next'
        ? (prev + 1) % totalCards
        : (prev - 1 + totalCards) % totalCards
      );
    }, 600);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) handleMove('next');
    }, 5000);
    return () => clearInterval(timer);
  }, [rotation, isAnimating]);

  const isXL = typeof window !== 'undefined' && window.innerWidth >= 1280;

  // Calculate card position on the orbit
  const getCardStyle = (index: number) => {
    const angle = (index * anglePerCard + rotation) * (Math.PI / 180);
    const radiusX = 500; // Horizontal radius of ellipse
    const radiusZ = 200; // Depth radius

    const x = Math.sin(angle) * radiusX;
    const z = Math.cos(angle) * radiusZ;

    // Normalize z to 0-1 range for scaling and opacity
    const normalizedZ = (z + radiusZ) / (radiusZ * 2);
    const scale = 0.6 + (normalizedZ * 0.5); // Scale from 0.6 to 1.1
    const opacity = 0.3 + (normalizedZ * 0.7); // Opacity from 0.3 to 1
    const zIndex = Math.round(normalizedZ * 100);

    // Only show cards in front half of orbit (z > -50)
    const isVisible = z > 50;

    // Center card detection (closest to front)
    const isCenter = z > 150;

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      opacity: isVisible ? opacity : 0,
      zIndex: zIndex,
      isCenter,
      isVisible,
      normalizedZ
    };
  };

  return (
    <section className="py-10 px-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div
  className="max-w-7xl mx-auto rounded-3xl  py-10 lg:py-14"
  style={{ backgroundColor: '#5A1E44' }}
>
        <h2 className="text-3xl lg:text-4xl text-center mb-8 text-white font-medium">
          What Our Clients Say About Us
        </h2>

        {/* Large screen 3D orbital carousel */}
        <div
          className="hidden sm:flex items-center justify-center relative overflow-hidden"
          style={{
            height: '540px',
            perspective: '1200px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              width: '700px',
              height: '320px'
            }}
          >
            {testimonials.map((testimonial, index) => {
              const cardStyle = getCardStyle(index);

              return (
                <div
                  key={testimonial.id}
                  className="absolute rounded-2xl transition-all duration-600 ease-in-out overflow-hidden magic-clip-responsive"
                  style={{
maxWidth: cardStyle.isCenter
  ? (isXL ? '520px' : '490px')
  : cardStyle.normalizedZ > 0.6
    ? '420px'   // 1st & 2nd cards
    : '260px',  // far cards
                   height: isXL ? '380px' : '320px',
                    left: '50%',
                 marginLeft: cardStyle.isCenter
  ? isXL ? '-240px' : '-240px'
  : cardStyle.normalizedZ < 0.55
    ? '-80px'   // ✅ third card → move right
    : '-250px',  // others stay left

  
                    transform: cardStyle.transform,
                    opacity: cardStyle.opacity,
                    zIndex: cardStyle.zIndex,
                    backgroundColor: cardStyle.isCenter ? '#FBF7F3' : '#D7BBC6',
                    pointerEvents: cardStyle.isVisible ? 'auto' : 'none',
                  }}
                >
                  {cardStyle.isCenter ? (
                    <div className="h-full p-4 md:p-6 lg:p-8 flex flex-col justify-between">
                      <p className="text-gray-800 text-sm md:text-base lg:text-lg leading-relaxed line-clamp-5">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-3 md:gap-4 mt-3 md:mt-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 relative rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={56}
                            height={56}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-gray-900 font-semibold text-xs md:text-sm lg:text-base">{testimonial.author}</div>
                          <div className="text-gray-600 text-xs md:text-sm">{testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full p-3 md:p-4 lg:p-5">
                      <p className="text-gray-800 text-xs md:text-sm line-clamp-8">
                        {testimonial.quote.slice(0, 150)}...
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Small screen - Same orbital carousel as desktop */}
        <div
          className="sm:hidden flex items-center justify-center relative overflow-hidden"
          style={{
            height: '400px',
            perspective: '1200px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              width: '100%',
              maxWidth: '500px',
              height: '320px'
            }}
          >
            {testimonials.map((testimonial, index) => {
              const cardStyle = getCardStyle(index);

              return (
                <div
                  key={testimonial.id}
                  className="absolute rounded-2xl transition-all duration-600 ease-in-out overflow-hidden magic-clip-responsive"
                  style={{
                    width: cardStyle.isCenter ? '60%' : '50%',
                    maxWidth: cardStyle.isCenter ? '300px' : '200px',
                    height: '320px',
                    left: '50%',
                    marginLeft: cardStyle.isCenter ? '-30%' : '-25%',
                    transform: cardStyle.transform,
                    opacity: cardStyle.opacity,
                    zIndex: cardStyle.zIndex,
                    backgroundColor: cardStyle.isCenter ? '#FBF7F3' : '#D7BBC6',
                    pointerEvents: cardStyle.isVisible ? 'auto' : 'none',
                  }}
                >
                  {cardStyle.isCenter ? (
                    <div className="h-full p-3 sm:p-4 md:p-5 flex flex-col justify-between">
                      <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-5 md:line-clamp-6">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-3 md:mt-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 relative rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-gray-900 font-semibold text-xs sm:text-sm">{testimonial.author}</div>
                          <div className="text-gray-600 text-xs">{testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full p-4">
                      <p className="text-gray-800 text-xs line-clamp-8">
                        {testimonial.quote.slice(0, 120)}...
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-3">
          <button
            onClick={() => handleMove('prev')}
            aria-label="Previous"
            className="bg-orange-500 text-white w-10 h-10 rounded-md shadow hover:bg-orange-600 cursor-pointer"
          >
            ‹
          </button>
          <button
            onClick={() => handleMove('next')}
            aria-label="Next"
            className="bg-orange-500 text-white w-10 h-10 rounded-md shadow hover:bg-orange-600 cursor-pointer"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonial;

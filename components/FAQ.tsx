'use client';
import React, { useState, useRef, useEffect } from 'react';
import { buildPathMedium } from '../lib/clipPath';
import Image from 'next/image';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What IT consulting services does your company provide?",
      answer: "We provide comprehensive IT consulting services including digital transformation, cloud solutions, software development, cybersecurity, DevOps, data analytics, and enterprise architecture. Our team of experts helps businesses leverage technology to achieve their strategic goals and improve operational efficiency.",
      icon: ">"
    },
    {
      question: "How long does a typical IT consulting project take?",
      answer: "Project timelines vary based on scope and complexity. Small projects may take 2-4 weeks, while enterprise-level transformations can span 6-12 months. We provide detailed project plans with clear milestones and timelines during the initial consultation phase.",
      icon: ">"
    },
    {
      question: "How do you ensure data security during project execution?",
      answer: "Data security is our top priority. We implement industry-standard encryption, secure development practices, regular security audits, and comply with regulations like GDPR and ISO 27001. All team members sign NDAs and we use secure collaboration tools throughout the project lifecycle.",
      icon: ">"
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-project support packages including maintenance, monitoring, updates, and technical assistance. Our support plans are flexible and can be customized based on your specific needs and budget.",
      icon: ">"
    },
    {
      question: "Can you customize solutions for specific business needs?",
      answer: "Absolutely! We specialize in creating tailored solutions that address your unique business challenges. Our approach involves thorough analysis of your requirements, industry best practices, and custom development to ensure the solution fits perfectly with your business processes.",
      icon: ">"
    },
    {
      question: "How do you approach digital transformation for enterprises?",
      answer: "Our digital transformation approach includes assessment of current systems, strategy development, technology roadmap creation, phased implementation, change management, and continuous optimization. We focus on minimizing disruption while maximizing business value.",
      icon: ">"
    },
    {
      question: "What industries do you have experience working with?",
      answer: "We have extensive experience across multiple industries including healthcare, finance, retail, manufacturing, education, and technology. Our diverse portfolio allows us to bring cross-industry insights and best practices to every project.",
      icon: ">"
    },
    {
      question: "What makes your IT consultancy different from others?",
      answer: "Our differentiators include deep technical expertise, proven track record with 22,000+ projects, client-centric approach, transparent communication, and commitment to delivering measurable business outcomes. We combine innovation with practical solutions that drive real results.",
      icon: ">"
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>('.clip-card'));

    const measureOnce = (el: HTMLElement, attempts = 0) => {
      const rect = el.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      if ((W < 10 || H < 10) && attempts < 8) {
        requestAnimationFrame(() => measureOnce(el, attempts + 1));
        return;
      }
      const p = buildPathMedium(W || el.clientWidth || el.offsetWidth, H || el.clientHeight || el.offsetHeight);
      el.style.clipPath = p;
      // @ts-ignore
      el.style.webkitClipPath = p;
    };

    els.forEach((el) => measureOnce(el));

    const observers: ResizeObserver[] = [];
    if ((window as any).ResizeObserver) {
      els.forEach((el) => {
        const ro = new (window as any).ResizeObserver(() => measureOnce(el));
        ro.observe(el);
        observers.push(ro);
      });
    } else {
      const onResize = () => els.forEach((el) => measureOnce(el));
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    return () => observers.forEach((ro) => ro.disconnect());
  }, []);

  return (
    <section ref={rootRef} className="py-16 px-4 bg-[#F6F1EB]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 
          className="text-center text-gray-900 mb-6 md:mb-12 text-xl md:text-4xl"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: '500',
            lineHeight: '1.2'
          }}
        >
          Your Questions, Our Answers
        </h2>

        {/* FAQ Grid */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6">
          {/* Left Column */}
          <div className="flex-1 space-y-3 md:space-y-6">
            {faqs.filter((_, index) => index % 2 === 0).map((faq, originalIndex) => {
              const index = originalIndex * 2;
              return (
                <div 
                  key={index}
                  className="rounded-lg overflow-hidden clip-card"
                >
                  <div 
                    className="p-3 md:p-6 text-white cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#F97316' }}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-start gap-2 md:gap-4">
                        <div 
                        className="rounded flex items-center justify-center flex-shrink-0 mt-8 md:mt-1 ml-2 md:ml-4 transition-transform duration-300"
                        style={{ 
                          backgroundColor: '#F97316',
                          width: '24px',
                          height: '24px',
                          transform: expandedIndex === index ? 'rotate(90deg)' : 'rotate(0deg)'
                        }}
                      >
                        <Image
                          src="/home_page_assets/arrow-right.png"
                          alt="Arrow"
                          width={24}
                          height={24}
                          className="object-contain"
                          style={{ 
                            opacity: 1
                          }}
                        />
                      </div>
                      <p className="text-white font-medium leading-relaxed text-sm md:text-base" style={{ fontSize: 'inherit' }}>
                        {faq.question}
                      </p>
                    </div>
                  </div>
                  
                  {/* Answer Section - Slides down */}
                  <div 
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: expandedIndex === index ? '500px' : '0px',
                      opacity: expandedIndex === index ? 1 : 0
                    }}
                  >
                    <div 
                      className="p-3 md:p-6 text-gray-800"
                      style={{ 
                        backgroundColor: '#FFF7ED',
                        borderTop: expandedIndex === index ? '1px solid #FDBA74' : 'none'
                      }}
                    >
                      <p 
                        className="leading-relaxed text-sm md:text-base"
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          lineHeight: '1.6'
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-3 md:space-y-6">
            {faqs.filter((_, index) => index % 2 === 1).map((faq, originalIndex) => {
              const index = originalIndex * 2 + 1;
              return (
                <div 
                  key={index}
                  className="rounded-lg overflow-hidden clip-card"
                >
                  <div 
                    className="p-3 md:p-6 text-white cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#F97316' }}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-start gap-2 md:gap-4">
                        <div 
                        className="rounded flex items-center justify-center flex-shrink-0 mt-8 md:mt-1 ml-2 md:ml-4 transition-transform duration-300"
                        style={{ 
                          backgroundColor: '#F97316',
                          width: '24px',
                          height: '24px',
                          transform: expandedIndex === index ? 'rotate(90deg)' : 'rotate(0deg)'
                        }}
                      >
                        <Image
                          src="/home_page_assets/arrow-right.png"
                          alt="Arrow"
                          width={24}
                          height={24}
                          className="object-contain"
                          style={{ 
                            opacity: 1
                          }}
                        />
                      </div>
                      <p className="text-white font-medium leading-relaxed text-sm md:text-base" style={{ fontSize: 'inherit' }}>
                        {faq.question}
                      </p>
                    </div>
                  </div>
                  
                  {/* Answer Section - Slides down */}
                  <div 
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: expandedIndex === index ? '500px' : '0px',
                      opacity: expandedIndex === index ? 1 : 0
                    }}
                  >
                    <div 
                      className="p-3 md:p-6 text-gray-800"
                      style={{ 
                        backgroundColor: '#FFF7ED',
                        borderTop: expandedIndex === index ? '1px solid #FDBA74' : 'none'
                      }}
                    >
                      <p 
                        className="leading-relaxed text-sm md:text-base"
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          lineHeight: '1.6'
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
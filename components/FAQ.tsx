import React from 'react';
import Image from 'next/image';

const FAQ = () => {
  const faqs = [
    {
      question: "What IT consulting services does your company provide?",
      icon: ">"
    },
    {
      question: "How long does a typical IT consulting project take?",
      icon: ">"
    },
    {
      question: "How do you ensure data security during project execution?",
      icon: ">"
    },
    {
      question: "Do you offer ongoing support after project completion?",
      icon: ">"
    },
    {
      question: "Can you customize solutions for specific business needs?",
      icon: ">"
    },
    {
      question: "How do you approach digital transformation for enterprises?",
      icon: ">"
    },
    {
      question: "What industries do you have experience working with?",
      icon: ">"
    },
    {
      question: "What makes your IT consultancy different from others?",
      icon: ">"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 
          className="text-center text-gray-900 mb-12"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '40px',
            fontWeight: '500',
            lineHeight: '1.2'
          }}
        >
          Your Questions, Our Answers
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg text-white cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#F97316' }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="rounded flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ 
                    backgroundColor: '#F97316',
                    width: '34.07594680786133px',
                    height: '34.07594680786133px'
                  }}
                >
                  <Image
                    src="/home_page_assets/arrow-right.png"
                    alt="Arrow"
                    width={34.07594680786133}
                    height={34.07594680786133}
                    className="object-contain"
                    style={{ 
                      transform: 'rotate(0deg)',
                      opacity: 1
                    }}
                  />
                </div>
                <p className="text-white font-medium leading-relaxed" style={{ fontSize: '22.4px' }}>
                  {faq.question}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
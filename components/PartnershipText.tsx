import React from 'react';
import Image from 'next/image';

const PartnershipText = () => {
  // Sample logo data - replace with actual logos (11 logos = 4/4/3 layout on mobile)
  const logos = [
  "https://img.icons8.com/color/96/microsoft.png",
  "https://img.icons8.com/color/96/google-logo.png",
  "https://img.icons8.com/color/96/amazon-web-services.png",
  "https://img.icons8.com/color/96/oracle-logo.png",
  "https://img.icons8.com/color/96/salesforce.png",
 
  "https://img.icons8.com/color/96/slack-new.png",
  "https://img.icons8.com/color/96/dropbox.png",

  // Added below to make it 25
  "https://img.icons8.com/color/96/adobe-creative-cloud.png",
  "https://img.icons8.com/color/96/notion.png",
  "https://img.icons8.com/color/96/figma--v1.png",
  "https://img.icons8.com/color/96/bitbucket.png",
  "https://img.icons8.com/color/96/trello.png",
  "https://img.icons8.com/color/96/hubspot.png",
  "https://img.icons8.com/color/96/stripe.png",
  "https://img.icons8.com/color/96/shopify.png",
  "https://img.icons8.com/color/96/t-mobile.png",
  "https://img.icons8.com/color/96/cisco.png"
]
;

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8" style={{ backgroundColor: '#F6F1EB' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 
          className="text-gray-900 mb-8 md:mb-10 lg:mb-12 select-none text-xl md:text-3xl lg:text-5xl"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: '400',
            lineHeight: '1.2'
          }}
        >
Our partnership has redefined the way you<br className="hidden lg:block" /> experience these global leaders.        </h2>

        {/* Logo Showcase */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {/* Row 1 - 4 logos */}
          <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-16 flex-wrap">
            {logos.slice(0, 4).map((logo, index) => (
              <div key={`row1-${index}`} className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={80}
                  height={40}
                  className="w-16 md:w-24 lg:w-32 h-auto object-contain opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - 4 logos */}
          <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
            {logos.slice(4, 8).map((logo, index) => (
              <div key={`row2-${index}`} className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 5}`}
                  width={80}
                  height={40}
                  className="w-16 md:w-24 lg:w-32 h-auto object-contain opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Row 3 - 3 logos */}
          <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
            {logos.slice(8, 11).map((logo, index) => (
              <div key={`row3-${index}`} className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 9}`}
                  width={80}
                  height={40}
                  className="w-16 md:w-24 lg:w-32 h-auto object-contain opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipText;
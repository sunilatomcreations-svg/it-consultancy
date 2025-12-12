import React from 'react';

const Industriesanimations = () => {
  return (
    <div className="w-full px-2 md:px-4 py-4 md:py-8 bg-[#F6F1EB]">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <h2 
          className="text-center text-gray-900 text-2xl md:text-4xl lg:text-4xl mb-8 md:mb-16"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: '500',
            lineHeight: '1.2'
          }}
        >
          Industries We Serve
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full">
        
        {/* Column 1 - 4 divs */}
        <div className="flex flex-col space-y-2 md:space-y-4">
          {/* Sports Industry */}
          <div className="relative rounded-lg shadow-md border hover:shadow-lg transition-shadow overflow-hidden h-[175px] md:h-[350px]">
            <img
              src="https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Basketball player in action"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
              <div>
                <h3 className="text-white text-lg md:text-2xl leading-tight md:leading-normal font-bold mb-2">Sports & Gaming</h3>
                <p className="hidden md:block text-white/90 text-sm md:text-base">Revolutionizing fan engagement through innovative digital platforms and real-time analytics for sports organizations worldwide.</p>
              </div>
            </div>
          </div>
          
          {/* Sports Quote */}
          <div className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow p-2 md:p-4 flex items-center justify-center text-center h-[80px] md:h-[130px]">
              <div className="block md:hidden">
                <blockquote className="text-gray-700 italic text-sm" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '64%'}}>
                  "Analytics lifted our win rate 35% and engagement 200%."
                </blockquote>
              </div>
              <blockquote className="hidden md:block text-gray-700 italic text-base lg:text-[85%]">
              "Their sports analytics platform transformed our game strategy, increasing our win rate by 35% and fan engagement by 200% through data-driven insights."
            </blockquote>
          </div>
          
          {/* Social Networking */}
          <div className="relative rounded-lg shadow-md border hover:shadow-lg transition-shadow overflow-hidden h-[255px] md:h-[510px]">
            <img
              src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="People collaborating on social media"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
              <div>
                <h3 className="text-white text-lg md:text-2xl leading-tight md:leading-normal font-bold mb-2">Social Networking</h3>
                <p className="hidden md:block text-white/90 text-sm md:text-base">Building next-generation social platforms that connect communities, foster meaningful interactions, and drive user growth through intelligent algorithms.</p>
              </div>
            </div>
          </div>
          
          {/* Social Networking Quote */}
          <div className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow p-2 md:p-4 flex items-center justify-center text-center h-[80px] md:h-[130px]">
              <div className="block md:hidden">
                <blockquote className="text-gray-700 italic text-sm" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '64%'}}>
                  "User retention +150%; authentic community connections."
                </blockquote>
              </div>
              <blockquote className="hidden md:block text-gray-700 italic text-base lg:text-[85%]">
              "The social platform they built increased our user retention by 150% and created authentic community connections that our users truly value and engage with daily."
            </blockquote>
          </div>
        </div>

        {/* Column 2 - 3 divs */}
        <div className="flex flex-col space-y-2 md:space-y-4">
          {/* Fitness Industry */}
          <div className="relative rounded-lg shadow-md border hover:shadow-lg transition-shadow overflow-hidden h-[260px] md:h-[495px]">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Fitness and wellness equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
              <div>
                <h3 className="text-white text-lg md:text-2xl leading-tight md:leading-normal font-bold mb-2">Fitness & Wellness</h3>
                <p className="hidden md:block text-white/90 text-sm md:text-base">Developing comprehensive fitness apps and platforms that motivate users, track progress, and create personalized wellness journeys for optimal health outcomes.</p>
              </div>
            </div>
          </div>
          
          {/* Fitness Quote */}
          <div className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow p-2 md:p-4 flex items-center justify-center text-center h-[80px] md:h-[130px]">
              <div className="block md:hidden">
                <blockquote className="text-gray-700 italic text-sm" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '64%'}}>
                  "300% user growth in 8 months; 95% program completion."
                </blockquote>
              </div>
              <blockquote className="hidden md:block text-gray-700 italic text-base lg:text-[85%]">
              "Their fitness platform helped us achieve 300% user growth in just 8 months, with users completing 95% of their personalized workout programs consistently."
            </blockquote>
          </div>
          
          {/* Events Industry */}
          <div className="relative rounded-lg shadow-md border hover:shadow-lg transition-shadow overflow-hidden h-[256px] md:h-[512px]">
            <img
              src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Corporate event with audience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
              <div>
                <h3 className="text-white text-lg md:text-2xl leading-tight md:leading-normal font-bold mb-2">Events & Entertainment</h3>
                <p className="hidden md:block text-white/90 text-sm md:text-base">Creating seamless event management solutions and entertainment platforms that deliver unforgettable experiences through innovative technology and user-centric design.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 - 4 divs */}
        <div className="flex flex-col space-y-2 md:space-y-4">
          {/* Agriculture Industry */}
          <div className="relative rounded-lg shadow-md border hover:shadow-lg transition-shadow overflow-hidden h-[130px] md:h-[260px]">
            <img
              src="https://images.pexels.com/photos/226587/pexels-photo-226587.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern agricultural technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
              <div>
                <h3 className="text-white text-lg md:text-xl leading-tight md:leading-normal font-bold mb-1">Agriculture & AgTech</h3>
                <p className="hidden md:block text-white/90 text-sm">Smart farming solutions leveraging IoT, AI, and data analytics for sustainable agriculture.</p>
              </div>
            </div>
          </div>
          
          {/* Agriculture Quote */}
          <div className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow p-2 md:p-4 flex items-center justify-center text-center h-[80px] md:h-[130px]">
              <div className="block md:hidden">
                <blockquote className="text-gray-700 italic text-sm" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '64%'}}>
                  "Crop yields +40% and water use -30% with precision AgTech."
                </blockquote>
              </div>
              <blockquote className="hidden md:block text-gray-700 italic text-base lg:text-[85%]">
              "Their precision agriculture platform increased our crop yields by 40% while reducing water usage by 30% through intelligent irrigation systems."
            </blockquote>
          </div>
          
          {/* Restaurant Industry */}
          <div className="relative rounded-lg shadow-md border hover:shadow-lg transition-shadow overflow-hidden h-[300px] md:h-[600px]">
            <img
              src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern restaurant interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
              <div>
                <h3 className="text-white text-lg md:text-2xl leading-tight md:leading-normal font-bold mb-2">Restaurant & Hospitality</h3>
                <p className="hidden md:block text-white/90 text-sm md:text-base">Comprehensive restaurant management systems, online ordering platforms, and hospitality solutions that streamline operations and enhance customer experiences across the food service industry.</p>
              </div>
            </div>
          </div>
          
          {/* Restaurant Quote */}
          <div className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow p-2 md:p-4 flex items-center justify-center text-center h-[80px] md:h-[130px]">
              <div className="block md:hidden">
                <blockquote className="text-gray-700 italic text-sm" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '64%'}}>
                  "Efficiency +60%; customer rating rose to 4.7/5."
                </blockquote>
              </div>
              <blockquote className="hidden md:block text-gray-700 italic text-base lg:text-[85%]">
              "The restaurant management system they developed increased our efficiency by 60% and improved customer satisfaction scores from 3.8 to 4.7 out of 5."
            </blockquote>
          </div>
        </div>

        {/* Column 4 - 4 divs */}
        <div className="flex flex-col space-y-2 md:space-y-4">
          {/* SaaS Industry */}
          <div className="relative rounded-lg shadow-md border hover:shadow-lg transition-shadow overflow-hidden h-[300px] md:h-[600px]">
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern office with technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
              <div>
                <h3 className="text-white text-lg md:text-2xl leading-tight md:leading-normal font-bold mb-2">SaaS & Enterprise</h3>
                <p className="hidden md:block text-white/90 text-sm md:text-base">Building scalable software-as-a-service platforms and enterprise solutions that drive digital transformation, improve operational efficiency, and deliver measurable business value across industries.</p>
              </div>
            </div>
          </div>
          
          {/* SaaS Quote */}
          <div className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow p-2 md:p-4 flex items-center justify-center text-center h-[80px] md:h-[130px]">
              <div className="block md:hidden">
                <blockquote className="text-gray-700 italic text-sm" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '64%'}}>
                  "Operational costs -45%; productivity increased company-wide."
                </blockquote>
              </div>
              <blockquote className="hidden md:block text-gray-700 italic text-base lg:text-[85%]">
              "Their enterprise SaaS solution reduced our operational costs by 45% while increasing productivity across our 500+ employee organization through seamless automation."
            </blockquote>
          </div>
          
          {/* Entertainment Industry */}
          <div className="relative rounded-lg shadow-md border hover:shadow-lg transition-shadow overflow-hidden h-[130px] md:h-[260px]">
            <img
              src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Entertainment and media production"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
              <div>
                <h3 className="text-white text-lg md:text-xl leading-tight md:leading-normal font-bold mb-1">Entertainment & Media</h3>
                <p className="hidden md:block text-white/90 text-sm">Streaming platforms, content management systems, and digital entertainment solutions.</p>
              </div>
            </div>
          </div>
          
          {/* Entertainment Quote */}
          <div className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow p-2 md:p-4 flex items-center justify-center text-center h-[80px] md:h-[130px]">
              <div className="block md:hidden">
                <blockquote className="text-gray-700 italic text-sm" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '64%'}}>
                  "2M users year-one; 99.9% uptime and immersive experiences."
                </blockquote>
              </div>
              <blockquote className="hidden md:block text-gray-700 italic text-base lg:text-[85%]">
              "The streaming platform they built reached 2 million users in the first year, delivering 99.9% uptime and creating immersive entertainment experiences worldwide."
            </blockquote>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Industriesanimations;

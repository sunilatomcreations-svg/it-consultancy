import React from 'react';

const Gallery = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-6 mx-auto">     

      {/* First 4 images as one grid */}
      <div className="relative">
        {/* First row: images 1 and 2 */}
        <div className="flex gap-3 md:gap-6 mb-3 md:mb-6">
          <div className="clip-card relative w-[120px] md:w-[242px] h-[124px] md:h-[248.6px] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Professional man in shallow focus"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />  
          </div>

          <div className="clip-card relative w-[242px] md:w-[485.2px] h-[124px] md:h-[248.6px] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional man in white shirt"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Second row: images 3 and 4 */}
        <div className="flex gap-3 md:gap-6">
          <div className="clip-card relative w-[242px] md:w-[485.2px] h-[124px] md:h-[248.6px] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional woman working at desk"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"        
            />
          </div>

          <div className="clip-card relative w-[120px] md:w-[242px] h-[124px] md:h-[248.6px] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Woman in white blazer holding tablet"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Images 5 and 6 as another grid */}
      <div className="relative ">
        <div className="flex gap-3 md:gap-6">
          <div className="clip-card relative bg-gray-200 rounded-lg overflow-hidden w-[242px] md:w-[485.2px] h-[260px] md:h-[520.33px]">
            <img
              src="https://images.pexels.com/photos/35150128/pexels-photo-35150128.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Confident woman in white shirt smiling"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="clip-card relative bg-gray-200 rounded-lg overflow-hidden w-[120px] md:w-[185.2px] h-[260px] md:h-[520.33px]">
            <img
              src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="People looking at laptop computer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

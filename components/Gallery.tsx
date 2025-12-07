import React from 'react';

const Gallery = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-6 mx-auto">     

      {/* First 4 images as one grid */}
      <div className="relative">
        {/* First row: images 1 and 2 */}
        <div className="flex gap-3 md:gap-6 mb-3 md:mb-6">
          <div className="relative w-[120px] md:w-[242px] h-[124px] md:h-[248.6px] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/gallery/image1.jpg"
              alt="Gallery Image 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />  
          </div>

          <div className="relative w-[242px] md:w-[485.2px] h-[124px] md:h-[248.6px] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/gallery/image2.jpg"
              alt="Gallery Image 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Second row: images 3 and 4 */}
        <div className="flex gap-3 md:gap-6">
          <div className="relative w-[242px] md:w-[485.2px] h-[124px] md:h-[248.6px] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/gallery/image3.jpg"
              alt="Gallery Image 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"        
            />
          </div>

          <div className="relative w-[120px] md:w-[242px] h-[124px] md:h-[248.6px] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/gallery/image4.jpg"
              alt="Gallery Image 4"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Images 5 and 6 as another grid */}
      <div className="relative ">
        <div className="flex gap-3 md:gap-6">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden w-[242px] md:w-[485.2px] h-[260px] md:h-[520.33px]">
            <img
              src="/gallery/image5.jpg"
              alt="Gallery Image 5"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="relative bg-gray-200 rounded-lg overflow-hidden w-[120px] md:w-[185.2px] h-[260px] md:h-[520.33px]">
            <img
              src="/gallery/image6.jpg"
              alt="Gallery Image 6"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

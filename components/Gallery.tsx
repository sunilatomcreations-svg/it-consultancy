import React from 'react';

const Gallery = () => {
  return (
    <div className="relative flex gap-6 mx-auto">     

      {/* First 4 images as one grid */}
      <div className="relative">
        {/* First row: images 1 and 2 */}
        <div className="flex gap-6 mb-6">
          <div className="relative w-[242] h-[248.6] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/gallery/image1.jpg"
              alt="Gallery Image 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />  
          </div>

          <div className="relative w-[485.2] h-[248.6] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/gallery/image2.jpg"
              alt="Gallery Image 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Second row: images 3 and 4 */}
        <div className="flex gap-6">
          <div className="relative w-[485.2] h-[248.6] bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/gallery/image3.jpg"
              alt="Gallery Image 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"        
            />
          </div>

          <div className="relative w-[242] h-[248.6] bg-gray-200 rounded-lg overflow-hidden">
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
        <div className="flex gap-6">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden" style={{ width: '485.2px', height: '520.33px' }}>
            <img
              src="/gallery/image5.jpg"
              alt="Gallery Image 5"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="relative bg-gray-200 rounded-lg overflow-hidden" style={{ width: '185.2px', height: '520.33px' }}>
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

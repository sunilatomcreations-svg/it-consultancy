'use client';
import Link from 'next/link';

export default function WhoWeAreBanner() {
  return (
    <div className="relative w-full">
      {/* Hero Banner Section */}
      <div 
        className="relative h-[550px] bg-cover bg-center bg-no-repeat rounded-lg mx-8 mb-16 overflow-hidden"
        style={{
          backgroundImage: "url('/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"  style={{
          backgroundImage: "url('/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png')"
        }}></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl leading-relaxed mb-8">
            We are a leading IT consultancy firm specializing in digital transformation, cloud solutions, and enterprise software development. Our expert team delivers innovative technology solutions that drive business growth.
          </p>
          <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 hover:cursor-pointer inline-block">
            Learn More
          </Link>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="max-w-6xl mx-auto px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Projects Delivered */}
          <div className="bg-orange-500 rounded-lg p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold mb-2">22,000+</div>
            <div className="text-lg opacity-90">Projects Delivered</div>
          </div>

          {/* Clients Served */}
          <div className="bg-orange-500 rounded-lg p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold mb-2">8,000+</div>
            <div className="text-lg opacity-90">Clients Served</div>
          </div>

          {/* Average NPS */}
          <div className="bg-orange-500 rounded-lg p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold mb-2">9+</div>
            <div className="text-lg opacity-90">Average NPS</div>
          </div>

          {/* Countries Served */}
          <div className="bg-orange-500 rounded-lg p-8 text-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold mb-2">23+</div>
            <div className="text-lg opacity-90">Countries Served</div>
          </div>
        </div>
      </div>
    </div>
  );
}
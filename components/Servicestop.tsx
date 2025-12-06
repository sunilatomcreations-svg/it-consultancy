"use client";
import React from 'react';

const ServicesTop = () => {
    return (    
        <section className="py-2 px-4" style={{ backgroundColor: '#F6F1EB' }}>
            <div className="max-w-9xl mx-auto text-center">
                {/* Three divs with images in the same line */}
                <div className="flex justify-between items-center mb-8 gap-6">
                    <div style={{ width: '307px', height: '703px' }}>
                        <img 
                            src="/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png" 
                            alt="Service 1"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    
                    <div style={{ width: '1015px', height: '703px' }}>
                        <img 
                            src="/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png" 
                            alt="Service 2"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    
                    <div style={{ width: '307px', height: '703px' }}>
                        <img 
                            src="/home_page_assets/1e487d84c290c40e1af587b4ecb02a2f7d915255 (1).png" 
                            alt="Service 3"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
                
                <div style={{ marginLeft: '120px', marginRight: '120px',padding: '60px' }}>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                        Discover | Develop | Deploy
                    </h1>
                </div>
            </div>
        </section>
    )
};

export default ServicesTop;
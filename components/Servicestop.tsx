"use client";
import React from 'react';

const ServicesTop = () => {
    return (    
        <section className="py-2 px-4" style={{ backgroundColor: '#F6F1EB' }}>
            <div className="max-w-9xl mx-auto text-center">
                {/* Three divs with images in the same line */}
                <div className="flex justify-between items-center mb-8 gap-6">
                    <div style={{ width: '307px', height: '703px' }} className="hidden md:block">
                        <img 
                            src="/pexels-brett-sayles-5408005.jpg" 
                            alt="Service 1"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                    
                    <div className="w-full md:w-auto md:flex-1 h-[400px] md:h-[703px] relative" style={{ maxWidth: '1015px' }}>
                        <img 
                            src="/pexels-ron-lach-9783812.jpg" 
                            alt="Service 2"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-blue-900/80 rounded-lg flex flex-col items-center justify-center text-white px-4 md:px-8">
                            <div className="max-w-3xl text-center space-y-3 md:space-y-6">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    Transforming Ideas Into
                                    <span className="block text-orange-400">Digital Solutions</span>
                                </h2>
                                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-light text-gray-200 leading-relaxed">
                                    Empowering businesses with cutting-edge technology and innovative IT services
                                </p>
                                <div className="flex flex-wrap gap-2 md:gap-4 justify-center pt-2 md:pt-4">
                                    <div className="px-2 py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                                        <span className="font-semibold text-orange-400 text-lg md:text-2xl">500+</span>
                                        <p className="text-xs md:text-sm text-gray-300">Projects</p>
                                    </div>
                                    <div className="px-2 py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                                        <span className="font-semibold text-orange-400 text-lg md:text-2xl">50+</span>
                                        <p className="text-xs md:text-sm text-gray-300">Experts</p>
                                    </div>
                                    <div className="px-2 py-1 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                                        <span className="font-semibold text-orange-400 text-lg md:text-2xl">24/7</span>
                                        <p className="text-xs md:text-sm text-gray-300">Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ width: '307px', height: '703px' }} className="hidden md:block">
                        <img 
                            src="/pexels-tara-winstead-8386437.jpg" 
                            alt="Service 3"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
                
                <div className="mx-4 md:mx-[120px] py-8 md:py-[60px] px-4 md:px-0">
                    <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-8" style={{ fontSize: 'clamp(1.25rem, 5vw, 3.75rem)' }}>
                        Discover | Develop | Deploy
                    </h1>
                </div>
            </div>
        </section>
    )
};

export default ServicesTop;